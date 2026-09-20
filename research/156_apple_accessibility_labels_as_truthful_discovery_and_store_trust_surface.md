# 156 — Apple Accessibility Labels as Truthful Discovery and Store Trust Surface

Date: 2026-09-21
Status: validated from current Apple primary documentation

## Why this is a marketing-system issue

Apple's Accessibility Nutrition Labels are not merely compliance metadata. On current App Store versions they are visible on the product page, device-specific, and can affect relevance when users include accessibility capabilities such as VoiceOver or Larger Text in App Store search queries. This creates a zero-media-cost discovery/trust surface, but only when the underlying app actually meets Apple's evaluation criteria.

The correct marketing principle is therefore: **accessibility implementation creates the discoverability asset; marketing only reports validated support.** Accessibility metadata must never be treated as ASO keyword inventory that can be claimed first and implemented later.

## Current Apple facts

Apple currently supports declarations for VoiceOver, Voice Control, Larger Text, Dark Interface, Differentiate Without Color Alone, Sufficient Contrast, Reduced Motion, Captions, and Audio Descriptions, subject to device applicability.

Labels appear on product pages in all countries/regions where the app is available on Apple devices running the 26-generation OS releases or later. If a developer does not provide accessibility information for a device, the Accessibility section still appears and says support has not yet been indicated. The section can also indicate that none of the listed features are supported.

Apple explicitly states that users can include Accessibility Nutrition Label features in search queries and that apps declaring relevant support will be considered more relevant for those searches. This makes accurate declarations part of organic discovery, not merely product-page disclosure.

A declaration is not justified by isolated accessible screens. To indicate support, users must be able to complete **all common tasks** using the accessibility feature under Apple's criteria. Apple recommends auditing common tasks per supported device and building a testing matrix. Significant accessibility bugs that would change the answer mean the developer should not declare support.

Apple's VoiceOver criteria are especially relevant to MintTap because charts and data visualizations need accessibility information through an appropriate chart API or, at minimum, a reasonably complete text alternative. Controls need concise, accurate labels and the common tasks must be completable using VoiceOver without sighted assistance.

Accessibility declarations can be updated at any time and normally may take up to 24 hours to become visible. Apple also permits an app-specific accessibility URL with additional detail, including unsupported areas and accessibility settings. This URL should be used for truthful depth, not marketing inflation.

Apple says the labels are voluntary initially but that accessibility-support details will become required over time for submission of new apps and updates. Therefore this is both a current discovery opportunity and a release-readiness dependency.

## BT0–BT5 Accessibility Discovery Integrity Gate

### BT0 — Surface/version identity
Record app version/release ref, Apple device family, OS/store surface, territory where relevant, observation date, and whether an Accessibility section/declaration is actually published. Do not infer a declaration from implementation alone.

### BT1 — Common-task inventory
Define the product's common tasks per device before evaluating labels. A task is common if blocking it would materially prevent ordinary use. Required onboarding/account/settings/payment flows must be included when applicable.

### BT2 — Feature-specific implementation proof
For each claimed accessibility feature, verify Apple's current evaluation criteria against every common task on that device. Evidence can include implementation review plus device/assistive-technology validation. A single accessible screen or component does not qualify the whole app.

### BT3 — Declaration truth and defect state
Publish only supported features that pass BT2. A significant regression or bug that invalidates support changes the declaration state; marketing metadata must follow product truth. `implemented somewhere`, `tested partially`, `declared`, and `meets Apple criteria` are separate states.

### BT4 — Discovery/trust semantics
Treat a published label as an accessibility capability declaration, not as a generic quality badge, endorsement by Apple, or proof of financial/aviation correctness. Search relevance for accessibility-intent queries is a possible platform effect documented by Apple; ranking magnitude is unknown and must not be invented.

### BT5 — Downstream value and maintenance
If accessibility-intent users discover/install the app, success still requires the promised common tasks and core value to be reachable and repeatable. Re-audit after meaningful UI/workflow changes. Track accessibility-origin demand only where platform evidence makes attribution interpretable; do not claim causal acquisition lift from the existence of a label alone.

## MintTap application

Candidate common tasks should include onboarding where required, creating/selecting a portfolio, adding/editing transactions, understanding distribution/ROC/split information, reading portfolio totals and relevant charts/tables, and changing essential settings. The exact inventory must be confirmed from the release implementation.

MintTap's data-dense UI makes VoiceOver, Larger Text, Differentiate Without Color Alone, Sufficient Contrast, and Dark Interface potentially material capabilities, but **none should be declared from design intent alone**. In particular, charts require accessible equivalents under Apple's VoiceOver criteria. Color-coded gains/losses, distribution classifications, or tax/ROC states cannot rely on color alone if that label is claimed.

Accessibility labels do not validate YieldMax data, tax treatment, ROC classification, split handling, or investment outcomes. Those remain under the BE financial-claim provenance system.

## LogMate application

For LogMate, likely common tasks include onboarding/previous totals, import and duplicate resolution where part of normal use, adding/editing flights, reviewing totals/period summaries, search, export/backup/sync where core to the released product, and essential settings. Final scope follows the released product rather than roadmap.

Accessibility can be particularly valuable for a professional utility because a user needs confidence before adopting it into a repeated workflow. It does not, however, establish ICAO/FAA/EASA/Korean regulatory compliance, legal recency status, or operational suitability.

## Zero-cost operating rule

Do not create accessibility claims as marketing copy. Build accessible common-task coverage, validate it, then expose the truthful Apple declaration and an app-specific accessibility page if useful. This is a product-quality-to-discovery loop:

`accessible implementation → common-task validation → truthful device-specific declaration → accessibility-intent discovery/trust → qualified install → accessible core value → maintained support`

## Cross-framework relationships

- AS/AW/BN: accessibility search intent may create organic discovery, but does not replace ordinary intent/keyword evidence.
- AX: accessibility declarations are destination truth and must match the release users actually receive.
- BP: do not A/B test truth claims about accessibility; experiment only with truthful presentation where platform rules allow it.
- BD: an accessibility web page should be self-contained evidence/support content, not keyword stuffing.
- BE: MintTap financial claims remain independently governed.
- BR/BS: featuring/event distribution cannot inflate accessibility claims beyond validated support.

## Evidence registry fields

`app | release_ref | device_family | common_task_set_version | accessibility_feature | Apple_criteria_version/date | implementation_evidence | validation_evidence | significant_known_bug | declaration_state | published_at | accessibility_url | last_reaudit | next_reaudit_trigger`

## Immediate operational consequences

1. Add App Accessibility to the MintTap App Store Connect live audit alongside CPP/PPO/reviews/Featuring/IAE.
2. Before publishing any MintTap declaration, obtain a release-qualified common-task × accessibility-feature matrix; no inference from screenshots or design specs.
3. For VoiceOver, explicitly audit charts/data visualizations and transaction/portfolio controls.
4. Add the same matrix to LogMate release readiness when an executable release is available.
5. If an accessibility URL is used, document supported and unsupported areas precisely and keep it release-aligned.
6. Re-audit after UI architecture, charting, navigation, onboarding, or other common-task changes.

## Sources

Primary sources consulted 2026-09-21:
- Apple Developer, “Overview of Accessibility Nutrition Labels,” App Store Connect Help.
- Apple Developer, “Manage Accessibility Nutrition Labels,” App Store Connect Help.
- Apple Developer, “VoiceOver evaluation criteria,” App Store Connect Help.
- Apple Developer, “App Store search.”
- Apple Developer, “Submitting — App Store.”

No ranking-weight claim is made. Apple documents increased relevance for matching accessibility-intent searches but does not publish the magnitude of that effect.