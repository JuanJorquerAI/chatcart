# ChatCart API (NestJS)

## Run
```bash
pnpm -C apps/api dev
# or
PORT=4010 WHATSAPP_VERIFY_TOKEN=... pnpm -C apps/api dev
```

## Endpoints
- `GET /health`
- `GET /webhooks/whatsapp` (Meta verification)
- `POST /webhooks/whatsapp` (receives events)

Next: signature verification + message parsing + persistence.
