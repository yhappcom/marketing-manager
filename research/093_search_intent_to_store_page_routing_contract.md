# 093 — Search Intent → Store Page Routing Contract

Validated: 2026-09-18

## Canonical principle

**Route a query to a page only when the page can keep the query's promise.**

Search-keyword-targeted store pages are not merely ASO metadata. Apple Custom Product Pages (CPP) and Google Play Custom Store Listings (CSL) can now act as zero-cost intent routers: a user's search term can determine which product-page narrative they see. This creates a new optimization layer between ranking/discovery and install conversion.

## First-party platform facts

### Apple App Store

Apple currently allows up to 70 CPPs per app. A CPP can carry different screenshots, previews, promotional text and keywords, can be localized, and has a unique URL. Developers can assign keywords from the latest approved app version to a CPP; after the CPP is approved and visible, users searching those assigned keywords can be directed to that CPP instead of the default product page. Apple recommends unique keyword sets for each page so the most relevant page can appear. CPP analytics include page views, downloads and conversion rate, with data appearing after at least five first-time downloads; downstream sales/proceeds metrics are also available. iOS/iPadOS 18+ can additionally use an approved CPP deep link to route an opener to specific in-app content.

Implication: Apple organic search can now support a chain of `query → tailored Store evidence → install → relevant in-app destination`, but only if the product genuinely supports the queried intent.

### Google Play

Google Play CSLs can target users who discover the app through specific Play Search terms. The developer chooses from keywords known to bring traffic or searches for new terms, can inspect/edit bundled spelling corrections and translations, and then supplies the listing's name, descriptions and graphics. Google currently permits up to 50 CSLs. A CSL can customize app name, icon, descriptions and graphics; privacy policy/contact/category remain shared. CSLs are not automatically translated, so each targeted market still requires deliberate localization.

Implication: Google Play likewise provides organic search-intent routing, but keyword bundles may include variants/translations. The semantic scope of every selected variation must therefore be audited rather than treating the head keyword as the entire promise.

## The failure mode: conversion without qualification

A higher Store conversion rate can be harmful if a keyword-specific page overstates relevance and attracts users whose intended job the app cannot perform. For sparse professional audiences, false-positive installs consume trust, reviews, support capacity and future organic word-of-mouth.

Therefore:

`keyword routing success ≠ page conversion uplift`

The useful chain is:

`qualified query → semantically matched page → first value for that intent → useful return`

## Q0–Q5 Query-to-Page Integrity Gate

### Q0 — False routing
The keyword/page implies a capability, jurisdiction, professional use, tax treatment, regulatory compliance, data source or workflow that the shipped product does not support.

**Action:** remove the keyword/page mapping. Acquisition blocker.

### Q1 — Lexical routing
The keyword occurs in metadata, but the creative/default copy does not explain the searched job or evidence the capability.

**Action:** do not treat ranking or traffic as qualified demand.

### Q2 — Persuasive routing
The page is visually/copy-wise tailored and may convert better, but no downstream evidence confirms that searchers achieve the intended first value.

**Action:** diagnostic only; do not scale keyword coverage from conversion alone.

### Q3 — Semantic routing
The query family maps to a real product job; first screenshot/copy establishes that job accurately; specialist terminology and boundaries are correct; the relevant workflow exists in production.

**Action:** eligible for intentional organic routing.

### Q4 — End-to-end intent routing
Q3 plus source/page/query-family telemetry is joined, where platform privacy permits, to first-value and useful-return outcomes. Misfit installs, support/review issue families and localization defects are monitored.

**Action:** eligible for measured expansion.

### Q5 — Reusable routing pattern
Across sufficient observation windows, the query/page pairing repeatedly yields qualified acquisition and retained useful use without rising semantic, trust, review or support incidents. The pattern remains valid after product/locale changes.

**Action:** reusable for future niche apps as an intent-routing pattern, not as a copied keyword list.

## MintTap application

Build query families around real specialist jobs, not ticker-volume alone. Candidate families must be verified against the production product before publication, for example:

- YieldMax portfolio tracking;
- distribution tracking;
- ROC analysis;
- reverse-split-aware tracking;
- ticker-specific discovery only when the app actually supports that ticker and the page remains useful beyond merely naming it.

A query such as `YieldMax tax calculator` must not be routed to a page implying jurisdiction-specific tax calculation if MintTap only tracks distributions/adjustments and does not provide that tax capability. Likewise, Korean tax/ROC wording cannot be inferred from an English page's validity; 091 L0–L5 and 092 T0–T5 remain prerequisites.

Do not create dozens of ticker CPP/CSLs whose only difference is the ticker name. That produces maintenance burden and semantic duplication without proving distinct intent. First establish whether searchers for CONY, MSTY, TSLY, etc. actually require different Store evidence or share one YieldMax-tracking intent family.

## LogMate application

Potential future query families such as `pilot logbook`, `flight logbook`, `PIC SIC logbook`, `electronic pilot logbook`, or airline-system import terms require production-valid workflows before Q3. A page must not imply FAA/EASA/MOLIT compliance, accepted logbook format, automatic import, sync or backup unless those claims are verified for the shipped product and target locale.

Because professional terminology can carry regulatory meaning, 091 semantic localization and 092 trust parity apply before keyword expansion.

## Zero-cost operating protocol

1. Collect actual Store search terms/keyword candidates where the platforms expose them.
2. Cluster by **user job/intent**, not merely lexical similarity.
3. For each cluster write the exact promise a searcher could reasonably infer.
4. Verify production capability and claim boundary.
5. Decide whether the default page already serves the intent. Do not create a variant without meaningful evidence difference.
6. If a variant is justified, align first screenshot, copy, terminology and localized assets to the intent.
7. Keep keyword sets/pages mutually intelligible and avoid unnecessary overlap; Apple explicitly recommends unique keyword sets per CPP for relevance.
8. Measure page conversion, but do not promote Q2 to success without first-value/useful-return evidence.
9. Revalidate mappings after material product, terminology, locale or claim changes.
10. Retire pages whose maintenance burden exceeds qualified incremental demand.

## Measurement ledger

`store → locale → query family → keyword/variant bundle → routed page → Q-class → impression/page view → acquisition → first-value intent → useful return → support/review issue family → trust/localization incident`

Do not assume the app itself will always receive the exact organic keyword that caused routing. Platform-level aggregate/page analytics and downstream product behavior may need to remain separate privacy-preserving evidence layers. Do not fabricate user-level attribution where the platform does not expose it.

## Decision rules

- **Ranking is discovery; routing is qualification.** A keyword is not successful merely because the app ranks.
- **Conversion is not enough.** A page that raises installs while lowering intent-specific first value is a failed route.
- **Default-first.** If one page truthfully serves multiple intents, prefer it over variant proliferation.
- **Professional claims dominate keyword opportunity.** Never capture a high-volume query by implying unsupported tax, investment, aviation or regulatory capability.
- **Localization is part of routing.** A keyword variation/translation can change the inferred specialist promise.
- **Maintenance cost is real even when media spend is zero.** Every variant creates creative, localization, review, telemetry and revalidation work.

## Evidence

Primary sources validated 2026-09-18:

1. Apple Developer — *Configure multiple product page versions*: up to 70 CPPs; unique URLs; localized screenshots/previews/promotional text/keywords; approved keyword assignment can route App Store searchers to a CPP; Apple recommends unique keyword sets; iOS/iPadOS 18+ deep links; CPP metrics after at least five first-time downloads.
2. Apple Developer — *Custom Product Pages — App Store Connect Analytics*: page-level product-page views, downloads, conversion, proceeds and downstream monetization metrics; territory/source/device segmentation.
3. Google Play Console Help — *Create custom store listings to target specific user segments*: up to 50 CSLs; Search keyword targeting; selectable keyword variations including spelling corrections/translations; customizable listing assets; CSL localization behavior and other targeting modes.

## New unresolved questions

- What MintTap search terms currently have enough qualified traffic to justify separate intent pages rather than the default listing?
- Does each ticker query represent a distinct job or merely a lexical variant of the same YieldMax tracking intent?
- Can current Apple/Google page-level acquisition data be joined to MintTap first-value/useful-return telemetry without collecting unnecessary user-level data?
- Which search-query families generate support/review mismatch after install?
- What minimum incremental qualified demand justifies maintaining another CPP/CSL plus its localizations?
- For Google keyword bundles, how often do bundled translations/variants materially broaden or alter the specialist promise?
