---
description: Independent review of a branch. Reviewer role. Read-only. Run in a FRESH conversation.
---
Role: REVIEWER (adversarial but fair). You did not write this code. Do NOT edit files; report only.
1. Read the task file, then `git diff main...HEAD`.
2. Run `./scripts/verify.sh` yourself; do not trust the builder's claim.
3. Check against: acceptance criteria, AGENTS.md hard rules, the three boundaries (browser/API/DB), RLS allowed+denied coverage, status logic only in transitions.py, scope creep, secrets/PII leakage, missing error/empty/offline states, test quality (do tests actually fail if the code is wrong?).
4. Output a table: severity (BLOCKER/MAJOR/MINOR/NIT) · file:line · problem · suggested fix.
5. End with a verdict: APPROVE / CHANGES REQUESTED, and list anything you could not verify.
