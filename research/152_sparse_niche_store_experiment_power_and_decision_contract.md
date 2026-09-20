# 152 — Sparse-Niche Store Experiment Power and Decision Contract

Date: 2026-09-20

## Why this addition exists

MintTap and LogMate serve narrow professional/specialist audiences. Native Store experimentation is useful, but low traffic creates a recurring failure mode: treating the existence of an A/B-test feature, an early conversion-rate difference, or a platform reporting threshold as sufficient evidence to change the canonical Store page.

This note freezes a cross-platform decision contract for sparse-niche Store experiments. It complements Apple BB and Google Play BA rather than replacing their platform-native semantics.

## Current authoritative platform facts

### Apple Product Page Optimization (PPO)

Apple currently supports one PPO test at a time, up to three treatments, configurable traffic allocation, and a maximum run of 90 days. Users are randomly selected and continue to see the same treatment during the test. Apple exposes impressions, conversion rate, improvement and confidence. Apple recommends waiting until a treatment is declared better or worse than baseline with at least 90% confidence before applying/stopping on that basis. Apple also provides a duration estimate based on existing daily impressions/downloads and the desired conversion-rate improvement. Results become visible after five first-time downloads; that five-download threshold is a reporting threshold, not evidence of adequate statistical power.

Apple also explicitly notes that adding more treatments can increase the time required to obtain meaningful results and recommends considering how many elements are changed so causal interpretation remains possible. PPO is not available on Custom Product Pages.

Primary sources:
- https://developer.apple.com/app-store/product-page-optimization/
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test/
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/run-a-test/
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/configure-test-treatments

### Google Play Store Listing Experiments

Google Play currently supports one default-graphics experiment or up to five localized experiments at the same time per app. A default graphics experiment can test icon, feature graphic and screenshots; localized experiments can also test descriptions. A test can use up to two variants against the current listing.

Google exposes a target metric (unique-user install clicks, open clicks or pre-registration clicks), estimated time/sample requirement, experiment audience percentage, minimum detectable effect (MDE), confidence level, confidence interval and result states including more-data-needed/tie. Google recommends changing one asset at a time when causal attribution matters. Experiments auto-stop after six months if not ended earlier.

Primary source:
- https://support.google.com/googleplay/android-developer/answer/12053285

## New operating principle: experimentability is a traffic property

A hypothesis can be strategically important but still be untestable with a native Store A/B test at current traffic.

Therefore:

`important hypothesis ≠ runnable experiment`

and

`visible result ≠ powered result ≠ business-valid result`.

For sparse-niche apps, the correct decision can be **do not run the test yet**. The opportunity cost of splitting already-small traffic across multiple treatments can exceed the information value.

## BP0–BP5 Sparse-Niche Store Experiment Gate

### BP0 — Decision identity

Before creating a test, write the exact decision that would change if the result were credible. A test without a precommitted decision is exploratory observation, not a release decision instrument.

Record:
- platform and listing/localization;
- baseline version/date;
- single primary hypothesis;
- primary target metric;
- intended downstream guardrail;
- candidate action for win/loss/inconclusive.

### BP1 — Traffic and power feasibility

Use the platform's own duration/sample estimate where available. Record baseline traffic/conversion, traffic allocation, number of variants, target MDE and expected duration.

Do not launch merely because the UI permits it. If expected time exceeds the platform window or business relevance horizon, reduce variants, increase allocated traffic only if safe, test a larger meaningful effect, aggregate only genuinely equivalent traffic, or classify the hypothesis as currently untestable.

Never reinterpret Apple's five-first-download reporting threshold as a sample-size target.

### BP2 — Isolation and contamination control

Prefer one meaningful creative/value-proposition change per experiment when causal interpretation matters. Record concurrent events that can change Store traffic or conversion: app release, press/community spike, featuring, seasonality, pricing, major review-rating movement, localization change, or external campaign.

Do not combine Apple CPP intent routing (BN) or Google CSL routing (BO) with default-page randomized experiments as if they were the same population. Routing answers **which proof for which intent**; randomized experiments answer **which treatment performs better within an eligible population**.

### BP3 — Native statistical semantics

Preserve the platform's result semantics rather than translating them into a home-grown universal winner flag.

Apple: confidence/improvement and platform status.
Google: confidence interval, MDE, target metric and result state.

`inconclusive`, `more data needed`, `tie`, or an underpowered test remains exactly that. Do not select the numerically highest observed conversion rate as the winner.

### BP4 — Sparse-niche stopping discipline

Do not repeatedly inspect an early percentage difference and manually stop when it looks favorable. Use platform-native significance/result states and the precommitted decision rule.

A test that reaches the platform time limit without adequate evidence is not a failed treatment; it is an information-limit result. Preserve it in the experiment registry so the same low-power test is not rerun indefinitely.

### BP5 — Downstream value validation

A Store conversion win is a distribution-layer result, not proof of product growth quality.

Before canonical promotion, ask whether acquired users reach the promise represented by the treatment and then meaningful/repeated core value. Where Store-native experiment tooling cannot provide that causal downstream join, label the downstream relationship as observational/unknown rather than attributing retention or ad revenue to the treatment.

For MintTap, a treatment that increases installs but attracts users expecting unsupported brokerage automation, tax certainty, or investment advice is a failure despite higher Store conversion. Financial claims continue to inherit BE provenance requirements.

For LogMate, a treatment that raises installs through implied regulatory/compliance capability that the product does not substantiate is invalid regardless of conversion lift.

## Minimal experiment registry

Each experiment should preserve:

`experiment_id | app | platform | listing/localization | baseline version | hypothesis | changed asset | traffic allocation | variants | target metric | baseline traffic/conversion | MDE | confidence setting/native status | estimated duration | actual duration | concurrent contamination | result | decision | downstream evidence | observation cutoff`

Do not collapse Apple and Google statistical fields when their native definitions differ.

## Zero-cost marketing consequence

Native Store experiments cost no media spend, but they consume scarce organic traffic. For niche apps, traffic is an experimental budget. Fragmenting it across weak hypotheses is therefore a real acquisition cost.

Priority order:
1. use community/search/review evidence to identify a material uncertainty;
2. determine whether BN/BO intent routing is the correct tool instead of randomization;
3. run a native randomized experiment only when current traffic can resolve a decision-sized effect;
4. preserve inconclusive results rather than manufacturing a winner;
5. validate that the promoted treatment remains truthful and compatible with downstream core value.

## MintTap next evidence request

When Store consoles are accessible, capture the current PPO/Store Listing Experiment inventory and each platform's own feasibility estimate before proposing new tests. For MintTap's likely low-volume specialist traffic, default to one treatment/variant and one major uncertainty unless actual traffic demonstrates that more arms remain adequately powered.

## Reusable company rule

**A zero-cost Store experiment is not free if it spends scarce specialist traffic without enough power to change a decision.**
