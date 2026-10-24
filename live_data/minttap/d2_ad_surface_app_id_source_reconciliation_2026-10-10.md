# MintTap D2 — release-source ad-surface and App ID reconciliation (2026-10-10)

## Decision delta
MintTap release ref `yhappcom/yieldmax_tracker@1.0.29` contains **six identified banner placements**: Home has its own `homeInlineBannerUnitId`; five fixed-bottom placements (Stock Detail, Yearly ROC, Distribution by Period, Dividend Calendar, Transaction History) all resolve through `FixedBottomBannerAdSlotImpl` to `stockDetailBannerUnitId`. Therefore AdMob ad-unit totals alone cannot attribute the latter five surfaces. This is a release-source attribution limitation, **not** measured request, impression, click, invalid-traffic or revenue impact.

## Release-source evidence
| Surface | Source at tag `1.0.29` | Source-observed placement |
| --- | --- | --- |
| Home | `lib/screens/home_screen.dart` (lines 189–193, 1291–1294); `lib/widgets/home_inline_ad_slot_mobile.dart` (line 80) | Inline unit; `ValueKey('home-inline-$homeAdRefreshToken')` changes after return from detail (except Browse Mode). |
| Stock Detail | `lib/screens/stock_detail_screen.dart` (lines 359–364) | Fixed-bottom slot; tab-dependent `ValueKey`; absent in Browse Mode. |
| Yearly ROC | `lib/screens/yearly_roc_screen.dart` (lines 143–145) | Fixed-bottom slot; absent in Browse Mode. |
| Distribution by Period | `lib/screens/distribution_by_period_screen.dart` (lines 139–143) | Fixed-bottom slot. |
| Dividend Calendar | `lib/screens/dividend_calendar_screen.dart` (lines 269–273) | Fixed-bottom slot; absent in Browse Mode. |
| Transaction History | `lib/screens/transaction_history_screen.dart` (lines 324–329) | Fixed-bottom slot. |

`lib/widgets/fixed_bottom_banner_ad_slot_mobile.dart` (lines 24, 33–49, 54–96, 98–132) schedules a 350 ms delayed attempt once per widget instance, gates on consent eligibility, hardcodes `stockDetailBannerUnitId`, and registers load/failure callbacks but not `onAdImpression` or `onPaidEvent`. `debugLabel` is accepted by the widget but not used to attribute events. A new keyed widget may cause a new request; frequency, actual lifecycle, refresh settings, paid events and revenue remain unmeasured. The Home inline widget also uses a 350 ms per-instance load schedule and a separate unit. Production unit IDs are platform-specific in `lib/ads/admob_config.dart`.

## Runbook-to-release App ID mismatch
`docs/admob_privacy_messaging_runbook.md` line 18 calls `~2703135286` the current AdMob App ID. The released `android/app/src/main/AndroidManifest.xml` line 12 declares `~7955461965`; `ios/Runner/Info.plist` line 78 declares `~6927079037`. These three suffixes are distinct. This proves a **documentation-to-release mismatch**, not that the AdMob account is misconfigured, that messages are unpublished, or that consent/serving failed. Reconcile the actual Android and iOS AdMob app entries and Privacy & messaging app targets separately before relying on the runbook.

## Current authoritative platform boundary (checked 2026-10-10)
- Google AdMob Flutter banner guide: https://developers.google.com/admob/flutter/banner — `BannerAdListener.onAdImpression` exists; test with test ads; automatic refresh is configured separately in AdMob and occurs when visible. A widget replacement request is not equivalent to console refresh.
- Google AdMob Privacy & messaging app selection: https://support.google.com/admob/answer/10115633 — eligible app list derives from AdMob Apps; actual message targeting is account-side and cannot be inferred from a repository App ID.

## Decision ledger
- **VERIFIED, release source:** six placement inventory; five fixed-bottom surfaces share one ad-unit getter; Home uses a distinct getter; tab/return lifecycle keys; local widget callbacks do not provide per-surface impression/paid-event attribution; runbook App ID differs from both released platform IDs.
- **UNKNOWN, production/account:** active platform App IDs and message targeting; UMP consent outcomes; request/load/impression/paid-event chain by surface; response/source/adapter/latency; ILAR precision; floor/mediation/refresh; policy/Confirmed Click/serving history; invalid traffic; estimated-to-finalized revenue; retained-user value and protected-task completion.
- **HOLD:** ad-pressure expansion, new inventory and revenue optimization claims until operator-side evidence and test-ad-only lifecycle/geometry checks exist.
- **NEXT:** (1) verify both released platform App IDs against AdMob Apps and published messages; (2) test Home detail-return and Stock Detail tab switching with test ads and consent/failure cases; (3) instrument or retrieve sanitized per-surface request→load→impression→paid-event and source/error/latency evidence; (4) reconcile actual account refresh/floor/mediation and finalized revenue before optimization.

## Cross-domain boundary
Product repository owns implementation; Marketing Manager owns decision and evidence ledger; AdMob account operator owns live readiness/message/monetization verification. No product repository modification, general research artifact or inference of policy violation was made.

## 2026-10-24 addendum — cross-platform banner inventory, configured ≠ screen-used ≠ served

**SOURCE / release-locked:** `yhappcom/yieldmax_tracker@1.0.29` (commit `736bbc99a41c14130d82aeaa17ac81f0fc835a65`) configures **three distinct native production banner ad-unit getters per platform** in `lib/ads/admob_config.dart` (blob `f1c2daae95d7b88cceeb9b146d6ab81fb8587cf4`): `homeInlineBannerUnitId`, `inlineBannerUnitId`, and `stockDetailBannerUnitId`. All three select Google test units in debug mode. The **six directly identified screen placements** above map to only **two** of those getters: Home uses `homeInlineBannerUnitId`, and five fixed-bottom screens use `stockDetailBannerUnitId`. `AdaptiveInlineBannerSlotImpl` references the **third** `inlineBannerUnitId` (blob `f0099e5602bacd7e5b20be1ea8b8a92de0d6b06a`). Read-only inspection of **all 16 `lib/screens/*.dart` files** at the release ref found no direct `AdaptiveInlineBannerSlot` instantiation. This does **not** prove the third getter is globally unreachable through other widgets, nor that it has zero production requests or revenue. Account unit inventory and actual request sources remain UNKNOWN.

**Web/PWA source gate (separate from native AdMob):** The release's `lib/ads/adsense_config.dart` (blob `fd6cf5fb1d6351e8eaafbfdcb77d6d60ffcaac9f`) defines `adClient = ''`, all three web slot getters as empty strings, and `isSlotConfigured(String _) => false`. The web implementations of Home inline, fixed bottom, and adaptive inline each check this flag and return `SizedBox.shrink()` before constructing `WebAdSenseBanner` (blobs `f69be055657f8e1f3be71d2aa7f122b04e06cc1f`, `3432a3ea6b61e6fd4c04751f9e518474efbad79f`, `e72c8edf46bea69ce8dea18024642e832459454f`). Their conditional-import wrappers use `if (dart.library.html)`. Thus the **inspected release-source web AdSense slots are deliberately disabled**, not additional active monetization inventory. This is **not** a verification of a deployed PWA artifact, browser ad-blocker behavior, or other possible web ad integrations.

**PROJECT DECISION / D2 PRESSURE HOLD unchanged:** Reconcile (a) the two directly screen-used native unit getters, (b) the third configured but screen-use-unverified native getter, and (c) disabled web AdSense placeholders as distinct inventory states. Do not merge app-ads.txt authorization, native AdMob readiness, and website AdSense into one readiness claim. Next operator evidence: sanitized AdMob Apps/ad-units inventory and platform App ID/message targets, per-surface test-ad request→load→impression→paid diagnostics, account serving/policy and finalized earnings; inspect deployed web build only if PWA ads are actually in scope. No product repository edits, runtime tests, ad serving, or overall production-decision closure.

## 2026-10-24 addendum — banner navigation re-request / cooldown boundary (release source + AdMob primary guidance)

**D2 / PRESSURE HOLD — APP-LEVEL NAVIGATION COOLDOWN NOT IMPLEMENTED IN INSPECTED RELEASE PATHS; ACTUAL REQUEST FREQUENCY UNKNOWN.** This is a newly resolved source/authority boundary, not a claim of live excessive requests, invalid traffic, or enforcement.

### Source evidence (read-only release `yhappcom/yieldmax_tracker@1.0.29`)

A targeted 13/13 structural assertion audit across the three native banner implementations and Home/Stock Detail screens verified:

1. `fixed_bottom_banner_ad_slot_mobile.dart` (blob `126b2bb91d67aa066e076210144790442fa7b6b1`), `home_inline_ad_slot_mobile.dart` (blob `383959d4c2e43e89d399dbde93aa4a56ecf70689`), and `adaptive_inline_banner_slot_mobile.dart` (blob `f0099e5602bacd7e5b20be1ea8b8a92de0d6b06a`) each use a **350-ms delay** and `_didScheduleAdLoad` as a **per-widget-instance one-shot**, followed by `BannerAd.load()` when consent and size allow. This is **not a 60-second cross-instance cooldown**. No shared request-timestamp/cooldown gate was found in these inspected five files; this is not a proof of global absence elsewhere or of AdMob account settings.
2. `home_screen.dart` (blob `c8ae8bfc710f227921057a68f924cafaf53b7a9c`) increments `_homeAdRefreshToken` after certain detail returns (Stock Detail position-row and Calendar return), then uses `ValueKey('home-inline-$homeAdRefreshToken')`. A changed key can dispose/recreate the Home ad widget and offer a fresh load after 350 ms. **Not every Home navigation path calls this callback**: e.g., the inspected Transaction History and edit flows do not directly call it.
3. `stock_detail_screen.dart` (blob `b317562fa56caa835ce957dd5dbcc7e58ec77c7b`) changes `_selectedTab` and keys the fixed-bottom banner by `stock-detail-bottom-${_selectedTab.name}`. Each tab transition to a different key can recreate the banner and schedule a fresh eligible load. The same tab does not change the key.
4. These pathways make rapid **new request opportunities** possible without waiting a minute. They do **not** establish a request count, served impressions, clicks, ILAR, account auto-refresh, fill, user-level ad pressure or revenue. SDK/ad network may decline a request, and consent, navigation lifetime, size, loading state and visibility alter outcomes.

### Primary platform boundary (checked 2026-10-24)

- Google AdMob **Implementation guidance**, https://support.google.com/admob/answer/2936217, recommends ads persist **60 seconds or longer** and explicitly says that quick page-to-page navigation should **not cause a new request sooner than the recommended 60 seconds**. This is *recommendation/implementation guidance*, not a demonstrated MintTap policy violation or a universal enforced 60-second rule.
- Google AdMob **Flutter banner guide**, https://developers.google.com/admob/flutter/banner, says **account-configured automatic refresh occurs only when a banner is visible**. It is separate from a newly created `BannerAd.load()` caused by app navigation. The actual Home and fixed-bottom unit refresh settings remain operator-only UNKNOWN.
- Google AdMob **Frequency capping**, https://support.google.com/admob/answer/6244508, specifies account-side app/ad-unit impression caps for **interstitial, rewarded and app-open** formats; it must **not** be assumed to enforce a per-user **banner** navigation cooldown. App-owned request gating is a separate product concern.

### Decision / product acceptance

**NAVIGATION REQUEST-PRESSURE SOURCE SUBGATE: NOT SATISFIED IN INSPECTED RELEASE WIDGETS.** Maintain D2 PRESSURE HOLD and no inventory increase. Product should implement an **SDK-consent-authoritative, lifecycle-safe request admission policy** for eligible banners that measures elapsed time across widget disposal/recreation and screens (consider the platform's 60-second recommendation as a starting acceptance target, not a legal threshold). Avoid retry storms after errors, duplicate loads, and invisible/offscreen requests. Decide explicitly whether an existing eligible loaded ad can persist/reuse across screen changes without violating `AdWidget` ownership; do not assume safe cross-widget reuse.

**Test-ad-only device matrix (Android + iOS):** Home→Stock Detail→Home within <60 s; Stock Detail overview→income→overview within <60 s; same routes after >=60 s; Home Calendar return; denial/expiry/consent restoration; load failure; app background/screen off; Browse Mode. Log monotonic request attempt/actual `load()` timestamps, app/surface/ad-unit, widget instance/key, SDK eligibility, load/error, impression, paid-event precision/source (if available), viewability/geometry and task completion. Evaluate user-level request interval distribution and protected-task completion **before** any monetization experiment. A cap on app-side *requests* is not equivalent to AdMob impression caps; a denied request is not a paid impression.

**Cross-domain:** Marketing owns request-pressure/retained-specialist-value acceptance; product owns lifecycle/SDK instrumentation and cooldown design; Design Studio owns visual stability; AdMob operator owns account refresh, mediation, Policy Center, Confirmed Click, serving limits and finalized revenue. No Flutter tests, device/SDK calls, console access, product repository writes or live revenue verification occurred.


## 2026-10-24 integrated release-source event-chain observability verdict (three banner implementations)

**PROJECT DECISION — D2 SOURCE INSTRUMENTATION GATE NOT SATISFIED / PRESSURE HOLD.** This consolidates, rather than extends, the earlier ad-unit, consent, navigation and layout subgates. Do not conduct another adjacent banner-source micro-audit unless the product implementation or operator evidence changes. The missing production decision is whether safe, consent-eligible impressions produce *reconciled* revenue without reducing repeated specialist value.

### Reproducible read-only inspection

Authority: `yhappcom/yieldmax_tracker@1.0.29` = `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, using the three original widget blobs:

| Widget / blob | Directly mapped placement | `BannerAdListener` in released source | Not registered in that listener |
| --- | --- | --- | --- |
| `lib/widgets/home_inline_ad_slot_mobile.dart` / `383959d4` | Home inline, dedicated unit | `onAdLoaded`, `onAdFailedToLoad` | `onAdImpression`, `onPaidEvent`, `onAdClicked` |
| `lib/widgets/fixed_bottom_banner_ad_slot_mobile.dart` / `126b2bb9` | Five named bottom surfaces, shared unit | `onAdLoaded`, `onAdFailedToLoad` | `onAdImpression`, `onPaidEvent`, `onAdClicked` |
| `lib/widgets/adaptive_inline_banner_slot_mobile.dart` / `f0099e56` | Configured third unit, direct screen use unverified | `onAdLoaded`, `onAdFailedToLoad` | `onAdImpression`, `onPaidEvent`, `onAdClicked` |

Three of three inspected listeners omit local impression, paid and click callbacks. The fixed-bottom and adaptive-inline widgets accept `debugLabel` but do not transmit it in their callbacks. Fixed-bottom failure shows only a localized error-code string; Home/adaptive failure does not persist adapter/source/latency or a surface-specific diagnostic record in the inspected code. No widget-local `ResponseInfo` / loaded-ad-source / precision/currency/microvalue extraction or correlation ID is present in these three files. **Scope limit:** this is a source-structure result for these widgets, not a whole-repository search, a test run, or proof that automatic Firebase/AdMob `ad_impression`, SDK reporting, or account earnings are absent. Automatic `ad_impression` collection depends on actual AdMob–Firebase linkage; the 2026-09-16 measurement snapshot explicitly had no verified GA4 property or ad events. Five surfaces sharing an ad unit also prevents attributing AdMob account aggregates to an individual screen without separate identity evidence.

### Primary-source reconciliation (checked 2026-10-24)

- Flutter banner lifecycle explicitly offers `onAdImpression`, `onAdClicked`, load/failure callbacks: https://developers.google.com/admob/flutter/banner .
- Google's Flutter plugin `BannerAdListener` API exposes `onPaidEvent`; API documentation consulted is **latest**, not pinned 6.0.0, so pinned-version compatibility remains a product-side compile/test acceptance rather than an assumed fact: https://pub.dev/documentation/google_mobile_ads/latest/google_mobile_ads/BannerAdListener-class.html .
- Google's impression-level revenue guide distinguishes microvalue, currency, precision (`UNKNOWN`/`ESTIMATED`/`PUBLISHER_PROVIDED`/`PRECISE`), source/adapter identity and timely listener registration; test bidding impressions can legitimately report `UNKNOWN` and zero, which are **not** evidence of zero production yield: https://developers.google.com/admob/android/impression-level-ad-revenue .
- Existing internal research `research/144_ad_instrumentation_contract_automatic_impression_is_not_placement_evidence.md`, `research/185_impression_level_ad_revenue_measurement_and_reconciliation_integrity.md`, and `research/401_impression_level_ad_revenue_measurement_contract.md` already specify the full framework; no new general theory is needed.

### Product/operator acceptance boundary — one integrated gate, not more theory

1. **Product-owned, test ads only:** for each *actually used* surface, capture privacy eligibility and request-admission reason; stable semantic placement/route/substate; widget instance/remount reason; request timestamp; load/failure and response/adapter/latency; impression; and paid callback with microvalue, currency, precision, and available source/mediation fields. Respect privacy/minimum-cell-size rules and do not log personal financial records or stable personal IDs merely to correlate ads. Confirm whether pinned SDK 6.0.0 exposes the needed callbacks and how to safely register them before ad load.
2. **Account-owned:** capture redacted Android/iOS AdMob app IDs, message targeting, app-ads.txt **verified** status, app readiness, ad-unit/refresh/floor/mediation settings, Policy Center/Confirmed Click/serving history, and a matched-window request→match→impression/estimated earnings report. Browser-visible `app-ads.txt` is not account verification. Reconcile later monthly finalized earnings separately; never impute per-impression finalized cash.
3. **Marketing/Design-owned guardrails:** join eligible ad opportunities to first/repeated portfolio/ROC/transaction value and protected-task completion; measure layout shifts/tap proximity and <60-second navigation request bursts on devices. If semantic placement identity or protected-task evidence is missing, do not optimize by unit-level eCPM, impression count or clicks.

**State:** released widget-local event-chain instrumentation **INSUFFICIENT** for a surface-level revenue decision; **live account and actual SDK delivery UNKNOWN**. D2 **PRESSURE HOLD**, no added ad inventory or product edits. Next evidence target is an integrated Android/iOS test-ad trace plus operator report, **not** another source-only banner subquestion. D1 Play Console Financial features submission remains a higher-priority operator-only unknown. Cross-domain: product owns SDK changes, Design Studio owns geometry/accessibility, Web Manager owns domain publication, Marketing Manager owns value/revenue acceptance, AdMob operator owns serving and payout evidence.
