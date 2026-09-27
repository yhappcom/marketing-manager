# Research 276 — Sparse-Niche Store Experiment Stop/Learn Contract

Validated: 2026-09-27

## Decision problem
Sparse niche apps can waste scarce Store traffic by treating every experiment as if it must produce a winner. A non-conclusive experiment is not evidence of equivalence, and a reporting threshold is not a sample-sufficiency threshold.

## Authoritative facts
Apple Product Page Optimization (PPO) uses Bayesian analysis. Results begin appearing after at least five first-time downloads attributable to the test, but Apple labels a treatment Performing Better/Worse only at at least 90% confidence. Apple may label a test Likely to be Inconclusive when current traffic indicates it is unlikely to reach 90% confidence within the test horizon. Tests run up to 90 days unless manually stopped. Apple explicitly notes that larger lifts require less data than small lifts and that more treatments can lengthen time to a conclusive result.

Sources:
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization
- https://developer.apple.com/app-store/product-page-optimization/
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test

## FW0–FW8 operating contract
FW0 — State one decision before launch. No experiment without a concrete decision it can change.
FW1 — Define one material contrast. Avoid overlapping simultaneous changes that destroy causal interpretation.
FW2 — Check traffic feasibility before spending Store traffic. Five downloads is only Apple's display threshold, never a sufficiency rule.
FW3 — Protect the baseline and treatment semantics. Do not reinterpret the hypothesis after seeing early movement.
FW4 — Classify outcome: WIN / LOSS / COLLECTING / INCONCLUSIVE / TRAFFIC-INSUFFICIENT / INVALIDATED.
FW5 — WIN/LOSS requires platform-supported evidence, not a transient point estimate. On Apple, use the platform's >=90% confidence status.
FW6 — INCONCLUSIVE means unresolved, not no difference. Do not promote the treatment, declare equivalence, or average it into a false winner.
FW7 — Diagnose why learning failed: insufficient traffic, effect too small for available traffic, weak contrast, overlapping change, product/version change, audience/season shift, or measurement break.
FW8 — Reallocate. If traffic is structurally sparse, stop repeated micro-tests and return to community/owned evidence, stronger materially distinct hypotheses, or deterministic routing only when distinct intent is independently validated.

## Sparse-niche rules
1. Never rerun the same inconclusive treatment merely to obtain a desired winner.
2. Do not increase paid or community distribution solely to rescue an underpowered Store test unless that distribution is independently justified.
3. Prefer one strong contrast over multiple cosmetic variants when traffic is scarce.
4. Preserve inconclusive tests in the evidence ledger; absence of resolution is itself capacity information.
5. A Store conversion winner is provisional for the business until first/repeated specialist value remains intact. Conversion optimization must not select misleading acquisition.
6. If the required detectable effect is commercially trivial, do not spend sparse traffic proving it.
7. Mechanism choice remains separate: experiments resolve presentation uncertainty; CPP/CSL-style routing serves independently validated distinct intent.

## Portfolio application
MintTap: do not split scarce Store traffic across ticker-level cosmetic treatments. Normalize to investor jobs such as distribution/ROC interpretation and corporate-action/portfolio continuity. If traffic cannot resolve a material Store hypothesis, improve evidence upstream instead of manufacturing treatments.

LogMate: do not test airline, aircraft, or roster-vendor labels as segmentation proxies. Test only material pilot-workflow promises after the underlying capability and destination exist. Protect import/migration, Previous Total, duplicate reconciliation, record/export integrity and offline/device continuity from conversion-only optimization.

## Reusable experiment record
experiment_id; specialist_job; decision_to_change; baseline; treatment; material_difference; start/end; traffic allocation; platform status; estimated conversion/lift; confidence/interval where available; downstream first value; downstream repeated value; confounders; outcome_class; next_action.

## Next learning target
Build a cross-channel causal measurement contract for zero-cost launch/distribution: distinguish source attribution, incrementality, assisted discovery, dark/unattributed traffic, and downstream specialist value without inventing precision from sparse samples.
