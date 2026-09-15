# 009 — Privacy-Aware Marketing Measurement Architecture

Date: 2026-09-15
Status: FOUNDATION / APPLIED ARCHITECTURE

## Why this block exists

Research 008 prioritized channels, but channel ranking becomes unreliable if acquisition, activation, retention and ad revenue are measured in disconnected dashboards. This block defines the minimum measurement architecture for a cash-constrained niche-app portfolio without pretending that deterministic user-level attribution is always available.

The objective is not maximal tracking. It is decision-grade evidence with explicit privacy and missing-data boundaries.

## 1. Measurement chain

Use this causal/diagnostic chain:

`source exposure/click → store or landing-page visit → first-time download/install → first open → activation → retained use → eligible ad opportunity → ad request → matched request → impression → revenue`

Each arrow is a possible loss point. Never collapse the chain into `channel → revenue` unless the intervening measurement is actually supported.

### Distinct questions

- Acquisition: where did discovery/download originate?
- Conversion: did the page convert relevant traffic?
- Activation: did the new user reach the product's first meaningful value state?
- Retention: did that value recur over time?
- Monetization: did retained usage create acceptable ad opportunities and realized impressions/revenue?
- Incrementality: would those outcomes have happened without the marketing action?

Attribution answers are not automatically incrementality answers.

## 2. Evidence layers

### Layer A — Platform acquisition evidence

Apple App Store Connect Analytics currently exposes acquisition source types including App Store search, browse, app referrer, web referrer and custom marketing campaigns. Campaign links can associate campaign tokens with impressions, product-page views, downloads, usage and downstream commercial metrics. Apple applies privacy thresholds/suppression to small groups; campaign metrics require threshold volume before dashboard display.

Custom Product Pages can be measured through product-page views, downloads, conversion rate and downstream metrics, with territory/source/device filtering. Data for an individual CPP appears after at least five first-time downloads.

Operational implication: absence of a small-cohort row is not evidence of zero performance.

### Layer B — In-app behavioral evidence

Use an analytics event model to measure behavior after first open. Firebase/Google Analytics supports automatically collected events plus custom event types; event design should therefore represent product value states, not every tap.

Minimum event families:

- `first_open` / equivalent install-start signal;
- onboarding completion where onboarding is genuinely required;
- product-specific activation;
- repeat core-value event;
- export/backup/recovery or other trust-critical actions where relevant;
- ad-opportunity eligibility event if product instrumentation can define it without polluting UX;
- ad impression/revenue events where SDK/reporting support exists.

Do not use PII as event parameters. Do not create user-level identity merely to make marketing dashboards look complete.

### Layer C — Ad network evidence

Ad revenue is downstream of retained product use. Keep the monetization tree separate:

`active retained users × eligible opportunities/user × requests/opportunity × match rate × show rate × eCPM / 1000`

Where applicable, diagnose request supply, matched requests and realized impressions separately. A revenue change can come from audience mix, usage frequency, opportunity design, fill/match, show execution or price; it is not automatically caused by acquisition volume.

## 3. Canonical source taxonomy

Use stable controlled labels rather than ad-hoc campaign names.

Recommended hierarchy:

`product / platform / source_family / source / surface / content_or_campaign / variant / date_window`

Example conceptual labels:

- `minttap / ios / owned_search / minttap_web / roc_article / final_roc_guide / cpp_roc / 2026Q4`
- `minttap / android / owned_community / minttap_subreddit / education_post / reverse_split / main_listing / 2026Q4`
- `logmate / ios / specialist_community / permitted_forum_x / migration_answer / csv_import / cpp_migration / 2026Q4`

Never encode personal identities into campaign names.

## 4. Funnel metric contract

Every KPI needs a numerator, denominator, time window, population and source.

Minimum company contract:

- Store conversion = downloads / relevant store impressions or product-page views, using the platform's exact metric definition and naming the denominator.
- Activation rate = newly observed users reaching the defined activation event within X days / eligible newly observed users.
- D7 retained activation = activated cohort returning to perform the designated core-value event in the defined D7 window / activated cohort.
- Ad opportunity rate = eligible ad opportunities / active user or session, only after opportunity is explicitly defined.
- Impression realization = impressions / eligible opportunities, with request/match/show subdiagnostics where available.
- Ads ARPU = ad revenue / active users for the same period and population.

Do not mix App Store downloads, Firebase first_open, device installations and active users as if they were the same population.

## 5. Missing-data protocol

Use four states:

- `OBSERVED` — directly reported/measured under a documented definition.
- `DERIVED` — mathematically calculated from observed fields; formula retained.
- `ESTIMATED` — modeled from assumptions; assumptions and uncertainty retained.
- `UNKNOWN` — not measured or unavailable.

`UNKNOWN` must never silently become zero.

Privacy-thresholded/suppressed platform data should be labeled `SUPPRESSED/INSUFFICIENT VOLUME`, not zero.

## 6. Cohort architecture

For early niche apps, cohort before aggregate optimization.

Recommended cohort dimensions, subject to adequate volume/privacy:

- acquisition period;
- OS/store;
- source family;
- campaign/content or custom page;
- territory/language when strategically relevant;
- activation status;
- app version when product changes affect behavior.

Do not over-segment sparse traffic. Small cohorts create false volatility and may be suppressed by platform privacy rules. Aggregate until the sample can support the decision.

## 7. Activation is product-specific

### MintTap candidate activation hypothesis

Do not define activation as install, opening the app or merely completing onboarding. Candidate meaningful states should correspond to successfully establishing a trackable YieldMax position/portfolio and seeing useful portfolio/distribution information. Exact event must be validated against current product behavior and retention data.

### LogMate candidate activation hypothesis

Candidate activation should correspond to successfully establishing usable logbook data — e.g. first valid flight record/import plus successful access to a meaningful logbook view. Exact definition remains open until the production workflow and observed retention exist.

These are hypotheses, not canonical product KPIs yet.

## 8. Source tagging operating rules

1. Assign a stable source/campaign identifier before publishing a trackable owned link.
2. Keep human-readable campaign registry metadata in the marketing repository; do not rely on memory.
3. Do not change taxonomy mid-campaign without recording the mapping.
4. Separate channel (`community`) from specific source (`r/...`) and content asset.
5. Preserve organic/unknown as legitimate categories rather than forcing attribution.
6. Use store-native campaign/custom-page mechanisms where they provide privacy-preserving measurement.
7. Never claim deterministic cross-platform identity when only aggregate/source-level evidence exists.

## 9. Privacy boundary

Measurement architecture must follow data minimization: collect what is needed to make a defined decision, not what might someday be useful.

Important practical boundary: attribution capability can depend on SDK/framework choices and consent/platform rules. Therefore Marketing Manager specifies the business question and minimum data requirement; engineering/privacy implementation must verify current Apple/Google/Firebase requirements before release.

A marketing desire for better attribution does not justify unnecessary identity collection.

## 10. Decision table

| Observation | First diagnostic question | Do not conclude yet |
|---|---|---|
| High store traffic, low downloads | intent/page-message/proof mismatch? | channel is bad |
| High downloads, low activation | onboarding/product expectation mismatch? | store page is successful overall |
| High activation, weak D7 core-value return | recurring value/workflow friction? | acquire more users |
| Strong retention, weak ad revenue | opportunities, request/match/show/eCPM? | users are low value |
| Strong click/download counts, weak retention | source quality or promise mismatch? | campaign is a winner |
| Small campaign shows no platform row | privacy/volume threshold? | zero downloads |

## 11. Minimum viable dashboard for yhappcom

Do not build a large BI system first. A weekly decision sheet/dashboard should initially contain:

- source/campaign registry;
- store impressions/page views/downloads/conversion where available;
- first opens/new users under the analytics system's definition;
- activation count/rate;
- D7 core-value retention once volume allows;
- active users;
- ad opportunities/requests/matched requests/impressions where available;
- ad revenue, eCPM and Ads ARPU;
- `OBSERVED/DERIVED/ESTIMATED/UNKNOWN` status;
- product/app version and material marketing/product changes.

The dashboard exists to locate the bottleneck, not to maximize the number of metrics.

## 12. Experiment rule

A channel/store/content experiment must state before launch:

- hypothesis;
- target cohort;
- primary metric;
- guardrail metric (especially retention/trust/UX);
- measurement source;
- minimum observation window or evidence threshold;
- known attribution gaps;
- decision rule: continue / revise / stop / inconclusive.

Do not retrospectively choose the metric that improved.

## 13. Current evidence checked

Primary/current documentation checked 2026-09-15:

- Apple Developer — App Store Connect Analytics: Acquisition.
- Apple Developer — App Store Connect Analytics: Campaign links.
- Apple Developer — App Store Connect Analytics: Custom Product Pages.
- Firebase — Google Analytics event logging and reporting documentation.

The Google Play acquisition-reporting layer requires a further authoritative-documentation pass before company-specific field names or attribution guarantees are frozen. Community/help-thread behavior is not sufficient evidence for a canonical implementation contract.

## 14. Retained expert judgment

The correct optimization unit is not cheapest install. For an ad-supported niche utility, the useful unit is closer to:

`source cohort → activated retained user → sustainable ad-bearing usage`

but only at the level the evidence can support.

The architecture therefore favors:

- source-level and cohort-level evidence over invasive identity stitching;
- activation/retention over install vanity metrics;
- bottleneck diagnosis over one composite score;
- explicit unknowns over fabricated attribution;
- ad revenue as a downstream product-system outcome, not a reason to increase ad pressure blindly.

## Next research gate

1. Verify Google Play's current first-party acquisition/custom-listing measurement documentation and map it to this architecture.
2. Inspect MintTap's actual analytics/ad telemetry implementation before recommending event names or ad-placement changes.
3. Build the Stage 1 demand-creation vs demand-capture foundation and connect it to the channel matrix.