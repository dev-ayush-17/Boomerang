# Task P0-1: monorepo-scaffold
Status: ready-for-review
Branch: feat/p0-1-monorepo-scaffold
Role history: planner → builder (Antigravity)

## Goal
Establish clean monorepo directory skeleton, root `.gitignore`, ensure git repository tracking is aligned, document initial branch protection and repo standards, and ensure `./scripts/verify.sh` runs cleanly.

## Scope (files/dirs the builder may touch)
- `.gitignore`
- `README.md`
- `scripts/verify.sh`
- Documentation of directory layout / branch protection guidelines in `docs/` or root `README.md`

## Out of scope
- Creating Next.js application files or installing web npm packages (reserved for P0-2).
- Creating FastAPI backend or uv configuration (reserved for P0-3).
- Supabase local stack init (reserved for P0-4).
- CI workflow files (reserved for P0-5).

## Acceptance criteria (testable)
- [x] Root `.gitignore` ignores `node_modules`, `.next`, Python `__pycache__`, `.venv`, `.env`, coverage reports, build artifacts, and IDE configs, while allowing `.env.example`.
- [x] Monorepo folder layout exists or is clearly ready for `apps/web`, `apps/api`, `supabase/`, `scripts/`, `docs/`.
- [x] Repository runs `./scripts/verify.sh` with exit code 0 (`VERIFY: GREEN`).
- [x] Branch protection recommendations (e.g. require PR, require `verify.sh` status check, no direct push to main) documented in `README.md`.

## Approval gates triggered (schema / RLS / auth / deps / deploy / secrets)
- None.

## Test plan
1. Run `& "C:\Program Files\Git\bin\bash.exe" ./scripts/verify.sh` and confirm all guardrails pass with green exit code.
2. Verify git status tracks repo docs, scripts, and configs cleanly without unignored build artifacts.

## Assumptions
- Windows host runs Git Bash at `C:\Program Files\Git\bin\bash.exe` or standard bash in PATH.
- Git repository is already initialized at root.

## Builder log (decisions, what changed, iterations used: 1/3)
- Fixed `.gitignore` which previously ignored `docs/`, `scripts/`, `.agents/`, and `.github/`. Updated to standard monorepo gitignore covering node, python, env, build artifacts.
- Expanded `README.md` with project directories, getting started references, branch protection guidelines, and verification commands.
- Verified `./scripts/verify.sh` exits 0 (GREEN).

## Not verified
- Remote GitHub branch protection rule activation (requires GitHub repository settings access).

## Review findings & resolution
*(To be populated by reviewer)*
