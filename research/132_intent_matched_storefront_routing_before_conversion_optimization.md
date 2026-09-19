# 132 — Intent-matched storefront routing before conversion optimization

Validated: 2026-09-20

## Why this matters

For sparse professional audiences, a single default Store page can destroy message continuity even when the upstream Reddit/blog/social contribution is highly relevant. The correct unit is not simply `channel → Store`; it is `specialist intent → truthful promise → intent-matched Store surface → first value`.

This is a zero-media-cost capability. It should therefore be evaluated before paid acquisition or indiscriminate conversion-rate optimization.

## Current authoritative platform capabilities

### Apple — Custom Product Pages (CPP)

Apple currently permits up to 70 additional App Store product-page versions per app. A CPP can vary screenshots, app previews and promotional text, is localizable, has a unique URL, and can be assigned keywords so the CPP rather than the default page appears for selected App Store searches. Apple requires keyword sets to match page intent and recommends unique keyword combinations per CPP. CPP metadata is separately reviewable from an app update.

A CPP may also carry an app deep link; on iOS/iPadOS 18+ the Open action can route to the corresponding in-app destination. Apple App Analytics reports CPP impressions, downloads/redownloads, conversion and downstream engagement/revenue/retention comparisons; page-level data appears after at least five first-time downloads.

Apple separately offers Product Page Optimization (PPO), which randomizes up to three alternate icon/screenshot/preview treatments on the default product page. PPO is not available for CPPs. Therefore CPP and PPO solve different problems:

- CPP = route a known intent/audience to a relevant truthful page.
- PPO = estimate which creative treatment performs better within the eligible default-page population.

Do not treat a CPP as an A/B test merely because its conversion rate differs from the default page; the audiences are selected differently.

### Google Play — Custom Store Listings (CSL)

Google Play currently permits up to 50 custom store listings. A CSL can customize app name, icon, descriptions and graphic assets. Current audience targeting includes country/region, churned/lapsed/buyer states, ads traffic, pre-registration, search keywords, custom audiences, and a unique CSL URL parameter.

Of particular importance to zero-cost niche marketing:

1. A unique CSL URL can preserve upstream intent without paid media.
2. Search-keyword targeting can route selected Google Play search terms to a purpose-built listing.
3. Search keyword selection includes known traffic terms plus selectable spelling/translation variations.

Google Play also provides Store Listing Experiments, including default graphics experiments and localized text/graphics experiments. As with Apple, deterministic audience/intent routing and randomized creative testing are different instruments and should not be conflated.

## New operating principle

**Routing precedes optimization.**

Do not ask “which screenshot converts best?” until the user is being shown the right promise for the intent that brought them to the Store.

Canonical sequence:

`validated specialist intent → destination eligibility → intent-matched truthful Store surface → qualified install → first value → useful return → only then creative optimization`

A higher conversion rate is not sufficient if the tailored page attracts users whose expected job is not actually satisfied in the app.

## AX0–AX5 — Intent-Matched Storefront Routing Gate

### AX0 — Generic leakage
All external and Store-search intents land on the default page with no evidence that one promise fits them.

### AX1 — Informal segmentation
Different intents are recognized in marketing copy, but Store destinations remain generic or manually inconsistent.

### AX2 — Destination proliferation
CPP/CSL pages exist, but taxonomy, ownership, truthful feature mapping, localization, downstream measurement or retirement rules are weak. Page count itself is treated as progress.

### AX3 — Controlled intent routing
Required minimum:
- one validated specialist job/intention per destination;
- current product evidence supporting every destination promise;
- platform-native deterministic routing where appropriate (CPP unique URL/keywords; CSL unique URL/search keywords or other justified segment);
- stable destination registry tying source intent, Store surface, assets, localization and downstream first value;
- default-page fallback documented;
- selected-audience conversion is not naively compared as if randomized;
- privacy/threshold-censored metrics remain `unknown`, not zero;
- pages are retired when intent, product capability or evidence disappears.

### AX4 — Utility-validated routing
Multiple eligible intents have enough evidence to show that tailored routing improves not merely Store conversion but qualified first value/useful return versus an appropriate baseline.

### AX5 — Reusable niche routing system
Destination taxonomy, evidence contracts, localization, deep-link continuity, experiment boundaries, retirement rules and cross-platform interpretation are reusable for future specialist apps without flattening Apple/Google differences.

## MintTap application

Do not begin with ticker proliferation. A page for TSLY, CONY and MSTY merely because those strings exist would fragment sparse evidence and create maintenance burden.

Candidate destinations require materially different user jobs. Examples worth validating, not assuming:
- YieldMax distribution/portfolio tracking;
- ROC/tax-adjustment continuity;
- reverse-split-aware historical continuity.

If a Reddit answer or owned article solves a ROC question, an intent-matched Store page may preserve that promise better than a generic portfolio screenshot set. But the page must show functionality MintTap actually supports and downstream evidence must reach first value/useful return.

Apple CPP keyword routing and Google Play CSL search-keyword routing also make Store search itself an intent-routing surface. This means ASO keyword selection and conversion creative should no longer be modeled as wholly separate disciplines.

## LogMate application

Do not create pages before product evidence. Future candidate jobs may include roster/logbook import, previous-total continuity, offline logbook access or duplicate-safe migration, but only after each workflow is real, demonstrable and stable.

A pilot landing on a tailored Store surface should encounter the same operational promise in the product. Professional trust cost from a mismatched promise is more important than a temporary conversion lift.

## Measurement contract

Per destination record:
- platform;
- destination ID/name;
- specialist intent/job;
- eligible source/query;
- exact promise and evidence owner;
- creative/localization version;
- deterministic routing mechanism;
- Store impressions/views;
- downloads/installs;
- conversion rate;
- first-value denominator and rate;
- useful-return denominator and rate;
- downstream ad eligibility/revenue only when compatible;
- threshold/censoring state;
- created/last-reviewed/retire date.

Do not compare deterministic CPP/CSL audience conversion directly with randomized PPO/Store Listing Experiment treatment results as if they answer the same causal question.

## Decision rule

Create a tailored Store surface only when:

`distinct validated intent × truthful differentiated promise × sustainable maintenance × measurable downstream utility > fragmentation cost`

The platform maximum (Apple 70; Google Play 50) is a capability ceiling, not a target.

## Sources

- Apple Developer, Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- Apple App Store Connect Help, Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- Apple App Store Connect Help, Product Page Optimization overview: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization
- Apple App Store Connect Analytics, Custom Product Pages: https://developer.apple.com/help/app-store-connect-analytics/acquisition/custom-product-pages
- Google Play Console Help, Create custom store listings to target specific user segments: https://support.google.com/googleplay/android-developer/answer/9867158
- Google Play Console Help, Run A/B tests on your store listing: https://support.google.com/googleplay/android-developer/answer/12053285
