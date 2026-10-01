# Research 368 — Google Play Custom Store Listings Are Routing, Store Listing Experiments Are Causal Tests

Validated: 2026-10-02

## Decision
Do not treat Google Play Custom Store Listings (CSLs) and Store Listing Experiments (SLEs) as interchangeable ASO tools. CSLs route defined audiences to tailored store experiences; SLEs randomize eligible listing traffic to estimate whether a creative/text treatment changes a chosen conversion metric.

## Authoritative findings
- Google Play currently supports up to 50 custom store listings. CSLs can target countries and specific user-state segments including churned users, lapsed users (not opened in 28 days), lapsed+churned users, non-buyers, one-time buyers, and repeat buyers. They can also route Google Ads traffic and can be addressed by a listing URL parameter.
- CSLs are therefore deterministic segmentation/routing surfaces. A higher conversion rate on CSL A than CSL B is not, by itself, a causal creative result because the audiences may differ.
- Store Listing Experiments are the causal-testing surface. Google currently allows one default graphics experiment or up to five localized experiments at once; an experiment can use up to two variants and an adjustable audience percentage.
- Current experiment target metrics include unique user install clicks, unique user open clicks, and unique user pre-registration clicks. Play Console estimates the traffic/time needed for statistical significance.
- Google Play's Growth overview separately reports CSL usage/performance and SLE activity, reinforcing that routing and experimentation are distinct operating functions.

## Sparse-niche implication
For MintTap and LogMate, low traffic should not be fragmented merely because up to 50 CSLs are available. Create a CSL only when there is a materially different audience/job/message and the routed cohort is operationally useful. Use an SLE only when traffic can resolve a business-material effect. Do not infer that a CSL's conversion difference is caused by its creative.

## IE0–IE9 — Google Play routing/experiment contract
IE0 recurring specialist audience or job
→ IE1 materially distinct message/claim
→ IE2 Claim Registry truth
→ IE3 routing eligibility (country/user-state/URL/ads)
→ IE4 tailored store evidence
→ IE5 cohort observability
→ IE6 causal question, if any
→ IE7 SLE traffic/power sufficiency
→ IE8 install/open plus first/repeated specialist value
→ IE9 ROUTE / MERGE / EXPERIMENT / HOLD-LOW-TRAFFIC / RETIRE.

## MintTap
Potential CSL logic should be job/audience based, not ticker proliferation. Examples worth validating are returning/lapsed users after material portfolio-tracking improvements or a genuinely distinct specialist workflow. Do not create TSLY/CONY/MSTY/NVDY listings solely because CSL inventory exists.

## LogMate
Pre-launch CSLs are premature without real pilot acquisition evidence. After launch, migration/import continuity, rapid multi-leg logging, or offline/export continuity may justify differentiated routing only if audience/source evidence supports them.

## Cross-platform rule
Apple CPP / Google CSL = primarily routing/personalization.
Apple PPO / Google SLE = causal creative testing.
Never use cross-cohort conversion differences as if they were randomized experiment lift.

## Sources
- Google Play Console Help, “Create custom store listings to target specific user segments” (retrieved 2026-10-02).
- Google Play Console Help, “Run A/B tests on your store listing” (retrieved 2026-10-02).
- Google Play Console Help, “Get a high-level view of your app’s growth performance and opportunities” (retrieved 2026-10-02).
- Apple Developer, Custom Product Pages and Product Page Optimization documentation (retrieved 2026-10-02), used to normalize the cross-platform operating distinction.

## Next validation
Audit actual MintTap and LogMate CSL/SLE inventory and traffic before proposing segmentation. Record routing eligibility, audience, listing assets, traffic, experiment history, and downstream specialist-value evidence separately.