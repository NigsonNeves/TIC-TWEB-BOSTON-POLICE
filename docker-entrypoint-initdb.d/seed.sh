#!/usr/bin/env bash

mongoimport -d reports -c crimes --type csv --file /docker-entrypoint-initdb.d/crimes.csv --headerline
