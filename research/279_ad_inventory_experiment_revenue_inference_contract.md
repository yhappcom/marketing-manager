# Research 279 — Ad-Inventory Experiment & Revenue-Inference Contract

Validated: 2026-09-28

## Decision
For specialist utility apps, an ad change is not a revenue win merely because observed revenue rises afterward. Inventory experiments must distinguish the placement/cooldown treatment from session mix, consent composition, traffic quality, ad-supply variation, paid-event precision, and downstream product-value damage.

Canonical experiment chain:
`protected workflow → eligible opportunity → predeclared treatment → exposure assignment → request/load/impression → paid event + precision → first/repeated core value → confounder audit → reconciled marginal value → KEEP / REDUCE / REMOVE / HOLD`

## GB0–GB8
GB0 — Protected-workflow gate. Never experiment by introducing interruption inside trust-, data-, safety-, reconciliation-, completion-, or record-integrity workflows.

GB1 — Single decision. State the exact change being tested: placement, format, cooldown/frequency, or eligibility rule. Do not bundle several inventory changes if the purpose is causal learning.

GB2 — Exposure denominator. Measure eligible opportunities and actual ad exposures, not only sessions or requests. A request increase can reflect more opportunities, more aggressive requesting, or different traffic.

GB3 — Delivery decomposition. Preserve `eligible → request → load/fill → impression → paid event`. A revenue change caused by supply/fill is not evidence that added interruption is better.

GB4 — Revenue precision. Capture impression-level revenue with currency and precision type. Google documents PRECISE, ESTIMATED, PUBLISHER_PROVIDED and UNKNOWN values; these are not interchangeable measurement quality.

GB5 — Composition audit. Compare material shifts in geography/session mix, new-vs-returning users, consent/request eligibility, app version, traffic source and ad-source mix before attributing lift to the treatment.

GB6 — Product-value guardrails. Observe first-core-value completion, repeated-core-value/retention proxy, post-exposure abandonment and protected-workflow violations. Unmeasured damage is UNKNOWN, not zero.

GB7 — Marginal inference. Evaluate treatment delta rather than gross revenue:
`Δ sustainable value = Δ reconciled ad revenue − downstream specialist-value loss − retention/trust loss − policy/traffic-quality risk − operator cost`.
When sample or measurement cannot distinguish the treatment from major confounders, classify INCONCLUSIVE rather than winner/loser.

GB8 — Reallocation. KEEP only when revenue improvement survives reconciliation and guardrails. REDUCE/REMOVE when product-value harm or interruption cost is material. HOLD when traffic, precision, consent, supply or composition makes inference unreliable.

## Current AdMob evidence
Google Mobile Ads exposes a paid callback associated with an impression. The returned AdValue includes value in micros, currency and precision. Google explicitly distinguishes UNKNOWN, ESTIMATED, PUBLISHER_PROVIDED and PRECISE values. In mediation, optimized sources can produce estimated values; manual waterfall values can be publisher-provided when better estimation is unavailable.

Google recommends registering the paid-event listener before showing the ad and forwarding the event immediately to reduce missed callbacks/discrepancies. AdMob also states that some discrepancy between impression-level revenue and reports is expected, and zero-value paid events must still be counted when computing impression totals.

AdMob frequency capping can constrain impressions per user over a configured time period at app or ad-unit scope for supported full-screen formats. Treat the effective cap as part of the experiment configuration; otherwise a cooldown test can be silently bounded by a platform-side cap.

Google's interstitial implementation guidance prohibits overwhelming users with recurring interstitials and says interstitials should not be placed after every user action. Policy compliance is a floor, not an optimization target: a technically compliant frequency can still be wrong for a specialist utility workflow.

## Sparse-niche experiment rule
Do not demand classical experiment precision that the app cannot support. Prefer one materially different treatment, a stable observation window, and explicit confounder logging over many simultaneous micro-tests. If traffic is too sparse, use a reversible staged change and classify the result as directional/INCONCLUSIVE unless evidence is strong enough to change the decision.

Do not optimize eCPM in isolation. Higher eCPM can coexist with fewer eligible opportunities, worse retention, different geography, a different ad-source mix, or fewer valuable sessions.

## Minimum experiment ledger
Record at least:
- experiment/treatment ID and exact change;
- app version and observation window;
- protected/eligible surface;
- eligible opportunities;
- requests, loads/fill, impressions;
- paid-event count, value, currency, precision distribution;
- effective product cooldown and AdMob app/ad-unit cap;
- consent/request-eligible share where observable;
- new/returning and material geography/source/session-mix shifts where observable;
- first-core-value completion;
- repeated-value/retention proxy;
- post-exposure abandonment;
- policy/traffic-quality events;
- reconciled revenue;
- decision and confidence note.

## Product application
**MintTap:** do not test more full-screen exposure inside portfolio interpretation, tax adjustment, correction, transaction/reinvestment accounting, or other trust-sensitive financial work. Candidate tests belong at genuine secondary transitions. Revenue lift must survive paid-event reconciliation and portfolio-use/repeat-value guardrails.

**LogMate:** import/migration, Previous Total, duplicate reconciliation, flight-entry completion, record integrity and export remain protected. If monetization is introduced, establish a non-intrusive baseline first; only then test one bounded inventory variable at a time on secondary surfaces.

**Future niche apps:** define protected workflow, eligible opportunity and experiment ledger before the first density experiment. This makes monetization reusable without allowing ad inventory to redefine the product.

## Authoritative sources
- Google Mobile Ads / AdMob, Impression-level ad revenue, accessed 2026-09-28: https://developers.google.com/admob/unity/impression-level-ad-revenue
- Google AdMob Help, Use impression-level ad revenue, accessed 2026-09-28: https://support.google.com/admob/answer/11322405
- Google AdMob Help, Set frequency capping for apps or ad units, accessed 2026-09-28: https://support.google.com/admob/answer/6244508
- Google AdMob Help, Disallowed interstitial implementations, accessed 2026-09-28: https://support.google.com/admob/answer/6201362

## Next target
Ad-revenue retention guardrail calibration: define which first/repeated-value and abandonment signals are decision-capable at sparse scale, how long to observe them, and when monetization evidence is too weak to justify additional inventory.
