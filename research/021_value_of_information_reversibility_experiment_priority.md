# 021 — Value of Information, Reversibility & Experiment Priority for Sparse-Niche Marketing

Status: FOUNDATION COMPLETE — Stage 2 specialist depth
Date: 2026-09-15

## Purpose

Research 020 established how to interpret sparse experiments without false precision. This block answers the prior question: **which uncertain marketing decisions deserve scarce traffic, labor and waiting time in the first place?**

For MintTap, LogMate and future specialist apps, experimentation is not free. A test consumes users, calendar time, analyst/design/development effort and—most importantly—delays other learning or implementation. Therefore “test everything” is not an evidence-based default.

## Evidence foundation

Value-of-information (VOI) decision analysis formalizes a useful principle: information has value when reducing uncertainty can change a decision and avoid expected opportunity loss. Expected Value of Sample Information (EVSI) evaluates the expected benefit from a proposed finite study; Expected Net Benefit of Sampling (ENBS) compares that benefit with the cost of obtaining the evidence. These methods are well established in decision analysis. Sources include the ISPOR VOI Task Force methods report and University of York/Centre for Health Economics work on EVSI.

Marketing does not need to import healthcare utility units or pretend that every product experiment supports a precise EVSI calculation. We retain the **decision principle**, not false numerical precision:

> Further research is worthwhile only when the expected improvement in decision quality exceeds the full cost of obtaining and waiting for the information.

Microsoft experimentation literature also emphasizes measuring the value experiments add to decisions, rather than treating experiment count as the goal.

## 1. Separate decision value from information value

Before asking “can we test this?”, write the decision.

Decision record:
- decision to be made;
- available actions;
- current best action under existing evidence;
- important uncertainty;
- plausible consequence if current choice is wrong;
- reversibility/rollback cost;
- useful lifetime of the decision;
- evidence already available;
- proposed additional evidence;
- full evidence cost;
- whether evidence can arrive before the decision loses relevance.

If no plausible new evidence would change the action, the information has near-zero decision value even if intellectually interesting.

## 2. Company VOI heuristic

Use this qualitative decomposition before commissioning an experiment:

`Research priority ≈ P(decision changes with useful evidence) × consequence of choosing better × affected future population/use × useful decision lifetime − evidence cost − delay cost − opportunity cost`

This is an operating heuristic, not a statistically calibrated EVSI estimator.

### Evidence cost includes
- design/copy/engineering work;
- analytics implementation and QA;
- scarce eligible traffic;
- calendar duration;
- analysis/review time;
- user experience risk during exposure;
- community trust risk where applicable.

### Delay cost includes
- foregone activation/retention/revenue while waiting;
- delayed launch or content publication;
- stale opportunity windows;
- continued exposure to a known defect.

### Opportunity cost includes
- another Store hypothesis not tested;
- another article not produced/updated;
- community research not performed;
- product or ad UX work deferred;
- traffic fragmented across simultaneous experiments.

## 3. Reversibility is a first-class variable

Not every uncertainty deserves the same evidentiary threshold.

### Class R1 — cheap and rapidly reversible
Examples: internal-link ordering; low-risk blog CTA wording; minor owned-page information hierarchy that can be immediately restored.

Default: make the best evidence-informed choice, observe, and roll back if needed. A dedicated randomized experiment is usually unnecessary unless traffic is abundant or the choice becomes strategically consequential.

### Class R2 — reversible but exposure has meaningful cost
Examples: Store hero proposition; meaningful onboarding copy; ad frequency/placement; community posting format.

Default: stronger predecision evidence. Controlled testing is valuable when feasible because a wrong choice can affect acquisition quality, retention, trust or policy exposure before rollback.

### Class R3 — costly or slow to reverse
Examples: durable positioning change across many surfaces; migration of a major content architecture; launch geography/segment commitment with significant implementation work.

Default: triangulate multiple evidence sources and use controlled testing where causal uncertainty is both material and resolvable.

### Class R4 — trust/policy/safety boundary
Examples: misleading financial claim; noncompliant ad placement; prohibited community promotion; unsupported regulatory claim.

Default: **do not experiment across a compliance/trust boundary.** Resolve through authoritative policy/evidence. “Maybe it converts better” is irrelevant.

## 4. Five decision paths

Every meaningful marketing uncertainty should be routed to one of five paths.

### A. ACT NOW + MONITOR
Use when the action is reversible, downside is small, existing evidence is adequate and waiting costs more than uncertainty reduction.

### B. OBSERVE / TRIANGULATE
Use when randomized testing is infeasible or unnecessary but multiple independent signals can materially improve the choice: Search Console, Store queries, community questions, support requests, qualitative workflow evidence, cohort behavior.

Observational evidence does not become causal merely because multiple sources agree. It can nevertheless be sufficient for a low-risk reversible decision.

### C. CONTROLLED EXPERIMENT
Use when:
- alternatives are genuinely uncertain;
- the decision matters;
- a wrong choice has meaningful cost;
- eligible traffic can resolve a practically meaningful contrast in useful time;
- randomization/isolation materially reduces an important confounding problem;
- expected learning can change the action.

### D. RESEARCH FIRST, THEN DECIDE WHETHER TO TEST
Use when the hypothesis itself is poorly formed. Interviews, community observation, query analysis or product telemetry should define the competing propositions before scarce experimental traffic is spent.

### E. DO NOT RESEARCH / DEFER
Use when consequence is trivial, evidence cannot change the decision, sample resolution time exceeds useful decision life, or a higher-value question should consume the scarce traffic/labor.

“Not tested” is not equivalent to “unscientific.” Deliberately declining a low-value experiment is disciplined resource allocation.

## 5. Experiment priority scorecard — ordinal, not pseudo-precise

Score each candidate LOW / MEDIUM / HIGH rather than inventing unjustified decimals:

1. Decision consequence if wrong
2. Current uncertainty near the decision boundary
3. Probability new evidence changes the action
4. Number/value of future users or decisions affected
5. Useful lifetime/reusability of learning
6. Ability of available traffic to resolve MPME
7. Reversibility (lower reversibility raises evidence need)
8. Trust/policy risk
9. Full research cost
10. Delay cost
11. Opportunity cost against competing learning

Do **not** sum these mechanically into a universal number. The record exists to expose trade-offs and force explicit prioritization.

## 6. Scarce-traffic portfolio rule

The same user cannot efficiently answer unlimited simultaneous questions.

For each scarce experimental surface:
- maintain a queue of decision-relevant hypotheses;
- estimate whether each can resolve an MPME within its useful horizon;
- prioritize high-consequence, decision-changing, reusable learning;
- avoid parallel tests that contaminate each other or fragment traffic below resolution;
- retire questions whose decision window expires;
- preserve `INCONCLUSIVE` rather than extending low-value tests indefinitely.

A high-traffic surface is not automatically the best test location if the audience or causal question does not match the decision.

## 7. Sequential decisions: learn, decide, revisit

A marketing decision need not wait for perfect information. Use staged commitment:

`best current evidence → reversible action → predefined monitoring → accumulate relevant evidence → escalate/rollback/retain`

This differs from invalid repeated peeking at a fixed-horizon significance test. Operational monitoring of a reversible decision is not permission to reinterpret conventional p-values after every observation.

Where Apple/Google provide native experiment semantics, retain those semantics. Do not invent optional-stopping guarantees that the platform does not state.

## 8. When observational evidence is enough

Observational evidence can support action when all of the following are substantially true:
- decision is reversible;
- expected harm from a wrong choice is limited;
- causal attribution is not required for the immediate decision;
- signals are directly relevant rather than vanity metrics;
- alternative explanations are recorded;
- monitoring/rollback exists.

Controlled evidence becomes more valuable as consequence, irreversibility, confounding and disagreement between signals increase.

## 9. MintTap applications — hypotheses only

### Store first-screenshot proposition
Potential decision: generic portfolio tracking vs YieldMax-specific distribution/ROC proof.
- Meaningful acquisition-quality consequence.
- Reversible, but sparse Store traffic is costly.
- If traffic can resolve a large MPME in useful time: controlled Store experiment candidate.
- If not: triangulate Store query evidence + community language + activated-user behavior and avoid cosmetic multi-arm tests.

### ROC explanatory article CTA
- Low-risk, rapidly reversible.
- Default to evidence-informed CTA and monitor qualified handoff rather than consuming scarce randomized traffic unless CTA becomes a meaningful funnel bottleneck.

### External YieldMax community promotion
- Permission is a boundary condition, not an experiment variable.
- First determine current community permission. Do not A/B test prohibited vs compliant behavior.

### Ad interruption near portfolio/transaction task
- Meaningful retention/trust downside.
- Existing policy/task-state rules constrain eligible placements before revenue experimentation.
- Test only compliant, legitimate opportunities with retention/task guardrails.

## 10. LogMate applications — hypotheses only

### Migration/import vs fast-entry positioning
- Potentially major category/CEP choice with reusable value across Store/site/content.
- Research user workflow/search/community evidence first.
- If both remain plausible and launch traffic can resolve a high-contrast treatment, controlled Store experiment is valuable.

### Blog navigation ordering
- Cheaply reversible and low consequence.
- Act + monitor; do not default to A/B testing.

### Country-specific regulatory positioning
- Accuracy/regulatory evidence boundary.
- Verify authoritative rules first; experimentation cannot determine legal truth.

### Ad frequency during log-entry workflow
- High task-interruption downside.
- First apply task-state exclusions; any remaining eligible frequency experiment needs retention/completion guardrails.

## 11. Research queue template

For each candidate:

```
Decision ID:
Product/surface:
Decision deadline:
Actions available:
Current best action:
Key uncertainty:
Consequence if wrong: L/M/H
Reversibility: R1/R2/R3/R4
Existing evidence:
Could new evidence change action?: Y/N/UNKNOWN
Affected future users/decisions:
Useful lifetime of learning:
Proposed evidence method:
Traffic/sample feasibility:
MPME:
Full research cost:
Delay cost:
Opportunity cost:
Trust/policy constraints:
Route: ACT / OBSERVE / EXPERIMENT / RESEARCH-FIRST / DEFER
Predeclared revisit/rollback rule:
Outcome:
```

## 12. Anti-patterns now prohibited

- test everything because A/B testing is considered inherently rigorous;
- prioritize experiments by ease rather than decision value;
- test cosmetic variants while a major positioning uncertainty remains unresolved;
- wait months for a low-value answer while a reversible improvement is blocked;
- treat observational correlation as causal proof;
- use experimentation to decide factual, legal, platform-policy or community-permission truth;
- ignore labor/calendar/traffic opportunity cost because cash spend is zero;
- continue an underpowered experiment indefinitely merely to obtain a winner;
- count number of experiments as the marketing learning KPI.

## 13. Relationship to previous research

- `004`: adds decision-level opportunity cost to cash-light acquisition economics.
- `009`: measurement must exist before evidence can alter decisions.
- `012`: Store experiment loop now gains an explicit experiment-worthiness gate.
- `014`: downstream activation/retention remain acquisition guardrails.
- `017`: monetization tests are bounded by task state and retention before VOI.
- `020`: governs validity/uncertainty once an experiment is selected; this block governs whether it should be selected at all.

## 14. Retained operating principle

> **Spend scarce evidence only where resolving uncertainty can materially improve a decision. For cheap reversible choices, act and monitor. For consequential uncertain choices, buy information only when its expected decision value exceeds its full research, delay and opportunity cost. Never use experimentation to cross trust, policy or factual-truth boundaries.**

## Sources validated

1. Rothery C, Strong M, Koffijberg H, et al. “Value of Information Analytical Methods: Report 2 of the ISPOR Value of Information Analysis Emerging Good Practices Task Force.” Value in Health 23(3), 2020. University of York record: https://pure.york.ac.uk/portal/en/publications/value-of-information-analytical-methods-report-2-of-the-ispor-val/
2. Heath A, Strong M, Jackson C, et al. “The Expected Value of Sample Information.” In *Value of Information for Healthcare Decision-Making*, 2024. University of York record: https://pure.york.ac.uk/portal/en/publications/the-expected-value-of-sample-information/
3. Microsoft Experimentation Platform. “It takes a Flywheel to Fly: Kickstarting and Keeping the A/B testing Momentum.” Emphasizes measuring experimentation's value to decision making rather than experiment volume: https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/it-takes-a-flywheel-to-fly-kickstarting-and-keeping-the-a-b-testing-momentum/
4. Banerjee A, Chassang S, Montero S, Snowberg E. “A Theory of Experimenters.” NBER Working Paper 23867, 2017. Decision-theoretic framing of experimental design and robustness: https://www.nber.org/papers/w23867
