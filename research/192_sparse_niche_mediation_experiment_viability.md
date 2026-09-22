# Research 192 — Sparse-Niche Mediation Experiment Viability

Date: 2026-09-22
Status: Canonical
Scope: MintTap, LogMate, future niche utility apps

## Problem
After seller authorization and AdMob readiness are established, a niche app can still make a bad monetization decision by treating every mediation configuration as experimentally testable. AdMob's mediation A/B test requires at least 10,000 ad requests before it can determine a result and can run for up to 90 days. Sparse professional apps may therefore lack enough eligible, privacy-allowed, non-intrusive traffic to support a decision within a useful window.

The correct objective is not to manufacture more ad requests to satisfy an experiment. It is to determine whether the existing legitimate traffic can support the experiment without degrading specialist utility.

## Validated platform facts
1. AdMob mediation A/B tests can test adding/removing ad sources, manual waterfall eCPM/order, waterfall optimization on/off, number of calls to an ad source, and bidding eCPM floors.
2. AdMob states that a mediation A/B test must receive at least 10,000 ad requests before it can determine a result. Tests can run for 90 days.
3. Once an A/B test starts, Variant A/B cannot be changed while it is active; this protects comparison integrity.
4. AdMob's displayed estimated monthly earnings for variants are estimates, not guaranteed realized results.
5. Waterfall optimization uses historical data and periodically updates optimized eCPM/order; it therefore requires sufficient history and should not be confused with real-time bidding.
6. Bidding sources compete per eligible request; a bidding source only bids when it has an ad to show. Bidding and waterfall behavior therefore have different semantics.

Primary sources:
- Google AdMob Help, “Use A/B testing in mediation”: https://support.google.com/admob/answer/9572326
- Google AdMob Help, “Analyze and apply A/B tests”: https://support.google.com/admob/answer/9654808
- Google AdMob Help, “Optimize waterfall ad sources in mediation”: https://support.google.com/admob/answer/7374110
- Google AdMob Help, “Overview of bidding”: https://support.google.com/admob/answer/9234488
- Google AdMob Help, “Use bidding eCPM floors in mediation groups”: https://support.google.com/admob/answer/15260210

## DD0–DD5 Sparse-Niche Mediation Experiment Viability Gate

### DD0 — Eligible-traffic identity
Define app/version, platform, geography, format/ad unit, mediation group, consent eligibility, serving/readiness state and protected product states. Do not count requests that should not exist under CX/CZ/DA protections.

### DD1 — Request-volume sufficiency
Estimate legitimate eligible requests over the intended test window before launching. The 10,000-request platform threshold is a minimum condition for AdMob to determine a result, not proof that the experiment has adequate statistical power for every business metric.

If legitimate volume is insufficient, classify the experiment as `not currently viable`; do not increase interruption frequency, create artificial placements, weaken first-value protection or push users toward ads merely to reach the threshold.

### DD2 — Configuration isolation
Record Variant A/B exactly: sources, bidding/waterfall role, mappings, calls, floors, optimization status and mediation-group targeting. Preserve configuration during the test. Unique mappings should be used where needed for clean reporting.

### DD3 — Supply-state stability
Join DB/DC state to the experiment. Seller authorization, readiness, serving limits, consent eligibility, SDK/adapter changes, network outages and major geography/traffic composition shifts can invalidate interpretation. Segment or reject periods with material upstream state changes.

### DD4 — Revenue-and-UX outcome integrity
Do not choose a winner from eCPM alone. Compare requests, match/fill where semantically applicable, impressions, impression-level revenue provenance, estimated revenue, exposure/interruption burden, traffic quality and core-task outcomes. Variant revenue estimates remain estimates until reconciled downstream.

### DD5 — Decision/reversibility
Adopt a variant only when evidence is sufficient and specialist-value guardrails remain intact. Preserve the prior configuration and test evidence so the decision can be reversed if finalized revenue, traffic quality or user-value outcomes deteriorate.

## Canonical semantic rules
- `10,000 requests ≠ guaranteed statistical power`
- `experiment eligibility ≠ permission to manufacture ad exposure`
- `estimated monthly earnings ≠ finalized cash`
- `higher eCPM ≠ higher total sustainable revenue`
- `higher fill/impressions ≠ acceptable UX`
- `waterfall optimized eCPM ≠ real-time bid`
- `bidding source configured ≠ bid on every request`
- `mediation winner ≠ product winner` unless core-value guardrails also pass

## MintTap operational contract
Before any mediation A/B test, calculate expected eligible request volume using existing production traffic under current non-intrusive placement rules. If the expected test cannot plausibly reach the platform minimum without changing user exposure, do not run it yet. Accumulate normal traffic or use observational diagnostics instead.

Do not create additional interstitial triggers, extend banner-visible time, add Native/Rewarded inventory, or weaken protected portfolio/distribution/ROC/tax workflows to create experimental volume.

Every future mediation experiment registry should include: hypothesis; exact variants; platform/geography/format/ad unit; request forecast; platform minimum feasibility; start/end; DB/DC supply state; consent state; SDK/adapters; exposure guardrails; requests/impressions; revenue provenance; task outcomes; result confidence; decision; rollback condition.

## LogMate operational contract
For an ad-free release, DD is not applicable. If monetization is later enabled, sparse pilot traffic must not be converted into artificial ad density to make mediation experimentation feasible. Home and protected flight/logbook workflows remain outside the experiment universe unless a future explicit product decision changes those protections.

## Reusable company rule
Niche-app monetization experimentation is traffic-constrained. When legitimate traffic is too sparse, the correct decision is often to wait rather than optimize prematurely. Zero-cost monetization does not justify spending user attention as experimental currency.

## Next evidence target
Apply DD only after MintTap DB/DC production state and real ad-request volume are known. Build a mediation experiment viability registry from actual eligible requests by platform/geography/format/group. Mark each proposed test `viable`, `not yet viable`, or `invalid due to supply-state instability` before experimentation.