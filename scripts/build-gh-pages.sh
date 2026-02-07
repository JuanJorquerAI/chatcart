#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

pnpm install
pnpm -C apps/landing build
pnpm -C apps/app build

rm -rf gh-pages
mkdir -p gh-pages/app
cp -R apps/landing/out/* gh-pages/
cp -R apps/app/out/* gh-pages/app/

echo "Built to gh-pages/ (landing) and gh-pages/app (console)"
