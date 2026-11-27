# Boomerang

Lost & found portal for college students. Students report and find items, claim with a verification question, and hand-over happens securely at a custodian desk.

## Getting Started
- Documentation & Overview: [docs/00-PROJECT_BRIEF.md](docs/00-PROJECT_BRIEF.md)
- Architecture: [docs/01-ARCHITECTURE.md](docs/01-ARCHITECTURE.md)
- Agent Operating Model: [docs/03-AGENT_OPERATING_MODEL.md](docs/03-AGENT_OPERATING_MODEL.md)
- Phase Plan: [docs/04-PHASE_PLAN.md](docs/04-PHASE_PLAN.md)
- Agents: Read [AGENTS.md](AGENTS.md) first.

## Directory Layout
- `apps/web`: Next.js (App Router, TypeScript strict, Tailwind, shadcn/ui, Vitest)
- `apps/api`: FastAPI (Python 3.12, uv, Pydantic v2, Ruff, Pytest)
- `supabase/`: Postgres migrations, seeds, RLS policies, pgTAP tests
- `docs/`: Product specs, architecture, design system, task files
- `scripts/`: Monorepo verification and utility scripts

## Branch Protection & Development Standards
- Main branch is protected: Direct pushes are prohibited.
- All changes must go through a task file in `docs/tasks/` on a feature branch `feat/<task-id>-<slug>`.
- Pull requests require passing verification checks (`./scripts/verify.sh`).
- Conventional commits must be used: `feat(...)`, `fix(...)`, `docs(...)`, `chore(...)`.

## Harness Verification
Before committing, always run:
```bash
./scripts/verify.sh
```
*(On Windows without WSL, execute via Git Bash: `& "C:\Program Files\Git\bin\bash.exe" ./scripts/verify.sh`)*
