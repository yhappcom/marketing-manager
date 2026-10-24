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

## 2026-10-23 release-source acceptance — file import is not broker connectivity

The 2026-05-14 Reddit answer is time-bound; the Apple US 1.0.27 note (2026-07-04) advertises CSV/Excel import, while current 1.0.29 copy advertises optional app-account sync. Version-pinned `yhappcom/yieldmax_tracker@1.0.29` source now establishes a **file-import code path**, not a tested end-to-end runtime result:

- `lib/screens/transaction_import_review_screen.dart` (blob `3d0d3a1dcab5e6e9deca31e83387a93bd71d8f08`, lines 103–122, 414–475, 637–681, 875–1065): account UID required; file selected locally via `file_selector.openFile`; only `.csv` and `.xlsx` accepted, up to 5 MiB and 5,000 data rows; preview/validation excludes detected duplicates and sell-quantity issues before Firestore writes under `users/{uid}/transactions` with an `import_batches` manifest.
- `lib/transaction_import/transaction_xlsx_import_parser.dart` (blob `277aab91997028aae02dde1cb63def0666123ec3`): reads the **first available worksheet**. Neither `.xls` nor every broker-specific statement format is established as supported.
- `test/transaction_import/transaction_csv_import_parser_test.dart` (blob `6052b3cf6f002e61dbc2f2bb7e7e7f674a1e35d5`): source test fixtures expect supported buy/sell rows, classify dividend/deposit rows as unsupported, and require an explicit exchange-rate column for non-USD users; these tests were inspected, **not executed in this audit**.
- The import screen sets `sourceBroker = 'minttap_template'` unconditionally (lines 948–996), and `lib/transaction_import/transaction_import_firestore_payload.dart` (blob `fbc12bbca19b00025417357c6631e47910c3d657`) copies that field into transaction records. This is a **static import-origin marker**, not authenticated broker identity or evidence of broker API connectivity. The inspected import path uses file selection, parsing, and Firestore writes, not brokerage-account authorization.

**Claim Registry consequence:** `CSV/Excel transaction import` = **QUALIFIED / SOURCE-VERIFIED PATH** (CSV and XLSX, supported trade rows; runtime acceptance UNKNOWN). `Broker account direct link / automatic brokerage sync` = **UNKNOWN / NOT VERIFIED**, not inferred from `sourceBroker` or optional app-account sync. `Broker-verified provenance` = **HOLD**. No evidence the historical May reply was false when posted; no public correction or CTA without identity and action-specific permission. D3 **NATIVE-ONLY HOLD** and D7 **IDENTITY OPEN** remain.

**Next:** release-build device import acceptance (CSV/XLSX, supported vs unsupported rows, duplicate/sell handling, first-sheet/size/row constraints, app-account sync distinction) and separate authenticated broker-connection inventory; current community rule/mod approval before any outward mention.

Public claim source checked 2026-10-23: https://apps.apple.com/us/app/minttap/id6766008739 .


## 2026-10-24 r/stocks moderator-enforcement evidence — app research is not automatically native contribution

**SOURCE / channel-specific enforcement observation (not a verified current complete rulebook).** A Reddit-indexed r/stocks removed thread dated **2026-09-04** contains a moderator removal message invoking **r/stocks Rule 2 (no spam or self promotion)** and expressly identifying **market research for app development** alongside promotion of sites, apps, tools, referrals, subreddits and Discord as disallowed. Source: https://www.reddit.com/r/stocks/comments/1w6z3h0/removed/ . A second indexed removal from **2026-03** objects to startup-tool screenshots and an apparent advertising effort, while saying ordinary data could be shared without naming the tool: https://www.reddit.com/r/stocks/comments/1rmebu2/removed/ . Search-result text was directly returned on 2026-10-24; direct Reddit thread and current `about/rules` fetches were blocked, so authorship/moderator flair, subsequent edits, and full October 2026 rule wording are **not independently confirmed**. This is primary *moderation-action text surfaced through a search index*, not a direct live rulebook inspection. Reddit's first-party business guidance also says subreddit rules differ and moderators can be contacted by Mod Mail for permission: https://www.business.reddit.com/learning-hub/search-results . That general guidance is not an exception or approval.

**Decision delta / permission ledger:**

| Product × community × action | Evidence class | Permission decision | Missing evidence / boundary |
| --- | --- | --- | --- |
| MintTap × r/stocks × P5 app showcase or named-tool promotion | Dated moderator Rule 2 removal text, 2026-09-04 | **NO-GO / enforcement-observed prohibition** | Direct current rulebook or explicit moderator exception; none obtained |
| MintTap × r/stocks × P6 app-development survey, pilot recruitment or market-research solicitation | Same removal text explicitly includes market research for app development | **NO-GO / enforcement-observed prohibition** | Direct current rulebook or explicit moderator exception; none obtained |
| MintTap × r/stocks × P1 nonpromotional native answer with no product, research solicitation or funnel | No action-specific evidence of permission or prohibition from the retrieved removal | **NOT STATED / do not generalize permission** | Current rules, thread relevance and account standing before any action |
| MintTap × r/YieldMaxETFs × P1–P6 | Separate community; 2026-10-12 rulebook checkpoint and earlier 2025 moderator routing remain in existing ledger | **UNCHANGED: NATIVE-ONLY HOLD; P3–P6 unapproved** | Current action-specific moderator permission and verified identity |

**Operational distinction:** A useful answer without a product link is a *necessary quality condition*, not blanket permission to solicit app feedback or recruit study participants. The r/stocks enforcement does not establish r/YieldMaxETFs rules, and no app research should be disguised as neutral market discussion. No community post, comment, modmail, DM, recruitment, app/account write or new general theory was executed. D3 and D7 HOLDs remain. **Next target:** obtain a directly dated current rule/permission snapshot for the *specific* proposed community and action, rather than further broad subreddit mining.
