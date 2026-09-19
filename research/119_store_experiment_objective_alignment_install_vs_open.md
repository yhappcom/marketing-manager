# 119 — Store experiment objective alignment: install vs open

Validated: 2026-09-19

## Why this matters

Sparse professional apps can easily optimize the wrong Store outcome. A creative treatment that increases installs is not necessarily the treatment that produces users who open the app, reach first value, return for the specialist job, or support sustainable ad revenue. Store-native experiments are useful, but their native target metric is only one layer of the company growth chain.

## Authoritative platform facts

### Google Play Store Listing Experiments
Google Play currently lets a Store Listing Experiment choose one target metric: **Unique user install clicks, Unique user open clicks, or Unique user pre-registration clicks**. The experiment setup estimates time/sample needs, supports up to two variants, lets the operator choose audience percentage, minimum detectable effect and confidence level, and recommends testing one asset at a time. Results are interpreted using the target metric, confidence interval and minimum detectable effect. Experiments automatically stop after six months.

Google defines Unique user open clicks as installed users who opened the app. This is closer to initial engagement than install alone, but it is not evidence that the user completed the specialist job or reached first value.

Source: Google Play Console Help, “Run A/B tests on your store listing,” accessed 2026-09-19.
https://support.google.com/googleplay/android-developer/answer/12053285

Google Play Grow overview separately exposes acquisitions, first opens, monthly active users/devices and seven-day retention. These metrics should be used as downstream context rather than assuming an experiment winner is a retained-user winner.

Source: Google Play Console Help, “Get a high-level view of your app’s growth performance and opportunities,” accessed 2026-09-19.
https://support.google.com/googleplay/android-developer/answer/16394358

### Apple Product Page Optimization
Apple Product Page Optimization evaluates treatments primarily through product-page conversion. Apple currently uses built-in Bayesian analysis; results begin appearing after at least five first-time downloads are attributed to the test. A treatment may be labeled Performing Better/Worse when confidence reaches 90%, and Apple can label a test Likely to be Inconclusive when current traffic/results are unlikely to produce a conclusive result. Tests run for at most 90 days unless stopped earlier. More treatments divide traffic and can lengthen time to a conclusion.

Source: Apple App Store Connect Analytics Help, “Product Page Optimization,” accessed 2026-09-19.
https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization

Source: Apple App Store Connect Help, “Create a test,” accessed 2026-09-19.
https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test

## Canonical principle

**A Store-native experiment may choose the Store treatment; it does not by itself choose the best business treatment.**

Use the platform experiment for the causal question it can answer, then require downstream evidence appropriate to the app before declaring a durable growth winner.

For an ad-supported niche app the hierarchy is:

`Store exposure → experiment target metric → first open → specialist first value → cadence-appropriate useful return → legitimate ad-bearing use`

Do not collapse these stages into “conversion.”

## AK0–AK5 — Experiment Objective Alignment Gate

### AK0 — harmful optimization
A treatment wins a Store metric through misleading promise, irrelevant traffic, dark pattern, unsupported claim, or a change that damages product trust/retention.

### AK1 — install winner only
The team adopts the treatment because installs/conversion increased, with no downstream check. This is insufficient for MintTap and LogMate.

### AK2 — native-metric discipline
The hypothesis, treatment, target metric, audience and stopping rule are documented and the platform-native result is interpreted correctly, but downstream specialist utility is unknown.

### AK3 — business-aligned experiment
Required:
- one explicit specialist-intent hypothesis;
- one primary Store asset/claim change where practical;
- target metric selected before launch;
- sample/duration feasibility checked before spending scarce traffic;
- no manual early winner declaration from noisy interim movement;
- first-value and useful-return definitions already exist outside the Store experiment;
- treatment rollout requires no material deterioration in those downstream measures when observable;
- result is labeled `Store winner`, `business-compatible winner`, `draw`, `inconclusive`, or `insufficient downstream evidence` rather than simply `winner`;
- experiment owner and post-rollout review date are recorded.

### AK4 — observed utility alignment
The treatment has a valid Store-native positive result and post-rollout/cohort evidence is consistent with qualified first value/useful return. Do not claim the Store treatment caused downstream retention unless the measurement design supports that causal inference.

### AK5 — reusable portfolio system
A shared experiment registry across apps records hypothesis, platform, surface, intent family, target metric, MDE/confidence or Apple confidence state, traffic allocation, result, rollout, first-value check, useful-return check, and retirement/retest trigger.

## Sparse-niche rule

Traffic is an experimental budget. MintTap and especially prelaunch/early LogMate must not fragment low traffic across many weak variants merely because the platform allows it.

Before launching an experiment ask:
1. Is the decision important enough to justify consuming scarce Store traffic?
2. Is the proposed effect large enough to matter operationally?
3. Does the platform estimate indicate a plausible conclusion within the available window?
4. Would a strong directional redesign teach more than several tiny copy/color variants?
5. Is there a downstream first-value/useful-return measure ready to catch low-quality acquisition?

If not, keep the current truthful page and gather demand/product evidence instead.

## MintTap application

Prefer hypotheses tied to materially different YieldMax-investor comprehension, not cosmetic preference. Example: whether the first screenshot should establish “YieldMax portfolio tracking” versus immediately showing a specialized distribution/ROC workflow.

On Google Play, **Unique user open clicks** can be preferable to install clicks when the question is whether a listing attracts users who at least begin using the app. It still does not replace MintTap first value (for example, successfully reaching the core portfolio-tracking value) or K3 useful return.

Do not call an experiment successful if it increases opens while downstream portfolio setup/meaningful use deteriorates.

## LogMate application

Do not spend scarce early pilot traffic on Store experiments before manual entry, persistence, totals/search, offline/backup and first-value uncertainty are stable enough to interpret acquisition quality. A prelaunch professional niche app usually gains more information from product/pilot evidence than from underpowered creative tests.

When Store experimentation becomes justified, test comprehension of the actual pilot job, not generic aviation aesthetics.

## Cross-platform caution

Apple PPO and Google Play Store Listing Experiments are not statistically or operationally interchangeable:
- Apple currently reports Bayesian confidence and uses a 90% confidence labeling threshold; tests have a 90-day maximum.
- Google exposes configurable minimum detectable effect/confidence controls and a choice among install/open/pre-registration target metrics; experiments auto-complete at six months.
- A treatment that wins on one Store is not automatically transferable to the other.

Never pool the two platforms into a single “A/B result.” Preserve platform, locale, audience, surface and target metric.

## Decision record schema

`experiment_id | app | platform | intent_family | surface | hypothesis | changed_element | native_target_metric | traffic | MDE/confidence configuration | start/end | native_result | first_value_check | useful_return_check | decision | owner | retest_trigger`

## Unresolved evidence

- MintTap's actual historical Apple PPO and Play Store Listing Experiment inventory/results are not yet audited.
- MintTap's production first-value event and cadence-appropriate useful-return event remain unresolved, so no Store winner can yet qualify as AK4.
- LogMate does not yet have sufficient production/pilot evidence to justify Store experimentation as a launch prerequisite.
