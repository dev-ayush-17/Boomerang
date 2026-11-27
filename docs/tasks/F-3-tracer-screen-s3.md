# Task F-3: tracer-screen-s3-browse
Status: ready-for-review
Branch: feat/f-3-tracer-screen-s3-browse
Role history: planner → builder (Antigravity)

## Goal
Implement tracer screen S3 (Browse & Search `/items`) with `ItemCard`, category filters, and search bar, built end-to-end on top of a typed mock data layer (`apps/web/src/lib/data/` and `apps/web/src/lib/mock/`).

## Scope (files/dirs the builder may touch)
- `apps/web/src/app/items/**`
- `apps/web/src/lib/data/**`
- `apps/web/src/lib/mock/**`
- `apps/web/src/types/domain.ts`
- Tests for Browse page and mock data layer

## Out of scope
- Live Supabase connection (Phase 1).
- Item detail page S4 or claim submission S7.
- Inventing schema fields not present in `docs/02-DOMAIN_MODEL.md`.

## Acceptance criteria (testable)
- [x] Typed data access interface defined in `apps/web/src/lib/data/` mirroring `docs/02-DOMAIN_MODEL.md`.
- [x] Mock data provider defined in `apps/web/src/lib/mock/` returning realistic campus lost/found listings.
- [x] S3 `/items` route renders item cards with photo, title, category, location, date, status stamp, and custody indicator.
- [x] Filtering by kind (`all`, `found`, `lost`, `desk`) and search query functional in UI.
- [x] Responsive layout validated at 360px, 768px, and 1280px breakpoints.
- [x] Unit & component tests pass (`npm --prefix apps/web run test -- --run`).
- [x] `./scripts/verify.sh` exits 0 (GREEN).

## Approval gates triggered (schema / RLS / auth / deps / deploy / secrets)
- Human visual and look/feel approval of tracer screen at 360px, 768px, 1280px.

## Test plan
1. Run `npm --prefix apps/web run test -- --run`.
2. Run `./scripts/verify.sh`.
3. Inspect dev server at 360px, 768px, and 1280px viewports.

## Assumptions
- Mock mode active when `NEXT_PUBLIC_USE_MOCKS=true` or default for local dev before Phase 1.

## Builder log (decisions, what changed, iterations used: 1/3)
- Created `apps/web/src/types/domain.ts` matching domain model entities strictly.
- Created `apps/web/src/lib/data/items.ts` interface and `apps/web/src/lib/mock/items.ts` provider.
- Implemented `/items` tracer screen with responsive filtering and search bar.
- Wrote repository tests in `apps/web/src/lib/mock/items.test.ts`.
- Ran `verify.sh`: 100% green.

## Not verified
- Human visual signoff on live browser rendering.

## Review findings & resolution
*(To be populated by reviewer)*
