# 036 — MintTap 1.0.28 → 1.0.29 transfer audit

Date: 2026-09-16
Status: POST-FREEZE LIVE-READINESS / VERSION-TRANSFER AUDIT

## Purpose

Research 035 established public App Store evidence for MintTap marketing version 1.0.28 while the deepest code audit had been performed on repository branch 1.0.29. This audit asks a narrow question:

**Which 1.0.29 marketing-measurement conclusions can be transferred to the publicly observed 1.0.28 cohort without inventing equivalence?**

It compares repository refs directly and preserves the remaining distinction between a version-labeled repository branch and the actual Store binary.

## Evidence scope

Repository: `yhappcom/yieldmax_tracker`

Base ref: `1.0.28`
- base commit: `7b7342fcaa942672aa7ddf2cbd1d8d33a4d6cb8f`
- commit message: `chore: prepare 1.0.28 store release`

Head ref: `1.0.29`
- head previously audited: `736bbc99a41c14130d82aeaa17ac81f0fc835a65`
- compare state: 1.0.29 is four commits ahead of 1.0.28 and zero commits behind.

Public App Store marketing version observed in multiple current storefronts: 1.0.28.

Important limitation: matching the public marketing version to a repository branch name does not cryptographically prove that the public binary was built from this exact commit. Exact build identity remains unresolved until first-party release/build evidence ties them together.

## 1. Changed-file boundary between 1.0.28 and 1.0.29

The GitHub compare shows changes in a limited set including:

- release/update documentation;
- backend `functions` files;
- iOS project metadata;
- `lib/auth/user_activity_service.dart` (added);
- `lib/auth/user_profile_repository.dart`;
- `lib/main.dart`;
- `lib/screens/post_auth_gate.dart`;
- `lib/screens/stock_detail_screen.dart`;
- `pubspec.yaml` version metadata;
- user-activity tests.

Critically, the compare does **not** list the files used in research 034 to establish the activation boundary and Home ad-slot lifecycle:

- `lib/screens/edit_transaction_screen.dart`
- `lib/edit_transaction/edit_transaction_service.dart`
- `lib/edit_transaction/edit_transaction_repository.dart`
- `lib/home/home_summary_service.dart`
- `lib/screens/home_screen.dart`
- `lib/widgets/home_inline_ad_slot.dart`
- `lib/widgets/home_inline_ad_slot_mobile.dart`

This is direct repository evidence that those paths did not change between the two refs.

## 2. Home screen is byte-identical between refs

`lib/screens/home_screen.dart` has the same blob SHA on both refs:

`c8ae8bfc710f227921057a68f924cafaf53b7a9c`

Therefore the Home-side logic used in 034 — calculated summary staging, `summary.positions.isNotEmpty`, `_homeAdRefreshToken`, `ValueKey('home-inline-$homeAdRefreshToken')`, and the detail-return callback wiring — transfers directly at the repository-code level from 1.0.29 to 1.0.28.

## 3. Home mobile ad slot is byte-identical between refs

`lib/widgets/home_inline_ad_slot_mobile.dart` also has the same blob SHA on both refs:

`383959d4c2e43e89d399dbde93aa4a56ecf70689`

Therefore the following implementation behavior is identical at repository-code level:

`new ad-slot state → ~350 ms delay → consent check → BannerAd construction → BannerAd.load()`

The listener on 1.0.28, like 1.0.29, handles load success/failure but does not contain app-side `onAdImpression` or `onPaidEvent` handlers in this file.

## 4. Analytics and Mobile Ads startup already existed in 1.0.28

The 1.0.28 `lib/main.dart` already:

- imports `firebase_analytics`;
- enables Analytics collection;
- logs custom event `app_start` with platform and debug/release mode;
- initializes Mobile Ads after the first frame on non-web platforms.

Therefore these capabilities were not introduced by 1.0.29.

The 1.0.29 `main.dart` changes belong to the later user-activity work, not to the existence of Analytics or initial Mobile Ads startup.

## 5. Activation-boundary transfer decision

Research 034 defined the semantic candidate:

`first_portfolio_value_ready_v1`

at the first successful normal authenticated Home calculated-state boundary where `summary.positions.isNotEmpty`, rather than at a raw transaction save.

Because the transaction persistence files, Home summary service, and Home screen were not changed between 1.0.28 and 1.0.29, the **code-semantic boundary transfers to repository ref 1.0.28**.

State is now:

- 1.0.29: `CODE-VERIFIED EVENT BOUNDARY / NOT YET INSTRUMENTED`
- repository 1.0.28: `CODE-EQUIVALENT EVENT BOUNDARY / NOT YET INSTRUMENTED`
- publicly served App Store 1.0.28 binary: `VERSION-LABEL ALIGNED / EXACT BUILD IDENTITY NOT VERIFIED`

Do not collapse the last two states. The public binary is highly relevant evidence, but exact build provenance still requires App Store Connect/release evidence.

## 6. Ad-refresh transfer decision

Because both `home_screen.dart` and `home_inline_ad_slot_mobile.dart` are byte-identical, the **Home-side detail-return → fresh request-opportunity mechanism transfers directly to repository 1.0.28**.

This still proves only a request opportunity. It does not prove consent eligibility, fill, impression, paid event, or revenue.

`stock_detail_screen.dart` did change in 1.0.29. Therefore behavior internal to that detail screen must not be blindly transferred. However the Home-side return handler, key rotation and ad-slot recreation mechanism are unchanged. The marketing measurement conclusion should stay scoped to that Home-side mechanism.

## 7. What does NOT transfer to 1.0.28

### `lastActiveAt` / UserActivityService

`lib/auth/user_activity_service.dart` was added after the 1.0.28 base. Therefore the coarse authenticated-return signal described in 033 is a **1.0.29 implementation delta** and must not be assumed to exist in the publicly observed 1.0.28 cohort.

This changes the live-readiness plan: until a Store-served build containing this feature is verified, `lastActiveAt` cannot be used as the current public iOS retention/return guardrail.

### Other 1.0.29 backend/detail changes

Function consolidation, user-profile changes and stock-detail changes are outside the transferred activation/ad-slot equivalence. They remain version-specific unless separately verified.

## 8. Revised live measurement state for public iOS 1.0.28

Supported by version-aligned public evidence + repository comparison:

- App is publicly available: YES.
- Public marketing version 1.0.28: VERIFIED in multiple queried storefronts.
- Analytics initialization and `app_start` in repository 1.0.28: VERIFIED.
- Mobile Ads startup in repository 1.0.28: VERIFIED.
- First-value semantic boundary in repository 1.0.28: VERIFIED BY CODE EQUIVALENCE, but event not instrumented.
- Home detail-return fresh ad-request mechanism in repository 1.0.28: VERIFIED BY IDENTICAL BLOBS.
- App-side banner impression/paid callback in inspected Home slot: NOT IMPLEMENTED.
- Automatic Firebase `ad_impression` from AdMob linkage: UNKNOWN until console/runtime evidence.
- `lastActiveAt` in public 1.0.28: DO NOT ASSUME; repository comparison indicates it was added in 1.0.29.
- Exact App Store build ↔ Git commit identity: UNKNOWN.

## 9. Reusable version-transfer rule

When a live Store version differs from the latest audited repository ref:

1. compare exact refs;
2. identify files that implement the claimed mechanism;
3. prefer identical blob SHA or an explicit no-change diff over semantic guesswork;
4. transfer only the mechanism supported by unchanged paths;
5. keep later features version-specific;
6. separately verify Store binary/build provenance before labeling live behavior fully production-verified.

A shared marketing version label is evidence, but not a substitute for build provenance.

## Next gate

1. Obtain first-party Store build/release evidence if accessible to tie public 1.0.28 to an exact build/commit.
2. Verify AdMob↔Firebase/Analytics linkage and inspect actual automatic `ad_impression` events for the live iOS app.
3. Do not use `lastActiveAt` as a live 1.0.28 guardrail.
4. If/when 1.0.29+ is publicly served, re-open deployment identity and then add the authenticated-return signal to live baselines.
5. Instrument `first_portfolio_value_ready_v1` only in a future aligned served build; do not infer historical activation from `app_start` or transaction writes.