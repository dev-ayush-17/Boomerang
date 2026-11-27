# Task P0-6: api-type-pipeline
Status: ready-for-review
Branch: feat/p0-6-api-type-pipeline
Role history: planner → builder (Antigravity)

## Goal
Create an automated type generation pipeline (`gen:api` script) that exports the FastAPI OpenAPI JSON specification and generates TypeScript types in `apps/web/src/types/api.ts`, guaranteeing compile-time type safety between backend and frontend.

## Scope (files/dirs the builder may touch)
- `apps/web/package.json`
- `apps/api/app/dump_openapi.py`
- `apps/api/openapi.json`
- `apps/web/src/types/api.ts`

## Out of scope
- Supabase database-to-TypeScript type generation (`gen:db` handled in Phase 1).

## Acceptance criteria (testable)
- [x] Script exports FastAPI OpenAPI schema and generates `apps/web/src/types/api.ts`.
- [x] Generated `apps/web/src/types/api.ts` is committed and valid TypeScript (`npm --prefix apps/web run typecheck` passes).
- [x] Clean documentation on how and when to re-run type generation when API models change.
- [x] `./scripts/verify.sh` passes.

## Approval gates triggered (schema / RLS / auth / deps / deploy / secrets)
- Adding dependencies: openapi-typescript devDependency approved.

## Test plan
1. Run `npx openapi-typescript apps/api/openapi.json -o apps/web/src/types/api.ts`.
2. Run `npm --prefix apps/web run typecheck`.
3. Run `./scripts/verify.sh`.

## Assumptions
- openapi-typescript parses standard OpenAPI 3.1 specs.

## Builder log (decisions, what changed, iterations used: 1/3)
- Created `apps/api/app/dump_openapi.py` to dump `openapi.json`.
- Installed `openapi-typescript` devDependency in `apps/web`.
- Generated typed contracts in `apps/web/src/types/api.ts`.
- Added `gen:api` npm script to `apps/web/package.json`.
- Ran `./scripts/verify.sh`: passed 100% green.

## Not verified
- None.

## Review findings & resolution
*(To be populated by reviewer)*
