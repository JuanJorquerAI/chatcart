# ChatCart API (NestJS)

## Setup (Postgres)
Create a local DB and set `DATABASE_URL`.

Example `.env` (copy from `.env.example`):
```bash
PORT=4010
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/chatcart?schema=public
WHATSAPP_VERIFY_TOKEN=change-me
```

Run migrations + generate client:
```bash
pnpm -C apps/api prisma:migrate
pnpm -C apps/api prisma:generate
```

## Run
```bash
pnpm -C apps/api dev
```

## Endpoints (Slice #1)
- `GET /health`
- `POST /merchants`
- `GET /merchants/:id/status`
- `PUT /merchants/:id/woo`
- `POST /merchants/:id/woo/test`
- `PUT /merchants/:id/whatsapp`
- `GET /webhooks/whatsapp` (Meta verification)
- `POST /webhooks/whatsapp` (receives events → AuditEvent)

Next: signature verification + conversation engine + payments.
