# Research 201 — Google Play UTM & Sparse-Niche Acquisition Measurement Integrity

Validated: 2026-09-23

## Why this matters
Research 200 established Apple Campaign Link semantics. Android needs a separate contract: Google Play Store performance and acquisition reporting has different source definitions, windows, surfaces, and privacy thresholds. Treating Apple and Play attribution as interchangeable would corrupt zero-cost channel decisions for MintTap, LogMate, and future niche apps.

## Authoritative findings

### 1. Play Console can distinguish tagged referral traffic, but the report is Store-surface measurement
Current Play Console Conversion analysis supports dimensions including traffic source, Store listing, country/region, language, UTM source, UTM campaign and install state. UTM source is available when traffic source is ads/referrals. Store-listing reports cover Store listing, inline install overlay and certain mini-detail-page interactions; they explicitly exclude some other Play surfaces such as Promotional content.

Source: Google Play Console Help, “Understand and grow your app's user base.”
https://support.google.com/googleplay/android-developer/answer/9859173?hl=en

### 2. Acquisition source labels are semantic categories, not causal truth
Play distinguishes Google Play search, Google Play explore, ads/referrals, paid/direct and not-attributed categories depending on report. “Not attributed” can include reactivations, backup/restore and cases where source was not recorded. A source bucket therefore cannot be treated as a complete causal acquisition history.

### 3. UTM/referrer identity is useful but sparse dimensions can collapse
Google’s Store Performance export exposes UTM source and UTM campaign for third-party referrals. Google explicitly notes that UTM source, UTM campaign, search term and related dimensions can appear as `Other` when minimum thresholds are not reached. For sparse niche apps, missing named rows or `Other` therefore cannot be interpreted as zero traffic from the route.

Source: Google Play Console Help, “Download and export monthly reports.”
https://support.google.com/googleplay/android-developer/answer/6135870?hl=en

### 4. Store conversion cohorts and install/referrer analytics answer different questions
Play Store reporting measures Store-listing visitors/acquisitions under its Store-report semantics. Google Analytics/Firebase install-referral semantics are separate. Google documents that Analytics source `google-play` can mean either a deep link to the Play listing carrying a referrer or organic discovery via Play search; `(direct)` can mean a direct Play deep link without a referrer. Therefore GA/Firebase `google-play` must not be used as proof of organic Play discovery.

Source: Google Analytics Help, “How app key events are attributed.”
https://support.google.com/analytics/answer/10311900?hl=en

### 5. Store conversion is not downstream specialist value
A Store listing acquisition establishes Store conversion, not successful onboarding, portfolio/logbook completion, repeated specialist utility, retention, or ad-bearing value. Niche-channel decisions require a downstream join where privacy and implementation permit it.

## DM0–DM5 — Google Play UTM & Sparse-Niche Acquisition Measurement Integrity Gate

**DM0 — Surface identity**
Record which Play report/surface generated the metric. Do not merge Store listing, Promotional content, Firebase/GA and downstream product analytics as if they share one denominator.

**DM1 — Route/token integrity**
Assign stable UTM source/campaign values only to materially different zero-cost routes. Preserve a registry mapping route → audience job → promise → destination/listing → UTM values. Avoid gratuitous per-post token proliferation.

**DM2 — Source-semantic integrity**
Interpret Google Play search/explore, ads/referrals, paid/direct, not-attributed and Firebase/GA source labels according to the producing system. Never infer causal origin from a label that admits multiple mechanisms.

**DM3 — Sparse/privacy-threshold integrity**
Treat `Other`, withheld dimensions and absent detailed rows as censored/aggregated evidence unless the reporting contract proves zero. Do not fragment tiny professional audiences until useful route evidence disappears below thresholds.

**DM4 — Conversion-window/denominator integrity**
Record the report’s cohort definition and denominator before comparing channels. A Store-listing visitor, acquisition, install, first_open and retained user are different events.

**DM5 — Qualified-value decision**
Optimize only after joining acquisition evidence to specialist value: promised job reached, successful value completion, repeat use/retention, and—where applicable—privacy-eligible non-intrusive ad-bearing use and reconciled revenue.

## Canonical semantic rules
- `UTM-tagged Store visit ≠ causal acquisition proof`.
- `Google Play search ≠ all organic acquisition`.
- `Google Play explore ≠ all non-search discovery`.
- `Firebase/GA source=google-play ≠ necessarily organic Play search`.
- `not attributed ≠ low-quality user`.
- `Other ≠ zero`.
- `missing detailed UTM row ≠ zero route traffic`.
- `Store listing acquisition ≠ first_open`.
- `install ≠ retained user`.
- `Store conversion ≠ specialist-value completion`.
- `more UTM tokens ≠ better measurement`.

## Operating framework for MintTap
Use a small controlled route taxonomy for materially distinct free routes such as owned web, permitted Reddit/community placements, blog/editorial placements and social profiles/posts. Do not create a unique taxonomy merely because a URL can carry one. Preserve the promise and Store destination alongside UTM identity.

When reviewing Android acquisition, keep four evidence layers separate:
1. Play Store discovery/referral surface;
2. Store-listing visitor/acquisition conversion;
3. Firebase/product activation and YieldMax specialist-value completion;
4. repeated value and privacy-eligible monetization.

A route wins only when qualified downstream value improves without deceptive claims, community-rule violations, intrusive ads, or measurement artifacts.

## Operating framework for LogMate
Prepare the taxonomy before launch but do not manufacture traffic or ad inventory to populate reports. Pilot-community routes should remain coarse enough to survive sparse reporting and must preserve community permission/disclosure. Measure successful logbook/import/offline workflow value after acquisition rather than treating Store installs as launch success.

## Reusable company rule
Apple Campaign Links (DL) and Google Play UTM/reporting (DM) are platform-specific measurement contracts under one company acquisition registry. Normalize business concepts—route, audience job, claim, destination, value completion—but preserve platform-native attribution semantics and thresholds. Never force cross-platform source labels into a false one-to-one mapping.

## Next evidence needed
For MintTap Android, inspect actual Play Console Conversion analysis and Store Performance exports: available traffic-source dimensions, UTM source/campaign values, custom/default listing association, `Other`/suppressed rows, country/language, install state, Store acquisitions, and downstream activation/repeat-value joins. Until production evidence is inspected, route performance remains unknown.