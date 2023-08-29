#!/bin/bash

docker volume inspect bilu-front_app >/dev/null 2>&1 && docker volume rm bilu-front_app && echo "El volumen fue eliminado con éxito" || echo "El volumen no existe"
