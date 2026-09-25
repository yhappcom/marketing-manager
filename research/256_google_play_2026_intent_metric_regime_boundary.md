# Research 256 — Google Play 2026 Intent-Metric Regime Boundary

Date: 2026-09-25
Status: Canonical
Scope: Google Play ASO measurement, sparse-niche decision discipline, MintTap/LogMate

## Validated platform change
Google Play states that from June 2026 primary Store-listing performance metrics are based on unique clicks, and from July 2026 Store-listing performance reports focus on user intent (clicks) rather than successful outcomes (acquisitions). Unique users clicking Install, Open or Pre-register are the principal listing-performance events. Completed acquisitions remain available in Grow users overview, Statistics and exports.

The current listing conversion analysis supports visitors, clicks and CTR, segmented by traffic source, store listing, country, language, UTM source/campaign and acquisition state. CTR is therefore an intent-stage metric, not an install-success metric.

Store-listing reports also have a bounded surface scope: listing page, inline-install overlay and some mini-detail pages are included; other Play surfaces such as Promotional Content and mechanisms such as backup/restore are outside this listing report. New and returning users are included by default.

## Decision consequence
A June/July 2026 measurement-regime boundary must be recorded in every longitudinal Play ASO analysis. Legacy acquisition conversion and current click CTR are different estimands. Do not splice them into one conversion-rate series, calculate a pre/post lift across the boundary, or declare ASO improvement from the metric-name/UI change.

Current funnel contract:
eligible Play exposure → listing visitor → unique intent click → completed acquisition → core-job activation → repeated specialist value.

Each transition answers a different question. Listing CTR primarily diagnoses listing promise/creative response. Acquisition diagnoses successful install outcome. Activation/repeated value diagnose whether the acquired specialist actually received the promised utility.

## GA0–GA7 Metric-Regime Integrity Gate
GA0 Metric definition: record exact numerator, denominator, population and surface scope.
GA1 Effective-date boundary: tag June/July 2026 regime change; never silently backfill semantics.
GA2 Population integrity: distinguish new/returning users and acquisition state where material.
GA3 Surface integrity: distinguish Store-listing reporting from broader Play discovery/acquisition surfaces.
GA4 Segmentation integrity: use country/language/source/listing/UTM only where sample size supports inference.
GA5 Experiment integrity: creative experiments test listing effects; custom-listing routing cohorts are not automatically causal experiments.
GA6 Downstream-value integrity: require acquisition plus specialist activation/repeat value before growth claims.
GA7 Decision: KEEP / INVESTIGATE / INCONCLUSIVE / ROLLBACK. Sparse evidence defaults to INCONCLUSIVE, not winner selection.

## Portfolio application
MintTap: distribution-day or ticker-news demand can raise search/visitor/click volume independently of creative quality. Record market/event windows as confounders. A CTR increase is not a growth win unless completed acquisition and portfolio-tracking activation remain healthy.

LogMate: pre-launch has no downstream Play evidence. After launch, interpret listing CTR as promise response only. The meaningful chain is click → acquisition → onboarding/import or first flight record → repeated logging. Do not optimize screenshots/copy for clicks that weaken qualified activation.

## Reusable company rule
Maintain a metric dictionary with: platform, metric name, definition, effective dates, numerator, denominator, included surfaces, excluded surfaces, user population, available dimensions, and downstream metric. When a platform changes semantics, close the old series and open a new regime.

Do not use dashboard continuity as evidence of metric continuity.

## Sources
- Google Play Console Help, “Understand and grow your app's user base” (current 2026 documentation): https://support.google.com/googleplay/android-developer/answer/9859173?hl=en
- Google Play Console Help, “Create custom store listings to target specific user segments”: https://support.google.com/googleplay/android-developer/answer/9867158?hl=en-GB

## Next learning target
Build the cross-platform metric-contract registry for Apple App Store and Google Play, including semantic-change dates and a minimum viable sparse-niche dashboard that cannot accidentally optimize Store intent at the expense of activation/repeated specialist value.
