FROM node:18-alpine as deps

WORKDIR /app

RUN chmod -R 777 /app

RUN apk add bash dumb-init curl
RUN curl -s https://raw.githubusercontent.com/Intervox/node-webp/latest/bin/install_webp | bash
RUN apk add --no-cache --update libwebp-tools
RUN apk add --no-cache --update libpng-dev libjpeg-turbo-dev giflib-dev tiff-dev autoconf automake make gcc g++ wget python3
RUN wget --no-check-certificate https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.0.0.tar.gz && \
      tar -xvzf libwebp-1.0.0.tar.gz && \
      cd libwebp-1.0.0 && \
      ./configure && \
      make && \
      make install && \
      cd .. && \
      rm -rf libwebp-1.0.0 libwebp-1.0.0.tar.gz

RUN npm install -g @quasar/cli
RUN npm install --location=global pnpm

COPY --chown=node:node public ./public
COPY --chown=node:node src ./src
COPY --chown=node:node src-pwa ./src-pwa
COPY --chown=node:node src-capacitor ./src-capacitor
COPY --chown=node:node src-ssr ./src-ssr
COPY --chown=node:node .eslintrc.cjs .eslintignore ./
COPY --chown=node:node package.json .npmrc pnpm-lock.yaml ./
COPY --chown=node:node index.html ./
COPY --chown=node:node quasar.config.js ./
#COPY --chown=node:node server.js ./
COPY --chown=node:node postcss.config.cjs ./
COPY --chown=node:node tsconfig.json tsconfig.build.json ./

ARG PORT

EXPOSE ${PORT}

FROM deps as builder

USER root

RUN pnpm i

RUN mkdir /app/dist
RUN chown -R node:node /app/dist

RUN mkdir /app/.quasar
RUN chown -R node:node /app/.quasar

RUN chmod -R 777 /app/.quasar

COPY --chown=node:node .env ./

USER node

RUN pnpm build:ssr

FROM builder as prerelease

USER root

RUN rm -rf node_modules

RUN pnpm i

FROM node:18-alpine as prod

ENV NODE_ENV production

WORKDIR /app

RUN apk add bash dumb-init
RUN npm install -g pm2 serialize-javascript

COPY --from=prerelease --chown=node:node /app/package.json /app/pnpm-lock.yaml ./
COPY --from=prerelease --chown=node:node /app/node_modules/ ./node_modules/
COPY --from=prerelease --chown=node:node /app/dist/ ./dist/
COPY --from=prerelease --chown=node:node /app/.quasar/ ./.quasar/
COPY --from=prerelease --chown=node:node /app/src-pwa/ ./src-pwa/
COPY --from=prerelease --chown=node:node /app/src-ssr/ ./src-ssr/
COPY --from=prerelease --chown=node:node /app/public/ ./public/
COPY --chown=node:node .env ecosystem.config.js ./

USER node

ENTRYPOINT ["dumb-init", "pm2-runtime", "start", "ecosystem.config.js"]

ARG PORT

EXPOSE ${PORT}

FROM deps as dev

COPY --chown=node:node .env ./
# Run development server
ENTRYPOINT [ "dumb-init", "pnpm", "dev:ssr" ]

USER node
