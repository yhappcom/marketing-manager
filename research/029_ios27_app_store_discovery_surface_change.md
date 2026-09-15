# 029 — iOS 27 App Store Discovery Surface Change

Validated: 2026-09-16

## Why this merits reopening frozen theory

Application Readiness V1 is frozen unless an authoritative platform change alters an operating rule. Apple's WWDC26 App Store discovery guidance and September 2026 App Store Connect release notes create such a trigger: iOS/iPadOS 27 add richer discovery/search-result presentation and new device asset requirements. This is not a new general marketing theory; it is a platform-change delta that changes Store creative operations.

## Authoritative findings

### 1. Store creative is no longer only a product-page concern

Apple's WWDC26 discovery guidance shows richer image/video presentation in App Store discovery/search surfaces on iOS 27/iPadOS 27 and explicitly recommends using imagery that communicates the app's logo, core value, feature, destination/content, etc. Apple also demonstrates aligning a website marketing image with a Custom Product Page header to create continuity from off-Store discovery into Store presentation.

Operational consequence: screenshot/preview strategy must now distinguish at least three creative jobs:

1. **Discovery/search-result recognition** — communicate category/problem/value rapidly before a product-page visit.
2. **Product-page persuasion** — explain differentiated value and reduce uncertainty.
3. **Routed-message continuity** — preserve the promise from website/community/social/CPP routing through the Store and, where appropriate, into deep-linked app content.

Do not assume one image sequence optimizes all three jobs.

### 2. CPP remains a routing surface, not randomized causal evidence

Apple currently permits up to 70 Custom Product Pages, each with distinct screenshots, previews, promotional text and keywords, unique URLs, localization, and optional deep links. CPP analytics include page views, downloads, conversion and downstream metrics; page data appears after at least five first-time downloads.

A CPP can be surfaced by its unique link or assigned App Store search keywords. This makes CPP especially relevant for narrow specialist intents (for example, a MintTap ROC/reverse-split intent or a LogMate import/offline-logbook intent) when evidence justifies that segmentation.

However, traffic selection differs by route/keyword/audience. A CPP-vs-default conversion difference is therefore observational unless another valid causal design exists.

### 3. PPO remains the native randomized creative-test surface

Apple Product Page Optimization randomly exposes treatments and supports up to three treatments. Current analytics use Bayesian analysis; results can be Performing Better/Worse when confidence reaches 90%, and low-information tests may be marked Likely to be Inconclusive. Tests run for up to 90 days and appear after at least five first-time downloads are attributed to the test.

PPO is not available for CPP. Therefore:

- **PPO question:** does creative treatment causally improve default-page conversion for the eligible randomized population?
- **CPP question:** does a tailored route/page serve a particular intent/audience well, including downstream user quality?

Do not merge these evidence classes.

### 4. New-device asset readiness is now an operational dependency

Apple's App Store Connect release notes dated 2026-09-09 added app preview/screenshot specifications for iPhone Duo, iPhone 18 Pro Max, iPhone 18 Pro, Apple Watch Ultra 4 and Apple Watch Series 12, while noting iPhone Duo asset-upload support would arrive later in 2026.

This creates an evidence-decay/maintenance trigger for Store creative. A previously complete screenshot system can become operationally incomplete when Apple introduces a materially new display class or discovery presentation.

## Updated operating rule

Store creative should be managed as a **surface-role system**, not a single screenshot set:

`audience intent → discovery/search creative → default page or routed CPP → install/open → first-value continuity`

For every material Store creative change record:

- target intent/audience;
- discovery surface(s);
- asset role (recognition / persuasion / continuity);
- default page vs CPP;
- keyword/link routing state where relevant;
- downstream destination/deep link where relevant;
- native measurement definition;
- evidence class (randomized PPO vs observational CPP/native analytics);
- device/display coverage;
- change/expiry trigger.

## Implications for MintTap

Do not create many CPPs merely because Apple permits 70. Sparse YieldMax traffic makes fragmentation costly. Candidate segmentation should require evidence of materially different intent or promise, such as ROC/tax-character tracking versus reverse-split/history tracking, before allocating a separate page.

The first discovery asset should be evaluated for rapid recognition of the specialist problem/value rather than treated as merely screenshot #1. Website/blog-to-CPP campaigns should preserve claim and visual continuity, but factual finance/tax claims still follow the Content Evidence Lifecycle.

## Implications for LogMate

Pre-launch creative planning should separate professional recognition from detailed feature explanation. Candidate routed propositions such as import/migration, offline-first use, or pilot-logbook workflow should not receive separate CPPs until demand evidence supports distinct intent. Regulatory claims remain jurisdiction-scoped and authoritative-source gated regardless of Store surface.

## Portfolio/design handoff

This change creates a direct Marketing ↔ Design Studio dependency. Marketing owns intent, proposition, evidence class and measurement question. Design owns visual hierarchy and surface-appropriate execution. Neither should optimize Store assets independently of the other.

## What is deliberately not inferred

- No claim that richer iOS 27 imagery automatically improves conversion.
- No assumption that MintTap or LogMate currently has enough traffic for PPO or multiple CPPs.
- No arbitrary number of CPPs, screenshots, or test days.
- No transfer of iOS findings to Google Play without separate evidence.

## Sources

- Apple Developer, WWDC26, “Enhance your app's visibility on the App Store” (current 2026 guidance).
- Apple Developer, App Store Connect Help, “Configure multiple product page versions.”
- Apple Developer, App Store Connect Analytics Help, “Custom Product Pages.”
- Apple Developer, App Store Connect Help/Analytics, Product Page Optimization documentation.
- Apple Developer, App Store Connect Release Notes, entries dated 2026-09-09 and 2026-09-14.
