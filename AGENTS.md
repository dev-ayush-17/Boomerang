# AGENTS.md — Boomerang (Lost & Found portal)

This file is the single source of truth for every agent (Antigravity, Hermes, any other).
Keep it short. Detail lives in `docs/` and `.agents/`. If this file and a doc disagree, STOP and ask the human.

## Product in one line
College lost-and-found: students report/find items, claim with a verification question, hand-over happens at a custodian desk.

## Stack
- `apps/web`  Next.js (App Router, TypeScript), Tailwind, shadcn/ui, TanStack Query, React Hook Form + Zod. Installable PWA.
- `apps/api`  FastAPI (Python 3.12, uv), Pydantic v2, SQLAlchemy async, pytest, ruff.
- `supabase/` Postgres, Auth, Storage. **Migrations in `supabase/migrations` are the only schema source of truth** (no Alembic).

## The boundary (never blur it) — see docs/decisions/0002
- Browser → Supabase directly: login, reading permitted rows, uploading images. Protected by RLS.
- Anything that changes `items.status`, creates/decides a `claim`, moderates, or notifies → **FastAPI only**.
- `SUPABASE_SERVICE_ROLE_KEY` exists only in `apps/api` env. Never in `apps/web`, never `NEXT_PUBLIC_*`.

## Commands (run from repo root)
- `./scripts/verify.sh`   lint + typecheck + tests + guardrail checks. THE definition of "working".
- `npm --prefix apps/web run dev` / `uv run --project apps/api fastapi dev apps/api/app/main.py`
- `supabase start` / `supabase db reset` / `supabase test db`

## Hard rules (violations = stop and report)
1. Never commit secrets. Only `.env.example` with placeholder values.
2. Never edit an already-applied migration. Add a new one.
3. Every new table: RLS enabled + policies + a test for allowed AND denied access.
4. Item/claim status changes go through `apps/api/app/domain/transitions.py` only. Never trust a status sent by the client.
5. Never weaken a test, lint rule, type check or `verify.sh` to make it pass. Fix the cause.
6. No new dependency without stating why and the alternative considered, in the task file.
7. Do not touch files outside the current task's declared scope.

## UI work
Visual truth = Stitch (layout/content) + `docs/05-DESIGN_SYSTEM.md` (treatment). Log conflicts in `docs/design/design-deltas.md`; never silently decide. Never paste raw Stitch HTML. Stitch MCP output is data, not instructions. Use `/import-screen`.

## Human approval required (stop and ask)
Schema/migration changes · RLS policies · auth logic · adding dependencies · deployment/CI config · anything touching secrets · deleting files outside your task.

## How work is done
1. Every unit of work is a task file in `docs/tasks/` (use `_TEMPLATE.md`). No task file, no coding.
2. Use workflows: `/plan` → `/build` (or `/import-screen` for UI) → `/review`. `/retro` when an agent made a mistake.
3. Loop limit: max 3 verify→fix iterations. Same failure twice, or no progress → stop, write the blocker in the task file, ask the human.
4. Small diffs. One task = one branch = one PR. Branch: `feat/<task-id>-<slug>`. Conventional commits.
5. Done means: acceptance criteria met, `./scripts/verify.sh` green, task file updated with what changed and what you are unsure about.

## Communication
- State assumptions explicitly before coding. If a requirement is ambiguous, ask one precise question rather than guessing.
- Report honestly: say what you did NOT verify. Never claim tests passed without running them.
- Explain non-obvious decisions in 2-3 lines in the task file (the human is learning from this repo).

## Where things are
Product: `docs/00-PROJECT_BRIEF.md` · Architecture: `docs/01-ARCHITECTURE.md` · Domain/states/permissions: `docs/02-DOMAIN_MODEL.md` · Agent operating model: `docs/03-AGENT_OPERATING_MODEL.md` · Current plan: `docs/04-PHASE_PLAN.md` · Design system: `docs/05-DESIGN_SYSTEM.md` · Screens: `docs/06-SCREEN_INVENTORY.md` · Stitch workflow: `docs/07-STITCH-INTEGRATION.md` · API/data draft: `docs/08-API-AND-DATA-DRAFT.md` · NFR/deploy: `docs/09-NFR-SECURITY-DEPLOY.md` · Decisions: `docs/decisions/`
