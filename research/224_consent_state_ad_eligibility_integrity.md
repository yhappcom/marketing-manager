# Research 224 — Consent-State Ad Eligibility Integrity

Date: 2026-09-23
Status: Validated operating framework

## New operational gap
Prior work covers privacy declarations and downstream ad revenue/placement integrity. This adds the upstream state that determines whether an ad request is eligible at all.

## Validated findings
Google's current Android and iOS UMP guidance says consent information should be updated on every app launch. That update checks whether consent is required or expired and whether a privacy-options entry point is required. Google warns against using an app-cached consent value as the canonical status because it can be stale.

Before requesting ads, Google directs publishers to use UMP `canRequestAds`. This remains false until the consent-information update has been called. An update error does not itself prove that ads cannot be requested: UMP can use a valid status from the previous session.

When UMP reports that privacy options are required, the app needs a visible, usable entry point to the privacy-options form. AdMob guidance also requires an in-app route for applicable European users to revoke consent and revisit the consent message.

For personalized ads, Google states that a Google-certified CMP integrated with the IAB TCF has been required in the EEA and UK since 2024-01-16 and Switzerland since 2024-07-31. Current European-regulations messages support TCF v2.3.

Google's CMP can optionally propagate relevant European choices into Consent Mode for advertising purposes and analytics storage. Consequently, a change in measured activity can reflect observability/consent configuration as well as a real change in product use.

Authoritative sources:
- https://developers.google.com/admob/android/privacy
- https://developers.google.com/admob/ios/privacy
- https://support.google.com/admob/answer/10113915
- https://support.google.com/admob/answer/13554020
- https://support.google.com/admob/answer/10114014
- https://support.google.com/admob/answer/16053245

## EJ0–EJ5 Consent-State Ad Eligibility & Revenue-Denominator Integrity Gate

**EJ0 — implementation identity.** Version the app/build, UMP/GMA versions, AdMob app ID, message/CMP configuration, applicable regime and configuration-change timestamps.

**EJ1 — state freshness.** At launch retain whether the consent-information update ran, its result, whether a form was required/shown/completed, privacy-options requirement and resulting SDK eligibility. Do not substitute a locally cached boolean.

**EJ2 — request eligibility.** Preserve `qualified active session`, `consent/update state`, `canRequestAds`, and `ad request emitted` as separate states. A user session is not automatically an ad-request opportunity.

**EJ3 — choice/revocation integrity.** When privacy options are required, keep the entry point visible and usable. Treat withdrawal or changed choices as valid product states, not friction to suppress.

**EJ4 — denominator/observability integrity.** Segment monetization by ad-request eligibility and applicable message regime. Changes in revenue/user, request rate, fill or impression density can originate in the eligible denominator. If analytics-storage behavior changes, distinguish measurement loss from real product-use loss.

**EJ5 — sustainable decision.** Optimize format, placement, floor or exposure only after consent eligibility is reconciled. Revenue obtained by stale state, hidden revocation or bypassed choice is not a valid optimization.

## Preserve these distinctions
`consent decision ≠ permanent consent state`; `consent form completed ≠ ad-request eligible`; `canRequestAds false before update ≠ user refusal`; `ad-eligible active user ≠ all active users`; `request opportunity ≠ emitted request`; `consent rate ≠ growth KPI`; `analytics decline ≠ necessarily product-use decline`.

## MintTap evidence extension
For each production platform/build recover:

`build → UMP/GMA versions → message/CMP/config version → launch → applicable message regime → consent-info update/result → form state → privacy-options requirement → canRequestAds → qualified YieldMax session → ad request → match/show/impression → ILRD/reconciled revenue → specialist task completion/repeat value`.

Keep release/config timestamps so changes in requests, AU/AV, ARPU/ARPV, fill and revenue can be separated from consent-state or measurement changes. Current MintTap implementation remains unknown until inspected.

## LogMate
Home remains ad-free and critical workflows remain protected. Any future secondary-surface monetization must establish current consent/privacy state before ad requests. Eligibility never makes an otherwise inappropriate placement acceptable.

## Reusable niche-app chain
`qualified active use → current privacy/consent state → ad-request eligibility → appropriate ad opportunity → request/auction → valid impression → semantically valid revenue → repeated specialist value`.

## Next target
Apply DZ + EA–EJ to actual MintTap production evidence instead of adding another abstract ad-format framework.