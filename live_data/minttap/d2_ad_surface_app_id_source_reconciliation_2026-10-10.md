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
