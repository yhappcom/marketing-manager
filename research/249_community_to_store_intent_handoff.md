# Research 249 — Community-to-Store Intent Handoff for Sparse Professional Apps

Date: 2026-09-27
Status: validated operating framework

## Decision

A community interaction does not automatically deserve a Store link. Route the user to the shortest truthful destination that completes the intent without consuming community trust or adding unnecessary hops.

## GI0–GI7 Intent-Handoff Gate

1. **GI0 — Community permission:** product mention/linking must be allowed for the exact community, format and current rule state.
2. **GI1 — Intent maturity:** classify the user as answer-seeking, evidence-seeking, product-comparison, install-ready, or returning/reactivation.
3. **GI2 — Native completeness:** if the question can be fully answered in-community, answer it there. Do not force an owned-web or Store click.
4. **GI3 — Destination necessity:** use owned web only when the user needs durable detail, calculation, documentation, evidence or material that cannot reasonably fit natively.
5. **GI4 — Promise continuity:** when intent is install-ready, route directly to a Store destination whose screenshots/copy match the problem just discussed.
6. **GI5 — Variant economy:** create a Store variant only for a durable, independently evidenced intent cluster; never one page per ticker, subreddit, post, aircraft type, or wording variation.
7. **GI6 — Post-install continuity:** where the platform supports it and the product architecture is ready, the Store promise should continue into the matching in-app destination. Never deep-link to a workflow that is not production-ready.
8. **GI7 — Qualified-value measurement:** evaluate qualified activation and repeated specialist value, not outbound clicks or Store conversion alone.

Decision states: NATIVE_ONLY / OWNED_EVIDENCE / DEFAULT_STORE / INTENT_STORE_VARIANT / HOLD.

## Platform facts that constrain routing

### Apple
- App Store custom product pages (CPPs) support up to 70 additional pages per app.
- A CPP can vary screenshots, previews, promotional text and keywords and has a unique URL.
- Keywords from the latest approved app version can be assigned to a CPP so matching App Store searches can show that page instead of the default page.
- Optional app deep links are supported for users on iOS/iPadOS 18+, and the CPP/deep link must be approved.
- Apple App Analytics exposes impressions, downloads and conversion rate per CPP; page metrics become available after at least five first-time downloads.
- Apple reports an average +2.5 percentage-point conversion lift when users are referred to CPPs, but this portfolio must treat that as platform aggregate evidence, not a guaranteed MintTap/LogMate effect.

Operational implication: the 70-page ceiling is capability, not a production target. Sparse apps should maintain a small intent registry and create CPPs only after durable intent evidence exists.

### Google Play
- Custom store listings (CSLs) support up to 50 pages.
- CSLs can target countries/regions, pre-registration, search keywords, user states, ads traffic, custom audiences, or a unique listing URL.
- Unique-URL targeting uses a developer-selected `listing` parameter and can preserve an external intent into the Play listing.
- Google Play conversion analysis can segment by traffic source, Store listing, country, language, UTM source/campaign and acquisition state.
- CSLs are not automatically translated; relevant translations must be supplied.

Operational implication: use a unique-URL CSL for durable external specialist intent only when its Store promise materially differs from the default listing. Keep UTM/source attribution separate from Store-message variants; do not create a new CSL merely to obtain another tracking label.

## Routing architecture

### NATIVE_ONLY
Use when the user wants an answer, explanation or peer discussion and no external asset is necessary. Product mention may be omitted even when permitted.

### OWNED_EVIDENCE
Use for durable reference material: calculation methodology, supported import format, migration guide, privacy/security explanation, policy-backed reference, or a complex worked example. The page must solve the problem without requiring install.

### DEFAULT_STORE
Use when install intent is explicit but no validated specialist promise requires a variant.

### INTENT_STORE_VARIANT
Use only when all are true:
- repeated independent evidence identifies a durable intent cluster;
- the default Store page materially under-explains that intent;
- the app already delivers the promised specialist value;
- platform eligibility/review requirements are satisfied;
- there is enough expected evidence to justify maintaining and measuring the variant.

### HOLD
Use when permission, product readiness, promise accuracy, deep-link reliability, privacy/compliance or attribution integrity is unresolved.

## MintTap application

Candidate durable intents are business-level problems such as distribution/ROC interpretation, reverse-split portfolio continuity, reinvestment tracking and tax-adjustment handling. Do not create TSLY/CONY/MSTY-specific Store pages simply because community posts mention different tickers. Ticker-specific discussion can converge on one durable portfolio-accounting intent.

If a YieldMax investor asks how ROC or a reverse split should be represented, provide the useful answer natively first. Route to owned evidence when methodology or examples are needed. Route directly to an intent-matched Store page only when the user is install-ready and the Store assets truthfully demonstrate that workflow.

## LogMate application

Candidate durable intents are import/migration, Previous Total continuity, duplicate reconciliation, offline/PWA continuity, export and record-integrity workflows. Do not fragment Store variants by airline, roster vendor or aircraft unless independent evidence demonstrates materially different product promises.

Pilot regulatory/logbook questions remain evidence-first: authoritative aviation guidance or owned documentation should precede product routing where the user's intent is compliance/understanding rather than installation.

## Measurement contract

Record:
`problem_cluster_id → community/source → permission_state → intent_state → native_answer_complete → destination_type → destination_id → promise_id → Store visit → install/reactivation → matching first specialist value → repeated specialist value`.

Do not optimize:
- outbound-link CTR in isolation;
- CPP/CSL count;
- Store conversion without downstream qualified value;
- channel-specific variants with insufficient evidence.

## Portfolio rule

The shortest truthful path wins:
`native answer → [owned evidence only if needed] → [Store only when install intent exists] → matching product value`.

Extra hops are not funnels by default; in sparse professional markets they are often trust and measurement loss.

## Authoritative sources

- Apple Developer, “Configure multiple product page versions,” accessed 2026-09-27.
- Apple Developer, “Custom Product Pages,” accessed 2026-09-27.
- Google Play Console Help, “Create custom store listings to target specific user segments,” accessed 2026-09-27.
- Google Play Console Help, “Understand and grow your app's user base,” accessed 2026-09-27.
