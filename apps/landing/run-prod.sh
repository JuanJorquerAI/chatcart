#!/bin/zsh
set -euo pipefail
cd "$(dirname "$0")"
export NODE_ENV=production
export PORT=4030
exec pnpm -s start --port 4030
