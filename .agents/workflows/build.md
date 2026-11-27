---
description: Implement ONE approved task using the verify loop. Builder role.
---
Role: BUILDER. Input: an approved task file in `docs/tasks/`.
1. Confirm the task status is `approved`. If not, stop.
2. Create branch `feat/<task-id>-<slug>`. Restate scope and assumptions in the task file.
3. Write tests first for the acceptance criteria where practical.
4. Implement within declared scope only. Load relevant skills (rls-policy, fastapi-endpoint, state-transition) when applicable.
5. LOOP (max 3 iterations): run `./scripts/verify.sh` → read failures → fix root cause → rerun.
   - Never weaken tests/lint/verify.sh. Never skip a failing check.
   - Same failure twice or no progress → STOP, write "BLOCKED: <reason, what you tried>" in the task file, ask me.
6. When green: update the task file (what changed, decisions, what you did NOT verify), commit with conventional commits, set status `ready-for-review`.
7. Do not merge. Do not start the next task.
