# Screen Inventory
> First UI task: the agent lists the ACTUAL screens in the Stitch project through the MCP and reconciles this table. Edit the "Stitch screen name" column; mark screens that exist in Stitch but not here (and vice versa) as questions for the human.

| # | Screen | Route | Role | Stitch screen name | Key data shown (must exist in domain model) | States to build |
|---|---|---|---|---|---|---|
| S1 | Landing / Home | `/` | public | Web — Landing & Lost/Found Board (node_11177783287249444842) | recent found items, CTA post/report | loading, empty, offline |
| S2 | Login | `/login` | public | Web — Campus Sign In (node_9912619392536259451) | college-email sign-in | error (wrong domain), loading |
| S3 | Browse / Search | `/items` | student+ | Web — Landing & Lost/Found Board (node_11177783287249444842) / Mobile — Lost & Found Feed (node_5744750869741328931) | item cards: photo, title, category, location, date, status stamp; filters | loading, empty, error, no-results, pagination |
| S4 | Item detail | `/items/[id]` | student+ | Web — Item Detail & Handover (node_2905127823941093759) | photos, details, status stamp, claim CTA; **never** the hidden detail | loading, not-found, own-item variant |
| S5 | Post found item (stepper) | `/post/found` | student | Mobile — Report Item (node_11177783287249441552) | fields per FR-2; hidden question+answer | validation errors, upload progress, success |
| S6 | Report lost item | `/post/lost` | student | Mobile — Report Item (node_11177783287249441552) | fields per FR-3 | validation, success |
| S7 | Claim flow | `/items/[id]/claim` | student | Web — Item Detail & Handover [Claim Panel] (node_2905127823941093759) | verification question, answer input | submitting, pending, rejected, approved |
| S8 | My activity | `/me` | student | *(Missing in Stitch — needs mock/screen)* | my posts, my claims + statuses | empty, loading |
| S9 | Notifications | `/me/notifications` | student | *(Missing in Stitch — needs mock/screen)* | list | empty |
| S10 | Custodian queue | `/desk` | custodian | *(Missing in Stitch — needs mock/screen)* | pending claims, answers vs hidden detail | empty, loading |
| S11 | Custodian review / handover | `/desk/claims/[id]` | custodian | *(Missing in Stitch — needs mock/screen)* | claim, item, approve/reject+reason, handover | confirm dialogs |
| S12 | Admin moderation | `/admin` | admin | *(Missing in Stitch — needs mock/screen)* | flagged items/users | empty |
| S13 | Profile / settings | `/me/settings` | student | *(Missing in Stitch — needs mock/screen)* | name, notification prefs | saving |
| S14 | System | 404, error, offline, install prompt | all | *(Missing in Stitch — needs mock/screen)* | — | — |

## Rules for UI-first work
- UI is built against a **data-access interface** (`apps/web/src/lib/data/`) with a mock implementation (`lib/mock/`). Components never import mock data directly.
- Mock data is typed with types that mirror `02-DOMAIN_MODEL.md`. If a screen needs a field the domain model lacks, STOP and raise it: the screen does not get to invent schema.
- Mocks are enabled by `NEXT_PUBLIC_USE_MOCKS=true` only; production builds must fail if it is true.
