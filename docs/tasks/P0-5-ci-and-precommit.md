# Task P0-5: ci-and-precommit
Status: ready-for-review
Branch: feat/p0-5-ci-and-precommit
Role history: planner → builder (Antigravity)

## Goal
Set up pre-commit / git hooks and a GitHub Actions CI workflow file (`.github/workflows/ci.yml`) that executes the harness (`./scripts/verify.sh`) on pull requests and pushes to `main`.

## Scope (files/dirs the builder may touch)
- `.github/workflows/ci.yml`
- `.pre-commit-config.yaml`

## Out of scope
- Production deployment workflows to Vercel/Fly/Render (Phase 3/4).
- Database migrations to remote staging/production Supabase.

## Acceptance criteria (testable)
- [x] `.github/workflows/ci.yml` defined to trigger on push and pull_request across branches.
- [x] CI workflow installs Node, Python/uv, and runs `./scripts/verify.sh`.
- [x] Pre-commit config defined to check formatting, ruff lint, and prevent committing secrets.
- [x] No secrets or deployment credentials committed into CI files.

## Approval gates triggered (schema / RLS / auth / deps / deploy / secrets)
- Deployment/CI config: Approved GitHub Actions workflow.

## Test plan
1. Validate GitHub Actions YAML syntax.
2. Run `./scripts/verify.sh` locally to confirm harness green.

## Assumptions
- GitHub Actions runner uses Ubuntu latest with bash, Node 22, and uv.

## Builder log (decisions, what changed, iterations used: 1/3)
- Created `.github/workflows/ci.yml` with automated Node 22, Python 3.12, and uv caching.
- Created `.pre-commit-config.yaml` for pre-commit hook runs.
- Ran `./scripts/verify.sh`: passed 100% green.

## Not verified
- Remote GitHub runner execution (requires push to remote GitHub repository).

## Review findings & resolution
*(To be populated by reviewer)*
