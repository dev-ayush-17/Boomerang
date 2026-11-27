# Product Requirements — Boomerang
> Owner: you (human). Agents must NOT edit this file; they may propose changes in a task file.
> Fields marked TODO(you) are college-specific facts only you know. Fill them before Phase 1.

## 1. Problem
Lost items on campus are announced across WhatsApp groups and notice boards. Finders don't know who the owner is, owners can't search, and anyone can claim anything.

## 2. Goal
One trusted place per college where lost/found items are posted, searched, claimed with verification, and handed over at a staffed desk.

## 3. Users & roles
| Role | Can | Cannot |
|---|---|---|
| Student | post found/lost items, browse, claim (answer verification question), track own activity, report abuse | change item status, see hidden verification detail, see others' contact info |
| Custodian | see claim queue, verify answers, mark handed over, receive items physically | edit user roles, delete items outright |
| Admin | moderate/reject items, manage users & roles, see audit trail, analytics | (everything else; all actions audited) |

## 4. MVP scope (vertical slice)
Login with college email → post found item with photo → browse/search/filter → claim with verification answer → custodian approves → handed over → closed.
Plus: lost-item report (basic), my-activity page, custodian queue, admin moderation (minimal), installable PWA shell, email notification on claim status.

## 5. Out of scope for MVP
In-app chat · gamification/leaderboards · maps · embedding-based matching · native apps · multi-college tenancy · dark mode · i18n.

## 6. Functional requirements (IDs are referenced by tasks and tests)
- FR-1 Auth restricted to the college email domain, enforced server-side.
- FR-2 Found-item posting: title, category, description, 1–3 photos, found-location, date, custodian drop-off location, one hidden verification detail (question + stored answer).
- FR-3 Lost-item report: title, category, description, last-seen location/date, optional photo.
- FR-4 Browse/search: text search, filter by category/location/date/kind, newest first, pagination.
- FR-5 Claim: claimant answers the verification question; one active claim per item per user.
- FR-6 Custodian reviews claim, approves/rejects with reason; approval → handover at desk → mark handed over.
- FR-7 Item states follow `02-DOMAIN_MODEL.md`; transitions only via API; every transition audited.
- FR-8 Unclaimed items auto-expire after N days (N = TODO(you)).
- FR-9 Report/flag abusive posts; admin moderation queue.
- FR-10 Email notification on: claim received, approved/rejected, handed over.
- FR-11 PWA: installable, offline shell, graceful offline states.

## 7. Non-functional requirements (summary; details in `09-NFR-SECURITY-DEPLOY.md`)
Mobile-first (most users on mid-range Android over variable networks) · WCAG AA · privacy by default (no public phone numbers) · RLS on every table · target Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95, PWA installable.

## 8. College-specific facts
- College name / short name: National Institute Of Technology
- Allowed email domain(s): ex id - ayushn.ug25.cs@nitp.ac.in
- Expected users at pilot / at full rollout: students, admin
- Custodian desk locations & hours: not sure yet, make some mock ones for protoypy
- Item categories (default: ID card, wallet, phone, keys, bottle, bag, books, electronics, other): yes
- Expiry window N days: 30 days
- Who staffs the custodian desk and has agreed to use this? currently a prototype so students can chat and solve the issue

## 9. Success metrics (pilot, 1 department, 4 weeks)
TODO(you) e.g. ≥50 active users · ≥20 items posted · ≥10 returned · median claim-to-handover < 48h.

## 10. Risks
Custodian adoption · false/abusive claims · free-tier cold starts/pauses · privacy complaints (photos with faces/IDs).
