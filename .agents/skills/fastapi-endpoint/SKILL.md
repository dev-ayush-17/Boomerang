---
name: fastapi-endpoint
description: Use when adding or changing a FastAPI route, service, schema, or repository in apps/api.
---
# Adding an endpoint
1. Define Pydantic request/response schemas in `schemas/`.
2. Router (thin) declares `response_model`, auth dependency, role check, rate limit.
3. Service holds business rules; repository holds queries. Transaction boundary in the service.
4. State change? Use `domain/transitions.py` and write an `item_events` row in the same transaction.
5. Tests (pytest, async client): happy path · unauthenticated 401 · wrong role 403 · invalid state 409 · invalid input 422.
6. Regenerate TS types from OpenAPI (`npm --prefix apps/web run gen:api`) and commit the result.
7. Run `./scripts/verify.sh`.
