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

## 2026-10-23 addendum — three mobile banner implementations and ILAR observability

**New scope-complete source finding (not a live revenue finding).** In `yhappcom/yieldmax_tracker@1.0.29`, all three inspected mobile banner implementations create `BannerAd` with `BannerAdListener` containing only `onAdLoaded` and `onAdFailedToLoad`: `lib/widgets/home_inline_ad_slot_mobile.dart` (blob `383959d4c2e43e89d399dbde93aa4a56ecf70689`), `lib/widgets/adaptive_inline_banner_slot_mobile.dart` (blob `f0099e5602bacd7e5b20be1ea8b8a92de0d6b06a`), and `lib/widgets/fixed_bottom_banner_ad_slot_mobile.dart` (blob `126b2bb91d67aa066e076210144790442fa7b6b1`). No `onAdImpression`, `onPaidEvent`, `onAdClicked` or `responseInfo`/adapter/latency collection is wired in those listener blocks. Home/adaptive failure callbacks clear state without retaining error metadata; fixed-bottom renders a code-derived error label, not a diagnostic event. These observations do **not** establish absence of SDK-internal reporting, other app-wide instrumentation, or live paid events.

`pubspec.lock` at the release ref (blob `026865f95ea1bf96f1bb649b270dbc36cf3f3e9c`) pins `google_mobile_ads 6.0.0`. Google Flutter `ResponseInfo` documentation identifies `adapterResponses`, `loadedAdapterResponseInfo`, `responseId`, adapter errors and `latencyMillis` as available diagnostics; the official Flutter plugin API documents `BannerAdListener.onAdImpression` and `onPaidEvent` (paid callback is account-eligibility dependent). Confirm **6.0.0-specific API and account allowlist** before any implementation recommendation; newer API docs alone are not binary proof.

**Decision consequence:** the inspected banner code cannot by itself provide a per-surface request→load→impression→paid-event/ILAR precision chain or adapter/latency diagnosis. D2 **PRESSURE HOLD** persists. Do not equate this observability gap with zero impressions/revenue or a policy violation. Operator AdMob readiness, Privacy & messaging, Policy Center/Confirmed Click/serving limits, mediation, and estimated→finalized revenue remain independently UNKNOWN.

**Next evidence target:** test-ad-only iOS/Android build and sanitized event ledger with platform/build, surface/ad-unit, consent eligibility at request, request/load/error/response ID, impression, paid callback micros/currency/precision when account-enabled, loaded adapter/source and latency, navigation/disposal, and protected-workflow/retention guardrails. Never use real ad clicks to generate data; keep estimated paid callbacks distinct from finalized AdMob revenue.

Primary documentation checked 2026-10-23: https://developers.google.com/admob/flutter/response-info ; https://pub.dev/documentation/google_mobile_ads/latest/google_mobile_ads/BannerAdListener-class.html .

## 2026-10-23 release-locked SDK 6.0.0 compatibility closure — API gate only

**Decision delta (SOURCE-VERIFIED):** The previously OPEN question whether MintTap release `1.0.29`'s pinned `google_mobile_ads 6.0.0` supports the required banner callbacks and response diagnostics is now **CLOSED at plugin-source/API level**. It does **not** close test-device behavior, AdMob account eligibility, monetization validity, or D2 PRESSURE HOLD. The Flutter 6.0.0 package changelog alone was insufficient; this check inspected the exact upstream `v6.0.0` tag, not the current/latest API documentation.

- `packages/google_mobile_ads/lib/src/ad_listeners.dart` at upstream `v6.0.0`, blob `5677a246927bbd0d67a5feb9a8663f88d4de3b28`: `BannerAdListener` accepts `onAdImpression`, `onAdClicked`, and `onPaidEvent` in addition to load/error. `OnPaidEventCallback` signature is `(Ad ad, double valueMicros, PrecisionType precision, String currencyCode)`. Precision enum includes `unknown`, `estimated`, `publisherProvided`, `precise`. The paid callback is documented as available only to allowlisted accounts.
- `packages/google_mobile_ads/lib/src/ad_containers.dart`, blob `5303fc646039dcc02b8385e2e29461c2a489e45d`: `ResponseInfo` includes response ID, mediation adapter class, adapter responses, loaded adapter, and response extras; `AdapterResponseInfo` includes adapter latency (ms), source name/ID/instance and `adError`; `LoadAdError.responseInfo` exists. Missing adapter fields are not zero or a failed mediation proof.
- `packages/google_mobile_ads/lib/src/ad_instance_manager.dart`, blob `b5061bbea05619a3a5d373712f6d25bf4ba03bf4`: load event assigns `ad.responseInfo` before invoking `onAdLoaded`; impression and click events dispatch to `AdWithViewListener`; paid event maps native precision codes 0–3 and dispatches `valueMicros.toDouble()`, precision, currency. Avoid premature integer casts or silently assuming USD/precise.
- Android upstream `packages/google_mobile_ads/android/src/main/java/io/flutter/plugins/googlemobileads/FlutterBannerAd.java`, blob `04b1ee3adf317380397c037f8db875b81348d1fb`: native banner load registers `FlutterPaidEventListener` and calls `manager.onAdLoaded(...getResponseInfo())`. `FlutterPaidEventListener.java`, blob `01ec96dda43032d5295fd578a4a843e467bcccbc`, forwards native valueMicros/currency/precision to manager.
- iOS upstream `packages/google_mobile_ads/ios/Classes/FLTAd_Internal.m`, blob `aeff03b7436dd2f0eee44ab11d37671f40a5606c`: native `FLTBannerAd` assigns `bannerView.paidEventHandler` and forwards `GADAdValue` with precision/currency to manager. Native bridge existence is not proof of any callback firing on MintTap devices.

**Reconciliation with MintTap product truth:** The previously inspected release mobile banner listeners register only load/failure callbacks, despite the pinned plugin's support for impression, paid, click, and response diagnostics. This is an **app instrumentation gap**, not an SDK-version blocker. An implementation can be scoped to the existing two unit IDs/six mapped surfaces, with explicit surface ID independent of `debugLabel`, and without adding placements or changing consent admission. Product engineering owns changes; Marketing Manager does not modify product source.

**Production acceptance target (still OPEN):** instrument on test devices with test ads and an event ledger keyed by ephemeral request/ad instance, platform/build, surface, unit, SDK consent eligibility at request, load/failure with `LoadAdError.responseInfo`, impression, paid callback (if eligible), valueMicros/currency/precision, loaded adapter/source and latency, widget disposal and protected-flow outcomes. Do not force real clicks. Record callback non-occurrence as **UNKNOWN** (account eligibility and test ad behavior may suppress paid callbacks), not zero revenue. Do not equate ILAR estimated event totals with finalized AdMob earnings. Keep operator-side app readiness, Policy Center, Confirmed Click/serving limits, mediation/floors/refresh and estimated-to-finalized reconciliation separately blocked.

**Primary version-pinned sources (inspected 2026-10-23):**
- https://github.com/googleads/googleads-mobile-flutter/blob/v6.0.0/packages/google_mobile_ads/lib/src/ad_listeners.dart
- https://github.com/googleads/googleads-mobile-flutter/blob/v6.0.0/packages/google_mobile_ads/lib/src/ad_containers.dart
- https://github.com/googleads/googleads-mobile-flutter/blob/v6.0.0/packages/google_mobile_ads/lib/src/ad_instance_manager.dart
- https://github.com/googleads/googleads-mobile-flutter/blob/v6.0.0/packages/google_mobile_ads/android/src/main/java/io/flutter/plugins/googlemobileads/FlutterBannerAd.java
- https://github.com/googleads/googleads-mobile-flutter/blob/v6.0.0/packages/google_mobile_ads/ios/Classes/FLTAd_Internal.m
- https://pub.dev/packages/google_mobile_ads/versions/6.0.0/changelog

**Cross-domain:** Company protected-workflow and retained-specialist-user guardrails unchanged. Design Studio owns accidental-click geometry and accessibility review after instrumentation; Web Manager is not material to this native-only SDK API gate. No runtime test, account access, release build, code edit or monetization change performed.

## 2026-10-24 addendum — cached UMP request admission can diverge from a later SDK refresh (release-source path)

**D2 / NEW SOURCE-VERIFIED CONTROL-FLOW GAP; LIVE ELIGIBILITY AND ACTUAL REQUESTS UNKNOWN.** The inspected `yhappcom/yieldmax_tracker@1.0.29` code has two separate representations of ad-request eligibility: the SDK's `ConsentInformation.instance.canRequestAds()` and the app-local module boolean `_canRequestAds`. The latter is updated only by `_refreshConsentState()`, not by every successful `requestConsentInfoUpdate()`. This matters because a later SDK refresh can occur without synchronizing the app-local boolean, while the three mobile banner implementations consult the cached boolean before `BannerAd.load()`.

**Exact source path and bounded conditional scenario:**
1. `lib/main.dart` (blob `f1c8a95d8291449f6fd889eabb0c98d750ef59b5`, lines 90–106) starts `initializeMobileAds()` after the first frame; `lib/ads/mobile_ads_initializer_mobile.dart` (blob `fd148d4a0eefda5996438698ad36ed6da7265a25`) calls `prepareAdPrivacyAndConsent()` before `MobileAds.instance.initialize()`. This is a genuine startup consent-preparation path.
2. `lib/ads/ad_privacy_manager_mobile.dart` (blob `9f88c3b39ce1be243e351024101453feb93647c2`) memoizes `_prepareFuture` for the process lifetime. Its initial `_prepareAdPrivacyAndConsentImpl()` eventually calls `_refreshConsentState()`, which reads SDK `canRequestAds()` into `_canRequestAds`.
3. The Settings screen `initState` calls `_refreshAdPrivacyOptionsRequirement()` (blob `0cc56c40d8556f8c575fde4e2699b2ae06e12deb`, lines 906–916 and 2138–2143). Its `isAdPrivacyOptionsRequired()` calls `_refreshConsentInfo()` and queries SDK requirement status, **but does not call `_refreshConsentState()`**. If this subsequent SDK refresh changes current ad-request eligibility from true to false, the app-local `_canRequestAds` may remain true.
4. `canRequestAdsForCurrentConsent()` only awaits the already-completed memoized `prepareAdPrivacyAndConsent()` and returns app-local `_canRequestAds`; it does **not** query SDK `canRequestAds()` at the request boundary. The Home, adaptive-inline and fixed-bottom banner `_loadBanner()` methods use that return value before creating/loading `BannerAd` (blobs `383959d4c2e43e89d399dbde93aa4a56ecf70689`, `f0099e5602bacd7e5b20be1ea8b8a92de0d6b06a`, `126b2bb91d67aa066e076210144790442fa7b6b1`).
5. The explicit `showAdPrivacyOptionsFormIfAvailable()` **does** call `_refreshConsentState()` after a successfully completed form; do not mischaracterize every Settings privacy path as stale. Separately, `main.dart`'s inspected resume handler (lines 159–164) only syncs locale/activity, not UMP; this is a lifecycle observation, **not** a claim that Google requires an update on every foreground resume.

**Production decision consequence:** source proves an app-local/SDK synchronization gap, **not** that a live user's consent actually changed, that a noneligible request was sent, or that a policy breach occurred. It is unsafe to count `_canRequestAds == true` as proof of SDK eligibility after another consent-info refresh. Preserve D2 `PRESSURE HOLD`; do not increase ad inventory or requests. This is distinct from the already-known iOS stored-denial auto-form skip and absent banner paid/impression instrumentation.

**Product-owned acceptance:** (a) use a single authoritative SDK request-admission check at each request boundary, after required consent update/form completion; (b) define lifecycle-safe refresh/retry behavior and avoid duplicate ad requests; (c) after privacy-option changes, re-evaluate eligibility and visible ad lifecycle; (d) run test-ad-only Android/iOS cases for initial allow, SDK status change after Settings requirement refresh, denial, expiry, form return, and widget remount, logging both SDK and app admission states, request count and surface. A controlled Dart/widget/mock UMP test must precede device acceptance; no Dart/device/runtime execution occurred here. Operator account message targeting and serving remain separately UNKNOWN.

**Authoritative guidance rechecked 2026-10-24:** https://developers.google.com/admob/flutter/privacy — update consent information each app launch, rely on SDK `canRequestAds()` rather than app-owned cached consent strings, and prevent duplicate requests when checking eligibility at multiple points. The guidance does not by itself establish the conditional SDK status transition in this app.
