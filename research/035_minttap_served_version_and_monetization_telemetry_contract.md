# 035 — MintTap Served-Version Identity & Minimal Monetization Telemetry Contract

Date: 2026-09-16
Status: LIVE READINESS / STORE + CODE + AUTHORITATIVE PLATFORM EVIDENCE

## Why this block exists

Research 032–034 recovered MintTap's real versioned implementation, located the first-value boundary, and verified that returning from a detail screen recreates the Home inline-ad widget and creates a fresh banner-request opportunity. Two gaps still blocked a trustworthy acquisition→activation→ad-revenue baseline:

1. the repository release branch was not yet tied to a publicly served Store version;
2. the smallest non-duplicative impression/revenue telemetry contract had not been frozen against current Google/Firebase documentation.

This block resolves the parts that can be resolved from public Store evidence, exact repository evidence, and first-party Google/Firebase documentation. Unavailable console/backend facts remain UNKNOWN.

## 1. Deployment identity: public iOS evidence

Current public App Store storefront evidence checked 2026-09-16 shows MintTap version **1.0.28** available in multiple storefronts (including Canada, Malaysia, and Ecuador). A Korean search snapshot available to the crawler still showed 1.0.27, so storefront/search snapshots can lag and must not be treated as globally synchronized release telemetry.

Retained deployment state:

- **iOS public availability:** VERIFIED for MintTap and VERIFIED that 1.0.28 is publicly served in at least the queried current storefronts.
- **Exact iOS build number:** UNKNOWN from the public App Store page.
- **Repository branch `1.0.29`:** `RELEASE_IMPLEMENTATION_VERIFIED`, declared `1.0.29+29`, but not proven to be the publicly served iOS build.
- **Global/territory-complete rollout of 1.0.28:** not inferred from crawler snapshots.
- **Android Google Play public availability/current served version:** remains UNKNOWN. Search failure is not evidence of absence.

Operational rule: marketing analysis must join live Store/product data to the actually served version when possible. A newer repository branch is evidence about implementation, not automatically evidence about the current production cohort.

Public Store evidence:

- https://apps.apple.com/ca/app/minttap/id6766008739
- https://apps.apple.com/my/app/minttap/id6766008739
- https://apps.apple.com/ec/app/minttap/id6766008739

## 2. Exact MintTap ad SDK state on ref `1.0.29`

`pubspec.lock` pins:

- `google_mobile_ads` **6.0.0**

Current Home inline-ad code constructs `BannerAd` with a `BannerAdListener`, but the inspected listener only handles:

- `onAdLoaded`
- `onAdFailedToLoad`

No app-side `onAdImpression` or `onPaidEvent` handler is present in the inspected `home_inline_ad_slot_mobile.dart`.

This does **not** prove that no impression/revenue data exists in Firebase or AdMob. AdMob/Firebase linkage is console-side configuration and is not established by this repository file.

## 3. Current official Google/Firebase capabilities

### 3.1 SDK-confirmed impression callback

The current Google Mobile Ads Flutter banner guide documents `BannerAdListener.onAdImpression`, called when an impression occurs. Therefore the app can observe an SDK-confirmed banner-impression lifecycle event rather than approximating an impression from widget creation or `onAdLoaded`.

Source:
- https://developers.google.com/admob/flutter/banner

### 3.2 Paid-event support exists in MintTap's locked plugin lineage

The official `google_mobile_ads` package changelog states that paid-event callback support was added in version 0.13.1. MintTap is pinned to 6.0.0, well after that addition. Current API documentation exposes `onPaidEvent` on the banner listener family.

Sources:
- https://pub.dev/packages/google_mobile_ads/versions/6.0.0/changelog
- https://pub.dev/documentation/google_mobile_ads/latest/google_mobile_ads/BannerAdListener-class.html

Revenue callbacks must not be interpreted as perfectly precise cash receipts. Google impression-level ad-revenue documentation defines ad value using:

- value in micro units;
- ISO currency code;
- precision type (`UNKNOWN`, `ESTIMATED`, `PUBLISHER_PROVIDED`, or `PRECISE`).

The precision field must be retained if impression-level revenue is ingested.

Source:
- https://developers.google.com/admob/android/impression-level-ad-revenue

### 3.3 Preferred minimum path when AdMob is linked to Firebase/Analytics

Firebase's current first-party guidance states that when the AdMob app is linked to Firebase and Analytics, Firebase automatically logs `ad_impression` whenever a user sees an AdMob impression and includes ad-revenue information. It recommends validating with DebugView, Realtime, and BigQuery.

Source:
- https://firebase.google.com/docs/analytics/measure-ad-revenue

Therefore a custom `ad_impression` event must **not** be added blindly. Doing so could create duplicate impression/revenue accounting.

## 4. Minimum telemetry contract for MintTap

The goal is not maximal event collection. It is the smallest privacy-reviewed contract that can answer the current business questions.

### A. Deployment identity

Required evidence fields in the Live Evidence Registry, not necessarily custom Analytics parameters:

- platform;
- Store-served marketing version where observable;
- build number when available from release/analytics tooling;
- repository ref/commit used for implementation interpretation;
- observation window.

Do not join 1.0.28 live behavior to 1.0.29 code semantics unless the relevant code path is independently verified equivalent.

### B. Product first value

Candidate event remains:

`first_portfolio_value_ready_v1`

Emit once per account/event-definition only after all of the following are true:

- authenticated normal user;
- not browse/demo mode;
- Home calculation completed successfully;
- `summary.positions.isNotEmpty`;
- the calculated Home state is the user-visible normal path;
- v1 activation has not already been recorded.

Do not include ticker, quantity, invested amount, portfolio name/ID, P&L, dividend, ROC, tax, memo, or transaction content in event parameters.

### C. Impression/revenue: canonical-first, no duplicate path

Before engineering any custom revenue event, verify whether the MintTap AdMob apps are linked to Firebase/Analytics and whether automatic `ad_impression` events contain usable `value`, `currency`, `ad_source`, `ad_format`, and `ad_unit_name` data.

**Preferred minimum mode:**

1. link/verify AdMob↔Firebase/Analytics configuration;
2. use automatically collected Firebase `ad_impression` as the canonical user/cohort-level impression/revenue event;
3. map the AdMob ad-unit name/ID to the logical product placement (`home_inline`) in a maintained registry;
4. use `BannerAdListener.onAdImpression` for implementation validation/QA where useful, but do not create a second revenue-bearing `ad_impression` event;
5. validate in DebugView/Realtime, then compare aggregate behavior with AdMob reporting and inspect BigQuery samples if enabled.

**Fallback/advanced mode:** if automatic AdMob→Firebase revenue measurement is unavailable or insufficient for a documented decision, use `onPaidEvent` to forward impression-level revenue through a privacy-reviewed ingestion path. Preserve value micros, currency code, precision, logical placement, app version/build, and non-sensitive ad-source metadata. Do not double-log the same paid impression into the canonical revenue metric.

### D. Load/request diagnostics

Do not add high-volume custom request events merely because they are technically available.

Current minimum:

- use AdMob aggregate requests/matched requests/impressions for network-level diagnostics;
- optionally instrument structured load failure only when it will drive an operational decision;
- if load failure is instrumented, keep only bounded fields such as logical placement, error domain/code, app version/build, and platform; avoid arbitrary free-text/error payloads;
- add a custom `ad_request` event only if a specific cohort-level request→impression question cannot be answered from AdMob/Firebase evidence and its VOI exceeds collection/analysis cost.

### E. Clicks are a guardrail, not an optimization target

Do not optimize MintTap ad placement for CTR. A CTR increase near financial controls can indicate accidental-click risk. Click evidence is useful for policy/UX review, not as the primary monetization objective.

## 5. Required validation before changing Home ad frequency

Do not change the detail-return recreation policy yet. First establish:

1. currently served app version/build for the measured cohort;
2. `first_portfolio_value_ready_v1` in an aligned served build;
3. verified AdMob↔Firebase linking state;
4. automatic `ad_impression` visibility and revenue parameters, or an approved paid-event alternative;
5. logical mapping of the Home inline ad unit to `home_inline`;
6. baseline impressions per active/returning user and per relevant workflow window;
7. coarse retention/core-value-return guardrails;
8. load-failure/latency/policy signals where needed.

Only after these exist should a Decision Record evaluate whether detail-return ad recreation creates incremental durable value or excessive exposure pressure.

## 6. What remains UNKNOWN

- exact iOS build number publicly serving version 1.0.28;
- whether 1.0.29 has entered submission/review/rollout after the repository evidence date;
- current Google Play served version/availability;
- whether AdMob is linked to Firebase/Analytics for each MintTap platform app;
- whether current production cohorts already emit automatic Firebase `ad_impression` revenue events;
- exact logical/name mapping of current AdMob ad units in console;
- live impression frequency, paid value, retention effect, and workflow harm under the detail-return recreation behavior.

Unknown remains unknown; it is not zero.

## 7. Reusable company rule

For ad-supported specialist apps, freeze measurement in this order:

`served deployment identity → semantic product value → SDK/network-confirmed impression → canonical revenue event → retention/harm guardrails → frequency decision`

Do not create a custom event if a first-party platform event already answers the question reliably. Preserve one canonical metric path per business question to avoid double counting.

## Next gate

1. Verify MintTap AdMob↔Firebase/Analytics linkage and inspect actual automatic `ad_impression` parameters in DebugView/Realtime or exported evidence when accessible.
2. Verify whether 1.0.28 contains the same first-value and detail-return ad code paths before applying 1.0.29 implementation conclusions to the live iOS cohort.
3. If product repository history permits, diff 1.0.28 vs 1.0.29 specifically for Home, transaction persistence, Analytics, and ad widgets.
4. Keep Android Store availability/version UNKNOWN until first-party/public exact-package evidence resolves it.
5. Only then open a live monetization/activation Decision Record.