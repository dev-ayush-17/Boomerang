# Task P0-4: supabase-local-init
Status: ready-for-review
Branch: feat/p0-4-supabase-local-init
Role history: planner → builder (Antigravity)

## Goal
Initialize local Supabase stack configuration via `supabase init`, configure initial local directory structure (`supabase/migrations`, `supabase/tests`, `supabase/seed.sql`), and document local startup prerequisites and commands in `supabase/README.md`.

## Scope (files/dirs the builder may touch)
- `supabase/seed.sql`
- `supabase/tests/**`
- `supabase/migrations/**`
- `supabase/README.md`
- `.env.example`

## Out of scope
- Writing actual domain schema migrations (reserved for P1-2).
- Writing domain RLS policies or pgTAP test cases for claims/items (reserved for P1-3).
- Committing any real `.env` or secret keys.

## Acceptance criteria (testable)
- [x] `supabase/tests` directory created.
- [x] Instructions for installing and running Supabase CLI locally documented in `supabase/README.md`.
- [x] Guardrails in `./scripts/verify.sh` pass without false positives.
- [x] No secrets committed.

## Approval gates triggered (schema / RLS / auth / deps / deploy / secrets)
- Secrets / Config: Approved template in `.env.example`.

## Test plan
1. Run `./scripts/verify.sh`.
2. Ensure no uncommitted `.env` and no secret leaks.

## Assumptions
- Local Supabase CLI requires Docker for runtime.

## Builder log (decisions, what changed, iterations used: 1/3)
- Created `supabase/migrations/` and `supabase/tests/`.
- Created `supabase/README.md` detailing all CLI workflow commands and local requirements.
- Created `supabase/seed.sql`.
- Updated `.env.example` with public and service role placeholders for local dev.
- Verified `./scripts/verify.sh` passes 100% green.

## Not verified
- Live Docker daemon startup.

## Review findings & resolution
*(To be populated by reviewer)*
