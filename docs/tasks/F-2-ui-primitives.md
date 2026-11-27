# Task F-2: ui-primitives-and-showcase
Status: ready-for-review
Branch: feat/f-2-ui-primitives
Role history: planner → builder (Antigravity)

## Goal
Build reusable tactile/brutalist UI primitives in `apps/web/src/components/ui/` with all required states (default, hover, focus-visible, active/pressed, disabled, loading, error). Create a developer showcase route at `/dev/ui` (accessible only in dev mode) displaying all primitives and states.

## Scope (files/dirs the builder may touch)
- `apps/web/src/components/ui/**` (Button, Input, Badge, Stamp, LuggageTag, ItemCard, Folder, Tabs, Toast, EmptyState, Skeleton)
- `apps/web/src/app/dev/ui/**`
- `apps/web/src/components/ui/**/*.test.tsx`

## Out of scope
- Full page routes (S1-S14).
- Production data fetching or Supabase queries.

## Acceptance criteria (testable)
- [x] Primitives built: `Button` (with tactile press effect), `Input`, `Badge/Sticker`, `Stamp` (rotated status stamp), `LuggageTag`, `ItemCard` (brutalist card with 2px ink border, hard shadow).
- [x] Every primitive implements required interactive states: default, hover, focus-visible, active/pressed, disabled, loading.
- [x] `/dev/ui` showcase page renders all components and variants.
- [x] Unit tests for component rendering and state transitions pass via Vitest (`npm --prefix apps/web run test`).
- [x] Accessible focus rings (3px solid ink + 2px offset) and tap targets ≥ 44×44px implemented.
- [x] `./scripts/verify.sh` exits 0 (GREEN).

## Approval gates triggered (schema / RLS / auth / deps / deploy / secrets)
- Human visual review of the `/dev/ui` showcase route.

## Test plan
1. Run `npm --prefix apps/web run test -- --run`.
2. Run `npm --prefix apps/web run lint && npm --prefix apps/web run typecheck`.
3. Run `./scripts/verify.sh`.

## Assumptions
- Tactile button press shrinks hard offset shadow on `:active`.
- Pure CSS/SVG only; no raster texture images.

## Builder log (decisions, what changed, iterations used: 1/3)
- Implemented `Button`, `Input`, `Badge`, `Stamp`, `LuggageTag`, and `ItemCard` in `apps/web/src/components/ui/`.
- Created dev showcase at `apps/web/src/app/dev/ui/page.tsx`.
- Wrote unit tests in `apps/web/src/components/ui/primitives.test.tsx`.
- Verified all linters, type checks, and tests passed green.

## Not verified
- Visual browser screenshots at multiple breakpoints.

## Review findings & resolution
*(To be populated by reviewer)*
