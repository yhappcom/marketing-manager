# Research 238 — Google Play UTM, Install Referrer & Sparse-Niche Channel Measurement Integrity

Date: 2026-09-24
Status: canonical

## Why this exists
Research 237 established Apple campaign-link semantics. Android cannot inherit that model. Google Play exposes a different measurement stack: Play Console acquisition channels, UTM-tagged Store links, monthly retained-installer exports, and the Play Install Referrer API. These surfaces answer different questions and must not be collapsed into one attribution truth.

## Authoritative findings

### 1. Play Console acquisition channels are Store-listing acquisition cohorts
Current Play Console acquisition reporting distinguishes Play Store organic search/explore, installs without a Store-listing visit, tracked channels (UTM), Google Search organic, Google Ads and third-party referrers. A tracked-channel user is a unique user who visited the Store listing in the Play Store app from a UTM-tagged link. Third-party referrers are visits from an untagged deep link to Play.

The report does not track over-the-air or play.google.com web impressions. Therefore Play Console acquisition reporting is not a complete census of every external exposure or every route to installation.

### 2. Install cohorts, visits and retention have different denominators
Play monthly acquisition exports support acquisition-channel, country, Play-organic-search and tracked-channel/UTM dimensions. The retained-installer reports include 1-, 7-, 15- and 30-day retained-installer metrics/rates. Daily Store-listing visitors cannot simply be summed to reconstruct a weekly/monthly unique cohort because a visitor can appear on multiple days while period views deduplicate the user.

The Play Store organic total is the sum of organic search and organic browse/explore; adding the total and its components double-counts traffic.

### 3. UTM is a decision-level taxonomy, not proof of causality
For MintTap/LogMate, UTM-tagged Store links should identify materially different zero-cost distribution decisions (for example owned web vs a permitted community contribution vs a materially distinct social channel), not every post. A UTM visit or installer is evidence associated with that tagged route, not proof that the route was the sole causal reason for installation or later specialist value.

Sparse professional audiences make over-segmentation especially damaging: fragmentation produces tiny cohorts, unstable rates and operational complexity without improving the decision.

### 4. Play Install Referrer is an app-side install signal with its own lifecycle
The official Install Referrer library can return the install-referrer string, referrer-click timestamp, install-begin timestamp and whether an instant experience was launched. Google states that referrer information remains available for 90 days and does not change unless the app is reinstalled; it recommends querying once on the first run after installation to avoid unnecessary calls.

This is not the same object as a Play Console Store-listing visitor cohort. Reinstall semantics also mean it must not be treated as an immutable lifetime acquisition identity.

### 5. First-party surfaces must be reconciled, not forced to match
Play Console, an app-side Install Referrer capture and downstream product analytics can differ because their events, denominators, availability and lifecycle differ. A discrepancy is a reconciliation problem before it is a marketing-performance conclusion.

## EX0–EX5 — Google Play Channel Measurement Integrity Gate

- **EX0 — decision identity:** state the decision the measurement must support and the minimum channel granularity needed.
- **EX1 — link/source identity:** distinguish UTM-tagged Store link, untagged third-party referrer, Play organic search/explore, Google Search, Ads, installs without listing visit and app-side Install Referrer.
- **EX2 — denominator/cohort integrity:** preserve Store visitor, installer and retained-installer denominators; do not sum deduplicated period cohorts or organic totals/components incorrectly.
- **EX3 — referrer-lifecycle integrity:** preserve click/install timestamps, first-run capture state, 90-day availability and reinstall semantics; do not manufacture lifetime-origin identity.
- **EX4 — downstream-value integrity:** compare acquisition evidence with first specialist value and repeated value without claiming causal certainty from a UTM/referrer alone.
- **EX5 — qualified channel decision:** continue, change or stop a channel only when evidence is sufficient for the decision; sparse/unresolved evidence remains unknown.

## Required interpretation rules

Preserve:
- `UTM-tagged visit ≠ install`
- `install ≠ retained specialist user`
- `UTM/referrer association ≠ sole causal proof`
- `Play Console channel ≠ app-side Install Referrer`
- `daily uniques summed ≠ period uniques`
- `organic total + search + explore ≠ valid additive total`
- `missing route from acquisition report ≠ no exposure`
- `referrer after reinstall ≠ immutable lifetime origin`
- `retention rate ≠ product value unless the denominator/cohort is known`

## MintTap operating application
Use a compact Android taxonomy aligned with actual decisions, ideally parallel in meaning to Apple where possible but not forced into identical platform semantics. Candidate decision-level classes are owned web, r/MintTapforYieldMax/community contribution where venue rules permit, materially distinct social distribution, and other verified channels. Do not issue a unique UTM for every Reddit/social post by default.

For each active route preserve: destination URL, UTM source/campaign convention, first active date, Play Console channel semantics, whether Install Referrer is captured in production, downstream first-value event, repeated-value observation and evidence status. Do not infer that weak Android acquisition is an ASO problem until channel, Store-listing and technical-distribution evidence have been reconciled.

## LogMate operating application
Before launch, define only a compact taxonomy for channels that will actually exist. Do not build an elaborate attribution system around hypothetical pilot communities. If Install Referrer is adopted, capture it as an installation evidence record and keep it separate from product analytics identity and from Play Console acquisition reports. Initial pilot cohorts should be used primarily to validate reliable logging/import/export and repeated professional value, not to optimize tiny channel-rate differences.

## Reusable company framework
Maintain a cross-platform channel registry with a shared business-level channel class plus platform-native measurement fields. Shared names are useful for decisions; platform semantics remain separate. Apple Campaign Links and Google Play UTM/Install Referrer must never be represented as if they had identical attribution windows, reset behavior, denominators or privacy/reporting rules.

## Sources
- Google Play Console Help — Measure your app's acquisition and retention: https://support.google.com/googleplay/android-developer/answer/6263332
- Google Play Console Help — Download and export monthly reports: https://support.google.com/googleplay/android-developer/answer/6135870
- Android Developers — Play Install Referrer Library: https://developer.android.com/google/play/installreferrer/library
- Android Developers — ReferrerDetails API: https://developer.android.com/reference/com/android/installreferrer/api/ReferrerDetails

## Next evidence work
1. Inspect MintTap Play Console acquisition channels and retained-installer exports.
2. Inventory current Android Store links and UTM conventions across minttap.app, Reddit and social distribution.
3. Verify whether the production Android build captures Play Install Referrer and, if so, its schema/retention/telemetry semantics.
4. Build one compact cross-platform decision registry that keeps Apple EW and Google EX native semantics separate.
