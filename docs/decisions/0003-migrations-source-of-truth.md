# ADR-0003: Supabase CLI migrations are the only schema source
Status: accepted
Decision: No Alembic. SQLAlchemy models mirror the schema but never create or alter it. CI fails if `supabase db diff` is non-empty after `db reset`.
Consequence: One migration history; policies and schema evolve together.
