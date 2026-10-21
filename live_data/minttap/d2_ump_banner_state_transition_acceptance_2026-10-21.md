# MintTap D2 — UMP and banner lifecycle production acceptance gate (2026-10-21)

## Decision and scope
**PRESSURE HOLD / code-path risks observed / live effects unverified.** This is one consolidated, test-ad-only production gate, not new general theory or evidence of a policy violation. Product repository remains read-only.

## Release-pinned source
`yhappcom/yieldmax_tracker@1.0.29`:
- `lib/ads/ad_privacy_manager_mobile.dart` (blob `9f88c3b39ce1be243e351024101453feb93647c2`): `prepareAdPrivacyAndConsent` memoizes `_prepareFuture`; iOS stored GDPR denial can skip `loadAndShowConsentFormIfRequired`; consent update failure logs and completes; privacy-options requirement errors return `false`.
- `lib/widgets/home_inline_ad_slot_mobile.dart` (blob `383959d4c2e43e89d399dbde93aa4a56ecf70689`) and `lib/widgets/fixed_bottom_banner_ad_slot_mobile.dart` (blob `126b2bb91d67aa066e076210144790442fa7b6b1`): one scheduled load per widget instance, consent gate before request, no explicit consent-change subscription or per-surface impression/paid-event callbacks in inspected widgets.
- `lib/screens/settings_screen.dart` (blob `0cc56c40d8556f8c575fde4e2699b2ae06e12deb`): privacy row visibility is based on `_adPrivacyOptionsRequired`; refresh occurs at initialization, but no explicit post-form requirement refresh is observed in `_openAdPrivacyOptions`.
- Existing canonical `live_data/minttap/d2_ad_surface_app_id_source_reconciliation_2026-10-10.md` and `live_data/minttap/d2_public_app_ads_authorization_chain_2026-10-09.md` establish surface identity and the limited public app-ads.txt gate.

## Required isolated test-ad transition matrix (both iOS and Android where applicable)
| Case | Setup → action | Expected admission/UX evidence |
| --- | --- | --- |
| 1 first launch | No prior UMP choice → launch | Refresh state; display form if required; no request before SDK `canRequestAds` allows |
| 2 stored iOS denial | Deny → terminate → relaunch with required form | SDK-refreshed requirement remains authoritative; verify form presentation rather than skipping from local cache |
| 3 expiry | Consent previously given → SDK reports expired → relaunch | Required form is shown; stale local allow must not authorize a new request |
| 4 deny→allow | Widget mounted with request ineligible → user changes privacy option | After eligible change, widget re-evaluates; test whether a request occurs without navigation/recreation |
| 5 allow→deny | Banner loaded → user withdraws consent | Verify no further unauthorized request; observe whether existing banner is disposed/hidden and on what trigger |
| 6 transient error | UMP refresh or requirement-status lookup fails → recovery | Error is distinguishable from `not required`; a supported retry/recovery path is exercised |
| 7 form return | Privacy-options form completes → Settings stays mounted | Requirement status and menu visibility reflect current SDK state |
| 8 widget lifecycle | Home return / Stock Detail tab key replacement / load failure | Per-surface request counts and disposal captured, no uncontrolled request pressure or protected-flow interference |

Record sanitized timestamps, platform, app build, SDK/adapter version, simulated UMP state, form/error callback, canRequestAds at request, ad unit/surface, request/load/impression/paid callbacks, disposal and navigation. Use only test ad units. No real ad clicking, no inference from missing ILAR.

## Acceptance rule
All mandatory consent/request and privacy-entrypoint cases must PASS on devices and the release candidate. Code-path observation alone is NOT runtime PASS. Account-side Privacy & messaging targets, readiness, Policy Center/Confirmed Click/serving limits, mediation/refresh/floors and estimated→finalized revenue remain independent operator-only gates. No new ad placement, Home pressure increase or revenue optimization before these gates.

## Primary platform reference (checked 2026-10-21)
https://developers.google.com/admob/flutter/privacy — request consent-info update each launch; show required forms after fresh status; use SDK `canRequestAds`; query required privacy options entry point; do not use app-owned cache as consent authority.
