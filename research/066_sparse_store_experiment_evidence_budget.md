# 066 — Sparse Store Experiment Evidence Budget

Date: 2026-09-17
Status: CANONICAL RESEARCH

## Question
When a niche app has sparse qualified Store traffic, when should Apple Product Page Optimization or Google Play Store Listing Experiments be used, and when would experimentation merely fragment evidence?

## Authoritative platform facts refreshed 2026-09-17

### Apple
- Product Page Optimization (PPO) can test up to three treatments against the default product page and randomly assigns treatments to the audience configured by the developer.
- Apple explicitly warns that adding more treatments makes a test take longer to reach a conclusive result.
- PPO evaluates estimated conversion-rate lift together with confidence in result reliability.
- PPO does not operate on Custom Product Pages (CPPs).
- CPP analytics are separate. Apple exposes page views, downloads, conversion and downstream value metrics; data for an individual CPP appears only after at least five first-time downloads.

Sources:
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/custom-product-pages

### Google Play
- Store Listing Experiments can test graphics on the default listing and text/graphics on localized listings.
- The experiment setup estimates the time and acquisition/open/pre-registration volume required for statistical significance.
- Experiment controls include number of variants, experiment-audience percentage, minimum detectable effect and confidence level; changing them can lengthen the time required for useful evidence.
- Google recommends testing one asset at a time to improve causal interpretability.
- An experiment may report `More data needed`; experiments automatically stop after six months.
- Play Console's growth overview can show how much traffic custom listings receive and compare their conversion performance with the default listing.

Sources:
- https://support.google.com/googleplay/android-developer/answer/12053285
- https://support.google.com/googleplay/android-developer/answer/16394358

## Core finding
Store experimentation consumes a finite **evidence budget**. In a sparse niche, traffic is not merely acquisition inventory; it is also the sample that powers learning. Splitting already-small traffic across multiple treatments, languages, intents, countries or custom pages can make every branch too weak to answer the decision question.

Therefore:

> **Do not spend evidence budget before the decision is worth learning.**

The availability of an A/B-test button is not evidence that the app has enough traffic, a sufficiently important hypothesis, or a sufficiently stable downstream value path to justify a test.

## Evidence-budget model
Before launching a Store experiment, document five items:

1. **Decision** — What concrete action will change if A beats B?
2. **Eligible traffic** — Which users can actually enter the experiment after locale, platform, listing and targeting filters?
3. **Expected runtime** — Use the platform's own estimate where available. Do not invent a company-wide sample-size threshold detached from current traffic.
4. **Opportunity cost** — What evidence or conversions are lost by splitting this traffic rather than leaving a stable baseline?
5. **Downstream guardrail** — Could the winning Store treatment attract more installs while weakening semantic first value, useful return, trust, or ad-bearing use?

If any item is unknown, prefer baseline observation or qualitative message validation before randomized testing.

## Experiment eligibility gate
A Store A/B test is eligible only when all are true:

- the app's activation/value path is sufficiently stable that a conversion increase would be useful rather than merely amplify leakage;
- the hypothesis changes one material message or asset family and has a clear decision consequence;
- the relevant Store surface receives enough eligible traffic for the platform to project a practical evidence window;
- no major release, onboarding rewrite, pricing/monetization change or other confound is expected during that window;
- the team can preserve the control and avoid opportunistic mid-test edits;
- downstream activation/quality evidence can be inspected separately, even if the Store experiment itself optimizes install/open conversion.

Failure of the gate means `OBSERVE`, not `TEST`.

## Sparse-niche operating ladder
Use the least traffic-intensive method that can answer the current question:

1. **Evidence/claim audit** — Is the promise even supportable by the product?
2. **Qualitative comprehension** — Do target specialists understand the screenshot/message as intended?
3. **Stable baseline observation** — Establish source/listing/locale performance without splitting traffic.
4. **Intent routing** — Only when distinct intent is verified; use 065 rules and keep page count minimal.
5. **Randomized Store experiment** — Only after the platform projects a practical evidence window and the result will change a real decision.
6. **Downstream validation** — Confirm the Store winner does not degrade semantic first value/useful return.

This ladder prevents `A/B testing theatre`: producing variants because experimentation looks rigorous even though traffic cannot resolve the hypothesis.

## MintTap application
MintTap is currently **NOT ELIGIBLE** for a Store A/B experiment under this framework.

Reason: activation and first-value evidence remain the live bottleneck; Store/source baseline and historical denominator remain unresolved; current live creative has not yet been audited; and there is no verified qualified-traffic estimate showing that a randomized test would resolve in a useful window.

Current action:
- keep one stable default listing;
- obtain exact live Store assets and baseline source/listing data;
- remediate/verify semantic first value;
- qualitatively test materially different messages with target YieldMax users before consuming Store traffic;
- only then use the Apple/Google experiment estimator to decide whether randomization is feasible.

Do not lower confidence or inflate minimum detectable effect merely to force a quick result without documenting the business consequence. A test configured to answer an unimportant or unrealistically large-effect question is not a substitute for evidence.

## LogMate application
LogMate is pre-launch/implementation-constrained, so Store randomization is premature. Use promise-to-value mapping and specialist terminology/comprehension review first. Preserve launch traffic as baseline evidence until implemented capabilities, geography and initial specialist segment stabilize.

## Reusable company rules
### Evidence Budget Before Experiment Count
Traffic allocated to variants is consumed learning capacity. Sparse apps optimize experiment count downward.

### Practical Runtime Before Launch
Use platform-estimated time/volume before starting a test. If the evidence window is operationally irrelevant, do not start it.

### One Decision, One Material Variable
Prefer one asset/message hypothesis at a time. Multi-variable creative changes can win conversion but leave the organization unable to identify why.

### Conversion Winner Is Not Growth Winner
Store conversion is an intermediate metric. A treatment that increases installs but lowers semantic first value, useful return, trust or sustainable ad-bearing use is not a company-level winner.

### No Statistical Theatre
Small counts, early directional movement, or CPP data merely clearing Apple's five-first-download display threshold do not establish a robust causal winner.

## Next evidence target
When exact MintTap Store assets and Store/source baselines become accessible, classify the default page's promise families, identify whether one material hypothesis is worth testing, and run the platform feasibility estimate before creating any treatment. If the projected evidence window is impractical, remain on qualitative validation + baseline observation rather than fragmenting traffic.