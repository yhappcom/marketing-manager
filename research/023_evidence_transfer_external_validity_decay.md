# 023 — Evidence Transfer, External Validity & Evidence Decay

Date: 2026-09-15
Stage: 2 — Sparse-Niche Decision Science
Status: SPECIALIST DEPTH COMPLETE

## Purpose

Small specialist apps cannot afford to relearn everything from zero, but copying a result into a different app, platform, geography, audience, version, acquisition source, or time period can create false certainty. This block defines when prior evidence may be reused, when it is only a prior/hypothesis, and when revalidation is required.

## Core distinction

A result has two separate questions:

1. **Internal validity:** was the original result credible for the population/exposure actually studied?
2. **External validity / transportability:** is the target decision sufficiently similar that the result should survive transfer?

A strong experiment can have high internal validity and poor transferability. Transfer is therefore never implied by statistical confidence alone.

## Canonical transfer chain

`source evidence → source context → changed dimensions → mechanism invariance assessment → target-context risk → reuse class → validation burden → monitored target decision`

## Transfer dimensions

Every material reuse checks at least:

- PRODUCT: same app / different app / different category;
- AUDIENCE: role, expertise, motivation, incumbent workflow, switching cost;
- CEP / JOB: same circumstance and problem or merely similar wording;
- PLATFORM: iOS / Android / web/PWA and native Store mechanics;
- GEOGRAPHY / LANGUAGE: regulation, culture, terminology, channel usage, storefront;
- ACQUISITION SOURCE: search, Store browse, community, owned content, social;
- PRODUCT VERSION: proposition, onboarding, UI, capability, monetization;
- MARKET / COMPETITION: alternatives and category expectations;
- TIME: policy, platform, product, market and user behavior drift;
- MEASUREMENT: same event/denominator/attribution definition or not.

## Reuse classes

### T0 — DIRECTLY REUSABLE OPERATING PRINCIPLE
Mechanism is general and target-specific empirical magnitude is not claimed. Examples: do not equate install with activation; do not treat policy limits as recommended ad frequency; preserve native metric definitions.

### T1 — REUSABLE WITH CONTEXT CHECK
The mechanism likely transfers, but implementation must be adapted. Example: contribution-first community participation transfers, while subreddit permission does not.

### T2 — PRIOR / HYPOTHESIS ONLY
Prior evidence informs what to try or what direction may be plausible, but target performance is unknown. Most cross-app creative, positioning, activation and channel findings belong here.

### T3 — TARGET REVALIDATION REQUIRED BEFORE MATERIAL COMMITMENT
A changed dimension plausibly changes effect sign/magnitude or downside is high. Examples: country-specific regulatory claims, major positioning transfer, ad placement effects across materially different workflows.

### T4 — NON-TRANSFERABLE / OBSOLETE
Source evidence depends on a removed feature, superseded policy, incompatible metric, invalid source study, or target mechanism no longer exists.

## Mechanism-first rule

Do not ask only whether source and target 'look similar.' State the causal/behavioral mechanism that would have to remain stable.

Example:
`clearer first screenshot → faster recognition of relevant job → better qualified Store response`
may plausibly transfer as a principle.

But:
`ROC-first screenshot increased MintTap conversion by X% → import-first screenshot will increase LogMate conversion by X%`
is invalid transport without target evidence. Audience, job, category, proof and switching barriers differ.

## Cross-platform rule

Apple and Google results do not automatically transport because Store surfaces, metadata, traffic composition, experiment engines and metric definitions differ. A creative hypothesis may transfer as T2; the measured uplift does not.

Current Apple localization guidance also explicitly recommends tailoring metadata/screenshots to each market and researching locally popular marketing channels, supporting a context-specific rather than translation-only transfer model.

## Geography/localization rule

`translation ≠ evidence transfer`

Language localization can preserve words while changing category vocabulary, trust cues, regulation, competitor set and channel behavior. Treat a successful source-market message as T2 until target-market evidence supports it.

Apple currently allows localized App Store metadata and recommends tailoring screenshots/value communication to local markets; it also notes marketing channels may vary significantly by market. App availability/legal constraints can also differ by country/region.

## Evidence-decay model

Evidence does not expire because a fixed number of days passed. It decays when the mechanism or measurement context changes.

### Drift triggers

Revalidate when one or more material triggers occur:

- Store/platform policy or surface change;
- material product/UI/onboarding change;
- monetization/ad implementation change;
- analytics/event-definition change;
- audience or acquisition-source mix shift;
- competitor/category shift;
- regulatory/tax/legal change;
- localization/geography expansion;
- community-rule/moderator change;
- underlying content fact changes;
- unexplained sustained divergence from prior baseline.

### Evidence clock

Every retained empirical finding should carry:
- observed_at;
- source context;
- target context if reused;
- mechanism statement;
- metric definition;
- last_validated_at;
- known drift triggers;
- current reuse class T0–T4.

No universal 30/90/365-day expiry is adopted. Time increases suspicion; context change determines revalidation priority.

## Decay severity

LOW: cosmetic/time passage with stable mechanism and measurement.
MEDIUM: source mix, competitor, platform presentation or product workflow changed enough to affect magnitude.
HIGH: metric definition, regulation/policy, core proposition, activation path, monetization, or target population materially changed.

High-decay evidence cannot remain a decision-grade empirical claim merely because it was once statistically strong.

## Transfer burden by reversibility and harm

Combine 021 with transfer class:

- low-cost reversible decision + T1/T2 evidence → ACT + MONITOR may be rational;
- meaningful but reversible decision + T2 → controlled target validation when VOI justifies it;
- hard-to-reverse/high-harm decision + T2/T3 → RESEARCH FIRST or target validation;
- policy/regulatory/factual question → authoritative current evidence, not behavioral extrapolation.

## MintTap examples

1. A U.S. YieldMax-community wording pattern may inform U.S.-English content as T2, but should not be assumed to describe Korean investors' terminology or tax concerns.
2. A Store screenshot result before a major ROC workflow redesign is decay-sensitive because proof and first-use path changed.
3. A successful non-intrusive banner state can suggest an ad-design principle, but measured revenue/retention effects do not transfer to a different task state without validation.
4. Tax/ROC factual content requires current authoritative validation; prior engagement does not validate correctness.

## LogMate examples

1. MintTap's successful specialist positioning is T0/T1 evidence for the principle 'narrow relevance can beat generic breadth,' not evidence for a specific LogMate proposition.
2. Pilot workflow findings from one geography/airline context are T2 for another unless role, regulation, roster/logging workflow and tooling are materially comparable.
3. iOS import activation evidence does not automatically establish Android/PWA activation because file access, permissions and workflow can differ.
4. Regulatory logbook guidance is target-jurisdiction factual evidence, not something transferable by analogy.

## Future-app reuse protocol

For every new yhappcom app:

1. inherit T0 principles by default;
2. review T1 patterns and adapt to category context;
3. convert MintTap/LogMate empirical findings to T2 hypotheses unless similarity is demonstrated;
4. identify T3 decisions before major commitment;
5. discard T4 evidence from active decision models;
6. log new evidence in a form that can itself be transported later.

## Evidence transfer record

Minimum fields:

- evidence_id
- source_app/context
- original question
- source population/channel/platform/geography/version
- result + uncertainty
- mechanism believed to explain result
- target decision/context
- dimensions changed
- reuse_class T0–T4
- decay_severity LOW/MEDIUM/HIGH
- validation route
- owner
- observed_at / last_validated_at
- drift triggers
- outcome after transfer

## Anti-patterns now prohibited

- 'It worked on MintTap, so use it on LogMate.'
- transferring numerical uplift across Store platforms;
- treating translated creative as localized evidence;
- retaining old experiment winners after the underlying product/metric changed;
- assuming community permission transfers between communities or indefinitely through time;
- calling an old factual/policy source current because user behavior around it is unchanged;
- rerunning every finding on every app without considering mechanism, risk and VOI.

## Decision rule

`reuse principles aggressively; reuse empirical magnitudes cautiously; revalidate mechanisms when context can change the effect; never transport policy, regulatory or factual truth by analogy.`

## Authoritative sources checked

- Apple Developer, Localization — current guidance: localize App Store metadata/screenshots, test localization with target users, adapt marketing strategy and channel choice by market: https://developer.apple.com/localization/
- Apple App Store Connect Help, Manage availability — availability and legal/regulatory constraints are country/region dependent: https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/manage-availability-for-your-app-on-the-app-store
- Apple App Store Connect Help, App Store localizations — displayed language depends on storefront/device/configured localizations, reinforcing that locale delivery is context-dependent: https://developer.apple.com/help/app-store-connect/reference/app-information/app-store-localizations

## Result

Stage 2 can now distinguish reusable knowledge from target-specific evidence and stale evidence. This closes the gap between 'build a reusable company playbook' and 'avoid assuming false equivalence across specialist apps.'
