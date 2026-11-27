# API & Data Draft (to be finalized in Phase 1; agents propose changes via ADR)

## Data (columns indicative)
- `profiles(id=auth.uid, email, full_name, role[student|custodian|admin], created_at)`
- `locations(id, name, kind[campus|custodian_desk], active)`
- `items(id, kind[lost|found], title, description, category, found_at_location_id, desk_location_id, occurred_on, status, finder_id, hidden_question, hidden_answer_hash?/hidden_detail, expires_at, created_at)`
  - `hidden_detail` is never selectable by students (separate table or column-level privileges; decide in ADR).
- `item_images(id, item_id, storage_path, position)`
- `claims(id, item_id, claimant_id, answer, status[pending|approved|rejected], decided_by, decision_reason, created_at)`
  - partial unique index: one pending/approved claim per (item, claimant)
- `item_events(id, item_id, actor_id, from_status, to_status, reason, at)`  (append-only)
- `reports(id, item_id, reporter_id, reason, status, created_at)`
- `notifications(id, user_id, type, payload, read_at, created_at)`

## API (FastAPI, all under `/v1`, JWT required unless noted)
| Method | Path | Role | Purpose |
|---|---|---|---|
| GET | `/health` | public | liveness |
| POST | `/items` | student | create found/lost item (validates, sets status=listed) |
| POST | `/items/{id}/claims` | student | submit claim (409 if not claimable) |
| GET | `/desk/claims?status=pending` | custodian | claim queue incl. hidden detail |
| POST | `/desk/claims/{id}/decision` | custodian | approve/reject (+reason) |
| POST | `/items/{id}/handover` | custodian | mark handed over |
| POST | `/items/{id}/report` | student | flag item |
| POST | `/admin/items/{id}/moderate` | admin | reject/restore |
| PATCH | `/admin/users/{id}/role` | admin | change role (audited) |
Errors use RFC 7807 problem-detail JSON. Reads (list/detail/search) go browser → Supabase under RLS per ADR-0002.
