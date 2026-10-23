# MintTap D3/D7 — public off-platform claim drift and permission ledger (2026-10-23)

## Decision
**D3 NATIVE-ONLY HOLD; D7 off-platform identity/governance OPEN.** This is a production evidence/representation check, not general research, a posting authorization, or a claim of moderation violation. No community interaction performed.

## Public observations and confidence
1. **Search-indexed Reddit artifact (direct thread fetch blocked):** r/YieldMaxETFs post dated 2026-05-13, "Made a small YieldMax tracker for my own use (sharing in case it helps)", explicitly names MintTap and directs readers to search the App Store/Google Play even though no outbound link appears. A 2026-05-14 reply to a brokerage-connectivity question states "manual entry only for now" and says no external brokerage-account access is needed. Source: https://www.reddit.com/r/YieldMaxETFs/comments/1tbjtsk/made_a_small_yieldmax_tracker_for_my_own_use/ . **UNKNOWN:** account identity/ownership, author-to-developer relationship, moderator approval, current visibility, subsequent edits, actual conversion, and whether the reply is still displayed exactly as indexed.
2. **First-party Apple US public listing (checked 2026-10-23):** MintTap 1.0.27 version history (2026-07-04) says CSV/Excel transaction import with preview/validation/import history was added. The currently displayed 1.0.29 listing advertises optional account-based sync. Source: https://apps.apple.com/us/app/minttap/id6766008739 . This is published Store metadata, not proof of end-to-end runtime acceptance or broker API integration.
3. **Canonical prior rule observation:** STATUS 2026-10-13 D3 subgate records 2026-10-12 r/YieldMaxETFs Rule 5/6/7/8 observation, including spam/promotion and moderator-contact requirements. That historical observation is not action-specific permission for the May post, a new post, a reply, a product name, or a search instruction. Current direct rule/permission check is required before any action.

## Claim Registry reconciliation
- **May 14 statement, time-bound:** "manual entry only for now" is historical, in the context of direct brokerage connectivity. It should **not** be labeled false at the time. The subsequent July import release means an undated reuse of "manual entry only" would omit a now-advertised CSV/Excel import route. 
- **Distinct functions:** manual transaction entry, CSV/Excel file import, app-account sync, and brokerage-account connection are four separate claims. App-account sync is **not** proof of brokerage linking. The inspected D1 release source shows Firebase account sign-in and local/Firestore transaction recordkeeping, not a brokerage order API in those paths; absence across the entire binary remains unproven.
- **Promotion classification:** no external hyperlink does **not** make a named-app search instruction a neutral native answer. Treat the May artifact as product-directed discovery content for permission-ledger purposes, without asserting a policy breach.
- **Native value:** a future response to "can I connect my broker?" should first distinguish direct broker connection (not verified), manual records, CSV/XLSX import (Store advertised), and optional app-account sync (Store advertised), then explain privacy/tradeoffs without any product CTA. Validate against current shipped runtime before claiming exact availability.

## Permission and evidence ledger (action-specific)
| Action/surface | Rule evidence | Moderator approval | Identity | Next target | Decision |
| --- | --- | --- | --- | --- | --- |
| Historical May 13 MintTap-named r/YieldMaxETFs post | Search-indexed artifact; 2026-10-12 rules checkpoint | UNKNOWN | UNKNOWN | Original author, modmail/approval, current thread status | Historical observation only; no inferred permission |
| New product mention/search CTA/link in r/YieldMaxETFs | Prior rulebook observation only | UNKNOWN | Account not verified | Current rules, relevant thread, explicit action-specific moderator response | HOLD |
| Native brokerage-connectivity answer without product mention | Domain question observed | No outreach attempted | N/A | Current question + version-matched feature acceptance | Candidate only; do not post automatically |

## Source quality and boundaries
- Search-indexed Reddit content is not equivalent to a freshly opened primary thread; exact authorship, editing, removal, and current rules are unresolved.
- Apple listing is an authoritative first-party statement of public claims and version notes, not independent implementation proof.
- No policy breach, deception, owner identity, user acquisition, or runtime defect is established.
- No posting, modmail, external link, app Store metadata edit, product repo edit, or advertising expansion.

## Next production target
Obtain action-specific current community rules and moderator reply, verify account representation, and run version-matched feature checks (manual entry vs file import vs app-account sync vs brokerage link). Preserve D3 NATIVE-ONLY HOLD. Higher-priority D1 submitted Financial features declaration and D2 operator ad-integrity exports remain UNKNOWN.
