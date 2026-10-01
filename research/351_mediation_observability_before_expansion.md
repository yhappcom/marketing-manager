# Research 351 — Mediation Observability Before Expansion

Validated: 2026-10-01

## Decision

For sparse-niche apps, do not add a mediation partner merely because another demand source is available. Expansion requires a diagnosable baseline and source-level observability first.

## Authoritative findings

Google Ad Inspector exposes mediation waterfall/bidding results, adapter initialization state, per-source errors and latency, and supports single-ad-source testing. In-context tests are preferred because out-of-context tests omit request parameters such as child-directed treatment configuration, custom targeting, network extras, and some size context.

Google Mobile Ads response information exposes the loaded adapter plus adapter-response latency, ad-source identity/instance and errors. AdMob reporting can segment by ad source instance and ad unit.

Impression-level ad revenue includes a precision state. Third-party waterfall earnings/observed eCPM can arrive later because AdMob retrieves data from third-party APIs; therefore short-window source comparisons can be misleading.

## JM0–JM9 — Mediation Observability Gate

JM0 baseline ad unit and protected-surface integrity
JM1 in-context request evidence
JM2 adapter initialization/version state
JM3 source/instance identity
JM4 source error/no-fill classification
JM5 source latency
JM6 impression-level revenue plus precision
JM7 reporting freshness/reconciliation window
JM8 downstream UX/trust guardrails
JM9 decision: KEEP-SINGLE / FIX-INTEGRATION / TEST-SOURCE / KEEP-SOURCE / ROLLBACK / HOLD / UNKNOWN

## Operating contract

A source is not eligible for a production mediation test until JM1–JM7 are observable. A higher estimated eCPM alone is insufficient.

Run single-source diagnostics on test devices before production comparison. Prefer in-context testing through the actual app surface. After enabling or disabling single-source testing, invalidate cached ads as recommended before interpreting results.

Separate configuration failure from economic underperformance. Adapter initialization errors, mapping errors, privacy-signal problems, and source-specific no-fill are integration diagnoses, not evidence that a source has weak demand.

Do not compare third-party waterfall revenue on an immature reporting window. Record data freshness and impression-revenue precision before source-level KEEP/ROLLBACK decisions.

## MintTap application

Before adding mediation demand, inventory each production ad unit and capture: surface/task state, request path, adapter/source instance, latency/error, fill outcome, impression paid event and precision, report freshness, and protected-workflow effects. If this evidence is absent, decision = HOLD rather than TEST-MEDIATION.

## LogMate application

At launch, prefer a minimal observable monetization stack. Professional workflow integrity and first/repeated pilot value outrank source breadth. Mediation becomes eligible only after a stable single-source baseline shows a demand-side constraint that additional competition could plausibly improve.

## Reusable niche-app rule

More demand sources increase option value only after the app can distinguish demand scarcity from integration, privacy, latency, traffic-quality, or UX problems. Observability is therefore a prerequisite to mediation complexity, not a cleanup step after expansion.

## Sources

- Google for Developers — Ad Inspector / mediation troubleshooting and single-source testing: https://developers.google.com/admob/flutter/ad-inspector/test-ad-units
- Google for Developers — ResponseInfo / adapter-response diagnostics: https://developers.google.com/admob/android/response-info
- Google AdMob Help — Reports glossary: https://support.google.com/admob/table/9462111
- Google AdMob Help — Impression-level ad revenue: https://support.google.com/admob/answer/11322405
- Google AdMob Help — Data freshness: https://support.google.com/admob/answer/13291097
