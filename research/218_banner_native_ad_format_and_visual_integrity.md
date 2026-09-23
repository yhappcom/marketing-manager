# Research 218 — Banner and Native Ad Format / Visual Integrity

Date: 2026-09-23

## Validated findings
Google defines anchored adaptive banners as persistent top/bottom units sized for device width. Automatic refresh occurs only while the banner is visible. Large anchored adaptive banners can use materially more vertical space, so technical eligibility is not a product recommendation.

Inline adaptive banners are intended for scrollable content. Format choice should follow surface geometry and workflow rather than revenue metrics alone.

Collapsible banners initially appear as a larger overlay and collapse to the requested banner size. Google avoids requesting another collapsible creative during ordinary auto-refresh because repeated expansion can hurt user experience. Collapsible supply is Google-demand only; mediated supply in the same slot can render as an ordinary banner. Therefore a collapsible request is not evidence of a collapsible impression.

Native ads may visually fit the app but must remain clearly identifiable as advertising. Ad attribution and AdChoices must remain visible. Google's native-ad validator can identify implementation problems during testing.

## Canonical distinctions
`banner slot != banner impression`; `adaptive eligibility != permission to maximize screen occupation`; `collapsible request != collapsible delivery`; `collapsible != non-intrusive`; `native integration != camouflage`; `higher CTR != healthier monetization`; `policy compliant != product appropriate`.

## ED0–ED5 Banner / Native Visual-Integrity Gate
ED0 Format identity — capture unit, platform, SDK, requested and delivered format/size, mediation source and rendered state.

ED1 Surface/geometry integrity — map exact screen/workflow, viewport occupation, navigation proximity, content displacement, overlay and scroll behavior.

ED2 Recognition/interaction integrity — advertising must be unmistakable; native attribution and AdChoices stay legible; avoid accidental-interaction pressure near controls.

ED3 Persistence/expansion integrity — measure visible duration, refresh and expansion/collapse lifecycle. Repeated expansion is disallowed by default for the current professional apps.

ED4 Specialist-utility guardrail — connect exposure with task completion, abandonment, layout shift, time-to-core-value, repeated specialist value, complaints and invalid-activity signals.

ED5 Sustainable revenue decision — use reconciled revenue from EA, not CTR/eCPM alone. Prefer the least disruptive placement that produces meaningful incremental reconciled revenue without measurable specialist-utility harm.

## MintTap
First reconstruct actual production inventory. For every banner/native unit capture exact workflow, requested/delivered size and type, viewport share, fixed versus scroll-contained behavior, control proximity, refresh/visible time, collapsible request/delivery state, native attribution state, revenue reconciliation and utility guardrails. Do not sacrifice portfolio/distribution/ROC readability merely because a larger or expanding format is technically available.

## LogMate
Home remains ad-free. ED is not a loophole for a persistent Home banner. Concentration/reliability-critical workflows default to no persistent or expanding advertising. A future non-critical secondary scroll surface may be evaluated under ED before more interruptive inventory is considered.

## Reusable rule
`workflow criticality -> surface geometry -> recognition/interaction safety -> persistence/expansion cost -> repeated-value effect -> reconciled incremental revenue`.

## Next evidence
Enumerate MintTap production ad units and delivered formats; establish placement geometry; determine banner/native/adaptive/collapsible presence; capture refresh/visibility/expansion state; join EA revenue evidence to ED utility guardrails. Unknown inventory remains unknown until observed.

## Sources
- Google Developers — Set up banner ads (Android): https://developers.google.com/admob/android/banner
- Google Developers — Set up banner ads (iOS): https://developers.google.com/admob/ios/banner
- Google Developers — Use collapsible banners (Flutter): https://developers.google.com/admob/flutter/banner/collapsible
- Google AdMob Help — Overview of native ads: https://support.google.com/admob/answer/6239795?hl=en
- Google AdMob Help — Validate native ads: https://support.google.com/admob/answer/9923650?hl=en
