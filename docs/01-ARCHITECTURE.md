# Architecture
```
Next.js PWA (Vercel)
  ├─ Supabase JS: auth, RLS-protected reads, image upload
  └─ HTTPS ─► FastAPI (Docker on Render/Fly/Railway)
                ├─ verifies Supabase JWT
                ├─ claims, transitions, moderation, notifications
                └─ Postgres via SQLAlchemy (service role)
Supabase: Postgres · Auth · Storage · (Realtime later)
```
## Responsibility split
| Concern | Where | Why |
|---|---|---|
| Login, session | Supabase Auth | managed, secure |
| Read items/list/search | Browser → Supabase (RLS) | fast, no API hop |
| Upload image | Browser → Storage (own folder policy) | avoids proxying bytes |
| Claim, status change, moderation, notifications | FastAPI | untrusted client, needs rules + audit |
| Schema & policies | `supabase/migrations` | single source of truth |

## Environments
`local` (supabase start) → `staging` → `production`. Separate Supabase projects and env vars per environment.

## Cross-cutting
- API contract: OpenAPI → generated TS types.
- Observability: Sentry (web + api), structured JSON logs with request id, UptimeRobot on `/health`.
- Security baseline: RLS everywhere, rate limits, upload size/type limits, EXIF stripping, CORS allowlist.
