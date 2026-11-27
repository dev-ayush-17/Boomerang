---
description: Turn a goal into a reviewed task file. Planner role. Writes NO code.
---
Role: PLANNER. You may read the repo and write only to `docs/tasks/`.
1. Read AGENTS.md, docs/00–02 and the relevant ADRs.
2. Ask me at most 3 clarifying questions if the goal is ambiguous; otherwise state assumptions.
3. Create `docs/tasks/<id>-<slug>.md` from `_TEMPLATE.md` with: goal, scope (files you may touch), out-of-scope, acceptance criteria (testable), risks, test plan, and which human-approval gates apply.
4. Split anything larger than ~half a day / ~300 changed lines into multiple tasks.
5. Stop. Present the plan and wait for my approval. Do not implement.
