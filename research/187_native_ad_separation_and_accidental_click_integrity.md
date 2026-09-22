# Research 187 — Native Ad Separation & Accidental-Click Integrity

Validated: 2026-09-22

## Decision
Native advertising is not permission to make advertising indistinguishable from specialist utility. In a professional utility app, visual integration must preserve an unmistakable semantic boundary between product content/actions and paid content.

## Current authoritative findings
Google Mobile Ads native implementations require ad attribution and an AdChoices overlay. Native assets belong inside the SDK native-ad container; registered assets let the SDK handle clicks and impressions. Google explicitly says not to add custom click handlers over/within the native ad view. The SDK records an impression when the first pixel becomes visible, so an SDK impression is not evidence that the user meaningfully attended to the ad.

Google's Native Validator is designed to catch certain policy/layout problems on test ads before release and is enabled by default for test ads. This should become a release-gate artifact rather than being disabled merely to remove warnings.

Google Play policy also establishes the broader principle that advertising must not be deceptive or designed to generate inadvertent clicks. Therefore visual resemblance to app content must never erase ad identity or place paid click targets where users reasonably expect a product action.

## CY0–CY5 Native Ad Separation & Accidental-Click Integrity Gate

CY0 — Specialist-job identity
- Identify the screen, user job, expected action targets and whether the state is critical/protected under CX.
- Native inventory is not justified merely because a feed/list/card slot exists.

CY1 — Paid-content identity
- Required ad attribution is visible and legible.
- AdChoices remains visible and unobstructed.
- Paid content cannot impersonate portfolio rows, flight records, warnings, system notices, calculations or product CTAs.

CY2 — Interaction-boundary integrity
- Product controls and paid click targets have unambiguous spatial/semantic separation.
- Do not overlay custom click handlers or engineer adjacent controls to induce accidental taps.
- Loading/reflow must not move an ad into a location where the user was already attempting a product action.

CY3 — Rendering/SDK integrity
- Native assets are registered/rendered through the proper SDK native-ad container.
- Use test ads and Native Validator during QA; preserve validator findings and resolution evidence.
- Mediation/custom rendering must preserve required attribution/AdChoices/click semantics.

CY4 — Exposure-quality integrity
- Separate `SDK impression` from `meaningful exposure` because first-pixel visibility can trigger impression recording.
- Where instrumentation permits, retain visible duration/area or equivalent exposure context separately from paid-event revenue.
- Monitor ad clicks alongside nearby product-action attempts, immediate back/return, abandonment and layout/reflow events; do not interpret CTR increase alone as improved monetization.

CY5 — Sustainable-value decision
- Join CW revenue evidence with CX interruption/exposure evidence and product outcomes.
- Reject placements whose revenue gain depends on ambiguity, accidental-click risk, displaced product actions or degradation of first/repeated specialist value.

## Canonical invariants
`native styling ≠ content impersonation`
`SDK impression ≠ meaningful attention`
`higher CTR ≠ higher-quality monetization`
`feed/list slot ≠ ad permission`
`required attribution ≠ sufficient UX separation`
`Native Validator pass ≠ product-fit approval`
`policy-compliant placement ≠ sustainable placement`

## MintTap application
Audit any native-format candidate against portfolio/ticker/distribution/ROC/tax surfaces. A paid unit must not resemble a holding, distribution event, tax adjustment, performance statistic, warning or app recommendation. Record attribution/AdChoices visibility, container registration, loading/reflow behavior, click-target adjacency, Native Validator evidence, paid-event revenue and downstream task outcomes. Do not introduce native ads solely to make advertising look less intrusive.

## LogMate application
Keep protected workflow states protected under CX. A native unit must never resemble a flight/logbook row, crew/airport/aircraft result, validation message, recency/compliance state or operational warning. Secondary surfaces require independent CY review even when the format visually fits the app.

## Reusable company contract
For every native placement retain: app/version/platform; screen/state/job; ad unit/format; attribution and AdChoices evidence; SDK/container implementation; mediation source; test-device/Native Validator result; product-control adjacency; load/reflow behavior; impression semantics; exposure context if available; clicks; nearby product-action outcomes; CW revenue; first/repeated-value and return evidence; keep/change/remove decision.

## Sources
- Google for Developers, “Display a native ad” (Android), current documentation accessed 2026-09-22: https://developers.google.com/admob/android/native/advanced
- Google for Developers, “Display a native ad” (iOS/Ad Manager), current documentation accessed 2026-09-22: https://developers.google.com/ad-manager/mobile-ads-sdk/ios/native/advanced
- Google for Developers, “Validate your native ads” (iOS), current documentation accessed 2026-09-22: https://developers.google.com/admob/ios/native/validator
- Google Play Developer Program Policy, current policy documentation accessed 2026-09-22: https://support.google.com/googleplay/android-developer/answer/17517561

## Next evidence target
Apply CW+CX+CY to the actual MintTap production inventory. If no native units exist, record `not implemented` rather than creating one for measurement. Native should be considered only after the current screen/state/trigger inventory proves a non-critical surface where clear paid-content identity and product-action separation can be maintained.