# 135 — Google Play Store Listing Experiment Decision Semantics

Validated: 2026-09-20

## Decision
Google Play Store Listing Experiments are randomized creative tests, but their current result contract must be preserved exactly. They must not be conflated with Custom Store Listing (CSL) deterministic intent routing, nor with completed acquisition or downstream product activation.

## Current authoritative semantics
Google Play Console currently lets a published app run Store Listing Experiments on default or custom Store Listings. A test compares the current listing with experimental variants. The target metric is explicitly selected at experiment creation and is currently one of:
- Unique user install clicks
- Unique user open clicks
- Unique user pre-registration clicks

The experiment setup estimates the time and target-event volume required to reach a statistically significant result. Advanced controls include number of variants (up to two experimental variants), experiment audience percentage, minimum detectable effect (MDE), and confidence level.

Google defines MDE operationally as the minimum difference between variant and control required to declare one better; a difference smaller than that is treated as a draw. Confidence level controls how often the reported confidence interval is expected to contain the true listing performance; increasing it lowers false-positive risk but can lengthen the test.

The result surface uses the chosen target metric and can report a best/better option, Draw, or More data needed. Recommendations can include applying a winning variant or keeping the current listing. More data needed is not evidence of equivalence or failure. Experiments automatically stop after six months; no variant is automatically applied at that point and traffic returns to the current listing.

## Important semantic warning
The current help page's label `Unique user install clicks` is accompanied by the definition: `The number of users who installed your app, who didn't have it installed on any other devices at the time.` This wording is not safely reducible to the generic phrase "click" or to a cross-platform conversion metric. Preserve Google's exact metric name, displayed definition, experiment target, and reporting surface in the evidence registry. Do not infer a different event from the label alone.

Likewise, an experiment outcome is evidence about the selected Play target metric under randomized Store creative exposure. It is not by itself evidence that the winning treatment improves first open, MintTap first value, useful return, retention, or ad-compatible lifetime value. Those require downstream evidence.

## BA0–BA5 — Play Experiment Decision Gate

### BA0 — Uncontrolled creative change
Store assets/text are changed without a randomized experiment or an explicit non-experimental reason. No causal creative claim is allowed.

### BA1 — Experiment exists, contract incomplete
An experiment ran, but target metric, audience allocation, variant count, MDE, confidence level, listing/language, dates, or result state is missing. Result is archival, not decision-grade.

### BA2 — Native result captured
Exact Play experiment contract and native result are retained, but downstream intent/product-value continuity is unknown. A native creative decision may be considered, but no product-growth claim is allowed.

### BA3 — Decision-grade Store experiment
Require all of:
- validated AX destination/listing and specialist intent;
- experiment type and listing/language scope;
- control and exact treatment assets/copy;
- target metric exact native name and displayed definition;
- audience percentage and variant count;
- MDE and confidence level;
- start/end dates and whether test auto-completed/stopped manually;
- native result state: winner/better, draw, more-data-needed, or current-best;
- confidence-interval/recommendation evidence retained where available;
- no concurrent material Store/product/channel change that invalidates interpretation;
- AY evidence-state/censoring discipline and AZ metric-semantic version retained.

### BA4 — Downstream-validated creative
BA3 plus qualified acquisition/first-open/first-value/useful-return evidence shows that the Store-target improvement does not merely shift a proximal metric while degrading product utility or audience quality.

### BA5 — Reusable experiment system
Multiple properly registered tests across materially distinct hypotheses establish which creative principles transfer and which are app/intent/localization specific. Failed/draw/null tests remain in the registry to prevent repeated testing and survivorship bias.

## Operating rules for sparse niche apps
1. Do not lower confidence or inflate MDE merely to force a fast answer from scarce traffic without recording the resulting decision trade-off.
2. `More data needed` is a legitimate result state. Do not broaden MintTap beyond real YieldMax-investor intent or LogMate beyond pilots to manufacture experiment volume.
3. Do not run multiple variants simply because Play allows them. Sparse traffic generally favors one strong hypothesis versus control unless there is enough traffic for the planned design.
4. Test one material creative hypothesis at a time where practical. Google's own guidance recommends one asset at a time to improve causal interpretability.
5. Do not interpret a CSL's observed performance difference as an experiment result. CSL routing selects audiences; Store Listing Experiment assignment randomizes creative within the eligible listing population.
6. A native winning recommendation authorizes consideration of the Store treatment, not an automatic company-wide rollout. Check specialist-intent truthfulness and downstream first value/useful return.
7. Preserve null/draw results. They are knowledge assets and prevent cycling through attractive but unsupported creative ideas.

## MintTap application
Before any MintTap Play creative test, register the specialist job and destination first. Examples may include distribution/portfolio tracking, ROC/tax-adjustment continuity, or reverse-split-aware history only when AX evidence shows these are materially distinct Store promises. Do not create ticker-level experiments merely to produce more tests.

For each test, retain: hypothesis, listing/CSL, locale, exact control/treatment, target metric, metric definition, audience split, MDE, confidence, expected completion, dates, result state, recommendation, and downstream first-value/useful-return observations. A Play winner that raises the selected Store target but attracts users who fail to reach MintTap first value is not a growth winner.

## LogMate application
Predefine the BA contract before launch, but do not seek traffic solely to power experiments. Pilot traffic is scarce and professionally specific. Run tests only after the underlying pilot job, truthful Store promise, and sufficient naturally qualified traffic exist.

## Reusable chain
`validated specialist intent → AX deterministic destination → BA randomized creative hypothesis → native Play target result → AY/AZ interpretation discipline → qualified acquisition → first value → useful return`

## Sources
- Google Play Console Help, “Run A/B tests on your store listing,” accessed 2026-09-20: https://support.google.com/googleplay/android-developer/answer/12053285
- Google Play Console Help, “Get a high-level view of your app’s growth performance and opportunities,” accessed 2026-09-20: https://support.google.com/googleplay/android-developer/answer/16394358

## Unresolved
- Actual MintTap Play Console experiment inventory and exact live result cards are not yet observed.
- Need to verify whether MintTap has historical experiments created under older acquisition-oriented semantics and, if so, version them separately from current target-metric semantics.
- Need downstream first-value/useful-return instrumentation before BA4 judgments are possible.
