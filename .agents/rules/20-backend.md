# Rule: Backend (activation: Glob `apps/api/**`)
- Layering: `routers/` (HTTP only) → `services/` (business logic) → `repositories/` (DB). Routers contain no logic.
- Pydantic v2 request AND response models on every route (`response_model=`). No raw dicts.
- Async everywhere; no blocking calls in request handlers.
- Auth via a single dependency (`get_current_user`); role checks via `require_role(...)`.
- Status transitions only through `domain/transitions.py` (pure functions, fully unit-tested, every illegal pair covered).
- Every state change writes an `item_events` audit row in the same transaction.
- Rate-limit all write endpoints. Validate and size-limit all inputs.
- Errors: consistent problem-detail shape; never leak stack traces or SQL.
- ruff clean, typed (no untyped public functions).
