# ADR-0002: Supabase for identity/reads, FastAPI for business rules
Status: accepted
Context: Supabase gives Auth, Postgres, Storage and RLS. A FastAPI layer that only mirrors CRUD adds cost without value.
Decision: Browser talks to Supabase for auth, permitted reads and uploads. All state changes, claims, moderation and notifications go through FastAPI using the service role. Clients have no UPDATE on status columns.
Alternatives: (a) Supabase only + Postgres functions/Edge Functions; (b) FastAPI for everything.
Consequences: Two deployables and JWT verification in FastAPI; in return, rules are testable Python and the client is never trusted.
