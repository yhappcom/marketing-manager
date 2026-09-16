# 046 — Source-Package Measurement Taxonomy for Sparse-Niche Apps

Updated: 2026-09-16

## Question

How should a zero/low-spend specialist app name and maintain Apple campaign links and Google UTM-tagged acquisition so measurement remains interpretable when traffic is sparse?

## Authoritative platform constraints

### Apple

App Store Connect campaign links use a campaign token (`ct`) plus the developer-account provider token (`pt`). Apple attributes campaign-linked first-time downloads when the first download occurs within 24 hours of using the campaign link/token. Dashboard campaign metrics are subject to a minimum threshold of 5 in the selected date range; detailed exports can withhold/combine very small groups for privacy. Apple campaign links can connect campaign acquisition to product-page views, downloads, usage and other downstream App Store analytics metrics.

Implication: creating a separate Apple campaign token for every Reddit post, comment, blog paragraph or social post is structurally hostile to sparse-niche measurement. Even technically valid tokens can remain below visibility thresholds and destroy decision usefulness.

### Google / Google Play

Google recommends standardized UTM naming because inconsistent/case-varying values fragment reporting. `utm_source`, `utm_medium`, and `utm_campaign` should be consistently populated; values are case-sensitive. Google Play acquisition reports expose Tracked channels (UTM), while low-volume data can be hidden or grouped into Other because of minimum thresholds. Google Play's downloadable acquisition reports expose UTM source/campaign for tracked third-party referrals.

Implication: Google provides more naming dimensions than Apple, but this is not permission to create more decision units. The company needs one cross-platform semantic layer above native fields.

## Core model

Use **Source Packages**, not asset-level campaigns, as the durable measurement unit.

`asset → source package → intent route → Store proof → first value → useful return → sustainable ad-bearing use`

A Source Package is a stable bundle of acquisition activity that is similar enough to answer one decision question and large enough to have a realistic chance of producing observable data.

### Required Source Package tuple

`product × route × source-family × audience/market × lifecycle-window`

Do not add another dimension unless it changes a real decision.

Examples:

- `minttap | roc-tax | reddit-organic | en-us-yieldmax | evergreen`
- `minttap | reverse-split | owned-blog | ko-kr-yieldmax | evergreen`
- `logmate | import-roster | pilot-community | en-global-airline | prelaunch`

## Naming architecture

Canonical internal ID:

`{product}_{route}_{source}_{market}_{window}`

Rules:

1. lowercase ASCII only;
2. hyphen inside semantic values; underscore separates fields;
3. use controlled vocabulary, never free-form spelling variants;
4. no date unless the date defines a real lifecycle window/event;
5. no individual post/comment/user identifiers;
6. do not encode creative copy in the package ID;
7. never recycle an ID for a materially different route or audience.

### Native mapping

Apple:

- `ct` = compact Source Package ID or a stable shortened alias where needed.
- `pt` = Apple's persistent provider token; do not treat it as source segmentation.

Google / Play:

- `utm_source` = source platform/family, e.g. `reddit`, `naver-blog`, `minttap-web`.
- `utm_medium` = controlled delivery class, e.g. `organic-community`, `owned-editorial`, `organic-social`.
- `utm_campaign` = durable intent-route package, e.g. `minttap-roc-tax-en-us`.
- `utm_id` = optional stable internal Source Package ID when the destination/measurement stack supports it.
- `utm_content` = asset/creative variant only when volume is sufficient and there is a decision to make from that distinction.

Native fields do not need identical strings across Apple and Google. They must map back to the same internal Source Package ID.

## Granularity gate

Create a new Source Package only when at least one is true:

1. the intent route is materially different;
2. the Store story/landing proof is materially different;
3. the audience/market changes claims, terminology, regulation or expected value;
4. the source family has meaningfully different permissions or behavior;
5. a bounded event/window requires separate evaluation;
6. there is enough expected traffic to support a separate decision.

Otherwise consolidate.

### Explicit anti-fragmentation rule

Do **not** create a new campaign/package merely because there is a new:

- Reddit thread/comment;
- blog article revision;
- social post;
- screenshot/copy variation;
- day/week;
- community with effectively the same audience and permission regime.

Track those as asset metadata under the package. Promote an asset distinction to a measurement dimension only after evidence says the distinction is decision-relevant and volume can support it.

## Sparse-data hierarchy

When package-level data is below native reporting/privacy thresholds, aggregate upward in this order:

`asset → source package → route → source family → product`

Never interpret hidden/Other/missing native rows as zero.

For Apple specifically, the minimum-5 dashboard behavior means a package should generally live long enough to accumulate evidence rather than being replaced on an arbitrary weekly cadence.

## Lifecycle and expiry

A Source Package has states:

`DRAFT → ACTIVE → OBSERVING → DECISIONABLE | INCONCLUSIVE → ARCHIVED`

- **DRAFT**: naming/route/permission defined, not yet distributed.
- **ACTIVE**: currently receiving traffic.
- **OBSERVING**: distribution stopped or reduced; downstream behavior still being observed.
- **DECISIONABLE**: enough evidence for the intended decision.
- **INCONCLUSIVE**: exposure ended without enough observable evidence.
- **ARCHIVED**: retained for history; ID never reused.

### Expiry rule

Do not expire by calendar alone. Archive when the underlying decision window closes, route changes materially, permission changes, or further traffic is not expected. A low-volume evergreen package may remain active for months.

## Decision rule

A campaign identifier exists to answer a question, not to document every distribution act.

Before creating one, write:

`If this package produces enough evidence, what decision can change?`

If the answer is unclear, do not create a new package.

## Cross-platform comparability

Do not directly compare raw Apple and Google counts as though their attribution/reporting systems were identical. Compare within-platform trends first, then map evidence to the common Source Package and downstream product metrics.

Cross-platform decision object:

`Source Package → native acquisition evidence → activation evidence → useful-return evidence → ad-bearing-use evidence`

Attribution uncertainty remains explicit.

## Company operating rules added by this research

### Package Before Parameter
Define the decision package first; generate Apple/Google parameters second.

### Decision Before Granularity
A new measurement dimension requires a distinct decision, not merely a distinct asset.

### Accumulate Before Splitting
Sparse specialist traffic is accumulated into stable packages until evidence justifies finer segmentation.

### Missing Is Not Zero
Privacy thresholds, `Other`, unavailable fields and uninstrumented paths remain unknown/aggregated rather than being interpreted as failure.

## Application examples

### MintTap

A sequence of Reddit answers about Final ROC tax adjustment should normally share one `roc-tax` Source Package while the route, audience and Store story remain the same. Individual threads remain asset records. Only split when evidence supports a genuinely different intent such as reverse-split accounting versus tax settlement.

### LogMate

Pre-launch posts about roster import should not be split by every pilot forum/community unless permissions, professional segment, geography/regulatory terminology or actual user intent differs enough to change the launch decision.

## Next validation

1. Build the registry template and controlled vocabulary.
2. Populate only packages backed by actual route/community evidence.
3. Audit MintTap's currently available outbound/store links before changing them.
4. Once GA4/Play/App Store data are accessible, test whether package granularity reaches observable thresholds.
5. Do not add asset-level dimensions until live volume proves they are useful.

## Sources

- Apple Developer, App Store Connect Analytics — Campaign links: https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links
- Google Analytics Help — URL builders / custom campaign parameters: https://support.google.com/analytics/answer/10917952
- Google Play Console Help — Measure app acquisition and retention: https://support.google.com/googleplay/android-developer/answer/6263332
- Google Play Console Help — Download/export monthly reports: https://support.google.com/googleplay/android-developer/answer/6135870
