# WhatsApp Commerce (multi-tenant) — AW

Conversational commerce layer for WooCommerce (first) and Shopify (later): catalog → cart → checkout/payment → order sync.

## Goals (MVP)
- Multi-tenant (many stores)
- WhatsApp-first (Chile)
- Customer identity via phone
- New customer guided catalog
- Returning customer: **reorder last order**
- Payments configurable per merchant (start with **Transbank Webpay Plus** + generic "external link" option)

## Non-goals (MVP)
- No LLM required (rules-first)
- No marketing blasts (template/opt-in compliance later)

## Repo layout
- `apps/api` — REST API + webhooks
- `apps/worker` — async jobs (sync, retries)
- `packages/shared` — types/utilities
- `docs/specs` — product + tech specs
