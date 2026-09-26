# Research 265 — Sparse-Niche Ad Density Experiment Guardrails

Date: 2026-09-27

## Decision

For a sparse professional app, ad-density expansion is not justified by lower revenue, lower eCPM, or unused screen transitions. Expansion is eligible only after the existing monetization chain is instrumented and the candidate exposure occurs at a genuine non-protected boundary.

Canonical chain:
`specialist job → protected-state check → genuine boundary → eligible opportunity → request/load/impression/paid event → precision-aware revenue → workflow completion → next core value → repeated core value → KEEP / STOP / REDUCE / EXPAND-TEST`

The default under sparse evidence is **NO CHANGE**, not “add more inventory.”

## FL0–FL8 gate

0. **Baseline integrity** — freeze the current placement map, consent state, mediation/floor configuration and product release context before testing density.
1. **Protected-workflow exclusion** — no density experiment inside core data-entry, reconciliation, verification, export/recovery or other trust-critical jobs.
2. **Opportunity integrity** — count only genuine natural boundaries. A navigation event, foreground event or screen view is not automatically an ad opportunity.
3. **Format-semantic integrity** — the candidate format must fit the boundary. Frequency reduction cannot repair a semantically wrong placement.
4. **Instrumentation integrity** — observe eligible opportunity, suppression reason, request, load/failure, impression, paid event/value precision and downstream product events.
5. **Sparse-experiment discipline** — predeclare primary revenue and product-harm metrics, exposure rule, observation window and stop conditions. Do not repeatedly peek and tune toward a favorable result.
6. **Immediate-harm stop** — stop on policy/consent errors, protected-workflow intrusion, material crash/latency regression, deceptive/out-of-context presentation, or a clear product-integrity failure. These do not require statistical significance.
7. **Business-value decision** — a revenue lift is acceptable only if qualified workflow completion and repeated specialist value remain inside the predeclared harm tolerance.
8. **Inconclusive handling** — if traffic cannot distinguish acceptable lift from unacceptable product harm, retain the lower-pressure baseline. Inconclusive is not permission to expand.

## App-open ads: a concrete eligibility rule

Google's current App Open guidance makes foregrounding technically possible, but not every foreground event is an eligible impression opportunity.

For cold starts:
- do not show an app-open ad on the very first app start;
- show only from the loading state while the user is already waiting;
- if loading completes and the user has reached main content before the ad loads, suppress that exposure rather than presenting a late, out-of-context ad;
- loaded app-open ads expire after four hours.

Google also recommends waiting until the user has used the app a few times before the first app-open exposure.

Sources:
- https://developers.google.com/admob/android/next-gen/app-open
- https://developers.google.com/admob/flutter/app-open

Operational consequence: `foreground_event_count` must never be used as the denominator for app-open monetization potential. The denominator is `eligible_waiting_state_after_exclusions`.

## Experiment contract

Minimum fields:
- experiment_id / app_version / start_at / planned_end_at
- surface_id / specialist_job
- protected_state
- boundary_type
- format
- exposure_rule and cooldown/cap
- eligibility_count
- suppression_reason
- request / load / failure
- impression
- paid_event_value / currency / precision
- qualified_workflow_start / completion / abandonment
- next_core_value
- repeated_core_value window
- crash/latency integrity
- consent-state composition
- mediation/floor/config snapshot
- decision: KEEP_BASELINE / STOP_HARM / REDUCE / INCONCLUSIVE / EXPAND_TEST

Do not log portfolio holdings, tax-entry content, flight records or other specialist record payloads merely to evaluate ads.

## Metrics

Diagnose in order:

`eligible opportunities / qualified sessions`
→ `requests / eligible opportunities`
→ `loads / requests`
→ `impressions / loads`
→ `paid events / impressions`
→ `revenue / eligible opportunity`
→ `revenue / qualified session`
→ `revenue / repeated-value user`

Pair revenue with:
- protected-workflow intrusion rate: target exactly zero;
- qualified workflow completion;
- abandonment;
- next-core-value completion;
- repeated specialist value;
- crash/latency guardrails.

Do not use eCPM alone as the experiment objective. It can rise while eligible opportunities, user value or total sustainable revenue deteriorate.

## Sparse-data stopping rule

There is no universal fixed sample size that makes a niche-app ad experiment valid. Required traffic depends on baseline rate, minimum worthwhile revenue lift, maximum acceptable product harm and variance.

Therefore:
1. estimate feasibility before launch from the actual baseline;
2. set a maximum observation horizon;
3. stop immediately for integrity/policy harm;
4. otherwise avoid early winner calls;
5. at the horizon, if the interval/evidence still includes both a practically useful outcome and an unacceptable product-harm outcome, classify **INCONCLUSIVE** and keep the lower-pressure baseline;
6. do not pool unrelated surfaces merely to manufacture sample size.

This is intentionally asymmetric: evidence is required to increase interruption pressure; lack of evidence preserves the baseline.

## Portfolio application

### MintTap
Keep portfolio/transaction/tax-adjustment editing, distribution/ROC interpretation, corporate-action reconciliation and calculation confirmation protected. Home remains excluded from ad expansion unless a later product decision explicitly changes that policy. Candidate experiments begin only on non-critical secondary surfaces with genuine boundaries.

### LogMate
Keep Previous Total/onboarding, flight add/edit, import/mapping, duplicate reconciliation, totals verification, export, sync/recovery and record-integrity confirmation protected. Do not trade pilot-record trust for additional full-screen inventory.

## Reusable rule for future niche apps

Use a **scarce interruption budget**:
- first prove a boundary is eligible;
- then prove instrumentation is complete;
- then test the smallest meaningful exposure change;
- require evidence for expansion;
- require no statistical threshold to stop integrity violations;
- treat inconclusive sparse evidence as a reason to preserve the less intrusive baseline.

## Next validation

Build the production-ready Ad Opportunity Ledger schema for MintTap and map each current ad unit to a real UI surface. Do not recommend density, format, floor or mediation changes until the ledger can localize loss and measure downstream product consequence.
