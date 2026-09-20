# 150 — Apple Custom Product Pages as Zero-Cost Intent Routing

Validated: 2026-09-20

## Why this matters

Custom Product Pages (CPPs) should no longer be modeled only as paid-campaign landing pages. Apple's current documentation says a CPP can receive keywords from the latest approved app version and can then appear in App Store search results for those selected keywords instead of the default product page. This creates a zero-cost, platform-native mechanism for matching distinct specialist intents to distinct Store proof surfaces.

For a sparse niche app, this is strategically different from merely creating more screenshots. It permits one app to preserve a coherent default listing while routing materially different search intents to truthful, intent-specific proof.

## Current Apple capabilities verified

As of 2026-09-20 Apple documents that:

- an app can publish up to 70 CPPs;
- each CPP can vary screenshots, app previews, promotional text and keywords;
- each CPP has a unique shareable URL;
- keyword assignment can make the CPP appear in App Store search results for those keywords rather than the default page;
- Apple advises unique keyword combinations for each CPP;
- CPPs can be localized;
- an optional deep link can route users on iOS/iPadOS 18+ to relevant in-app content;
- CPP metadata/deep links require App Review approval;
- approved CPPs can be revised without changing their unique URL;
- App Analytics exposes page-level views, downloads and conversion, with downstream retention/proceeds analysis; CPP data appears after at least five first-time downloads.

Apple separately documents Product Page Optimization (PPO) as randomized testing of the default product page. PPO is not available for CPPs. Therefore CPP and PPO solve different problems and must not be treated as interchangeable:

- CPP = intent/audience routing;
- PPO = randomized creative comparison on the default page.

## Core principle

**Do not create a CPP because a feature exists. Create one only when a materially distinct, evidenced search/community intent needs different proof.**

A niche app does not benefit from fragmenting sparse traffic across dozens of pages. The theoretical limit of 70 is capacity, not a target.

Canonical chain:

`validated specialist intent → truthful intent-specific promise → CPP proof assets → unique keyword set or attributable URL → page-level acquisition evidence → first value → useful return`

## BN0–BN5 Intent-Routed Store Surface Gate

### BN0 — Demand evidence
A proposed CPP must begin with observed specialist demand: Search Console/App Store search evidence, community questions, support language, Store reviews, or other qualified evidence. Feature enthusiasm alone is insufficient.

### BN1 — Intent separability
The intent must be materially different enough that the default page cannot prove it clearly without diluting another important intent. Cosmetic segmentation fails this gate.

### BN2 — Claim/proof integrity
Screenshots, preview, promotional text and keyword routing must describe functionality that exists and can be substantiated. Consequential financial or regulatory claims inherit BE provenance requirements.

### BN3 — Routing integrity
Use a unique, non-overlapping keyword combination where search discovery is intended. For community/blog/social distribution, preserve the CPP's unique URL and campaign/source evidence where possible. A deep link must lead to the promised in-app destination rather than merely opening the app.

### BN4 — Sparse-sample evidence discipline
Do not declare a winner from tiny CPP samples. Apple withholds page analytics until at least five first-time downloads; that threshold is a privacy/reporting threshold, not evidence that five downloads are statistically sufficient. Preserve `unknown/inconclusive` when evidence is sparse.

### BN5 — Downstream value
A CPP is successful only if its acquired users reach the promised first value and useful return. Conversion-rate lift without downstream product value can indicate overpromising or poor intent quality.

## MintTap application

Potential CPPs are hypotheses, not approved implementations. Candidate intent families include:

1. **YieldMax distribution tracking** — evidence should emphasize distribution history, ex/pay dates and period cash-flow views if those capabilities are current.
2. **ROC / reverse-split accounting** — only if Store claims and screenshots can be supported by current product behavior and BE financial-claim provenance.
3. **Portfolio / transaction tracking** — distinct from distribution research if actual demand evidence shows users search for this workflow separately.

Do not create ticker-specific CPPs simply because Apple allows many pages. A TSLY/CONY/MSTY page is justified only if demand, differentiated proof and maintainability all pass BN0–BN3. Ticker/product-state drift is especially dangerous for a financial app.

Community posts should link to the CPP matching the question only when venue rules permit product links. A self-contained Reddit answer remains mandatory; the CPP is optional downstream routing, not a substitute for community contribution.

## LogMate application

Potential future intent families may include pilot logbook import, flight-time records, or offline/EFB workflow, but no CPP should make regulatory-compliance claims merely because pilots use the app. Regulatory claims require the relevant aviation-authority evidence chain. Launch-stage sparse traffic argues for very few pages until actual search/community demand separates.

## Measurement contract

For every CPP retain:

`cpp_id/reference name | intent | evidence source/date | localization | keyword set | unique URL | deep-link destination | claim/proof version | approval date | page views | first-time downloads | conversion | territory/source/device | downstream first value | useful return | decision`

Do not pool default-page, CPP and PPO observations as if they were one treatment. Do not infer statistical confidence from Apple's five-download reporting threshold.

## Operational consequence

This materially strengthens the company's zero-cost Store strategy: community/blog/social traffic can land on an intent-matched Store surface through a unique CPP URL, while selected App Store keywords can route organic searchers to the same specialized proof. The scarce resource is not the number of CPP slots; it is enough qualified demand and downstream evidence to justify segmentation.

## Primary sources

- Apple Developer, Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- App Store Connect Help, Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- App Store Connect Analytics Help, Custom Product Pages: https://developer.apple.com/help/app-store-connect-analytics/acquisition/custom-product-pages
- App Store Connect Help, Overview of Product Page Optimization: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization

## Next validation

Audit MintTap's live App Store Connect CPP inventory when console evidence is accessible. Record existing CPPs, keyword assignments, localization, deep links, approval state and page-level acquisition/downstream metrics. Until that evidence exists, candidate MintTap intent families remain hypotheses.