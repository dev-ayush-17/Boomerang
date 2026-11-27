# Phase Plan — Phase 0 (foundation) and Phase 1 (database & auth)
Each item becomes a task file. Build one at a time.

## Phase 0 — Foundation
| ID | Task | Acceptance |
|---|---|---|
| P0-1 | Monorepo scaffold: dirs, `.gitignore`, git init, branch protection notes | tree matches AGENTS.md; verify.sh runs green |
| P0-2 | `apps/web`: Next.js + TS strict + Tailwind + shadcn, ESLint/Prettier, Vitest, `typecheck` script | `npm run lint/typecheck/test` pass; home page renders |
| P0-3 | `apps/api`: uv project, FastAPI, `/health`, ruff, pytest, one passing test | `/health` 200; ruff+pytest pass via verify.sh |
| P0-4 | `supabase init`, local stack runs, empty `supabase/tests` | `supabase start` OK, documented in README |
| P0-5 | pre-commit (ruff, prettier, secret scan) + GitHub Actions running verify.sh | CI green on a trivial PR |
| P0-6 | Web ⇄ API type pipeline (`gen:api`) | generated types file committed, script documented |

## Phase 1 — Database & Auth  (HUMAN approves schema and policies)
| ID | Task | Acceptance |
|---|---|---|
| P1-1 | **Human**: finalize `02-DOMAIN_MODEL.md` + ER diagram; ADR on lost vs found modeling | you approve in writing |
| P1-2 | Migration: `profiles`, `locations`, `items`, `item_images`, `claims`, `item_events` with constraints/indexes | `supabase db reset` clean |
| P1-3 | RLS policies + pgTAP tests per permission matrix | every policy has allowed+denied test; `supabase test db` green |
| P1-4 | College-email enforcement (Auth hook or trigger — agent researches current Supabase docs, proposes in ADR) | non-college email cannot sign up (tested) |
| P1-5 | Profile auto-creation on signup + role assignment approach (custodian/admin granted only by admin/seed) | tested; no self-promotion path |
| P1-6 | Seed data (locations, categories, test users per role) | `db reset` loads seed |
| P1-7 | Web: Supabase client setup + login/logout + protected route | manual + Vitest; no service key in web |
Exit criteria: you can log in with a college email, and attempts to read/write outside your permissions are denied by tests.

## Track F — UI shell from Stitch (parallel to Phase 1; starts after P0-2)
Built on a typed mock data layer so it never blocks on the backend. See `docs/07-STITCH-INTEGRATION.md` §D.
| ID | Task | Acceptance |
|---|---|---|
| F-0 | Stitch MCP smoke test + reconcile screen inventory (no code) | tools and screens listed; docs/06 updated |
| F-1 | Tokens + reconcile with design system | tokens.css, Tailwind theme, deltas logged and approved |
| F-2 | Primitives with all states + `/dev/ui` showcase | tests + axe pass; you approve the look |
| F-3 | Tracer screen S3 Browse + ItemCard on mocks | 360/768/1280 screenshots; verify.sh green |
| F-4 | Remaining student/public screens (1–2 per task) | states complete, a11y pass |
| F-5 | Custodian/admin screens | same |
| F-6 | PWA shell | installable; Lighthouse PWA/a11y ≥ 95 |
Merge rule: Track F screens may not add fields to the schema; if a screen needs one, it goes through P1-1.
