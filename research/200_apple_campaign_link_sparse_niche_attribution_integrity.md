# Research 200 — Apple Campaign-Link Sparse-Niche Attribution Integrity

Date: 2026-09-22
Status: Validated from current Apple documentation

## Why this matters
Zero-cost marketing for a sparse professional app needs channel-level evidence without buying an attribution stack. Apple App Store Connect campaign links provide a first-party, privacy-aware mechanism for separating owned-web, Reddit, blog, social, community-partnership and other outbound Store routes. They are useful only if their attribution semantics and privacy thresholds are preserved.

## Validated platform facts
Apple states that campaign links are generated in App Store Connect Analytics and can be placed in marketing materials including social media, email, advertising and cross-promotion. Analytics can associate campaign tokens with impressions, product-page views, downloads, usage, sales and subscriptions.

A campaign cannot be created before the app has Analytics data. Apple says the Campaigns feature becomes available after the app is live and generating downloads; the UI may not appear until at least 24 hours after downloads begin.

A first-time download is attributed when it occurs within 24 hours of use of the campaign link/token. If multiple campaign links are used in the relevant period, the most recent receives credit for subsequent sales.

Dashboard metrics are privacy-thresholded: an individual metric appears only when it reaches at least 5 in the selected date range. Apple also states that a campaign appears after at least 24 hours and campaign data requires at least five individual first-time-download users. Detailed exported reports have stronger privacy protections and may withhold or combine very small cohorts.

Apple acquisition reporting distinguishes App Store search, App Store browse, app referrer and web referrer. Safari-originating website traffic can be reported as web referrer, while for iOS, links opened from non-Safari browsers such as Chrome are attributed as the browser app under app referrer. Therefore `web referrer` is not equivalent to all web-originated demand.

Campaign links are storefront-portable: Apple redirects users to their own local storefront even when the URL contains a region code. A `/us/` segment therefore does not prove US traffic.

Custom Product Pages can be evaluated through downstream metrics and only surface their own analytics after at least five first-time downloads. Campaign identity, source/referrer identity and CPP identity are related but distinct dimensions.

## DL0–DL5 Campaign Attribution & Sparse-Cohort Integrity Gate

### DL0 — Route identity
Record the exact owned/community/social surface, placement, date range, audience/job and destination page. Do not use one generic token across materially different routes.

### DL1 — Token integrity
Generate tokens through App Store Connect. Preserve provider token vs campaign token semantics. Never infer campaign identity from a raw Store URL without verified token evidence.

### DL2 — Attribution-window integrity
Treat the 24-hour first-download attribution and last-campaign-credit behavior as platform attribution rules, not causal truth. A credited campaign may be the last measurable touch rather than the origin of demand.

### DL3 — Privacy/sparsity integrity
`missing campaign metric ≠ zero`. Check age of campaign, threshold eligibility and reporting privacy before declaring failure. Never attempt to defeat privacy thresholds by user-level reconstruction.

### DL4 — Source-semantic integrity
Keep campaign, source type, web referrer, app referrer, territory and CPP/page identity separate. Browser behavior can change source classification; Storefront URL text does not establish user territory.

### DL5 — Qualified-value decision
Optimize routes on downstream specialist value, repeat value and sustainable monetization where measurable—not click, page-view or download counts alone. Low-volume channels may require longer observation windows rather than broader or more intrusive promotion.

## Canonical semantic rules
- campaign credit ≠ causal acquisition source
- last campaign credit ≠ first discovery source
- missing metric ≠ zero activity
- 5-user/metric threshold ≠ statistically sufficient evidence
- web referrer ≠ all web-originated traffic
- browser app referrer ≠ necessarily app-native promotion
- `/us/` URL ≠ US user/territory
- product-page view ≠ qualified acquisition
- download ≠ specialist-value completion
- CPP conversion ≠ campaign quality
- campaign-token proliferation ≠ better measurement

## MintTap operating contract
Create stable route identities only after verifying the live App Store Analytics capability. Separate at minimum materially different routes such as minttap.app owned pages, official r/MintTapforYieldMax placements, permitted third-party Reddit/community placements, blog articles and social surfaces when volume makes measurement useful. Do not split tiny cohorts so aggressively that every route remains privacy-suppressed.

For each route preserve: campaign token, surface/placement, message/claim, audience intent, destination/default-vs-CPP, territory/language context, start/end, visible thresholds, downloads and available downstream value evidence. Community links must remain subordinate to community rules and disclosure requirements.

The decision metric is not which channel produces the most downloads. Prefer routes that produce users who complete and repeat the promised YieldMax portfolio workflow and, where relevant, generate privacy-eligible non-intrusive monetizable use.

## LogMate operating contract
At launch, use first-party campaign links only after Analytics becomes available; do not assume they can be pre-created before first live data. Preserve pilot-community provenance by forum/community/owned-web/social route without creating excessive tiny tokens. A pilot-community route with low volume can be strategically valuable even when Apple suppresses its campaign metrics; absence of a visible row is not evidence of no impact.

## Reusable company registry
`campaign_id | app | platform | route/surface | placement | audience_job | claim | destination_page | CPP | locale/territory context | provider_token | campaign_token | start/end | source_type | referrer | reporting_threshold_state | downloads | downstream_value | repeat_value | monetization | interpretation | decision`

## Sources
- Apple Developer — Campaign links, App Store Connect Analytics (current 2026 documentation)
- Apple Developer — Acquisition sources and metric/filter definitions
- Apple Developer — App Store Discovery and Engagement analytics-report schema
- Apple Developer — Custom Product Pages analytics

## Next validation
Audit MintTap's live App Store Connect Campaigns availability/history, existing tokens, route naming, source/referrer dimensions, CPP association, privacy-suppressed rows and downstream usage/value. Do not create a campaign calendar before production evidence is known.