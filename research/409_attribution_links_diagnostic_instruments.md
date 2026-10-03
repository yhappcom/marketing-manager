# Research 409 — Attribution Links Are Diagnostic Instruments, Not Growth Channels

Validated: 2026-10-04

## Decision

For zero-cost niche-app marketing, instrument links only where a legitimate external route already exists. A campaign or UTM link does not create demand, permission, or incrementality. It reduces uncertainty about which permitted route reached the Store and, where platform reporting permits, whether that route produced downloads and downstream value.

Do not create extra posts, duplicate owned pages, or community links merely to populate attribution reports.

## Validated platform contract

### Apple App Store

App Store Connect campaign links use campaign and provider tokens. Apple reports campaign-attributed impressions, product-page views, downloads, usage, sales, and subscriptions, with further analysis by dimensions such as territory, device, and page type.

Apple currently states that a first-time download is attributed when it occurs within 24 hours after use of the campaign link or token. If multiple campaign links are clicked in the relevant period, the most recent receives credit for subsequent sales. Campaign reporting appears only after at least 24 hours and dashboard metrics require a minimum threshold of five. Detailed campaign exports apply stricter privacy protections, so small rows can be withheld or combined.

Acquisition source can reset after a manual redownload, with later usage, sales, and subscription data attributed to the new source. Therefore campaign attribution is platform-attributed evidence under a defined contract, not proof that the external marketing action caused the acquisition.

Custom Product Pages solve a separate message-matching problem. Keep page identity and campaign identity as separate dimensions.

### Google Play

Play Store listing reporting exposes UTM source and UTM campaign for Ads and referrals traffic. Current reporting distinguishes Store visitors, intent clicks and CTR, completed Store listing acquisitions, traffic source, search term, UTM source/campaign, and Store listing identity.

Low-volume search terms, UTM sources, and UTM campaigns can be collapsed into Other. Absence of a named route is therefore not evidence of zero traffic or acquisition.

Generic category discovery can fall under Play explore, while Play search in Store-listing reporting is centered on searches for the app name or closely associated brand. Do not treat Play search as a clean generic-keyword-acquisition bucket.

## JS0–JS9

JS0 legitimate route first → JS1 specialist intent family → JS2 destination contract → JS3 attribution identity → JS4 link QA → JS5 Store observation state → JS6 platform-attribution boundary → JS7 first specialist value → JS8 repeated specialist value plus sustainable revenue → JS9 KEEP / REPAIR-MATCH / REPAIR-ROUTE / MERGE-SPARSE / HOLD-CENSORED / STOP.

### JS0 — Legitimate route first
The route must already pass community permission, owned-reference usefulness, or normal social/website publishing criteria.

### JS1 — Intent family
Assign one specialist problem or job, not merely a channel name.

### JS2 — Destination contract
Choose default Store page versus Apple CPP or Google CSL based on a material message-match need.

### JS3 — Attribution identity
Use a stable naming taxonomy for Apple campaign tokens and Google UTM source/campaign. Never encode personal data.

### JS4 — Link QA
Verify destination, storefront behavior, parameters, redirects, and custom-page identity before publication.

### JS5 — Store observation state
Record visitor/view, click where available, completed acquisition, threshold/censoring state, and reporting delay separately.

### JS6 — Platform attribution boundary
Label results PLATFORM-ATTRIBUTED, not INCREMENTAL, unless a causal design actually supports incrementality.

### JS7 — First specialist value
Join downstream product evidence only at an aggregate/cohort level that is privacy-safe and technically defensible.

### JS8 — Repeated specialist value plus sustainable revenue
Prefer routes that produce durable specialist use and non-intrusive revenue over routes with more clicks or downloads alone.

### JS9 — Decision
KEEP / REPAIR-MATCH / REPAIR-ROUTE / MERGE-SPARSE / HOLD-CENSORED / STOP.

## Sparse-niche rule

MintTap and LogMate can easily over-segment attribution until every route becomes censored. Start with a few materially different intent families and split only when the decision would change.

Do not create one campaign per Reddit comment, ticker mention, or tiny social post. A better taxonomy is source family × specialist intent family × destination variant, adding a release or measurement epoch only when necessary.

If platform privacy thresholds collapse the result, merge to the smallest higher-level cohort that still answers a business decision. Never increase posting volume merely to force a reporting threshold.

## MintTap

Route families should follow specialist jobs already supported by evidence: ROC/provenance, split/reinvestment reconstruction, total-return/recovery methodology, and Tax Adjustment only where claims are verified and properly qualified.

A native community answer must remain complete without a product link. Where a link is permitted and adds maintained evidence, measure the route at the intent-family level rather than by ticker or individual post.

Decision chain: permissioned contribution or owned reference → attributed Store route → Store observation → completed acquisition → first specialist value → repeated specialist value → reconciled non-intrusive revenue.

## LogMate

Prepare attribution architecture before launch, but do not manufacture pilot traffic to populate it. Candidate intent families are import/migration, duplicate and Previous Total continuity, multi-leg logging, export/certificate integrity, and device/PWA workflow only after the corresponding product claims are release-ready.

Professional workflow credibility outranks campaign sample size.

## Reusable niche-app rule

Before instrumenting a separate route, answer: If this route produces materially better or worse downstream users, what will change?

If the answer is nothing, do not create a separate campaign dimension.

## Evidence limits

Store attribution is not incrementality. Thresholded, withheld, or Other data is censored rather than zero. Cross-platform metrics have different populations and attribution semantics. Campaign identity and custom page/listing identity measure different things. First-party activation data should be joined only where privacy, consent, and technical semantics are valid.

## Authoritative sources

Apple Developer: App Store Connect Analytics — Campaign links; Acquisition; Custom Product Pages; App Store Discovery and Engagement analytics schema.

Google Play Console Help: Understand and grow your app's user base; Download and export monthly reports.
