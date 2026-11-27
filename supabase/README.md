# Supabase Local Stack

This directory contains the database schema migrations, seeds, and pgTAP tests for Boomerang.

## Prerequisites
- [Supabase CLI](https://supabase.com/docs/guides/cli) installed (`scoop install supabase` or `brew install supabase/tap/supabase` or `npx supabase`)
- Docker Desktop running

## Common Commands (run from repository root)
- `supabase start` : Start the local Postgres, Auth, Storage, and Studio services.
- `supabase stop` : Stop the local services.
- `supabase status` : Display local service URLs, anon key, and service role key.
- `supabase db reset` : Re-apply all migrations from `supabase/migrations/` and run `supabase/seed.sql`.
- `supabase test db` : Run pgTAP tests against local database.

## Schema Source of Truth
Per `docs/decisions/0003-migrations-source-of-truth.md`, migrations in `supabase/migrations/` are the **single source of truth** for database structure and RLS policies.
