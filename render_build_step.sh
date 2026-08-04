#!/bin/sh
echo "Build script"

npm ci --include=dev && npm run build && npm run start-prod
