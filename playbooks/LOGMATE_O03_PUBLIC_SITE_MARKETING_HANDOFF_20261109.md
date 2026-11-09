# LogMate O03 — Public About page audit & Marketing→Web Manager publication brief

**Research date:** 2026-11-09 KST  
**Classification:** FIRST-PARTY LIVE WEB OBSERVATION / MARKETING FINDING / RECOMMENDATION / PENDING WEB OWNER APPROVAL  
**Authority:** Marketing Manager only; read-only to LogMate, Web Manager and Design Studio. No product implementation or website edits.

## 1. Revised reality: live first-party pages exist

Earlier Marketing cycles treated LogMate public-site publication as unconfirmed after a public web fetch tool error. A separate **fresh, noncached** website content retrieval on 2026-11-09 returned the following **actual HTTP 200 page bodies** at the already configured product subdomain. A returned status/body proves availability **at the time of the specific request only**, not 24/7 health, cross-region reachability, search indexation, admin control or Web Manager approval as a marketing landing.

| Exact URL independently retrieved | Current first-party content observed | Marketing qualification |
| --- | --- | --- |
| https://logmate.minttap.app/about/ | **HTTP 200**, titled "LogMate - Pilot Logbook"; visible H1 "A pilot logbook built for everyday flying."; names **MintTap** as developer; outlines personal Flight records, planned Import, previous totals, offline, supported phones/tablets/PWA; footlinks to four policy/support pages. Search-description metadata references personal pilot logbook. | **Existing usable factual product-identity/Info page.** Copy is **future-facing** with broad feature list, not proof that every named workflow is available. No explicit development/prelaunch status, screenshot, app-store CTA, beta or marketing newsletter form found in visible markup. Marketing optimization needs product owner truth sign-off. |
| https://logmate.minttap.app/privacy/ | **HTTP 200**, "Privacy Policy - LogMate", effective **2026-10-04**; explains account/logbook/import/local data, conditional Sync/backup and ads, and public-page coverage. | Existing trust link. **This is not proof of approved marketing email collection or a deployed privacy-valid newsletter form.** Site/public content and shipped app data practice need owner/legal reconciliation. |
| https://logmate.minttap.app/terms/ | **HTTP 200**, "Terms of Service - LogMate", effective **2026-10-04**; describes conditional feature availability, personal records, user review, offline/network boundaries and disclaimers. | Existing legal trust link, not a marketing conversion mechanism or feature certification. |
| https://logmate.minttap.app/support/ | **HTTP 200**, lists **support@minttap.app**, support precautions, account/privacy and deletion links. | A real publicly displayed support **contact address**; not a marketing list, consent to subscribe or verified response time. No fake "Join" CTA should be wired to support mail as if it were a marketing subscription. |
| https://logmate.minttap.app/account-deletion/ | **HTTP 200**, request-from-app / contact support information and warnings about exported copies. | Required public trust task; **not** proof the full in-app deletion/remote data erasure workflow is implemented or accepted. |
| https://logmate.minttap.app/ | **HTTP 200**, title "LogMate - Pilot Logbook"; retrieved page content exposed a Flutter canvas and hidden "flutter typography measurement" marker, **not** a source-readable marketing hero, value proposition or indexable page text. | **Do not call the root a broken or nonfunctional app**: canvas Flutter rendering is not evidence of what a human user sees. Equally, **do not treat it as a proven SEO-readable landing** merely because it serves HTTP 200. Web Manager controls SPA routing and site publication. |

**Provenance:** first-party live URL retrieval 2026-11-09 with fresh-fetch (maxAge=0) and extracted page HTML+Markdown/metadata; initial general web opening of company domain and product domain failed due tool constraints, independently replaced by later successful direct retrieval. **Do not recycle earlier "site inaccessible" as a current fact.** Search-engine indexing, actual search queries, Page Experience, country access and human verification are NOT TESTED.

**Read-only authority cross-check:** [LogMate MASTER](https://github.com/yhappcom/logmate/blob/main/MASTER.md), blob 5a6fd944, documents October 2026 owner-approved public policy source / observed availability, but **production Import coordinator, final Excel roundtrip, Manual Sync server, recovery and managed-EFB product acceptance remain OPEN**. [Web Manager MintTap Product Application](https://github.com/yhappcom/web-manager/blob/main/research/synthesis/MINTTAP_PRODUCT_APPLICATION.md) treats product pages and website as two distinct duties, recommends truthful Product Truth Records, and warns URL existence is not a new release approval. Existing configured auth origin at **logmate.minttap.app** is not automatically authorization to redirect app root or change authentication callbacks.

## 2. Does this close the marketing-only O03 acceptance gate?

Existing [marketing 16-checkpoint register](LOGMATE_MARKETING_PROGRESS_AND_PRELAUNCH_CHANNELS_20261109.md) requires **Web owner confirmation of an authorized live marketing landing, verified product/developer identity, source-accurate current claims and an actual privacy/consent channel**.

| O03 acceptance subcondition | Evidence on 2026-11-09 | Gate |
| --- | --- | --- |
| Public first-party product identity/info body | Actual live **/about/**; MintTap identifies product and links privacy/support/terms | **OBSERVED — PARTIAL** |
| Live trust endpoints linked from the info page | /privacy, /terms, /support, /account-deletion actual body and status 200 | **OBSERVED — PARTIAL** |
| Owner/Web Manager explicitly authorizes this page for **marketing conversion** | Web Manager source describes requirements but **no page-specific Marketing release approval** observed | **OPEN** |
| Accurate *currently usable* release features and app availability | Intro copy refers to future Import, Sync, PWA while Product MASTER documents open delivery; no current shipped version/feature-claim register | **OPEN** |
| Honest prelaunch status, truthful customer next action | No observed prelaunch state/actual Store destination/permissioned updates CTA on /about | **OPEN** |
| Actual voluntary **marketing contact consent** and retention handling, if collecting leads | No signup form or newsletter/research opt-in seen; support contact is not consent | **OPEN** |
| Marketing page qualified discovery/traffic evidence | No authorized Search Console/indexed queries or funnel data accessed; this is separately O04 | **OPEN (O04 separate)** |

**Formal O03 = OPEN / PARTIAL SOURCE VERIFIED.** It is **wrong** to report "website not published"; it is also **wrong** to declare "official landing/conversion funnel launched" or to count O03 complete. Distinct marketing baseline **R 6/6, O 0/10 = 6/16 (37.5%) unchanged**. This cycle materially improves the **real externally observable website-evidence boundary**, not completed owner/operator validation.

## 3. Recommended marketing approach with minimal new surface

**Decision recommendation — W03A (preferred):** Reuse existing first-party **logmate.minttap.app/about/** as the *first product trust and identity destination* for visitors and future approved brand references. Do **not** acquire a new domain, redirect the Flutter app root or turn the auth handlers into public marketing entry points based on Marketing alone. Use the existing privacy/support/terms/deletion links; preserve them as separate trust tasks. Web Manager decides whether to update the About page or introduce a new static marketing page at an **owner-approved, presently unspecified** URL on the same subdomain.

**Decision fallback — W03B:** If the existing About page must remain formal policy disclosure and lacks a consent-ready CTA or clearer active-development story, have Web Manager propose a **separate customer-facing marketing page** with a clear backlink to About/policy/trust resources. The parent-company MintTap portfolio page may link to this product page after source and domain approval; no fabricated minttap.app/apps/logmate route.

**Do not recommend** automatically replacing "/" with a static landing: it currently hosts a Flutter app and may serve essential sign-in/runtime; its canvas extraction is not evidence of route availability or consent to change product navigation. Google [title-link guidance](https://developers.google.com/search/docs/appearance/title-link) favors accurate per-page heading/title; Google [people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) favors a helpful identity page over inflated keyword volume. The existing product subdomain already permits distinct brand identity vs an unverified company parent path, but is **not proof of rankings**.

## 4. Prelaunch English content recommendation — INTERNAL DRAFT / NOT PUBLISHED

- **Product identity:** "LogMate — Pilot Logbook" (brand category; no unapproved app rename).
- **H1 candidate:** "A pilot logbook designed around airline workflows." **Claim as intended audience**, not a statement of unique support for all airline systems.
- **Body:** "LogMate is a personal pilot logbook in development by MintTap. The planned experience focuses on keeping flight records organized and making it easier to move from existing records to everyday logging. Feature availability, supported formats and release timing will be confirmed before launch."
- **Development disclosure:** "In development. Not yet announced for public release." Use only while factually true and product owner approves; revise once a verified public version exists.
- **Primary action BEFORE approved lead system:** "Questions about LogMate? Contact MintTap support." Only show the verified support destination as **general inquiries**, not a newsletter signup, beta or marketing collection.
- **Primary action AFTER separate owner-approved consent system:** "Get launch updates" **only if a functioning operator-approved explicit opt-in, accurate collection notice, withdrawal/deletion mechanism and retention handling are deployed**. Research sign-ups should not be assumed to be marketing permissions, and support messages should not silently become marketing recipients.
- **Feature sections:** "Who it's for"; "The kind of records pilots manage"; "What is being developed"; "What is not an operational/authority record"; "Questions and support"; "Privacy and data handling." No currently unverified logos, screenshots, app-store badges, file-format checkmarks, operator endorsements, full EFB capability, automatic Sync or compliance certification.
- **Screenshot policy:** use accepted actual product screenshot with exact build/device context **only after Product and Design owners release**; omit image or use an honest development text section before then.

**Proposed meta title:** "LogMate Pilot Logbook | MintTap".  
**Proposed meta description:** "Learn about LogMate, a personal pilot logbook in development by MintTap. Explore its planned focus and find official support and privacy information."  
This is copy direction, **not metadata submitted or a promise Google will display it**. Avoid pretending the future feature list is already usable. Mark up the page in English to match the app's English-only directive.

## 5. Owner-specific handoff and actual success evidence

| Owner | Single concrete ask / non-technical marketing requirement |
| --- | --- |
| **Product / Engine** | Provide a current **claim-approval matrix** for About statements: which are actually accepted/shipped, planned, conditional by platform, or blocked. Marketing does not redo Import/Sync/device tests. |
| **Web Manager** | Confirm exact authorized **marketing entry URL** (existing /about or new path), who can publish, whether current About is intended for acquisition, whether a true product availability disclosure and one real next action can be displayed, policy links maintained, and what (if any) approved analytics/consent is available. Web Manager retains routing/accessibility/hosting and all implementation. |
| **Design Studio** | Supply any **real, approved** mobile/tablet screenshots and content hierarchy when available. Do not publish aspirational/mock screenshots as real app. |
| **Marketing Manager** | Own this **draft English copy**, audience/value narrative, differentiation claims, eligible consent-based pilot research CTA and later acquisition-funnel analysis, but no site, app, Firebase/SDK, Search Console or Store action. |
| **Brand owner** | Confirm product label and developer identity, authorization for marketing use of the URL, truthful availability status and permission scope for soliciting research interest. |

**O03 acceptance receipt template:** Web Manager-approved publication decision + exact live URL + dated observed HTTP/body snapshot + owner-signed feature/trust claim status + visible privacy/support and bona fide consent or approved informational-only CTA + no insecure credential/flight-record request. A marketing-only informational page without consent-ready lead acquisition may be a valid product identity page, **but it does not meet this register's full O03 marketing conversion gate** unless the gate is officially redefined, not silently marked PASS.

**Next reporting:** evidence win: **five actual public trust/info URLs**, not simply a design hypothesis. Score **6/16, 37.5%**, +0 percentage points; O03 marked **IN PROGRESS / PARTIAL** only. No new user, marketing opt-in, live landing-owner approval, site search or revenue observed.
