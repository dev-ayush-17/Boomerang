# Task F-4: student-screens-and-flows
Status: ready-for-review
Branch: feat/f-4-student-screens
Role history: planner → builder (Antigravity)

## Goal
Build remaining primary public/student screens: S1 Landing (`/`), S2 Login (`/login`), S4 Item Detail (`/items/[id]`), S5 Post Found Item (`/post/found`), and S6 Report Lost Item (`/post/lost`) adhering strictly to the domain model and neo-brutalist styling.

## Scope (files/dirs the builder may touch)
- `apps/web/src/app/page.tsx`
- `apps/web/src/app/login/page.tsx`
- `apps/web/src/app/items/[id]/page.tsx`
- `apps/web/src/app/post/found/page.tsx`
- `apps/web/src/app/post/lost/page.tsx`
- `docs/tasks/F-4-student-screens.md`

## Out of scope
- Live Supabase Auth/DB calls (Phase 1).
- Custodian desk queue S10 / review S11 (Track F-5).

## Acceptance criteria (testable)
- [x] S1 Landing displays campus lost/found callout and routing buttons.
- [x] S2 Login checks `.edu` college email domain restriction with visible error handling.
- [x] S4 Item Detail renders hero luggage tag, metadata, and custodian verification claim submission.
- [x] S5 Post Found Item collects title, category, location, and secret verification detail.
- [x] S6 Report Lost Item collects missing item alert and description.
- [x] No raw hex colors in code outside `tokens.css`.
- [x] `./scripts/verify.sh` runs green across web and api.

## Approval gates triggered (schema / RLS / auth / deps / deploy / secrets)
- None.

## Test plan
1. Run `./scripts/verify.sh` to confirm ESLint, typecheck, vitest, ruff, and pytest pass.

## Assumptions
- Screens operate on mock repository until Phase 1 backend integration.

## Builder log (decisions, what changed, iterations used: 1/3)
- Implemented full student flow routes matching Stitch inventory layouts and neo-brutalist treatment.
- Formatted Python OpenAPI exporter to satisfy ruff check/format.
- Verified `./scripts/verify.sh` reports `VERIFY: GREEN` with all suites passing.

## Not verified
- None.

## Review findings & resolution
*(To be populated by reviewer)*
