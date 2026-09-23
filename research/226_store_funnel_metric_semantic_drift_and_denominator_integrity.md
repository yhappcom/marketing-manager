# Research 226 — Store Funnel Metric Semantic Drift & Denominator Integrity

Date: 2026-09-24

## Why this matters

Research 225 established organic search-intent routing through Apple Custom Product Pages (CPPs) and Google Play Custom Store Listings (CSLs). The next operational risk is measurement: Store dashboards, exports, and downstream product analytics do not necessarily use the same event, denominator, attribution window, or privacy threshold. A niche app can therefore appear to improve while the underlying specialist-acquisition funnel did not.

This note freezes metric semantics before MintTap or LogMate uses CPP/CSL evidence for routing decisions.

## Authoritative findings

### 1. Google Play's current listing-conversion UI is click-oriented, not simply the legacy install conversion rate

Google Play's current `Grow users > Store performance > Conversion analysis` documentation defines:

- Unique user Install Clicks — unique users who clicked Install from the store listing.
- Unique user Open Clicks — unique users who clicked Open.
- Unique user Pre-registration Clicks — unique users who clicked Pre-register.
- Click-through Rate (CTR) — percentage of store-listing visitors who clicked one of those buttons.

Google explicitly says CTR replaces the legacy `Conversion Rate` metric in this reporting surface.

The report can be filtered by traffic source, store listing, country, language, UTM source/campaign, and acquisition state. It also has scope boundaries: it covers store-listing/mini-detail/inline-install-overlay interactions, while some other Play surfaces and mechanisms are excluded.

Source: Google Play Console Help, “Understand and grow your app's user base” (current documentation, retrieved 2026-09-24): https://support.google.com/googleplay/android-developer/answer/9859173

### 2. Google monthly exports still expose install-acquisition semantics

Google's current monthly-report documentation separately defines:

- Store listing visitors — users who visited the listing and did not already have the app installed on any device.
- Store listing acquisitions — users who visited the listing and installed the app, subject to the report's acquisition semantics.
- Store listing conversion rate — percentage of store-listing visitors who installed.

Traffic-source CSVs can include search term, UTM source, and UTM campaign. Google also warns that adding unique visitors across days can exceed weekly/monthly cohort counts because longer-period views deduplicate visitors across the period. Organic totals can also overlap with search/browse subtotals if summed incorrectly.

Source: Google Play Console Help, “Download and export monthly reports” (retrieved 2026-09-24): https://support.google.com/googleplay/android-developer/answer/6135870

### 3. Therefore Google `CTR` and exported `conversion rate` are not interchangeable

A click on Install/Open/Pre-register is an interaction event. An acquisition/install is a later outcome with different eligibility and attribution semantics. A change in CTR can occur without a corresponding change in acquisitions; an acquisition-rate change can also reflect downstream install completion or attribution-window effects.

Canonical rule: never merge a Google Play dashboard CTR series with a legacy/exported Store Listing Conversion Rate series under one `conversion_rate` field.

Required schema fields:

`platform → report_surface → metric_name → event_numerator → denominator → eligibility → attribution_window → cohort_period → dimensions → extraction_date → value`

### 4. Apple CPP data has an explicit sparse-data publication threshold

Apple says CPP metrics become available after a page receives at least five first-time downloads. App Store Connect Analytics can then measure CPP product-page views, downloads, conversion rate, proceeds, retention, and other downstream metrics, and can segment/filter by dimensions such as territory, source type, and device.

This creates an important niche-app state: a page with no visible page-level analytics can be `below publication threshold / unavailable`, not `zero demand` or `zero conversion`.

Sources:
- Apple Developer, “Configure multiple product page versions”: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- Apple Developer, “Custom Product Pages — Acquisition — App Store Connect Analytics”: https://developer.apple.com/help/app-store-connect-analytics/acquisition/custom-product-pages

### 5. Apple distinguishes product-page attribution from other App Store acquisition surfaces

Apple's Analytics dimension definitions distinguish `Product page`, `Store Sheet`, `In-App Event`, and `App Page`; `App Page` can include downloads directly from App Store search results rather than a product page. Therefore a total App Store download series cannot be assumed to equal default-page + CPP page views/conversions.

Source: Apple Developer, App Store Connect Analytics metric/dimension reference: https://developer.apple.com/help/app-store-connect-analytics/reference/filters-and-dimensions

## EL0–EL5 Store Funnel Metric Semantic-Drift & Denominator Integrity Gate

### EL0 — Surface identity
Record platform, exact dashboard/export/API surface, metric label, report version/date, and extraction date. Similar labels from different surfaces are not automatically equivalent.

### EL1 — Event identity
Define the numerator as an observable event: impression, page view/visitor, Install click, acquisition/download, first-time download, open, or qualified in-app value. Never use the generic word `conversion` without the event.

### EL2 — Denominator identity
Record the exact denominator and eligibility rules. `CTR`, install conversion, acquisition rate, and qualified-value rate require separate fields.

### EL3 — Time/cohort integrity
Preserve visit date, attribution window, cohort period, and deduplication behavior. Do not sum daily unique-user metrics into weekly/monthly unique users unless the platform explicitly permits it.

### EL4 — Sparse/privacy integrity
Treat unpublished, thresholded, privacy-protected, or dimension-suppressed data as `unknown / unavailable`, not zero. For Apple CPP specifically, page analytics require at least five first-time downloads before publication.

### EL5 — Qualified-value decision
A Store routing/page decision is not promoted from CTR or Store conversion alone. The decision must connect the relevant Store metric to truthful intent/message match and, where observable, first specialist value, repeat value, retention/quality, and sustainable monetization.

## Canonical distinctions

Preserve these distinctions in every Store evidence packet:

- `Google Play CTR ≠ install/acquisition conversion rate`.
- `Install click ≠ completed acquisition`.
- `Store listing acquisition ≠ every Play install`.
- `daily unique visitors summed ≠ monthly unique visitors`.
- `organic total + search + browse ≠ valid additive total` when the total already contains the components.
- `Apple CPP analytics unavailable ≠ zero demand`.
- `App Store total downloads ≠ sum of product-page-attributed downloads`.
- `higher Store metric ≠ higher qualified specialist value`.
- `metric label similarity ≠ semantic equivalence`.

## MintTap operational application

Before creating or judging any search-intent CPP/CSL from Research 225, build a versioned Store evidence registry with separate Apple and Google semantics.

Minimum Google record:

`date/cohort → listing/default-or-CSL → country/language → traffic source → search term/bundle if observable → visitors → Install clicks → CTR → acquisitions → exported install conversion rate → first MintTap specialist value → repeat specialist value`

Minimum Apple record:

`date/cohort → default/CPP → localization/territory → assigned search keyword → source type → impressions/page views → first-time downloads/total downloads → published/threshold state → conversion rate → retention → first MintTap specialist value → repeat specialist value`

Do not create a “winning page” ranking that mixes Google CTR with Apple/Google install conversion into one normalized percentage.

For MintTap, specialist value means an evidenced product action relevant to the product promise (for example, successful portfolio/distribution/ROC workflow where actually instrumented), not generic app open or ad impression.

## LogMate operational application

Pre-launch LogMate should define this schema before Store data exists so early pilot evidence is not contaminated by metric drift. A small pilot audience makes EL4 particularly important: below-threshold or suppressed Store data must remain unknown.

PIC/SIC, roster, EFB, recency, or other pilot-language variants remain prohibited as intuition-only segmentation. If later tested, page performance must use platform-native semantics plus actual logbook specialist-value evidence.

## Reusable company framework

For every future niche app, maintain a `store_metric_dictionary` beside the Store-page registry. At minimum it contains:

`platform | source_surface | metric_display_name | canonical_metric_id | numerator_event | denominator_population | eligibility | attribution_window | dedup_period | privacy_threshold | dimensions | first_seen | last_validated | source_url`

Any platform metric-definition change creates a new semantic version. Historical data is not silently relabeled.

## Next evidence target

1. Pull MintTap's actual current Google Play Conversion Analysis fields and monthly Store Performance export; map each to EL0–EL4 before comparison.
2. Pull Apple default/CPP Analytics inventory and mark pages with published versus threshold-unavailable evidence.
3. Only after semantic reconciliation, apply EK routing decisions and connect Store outcomes to first/repeat specialist value.
4. Keep actual Store evidence unknown until retrieved; do not infer it from platform capability documentation.
