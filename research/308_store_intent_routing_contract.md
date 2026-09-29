# Research 308 — Store Intent Routing Contract

Date: 2026-09-29

## Decision

For sparse niche apps, do not treat the default App Store / Google Play listing as the only destination for every qualified acquisition source. Route materially different specialist intents to store-page variants only when the variant can make the promise-to-product path more coherent and can be measured without fragmenting already-sparse traffic.

This is an intent-routing system, not a page-production program.

## Newly validated Apple capabilities

Apple currently allows up to 70 Custom Product Pages (CPPs) per app. A CPP can vary screenshots, promotional text, app previews, and keywords, can be localized, and has a unique URL. CPP metadata can be reviewed independently of an app update.

A CPP can be assigned keywords from the latest approved app version. When a user searches an assigned keyword, Apple can show that CPP rather than the default product page. Apple explicitly advises using intent-matched keywords and unique keyword combinations per CPP.

CPPs can also carry deep links on iOS/iPadOS 18+, allowing the post-install/open path to continue toward a specific in-app destination.

App Store Connect Analytics exposes page-level impressions, downloads, redownloads and conversion, and Apple documents downstream analysis including retention and proceeds. Current analytics documentation says data for a CPP appears after at least five first-time downloads.

Apple reports that, across its cited developer data, referrals to CPPs see an average 2.5 percentage-point conversion increase versus a 1.6% average default-page conversion rate. This is platform aggregate evidence, not a forecast for MintTap or LogMate.

## Sparse-niche implication

The 70-page capacity is a ceiling, not a target. For a niche utility, excessive page variants create:
- traffic fragmentation;
- censored/low-sample analytics;
- duplicated claim-maintenance burden;
- stale screenshots/claims;
- false confidence from noisy conversion differences.

Create a page variant only for a materially different intent, not for every ticker, subreddit, post, campaign, or keyword synonym.

## HJ0–HJ9 — Store Intent Routing Contract

HJ0 — Identify recurring specialist intent from evidence, not brainstorming.

HJ1 — Atomize the promise. Define what the visitor expects the app to solve.

HJ2 — Default-page sufficiency gate. If the default page already communicates the promise accurately, do not create a variant.

HJ3 — Material-distinction gate. A variant requires a real difference in problem, workflow, evidence, or audience context; lexical/ticker-only differences fail.

HJ4 — Claim-registry gate. Every screenshot overlay, promotional statement, preview and keyword implication must remain supported by current product evidence.

HJ5 — Journey-continuity gate. Store creative must lead naturally to the corresponding first specialist value; use deep linking only when it improves that continuity and remains truthful.

HJ6 — Traffic-sufficiency gate. Do not split a sparse cohort unless the variant can accumulate enough observations to support a business-material decision. Below disclosure/measurement thresholds, preserve UNKNOWN.

HJ7 — Downstream-value gate. Conversion is intermediate. Where measurable, compare first specialist value, repeated specialist value, retention and sustainable revenue.

HJ8 — Maintenance/invalidation gate. Product or evidence changes trigger revalidation only for dependent variants. Merge/disable stale or redundant variants.

HJ9 — Decision. KEEP / MERGE / REPAIR / DISABLE / UNKNOWN.

## MintTap application

Candidate intent families should be problem-level, not ticker-level:
1. Distribution / ROC interpretation.
2. Split + reinvestment portfolio reconstruction.
3. Portfolio total-return / recovery tracking.
4. Tax Adjustment workflow only where current functionality and jurisdictional qualifications support the exact claim.

Do not create separate TSLY, CONY, MSTY, NVDY pages merely because the symbols differ. A ticker-specific page becomes defensible only if the workflow, evidence or user promise materially differs.

Community and owned-reference links should route to a CPP only when that page actually preserves the originating problem intent. Otherwise use the default page.

## LogMate application

Pre-launch candidate intent families:
1. Existing-logbook import/migration.
2. Previous Totals continuity / starting a new digital logbook.
3. Duplicate reconciliation and record integrity.
4. Export/certificate workflow.
5. Offline/PWA/device continuity only when the shipped implementation supports the exact promise.

Pilot audiences are small, so launch should begin with the default page plus at most a very small number of evidence-backed variants. Expand only after observed intent and traffic justify separation.

## Measurement ledger

For every routed page record:
intent_id | source/context | page_id | promise | claim-registry refs | keyword/deep-link state | impressions | first-time downloads | conversion | measurement threshold/suppression | first specialist value | repeated specialist value | retention | revenue quality | last verified | invalidation trigger | decision

Never substitute conversion for missing downstream value. If Apple suppresses or has not yet exposed a sparse page cohort, mark the downstream comparison UNKNOWN.

## Operating rule

Variant capacity is not marketing inventory. The objective is the smallest maintained set of Store destinations that preserves specialist intent from discovery through first and repeated value.

## Sources

- Apple Developer, Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- App Store Connect Help, Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- App Store Connect Analytics Help, Custom Product Pages: https://developer.apple.com/help/app-store-connect-analytics/acquisition/custom-product-pages
