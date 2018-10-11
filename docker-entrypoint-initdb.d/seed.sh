#!/usr/bin/env bash
mongoimport -d hapi -c crimes --type csv --file /docker-entrypoint-initdb.d/crimes.csv --headerline
