# Research 350 — Mediation Expansion Gate for Sparse-Niche Apps

Validated: 2026-10-01

## Decision

Do not add mediation merely because AdMob supports additional demand sources. For a sparse-niche professional utility, mediation is an optimization layer that comes **after** baseline eligibility, serving, placement safety, measurement, and sufficient traffic are established.

## Authoritative platform facts

Google describes AdMob Mediation as a way to serve ads from multiple sources to maximize fill rate and revenue. Before mediating a format, that format must already be integrated. Google also requires correct SDK initialization so participating networks can serve, and notes that mediation adds privacy obligations: applicable GDPR/US-state settings must include mediation partners or those partners may fail to serve.

Google's current implementation guidance also says:
- mediated networks can have their own presentation policies;
- native mediation must comply with the policy of the network that actually serves the ad;
- banner refresh should be disabled in third-party source UIs when AdMob controls refresh, to avoid double refresh;
- source-specific rendering requirements can determine whether an impression is counted.

Therefore a new demand source changes more than auction competition: it expands SDK/configuration, consent, policy, rendering, latency, reconciliation, and debugging surface.

## Sparse-niche implication

For MintTap, low or uneven specialist traffic can make source-level differences hard to distinguish from ordinary variance. Adding networks before the baseline funnel is observable can convert one unknown into several unknowns.

Mediation is eligible only after:
1. app-ads.txt/readiness and consent/request eligibility are known;
2. current ad surfaces pass protected-workflow and accidental-click review;
3. request → load → impression → paid-event measurement is functioning;
4. estimated/finalized revenue can be reconciled sufficiently for decisions;
5. the baseline shows a material monetization constraint that additional demand could plausibly solve;
6. enough eligible traffic exists to evaluate the change without relying on anecdotal eCPM spikes.

## JL0–JL9 — Mediation Expansion Gate

JL0 — Baseline eligibility: app/readiness, consent and request eligibility known.
JL1 — Surface integrity: placement is safe before changing demand.
JL2 — Funnel observability: request/load/impression/paid-event chain works.
JL3 — Constraint diagnosis: identify fill, competition, geography, latency or another actual bottleneck.
JL4 — Traffic sufficiency: enough eligible observations exist to evaluate source-level effects.
JL5 — Partner/privacy delta: consent and partner declarations mapped before integration.
JL6 — SDK/config delta: adapter, initialization, refresh, rendering and version requirements mapped.
JL7 — Policy delta: serving-network policy obligations reviewed.
JL8 — Revenue-quality ledger: incremental revenue evaluated with latency, task quality, retention, invalid-traffic/policy state and reconciliation.
JL9 — Decision: KEEP-SINGLE / TEST-MEDIATION / KEEP-MEDIATION / ROLLBACK / HOLD / UNKNOWN.

## MintTap

Do not use mediation as a substitute for diagnosing missing requests, poor load rate, invalid traffic, weak placement, consent gating, or low traffic. Preserve non-intrusive ad behavior. A source that raises gross estimated revenue but worsens latency, click quality, task completion, retention, or reconciliation can be rejected.

## LogMate

At launch, professional workflow integrity outranks demand-source breadth. If ads are adopted later, establish one clean baseline first. Do not introduce multiple ad SDKs merely to manufacture inventory competition before real pilot usage demonstrates a monetization constraint.

## Reusable rule

**Demand-source breadth is not monetization maturity.**

Sequence:
eligibility → safe surface → observable baseline → diagnosed constraint → traffic sufficiency → privacy/policy/config review → controlled mediation test → reconciled sustainable revenue.

## Next operational target

Audit MintTap production monetization against JR/JS/JK/JL together. Do not recommend mediation until the production evidence identifies a demand-side constraint and the baseline is measurable.
