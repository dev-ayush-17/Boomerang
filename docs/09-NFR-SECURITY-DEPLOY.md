# Non-functional: Security, Privacy, Testing, Deployment

## Security & privacy
RLS on every table, tested allowed+denied · JWT verification in FastAPI · service-role key server-only · rate limits on writes · upload limits (type, ≤5 MB, ≤3 images) and EXIF stripping · CORS allowlist · no public phone numbers · hidden verification detail never reaches student clients · role changes admin-only and audited · photos may contain faces/ID cards: show a warning at upload, allow finder to blur/crop before posting (post-MVP: auto-blur) · data retention: delete expired items and images after TODO(you) days.

## Testing pyramid
Unit (Vitest, pytest: transitions, validators) → DB (pgTAP: RLS) → API integration (pytest + test DB) → E2E (Playwright, only: login→post→browse→claim→approve→handover) → manual a11y + Lighthouse before each release.

## Environments & deployment
local (Supabase CLI) → staging → production, separate projects/keys. Web: Vercel. API: Docker on Render/Fly/Railway, `/health` monitored. DB migrations applied by CI, never by hand in prod. Free-tier caveats: API cold starts, Supabase pausing inactive projects: keepalive ping and a note for the pilot. Rollback: redeploy previous image; migrations forward-only (write compensating migration).

## Observability
Sentry (web+api), JSON logs with request id, UptimeRobot, weekly review of `docs/agent-log.md`.
