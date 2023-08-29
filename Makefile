install:
	@echo '************                               ************'
	@echo '************       Install packages        ************'
	@echo '************                               ************'
	pnpm install

up:
	@echo '************                               ************'
	@echo '************        UP CONTAINERS          ************'
	@echo '************                               ************'
	docker compose -f docker-compose.yml -f docker-compose-dev.yml up -d

down:
	@echo '************                               ************'
	@echo '************        DOWN CONTAINERS        ************'
	@echo '************                               ************'
	docker compose -f docker-compose.yml -f docker-compose-dev.yml down

stop:
	@echo '************                               ************'
	@echo '************        STOP CONTAINERS        ************'
	@echo '************                               ************'
	docker compose -f docker-compose.yml -f docker-compose-dev.yml stop

local_server:
	@echo '************                               ************'
	@echo '************        LOCAL INIT     	      ************'
	@echo '************                               ************'
	sh local-server.sh

dev:
	@echo '************                               ************'
	@echo '************        DEV INIT     	      ************'
	@echo '************                               ************'
	STAGE=dev APP_PORT=9150 docker compose -f docker-compose.yml -f docker-compose-dev.yml up --build -d

dev_server:
	@echo '************                               ************'
	@echo '************        DEV INIT     	      ************'
	@echo '************                               ************'
	sh dev-server.sh

prod:
	@echo '************                               ************'
	@echo '************        PROD INIT    	      ************'
	@echo '************                               ************'
	sh prod-server.sh

exec:
	@echo '************                               ************'
	@echo '************       Exec Bash API           ************'
	@echo '************                               ************'
	STAGE=${STAGE} docker compose exec api bash

sh:
	@echo '************                               ************'
	@echo '************        Exec SH NODE    	      ************'
	@echo '************                               ************'
	docker compose exec api sh

test:
	@echo '************                               ************'
	@echo '************        Exec APi TEST          ************'
	@echo '************                               ************'
	docker compose exec api pnpm test

ts_check:
	@echo '************                               ************'
	@echo '************       Exec API TS CHECK       ************'
	@echo '************                               ************'
	docker compose exec api pnpm ts-check

clean:
	docker compose down -v --remove-orphans
	docker ps -a | grep _run_ | awk '{print $$1}' | xargs -I {} docker rm {}
