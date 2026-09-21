# Research 172 — Store Metric Semantic Drift and Cross-Store Measurement Contract

Date: 2026-09-21
Status: validated against current first-party Apple Developer and Google Play Console documentation

## Why this matters

Sparse niche apps cannot afford semantic errors in Store metrics. Apple and Google currently use superficially similar acquisition/conversion language for materially different denominators, numerators, surfaces, and user states. A dashboard label must never be treated as a stable cross-platform KPI contract.

## Current first-party findings

### Apple App Store Connect

Apple's current Acquisition documentation defines Conversion Rate as total downloads divided by unique impressions. Total downloads include first-time downloads and redownloads; iCloud restores and automatic downloads to other linked devices are excluded. Acquisition can be segmented by source type, including App Store Search, Browse, App Referrer, Web Referrer and custom marketing campaigns, and filtered by territory/device.

Apple records the acquisition source when the user taps to download or redownload. A manual redownload resets the source type for subsequent attributed sales, usage and subscription data. App Store Search includes views/downloads from ads appearing in App Store search results, so it is not intrinsically an organic-only source.

Apple Custom Product Page reporting exposes page views, downloads and conversion rate plus downstream subscription/revenue metrics, but page-specific data appears only after at least five first-time downloads. The same five-first-download display threshold applies to individual In-App Event data. Therefore an absent/hidden CPP or event result is not evidence of zero demand or zero acquisition.

Sources:
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/acquisition
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/custom-product-pages
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/in-app-events

### Google Play Console

Google's current Store listing performance documentation describes the primary listing metric as click-through rate (CTR), not the legacy visitor-to-installer conversion rate. CTR is the percentage of store-listing visitors who click Install, Open or Pre-register. It explicitly replaces the legacy `Conversion rate` metric in this surface.

This creates a major semantic boundary: a Google Play store-listing CTR can include Open and Pre-register clicks and therefore must not be compared directly with Apple's download/impression Conversion Rate or interpreted as an install probability.

Google's current Store listing reports cover store-listing clicks from the listing page, inline install overlay and certain mini-detail pages, while excluding acquisitions from other Play surfaces such as promotional content and mechanisms such as backup/restore.

Google's monthly Store Performance export still exposes `Store listing acquisitions`, `Store listing visitors`, `Store listing conversion rate`, and traffic-source fields including search term, UTM source and UTM campaign. Therefore Console UI terminology and exported historical/report schemas can coexist with different metric labels/semantics. Pipelines must record the source/report/schema rather than normalize every field called conversion/CTR into one KPI.

Google's documented traffic-source export also warns that `Play Store (organic)` is the sum of organic search and browse; adding the parent row to search+browse double-counts visitors. This is a concrete aggregation trap for zero-cost acquisition reporting.

Google peer benchmarks are aggregate privacy-protected comparisons; curated peer groups contain at least 100 apps and report aggregate percentiles/medians. Peer performance is context, not a MintTap/LogMate target or causal benchmark.

Sources:
- https://support.google.com/googleplay/android-developer/answer/9859173
- https://support.google.com/googleplay/android-developer/answer/6135870
- https://support.google.com/googleplay/android-developer/answer/10771707

## Cross-store rule

Never publish or optimize a generic `Store conversion rate` without a versioned metric definition.

Minimum metric identity:

`platform + report/surface + metric label + numerator event + denominator population + acquisition state + source scope + territory/locale + date window + schema/version date`

Examples:

- Apple: `ASC Acquisition / Conversion Rate / total downloads ÷ unique impressions / source=App Store Search / KR / date window ...`
- Google: `Play Store listing / CTR / unique Install|Open|Pre-register clicks ÷ store-listing visitors / source scope ...`
- Google export: preserve the exported Store Performance field name and report generation/schema date; do not silently relabel it to current UI CTR.

## CJ0–CJ5 Store Metric Semantic Integrity Gate

CJ0 — Identify exact platform/report/surface and observation date.

CJ1 — Freeze numerator and denominator definitions before comparison.

CJ2 — Identify user/acquisition state: first download, redownload, install click, open click, pre-registration, restore, etc.

CJ3 — Identify source/surface scope and aggregation hierarchy; prevent parent+child double counting.

CJ4 — Mark privacy/display thresholds and missing/suppressed observations explicitly; `missing ≠ zero`.

CJ5 — Only compare trends or variants after semantic compatibility is proven; otherwise report metrics separately.

## Operating consequences

### MintTap

Before the live Store audit, export/report collection must retain raw Apple and Google metric names and definitions. Do not create a combined iOS/Android `CVR` chart until a compatible event boundary is deliberately constructed. For Apple Search, do not call the source organic because Apple says search-source data includes search ads. For Google organic reports, do not sum the organic parent with search and browse children.

Sparse CPP/event observations below Apple's display threshold must remain `suppressed/insufficient`, never `0`. This is particularly important for MintTap's niche YieldMax audience where five first-time downloads per treatment may be material.

### LogMate

Define the Store measurement contract before launch so early pilot acquisition is not corrupted by later metric-label drift. Preserve raw Store events and schema metadata, then derive normalized measures explicitly. Pre-registration clicks must remain separate from installs and first useful value.

### Future niche apps

A reusable growth dashboard must use semantic metric IDs rather than UI labels. Platform UI renames must trigger a contract review, not a historical backfill that silently changes old meanings.

## Evidence rules added

- `same label ≠ same metric`
- `different label ≠ necessarily different underlying event`
- `Apple Conversion Rate ≠ Google current Store-listing CTR`
- `Google Install/Open/Pre-register click ≠ acquisition/install`
- `App Store Search source ≠ organic search only`
- `suppressed/missing sparse report ≠ zero`
- `parent organic row + search + browse = double count`
- `peer percentile ≠ product target`

## Next validation target

Apply CJ to actual MintTap App Store Connect and Play Console exports/screens: record exact current schemas, source dimensions, locale/territory, first-download/redownload or click states, and any suppressed cells. Only then define a cross-platform acquisition table that joins downstream first/restored/repeated useful value without collapsing incompatible Store metrics.