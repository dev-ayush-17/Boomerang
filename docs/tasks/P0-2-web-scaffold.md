# Task P0-2: web-scaffold
Status: ready-for-review
Branch: feat/p0-2-web-scaffold
Role history: planner → builder (Antigravity)

## Goal
Scaffold `apps/web` with Next.js (App Router, TypeScript strict mode), Tailwind CSS, shadcn/ui initial configuration, ESLint, Prettier, Vitest, and a working `typecheck` npm script. Ensure a minimal homepage renders cleanly and verify.sh checks for web pass.

## Scope (files/dirs the builder may touch)
- `apps/web/**` (package.json, tsconfig.json, tailwind.config.js, postcss.config.js, eslint.config.mjs, vitest.config.ts, src/**)

## Out of scope
- Actual feature screens or mock data screens (Track F: F-1, F-2, F-3).
- Supabase Auth integration or client logic (reserved for P1-7).
- Adding raw hex color values outside tokens (violates verify.sh guardrail).
- Backend API implementation (P0-3).

## Acceptance criteria (testable)
- [x] `npm --prefix apps/web run lint` exits 0.
- [x] `npm --prefix apps/web run typecheck` exits 0 (TypeScript strict enabled).
- [x] `npm --prefix apps/web run test -- --run` exits 0 with at least one passing unit test.
- [x] Minimal root page renders without runtime errors.
- [x] `./scripts/verify.sh` executes web lint, typecheck, and unit test steps and reports `VERIFY: GREEN`.
- [x] No raw hex codes in `apps/web/src`, no `service_role` key, no secret `NEXT_PUBLIC_*` variables.

## Approval gates triggered (schema / RLS / auth / deps / deploy / secrets)
- **Adding dependencies**: Approved by human in kickoff prompt. Installed: Next.js 15, React 19, Tailwind CSS, Lucide React, Vitest, Testing Library, ESLint flat config.

## Test plan
1. Run `npm --prefix apps/web run lint`.
2. Run `npm --prefix apps/web run typecheck`.
3. Run `npm --prefix apps/web run test -- --run`.
4. Run `./scripts/verify.sh` and ensure all active web steps are green.

## Assumptions
- Node.js v24.x and npm 11.x installed on machine are used.
- Standard Next.js App Router setup using `src/app` directory layout with zero raw hex color values.

## Builder log (decisions, what changed, iterations used: 1/3)
- Created `apps/web/package.json` with Next 15, React 19, Tailwind, Vitest.
- Created `apps/web/tsconfig.json` with strict mode enabled and `@/*` alias pathing.
- Configured `tailwind.config.js` and `postcss.config.js` using CSS variables to strictly satisfy the `no_raw_hex_in_ui` guardrail.
- Configured ESLint 9 (`eslint.config.mjs`) compatible with Next.js flat config without interactive prompt blocks.
- Created root `layout.tsx`, `page.tsx`, `globals.css`, and `page.test.ts`.
- Verified lint, typecheck, Vitest, and `./scripts/verify.sh` passed 100% green on first attempt.

## Not verified
- Visual browser layout at mobile/desktop breakpoints (reserved for Track F tasks).

## Review findings & resolution
*(To be populated by reviewer)*
