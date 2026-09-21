# Research 170 — Consent State as Ad-Supply and Measurement Integrity

Date: 2026-09-21
Status: validated operating addition

## Why this matters

Ad monetization cannot be optimized correctly if privacy/consent state is treated as a one-time onboarding checkbox. Consent state changes which ad demand and measurement paths are eligible, can change later, and must therefore be part of the same operating evidence chain as placement, impression-level revenue, and downstream product value.

## Authoritative findings

### 1. EEA/UK/Switzerland traffic has a distinct consent boundary
Google's EU User Consent Policy requires disclosures and, where required, consent for local storage and personal-data use for ads in the EEA, UK and Switzerland. Google requires publishers using AdMob to use a Google-certified CMP integrated with IAB TCF for personalized ads in the EEA/UK (since 2024-01-16) and Switzerland (since 2024-07-31).

Sources:
- https://support.google.com/admob/answer/13554116
- https://developers.google.com/admob/flutter/privacy/gdpr

### 2. TCF v2.3 is now a live implementation boundary
Google states that its consent-management solutions support IAB TCF v2.3 and that v2.3 is mandatory for TC strings generated on or after 2026-03-01. Older v2.1/v2.2 strings generated before 2026-02-28 remain accepted under the stated transition rule. This makes CMP/TC-string version an operational production concern, not archival compliance trivia.

Source: https://support.google.com/admob/answer/9999955

### 3. Consent must be refreshed as state, not assumed from a past screen
Google's UMP guidance says consent information should be updated at every app launch so the SDK can determine whether consent is currently required and whether a privacy-options entry point is required. GDPR consent must also be revocable; UMP provides a privacy-options form for changing choices.

Sources:
- https://developers.google.com/admob/flutter/privacy/gdpr
- https://developers.google.com/ad-manager/mobile-ads-sdk/android/privacy/gdpr

### 4. Consent is multidimensional
Google Consent Mode can interpret CMP choices into ad storage, ad personalization, ad user data and analytics storage states. Therefore `consented=true/false` is an insufficient analytics contract. Measurement and ad eligibility may differ by purpose.

Sources:
- https://developers.google.com/ad-manager/mobile-ads-sdk/android/privacy/consent-mode
- https://support.google.com/admob/answer/16053245

### 5. Mediation configuration belongs inside consent integrity
Google requires publishers to identify ad partners receiving relevant personal data; mediation/ad partners must be represented correctly in the consent configuration. A monetization experiment that changes mediation mix can therefore also change the consent/vendor surface.

Source: https://support.google.com/admob/answer/10113004

### 6. Fallback coverage is not evidence that the app integration is healthy
AdMob's account-level “maximize message coverage” can attempt to show a fallback CMP message when eligible traffic reaches an ad request without a TC string. Treat this as a safety net, not a substitute for correct app-level consent initialization and observability.

Source: https://support.google.com/admob/answer/17198583

## CH0–CH5 Consent-State Ad-Supply Integrity Gate

CH0 — regulatory/traffic identity
- Establish whether the current user/request falls under the relevant consent regime.
- Never infer this from app language alone.

CH1 — CMP/message integrity
- Record CMP provider/configuration, applicable message, TCF generation/version boundary, app identity and configured ad partners.

CH2 — current choice integrity
- Refresh consent information at launch as required by the SDK contract.
- Preserve whether a privacy-options entry point is required.
- Provide withdrawal/change path where required.

CH3 — ad-request eligibility
- Do not reduce consent to a single boolean.
- Preserve the operational state needed to explain personalization/storage/user-data/analytics eligibility and restricted treatment where applicable.

CH4 — monetization/measurement observability
- Join consent-state class to ad request/impression/ILRD and aggregate AdMob reconciliation without storing unnecessary sensitive data.
- A missing/invalid consent signal is an observability or eligibility defect, not evidence of zero demand.

CH5 — sustainable decision
- Compare revenue and repeated useful value only inside interpretable consent cohorts and regulatory boundaries.
- Never increase consent pressure or degrade refusal paths to improve yield.

## Evidence rules

Preserve:

`message shown ≠ consent granted`

`past consent ≠ current consent state`

`consent granted ≠ personalized-ad eligibility for every vendor/purpose`

`CMP fallback shown ≠ healthy app integration`

`ad request without revenue ≠ demand failure when consent eligibility is unresolved`

`higher personalized yield ≠ permission to manipulate consent choice`

## MintTap operating implications

1. Before interpreting production eCPM/fill by geography, audit UMP/CMP implementation, European-regulations message status, TCF v2.3 readiness, privacy-options entry point and configured mediation partners.
2. Add a non-sensitive consent-state class to the CB–CG ad evidence contract so request/impression/ILRD gaps can be separated from placement/lifecycle defects.
3. Do not change UI copy or choice architecture to steer users toward consent for revenue purposes.
4. Home and core financial workflows remain excluded from ads; consent compliance does not create new placement permission.

## LogMate operating implications

Consent infrastructure belongs in release-confidence before monetized launch. Because the intended professional audience can travel internationally, do not model regulatory applicability from the user's profession, home market, or UI language. Define consent-state observability before comparing ad yield across markets.

## Reusable company rule

Privacy state is part of ad-supply identity. Every future ad-supported niche app should establish `traffic/regulatory identity → current CMP state → request eligibility → actual exposure → ILRD/reconciliation → useful repeated value` before optimizing yield.

## Next evidence target

Audit the live MintTap implementation: UMP/Google Mobile Ads Flutter versions, AdMob European-regulations message, certified CMP state, TCF v2.3 readiness, privacy-options entry point, mediation partner list, launch-time consent update, and the minimum non-sensitive consent-state fields that can join CB–CG revenue evidence.