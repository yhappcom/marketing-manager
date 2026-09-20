# 140 — Ad monetization as incremental revenue under core-value constraints

Validated: 2026-09-20

## Why this addition exists
Research 121–126 established format-specific fit and impression-level revenue integrity. The remaining operational gap is how to decide whether an ad placement is actually good for a niche professional app. Raw eCPM, impressions, fill rate or even total ad revenue cannot answer that question because an intrusive placement can raise short-run revenue while damaging first value, useful return, reviews, retention and qualified organic growth.

## Canonical principle
**Optimize incremental reconciled ad revenue subject to non-degradation of the app's core professional task. Do not optimize ad exposure itself.**

For MintTap and LogMate, advertising is downstream of product utility. A user must never need to consume an ad to perform the normal core workflow. Revenue gained by creating artificial friction, delaying access to core information, or increasing accidental interaction is invalid growth even when platform policy technically permits a format.

## Current authoritative constraints
### Google Play / AdMob
Google Play's ad policy prohibits unexpected full-screen interstitials when the user has chosen to do something else and prohibits full-screen video interstitials before the loading screen. Full-screen interstitials generally must be closeable within 15 seconds; explicitly opted-in rewarded ads are treated separately. Source: Google Play Ads policy, accessed 2026-09-20.

AdMob separately warns against repeated/recurring interstitials and gives the concrete compliance guidance that an interstitial should not be placed after every user action; its disallowed-implementation page says no more than one interstitial after every two user actions. This is a policy ceiling/implementation constraint, **not a recommended business target** for MintTap or LogMate.

Rewarded ads require clear disclosure of the required action and reward before presentation, affirmative unambiguous opt-in for standard rewarded ads, and skipping/refusal must not interfere with normal app use. Direct monetary rewards are prohibited. A rewarded interstitial requires an intro screen with a functional opt-out. These constraints reinforce the company's existing rule that core utility cannot be gated by ad consumption.

For banners, AdMob recommends separation from interactive/navigation elements to reduce accidental clicks. Collapsible banners should be used on static UI and Google explicitly says not to request a collapsible banner for every anchored adaptive banner because this may disrupt UX; it recommends moderate refresh (180 seconds or greater) and enforces a 30-second minimum for that format.

### Apple
Apple App Review Guideline 2.5.18 requires interruptive/interstitial ads to be clearly identified as ads, not manipulate or trick taps, and provide visible accessible close/skip controls. Apps with ads must also provide a way to report inappropriate or age-inappropriate ads. This is a compliance floor, not evidence that a placement is appropriate for a professional workflow.

## The missing decision model: revenue under guardrails
A placement candidate must be evaluated on two planes:

1. **Revenue plane** — reconciled impression-level revenue, eligible-user denominator, impressions per eligible user, fill/show rate, revenue per eligible user/session, and revenue concentration.
2. **Core-value plane** — task completion, first-value completion, useful-return rate, abandonment immediately around the ad boundary, latency/task-time changes, support complaints, rating/review signals, and accidental-click/policy signals where measurable.

The decision target is not maximum revenue. It is the highest credible incremental revenue among placements that remain inside the core-value guardrails.

### Required comparison unit
Use the **eligible natural user state**, not DAU or all sessions, as the primary denominator. Examples:
- banner candidate: users/sessions that naturally reach the secondary static surface;
- interstitial candidate: completed non-urgent tasks that naturally reach the transition boundary;
- app-open candidate: genuine wait states that would exist without advertising;
- rewarded candidate: users who encounter a legitimate optional value exchange and affirmatively choose it.

Never manufacture an eligible state to increase inventory.

## BF0–BF5 — Core-Value-Constrained Ad Revenue Gate

### BF0 — Unknown
Placement, trigger, denominator, revenue or downstream core-value effects are unknown. No monetization judgment.

### BF1 — Inventory observed
Ad format and approximate surface are known, but trigger semantics, eligibility or reconciled revenue are incomplete. Descriptive only.

### BF2 — Natural-state contract defined
Record:
- app/version/platform;
- ad format and placement ID;
- exact trigger;
- natural user state that creates eligibility;
- exclusion states (onboarding, active data entry, recovery/error, safety-critical or urgent task, first-value path where applicable);
- frequency/cap/cooldown;
- dismiss/opt-out behavior;
- AR-compatible impression/revenue instrumentation;
- policy/version evidence.

A state created solely to show an ad fails BF2.

### BF3 — Revenue and core-value measurement valid
Require reconciled revenue evidence and a stable eligible-state denominator plus downstream product guardrails. At minimum preserve:
- eligible users/events;
- ad requests, matched/show/impression counts as semantically applicable;
- reconciled impression-level revenue and currency;
- revenue per eligible user/event;
- first-value/useful-return exposure status;
- task completion/abandonment around the boundary;
- observation window and app/ad-config version;
- unknown/censored states.

Do not infer incrementality from before/after totals alone when product mix, traffic, geography, seasonality or ad demand changed materially.

### BF4 — Incremental test without core-value degradation
Where sample and implementation allow, compare placement/cap variants while preserving the same natural user state. A monetization variant can advance only when:
- incremental reconciled revenue is credible;
- core task access remains unrestricted;
- first value and useful return do not show material harmful movement under the predeclared guardrails;
- abandonment/complaint/policy signals remain acceptable;
- the result is not driven primarily by accidental interaction or increased friction.

For sparse niche apps, inconclusive evidence is valid. Do not broaden to unqualified audiences or increase interruption merely to reach statistical significance.

### BF5 — Portfolio-level sustainable monetization
A placement is mature only when revenue remains reconciled and useful-return economics remain healthy over multiple product/ad-demand periods. Maintain a kill/rollback rule for policy changes, UX regression, abnormal accidental-click signals, support/review deterioration or material useful-return degradation.

## MintTap implications
MintTap is a utility for specialist investors, not an attention product. The highest-value sessions may be brief: check portfolio/distribution state, understand an adjustment, leave. Session length and ad impressions/session are therefore dangerous optimization targets.

Canonical posture:
- Home remains ad-free unless future evidence explicitly overturns the product decision; do not reopen it merely for inventory.
- Never interrupt tax-adjustment entry, portfolio editing, distribution interpretation, error/recovery or first-value onboarding.
- Secondary static/result surfaces can be candidates only when the existing AP/AO rules and BF natural-state contract are satisfied.
- A completed, non-urgent task transition may be evaluated under AQ+BF, but frequency should be determined by measured guardrails, not the platform's maximum tolerated frequency.
- Rewarded ads are inappropriate if the reward restores or unlocks ordinary core portfolio functionality. Optional genuinely additive non-monetary value is the only legitimate hypothesis.

## LogMate implications
For a pilot logbook, workflow integrity is even more important than raw ad yield. Never interrupt active flight entry/import reconciliation, duplicate resolution, totals correction, certificate/document workflow, backup/sync recovery, or other states where interruption increases error risk. Home remains an especially poor default monetization surface under the current product direction.

Candidate monetization should begin on clearly secondary, static or completed-result surfaces after launch evidence establishes natural cadence. A small pilot audience makes preserving trust and repeat utility more valuable than maximizing inventory per user.

## Reusable niche-app operating rule
For future professional niche apps, define in this order:
`core task → first value → useful return → natural eligible ad states → placement contract → AR revenue integrity → BF guardrails → incremental revenue test → sustainable portfolio`

If the team cannot define the core task and useful-return event, it is too early to optimize ads.

## Metrics explicitly rejected as standalone optimization targets
- total impressions;
- impressions/session;
- session duration;
- ad CTR;
- eCPM alone;
- fill rate alone;
- total ad revenue without eligible-user normalization;
- DAU-based revenue when only a subset can naturally encounter the placement.

These can diagnose the system but cannot determine whether monetization is good for the business.

## Evidence hierarchy for this gate
1. Current store/publisher policy for hard constraints.
2. Actual implementation/config evidence for placement and trigger semantics.
3. AR-reconciled impression-level revenue.
4. Product analytics for first value, task completion and useful return.
5. Support/review/community evidence as qualitative guardrails.

## Sources
- Google Play Console Help, “Ads” / Better ad experiences, accessed 2026-09-20: https://support.google.com/googleplay/android-developer/answer/9857753
- Google AdMob Help, “Disallowed interstitial implementations,” accessed 2026-09-20: https://support.google.com/admob/answer/6201362
- Google AdMob Help, “Policies for ad units that offer rewards,” accessed 2026-09-20: https://support.google.com/admob/answer/7313578
- Google AdMob Help, “Recommended banner implementations,” accessed 2026-09-20: https://support.google.com/admob/answer/6275335
- Google AdMob Help, “Discouraged banner implementations,” accessed 2026-09-20: https://support.google.com/admob/answer/6275345
- Google AdMob Help, “About collapsible banner ads,” accessed 2026-09-20: https://support.google.com/admob/answer/14160679
- Apple, App Review Guidelines §2.5.18, accessed 2026-09-20: https://developer.apple.com/app-store/review/guidelines/

## Next validation
Audit MintTap implementation/config and analytics to build the first AM–AR+BF placement registry. Do not infer current placements from product plans or screenshots. For each actual placement recover trigger, eligible state, caps, exclusions, impression-level revenue path, and core-value guardrails. Then determine whether any placement has enough evidence for BF3/BF4.