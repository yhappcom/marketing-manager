# Research 193 — Mediation A/B Allocation & Estimand Integrity

Validated: 2026-09-22

## Why this extends Research 192
Research 192 established whether a sparse-niche mediation experiment is viable at all. This note addresses a different failure mode: even when an AdMob mediation A/B test can run, its displayed numbers can be misread as directly observed business outcomes.

## Authoritative platform facts
Google AdMob mediation A/B testing splits **app users**, not individual ad requests, between the existing mediation group (Variant A) and Variant B. Variant B can receive 1%–50% of app-user traffic; the remainder stays in A. The allocation cannot be changed after the test begins.

Google recommends changing one setting at a time, running for at least two weeks, and using distinct ad-unit mappings for A and B when the same waterfall source is used. The test needs at least 10,000 ad requests before AdMob can determine a result.

AdMob's analysis page reports **scaled monthly earnings**: an estimate of 28-day earnings if a variant were applied to 100% of users. This calculation starts only after at least four days and 10,000 impressions. If B receives less than 50% of users, B's data are scaled to an equivalent allocation for comparison. The estimate is not guaranteed future or finalized revenue.

AdMob can show a leading variant based on estimated performance/chance; if evidence is insufficient, it may show no conclusive leader. Google recommends at least two weeks before committing. If no variant is committed by the end of 90 days, the test stops and Variant A returns to 100% of users; a decision can still be made within the subsequent platform window before B is deleted.

Sources:
- Google AdMob Help, “Use A/B testing in mediation”: https://support.google.com/admob/answer/9572326
- Google AdMob Help, “Analyze your A/B test and take action”: https://support.google.com/admob/answer/9654808

## New operating distinction
Three quantities must never be collapsed:

1. **Observed arm outcome** — revenue, requests, impressions and product outcomes actually produced by users assigned to that arm during the experiment.
2. **Platform-scaled comparison** — AdMob's normalized/scaled estimate used to compare variants with unequal allocation.
3. **Business deployment forecast** — our estimate of what would happen after applying a variant to 100% of eligible production users, including UX, retention, traffic mix, finalized-revenue and supply-state uncertainty.

`observed arm revenue ≠ scaled monthly earnings ≠ post-deployment realized revenue`.

## DE0–DE5 — Mediation A/B Allocation & Estimand Integrity Gate

### DE0 — Experiment identity
Record app, platform, mediation group, format, geography, dates, release/app version, consent state, readiness/serving state and exact hypothesis.

### DE1 — Assignment identity
Record that assignment is user-level, the A/B allocation, eligible population and whether users can appear across devices/install identities. Do not describe a 10% B allocation as “10% of requests randomized independently.”

### DE2 — Treatment isolation
Change one mediation configuration dimension where practical. Freeze A/B configuration for the experiment. Use distinct mappings where required for clean reporting. Record concurrent product, pricing, consent, release or traffic changes that could contaminate interpretation.

### DE3 — Metric-semantic integrity
Label every metric as observed, adjusted/scaled, estimated or finalized. Preserve the separate AdMob thresholds: result determination requires at least 10,000 requests; scaled monthly earnings begins after >=4 days and >=10,000 impressions. Do not substitute one threshold for the other.

### DE4 — Product-value join
Join the randomized user cohorts, where privacy/measurement architecture legitimately permits it, to non-intrusive product guardrails: first/repeated useful value, task completion/abandonment, return behavior, interruption/exposure budget and ad-viewer concentration. Do not infer causal product impact from aggregate mediation metrics that cannot be joined to assignment.

### DE5 — Deployment decision
A mediation winner is deployable only if the revenue signal is sufficiently credible, supply state was stable, traffic quality is acceptable, and specialist-value guardrails show no material harm. After rollout, treat 100% deployment as a new production state and verify realized/reconciled revenue rather than assuming the scaled estimate will reproduce.

## Canonical rules
- `user allocation ≠ request-level randomization`
- `10,000 requests ≠ 10,000 impressions`
- `10,000 requests for result eligibility ≠ 10,000 impressions for scaled-earnings calculation`
- `scaled monthly earnings ≠ observed arm revenue`
- `scaled monthly earnings ≠ finalized earnings`
- `platform leader ≠ guaranteed future winner`
- `mediation winner ≠ product winner`
- `unequal allocation ≠ permission to compare raw arm totals`
- `two weeks recommended ≠ automatic statistical sufficiency`

## MintTap application
Before any mediation A/B test, preserve the DD viability gate. If viable, create an experiment registry containing allocation, exact treatment, unique mappings, request and impression counts, day-4 boundary, scaled-versus-observed metrics, readiness/serving history, ILRD/reconciliation evidence and product guardrails. A small B allocation can reduce user exposure to an uncertain treatment but also slows evidence accumulation; do not compensate by manufacturing more ad opportunities.

Do not report “Variant B earns X per month” when X is AdMob scaled monthly earnings. Report it explicitly as a platform-scaled 28-day estimate under the experiment conditions.

## LogMate application
For an ad-free release this gate is not applicable. If monetization is later enabled, preserve protected professional workflows and apply DD before DE. Sparse pilot traffic is a reason to defer an experiment, not to expand ad surfaces to obtain sample size.

## Reusable niche-app lesson
In low-volume specialist apps, the most dangerous experiment error is often semantic rather than mathematical: a platform-normalized comparison is promoted into a revenue forecast, then into a product decision. Preserve assignment, estimand and deployment semantics as separate evidence layers.