#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

pnpm install
pnpm -C apps/landing build
pnpm -C apps/app build

rm -rf docs
mkdir -p docs/app
cp -R apps/landing/out/* docs/
cp -R apps/app/out/* docs/app/

echo "Built to docs/ (landing) and docs/app (console)"
