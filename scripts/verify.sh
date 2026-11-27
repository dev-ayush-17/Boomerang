#!/usr/bin/env bash
# The harness entry point. Agents and CI both run this. Exit 0 == green.
# Sections activate automatically as apps/ appear, so it works from Phase 0 onward.
set -uo pipefail
cd "$(dirname "$0")/.."
fail=0
step() { local name="$1"; shift; echo "▶ $name"; if "$@"; then echo "  ✔ ok"; else echo "  ✘ FAILED: $name"; fail=1; fi; }

# --- Guardrails (cheap, always on) ---
no_service_key_in_web() { ! grep -RIn --exclude-dir=node_modules --exclude-dir=.next -E "SERVICE_ROLE|service_role" apps/web 2>/dev/null; }
no_public_secrets()     { ! grep -RIn --exclude-dir=node_modules --exclude-dir=.next -E "NEXT_PUBLIC_[A-Z_]*(SECRET|SERVICE|PRIVATE)" apps/web .env.example 2>/dev/null; }
no_env_committed()      { ! git ls-files 2>/dev/null | grep -E '(^|/)\.env(\.[a-z]+)?$' | grep -v '\.env\.example$'; }
no_raw_hex_in_ui()      { ! grep -RIn --include=*.ts --include=*.tsx --exclude-dir=node_modules --exclude-dir=.next -E "#[0-9A-Fa-f]{6}\b" apps/web/src 2>/dev/null; }
step "guardrail: no raw hex colors outside tokens.css" no_raw_hex_in_ui
step "guardrail: no service-role key in web" no_service_key_in_web
step "guardrail: no secret-like NEXT_PUBLIC vars" no_public_secrets
step "guardrail: no .env committed" no_env_committed

# --- Web ---
if [ -f apps/web/package.json ]; then
  step "web: lint"      npm --prefix apps/web run lint
  step "web: typecheck" npm --prefix apps/web run typecheck
  step "web: unit tests" npm --prefix apps/web run test -- --run
fi

# --- API ---
if [ -f apps/api/pyproject.toml ]; then
  step "api: ruff lint"   uv run --project apps/api ruff check apps/api
  step "api: ruff format" uv run --project apps/api ruff format --check apps/api
  step "api: pytest"      uv run --project apps/api pytest apps/api -q
fi

# --- Database (needs local Supabase running) ---
if [ -d supabase/tests ] && command -v supabase >/dev/null 2>&1; then
  step "db: pgTAP / RLS tests" supabase test db
fi

echo; if [ $fail -eq 0 ]; then echo "VERIFY: GREEN"; else echo "VERIFY: RED"; fi
exit $fail
