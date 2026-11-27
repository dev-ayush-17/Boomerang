# Rule: Database (activation: Glob `supabase/**`)
- Change schema only via `supabase migration new <name>`. Never edit an applied migration.
- RLS enabled on every table in `public`. Default deny. One policy per role per operation; name them `<table>_<role>_<op>`.
- Use `(select auth.uid())` in policies, and index every column a policy filters on.
- No `using (true)` on anything writable. No policy that trusts a client-supplied role.
- Enforce college-email domain at the DB/Auth layer, not only in the UI.
- Every policy has a pgTAP test in `supabase/tests/` proving allowed AND denied cases.
- Destructive statements (DROP, TRUNCATE, mass DELETE) need explicit human approval in the task file.
