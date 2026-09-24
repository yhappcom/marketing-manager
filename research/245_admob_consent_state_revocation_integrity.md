# Research 245 — AdMob Consent-State & Revocation Integrity

Date: 2026-09-24
Status: Canonical extension
Gate: FE0–FE5

## Validated findings
Google's EU User Consent Policy requires relevant disclosures and consent where legally required for users in the EEA, UK and Switzerland. For personalized ads, AdMob publishers must use a Google-certified CMP integrated with IAB TCF in the EEA/UK and Switzerland.

Google UMP guidance explicitly requires users to be able to revoke consent. Consent therefore cannot be modeled as immutable onboarding state.

Google consent mode can interpret separate choices for ad storage, ad personalization, ad user data and analytics storage. These states are not interchangeable. Current Android guidance requires consent mode to be enabled in AdMob and UMP SDK 3.2.0+ for this integration.

Current next-generation Android guidance also warns that UMP's under-age-of-consent flag is not automatically forwarded to the Mobile Ads SDK; age-restricted treatment must be explicitly configured on ad requests. This demonstrates why consent UI state and ad-request state must be verified separately.

## Evidence chain
`regulatory applicability → CMP/message → consent request → user choice → revocation availability → effective consent signals → ad-request configuration → delivery → impression → paid event`

Do not collapse this into a single consent=yes/no field.

## FE0–FE5
- FE0 Regulatory/message identity: record applicable regime and actual configured CMP/message.
- FE1 Choice-state integrity: treat consent as mutable and preserve the required revocation/privacy-options path.
- FE2 Signal identity: distinguish ad storage, personalization, ad user data, analytics storage and age-restricted treatment.
- FE3 Request-path integrity: verify downstream SDK/ad requests reflect current state; correct UI alone is insufficient evidence.
- FE4 Measurement integrity: before interpreting revenue/eCPM/analytics changes, check whether consent-state composition or observability changed.
- FE5 Sustainable decision: optimize only eligible inventory; never recover revenue by obstructing revocation, coercing consent or degrading core access.

## Prohibited inferences
`dialog shown ≠ effective consent`; `consent once granted ≠ permanent`; `UMP state ≠ automatically identical to ad-request state`; `analytics decline ≠ engagement decline when analytics eligibility changed`; `revenue decline ≠ placement/mediation failure when consent mix changed`; `privacy compliance ≠ monetization optimization complete`.

## Product application
MintTap monetization diagnosis must join FA–FD evidence with consent/message changes, geography and effective request eligibility before changing density, format, floor or mediation. Core product workflows remain independent of advertising consent outcome.

If LogMate adopts AdMob, consent/revocation and downstream request-state verification belong in pre-monetization readiness. Core Home, logging, import/export, sync, totals and recovery workflows remain independent of consent outcome.

## Company contract
`Store/domain authorization → app readiness → regulatory applicability → certified CMP → current user choice → revocation path → effective request state → eligible non-intrusive inventory → delivery → impression revenue → reconciliation`

## Authoritative sources
- Google for Developers, Disclose to EEA users: https://developers.google.com/admob/android/next-gen/privacy/gdpr
- Google for Developers, Interpret consent mode values: https://developers.google.com/admob/android/privacy/consent-mode
- Google AdMob Help, consent management requirements: https://support.google.com/admob/answer/13554116
- Google AdMob Help, Manage consent mode settings: https://support.google.com/admob/answer/16053245
