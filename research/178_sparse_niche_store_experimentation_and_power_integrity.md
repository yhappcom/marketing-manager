# Research 178 — Sparse-Niche Store Experimentation and Power Integrity

Updated: 2026-09-22

## Why this matters
MintTap and LogMate serve narrow professional audiences. For sparse-traffic apps, Store A/B testing can easily produce inconclusive evidence, overfit transient traffic, or consume months while delaying a clearly differentiated specialist presentation. The correct objective is not “run more experiments”; it is to run only experiments capable of resolving a material decision.

## Current platform facts

### Apple Product Page Optimization (PPO)
- A PPO test can use up to three treatments and a developer-selected traffic percentage; traffic is split among treatments.
- Apple estimates duration and required impressions using historical daily impressions and first-time downloads plus the requested conversion improvement.
- A test runs for at most 90 days unless manually stopped earlier.
- Results begin appearing only after at least five first-time downloads are associated with the test.
- Apple’s current analytics use a Bayesian method. Results can receive higher/lower-performing labels at 90% confidence; Apple can also mark a test inconclusive when current traffic makes reaching that confidence within the test horizon unlikely.
- PPO does not test Custom Product Pages. A new app version containing assets/metadata involved in a live test can affect results.
- Up to three treatments are technically available, but more treatments divide evidence and can lengthen time to a useful result.

### Google Play Store Listing Experiments
- Experiments can run on default and custom Store Listings.
- The target metric is explicitly chosen: unique-user install clicks, open clicks, or pre-registration clicks. These are different outcomes and must not be collapsed into a generic “conversion.”
- Google exposes expected time/sample needs and allows configuration of number of variants, audience percentage, minimum detectable effect (MDE), and confidence level.
- Google recommends testing one asset at a time to improve causal interpretation.
- A result can remain “More data needed” or become a draw; experiment autocompletion occurs after six months.
- Current limits include one default graphics experiment or up to five localized experiments concurrently per app, and up to two experimental variants against the current listing.

## Core finding: experiment capacity is not experiment viability
A platform allowing multiple variants does not imply that a sparse-niche app has enough traffic to identify small effects. Splitting a small audience among multiple treatments lowers evidence per arm. Asking a low-volume app to detect a small uplift at high confidence can turn a useful marketing question into a long-running inconclusive test.

For this business, test design begins with the decision and the minimum effect large enough to matter—not with the available number of variants.

## CP0–CP5 Sparse-Niche Store Experiment Power Integrity Gate

### CP0 — Decision identity
Write the decision the test will change. If either result would lead to the same action, do not run the test.

### CP1 — Metric identity
Preserve the platform-native outcome exactly. Apple PPO estimated conversion and Google install/open/pre-registration targets are not interchangeable. Specify first-time/acquisition state where applicable.

### CP2 — Effect-size materiality
Define the minimum effect that would justify changing the Store asset or copy. Do not optimize for detecting tiny uplifts that have no meaningful downstream business value.

### CP3 — Traffic/power feasibility
Use the platform’s duration/sample estimator before launch. Account for localization, treatment count, audience allocation, and the finite platform horizon. If available traffic cannot resolve the material effect in a useful period, mark the proposed test `underpowered/not viable` rather than launching it by habit.

### CP4 — Experimental isolation and release integrity
Prefer one meaningful variable family per experiment. Record treatment assets, locales, start/end dates, app releases, Store metadata changes, CPP/CSL changes, featuring/events and material external traffic changes that could alter interpretation. Never silently treat a contaminated test as clean causal evidence.

### CP5 — Downstream-value decision
A Store winner is not automatically a growth winner. After applying a treatment, verify first useful value and repeated useful value where observability permits. A listing that increases shallow installs but attracts poorer-fit users can be rejected despite Store lift.

## Sparse-niche operating rules
1. `platform permits test ≠ test has adequate power`.
2. `more variants ≠ more learning`.
3. `five Apple first-time downloads ≠ sufficient evidence`; it is only the threshold for results to begin appearing.
4. `90% Apple confidence ≠ 90% uplift` and must not be presented as such.
5. `More data needed / inconclusive / draw ≠ no effect`; it means the experiment did not resolve the decision under its evidence conditions.
6. `Store experiment winner ≠ incremental retained-value winner`.
7. `small detectable effect ≠ worthwhile business effect`.
8. `longer test ≠ automatically better test`; traffic composition and intervening releases can change.
9. Do not repeatedly re-test near-identical variants until one happens to win. Maintain a hypothesis/test registry to prevent optional-stopping and winner-shopping behavior.

## MintTap application
Before creating any PPO or Play Store Listing Experiment, capture current qualified traffic by locale and the platform estimator. Prefer a single bold, truthful hypothesis derived from observed YieldMax-investor intent over several cosmetic variants. If traffic cannot resolve a material difference, use validated search/community language, Store policy constraints, product truth and downstream behavior to make the best deterministic choice, then monitor it rather than manufacturing statistical certainty.

Do not dilute specialist vocabulary merely to chase generic finance-app conversion. A treatment that increases Store acquisition while reducing the proportion reaching the relevant portfolio/distribution/ROC workflow is not a successful growth treatment.

## LogMate application
Prelaunch/early-launch traffic is likely to be especially sparse. Do not make PPO/Play experimentation a release prerequisite. First establish truthful pilot-specific positioning, locale vocabulary, first useful value and enough stable traffic. Only then run tests whose expected effect is large enough to alter a launch/growth decision. Regulatory/compliance wording is not an experimental creative variable unless the claim is independently substantiated.

## Reusable company experiment registry
For every Store experiment preserve:
- platform / Store object / locale;
- hypothesis and decision changed;
- control and exact treatment assets;
- target metric semantics;
- requested MDE/effect threshold where exposed;
- confidence setting/method where exposed;
- traffic allocation and variants;
- platform-estimated sample/time;
- actual start/end and stop reason;
- app/Store releases and major traffic events during test;
- result state including inconclusive/draw/more-data-needed;
- applied/not-applied decision;
- downstream first/repeated useful-value evidence;
- contamination/interpretation notes.

## Sources
- Apple Developer, Create a product page optimization test / Run a test / Configure test treatments / Product Page Optimization analytics, accessed 2026-09-22.
- Google Play Console Help, Run A/B tests on your store listing, accessed 2026-09-22.

## Next evidence target
Audit actual MintTap PPO and Play Store Listing Experiment history before proposing new tests. Preserve inconclusive and abandoned tests rather than only winners. Calculate which current locale/surface has enough traffic to resolve a business-material effect using the platform estimator; if none does, explicitly record experimentation as underpowered and redirect effort to higher-information zero-cost work.