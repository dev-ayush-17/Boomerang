# Domain Model (DRAFT — you review and approve before Phase 1 migrations)

## Entities
`profiles`, `locations`, `items`, `item_images`, `claims`, `item_events` (audit), `reports`, `notifications`.

## Item lifecycle
`listed → claim_requested → claim_verified → handed_over → closed`
Side exits: `listed → expired`, `* → rejected` (moderation).
> TODO(you): decide whether "lost" reports share the `items` table (with `kind = lost|found`) or get their own. Write the decision as an ADR.

| From | Event | Allowed actor | To |
|---|---|---|---|
| listed | submit_claim | student (not the finder) | claim_requested |
| claim_requested | verify_claim | custodian | claim_verified |
| claim_requested | reject_claim | custodian | listed |
| claim_verified | hand_over | custodian | handed_over |
| handed_over | close | system/admin | closed |
| listed | expire | system | expired |
| any | moderate_reject | admin | rejected |

## Permission matrix (draft)
| Table | anon | student | custodian | admin |
|---|---|---|---|---|
| profiles | none | read/update own | read basic | read all |
| items | none | read listed; insert own; no status update | read all; (status via API) | all |
| claims | none | read/insert own | read all | all |
| item_events | none | none | read | read |

## Verification question
Finder stores a `hidden_detail` (never returned by public queries; exposed only to custodian). Claimant submits an answer; custodian compares. Answers are stored on the claim.
