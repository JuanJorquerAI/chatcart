# ChatCart — Codex fallback workflow

Use when Claude Code tokens are exhausted.

## Safety
- Never commit secrets.
- Prefer `codex exec --full-auto` (not yolo).

## Typical prompts
- "Implement the next task in PLAN.md. Keep diffs small. Update documentation and tests."
- "Improve landing UI to B2B-level design system. Keep Next.js static export compatible."

## Local commands
- `pnpm install`
- `pnpm -C apps/landing build`
- `pnpm -C apps/app build`

