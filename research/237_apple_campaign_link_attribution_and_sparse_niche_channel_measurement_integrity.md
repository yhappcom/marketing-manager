# Research 237 — Apple Campaign-Link Attribution & Sparse-Niche Channel Measurement Integrity

Date: 2026-09-24

## Why this matters
For a zero-cost niche-app business, Reddit, owned web, blog, social posts, email and other unpaid distribution can produce too little traffic for conventional attribution assumptions. App Store Connect campaign links provide first-party campaign attribution, but their semantics and privacy thresholds must be respected. This research establishes a measurement contract rather than a mandate to tag every link.

## Validated platform facts
Apple App Store Connect Analytics distinguishes App Store search, App Store browse, app referrer, web referrer and custom marketing campaigns as acquisition sources. Sales, usage and subscription data are attributed to the download source recorded when a user downloads or redownloads the app. A manual redownload resets source attribution for subsequent sales, usage and subscription data.

Campaign links use URL parameters and can attribute impressions, product-page views, downloads, usage, sales and subscriptions to a campaign token. Apple explicitly positions them for marketing materials including social promotion and email. Results can be examined by territory, device and page type.

Campaign attribution has important boundaries. A first-time download is credited when it occurs within 24 hours after use of the campaign link/token. If multiple campaign links are used during the relevant period, the most recent link receives subsequent-sales credit. Campaign analytics appear only after the campaign has run for more than a day and relevant metrics meet privacy thresholds; Apple documents a minimum threshold of five for dashboard metrics and at least five first-time-download users before campaign data begins appearing. Detailed exported reports may withhold or combine very small cohorts for privacy.

Campaign-link creation itself may be unavailable for a brand-new app until App Store Analytics has received data; Apple advises checking after the app is live and downloads have occurred for at least 24 hours.

Referrer semantics also matter. On iOS, Safari website taps can appear as web referrers, while taps from non-Safari browsers such as Chrome are attributed to the browser app under app referrers. Therefore `web referrer` is not equivalent to `all web-origin demand`.

## Interpretation rules
- `campaign link click ≠ download`.
- `download attributed to campaign ≠ campaign caused durable specialist value`.
- `missing campaign metric ≠ zero`; it may be below a privacy threshold.
- `web referrer ≠ all website-origin traffic` on iOS.
- `source attribution ≠ immutable lifetime origin`; manual redownload can reset the source used for later sales/usage/subscription attribution.
- `last eligible campaign attribution ≠ proof that the last touch was the sole causal influence`.
- `campaign first-time download ≠ retained specialist user`.
- A privacy-suppressed niche cohort remains unknown, not zero.

## EW0–EW5 — Campaign Attribution & Sparse-Niche Channel Measurement Integrity Gate

### EW0 — Decision identity
State the decision the attribution evidence is intended to change: continue a community venue, preserve an owned resource, repeat a launch post, change destination, or stop a low-value activity. Do not instrument merely to accumulate campaign IDs.

### EW1 — Source/link identity
Record exact venue/surface, destination, platform, campaign token/link, deployment date and whether traffic can be represented by Apple campaign attribution, web referrer, app referrer or neither.

### EW2 — Attribution-window integrity
Preserve Apple's 24-hour first-time-download attribution rule, latest-link behavior and redownload/source-reset semantics. Do not reinterpret attributed downloads as full-funnel causal attribution.

### EW3 — Sparse/privacy integrity
Record threshold-suppressed and withheld/combined observations as unknown. Do not compare a visible campaign against an invisible low-volume campaign as though invisible means zero.

### EW4 — Downstream-value integrity
Where evidence is available, connect campaign/source to usage and other meaningful downstream measures rather than ranking channels by downloads alone. Keep specialist first/repeated value and support/reputation evidence conceptually separate from Store attribution.

### EW5 — Qualified channel decision
Continue, change or stop a zero-cost channel only when the evidence is sufficient for the decision. For sparse cohorts, prefer longer windows, aggregated decision classes and qualitative specialist evidence over fabricated precision.

## MintTap operating policy
Use distinct campaign tokens only when they correspond to a real decision boundary—for example a specific owned-resource launch, a permitted subreddit contribution, or a materially different social distribution experiment. Do not create per-post token fragmentation that guarantees privacy-suppressed cells. Preserve Reddit/community permission rules independently of attribution: measurable traffic never authorizes promotion that a venue does not permit.

For r/MintTapforYieldMax and minttap.app, campaign evidence should answer whether a contribution/resource routes qualified YieldMax investors toward useful product discovery and downstream use. A low-volume campaign with no visible dashboard row must remain `unknown/below threshold`, not `failed`.

## LogMate operating policy
Before launch, define a compact campaign taxonomy rather than dozens of links. Candidate decision classes are owned web, pilot-community contribution, launch announcement and any genuinely distinct professional channel. Do not split the first small pilot cohort across granular campaign IDs when that destroys interpretability. Store attribution is subordinate to product stability, pilot trust and first/repeated logging value.

## Reusable company framework
Maintain a campaign/source registry:
`app × platform × venue/surface × content/resource × destination × campaign token × start/end × attribution semantics × privacy threshold state × first-time downloads × downstream available metrics × specialist-value evidence × decision`.

Use platform-native first-party attribution before adding third-party tracking complexity. Instrumentation must remain proportional to the business decision and privacy constraints.

## Authoritative sources
- Apple, App Store Connect Analytics — Acquisition: https://developer.apple.com/help/app-store-connect-analytics/acquisition/acquisition
- Apple, App Store Connect Analytics — Campaign links: https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links
- Apple, App Store Connect Analytics — Metric definitions: https://developer.apple.com/help/app-store-connect-analytics/reference/filters-and-dimensions

## Next evidence work
1. Inspect MintTap App Store Connect Sources/Campaigns and current external App Store links.
2. Determine whether existing Reddit, minttap.app/blog and social links are distinguishable at a decision-useful granularity.
3. Build a compact token taxonomy; do not retrofit false precision into historical untagged traffic.
4. Compare source/campaign downloads with available downstream usage rather than downloads alone.
5. For LogMate, prepare taxonomy only; activate after App Store Analytics data exists and launch channels are real.