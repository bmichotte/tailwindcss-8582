#!/usr/bin/env bash

echo "Deploy starting..."

git pull && yarn install && yarn db:generate && BUILD_DIR=build yarn build && rm -rf .next && mv build .next && yarn pm2:reload && echo "Deploy done."
