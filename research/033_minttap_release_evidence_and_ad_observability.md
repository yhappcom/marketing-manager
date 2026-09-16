# 033 — MintTap release evidence and ad observability audit

Date: 2026-09-16
Status: POST-FREEZE LIVE-READINESS DELTA

## Purpose

Continue research 032 without adding general marketing theory. Resolve two live-readiness questions using the exact MintTap `1.0.29` ref: (1) whether the ref can be treated as verified production, and (2) whether the current Home ad implementation exposes enough telemetry to connect monetization to durable user value.

## Evidence scope

Repository: `yhappcom/yieldmax_tracker`
Ref: branch `1.0.29`
Head commit observed: `736bbc99a41c14130d82aeaa17ac81f0fc835a65`
Head commit date: 2026-09-08
Head message: `Add user activity tracking`
Declared app version from prior 032 audit: `1.0.29+29`
Evidence date: 2026-09-16

This audit does not equate branch name, pubspec version, or release-note text with App Store / Google Play production state.

## Finding 1 — `1.0.29` remains a release implementation, not a verified production deployment

The GitHub repository currently exposes no GitHub Releases for this project. More importantly, the `1.0.29` branch head commit contains a release-note section explicitly describing `1.0.29` as the next release candidate and stating that app-version change/build creation/Store deployment had not yet been performed at the time that note was written.

The same branch now declares/contains the `1.0.29` implementation, so the code clearly advanced beyond an earlier candidate state. However, repository evidence inspected here does not establish that Apple or Google actually approved or currently serves build 29.

### Operating rule

Use three distinct states:

- `RELEASE_IMPLEMENTATION_VERIFIED`: code/ref and declared version verified.
- `STORE_SUBMISSION_VERIFIED`: submission/build evidence verified from Store-side source.
- `PRODUCTION_AVAILABILITY_VERIFIED`: currently served Store version/build verified from Store-side source.

MintTap `1.0.29` is currently **RELEASE_IMPLEMENTATION_VERIFIED / PRODUCTION_AVAILABILITY UNKNOWN**.

Marketing baselines must be joined to the Store version/build actually serving users, not merely the newest repository branch.

## Finding 2 — existing `lastActiveAt` is useful retention evidence, but not activation telemetry

The branch-head change adds `UserActivityService` behavior that attempts to update `users/{uid}.lastActiveAt` with a Firestore server timestamp when an authenticated user starts/resumes the app or reaches Home after auth/onboarding. A local per-UID marker limits the write to once per local calendar day per device; failures are non-blocking and retryable.

This is materially useful because MintTap now has a privacy-light, server-timestamped signal for actual authenticated app activity without collecting holdings, transaction amounts, tickers, or other investment content.

It must not be interpreted as:

- a first-value event;
- proof that a portfolio was calculated;
- a session counter;
- exact cross-device daily frequency;
- evidence that a user saw an ad.

Its strongest current role is a coarse authenticated-return / recency signal. Retention definitions must document the once-per-local-day-per-device write semantics and missing-write conditions.

## Finding 3 — verified Firebase Analytics coverage is still too shallow for the growth chain

`lib/main.dart` explicitly enables Firebase Analytics and logs `app_start` with platform and debug/release mode. No semantic activation event was verified in this audit.

Therefore the current evidence chain is asymmetric:

`app launch` → verified Analytics event

`authenticated daily activity` → verified Firestore `lastActiveAt` signal

`first durable transaction + calculated non-empty Home state` → semantic candidate exists, telemetry not yet verified

`ad impression / paid value` → telemetry not verified in current Home slot

Do not substitute `app_start` or `lastActiveAt` for `first_portfolio_value_ready_v1`.

## Finding 4 — Home ad implementation requests/loads ads but does not expose monetization-quality telemetry

`lib/widgets/home_inline_ad_slot_mobile.dart` uses Google Mobile Ads and:

- waits 350 ms after first frame before attempting load;
- runs privacy/consent preparation before requesting an ad;
- uses inline adaptive size with anchored adaptive fallback;
- handles `onAdLoaded`;
- handles `onAdFailedToLoad` by disposing and clearing state;
- disposes replaced/pending ads safely.

However, the inspected `BannerAdListener` does not define callbacks for:

- `onAdImpression`;
- `onPaidEvent` / impression-level revenue;
- click/open/close observability;
- a semantic analytics event for load success/failure.

The failure callback also does not persist/log a structured failure metric; the exception path only prints a stack trace.

### Consequence

The app can display an ad, but the current verified code cannot support the company-level monetization equation:

`retained useful use → eligible ad opportunity → actual impression → paid value → downstream retention/harm`

A higher AdMob dashboard revenue number could be observed externally, but without an internal joinable event contract it is difficult to diagnose whether revenue changed because of active users, eligible opportunities, fill, impression rate, price, or placement behavior.

## Finding 5 — Home refresh behavior can recreate the ad slot after returning from detail

`HomeScreen` maintains `_homeAdRefreshToken`; `_handleReturnFromDetail()` increments it after returning from a detail view. This is evidence that ad lifecycle/refresh is tied to navigation state somewhere in Home rendering. It is not enough by itself to claim an impression frequency or refresh policy; the exact widget-key/render boundary must be verified before any frequency conclusion.

This matters because a specialist portfolio app may generate many detail-return cycles in one useful session. Monetization analysis must distinguish a genuine new eligible opportunity from an implementation-driven widget recreation.

## Minimal measurement contract — candidate, not implementation order

Do not add broad clickstream tracking. The smallest useful contract is:

1. `first_portfolio_value_ready_v1`
   - fire once when a valid user transaction has durably persisted and a subsequent normal authenticated Home load exposes a non-empty calculated portfolio state;
   - no ticker, quantity, amount, portfolio name, tax data, or investment content in parameters.

2. `home_ad_impression_v1`
   - only when the ad SDK confirms an impression;
   - parameters limited to placement/version/platform and other privacy-reviewed non-content metadata.

3. impression-level paid value
   - use the Mobile Ads SDK paid-event mechanism where policy/privacy implementation permits;
   - keep currency/value semantics explicit and avoid joining to investment-content fields.

4. `home_ad_load_failure_v1` only if operational diagnosis requires it
   - error taxonomy should be bounded and policy-safe; do not collect arbitrary error strings as user data.

The purpose is not analytics volume. It is to make the growth chain falsifiable with the fewest semantic transitions.

## Decision implications

- Do not run acquisition experiments whose success criterion requires product activation until the Store-served version and activation telemetry are aligned.
- `lastActiveAt` can support an initial return/recency baseline sooner than full Analytics instrumentation, but its semantics must remain separate from Firebase Analytics sessions and Store retention metrics.
- Do not optimize Home ad frequency from raw AdMob revenue alone. First establish confirmed impression and paid-value observability and then inspect activation/return harm.
- Before changing ad refresh behavior, verify the exact `_homeAdRefreshToken` → widget recreation path and measure current exposure.

## Next evidence targets

1. Verify Store-side current MintTap version/build using authoritative App Store Connect / Google Play Console evidence when accessible.
2. Complete ref-specific analytics inventory beyond `main.dart`; do not assume `app_start` is the only event until all relevant files are inspected.
3. Verify transaction persistence success boundary in `edit_transaction_screen.dart` and repository/service code.
4. Verify the exact Home calculated-state predicate that can safely trigger `first_portfolio_value_ready_v1` once.
5. Trace `_homeAdRefreshToken` to the rendered `HomeInlineAdSlot` key and determine whether detail-return causes a fresh ad request.
6. Only then create a baseline joining activation cohort, authenticated return, confirmed ad impressions, paid value, and harm/retention measures.

## Reusable lesson

For future niche apps, instrumentation readiness has four separate layers:

`deployment identity → semantic product event → monetization event → joinable cohort evidence`

Having an analytics SDK or ad SDK satisfies none of the later layers by itself.