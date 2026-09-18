# 101 — Sparse-Niche Store Experimentation & Evidence Budget

Last validated: 2026-09-18

## Canonical principle

**Do not spend scarce specialist traffic on experiments that cannot change a decision.**

For narrow professional apps, experimentation is an evidence-allocation problem before it is an A/B-testing problem. MintTap and LogMate can have materially smaller qualified audiences than mass-market apps; splitting those users across weak hypotheses can delay learning, create inconclusive results, and optimize Store conversion while failing to improve first value or useful return.

## First-party platform facts

### Apple Product Page Optimization (PPO)
- Apple PPO can test up to three treatments against the original product page using app icons, screenshots, and previews.
- Apple explicitly notes that more treatments divide traffic and can increase the time required to reach a useful conclusion.
- The developer chooses the treatment traffic proportion; that traffic is divided evenly among treatments.
- App Store Connect provides an estimated test duration using existing daily impressions/new downloads and a selected conversion-rate improvement target. The estimate is guidance, not a guarantee.
- A test runs for up to 90 days unless manually stopped.
- Results appear after at least five first-time downloads are associated with the test.
- A new app version released during a running test can affect results when tested assets/metadata are implicated.
- PPO is for the default product page; it is not available for Custom Product Pages.

Authoritative sources:
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/run-a-test

### Google Play Store Listing Experiments
- Google supports one default graphics experiment or up to five localized experiments concurrently per app.
- A default graphics experiment can test icon, feature graphic, and screenshots; localized experiments can also test descriptions.
- Google permits up to two variants against the current listing.
- The experiment setup estimates the time and number of acquisitions/opens/pre-registrations required for statistical significance.
- Advanced controls include audience percentage, minimum detectable effect (MDE), and confidence level. A larger confidence requirement can lengthen the experiment; an effect smaller than the selected MDE is treated as a draw.
- Google recommends testing one asset at a time to improve causal interpretability.
- Available target metrics include unique-user install clicks, open clicks, and pre-registration clicks.
- Store listing experiments automatically stop after six months.

Authoritative source:
- https://support.google.com/googleplay/android-developer/answer/12053285

## Why mass-market experimentation doctrine fails for niche apps

A technically available experiment is not automatically an economically sensible experiment. Qualified specialist traffic is finite. If 1,000 relevant Store visitors are divided among several low-value variants, those visitors cannot simultaneously provide clean evidence for higher-priority hypotheses. The cost is not media spend; it is **evidence opportunity cost**.

The relevant optimization problem is therefore:

`scarce qualified exposure → highest-value uncertainty → smallest interpretable experiment → decision → downstream validation`

not:

`available Store traffic → continuous A/B tests → maximize Store CVR`.

## The Evidence Budget

Before consuming live Store traffic, every proposed experiment must specify:

1. **Decision** — What action changes if treatment wins, loses, or draws?
2. **Mechanism** — Why should this single change affect a qualified user's decision?
3. **Minimum useful effect** — What lift is large enough to matter operationally?
4. **Traffic feasibility** — Can the relevant locale/job cohort plausibly supply enough observations within the platform window?
5. **Confound control** — Are release, pricing, major product changes, localization, seasonality, or external distribution likely to contaminate the comparison?
6. **Promise integrity** — Is every variant Q3/T3/L3-compatible and truthful to the production app?
7. **Downstream check** — If Store conversion improves, how will first value/useful return be checked before declaring a growth win?
8. **Opportunity cost** — Is this the best unresolved question on which to spend the cohort?

If the experiment cannot change a decision, do not run it.

## J0–J5 Store Experiment Evidence Gate

### J0 — Invalid experiment
False/misleading promise, manipulated professional claim, materially different target jobs mixed together, or a treatment that violates existing Q/T/L integrity gates.

**Action:** prohibit.

### J1 — Cosmetic curiosity
A test exists because the platform permits it: arbitrary color/icon/screenshot variations, no explicit mechanism, no decision rule, or no meaningful effect threshold.

**Action:** do not spend specialist traffic.

### J2 — Plausible hypothesis, infeasible evidence
A real hypothesis exists, but expected traffic is too sparse, too fragmented by locale/job, or too confounded to produce an interpretable decision in a reasonable window.

**Action:** use qualitative evidence, competitor/category evidence, fresh-user observation, or ship the lower-risk truthful default and observe aggregate behavior. Do not manufacture certainty from an underpowered test.

### J3 — Decision-capable Store experiment
One material hypothesis, production-valid treatments, predeclared decision rule/MDE, feasible traffic, stable measurement period, and controlled confounds.

**Action:** experiment is permitted.

### J4 — Store result survives product reality
The Store result is followed by downstream evidence showing that the acquired cohort reaches intended first value/useful return without a material trust/support/retention penalty.

**Action:** adopt as a qualified growth improvement, not merely a CVR improvement.

### J5 — Reusable evidence pattern
The mechanism repeats across independent periods, locales, or sufficiently similar niche products without violating audience/job semantics.

**Action:** add to reusable launch/growth playbook with scope conditions.

## Draws and inconclusive results are information

For sparse niches, `draw` or `more data needed` must not be converted into a winner by eyeballing point estimates. A draw can mean:
- the true effect is smaller than the minimum useful effect;
- traffic is insufficient;
- the variants are behaviorally equivalent;
- the cohort is heterogeneous;
- noise/confounding dominates the signal.

The correct response is often to keep the safer/current treatment and spend the next evidence budget on a larger product/positioning uncertainty.

## MintTap application

High-value hypotheses are job-semantic, not decorative. Examples:
- whether the first screenshot should establish YieldMax-specific portfolio tracking before showing detailed analytics;
- whether reverse-split/distribution/ROC evidence materially clarifies MintTap's specialist value;
- whether a localized Store promise actually improves qualified acquisition in a locale already proven L3.

Low-value default experiments include repeated icon/color changes with no specialist mechanism, ticker-only creative variants when the underlying user job is identical, and tiny copy changes that cannot alter a launch/growth decision.

A MintTap treatment that increases installs but attracts users expecting tax advice, brokerage execution, or unsupported YieldMax functions is J0/Q0 even if conversion rises.

## LogMate application

Before launch, scarce pilot testers are generally more valuable for workflow validation than cosmetic Store experiments. Until canonical persistence/manual entry/totals-search/offline-backup boundaries and first value are stable, direct observation of pilots using the product usually addresses a more consequential uncertainty than screenshot A/B testing.

Once Store traffic is sufficient, candidate tests should focus on real pilot jobs—e.g. whether the opening evidence makes manual log entry + totals/search immediately understandable—without implying regulatory/operator compliance not proven by the product.

## Cross-platform interpretation rule

Apple and Google experiments are not statistically interchangeable. Their treatment structures, available assets, target metrics, duration, and reporting differ. Do not pool an Apple PPO result and Google Play experiment into a single pseudo-sample. Treat them as separate evidence and look for mechanism-level replication.

## Operational ledger

For each experiment record:

`app → platform → locale → target job → hypothesis → treatment → changed asset → decision rule → MDE → confidence setting/platform method → traffic share → start/end → release/confound log → platform result → first-value check → useful-return check → trust/support incidents → J-class → decision`

## Stop rules

Stop or decline an experiment when:
- it cannot alter a decision;
- the production promise changes mid-test;
- a release or external event materially invalidates comparability;
- expected completion becomes operationally irrelevant;
- a trust/safety/professional-scope defect appears;
- the test reaches its platform limit without decision-capable evidence.

Do not repeatedly rerun near-identical weak tests until one happens to become significant.

## Reusable rule for future niche apps

The first scarce users should answer **product and promise uncertainty**, not decorative uncertainty. Store experimentation becomes valuable only after the product can keep its promise and the available cohort can support a decision.
