# 088 — Rewarded Ads Without Artificial Scarcity

Validated: 2026-09-18

## Decision

**Canonical principle: Reward surplus, never ransom normal utility.**

Rewarded advertising is not automatically a user-friendly monetization format merely because the user can choose it. For a specialist utility app, the relevant question is whether a genuine *additive* reward exists without first degrading, rationing, delaying, or withholding the normal product.

For MintTap and LogMate, rewarded inventory is therefore **not a default monetization slot**. If no naturally additive reward exists, the correct inventory count is zero.

## First-party policy facts

### Google / AdMob

Current AdMob policy for reward-bearing ad units requires, among other things:
- no direct monetary reward;
- permitted rewards must be non-monetary/indirect, usable within the publisher platform/app and non-transferable;
- rewarded ads must remain skippable/dismissible;
- for rewarded interstitials, an introductory screen must give a clear `no`/opt-out choice before the ad;
- declining/skipping the rewarded ad must not impede normal use of the app;
- publishers must actually deliver the promised reward;
- copy may describe the reward but must not manipulate the choice with language such as asking the user to watch an ad merely to support the business.

Google's Flutter SDK documentation describes ordinary rewarded ads as an optional interaction in exchange for an in-app reward. Rewarded interstitial is materially different: it may appear automatically at a natural transition, but Google requires advance reward disclosure and a real opportunity to skip before it begins.

### Apple

Apple App Review Guidelines currently prohibit forcing Store actions (ratings, reviews, other-app downloads, etc.) to gain access to functionality/content, but explicitly allow apps to incentivize certain in-app actions, including watching an advertisement. Separately, Apple prohibits artificially increasing ad impressions/clicks and apps designed predominantly to display ads.

Therefore, `Apple allows an incentive` is not evidence that a proposed reward is appropriate for this company's UX or trust model.

## Product-fit distinction

Rewarded advertising has three separate questions:

1. **Policy eligibility** — may this reward/ad implementation be used?
2. **Product legitimacy** — does the reward exist naturally, without manufacturing a deficiency?
3. **Business value** — does the implementation increase long-run revenue per retained useful user without harming specialist trust or useful return?

Passing (1) does not imply (2) or (3).

## A0–A5 Additive Reward Gate

### A0 — Coercive / prohibited
Examples: cash-equivalent reward; misleading reward; reward not delivered; decline blocks normal app use; Store review/rating used as the reward action.

**Never ship.**

### A1 — Artificial deprivation
A normally expected core capability is deliberately rationed, delayed, degraded, or removed so the user will watch an ad to restore it.

Examples for this company:
- limiting normal portfolio views and selling another view via ad;
- limiting normal logbook entry/search and granting another use after an ad;
- intentionally delaying calculation/sync/import so an ad can accelerate it.

Even where a particular implementation might be technically policy-compatible, it conflicts with the company requirement that ads not restrict normal usage.

**Reject.**

### A2 — Adjacent but dependency-forming
The reward is not strictly core, but repeated use could make the ad part of a routine specialist workflow or create pressure to watch it.

Examples: recurrent convenience quota, recurring export allowance, repeated workflow shortcut.

**Do not productionize without redesign.**

### A3 — Genuine additive surplus
The baseline product remains complete for its intended free use. The reward is optional, clearly described, non-transferable, not required for first value or useful return, and declining it leaves the normal workflow unchanged.

**Earliest candidate state.**

### A4 — Measured additive inventory
A3 plus telemetry separates offer → accept/decline → impression/completion → reward grant → useful action → useful return → rapid exit/error, and compares exposed/non-exposed downstream behavior. Reward delivery failure is monitored explicitly.

**Experimentable.**

### A5 — Sustainable additive monetization
Repeated evidence shows incremental retained-user revenue without meaningful deterioration in first value, useful return, task completion, trust/support signals, or reward reliability.

**Reusable only for the proven reward/context, not as a company-wide template.**

## MintTap implication

Do not invent scarcity around portfolio tracking, distributions, ROC, tax-adjustment records, exchange-rate handling, transaction history, or other normal tracking utility merely to create a rewarded-ad proposition.

A rewarded format should be considered only if product development independently creates a genuinely additive, non-essential benefit that passes A3. `We need more ad inventory` is not a valid reason to create the reward.

For a finance-adjacent specialist audience, a reward must also avoid creating confusion that the ad, advertiser, or reward changes investment results or constitutes financial benefit/advice.

## LogMate implication

Do not place logbook entry, search, totals, backup/restore, data integrity, regulatory evidence, or operational continuity behind an ad-derived reward. These are candidate core/trust capabilities, not reward inventory.

Because pilots may use the product in operationally constrained contexts, a rewarded offer must never become a prerequisite or delay in recording/recovering required information. No rewarded design work is justified before production-valid core workflows and first-value evidence exist.

## Rewarded vs rewarded-interstitial

Treat them as separate inventory classes.

**Ordinary rewarded:** explicit user choice is intrinsic to the format and is preferable if a valid A3 reward ever exists.

**Rewarded interstitial:** automatic presentation at a natural transition creates an additional interruption risk even though the user can opt out from the required intro screen. It must also pass the company's existing boundary/intent-protection rules. A3 reward legitimacy alone is insufficient.

For specialist utility apps, do not select rewarded interstitial merely because it may generate more impressions.

## Measurement contract

Minimum event chain for any future test:

`eligible_context → reward_offer → accept | decline → ad_request → impression → completion | skip | failure → reward_granted | grant_failure → resumed_normal_workflow → useful_action → useful_return → rapid_exit/error/support_signal → revenue`

Required denominators:
- offer acceptance rate;
- decline rate with normal-task completion;
- completion among accepted offers;
- reward-grant reliability;
- incremental revenue per eligible retained useful user;
- useful-return delta for accepted, declined, and unexposed users;
- support/trust incident rate.

Do not optimize rewarded eCPM or completion rate in isolation.

## Stop conditions

Stop or roll back when:
- users must watch to recover normal utility;
- declining changes the normal workflow;
- reward delivery is unreliable;
- first value or useful return deteriorates;
- support/review language indicates coercion or manufactured limitation;
- the team begins degrading the baseline product to make the reward attractive;
- revenue exists only by increasing rewarded dependency rather than retained useful use.

## Reusable company rule

Before proposing rewarded ads for any future niche app, write the baseline free-use contract first. Then describe the proposed reward without mentioning advertising. If the reward only makes sense after removing or rationing something users should normally have, it is A1 and must not be created.

## Authoritative sources

- Google AdMob Help — Policies for ad units that offer rewards: https://support.google.com/admob/answer/7313578
- Google for Developers — Rewarded ads for Flutter: https://developers.google.com/admob/flutter/rewarded
- Google AdMob Help — Rewarded interstitial overview: https://support.google.com/admob/answer/9884467
- Apple Developer — App Review Guidelines, especially 3.2.2(iii) and 3.2.2(x): https://developer.apple.com/app-store/review/guidelines/
