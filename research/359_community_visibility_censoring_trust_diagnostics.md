# Research 359 — Community Visibility Censoring and Trust-State Diagnostics

Validated: 2026-10-01
Scope: zero-cost community marketing for sparse-niche apps, especially Reddit.

## Decision

A community post/comment that receives little or no visible engagement is not automatically evidence of weak problem demand or weak copy. On Reddit, distribution can be censored upstream by account- and community-trust mechanisms. Therefore community learning must separate **content-market response** from **visibility eligibility** before interpreting performance.

## Current authoritative evidence

Reddit's Contributor Quality Score (CQS) classifies every account into five tiers using signals that include prior account actions, network/location signals, and account-security steps such as email verification. Moderators can use CQS directly in AutoModerator rules, including in combination with subreddit karma.

Reddit's Reputation Filter is informed by CQS and can automatically filter content from accounts that may be potential spammers, are likely to have content removed, or are unestablished.

Crowd Control can collapse/filter comments and filter posts from users who are not yet trusted members of a community. At maximum filtering it can include accounts with negative community karma, new accounts, and non-members.

Implication: rule compliance is necessary but not sufficient for observable distribution.

Authoritative sources:
- https://support.reddithelp.com/hc/en-us/articles/19023371170196-What-is-the-Contributor-Quality-Score
- https://support.reddithelp.com/hc/en-us/articles/27441485903124-Reputation-filter
- https://support.reddithelp.com/hc/en-us/articles/15484545006996-Crowd-Control
- https://support.reddithelp.com/hc/en-us/articles/15484574845460-Safety-Filters

## HC extension: visibility diagnostic

Use **HV0–HV9** before treating community outcomes as demand evidence:

HV0 problem fit
→ HV1 current community rules
→ HV2 account-wide trust indicators
→ HV3 community-specific trust indicators
→ HV4 moderation/filtering possibility
→ HV5 observable distribution
→ HV6 native engagement quality
→ HV7 link/promotion effect
→ HV8 repeated evidence across eligible contributions
→ HV9 LEARN / ESTABLISH-TRUST / REPAIR / HOLD-CENSORED / STOP.

### HOLD-CENSORED

Use when visibility eligibility cannot be distinguished from audience response. Do not record zero engagement as “no demand.”

### ESTABLISH-TRUST

Use when the account/community relationship is immature. Contribute complete native answers without forcing a product link. The objective is not karma farming; it is legitimate participation that makes later observations interpretable.

### LEARN

Use only when the contribution appears normally eligible/visible and enough comparable observations exist to support a content/problem inference.

## Operational constraints

1. Never attempt to game CQS, karma, Crowd Control, Reputation Filter, or moderator systems.
2. Never manufacture votes, comments, memberships, or reciprocal engagement.
3. Do not use a numeric self-promotion ratio as a platform-wide safe harbor. Some communities may use a 10% convention; community rules and moderator judgment remain controlling.
4. Do not respond to filtering by reposting repeatedly. Diagnose first.
5. Treat moderator removal, automated filtering, account restriction, and ordinary low engagement as distinct states whenever evidence permits.
6. A native answer should remain useful if every product link is removed.

## MintTap

External YieldMax/income-investor participation should be measured as a trust-and-learning program before it is measured as a referral program.

For each target community keep:
- current rules and promotion/disclosure language;
- whether links are permitted and under what conditions;
- account/community participation history;
- visible/removed/filtered/unknown state for each contribution;
- recurring specialist problem addressed;
- whether the answer was complete without MintTap;
- affiliation disclosure when relevant;
- product/reference link only when it materially adds maintained evidence or tooling;
- downstream evidence only after visibility eligibility is reasonably established.

A low-engagement ROC or total-return answer from an unestablished account must not be used to retire that problem cluster.

## LogMate

Pilot communities are higher-trust professional environments. Before launch, prioritize technically accurate native contributions around migration/import fidelity, duplicate reconciliation, Previous Total continuity, multi-leg logging, export integrity, and offline/PWA boundaries. A product link is secondary to professional credibility and should not be used to compensate for weak community trust.

## Reusable niche-app rule

Community analytics has a missing-data problem: filtered or trust-limited contributions are **censored observations**, not negative observations. Growth decisions should therefore use:

eligible visibility → native response → qualified follow-up → owned/store destination → first specialist value → repeated specialist value.

Only the latter stages justify acquisition conclusions.

## Next evidence target

Build the MintTap external-community ledger with actual current rules and observable trust/visibility states. Do not add another Reddit theory layer until the ledger reveals a concrete framework gap.
