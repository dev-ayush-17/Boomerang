# Rule: Architecture boundaries (activation: Always On)
- Supabase from browser: auth, RLS-protected reads, image upload to the user's own folder. Nothing else.
- State changes (item status, claims, moderation, notifications) happen in FastAPI. Browser never UPDATEs `items.status`.
- FastAPI verifies the Supabase JWT on every non-public route; user identity comes from the token, never from the request body.
- Service-role key: `apps/api` only.
- Contract: FastAPI OpenAPI schema → generated TS types in `apps/web/src/lib/api-types.ts`. Never hand-write API types.
- If a task seems to require crossing these lines, stop and propose an ADR instead of coding around it.
