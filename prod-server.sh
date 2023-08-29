#!/bin/bash

docker compose down && sh volume.sh && STAGE=prod APP_PORT=3000 APP_DOMAIN=bilu.exp docker compose up --build -d
