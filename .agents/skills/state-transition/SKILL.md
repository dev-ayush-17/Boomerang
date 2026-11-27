---
name: state-transition
description: Use when touching item or claim lifecycle states, status columns, or anything that moves an item between states.
---
# State machine discipline
- The allowed transitions live in ONE table in `apps/api/app/domain/transitions.py`, matching `docs/02-DOMAIN_MODEL.md`. Update the doc and the code together.
- `transition(current, event, actor_role) -> new_state | raises IllegalTransition`. Pure, no I/O.
- Tests: parametrize every (state × event × role) combination; assert allowed ones succeed and ALL others raise.
- Each successful transition writes an audit event (who, from, to, when, reason).
- Never set status directly anywhere else. Grep for `status =` before finishing.
