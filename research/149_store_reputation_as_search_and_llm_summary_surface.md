# 149 — Store reputation as search, conversion, and review-summary surface

Validated: 2026-09-20

## Why this is new
Research 148 established rating-request and response integrity. This addition addresses a different question: what Store reputation *does downstream* once authentic ratings/reviews exist. For a sparse niche app, reputation is not merely a support inbox or a star average. On Apple it can become search-ranking input, visible search-result evidence, territory-specific conversion evidence, and source material for an LLM-generated review summary.

## Authoritative findings

### Apple ratings/reviews participate in discovery
Apple's current App Store search documentation says ranking uses text relevance plus customer behavior including downloads, ratings, and reviews. Ratings/reviews can appear in search results and influence ranking. Therefore authentic reputation is part of ASO, but Apple does not publish a controllable weight or causal formula. Never translate this into a promise that acquiring N reviews will move rank by X positions.

Sources:
- https://developer.apple.com/app-store/search/
- https://developer.apple.com/app-store/discoverability/

### Reputation is territory-specific, not one global acquisition asset
Apple states that the summary rating shown on the product page/search results is specific to each App Store territory. App Store Connect also supports country/region and app-version filtering for review analysis. A global average can therefore hide the exact trust evidence a prospective user sees in Korea, the US, or another target market.

Sources:
- https://developer.apple.com/app-store/ratings-and-reviews/
- https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/view-ratings-and-reviews

### Review text can now be compressed into an Apple-generated acquisition artifact
Apple currently provides LLM-generated review summaries on App Store product pages in the US and eight additional storefronts (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, and the UK, in English). Apple says the summary compiles highlights/key information from individual user reviews and is refreshed regularly. This creates a new boundary: repeated authentic user-language themes can be surfaced to prospects even when they do not open individual reviews.

Source:
- https://developer.apple.com/app-store/ratings-and-reviews/

Operational implication: do not optimize wording for the summary or solicit users to mention keywords. Instead, treat recurring summary themes as a lagging, platform-generated reflection of real product experience. If a summary is materially wrong, Apple provides a report-concern path in App Store Connect.

### Resetting an Apple summary rating destroys evidence but not written-review history
Apple permits resetting the summary rating when releasing a new version, but explicitly recommends doing so sparingly. Few ratings may discourage downloads, and resetting the summary rating does not reset written reviews. A reset is therefore not a cosmetic reputation-cleaning tactic. It changes visible quantitative evidence while historical qualitative evidence remains.

Source:
- https://developer.apple.com/app-store/ratings-and-reviews/

### Review-response datasets remain censored
Google's Reply to Reviews API exposes only reviews containing comments, not rating-only feedback. Apple review views can be filtered by territory/version/rating/response state. Consequently, text-review themes are useful issue evidence but cannot be treated as a representative sample of all raters or users.

Source:
- https://developer.android.com/google/play/developer-api

## BM0–BM5 — Store Reputation Acquisition-Surface Gate

**BM0 — Authenticity inheritance**  
Only reputation evidence that passes BL/BK integrity can enter acquisition analysis. Never improve the acquisition surface by manufacturing ratings, selected-positive cohorts, insider consensus, incentives, or star-pressure responses.

**BM1 — Surface identity**  
Record platform, storefront/territory, app version where available, rating count, summary rating, visible written-review set, Apple review-summary availability, and observation date. Never collapse territory-specific evidence into an assumed universal Store state.

**BM2 — Discovery role**  
Separate verified platform facts from hypotheses. Apple confirms ratings/reviews are search inputs; the exact weighting is unknown. Search-rank movement after review changes is observational unless a design supports stronger inference.

**BM3 — Theme extraction without representativeness claims**  
Classify written-review and platform-summary themes into proof, workflow, trust/privacy, correctness/domain, reliability/performance, support, and missing-feature categories. Preserve denominator and censoring: written reviews are not all ratings, and reviewers are not all users.

**BM4 — Product/Store routing**  
Route recurring themes to the responsible system. Product defects go to product engineering; financial correctness to BE; aviation/regulatory correctness to the future aviation authority hierarchy; expectation mismatch to Store metadata/screenshots; support friction to support operations. Marketing may improve truthful expectation-setting but must not suppress the underlying criticism.

**BM5 — Downstream validation**  
Evaluate whether a resolved recurring issue is followed by better qualified Store conversion/first value/useful return using territory- and version-aware evidence. Do not claim that review response alone caused rating, rank, or conversion changes. Preserve release, metadata, seasonality, traffic-source and sample-size confounders.

## MintTap application
MintTap's US/income-investor audience and Korean owner/user context make territory separation material. A US review theme about ROC presentation, brokerage connectivity, or manual entry should not be assumed to describe Korean prospects' Store evidence. Likewise a Korean tax/withholding complaint must route to jurisdiction-specific evidence rather than generic copy repair.

For Store operations, capture a periodic territory/version snapshot rather than watching only the global star number. If Apple exposes a review summary for a target storefront, archive the observed summary text/theme state and observation date as platform-generated evidence; do not write marketing claims as if MintTap authored or endorsed Apple's summary.

Do not reset Apple's summary rating merely to hide historical low ratings. Consider reset only after a material product discontinuity/fix and only after weighing the loss of accumulated quantitative trust evidence; written reviews remain regardless.

## LogMate reuse
For LogMate, pilot reviews are likely to contain unusually consequential claims about import correctness, totals, sync, logbook fields, or regulatory expectations. BM routes these to product/regulatory evidence before marketing reuse. A favorable review or Apple-generated summary is not proof of regulatory compliance. Territory/version segmentation is especially important if workflows differ by aviation authority or operator practice.

## Reusable registry row
`platform | storefront/territory | observed_at | app_version_scope | summary_rating | rating_count | written_review_count_observed | platform_review_summary_present | dominant_themes | censored_evidence_notes | routed_owner | product/store action | downstream_metric_window | confounders | decision`

## Anti-patterns now frozen
- Treating star average as a universal global value.
- Treating written-review themes as representative user research.
- Claiming a known App Store search-ranking weight for ratings/reviews.
- Asking users to include ASO keywords or desired phrases in reviews.
- Resetting ratings as cosmetic reputation management.
- Treating Apple-generated review summaries as company-authored testimonials or proof of correctness.
- Fixing Store copy to conceal a real product problem instead of routing the defect.

## Next evidence work
1. Obtain actual MintTap App Store/Play territory/version review data when connector/console evidence is available.
2. Record whether MintTap currently has an Apple review summary in each relevant storefront and archive its themes/date.
3. Join recurring review themes to release fixes and Store expectation-setting changes without causal overclaiming.
4. Continue the implementation audit for actual in-app rating triggers when the release source repository is accessible.
