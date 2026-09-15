# 010 — Google Play 2026 Acquisition / Store-Listing Measurement Mapping

Date: 2026-09-15
Status: FOUNDATION / CURRENT-FIRST-PARTY VALIDATION

## Why this block exists

Research 009 deliberately left Google Play acquisition reporting open until current first-party documentation could be verified. That caution was necessary: Google changed the center of its store-listing performance model in June–July 2026.

The current Play Console model must therefore not be described using older acquisition-report terminology alone.

This block maps current Google Play reporting to the company measurement chain established in research 009 and defines what Marketing Manager may and may not infer from Play Console data.

---

## 1. Material 2026 reporting change

Google states that from June 2026 the primary store-listing performance metrics are based on **unique clicks**, and from July 2026 store-listing performance reports were updated to focus on **user intent** rather than completed acquisition outcomes.

The principal intent events are unique users clicking:

- Install;
- Open;
- Pre-register.

Completed acquisition data has not disappeared. Google states that completed outcomes such as store-listing acquisitions remain available through the Grow users overview, Statistics and downloadable reports.

### Canonical implication

Do not interpret a current Play Console listing-performance CTR as an install-completion rate.

Current diagnostic separation:

`store-listing visitor → install/open/pre-register click → completed acquisition or open → first open / activation → retained use → ad-bearing use`

The click layer is now explicitly important on Google Play.

---

## 2. Current Google Play store-listing funnel fields

### Store-listing visitors

Google defines store-listing visitors as users who visited the listing and did not already have the app installed on any device. A user is deduplicated per day and dimension, not universally across every report slice.

### Unique user install clicks

A current listing/experiment intent metric. It reflects the user expressing intent to install from the listing context; it should not be treated as equivalent to a successful completed acquisition.

### Store-listing acquisitions

Google defines a store-listing acquisition as a user who visited the Store Listing and installed the app while not having it installed on any other device at that time.

Google explicitly notes that store-listing acquisitions can be lower than installs because a user installing on multiple devices is counted once for this metric.

### CTR / listing conversion analysis

Current Store Listing Conversion Analysis reports visitors, clicks and click-through rate. It can be filtered/broken down using supported dimensions including traffic source, store listing, country/region, language, UTM source/campaign and acquisition/install state.

### Operational rule

Every dashboard or report must name whether its numerator is:

- install intent click;
- completed store-listing acquisition;
- installation;
- first open;
- activation.

The generic label `conversion` is prohibited unless the numerator and denominator are shown.

---

## 3. Traffic-source taxonomy available in Play Console

Current first-party documentation distinguishes, depending on report context:

- Google Play search;
- Google Play explore;
- ads and referrals;
- paid and direct in higher-level Grow views;
- not attributed;
- installs without store-listing visit in relevant acquisition reporting.

Store-listing performance supports dimensions including:

- traffic source;
- country/region;
- language;
- search term;
- UTM source;
- UTM campaign;
- app install state (new vs returning where supported);
- store listing (default vs custom listing).

UTM source/campaign dimensions are available in the ads-and-referrals context described by Google.

### Important boundary

Do not force `not attributed` into another source. Unattributed traffic is a legitimate evidence state.

Do not add search, explore and their parent organic totals together when exports already include both parent and child rows; Google's export documentation specifically warns about double-counting this hierarchy.

---

## 4. Surfaces that listing-performance reports do not fully represent

Google states that Store Listing reports focus on store-listing interactions and do not include every acquisition surface on Google Play. Examples in the current documentation include Promotional Content and certain acquisitions arising through mechanisms such as backup/restore.

This means:

`Play total acquisition != store-listing performance report total`

A difference between the two is not automatically a tracking bug.

When reconciling numbers, identify report scope first.

---

## 5. Custom Store Listings — measurement role

Google currently allows up to **50 custom store listing pages** per app.

Current documented targeting/serving mechanisms include tailored experiences for selected audience contexts such as:

- countries/regions;
- users reaching a unique custom-listing URL;
- specific Google Ads campaign traffic;
- specific keyword/search targeting where available;
- lifecycle/audience segments supported by Play Console, including examples such as churned or lapsed users.

Store-listing performance can use `Store listing` as a reporting dimension, allowing the default listing and custom listings to be compared within supported metrics.

The Grow overview may also report how much traffic custom listings receive and surface comparative performance observations.

### yhappcom use case

Custom Store Listings should be used when a meaningful intent/audience distinction exists, not simply because 50 pages are available.

Candidate examples remain hypotheses until search/source volume is observed:

**MintTap**

- ROC understanding/tracking intent;
- YieldMax distribution tracking intent;
- reverse-split / adjusted-history intent;
- portfolio-tracking intent.

**LogMate**

- airline/professional pilot logbook intent;
- migration/import intent;
- backup/data-ownership intent;
- offline workflow intent.

Sparse niche traffic should be consolidated rather than fragmented across excessive custom listings.

---

## 6. Store Listing Experiments — current experimental contract

Google's current first-party documentation permits experiments on default and custom store listings.

Current experimental controls include:

- target metric: unique user install clicks, unique user open clicks, or unique user pre-registration clicks;
- up to two experimental variants against the current listing;
- experiment audience percentage;
- minimum detectable effect;
- confidence level.

Google recommends changing one asset at a time when possible so causal interpretation is clearer.

Current concurrency limits documented by Google include one default graphics experiment or up to five localized experiments at the same time per app.

Experiments automatically stop after six months if still running.

### Critical interpretation rule

A winning Play Store experiment establishes evidence that a listing treatment improved the chosen **store-level target metric** under that experiment.

It does **not** by itself establish that the treatment improved:

- activation;
- D7/D30 retained core-value use;
- ad impressions per retained user;
- ad ARPU;
- long-run revenue.

For an ad-supported niche app, downstream validation remains required.

---

## 7. Privacy, aggregation and sparse-data rules

Google states that some Play Console metrics rely on aggregate data from users who agreed to data sharing, with adjustment intended to better reflect the wider user base. Historical values may be recalculated when data-sharing status changes.

Google also applies minimum thresholds and may group sparse values into `Other`.

Current documentation notes that benchmark information can also be unavailable when insufficient data exists for the selected peer/report configuration.

### Company rule

Use:

- `OBSERVED` for shown Play Console data under its documented definition;
- `SUPPRESSED / INSUFFICIENT VOLUME` when a privacy/volume threshold is implicated;
- `UNKNOWN` when a value is not available;
- never silently convert a missing row or `Other` grouping into zero.

This extends the missing-data protocol from research 009.

---

## 8. Retained installers are not retained product use

Google's acquisition/retention documentation defines retained installers in terms of installers who kept the app installed for the reported period.

Google explicitly notes that installation retention does not mean the app was opened over that period.

Therefore:

`retained installer != behaviorally retained user`

For MintTap and LogMate, company retention must ultimately be based on recurring core-value behavior in product analytics, not merely continued installation.

This distinction is especially important for niche utilities that may remain installed while delivering little active value.

---

## 9. Play commerce value is not yhappcom ad value

Play Console acquisition reporting may expose buyer/revenue measures associated with Google Play commerce such as paid app purchases, in-app products and subscriptions.

Current yhappcom business assumptions prioritize advertising rather than paid-app/IAP/subscription revenue.

Therefore Play buyer/commerce ARPU is not the company's primary monetization outcome.

For the current business model, the downstream chain must remain external to Play store reporting:

`activated retained user → eligible ad opportunity → request → match → impression → ad revenue`

This requires product analytics and ad-network/SDK reporting where available.

Never substitute Google Play buyer metrics for ad-supported user value.

---

## 10. Mapping to research 009

| research 009 layer | Google Play current evidence | status |
|---|---|---|
| source / listing visit | traffic source, search term, UTM dimensions, store-listing dimension where supported | OBSERVED within report scope |
| listing intent | unique install/open/pre-register clicks; CTR | OBSERVED |
| completed store acquisition | store-listing acquisitions in Grow/Statistics/exports | OBSERVED |
| install without listing visit | separate relevant acquisition reporting category | OBSERVED where report supports it |
| first open | not equivalent to Play acquisition; use product analytics | separate layer |
| activation | app-specific analytics event required | OPEN |
| behavioral retention | app-specific core-value analytics required | OPEN |
| installation retention | retained-installer reporting exists but is not behavioral retention | OBSERVED, limited meaning |
| ad opportunity/request/match/impression/revenue | not supplied by store-listing acquisition reporting | separate ad/product telemetry |

---

## 11. Apple vs Google Play — measurement architecture differences that matter

This is a measurement comparison, not a claim that one store is globally superior.

### Apple

Current App Store Connect Analytics provides acquisition-source views including App Store search, browse, app referrer, web referrer and campaign links. Apple's current campaign-link analytics can connect campaign tokens to impressions, product-page views, downloads and downstream usage/sales/subscription metrics, subject to privacy thresholds.

Custom Product Pages likewise expose page views, downloads, conversion and supported downstream metrics.

### Google Play

Current store-listing performance reporting has shifted its primary focus toward listing intent clicks/CTR, while completed acquisition remains available elsewhere in Play Console/exports. Supported listing analysis includes source/search-term/UTM/store-listing segmentation.

### Company implication

Do not build a fake cross-store `conversion rate` column using differently defined native metrics.

For executive comparison, normalize into concept layers instead:

1. exposure/visit;
2. store intent action;
3. completed acquisition/download;
4. first open;
5. activation;
6. core-value retention;
7. ad-supported monetization.

If a store does not expose the same layer natively, mark it `N/A` or use a separately instrumented measure; do not substitute the nearest-looking metric without labeling it.

---

## 12. Minimum Android acquisition dashboard contract

For each material source/listing/campaign, capture where volume supports it:

- date window;
- traffic source;
- search term when available and useful;
- UTM source/campaign where applicable;
- default vs custom store listing;
- store-listing visitors;
- unique install clicks;
- listing CTR;
- completed store-listing acquisitions from the appropriate report;
- first opens from product analytics;
- activation;
- D7/D30 core-value behavior when volume supports it;
- active users;
- ad opportunities/requests/matched requests/impressions;
- ad revenue / eCPM / Ads ARPU;
- evidence status (`OBSERVED / DERIVED / ESTIMATED / UNKNOWN / SUPPRESSED`).

Avoid adding every available Play Console dimension by default. Sparse cohorts should remain aggregated until a decision requires segmentation.

---

## 13. Decision examples

### High listing visitors + weak install-click CTR

Investigate:

- intent mismatch;
- icon/creative/value proposition;
- localization;
- audience/listing mismatch.

Do not yet diagnose installation failure.

### Strong install clicks + weak completed acquisitions

Investigate the click-to-completion layer and reporting scope before changing listing creative.

### Strong completed acquisitions + weak activation

This is primarily a product expectation/onboarding/value-delivery problem until contrary evidence appears.

### Strong activation + weak behavioral retention

Do not acquire more traffic merely because listing metrics are good. Diagnose recurring product value/workflow friction.

### Strong retained use + weak ad revenue

Diagnose ad opportunity, request, match, show and eCPM layers. Do not immediately increase ad frequency.

---

## 14. Evidence discipline / limitations

Validated using current first-party Google Play Console Help documentation on 2026-09-15 covering:

- store-listing performance and the 2026 intent-click reporting change;
- acquisition/retention reporting;
- app statistics;
- custom store listings;
- store listing experiments;
- downloadable acquisition reports.

Current Apple App Store Connect Analytics acquisition/campaign/custom-page documentation was also rechecked only to establish the cross-store measurement distinction.

Not established by this block:

- MintTap's actual Android source mix;
- LogMate's future Android source mix;
- actual search demand;
- actual listing CTR/acquisition rates;
- product activation definitions;
- ad telemetry availability;
- causal incrementality of any channel.

These remain empirical product questions.

---

## 15. Retained expert judgment

The 2026 Google Play reporting change reinforces the central rule from research 009:

**store optimization, acquisition, product value and monetization are separate diagnostic layers.**

For yhappcom, the correct Android optimization sequence is therefore:

`qualified source → relevant listing → intent click → completed acquisition → product activation → retained core-value use → sustainable ad-bearing use`

A Play listing experiment can improve one layer while downstream user quality remains unchanged or worsens. The company must therefore use store-native experimentation for the question it can answer, and product/ad telemetry for the questions it cannot.

## Next research gate

1. Complete the Stage 1 demand-creation vs demand-capture foundation and connect it to research 008 channel priority.
2. Build an App Store vs Google Play store-optimization operating framework without collapsing their different native metric definitions.
3. Inspect MintTap's real analytics/ad implementation when repository/product access is available before prescribing event names, placement or frequency changes.