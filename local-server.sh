#!/bin/bash

docker compose down && sh volume.sh && STAGE=prod APP_PORT=3000 docker compose up --build -d
