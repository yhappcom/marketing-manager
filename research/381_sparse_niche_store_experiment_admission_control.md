# Research 381 — Sparse-Niche Store Experiment Admission Control

Validated: 2026-10-02

## Decision

Store experimentation is not a mandatory ASO activity. For a sparse niche app, an experiment should be admitted only when current traffic, the minimum business-material effect, and the platform's own statistical machinery can plausibly produce a decision before the decision becomes stale.

The scarce resource is not an experiment slot. It is enough eligible traffic to distinguish a business-material effect.

## Authoritative platform facts

### Apple Product Page Optimization

Apple Product Page Optimization (PPO) can test up to three treatments of the default App Store product page. Treatments are randomly shown to a defined user group. Apple evaluates estimated conversion-rate lift and confidence. Results appear after at least five first-time downloads are attributed to the test; Apple Analytics uses a Bayesian method and labels a treatment better/worse at 90% confidence. A test can run for at most 90 days. More treatments can make a test take longer to reach a conclusion. PPO is not available for Custom Product Pages.

Operational implication: five first-time downloads is a reporting threshold, not evidence that five downloads are enough to make a business decision. Sparse traffic can produce visible but still weak or inconclusive evidence.

Sources:
- Apple, Overview of product page optimization: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization
- Apple, Create a test: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test/
- Apple, Run a test: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/run-a-test
- Apple Analytics, Product page optimization: https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization

### Google Play Store Listing Experiments

Google Play estimates the time and acquisition/open/pre-registration volume required for statistical significance before the experiment is launched. Advanced settings expose number of variants, audience percentage, minimum detectable effect (MDE), and confidence level. Google states that increasing confidence or otherwise changing defaults can lengthen the time required for useful results. Results can explicitly remain “More data needed” or end in a draw. Store listing experiments automatically stop after six months.

Google also recommends testing one asset at a time so causal interpretation is clearer.

Source:
- Google Play Console Help, Run A/B tests on your store listing: https://support.google.com/googleplay/android-developer/answer/12053285

## New operating principle: experiment admission precedes experiment design

Do not begin with “What screenshot should we test?” Begin with:

1. What decision would change if the experiment succeeds?
2. What is the smallest effect large enough to matter to the business?
3. Does the eligible Store traffic support distinguishing that effect within the platform's useful time horizon?
4. Will the product, Store claim, season, localization, or acquisition mix remain stable long enough for the result to remain interpretable?
5. Is there a cheaper observational or qualitative evidence source that should be used first?

If any of these fail, do not consume scarce traffic on a cosmetic test.

## IT0–IT9 — Sparse-Niche Experiment Admission Contract

**IT0 — Decision object**  
Name the exact decision: change default screenshot order, replace a value proposition, retain current creative, etc. No decision object means no experiment.

**IT1 — Material effect threshold**  
Define the minimum effect worth acting on before looking at results. This is a business threshold, not a post-hoc number selected because the experiment happened to show it.

**IT2 — Eligible traffic estimate**  
Use the Store/platform's actual eligible traffic, not total app installs, website sessions, or community size.

**IT3 — Platform completion estimate**  
Use Apple's/Google's native test constraints and Google's completion estimator where available. Treat “More data needed,” long projected completion, or Apple sparse evidence as censored/inconclusive, not as proof of equality.

**IT4 — Stability window**  
Reject or defer a test if a release, material metadata change, seasonality event, localization change, routing change, or acquisition-source shift is likely to contaminate interpretation.

**IT5 — Treatment economy**  
Use the fewest variants needed. More variants split scarce evidence. Test one causal idea at a time where practical.

**IT6 — Claim/evidence gate**  
Every treatment must remain truthful under the Claim Registry. Experimentation does not permit speculative or roadmap claims.

**IT7 — Predeclared stopping rule**  
Before launch, record the maximum duration, platform conclusion states that permit action, and what happens for inconclusive evidence. Do not repeatedly peek and stop when a favorable fluctuation appears.

**IT8 — Downstream-value check**  
A Store conversion winner is not automatically a business winner. After adoption, monitor whether the acquired cohort reaches first and repeated specialist value. For ad-supported apps, do not optimize conversion at the expense of retained specialist users or workflow integrity.

**IT9 — Decision state**  
ADMIT / DEFER-LOW-TRAFFIC / OBSERVE-FIRST / QUALITATIVE-FIRST / STOP-INCONCLUSIVE / APPLY / KEEP-CONTROL / RETEST-LATER.

## Why this matters for MintTap

MintTap serves a narrow YieldMax/income-investor audience. That makes Store traffic especially valuable and easy to fragment.

Do not run separate cosmetic experiments merely because Apple or Google exposes the tool. First estimate whether the default listing or a specific intent-routed listing has enough eligible traffic to distinguish a business-material change.

High-value test hypotheses, if traffic permits, should concern materially different specialist promises or proof hierarchy—for example whether the first screenshots communicate portfolio/distribution accounting more clearly—not tiny color, punctuation, or ticker-specific variants.

Ticker identity alone (TSLY, CONY, MSTY, NVDY) is not a reason to split tests. Fragmenting already sparse traffic by ticker, localization, CPP/CSL, and multiple treatments can make the evidence unusable.

MintTap experiment outcomes must also be interpreted with the existing routing work:
- routing asks which specialist intent should see which truthful page;
- experimentation asks whether a treatment causally improves the selected target metric within that eligible audience;
- downstream measurement asks whether the resulting users reach specialist value.

These are separate questions.

## Why this matters for LogMate

Before launch, LogMate has no production Store traffic, so Store A/B testing cannot substitute for pilot-workflow research.

Pre-launch evidence should come from claim verification, specialist terminology, workflow validation, and creative comprehension checks. After launch, Store experiments become admissible only when actual traffic supports them.

Potential high-value hypotheses should map to distinct pilot jobs—migration/import continuity, rapid multi-leg logging, export/record continuity—not generic aesthetic preference.

## Reusable rule for future niche apps

Use this sequence:

specialist problem evidence
→ truthful Store claim
→ intent routing where justified
→ traffic sufficiency
→ business-material hypothesis
→ experiment admission
→ platform-native test
→ predeclared decision
→ downstream specialist-value validation.

Do not invert it into:

experiment slot exists
→ invent a creative variation
→ wait for sparse data
→ overread noise.

## Evidence ledger fields

For every proposed Store experiment record:
- app / Store / listing or routing object
- decision object
- hypothesis
- eligible audience
- baseline target metric
- minimum business-material effect
- estimated eligible traffic
- platform completion estimate
- variants and audience split
- stability risks
- Claim Registry references
- launch date
- maximum duration
- predeclared stopping/action rule
- platform result
- confidence / interval / “more data needed” state
- downstream first/repeated specialist value
- final state

## Current operational consequence

For MintTap and future small niche apps, “run more ASO tests” is not a default growth recommendation. The default is **admission control**. When traffic cannot answer a material question, preserve traffic, improve evidence through specialist research and observational Store data, and revisit testing after the eligible audience grows.

## Next validation target

Audit MintTap's actual Apple and Google Store experiment inventory and eligible traffic. For each current or proposed test, calculate whether the platform can distinguish a business-material effect before the relevant Store/product state changes. Classify each proposal as ADMIT / DEFER-LOW-TRAFFIC / OBSERVE-FIRST / QUALITATIVE-FIRST.
