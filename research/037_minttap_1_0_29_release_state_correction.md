# 037 — MintTap 1.0.29 release-state correction

Date: 2026-09-16
Status: FIRST-PARTY OPERATIONAL CORRECTION / SUPERSEDING RELEASE STATE

## Purpose

Research 035–036 used public Store snapshots and therefore retained MintTap 1.0.29 production availability as unresolved. The product owner has now supplied current first-party operational information that **MintTap 1.0.29 is released**.

This record supersedes the older production-availability uncertainty for 1.0.29. The older research remains useful as an evidence-history record showing what could and could not be established from public Store snapshots at the time.

## Canonical release state

Effective from this correction:

- MintTap **1.0.29: RELEASED**.
- Repository branch `1.0.29`, previously audited at head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, is the current release-version implementation reference for marketing/measurement analysis unless newer first-party release information supersedes it.
- Prior statements such as `1.0.29 production availability UNKNOWN`, `whether/when 1.0.29 enters rollout UNKNOWN`, and instructions to treat 1.0.28 as the current live iOS cohort are superseded.

## Scope precision

The owner-provided information establishes the release state of version 1.0.29. It does not by itself establish every platform/storefront/build-distribution detail. Therefore platform-specific build numbers, phased rollout percentages, territory-level availability, or exact binary-to-commit provenance remain separate facts unless independently established.

Do not downgrade the release state back to UNKNOWN merely because a public crawler or storefront snapshot lags behind first-party release information.

## Measurement consequences

The version-transfer exercise in research 036 becomes historical/compatibility evidence rather than the primary live-measurement bridge.

For current MintTap marketing analysis, use 1.0.29 implementation findings directly at the release-version level:

- `first_portfolio_value_ready_v1` remains a **CODE-VERIFIED EVENT BOUNDARY / NOT YET INSTRUMENTED** unless implementation changes after the audited ref;
- Home detail-return → ad-slot recreation → fresh consent-gated `BannerAd.load()` remains the current verified release-version mechanism;
- `UserActivityService` / `lastActiveAt`, introduced in 1.0.29, may now be treated as part of the released-version implementation, while preserving its limited semantics as a coarse authenticated-return/recency signal rather than Analytics session or retention truth;
- app-side Home banner `onAdImpression` / `onPaidEvent` handlers were not observed in the audited release implementation, so actual impression/revenue observability still depends on verified AdMob/Firebase linkage or future explicit instrumentation.

## Revised deployment/readiness chain

The gating sequence is now:

`released 1.0.29 identity → verify live analytics/ad telemetry → instrument semantic first value → establish activation/return/ad-revenue baselines → evaluate frequency/channel decisions`

The release-identity question is no longer the primary blocker.

## What remains unresolved

- platform-specific exact build numbers and exact binary ↔ Git commit provenance where needed;
- exact Google Play/App Store territory rollout state if a platform-specific marketing decision depends on it;
- AdMob↔Firebase/Analytics linkage state;
- live automatic `ad_impression` parameter and revenue coverage;
- whether `first_portfolio_value_ready_v1` has been implemented after the audited 1.0.29 ref;
- live activation, authenticated-return cadence, impression frequency, paid value, retention/harm effects, and channel attribution baselines.

## Operating rule

When first-party owner/release-console information conflicts with lagging public Store/search snapshots, use the first-party operational state for deployment identity and retain the public snapshot only as dated external-observation evidence.
