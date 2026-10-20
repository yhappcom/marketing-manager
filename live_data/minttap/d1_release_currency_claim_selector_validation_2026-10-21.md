# MintTap D1 — release currency-selector claim verification (2026-10-21)

## Decision delta
Release tag `yhappcom/yieldmax_tracker@1.0.29` exposes **43 unique selectable currency codes**, including USD, i.e. **42 non-USD currencies**. The previously recorded public Store claim says "42 currencies". This is a claim-denominator clarification, not evidence of missing exchange-rate coverage or an actual Play Console declaration.

## Read-only release evidence
- `lib/screens/onboarding_screen.dart` blob `242ebd5bbd58b5e5b0f4e0396351b56675811390`: `_supportedCurrencyCodes` contains 43 unique ISO-style codes; 42 are non-USD, and USD is present.
- `_openCurrencyPicker` passes the complete list to `_OnboardingCurrencySelectionPage`.
- `_supportedCountries` references exactly the same 43 distinct currencies (no currency code outside the selector list).
- `lib/auth/user_profile_service.dart` persists the selected default currency as `defaultCurrency` and uses it for initial portfolio currency unless a prior saved value exists.
- Prior public claim snapshot: `live_data/minttap/d1_public_play_listing_claim_audit_2026-10-10.md`.

## What this does not prove
No production exchange-rate API coverage, fresh rates, failure-state UX, runtime selection, or Store metadata currently served in each locale was verified. The source supports selector availability, not reliable FX conversion for all 43 codes.

## Decision
**D1 HOLD** pending redacted submitted Play Console Financial features selections/status, version-matched public claims, and runtime FX coverage. If the intended denominator is 42 non-USD currencies, Store copy should state this explicitly; otherwise a "42 currencies" claim needs an agreed scope and a version-matched truth test. Ordinary distribution and optional Promotional-content eligibility remain separate.

## Sources
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/screens/onboarding_screen.dart
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/auth/user_profile_service.dart
- https://support.google.com/googleplay/android-developer/answer/13849271
