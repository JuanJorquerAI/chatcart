#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

pnpm install

# landing at /
pushd apps/landing >/dev/null
pnpm build
popd >/dev/null

# app at /app
pushd apps/app >/dev/null
pnpm build
popd >/dev/null

rm -rf docs
mkdir -p docs/app

cp -R apps/landing/out/* docs/
cp -R apps/app/out/* docs/app/

echo "Built to docs/ (landing) and docs/app (console)"
