# Architecture (MVP)

## Services
- API: Node (NestJS) + Postgres (Prisma)
- Worker: BullMQ/Redis for retries/sync

## Integrations
### WooCommerce
- Pull: products, categories, stock, prices
- Push: customers, orders

### WhatsApp
- Recommended: WhatsApp Cloud API (Meta) per merchant
- Alternative later: 360dialog/Twilio adapters

### Payments
- Plugin interface:
  - `createPaymentIntent(orderDraft) -> {type: 'link'|'deepLink', url, providerRef}`
  - `handleWebhook(event) -> paymentStatus`

MVP payment providers:
- Transbank Webpay Plus (Chile)
- Generic external link (merchant-provided)

## Security
- Secrets per-merchant encrypted at rest
- Webhook signature verification (Woo + WhatsApp + payments)
- No arbitrary command execution anywhere
