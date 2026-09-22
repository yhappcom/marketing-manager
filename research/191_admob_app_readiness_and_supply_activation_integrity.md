# Research 191 — AdMob App Readiness & Supply-Activation Integrity

Date: 2026-09-22
Status: Canonical
Gate: DC0–DC5

## Finding
Research 190 established Store-domain/app-ads.txt seller authorization. This is not the same as AdMob approving an app to fully serve ads. AdMob documents a distinct app-readiness lifecycle: an unreviewed app must be linked to a supported store and reviewed; apps can remain `Getting ready` while review or new-account verification is incomplete. App-ads.txt verification, account verification, app readiness and actual serving must therefore be separate evidence.

Preserve the chain:
`published app → supported-store linkage → app identity verification → app-ads.txt seller authorization → account verification → app readiness review → Ready/serving state → valid demand/fill → impression revenue → finalized earnings`

Preserve these distinctions: `Store live ≠ AdMob Ready`; `Store linked ≠ app verified`; `app-ads.txt verified ≠ app approved`; `account verified ≠ app Ready`; `Ready ≠ every request filled`; `SDK integrated ≠ monetization activated`; `limited serving ≠ normal baseline`; `Ready ≠ policy immunity`; `Ready ≠ sustainable revenue`.

## DC0–DC5
- **DC0 Release identity:** platform, package/bundle ID, production Store URL, version, territory and timestamp.
- **DC1 Store-link identity:** exact supported Store object linked in AdMob and link/change timestamps.
- **DC2 Verification prerequisites:** app verification, DB app-ads.txt state, account/payment verification and any explicit remaining prerequisite. Never infer one from another.
- **DC3 Readiness-review state:** capture actual status such as `Requires review`, `Getting ready`, `Ready`, or disapproved/other; submission time and diagnostics. Pending is not failure by itself.
- **DC4 Serving-state integrity:** record normal/limited/blocked/unknown serving separately from SDK requests, mediation demand and seller authorization. Review-period constraints contaminate monetization experiments.
- **DC5 Monetization decision:** compare yield only across sufficiently stable readiness/serving periods and join with CW revenue reconciliation, DA traffic quality and CX–CZ UX gates.

## Measurement consequence
A niche app can falsely blame format, placement, geography or cohort for weak revenue when the constraint is upstream supply activation. Every monetization experiment therefore needs: `app/release + time + readiness + serving state + account verification + app-ads.txt state + requests + match/fill evidence + impressions + paid-event evidence + policy/serving incidents`. Split analysis at readiness/serving transitions instead of averaging across them.

## MintTap
Reconstruct production Store linkage, app verification, DB state, account prerequisites, readiness/review timestamps, serving-limit/policy history, then the request→match/fill→impression→ILRD→estimated→finalized chain. Do not increase ad density to compensate for weak revenue until upstream activation constraints are ruled out.

## LogMate
If a release is ad-free, DC is `not applicable`. Do not create speculative ad units or seller records. When monetization is activated, Store linkage, DB authorization and DC readiness become release gates before revenue experiments. Existing protected workflows remain protected.

## Reusable rule
Product release readiness and ad-supply activation readiness are separate tracks. A useful product can launch before advertising is ready; unresolved ad supply is not product-market evidence.

## Registry additions
`store_platform`, `store_app_url`, `package_or_bundle_id`, `production_version`, `admob_store_link_state`, `admob_app_verification_state`, `app_ads_txt_state`, `account_verification_state`, `readiness_state`, `readiness_observed_at`, `review_submitted_at`, `serving_state`, `serving_limit_reason_if_known`, `policy_state`, `evidence_source`, `unknown_reason`.

Unknown remains unknown; do not backfill guessed historical states.

## Decision chain
`eligible specialist state → privacy eligibility → acceptable placement → authorized seller path → approved/active app supply → valid request/match/impression → quality traffic → precision-preserved revenue → finalized reconciliation → repeated specialist value`

## Sources
Google AdMob Help: About app readiness; Set up/verify app-ads.txt; Apps/App readiness documentation index. Validated 2026-09-22.

## Next target
Apply DB + DC to MintTap production evidence. If production evidence is unavailable, retain states as unknown rather than assuming compliance from documentation.
