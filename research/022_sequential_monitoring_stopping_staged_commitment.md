# 022 — Sequential Monitoring, Stopping, and Staged Commitment Under Sparse Evidence

Updated: 2026-09-15
Status: STAGE 2 SPECIALIST DEPTH — FOUNDATION COMPLETE

## Purpose

Extend 020–021 from experiment interpretation/prioritization into a disciplined answer to three different questions that are often conflated:

1. May we look at a running experiment?
2. May interim evidence change the formal statistical conclusion?
3. May operational risk justify pausing/rolling back before the planned inferential endpoint?

For MintTap, LogMate and future narrow specialist apps, scarce traffic makes arbitrary early stopping especially damaging: one noisy early cohort can consume months of decision value. The solution is not “never look” but to predeclare what kind of looking is being done and what actions each signal is allowed to trigger.

## Evidence basis

Validated against current experimentation documentation in September 2026.

- Optimizely distinguishes fixed-horizon, sequential and Bayesian engines. Its fixed-horizon mode performs full analysis after the required visitor data/duration; its sequential engine is designed for continuous monitoring and adjusted inference.
  - https://support.optimizely.com/hc/en-us/articles/46742223715085-New-A-B-Results-page-overview
  - https://support.optimizely.com/hc/en-us/articles/39714777161229-Statistical-analysis-methods-overview
- Statsig documents the classical peeking problem: allowing early decisions from ordinary frequentist readouts inflates false positives; its sequential option adjusts preliminary p-values/confidence intervals, while SPRT is sequential by construction.
  - https://docs.statsig.com/experiments/advanced-setup/sequential-testing
  - https://docs.statsig.com/ja/experiments/advanced-setup/sprt
- Optimizely also recommends launch/QA health monitoring even when an experiment should otherwise be allowed to run to its planned decision point. Operational monitoring and inferential stopping are therefore separate jobs.
  - https://support.optimizely.com/hc/en-us/articles/4410288524045-Launch-and-monitor-your-experiment

Vendor-specific statistical guarantees are NOT transferred to Apple Product Page Optimization, Google Play Store Listing Experiments, Firebase, or an internal yhappcom analysis unless that exact system/method documents the guarantee.

## 1. Canonical separation: HEALTH LOOK vs DECISION LOOK

Every interim inspection must be classified before data are opened.

### HEALTH LOOK

Purpose: determine whether continuing exposure is operationally acceptable and whether the experiment remains valid.

Permitted questions include:
- assignment/sample-ratio anomaly;
- broken event logging or missing data;
- crashes/performance regression;
- materially broken UX;
- policy/compliance/trust issue;
- severe guardrail deterioration;
- treatment implementation failure.

A health look may trigger PAUSE / ROLLBACK / INVALIDATE. It does not declare a marketing winner merely because the primary metric happens to look favorable.

### DECISION LOOK

Purpose: decide whether evidence supports ADOPT / KEEP CONTROL / CONTINUE / INCONCLUSIVE under the predeclared inferential method.

A fixed-horizon experiment does not become sequential merely because the dashboard is visible every day. If interim results can change the decision date, the statistical design must explicitly support that behavior.

Company rule:

> Visibility of a number is not permission to use that number for stopping.

## 2. Three valid monitoring contracts

### Contract A — Fixed horizon

Predeclare:
- primary hypothesis/metric;
- eligible population;
- MPME;
- sample/duration target or other valid endpoint;
- minimum calendar coverage where workflow cycles matter;
- guardrails;
- invalidation rules;
- final analysis method.

Before endpoint:
- health looks allowed;
- primary-effect readout may be hidden/restricted where practical;
- no “looks good enough” winner declaration;
- no extending/recalculating the endpoint because an interim p-value is inconvenient.

At endpoint:
- interpret effect size + uncertainty + MPME + guardrails using 020.

### Contract B — Formal sequential inference

Use only when the actual statistical method/platform explicitly supports sequential monitoring and its stopping interpretation is understood.

Predeclare:
- exact sequential method/tool;
- primary metric/hypothesis;
- treatment/control;
- decision boundaries or platform-defined decision semantics;
- practical-significance requirement;
- minimum exposure/calendar coverage if required for representativeness;
- guardrails and maximum useful duration.

Sequential validity does not remove business-validity requirements. A statistically permitted early stop can still be rejected if the observed effect is too small to matter, a key workflow cycle is unobserved, the treatment harms trust/retention, or the cohort is not representative.

### Contract C — Operational rollout / staged commitment

This is not automatically an A/B significance test.

Purpose: limit downside while learning whether implementation is safe enough to broaden.

Example commitment ladder:
`internal/QA → small eligible exposure → broader exposure → default/full exposure`

Each gate can require:
- technical health;
- no policy/trust violation;
- guardrail within acceptable band;
- minimum qualitative evidence;
- sufficient measurement integrity.

Do not describe a safe rollout gate as proof that treatment causally improves conversion unless a valid experiment establishes that claim.

## 3. Stop taxonomy

Every stop receives exactly one primary reason.

1. **SUCCESS STOP** — predeclared inferential + practical + guardrail criteria support adoption.
2. **HARM STOP** — predeclared safety/guardrail criterion crossed; rollback or reduce exposure.
3. **INVALID STOP** — assignment, instrumentation, implementation or contamination makes inference untrustworthy.
4. **FUTILITY / LOW-VOI STOP** — remaining information is unlikely to change the practical decision enough to justify scarce traffic/time. This is not “proof of no effect.”
5. **MAX-HORIZON INCONCLUSIVE STOP** — useful decision lifetime/calendar/traffic budget expires without adequate resolution.
6. **EXTERNAL STOP** — product/policy/version/market change makes the original question obsolete.

Never relabel an inconclusive or futility stop as “no difference.”

## 4. Sparse-niche staged-commitment principle

Sparse traffic makes reversible commitment valuable because waiting for perfect certainty can itself destroy value.

Use 021 reversibility classes:
- R1/R2 low-cost reversible changes: evidence may justify ACT + MONITOR rather than an underpowered experiment.
- R3 consequential but reversible changes: staged commitment is often preferable to all-at-once adoption.
- R4 costly/irreversible/high-trust changes: research/authoritative evidence and stronger validation precede commitment.

Staged commitment is an exposure-control strategy, not a loophole for weak inference.

## 5. Calendar coverage matters separately from sample size

Specialist apps can have weekly/monthly/event-driven workflows. A fast early sample can miss:
- distribution cycles in MintTap;
- roster/pay-period/month-end workflows in LogMate;
- weekday/weekend source composition;
- release-driven novelty effects.

Therefore each decision plan may specify both:
- an evidence/sample condition; and
- a minimum relevant workflow/calendar coverage condition.

Do not invent a universal “run for 7/14 days” rule. The required cycle is product/hypothesis specific and remains empirical.

## 6. Practical decision matrix

### Continue
Continue when the experiment is valid, no harm boundary is crossed, the question still matters, and additional evidence retains meaningful VOI.

### Adopt
Adopt when the predeclared inferential contract permits the decision, the effect clears practical relevance, and downstream guardrails are acceptable.

### Keep control
Keep control when evidence supports material harm or the treatment fails a predeclared practical decision criterion. Do not confuse insufficient evidence with evidence for equivalence.

### Stop inconclusive
Stop when useful horizon/traffic budget expires or remaining VOI is too low, while uncertainty still spans materially different decisions.

### Roll back
Rollback can occur immediately for safety, trust, policy, data-integrity or severe UX reasons even if the primary conversion experiment has not reached its formal endpoint.

## 7. Anti-patterns now prohibited

- daily fixed-horizon significance checking followed by stopping on the first favorable day;
- extending a losing/inconclusive fixed-horizon experiment until it becomes significant;
- shortening it because an early lift looks exciting;
- switching from fixed-horizon to Bayesian/sequential interpretation after seeing results;
- changing primary metrics after inspection;
- calling operational staged rollout evidence an A/B causal win;
- treating “not significant” as equivalent/no effect;
- running indefinitely because more data always sounds better;
- using a vendor’s always-valid/sequential claim outside that exact configured method.

## 8. MintTap application — HYPOTHETICAL

Candidate question: first Store screenshot emphasizing YieldMax distribution/ROC specificity versus generic portfolio overview.

If tested with a fixed-horizon store experiment:
- predeclare primary store metric and downstream activation guardrail;
- use health monitoring for obvious listing/measurement problems;
- do not stop because the first small cohort favors ROC creative;
- require the platform’s planned endpoint/decision semantics plus MPME interpretation;
- if traffic cannot resolve the effect before the creative becomes stale, end INCONCLUSIVE and triangulate Search Console/community/activation evidence.

If a new ad placement is being introduced:
- staged exposure can protect task completion/retention;
- severe accidental-click, complaint, latency or task-abandonment signals can trigger rollback independent of whether ad revenue uplift is statistically resolved.

## 9. LogMate application — HYPOTHETICAL

Candidate question: migration/import proposition versus rapid manual logging proposition.

A launch-period cohort is particularly vulnerable to novelty/source-mix effects. Do not use the first few days of pilot traffic to select a permanent proposition unless the chosen inferential method supports the decision and relevant workflow coverage is adequate.

For an intrusive monetization candidate, staged commitment should be conservative around flight-record entry/import conflict/backup workflows. A monetization gain never overrides a trust/safety/task-integrity stop.

## 10. Experiment registry additions

Add fields:
- `monitoring_contract`: FIXED_HORIZON | FORMAL_SEQUENTIAL | OPERATIONAL_STAGED
- `health_look_schedule_or_trigger`
- `decision_look_rule`
- `minimum_calendar_or_workflow_coverage`
- `maximum_useful_horizon`
- `success_stop_rule`
- `harm_stop_rule`
- `invalid_stop_rule`
- `futility_or_low_voi_rule`
- `external_obsolescence_rule`
- `stop_reason_actual`
- `rollback_plan`
- `inference_claim_allowed`

## 11. Company rule

`monitor continuously for health ≠ decide continuously from ordinary statistics`

and

`staged exposure reduces commitment risk; it does not manufacture causal certainty.`

For scarce niche traffic, the correct goal is not the earliest possible winner. It is the earliest **decision-valid** stop that preserves user trust, practical significance, and the value of remaining traffic.

## Open validation

- Exact statistical semantics of each live Apple/Google experiment must be read from current platform documentation at experiment time.
- MintTap/LogMate natural workflow cycles are not yet empirically established.
- Product-specific harm thresholds and maximum useful horizons require live baselines.
- Internal tooling does not yet implement a canonical experiment registry with these fields.
