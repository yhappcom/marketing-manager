# 106 — Accessibility as Store Trust and Discovery Evidence

Validated: 2026-09-19

## Why this is a new marketing layer
Accessibility is not a cosmetic Store claim. Apple now exposes Accessibility Nutrition Labels on App Store product pages on iOS/iPadOS/macOS/tvOS/visionOS/watchOS 26+, and states that accessibility features can contribute to search relevance when users include accessibility needs in their search. Apple also says these disclosures are voluntary initially but will become required over time for new apps and updates.

This creates a zero-cost discovery/trust surface, but only when the underlying product behavior is actually validated.

## Authoritative Apple findings
Apple currently supports labels for VoiceOver, Voice Control, Larger Text (200%+), Dark Interface, Differentiate Without Color Alone, Sufficient Contrast, Reduced Motion, Captions, and Audio Descriptions, with device-specific applicability.

The critical evaluation rule is task-completion based: to indicate support, users must be able to complete all common tasks with that accessibility feature. Mandatory tasks such as account/setup or settings are part of that evaluation. Significant accessibility bugs that would change the answer mean the feature should not be claimed.

If no information is supplied, the Accessibility section can still appear and indicate that support has not yet been declared. Developers can also provide an app-specific accessibility URL explaining additional features, settings, supported caption languages, and known unsupported areas.

Apple says users may include accessibility features in App Store search queries and declared support can make an app more relevant to those searches. Therefore accessibility metadata can affect qualified discovery, but it must never be treated as keyword stuffing.

## Canonical principle
**Accessibility metadata is product evidence first, trust/discovery metadata second. Never claim an accessibility feature to gain Store relevance before common-task completion has been validated on the applicable device family.**

## Y0–Y5 Accessibility Evidence Gate
- **Y0 — Misleading:** marketing/store claim exceeds actual accessible behavior, or a known blocking bug invalidates the claim.
- **Y1 — Assumed:** framework/native controls are present, but common tasks have not been tested end-to-end.
- **Y2 — Partial:** some screens/tasks work, but the full common-task matrix or device coverage is incomplete.
- **Y3 — Validated:** applicable common tasks are tested for the claimed feature on each declared device family; known exceptions are documented; Store disclosure matches production behavior; accessibility URL, if used, is app-specific and current.
- **Y4 — Operational:** Y3 plus release regression checks, owner/stale trigger, user feedback/support loop, and evidence that accessible users can reach first value/useful return without disproportionate friction.
- **Y5 — Reusable:** the validation matrix, release gate, Store disclosure workflow, accessibility support page, and measurement method transfer safely to future niche apps.

Minimum threshold for deliberate accessibility marketing/discovery use: **Y3**.

## MintTap application
Priority common tasks should include at minimum: understanding portfolio summary; reading ticker/distribution/ROC/reverse-split information; adding/editing the core transaction path; navigating settings; and interpreting gains/losses without color alone. Financial values and positive/negative states must not depend on red/green alone if `Differentiate Without Color Alone` is claimed.

Larger Text is especially relevant because dense financial tables can fail at 200% even if ordinary UI text scales. VoiceOver must be tested against ticker symbols, currency values, percentages, dates, charts/tables and controls semantically, not merely for focusability.

Do not publish Apple accessibility support merely because Flutter/OS widgets nominally expose semantics. Validate the common-task matrix against the shipping build.

## LogMate application
Pilot-facing workflows are dense and time-sensitive, so common tasks should include manual flight entry, reading totals, searching historical flights, settings/backup, and any production import/review workflow. Registration, airport codes, flight numbers and time fields need meaningful screen-reader output. Status, validation errors and duplicate/review states must not rely on color alone.

Because LogMate is prelaunch, accessibility validation should be built into first-value testing rather than retrofitted as Store copy near launch. This can preserve scarce pilot evidence by testing utility and accessibility in the same production-valid task matrix.

## Zero-cost marketing implications
1. Accessibility support can increase qualified trust before install and may improve relevance for accessibility-intent searches on Apple.
2. It is not a generic ASO keyword tactic. The disclosure is a verifiable product claim.
3. An app-specific accessibility page on the owned website can become durable support/trust content without paid acquisition.
4. Accessibility claims should enter the same claim/evidence registry used for Store assets and localization parity.
5. Accessibility bugs can create marketing debt immediately because a previously valid Store claim may become stale after a release.

## Required accessibility registry
`app → device_family → accessibility_feature → common_task → production_version → test_result → blocker/exception → evidence_owner → store_disclosure_state → accessibility_url_state → last_verified → stale_trigger → Y-class`

## Operational release rule
Any release touching navigation, text scaling, colors/status semantics, custom controls, charts/tables, modal flows, forms, or onboarding must trigger targeted accessibility revalidation before retaining the corresponding Store claim.

## Measurement
Do not optimize for number of accessibility labels. Measure whether the relevant specialist can complete first value and useful return with the declared feature. Store search/relevance is a secondary benefit.

## Sources
- Apple Developer — Overview of Accessibility Nutrition Labels: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels
- Apple Developer — Manage Accessibility Nutrition Labels: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/manage-accessibility-nutrition-labels
- Apple Developer — Submitting to the App Store: https://developer.apple.com/app-store/submitting/

## Next validation
Audit MintTap's current Apple Accessibility section and production common-task support before publishing or expanding any label. For LogMate, add the Y3 common-task matrix to launch-readiness evidence rather than creating accessibility marketing copy first.