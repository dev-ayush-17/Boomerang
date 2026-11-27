---
name: rls-policy
description: Use when creating or changing any Postgres table, Row Level Security policy, storage policy, or Supabase migration in this repo.
---
# Writing RLS the Boomerang way
1. Create migration with `supabase migration new <name>`.
2. `alter table ... enable row level security;` (and `force` for owner-bypass concerns if needed).
3. Write the permission matrix first (role × operation × condition) in the task file. Get human approval.
4. One policy per role per operation: `<table>_<role>_<op>`. Use `(select auth.uid())`. Index filtered columns.
5. Clients never UPDATE `items.status`; revoke or omit UPDATE policy on status-bearing columns.
6. Write pgTAP tests in `supabase/tests/<table>.test.sql`: for each policy one allowed case and one denied case, plus "anonymous gets nothing".
7. Run `supabase db reset && supabase test db`. Paste results in the task file.
