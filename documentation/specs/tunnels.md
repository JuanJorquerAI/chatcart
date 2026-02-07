# Dev tunnels (Cloudflare / ngrok)

Goal: expose local API (Mac mini) to the internet for webhook verification (WhatsApp Cloud API) and external testing.

## Option A — Cloudflare Tunnel (recommended)

### Quick tunnel (no DNS)
```bash
cloudflared tunnel --url http://localhost:4010
```
This prints a `https://<random>.trycloudflare.com` URL.

Use it as:
- Webhook: `https://<random>.trycloudflare.com/webhooks/whatsapp`

### Notes
- The URL can change on each run.
- For stable URLs, create a named tunnel + DNS route (requires Cloudflare domain access).

## Option B — ngrok
```bash
ngrok http 4010
```
Then use the https forwarding URL.

## Checklist for WhatsApp Cloud API verification
1) Start API locally (`pnpm -C apps/api dev`).
2) Start tunnel (cloudflared/ngrok).
3) In Meta app settings, set webhook URL to `${PUBLIC_URL}/webhooks/whatsapp`.
4) Ensure verify token matches `WHATSAPP_VERIFY_TOKEN`.
5) Confirm verify returns the challenge.

