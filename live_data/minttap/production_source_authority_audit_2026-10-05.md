# MintTap production-source authority audit — 2026-10-05

## Decision impact
D2 production monetization remains **ACTIVE / PRESSURE HOLD**.

## Verified repository evidence
The default `main` branch of `yhappcom/yieldmax_tracker` is a February 2026 bootstrap line and must not be used by itself as the authority for the shipped 1.0.29 implementation.

The repository has an explicit `1.0.29` branch. GitHub resolves that branch to commit `736bbc99a41c14130d82aeaa17ac81f0fc835a65` (2026-09-08, “Add user activity tracking”). This is the reproducible release-version implementation reference already used by Marketing Manager evidence.

## Corrected evidence boundary
The earlier downgrade in this file was caused by treating the default branch as the only production-source authority. That was incorrect.

Restore the source state to **RELEASE-VERSION IMPLEMENTATION VERIFIED** for claims directly reproducible from the `1.0.29` branch. Do not promote that status to live-runtime verification: source presence does not establish current consent state, requests, impressions, paid events, revenue quality, mediation behavior, enforcement/account health, or retention effects.

## Operational consequence
Do not increase ad pressure from source evidence alone. D2 remains **RELEASE-VERSION IMPLEMENTATION VERIFIED / LIVE MONETIZATION QUALITY UNVERIFIED / PRESSURE HOLD**.

Next production evidence targets:
- live UMP/consent and request eligibility state;
- live app-ads.txt authorization/readiness;
- ad surface/unit map reconciled to runtime;
- request → load → impression → paid-event chain;
- source/adapter/latency errors;
- ILAR precision/source and estimated → finalized reconciliation;
- mediation/floor/refresh configuration;
- accidental-click geometry and Confirmed Click/Policy Center/serving-limit history;
- caps/cooldowns and first/repeated-value guardrails.

Public Store advertising/privacy declarations are supporting declaration evidence, not runtime proof.
