# Research 384 — Zero-Cost Link Instrumentation Without Causal Overclaiming

Date: 2026-10-02
Status: VALIDATED

## Decision

For sparse niche apps, every controllable external marketing surface should use platform-native campaign/referral instrumentation when permitted, but observed attribution must remain separate from causal contribution.

A campaign token or referral bucket answers "what did the platform observe?" It does not answer "what originally caused discovery?"

## Current authoritative platform facts

### Apple
App Store Connect campaign links can associate impressions, product-page views, downloads, usage, sales and subscriptions with a campaign token. A first-time download is credited when it occurs within 24 hours of use of the campaign link/token. If multiple campaign links are used in the relevant period, the most recent receives subsequent sales credit. Dashboard metrics require a minimum threshold of 5; detailed exports can suppress or combine very small cohorts for privacy. Acquisition-source attribution can also reset when a user manually redownloads.

Operational consequence: campaign links are useful for owned web/blog/social links, but neither an empty campaign cell nor a later Search source proves that an earlier community contribution had zero influence.

### Google Play
Play Console Store listings reporting separates Google Play search, Google Play explore, and Ads and referrals. Some acquisition/activation states have unknown traffic source. Operational consequence: Play source buckets are observed platform routing, not a complete reconstruction of pre-Store discovery.

## New operating contract — IC0–IC9

IC0 specialist problem/intent
→ IC1 controllable surface
→ IC2 native campaign/referral instrumentation where permitted
→ IC3 platform attribution window/bucket semantics
→ IC4 privacy/sample censoring state
→ IC5 Store visit/install observation
→ IC6 first specialist value
→ IC7 repeated specialist value
→ IC8 contribution evidence outside attribution
→ IC9 SCALE / KEEP / REPAIR-LINK / HOLD-SPARSE / HOLD-CENSORED / UNKNOWN / STOP.

## Three-ledger rule

1. Contribution ledger: problem solved, community context, native answer quality, trust/engagement, qualitative discovery evidence.
2. Attribution ledger: campaign token/referral/source observed by Apple/Google.
3. Product-value ledger: first specialist value, repeated value, retention, sustainable non-intrusive monetization.

Never collapse these ledgers into a single "channel ROI" number when the causal bridge is unobserved.

## MintTap

Use distinct, stable campaign identifiers for controllable owned links (for example a specific maintained blog/reference placement) when platform/community rules permit links. Do not create tracking links merely to force a funnel into Reddit; native-first usefulness and community permission remain upstream gates.

A Reddit contribution can be valuable even if the eventual install is recorded as App Store Search or Play Search. Conversely, a campaign-attributed install is not automatically high quality; downstream portfolio specialist value must still be observed.

Do not split identifiers by ticker or post unless the split represents a decision-relevant surface/intent and has enough traffic to avoid permanent sparse-data noise.

## LogMate

Before launch, define a small stable taxonomy around decision-relevant pilot acquisition surfaces and specialist jobs (for example owned migration/import reference vs export/continuity reference). Do not manufacture many campaign IDs before traffic exists.

## Reusable rule

Instrument only distinctions that could change a decision. Sparse niche apps should prefer a small stable attribution taxonomy over high-cardinality link tagging.

Observed attribution is evidence, not causality.

## Sources

- Apple Developer, App Store Connect Analytics — Campaign links, accessed 2026-10-02.
- Apple Developer, App Store Connect Analytics — Acquisition, accessed 2026-10-02.
- Google Play Console Help — Understand and grow your app's user base, accessed 2026-10-02.

## Next target

Audit MintTap's actual controllable external links and Store acquisition/referral reporting. Build the smallest decision-useful campaign taxonomy and identify where current links are uninstrumented, privacy-censored, or too sparse for channel decisions.
