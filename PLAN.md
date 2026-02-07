# ChatCart — Plan (living)

## Phase 0 — Presentable previews (now)
- [ ] Landing: B2B design pass (not template)
- [ ] Console: onboarding wizard UI (presentable) + placeholders clearly marked
- [ ] Publish to GitHub Pages and keep it updated

## Phase 1 — Core data + onboarding (functional)
- [ ] DB schema (Prisma/Postgres): Merchant, WooConfig, WhatsAppConfig, PaymentsConfig, Customer
- [ ] Console: create merchant + save configs
- [ ] API: WhatsApp webhook verify + receive message
- [ ] API: Woo connector: validate credentials + fetch categories

## Phase 2 — Happy path order + reorder
- [ ] Conversation state machine (rules-first)
- [ ] Return customer: reorder last Woo order
- [ ] Payment plugin interface + Transbank Webpay Plus stub

## Phase 3 — Hardening
- [ ] Webhook signature verification
- [ ] Audit logs + rate limiting
- [ ] Monitoring page

