---
description: After an agent mistake, improve the HARNESS (rule/skill/test), not just the code.
---
1. Describe the failure: what the agent did, what it should have done, how it was caught.
2. Classify root cause: missing rule · unclear spec · missing test · missing guardrail in verify.sh · wrong skill/trigger · model limitation.
3. Propose ONE minimal change to prevent recurrence (a rule line, a skill step, a test, or a verify.sh check). Prefer an automated check over a written rule.
4. Append an entry to `docs/agent-log.md` (date, failure, cause, fix). Apply the change only after I approve.
