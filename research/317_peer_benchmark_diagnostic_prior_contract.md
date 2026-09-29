# Research 317 — Peer-Benchmark Diagnostic Prior Contract

Validated: 2026-09-30

## Core finding
Sparse-niche apps should use platform peer benchmarks as directional diagnostic priors, not growth targets, competitor rankings, or causal evidence.

Apple App Store Connect peer groups are formed using attributes including category, business model, and download volume. Available benchmark measures can include conversion, Day 1/7/28 retention, crash rate, proceeds per paying user, Day-35 download-to-paid conversion, and Day-35 proceeds per download. Apple exposes 25th/50th/75th percentile context and explicitly frames these values as directional rather than exact rankings. Differential privacy and analytics-sharing eligibility constrain interpretation; small peer groups may not display.

## HS0–HS9
HS0 decision question → HS1 metric identity → HS2 peer-fit gate → HS3 availability/privacy gate → HS4 percentile-as-prior → HS5 funnel diagnosis → HS6 internal specialist-evidence override → HS7 intervention isolation → HS8 re-measurement discipline → HS9 INVESTIGATE / PRIORITIZE / HOLD / DEPRIORITIZE / UNKNOWN.

## Operating rules
A weak Store-conversion position with healthy specialist retention points first toward Store message/claim/creative diagnosis, not more channel volume. Strong conversion with weak retention points toward expectation, onboarding, traffic quality, or first/repeated specialist value. Strong retention with weak monetization does not authorize more intrusive ads; existing protected-workflow, interaction-safety, consent, latency, and revenue-reconciliation gates remain binding.

Do not use proceeds-per-paying-user as a proxy for advertising LTV when the app is primarily ad-supported. Keep impression-level ad revenue and retention evidence separate.

## MintTap
Use benchmarks only after internal evidence is segmented around recurring investor problems and first/repeated specialist value. If conversion is weak but retained specialist usage is healthy, prioritize Store claim clarity, screenshots, intent routing, and message fit before expanding community/social output. If retention is weak, do not solve it with more top-of-funnel volume.

## LogMate
At launch, benchmarks can prevent overreaction to small absolute numbers, but professional pilot workflow evidence remains primary. Category medians cannot prove import continuity, Previous Totals, duplicate integrity, export integrity, or offline/PWA behavior satisfies pilots. Benchmarks choose where to investigate; workflow telemetry and feedback decide what changes.

## Reusable ledger
date | app | platform | metric | internal value | peer definition | peer-fit dimensions | p25 | p50 | p75 | privacy/availability state | specialist-value evidence | diagnosed layer | intervention | decision | next check

## Anti-patterns
Do not equate below median with failure, above median with product-market fit, or a broad fallback peer group with a suppressed narrow group. Do not mix metrics with different denominators. Do not increase acquisition merely because conversion looks good while retention or specialist value is weak.

## Evidence
Apple Developer App Store Connect Analytics peer-group benchmark documentation, checked 2026-09-30.

## Next target
Build a MintTap diagnostic scorecard from actual App Store Connect conversion, D1/D7/D28 retention, crash rate, applicable monetization benchmark, source mix, and specialist first/repeated value. Identify the highest-confidence constraint before any new Store experiment or zero-cost channel expansion.
