---
description: Import ONE Stitch screen as components + route on mock data. Builder role, UI track.
---
Input: an approved task file naming exactly one screen (or the token/primitives step).
1. Confirm task status is `approved`; load the `stitch-to-code` skill and read docs/05, 06, 07.
2. Via Stitch MCP, fetch only the named screen. Report the tool names you used.
3. If tokens/primitives it needs don't exist yet, STOP and say which task must come first.
4. Build route + components on the mock data layer. All states from docs/06.
5. Verify visually at 360/768/1280, attach screenshots, run axe, log deltas.
6. LOOP (max 3): `./scripts/verify.sh` → fix root cause → rerun. Never weaken checks. Blocked → write BLOCKED in task file and ask.
7. Set status `ready-for-review`. Do not start another screen.
