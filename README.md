# Bilu (bilu)

An app for buying experiences.  This project is build with the Quasar framework using Vue 3, Typescript, composition API, and a custom architecture based on the Hexagonal architecture and Clean Architecture. This projects creates a capacitor (V5) mobile application.

## Install the dependencies
First of all, make sure you have pnpm installed. If you don't, then install it with
```bash
npm install -g pnpm
```
then install the project dependencies
```bash
pnpm install
```
then install the git hooks
```bash
pnpm prepare
```

### Install and configure android studio. If you already have it, skip this step.
See [Preparation for Capacitor App](https://quasar.dev/quasar-cli-vite/developing-capacitor-apps/preparation)
Make sure you install the android 33, 32 and 31 SDK tools. You can do this by opening the android studio, going to the SDK manager and installing the SDK tools for the versions 33, 32 and 31.

### Start the app in capacitor development mode (hot-code reloading, error reporting, etc.)
```bash
pnpm dev:android
```

### To start the web app in development mode (hot-code reloading, error reporting, etc.) you can use
```bash
pnpm dev
```

### If you wish to lint the files you can use
```bash
pnpm lint:fix
```
### Create your key for signing the app
```bash
pnpm apk:key
```

### Build the app for production
```bash
pnpm build:android
```
then optimize the app (you must have your android SDK tools installed and your PATH variable configured to point to the android SDK tools)
```bash
pnpm apk:optimize
```
and sign the app (you must have your key already created and your PATH variable configured)
```bash
pnpm apk:release
```

### If you dont have the PATH variable configured, you can re-read this link:
[Preparation for Capacitor App](https://quasar.dev/quasar-cli-vite/developing-capacitor-apps/preparation)

### In case you are having this error:  'Please add rules to your `commitlint.config.js`' execute:
```bash
 npm i @commitlint/cli @commitlint/config-conventional
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
