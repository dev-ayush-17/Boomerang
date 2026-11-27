# Task P0-3: api-scaffold
Status: ready-for-review
Branch: feat/p0-3-api-scaffold
Role history: planner → builder (Antigravity)

## Goal
Scaffold `apps/api` using `uv` as a Python 3.12 project with FastAPI, Pydantic v2, Ruff (lint & format), pytest, and a working public `GET /health` endpoint returning `{"status": "ok"}`.

## Scope (files/dirs the builder may touch)
- `apps/api/**` (`pyproject.toml`, `app/**`, `tests/**`, `README.md`)

## Out of scope
- Database connections, SQLAlchemy models, or migration execution (Phase 1).
- Supabase JWT validation logic or business domain transition rules (Phase 1 / Phase 2).
- Status changes or claim processing logic.

## Acceptance criteria (testable)
- [x] `apps/api/pyproject.toml` configured with Python 3.12, FastAPI, Ruff, Pytest, Pydantic v2.
- [x] `uv run --project apps/api ruff check apps/api` exits 0.
- [x] `uv run --project apps/api ruff format --check apps/api` exits 0.
- [x] `uv run --project apps/api pytest apps/api -q` exits 0 with at least 1 passing test verifying `GET /health` returns status code 200 and expected payload.
- [x] `./scripts/verify.sh` automatically detects `apps/api/pyproject.toml`, runs ruff & pytest, and exits 0 (`VERIFY: GREEN`).

## Approval gates triggered (schema / RLS / auth / deps / deploy / secrets)
- Dependencies approved in kickoff: fastapi, uvicorn, pydantic, pydantic-settings, ruff, pytest, httpx.

## Test plan
1. Run `uv run --project apps/api ruff check apps/api`.
2. Run `uv run --project apps/api ruff format --check apps/api`.
3. Run `uv run --project apps/api pytest apps/api -q`.
4. Run `./scripts/verify.sh` to confirm end-to-end harness integration.

## Assumptions
- uv operates on Python 3.12 interpreter.

## Builder log (decisions, what changed, iterations used: 1/3)
- Created `apps/api/pyproject.toml` with Python 3.12, FastAPI, Ruff, Pytest, Pydantic v2.
- Implemented `/health` endpoint returning typed Pydantic `HealthResponse`.
- Configured `pythonpath = ["."]` and `asyncio_default_fixture_loop_scope = "function"` to resolve import paths cleanly.
- Wrote pytest test verifying `/health` 200 and schema.
- All checks in `verify.sh` (web + api) ran 100% green.

## Not verified
- Production deployment containerization.

## Review findings & resolution
*(To be populated by reviewer)*
