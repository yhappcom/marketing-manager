# 116 — Google Play Apps Experience Program as an Economic, Not Organic-Growth, Gate

Validated: 2026-09-19

## Canonical principle

**Do not implement Google Play Apps Experience Program (AEP) requirements to chase Store ranking or organic visibility. Google explicitly says AEP does not boost ranking/visibility; its direct benefit is a reduced Play transaction rate card. For an ad-only business with no paid app, IAP, subscription, or eligible external-web transaction revenue, the current direct rate-card benefit is zero. Treat AEP requirements as optional quality benchmarks unless the monetization model changes or an independently valuable requirement justifies the engineering work.**

This is a material 2026 platform change and an important anti-waste rule for MintTap, LogMate, and future niche apps.

## Authoritative findings

### Enrollment is live, but participation is voluntary
Google's Apps Experience Program documentation states that enrollment through Play Console began September 1, 2026. Participation is voluntary. Apps must identify applicable guidelines, meet/maintain them, explicitly enroll, and pass Google Play validation.

Sources:
- Google Android Developers, Apps Experience Program — https://developer.android.com/distribute/aep
- Google Play, Apps Experience Program — https://play.google.com/console/about/programs/appsexperience/

### The direct benefit is the program rate card, not ranking
Google's current AEP FAQ explicitly answers the ranking question: participation does **not** boost an app's Play Store ranking or visibility. Google describes the benefit as the new program rate card. General app quality can matter to Play success, but AEP enrollment itself must not be represented as an ASO/discovery lever.

This distinction prevents a serious planning error: implementing a large platform checklist cannot be justified as zero-cost marketing merely because some requirements touch Play discovery surfaces.

### Rate-card economics
Google's published table states that the first USD 1M of annual earnings remains at 10% service fee (+ billing fee if applicable), including recurring transactions. The AEP rate card changes standard rates above that level for relevant transactions, including 15% for other transactions on new installs and 20% for other transactions on existing installs; eligible external-web-link transactions are also reduced in the documented cases.

Google says the AEP rate card rollout is based on user location:
- US, UK, Japan, EEA, Australia: September 30, 2026 for US/UK/Japan? Verify exact regional table before financial planning; the current official program page is canonical.
- South Korea: December 31, 2026.
- Rest of world: September 30, 2027.

Operational rule: never copy dates from memory into finance decisions. Re-read the official rate-card table because rollout terms are current-platform policy and may change.

**Correction for canonical use:** the official page currently lists United States, United Kingdom, Japan, European Economic Area and Australia in the September 30, 2026 row and South Korea in the December 31, 2026 row. Use the official page if the table changes.

### Current business-model implication
MintTap and LogMate are currently designed around ad revenue rather than paid access/IAP/subscription revenue. AEP's published rate card applies to Play transaction economics; it does not state a reduction in ad-network revenue share or an increase in ad fill/eCPM.

Therefore, under the current ad-only model:

`AEP transaction savings = 0` when `eligible Play transaction revenue = 0`.

This does not mean AEP requirements are useless. It means they need an independent product/quality justification rather than being mislabeled as marketing ROI.

## Requirements reveal a potentially large opportunity cost

AEP is not a single metadata switch. Current Google documentation includes requirements/guidelines around, depending on app use case and exemptions:
- stability and performance;
- adaptive/form-factor support;
- Android platform behaviors such as edge-to-edge/predictive navigation;
- feature/title availability relative to comparable non-Android platforms;
- authentication/credential restoration where applicable;
- Play Content and/or other discovery/content integrations where applicable;
- modern design/tooling requirements and use-case-specific capabilities.

The exact applicable set must be generated from the current AEP planner and authoritative individual guideline pages; not every guideline applies to every app.

### Stability thresholds are AEP-specific, not Store visibility thresholds
Google's AEP stability guideline currently specifies program thresholds including <1% average crash rate on reference devices, <2% on 4GB+ RAM Android devices, <2% average ANR on reference devices, <3% on 4GB+ devices, and <2% excessive slow frames on reference devices. Enforcement uses trailing 28-day data and, for the documented device sets, requires at least 1,500 sessions in the period.

Google explicitly warns that these AEP thresholds are **not the same as Android-vitals bad-behavior thresholds that affect Play visibility**. Preserve that distinction. Research 110 remains the canonical Store-quality/distribution layer; AEP does not replace AB0–AB5.

Source:
- Google Android Developers, AEP Stability Requirements — https://developer.android.com/distribute/aep/aep-req-stability

### Form-factor work can be substantial
Google currently requires AEP applicants to meet Adaptive App Tier 2 and availability/quality expectations for phone, tablet, foldable and XR at enrollment, with Googlebook requirements scheduled for March 1, 2027, subject to documented exemptions. This can be real engineering/design work for a small niche app.

Source:
- Google Android Developers, AEP Form Factor Support — https://developer.android.com/distribute/aep/aep-req-form-factor-support

### Cross-platform release constraints matter to an iOS/Android company
Google's current Title Availability guideline states that, from September 30, 2026, eligible titles should launch on required comparable Android form factors alongside comparable non-Android platforms, with documented grace periods/exemptions. Feature Availability separately requires material features to reach Android within three weeks of full launch on a non-Android platform in the same AEP-active country.

This can constrain a small team's normal strategy of shipping/test-validating a feature on one platform first. Do not accept that constraint unless the economic benefit or independent product value justifies it.

Sources:
- https://developer.android.com/distribute/aep/aep-req-new-title-availability
- https://developer.android.com/distribute/aep/aep-req-feature-availability

### Play Content is not automatically a free-discovery reason to enroll
AEP's Play Content guideline can require at least two quality-approved items per quarter across active Apps content programs (such as Promo Content, Play Shorts, Content Samples, Immersive Header, or YouTube playlists), unless an exemption applies. Tools/utilities and apps that do not produce material in-app content/events/promotions can have relevant exemptions.

Even if a content surface creates discovery opportunity, that opportunity should be evaluated independently under existing V/W/AB evidence rules. It does not convert AEP enrollment into a ranking lever.

Source:
- https://developer.android.com/distribute/aep/aep-req-play-content

## AH0–AH5 AEP Economic-Fit Gate

### AH0 — false growth justification
Any of:
- claim that AEP enrollment boosts Play ranking/visibility;
- engineering work justified by Store ranking despite Google's explicit FAQ;
- rate-card savings claimed for ad revenue;
- AEP stability thresholds confused with Play visibility thresholds;
- requirements implemented without checking applicability/exemptions/current official docs.

### AH1 — checklist chasing
AEP is treated as a prestige badge or generic best-practice list. No eligible transaction revenue, engineering cost, exemption map, or independent product benefit is quantified.

### AH2 — requirements mapped, economics unknown
Applicable requirements and likely exemptions are mapped, but eligible transaction revenue and implementation/maintenance cost are not known.

### AH3 — rational decision boundary
Require:
1. current business model and eligible Play transaction revenue identified;
2. official current rate card and rollout market checked;
3. applicable AEP guidelines/exemptions mapped from current planner/docs;
4. implementation plus recurring compliance cost estimated;
5. ranking/visibility benefit explicitly set to zero in the business case;
6. each requirement separated into `{independently valuable | rate-card-only | not applicable/exempt}`;
7. no roadmap displacement of first value, useful return, AB quality, privacy, support, or nonintrusive monetization without evidence.

For an ad-only app with zero eligible Play transaction revenue, AH3 normally yields **do not enroll for economics**. Independently valuable Android improvements may still be implemented without AEP enrollment.

### AH4 — positive verified economics
AH3 plus observed eligible transaction revenue makes expected rate-card savings material relative to implementation/maintenance cost, and enrollment does not damage specialist utility or cross-platform priorities.

### AH5 — reusable portfolio rule
A company-wide calculator/decision register evaluates every app as monetization changes and automatically reopens AEP evaluation when eligible transaction revenue, platform scope, or Google requirements materially change.

## MintTap application

Under the current ad-only business model, do not prioritize AEP enrollment as a marketing project. In particular:
- do not build XR/tablet/foldable support solely for AEP;
- do not alter iOS-vs-Android release sequencing solely for AEP;
- do not manufacture promotional content merely to satisfy a program checklist;
- do not describe enrollment as ASO.

Continue independently valuable work: crash/ANR/data-integrity quality under AB0–AB5, adaptive layouts where real users benefit, privacy/support parity, and legitimate ad boundaries. If MintTap later introduces paid app/IAP/subscription/external-web transaction revenue, reopen AH immediately with actual revenue and current Google terms.

## LogMate application

LogMate has even stronger opportunity-cost sensitivity because scarce development and pilot-validation capacity should first prove manual entry, persistence, totals/search, offline/backup/recovery and useful return. Do not let AEP's broad platform checklist displace those launch-critical specialist jobs.

If Android tablet/foldable support independently improves pilot/EFB workflows, build it for that user value and classify it separately from AEP economics. AEP enrollment can be reconsidered if monetization later includes eligible transactions.

## Reusable portfolio decision model

For every future niche app, calculate:

`annual direct AEP benefit ≈ eligible transaction base affected by AEP × applicable service-fee delta`

Then compare against:

`one-time implementation cost + recurring compliance cost + roadmap opportunity cost + cross-platform sequencing cost`.

Ad revenue is excluded from the numerator unless Google explicitly introduces an ad-revenue benefit in future official terms.

Maintain a trigger registry:

`app → monetization model → eligible Play transaction revenue → annual developer earnings tier → AEP-active user markets → applicable requirements → exemptions → implementation cost → maintenance owner → independent product value → estimated savings → AH-class → recheck trigger/date`

## What this does not claim

- AEP quality practices are not bad practices; many may independently improve the product.
- AEP enrollment does not replace Android vitals/AB0–AB5 quality governance.
- The program does not currently provide an official ranking/visibility boost.
- The rate card does not currently create direct value for ad-only revenue.
- The current requirements and rollout dates are mutable platform policy and must be revalidated before enrollment or financial planning.

## Immediate operational consequence

**Do not put AEP enrollment on the current MintTap or LogMate marketing roadmap solely for growth.** Add a lightweight AEP watch, not an implementation project. Reopen only if:
1. the business introduces eligible Play transaction revenue;
2. Google changes AEP benefits to include material discovery/advertising benefits; or
3. an AEP requirement is independently justified by observed specialist user value.

This protects a zero-cost niche business from spending scarce engineering capacity to earn a transaction discount it cannot currently use.