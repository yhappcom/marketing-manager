# 065 — Zero-Cost Store Message Routing for Sparse-Niche Apps

Date: 2026-09-17
Status: VALIDATED PLATFORM CAPABILITY / APPLICATION REQUIRES PRODUCT EVIDENCE

## Question
Can a niche app route different zero-cost acquisition messages to different App Store / Google Play product-page experiences without buying ads, and how should this be used without fragmenting claims or over-reading sparse conversion data?

## Authoritative platform findings

### Apple App Store
Apple currently allows up to 70 Custom Product Pages (CPPs) per app. A CPP can carry distinct screenshots, app previews, promotional text and keywords, can be localized, and has a unique shareable URL. CPPs can also be assigned keywords so that the relevant page can appear for those App Store searches. A CPP must be approved before it is visible. App Analytics exposes page-level impressions, downloads and conversion rate after at least five first-time downloads. Apple also supports an optional approved app deep link; on iOS/iPadOS 18+ the Open action can take the user to specific in-app content.

Important distinction: Product Page Optimization (PPO) is a randomized experiment on the default product page and supports up to three treatments. Apple states PPO is not available for CPPs. Therefore CPP = message/audience routing; PPO = controlled creative experiment. Do not treat them as interchangeable evidence.

Sources:
- Apple, Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- Apple, Custom Product Pages analytics: https://developer.apple.com/help/app-store-connect-analytics/acquisition/custom-product-pages
- Apple, Product Page Optimization overview: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization

### Google Play
Google currently allows up to 50 Custom Store Listings (CSLs). A CSL can customize app name, icon, descriptions and graphics and can target audience segments including country/region, pre-registration, search keywords, lapsed/churned states, buyer states, ads traffic and custom audiences. A CSL can also be reached through a unique URL parameter, making direct message-to-listing routing possible without paid media.

Google explicitly states CSLs are not automatically translated. A selected market can therefore receive the CSL default language unless translations are supplied. This creates a localization failure mode that does not exist merely because the main listing has translations.

Source:
- Google Play Console Help, Create custom store listings to target specific user segments: https://support.google.com/googleplay/android-developer/answer/9867158

## New operating model: Message → Store Promise → Product Value
For zero-cost niche acquisition, a community/blog/social post should not always terminate at one generic store page. When evidence supports genuinely different user intents, use a routed chain:

`qualified source intent → matching store promise → matching first-value path → retained core value`

The purpose is semantic continuity, not page proliferation.

Examples that may become valid after product evidence:
- MintTap: a YieldMax ROC-focused educational article may route to a store page whose first screenshots explain ROC-aware tracking, while an import-focused article may route to a page emphasizing portfolio import. These are candidates only; each claim remains bounded by verified implementation and activation evidence.
- LogMate: future roster-import, offline logbook, or pilot-specific workflow messages should not receive dedicated store variants until those capabilities and their first-value paths are implemented and verified.

## Sparse-niche constraint
The availability of 70 Apple CPPs or 50 Google CSLs is not a recommendation to create many pages. Sparse specialist traffic creates a severe evidence-fragmentation cost. Splitting a small audience across many pages can leave every variant below useful observation thresholds and encourages false conclusions from tiny samples.

Default rule:
**Minimum Viable Message Architecture Before Maximum Page Count.**

Create a new routed store page only when all are true:
1. the incoming audience has a materially different intent, not merely a different channel;
2. the product has a verified capability/value path that answers that intent;
3. the store promise can remain inside the current claim ceiling;
4. enough qualified traffic can plausibly reach the page to make observation useful;
5. the page can be maintained across languages, screenshots, releases and policy changes.

Otherwise use the default listing.

## Measurement hierarchy
Do not select a winning routed page from conversion rate alone.

Preferred evidence chain:
1. source relevance / permission quality;
2. store-page view or impression;
3. first-time download / store acquisition;
4. semantic first value;
5. useful return / retention evidence;
6. sustainable ad-bearing use.

A higher store conversion rate with weaker downstream first value is not a marketing win. Apple explicitly exposes downstream CPP analytics such as engagement and retention, reinforcing the need to judge more than conversion. For MintTap, first-value telemetry is not yet verified, so CPP/CSL conversion cannot currently prove sustainable acquisition quality.

## Direct-link attribution discipline
Unique CPP/CSL URLs are useful for zero-cost channels because they preserve message routing without requiring paid ads. Recommended use once assets exist:
- one canonical direct link per validated intent family;
- record source channel separately in owned analytics where privacy-safe;
- do not create a different store page solely to identify every subreddit, blog post or social post;
- do not infer causal superiority when traffic volume is too sparse;
- preserve the same claim ledger across source copy and store copy.

## Search-intent routing
Both stores now provide search-related routing mechanisms: Apple CPPs can be assigned keywords; Google CSLs can target search keywords. This changes ASO architecture from a single-page keyword model toward intent-specific presentation. But keyword routing should only be used when the corresponding screenshots/copy materially improve relevance for that search intent. Keyword presence alone is not evidence that a separate page is justified.

## Localization rule
A localized acquisition source must terminate in a semantically adequate store experience. On Google Play, CSL translations must be explicitly supplied; main-listing translation coverage does not guarantee CSL translation coverage. For MintTap KRW acquisition, the 063/064 currency-semantic claim ceiling still applies: a Korean store variant may say supported capabilities that are verified, but must not upgrade them into ease/comprehension claims before K1/K2 evidence.

## Deep-link caution
Apple CPP deep links can shorten the post-install/open path on iOS/iPadOS 18+, but they must not bypass required onboarding, consent, account or data-integrity invariants. Deep-link availability therefore does not automatically justify routing a new user directly into a specialized workflow. Product/Engineering review is required before using this as an activation optimization.

## Reusable principles
- **Message Routing Before Message Multiplication** — route only materially distinct intent.
- **Store Variant Is a Promise Contract** — every variant must map to verified product value.
- **Conversion Is an Intermediate Metric** — optimize through first value and useful return.
- **Sparse Traffic Punishes Fragmentation** — page count is a maintenance/evidence cost.
- **Localization Must Follow the Variant** — custom listing localization is its own obligation.
- **Search Intent Can Change Presentation, Not Truth** — keyword-specific pages cannot exceed the product claim ceiling.
- **Direct Links Are Routing Infrastructure, Not Evidence** — a unique URL enables segmentation; it does not prove the segment works.

## Application decision
Do not immediately create MintTap CPP/CSL variants. Current highest-priority activation issues remain unresolved and first-value telemetry is not verified. Instead, prepare a future two-level architecture:
- default listing = broad YieldMax portfolio-tracking promise;
- at most one additional intent-specific page at a time, only after a corresponding first-value path and claim are verified.

For LogMate, defer variants until implemented capabilities and launch segment boundaries are stable.

## Next useful research
When live Store assets become available, audit whether the default MintTap listing currently tries to serve multiple incompatible intents. If so, build a two-page message architecture candidate and map each screenshot/copy claim to the evidence ledger before publishing anything.
