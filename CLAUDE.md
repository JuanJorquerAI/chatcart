# ChatCart — Claude Code / Project Instructions

## North Star
Build **ChatCart**: B2B conversational commerce platform for Chile/LatAm.
- WooCommerce first
- WhatsApp Cloud API first
- Payments pluggable (start Transbank Webpay Plus)
- Returning customers: **reorder last order**

## Guardrails (hard)
- Multi-tenant isolation by `merchantId` everywhere.
- No LLM needed for MVP (rules-first).
- Webhooks must be verified (Meta X-Hub-Signature-256, Woo signature if used, payment providers).
- Never commit secrets.

## Definition of Done (for each iteration)
- UI is presentable (B2B-grade): spacing, typography, contrast, responsive.
- Docs updated (spec + changelog).
- “How to test” steps included.

## Workflow
### Planning (Claude Code — Opus 4.6)
Use Claude Code to:
- refine spec into tasks
- choose smallest shippable increment
- produce PR-ready change plan

### Implementation
- Prefer Claude Code for implementation when tokens allow.
- Fallback: OpenAI Codex CLI when rate limited.
- Keep PRs small.

## Commands
- Build static preview: `pnpm run pages:build`
- Run API locally: `pnpm -C apps/api dev` (port 4010)

## Repo map
- `apps/landing` — marketing landing
- `apps/app` — merchant console + onboarding wizard
- `apps/api` — webhooks + core API
- `documentation/` — PRD/specs/architecture

