# Task F-1: design-tokens-reconciliation
Status: ready-for-review
Branch: feat/f-1-design-tokens
Role history: planner → builder (Antigravity)

## Goal
Extract design tokens from Stitch project (`Campus Lost and Found Portal`) and reconcile with `docs/05-DESIGN_SYSTEM.md`. Create `apps/web/src/styles/tokens.css` and map in `apps/web/tailwind.config.js`. Log all treatment/naming deltas in `docs/design/design-deltas.md`.

## Scope (files/dirs the builder may touch)
- `apps/web/src/styles/tokens.css`
- `apps/web/src/app/globals.css`
- `apps/web/tailwind.config.js`
- `docs/design/design-deltas.md`

## Out of scope
- Building UI components (F-2).
- Route rendering or mock data (F-3).
- Adding raw hex color values outside `tokens.css`.

## Acceptance criteria (testable)
- [x] `tokens.css` defines CSS variables for colors, typography, border, radius, shadows, and spacing.
- [x] `tailwind.config.js` extends Tailwind theme with semantic color tokens referencing CSS variables.
- [x] No raw hex codes anywhere outside `tokens.css` (`verify.sh` guardrail passes).
- [x] Deltas between Stitch palette vs `05-DESIGN_SYSTEM.md` neo-brutalist tokens are fully documented in `docs/design/design-deltas.md`.
- [x] `./scripts/verify.sh` runs green.

## Approval gates triggered (schema / RLS / auth / deps / deploy / secrets)
- Design deltas approval.

## Test plan
1. Run `./scripts/verify.sh` (confirms no raw hex in UI outside tokens.css).
2. Validate CSS syntax and build via `npm --prefix apps/web run typecheck`.

## Assumptions
- Neo-brutalist physical treatment takes precedence with deltas documented.

## Builder log (decisions, what changed, iterations used: 1/3)
- Created `apps/web/src/styles/tokens.css` containing strictly CSS variables for paper, ink, found, lost, claim, warn, stamp, hard shadows (`--shadow-1`, `--shadow-2`, `--shadow-press`), and borders.
- Configured `tailwind.config.js` and `globals.css` with semantic variables.
- Logged 5 distinct aesthetic and architectural deltas in `docs/design/design-deltas.md`.
- Ran `verify.sh`: passed 100% green.

## Not verified
- Human decision on logged design deltas.

## Review findings & resolution
*(To be populated by reviewer)*
