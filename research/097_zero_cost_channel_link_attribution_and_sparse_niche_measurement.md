# 097 — Zero-Cost Channel Link Attribution and Sparse-Niche Measurement

Last validated: 2026-09-18

## Canonical principle

**Instrument the route before scaling the route. In a sparse niche, unattributed traffic is not evidence and tiny attributed cohorts are not population truth.**

This note operationalizes 080 (permission before attribution before scaling) for the channels the company can actually use without media spend: owned website/blog, Reddit/community posts where links are permitted, social profiles/posts, editorial outreach, and future relevant cross-app routes.

## Why this matters

MintTap and LogMate address narrow specialist audiences. Aggregate install movement is therefore especially dangerous as a decision signal: a small absolute change can look large, multiple zero-cost activities can overlap, and platform privacy thresholds can suppress the very cohorts we care about. The correct objective is not maximal tagging. It is enough route-level evidence to distinguish useful distribution from noise without violating community norms or making unsupported causal claims.

## First-party platform capabilities validated

### Apple App Store

App Store Connect Analytics campaign links use URL campaign parameters and can attribute impressions, product-page views, downloads, usage, sales, and subscriptions to a campaign token. Apple says campaign links can be used for marketing materials including social promotions and email. The provider token identifies the developer account and is reused; the campaign token distinguishes campaigns.

Apple's current help states that a first-time download is counted for a campaign when it occurs within 24 hours after use of the campaign link/token; where multiple campaign links are used in the relevant period, the most recent link receives credit for subsequent sales. Campaigns appear only after at least 24 hours and dashboard metrics require a minimum threshold of 5. Detailed reports can also suppress or combine very small cohorts for privacy.

The App Store Discovery and Engagement analytics schema includes Campaign, Source Type, Source Info, Page Title, Territory and engagement fields. This makes campaign tokens a useful first-party route identifier, but not a perfect causal identifier.

Custom product pages have unique URLs and can be shared through communication channels. Where a distinct intent page is justified under 093 Q0–Q5, route identity and page identity should be recorded separately: channel/campaign answers **where the user came from**; CPP answers **which promise/evidence surface they saw**.

### Google Play

Play Console Store listing conversion analysis can filter by traffic source, store listing, country, language, UTM source, UTM campaign and acquisition state. For ads/referrals, UTM source and UTM campaign are available dimensions. Google also provides downloadable store-performance reports containing traffic source, search term, UTM source, UTM campaign, acquisitions, visitors and conversion rate; low-volume values can be grouped as `Other` because of minimum thresholds.

Google Play Install Referrer can securely return referrer content plus click/install timestamps and first-installed app version. This is useful when an Android implementation genuinely needs install-referrer data, but Store-level UTM reporting should remain the minimum viable measurement layer for marketing. Do not add app instrumentation merely because an API exists.

Google Analytics recommends standardized UTM naming because inconsistent parameters fragment reporting; source, medium and campaign are core fields and values are case-sensitive.

## Route ledger

Every deliberately distributed zero-cost link should have one canonical ledger row before publication:

`asset_id → product → audience/job → channel → placement/community → permission state → content promise → destination type → store page/CPP/CSL → platform campaign/UTM identifier → publish date → first-value hypothesis → useful-return hypothesis → evidence window → result → decision`

The ledger is not a surveillance system. It is a decision record.

### Naming contract

Use stable machine-readable identifiers, not prose that changes between reports.

Recommended semantic components:

- product: `minttap`, `logmate`
- channel: `owned_blog`, `reddit`, `social_profile`, `social_post`, `editorial`, `cross_app`
- placement: stable community/site/account identifier
- asset: canonical content or launch-moment ID
- intent: user-job family, not speculative demographics
- variant: only when a real creative/destination difference is being tested

For Apple, encode the useful route distinction in the App Store Connect campaign token within Apple's token constraints. For Google Play, map the same semantic taxonomy consistently into UTM source/medium/campaign rather than inventing a separate naming language.

Never put personal data, usernames, email addresses, portfolio information, pilot identity, or other user-specific information into campaign/UTM values.

## C0–C5 Channel Attribution Confidence Gate

This gate is deliberately about **decision confidence**, not conversion quality.

### C0 — Unattributed

A link or post is distributed without a recoverable route identifier where one was reasonably available. Aggregate install movement cannot be assigned to the activity.

Decision: no channel-scaling claim.

### C1 — Tagged but semantically unstable

Identifiers exist, but naming is inconsistent, duplicated, case-fragmented, or cannot be mapped back to a specific asset/placement/intent.

Decision: repair taxonomy before comparison.

### C2 — Route attributable

The route is identifiable and platform reporting shows visits/acquisitions, but downstream first value/useful return is unknown, or privacy thresholds make the cohort too sparse to evaluate.

Decision: evidence of route response only; do not call it a growth engine.

### C3 — Qualified route evidence

The route is attributable, the Store promise is valid under existing Q/T/L gates, and acquired users can be connected at an aggregate/cohort level to the intended first-value behavior without collecting unnecessary identity data.

Decision: eligible for cautious repetition.

### C4 — Repeated useful acquisition

Across multiple independent distributions/time windows, the same channel/audience/job family repeatedly produces qualified acquisition and useful return without community trust deterioration, disclosure failure, or support/mismatch incidents.

Decision: operational channel.

### C5 — Reusable niche distribution pattern

The mechanism has survived repetition across meaningful product moments and has documented prerequisites, stop rules, labor cost and failure modes. It can be adapted to another niche app only after relevance and permission are re-established.

Decision: reusable playbook, never automatic cross-niche transfer.

## Sparse-cohort interpretation rules

1. **Privacy suppression is a boundary, not zero.** Apple campaign dashboard thresholds and detailed-report privacy protections, and Google Play's `Other` grouping, mean missing granular data must not be interpreted as no response.
2. **A campaign token is attribution logic, not randomized causality.** Apple uses a 24-hour first-download window and last-link rules; a campaign result does not prove the post alone caused the install.
3. **Do not manufacture sample size.** Never spam additional posts, communities, or accounts simply to push a cohort over reporting thresholds.
4. **Use repeated directional evidence rather than fragile percentages.** For very small specialist cohorts, record concrete outcomes and repeat the same hypothesis over independent windows before promotion to C4.
5. **Separate route quality from Store conversion.** A high conversion rate can reflect already-high intent. A low-volume specialist route can still be strategically valuable if first value and useful return are strong.
6. **Labor is a real cost even when media spend is zero.** Record preparation, moderation/support, localization and maintenance effort. `zero-cost` means zero paid distribution, not zero economic cost.

## MintTap application

The first useful implementation is not more posting. It is a small link registry for existing owned blog and permitted Reddit/community distribution.

Example hypotheses to test separately:

- reverse-split educational asset → users needing split-aware tracking
- ROC educational asset → users trying to understand portfolio-level ROC tracking boundaries
- distribution-history asset → users seeking YieldMax distribution tracking

Do not route generic YieldMax discussion into a tax-specific Store promise unless the production feature and 093/092 boundaries support it. Ticker names alone do not justify separate campaign families unless the user job or destination evidence differs.

For r/MintTapforYieldMax, 084 governance remains prior to attribution: community trust and usefulness outrank link instrumentation. A tagged link does not make a promotional post appropriate.

## LogMate application

Before launch, define route IDs for genuinely different pilot jobs rather than airline/company identities unless such segmentation is necessary and non-sensitive. Candidate future families include manual log entry, period totals/search, offline/backup, and validated import workflows. Regulatory or authority-specific intent must not be routed to a page until the professional claim boundary is validated.

## Stop rules

Stop or downgrade a route when any of the following occurs:

- community permission or disclosure requirements are not satisfied;
- the destination promise becomes stale or fails Q/T/L integrity;
- route traffic repeatedly fails to reach intended first value;
- support/mismatch incidents indicate the content attracts the wrong job;
- labor per retained useful user is persistently disproportionate to the channel's strategic value;
- attribution granularity is below the platform privacy threshold and no ethical aggregate method can answer the decision question.

## Sources

Validated against current first-party documentation on 2026-09-18:

- Apple Developer — App Store Connect Analytics, Campaign links: https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links
- Apple Developer — App Store Discovery and Engagement analytics schema: https://developer.apple.com/documentation/analytics-reports/app-store-discovery-and-engagement
- Apple Developer — Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- Google Play Console Help — Understand and grow your app's user base: https://support.google.com/googleplay/android-developer/answer/9859173
- Google Play Console Help — Download and export monthly reports: https://support.google.com/googleplay/android-developer/answer/6135870
- Android Developers — Google Play Install Referrer: https://developer.android.com/google/play/installreferrer
- Google Analytics Help — URL builders / UTM best practices: https://support.google.com/analytics/answer/10917952

## Next validation

Inventory the actual MintTap outbound Store links now used on minttap.app, the blog, Reddit and social profiles/posts. Determine which can receive first-party Apple campaign tokens / Google Play UTM taxonomy without changing community-native behavior. Then establish a C2 baseline before increasing distribution frequency.