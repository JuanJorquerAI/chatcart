#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

pnpm install
pnpm -C apps/landing build
pnpm -C apps/app build

rm -rf docs
mkdir -p docs

# Next export with basePath writes into out/<basePath-without-leading-slash>/
# Landing basePath: /chatcart  -> apps/landing/out/chatcart/*
# App basePath:     /chatcart/app -> apps/app/out/chatcart/app/*

if [ -d "apps/landing/out/chatcart" ]; then
  cp -R apps/landing/out/chatcart/* docs/
else
  # fallback (no basePath)
  cp -R apps/landing/out/* docs/
fi

mkdir -p docs/app
if [ -d "apps/app/out/chatcart/app" ]; then
  cp -R apps/app/out/chatcart/app/* docs/app/
else
  # fallback
  cp -R apps/app/out/* docs/app/
fi

echo "Built to docs/ (landing) and docs/app (console) for GitHub Pages /chatcart"
