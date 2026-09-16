# 053 — Post-First-Value Ad Monetization Guardrails

Date: 2026-09-16

## Problem
For sparse specialist apps, maximizing impressions per session can destroy the scarce asset that creates ad inventory: retained specialist use. Monetization therefore must be sequenced after credible first value and evaluated against return behavior, not raw impression count.

## Authoritative platform evidence
Google AdMob's current app-open guidance says not to show an app-open ad on the first app start; current implementation guidance further recommends waiting until users have opened the app several times and showing app-open ads only while users are already waiting for the app to load. On cold starts, if the user reaches main content before the ad loads, Google says not to show it.

Google's interstitial guidance defines interstitials as full-screen ads for natural transition points or pauses, such as after completion of a task, and advises against flooding users with too many ads.

These platform rules support a product-level principle: ad opportunity is constrained by user context, not merely by technical availability.

## Company model
`first value → complete value block → natural transition → eligible ad opportunity → return behavior → sustainable revenue`

### Value block
A value block is the smallest uninterrupted sequence required for a specialist user to obtain and understand a meaningful result. Ads must not split this sequence.

MintTap candidate value blocks:
- first portfolio data path: choose Manual/Import → provide data → validation/review → save → personalized portfolio result → interpret result;
- Home decision block: portfolio status/summary → performance/distribution context → holdings explanation;
- specialist workflow block: ROC/tax/reverse-split analysis → result/explanation → completion or return navigation.

LogMate candidate value blocks must be defined from implemented workflows before launch; do not infer them from planned features.

## Guardrails
1. **First Value Before Monetization** — no interruptive ad should be used to monetize an unactivated user's path to semantic first value.
2. **Value Block Integrity** — do not insert an interruptive ad between an action and the result needed to understand that action.
3. **Transition, Not Interruption** — interstitial eligibility begins only at a genuine task boundary or natural pause.
4. **Wait-State Fit for App Open** — app-open ads belong to genuine loading/wait states; they must not arrive after useful content has become available.
5. **Revenue Per Retained User, Not Impressions Per Session** — evaluate monetization with retained use and useful-return behavior as guardrails. More impressions are not automatically better economics.
6. **Sparse Evidence Requires Coarse Experiments** — do not fragment a tiny user base across many frequency variants. Start with large policy differences and preserve interpretable cohorts.
7. **No Ad Rescue of Weak Activation** — low revenue caused by weak activation is first an activation problem, not a mandate to increase ad frequency.

## Measurement hierarchy
Primary guardrails:
- semantic first-value reachability;
- useful-return event / credible repeat-use proxy;
- session or account recency once telemetry coverage is valid;
- task completion and qualitative interruption evidence.

Monetization outcomes:
- ad impressions after eligible boundaries;
- aggregate ad revenue;
- revenue per active/retained user when denominators are valid;
- fill/eCPM only as diagnostics, not product success metrics.

Do not optimize eCPM or impressions in isolation.

## MintTap implication
Current owner-observed sustained use is already a severe activation warning, while GA4/ad-revenue linkage remains unresolved. Therefore MintTap should not increase interruptive ad pressure now. Tranche-1 should instead protect the first-value path and move the existing Home inline ad, if engineering/design review confirms low risk, after a complete value block rather than between summary and explanatory holdings content.

App-open ads should not be introduced as an acquisition/activation fix. If ever evaluated later, eligibility should require repeated prior use and an actual loading state, consistent with current AdMob guidance.

## Experiment ladder
M0 — map value blocks and current ad boundaries.
M1 — remove/relocate ads that split first-value or comprehension blocks.
M2 — verify activation/useful-return telemetry and aggregate ad revenue access.
M3 — compare coarse post-value policies only after sufficient traffic exists.
M4 — optimize revenue per retained user subject to no material deterioration in activation, return, task completion, trust or accessibility.

## Reusable decision record fields
`product | workflow | value_block | ad_format | trigger | first_value_state | natural_transition_evidence | frequency_rule | revenue_metric | retention_guardrail | UX_guardrail | policy_source | decision`

## Sources
- Google for Developers, AdMob App Open Ads (Android / Next-Gen), accessed 2026-09-16: https://developers.google.com/admob/android/next-gen/app-open
- Google for Developers, AdMob App Open Ads (Flutter), accessed 2026-09-16: https://developers.google.com/admob/flutter/app-open
- Google for Developers, AdMob Interstitial Ads (Android / Next-Gen), accessed 2026-09-16: https://developers.google.com/admob/android/next-gen/interstitial/single-load
- Google for Developers, AdMob Interstitial Ads (iOS), accessed 2026-09-16: https://developers.google.com/admob/ios/interstitial
