# 017 — Ad Monetization by Task State, Frequency, Latency & Retention

Date: 2026-09-15
Status: FOUNDATION / DECISION SYSTEM

## Purpose

Research 005 established the revenue tree and UX guardrails. This block does not repeat it. It converts those principles into an operational decision system for specialist utility apps where advertising is intended to fund the product without making ordinary use intrusive or restricted.

Canonical objective:

`maximize long-run ad revenue from retained useful usage, subject to core-task integrity, trust, policy, accessibility and performance guardrails`

Not:

`maximize impressions per session`.

## 1. The scarce resource is an acceptable ad opportunity

A screen view, tap, or elapsed minute is not automatically an ad opportunity.

Define an **eligible ad opportunity** only when all are true:

1. the user is not in the middle of a precision/core task;
2. the ad will not obscure required information or a control;
3. the timing is expected rather than surprising;
4. the placement complies with current platform/network policy;
5. latency will not cause the ad to arrive after the intended transition;
6. the user has not exceeded the experiment's exposure/frequency guardrail;
7. the treatment remains compatible with the company's no-usage-restriction principle.

This makes opportunity quality upstream of requests, match rate, impressions and eCPM.

## 2. Task-state model

Before choosing a format, classify the user state.

### State A — Entry / urgent access

Examples: launch, foreground return, opening a portfolio/logbook to check information quickly.

Default risk: HIGH. The user has explicitly asked the app for immediate utility.

Google's current app-open guidance says not to show an app-open ad on the very first app start; cold-start ads should be confined to a loading screen, and if the app reaches main content before the ad loads, the ad should not then appear. This is an important latency/expectation rule, not a blanket endorsement of app-open ads.

Company default: no app-open format merely because launch is technically monetizable. Require evidence that launch delay does not damage task access/retention.

### State B — Active precision / input / reading

Examples: entering a transaction, entering/editing a flight record, reconciling figures, reading detailed portfolio/logbook information.

Default interruption eligibility: NONE.

Current AdMob interstitial guidance prohibits surprising users while focused on tasks such as filling forms or reading content and requires logical breaks. Full-screen monetization is therefore incompatible with this state by default.

### State C — Natural completion / transition

Examples: after a meaningful workflow has actually completed and before the user deliberately moves to another independent area.

Default: candidate state for a carefully tested full-screen placement, not automatic approval.

The break must exist in the product workflow before monetization is considered. Do not manufacture extra confirmation/result screens simply to create inventory.

### State D — Passive/non-interactive information surface

Candidate for spatially bounded display inventory only if the ad does not crowd data, sit next to controls, shift content, or impair accessibility.

Anchored adaptive banners are designed to remain at the top/bottom and adapt height to width. Their technical suitability does not establish UX suitability on data-dense specialist screens.

### State E — Explicit value exchange

Rewarded ads require an explicit opt-in experience. For yhappcom, a reward must be genuinely optional and must not turn ordinary/core product access into a hostage mechanism.

Therefore `watch ad to use essential feature`, `watch ad to continue normal logbook/portfolio use`, or artificial quota removal conflicts with the company constraint even if a rewarded format is technically available.

## 3. Format admission rules

### Anchored/inline banner

Admit only if:
- reserved layout space prevents content shift/overlap;
- sufficient separation exists from navigation and interactive controls;
- information density remains acceptable;
- the screen naturally supports persistent/inline inventory.

Current AdMob guidance identifies proximity to navigation/interactive content as a major accidental-click risk and prohibits overlapping content. It also recommends reserving ad space during loading so late ads do not cover or shift content.

### Interstitial

Admit only at a genuine logical break.

Current AdMob policy/guidance:
- not at app load/exit as ordinary interstitials;
- not repeatedly after each action;
- no more than one interstitial after every two user actions is a compliance ceiling in the cited guidance, **not a recommended yhappcom frequency target**;
- not immediately after another interstitial;
- not unexpectedly while focused on a task;
- preload when appropriate to prevent network latency from making the ad arrive after the intended break.

Company rule: policy maximums are never optimization targets. Begin materially below any policy ceiling and increase only through controlled evidence.

### App open

Admit only after repeat use and only around genuine waiting/loading state. Never use on first app start. If content becomes ready first, abandon that opportunity rather than interrupt after content appears.

### Rewarded

Admit only for optional incremental value with explicit user choice. No essential workflow gating.

### Rewarded interstitial

Higher burden than ordinary rewarded because it can appear automatically at transitions. Current implementation guidance requires an intro screen with reward messaging and a skip option. Company default is `REQUIRES EXCEPTION CASE`; do not use merely to raise eCPM.

## 4. Frequency is a treatment, not a constant

Do not choose frequency from industry folklore.

Represent a treatment as:

`format × placement/task-state × eligibility rule × exposure cap × minimum interval × session rule × app version`

Examples of questions, not prescriptions:
- maximum full-screen exposures per session;
- minimum elapsed time between eligible full-screen opportunities;
- whether a short session receives zero full-screen ads;
- whether a user who just activated should receive a reduced ad load;
- whether an ad shown at one transition suppresses the next eligible transition.

For persistent banners, current AdMob implementation guidance recommends ads persist for 60 seconds or longer and notes that more frequent refresh can hurt fill rate. This is a serving guideline, not proof that every yhappcom screen should refresh every 60 seconds.

## 5. Latency changes the placement

A monetization event is defined by **when the user sees it**, not when code requested it.

If an interstitial requested at a transition arrives after the next page becomes interactive, it has changed from `transition ad` to `unexpected interruption`.

Operational rule:

`missed intended window → skip impression`, not `show late because inventory loaded`.

Preloading can reduce this risk, but cached-ad expiry and SDK rules must be respected. App-open ads have format-specific expiry guidance; do not generalize one format's cache lifetime to another.

## 6. Accidental clicks are negative evidence

Do not optimize CTR upward as a publisher objective.

Current AdMob policy states that clicks must reflect genuine user interest; accidental/deceptive clicks can trigger policy/serving interventions such as Confirmed Click. Ad proximity to navigation/buttons/content is explicitly identified as a risk.

Therefore an unexplained CTR increase after moving an ad closer to controls is a **risk signal**, not a monetization win.

Monitor by ad unit/placement where reporting permits:
- CTR discontinuity;
- Confirmed Click/policy-center status;
- support complaints;
- post-ad abandonment;
- layout/interaction errors.

## 7. Revenue diagnosis before ad-pressure changes

When revenue declines, inspect in order:

`retained active users → eligible opportunities → requests → match → show → impressions/viewers → eCPM → revenue`

AdMob currently exposes `ad viewer rate = ad viewers / active users` and `impressions per ad viewer = impressions / ad viewers`. These add useful pressure diagnostics: revenue can rise because more users are exposed, because exposed users see more ads, or because price improves.

Do not increase frequency until the failing component is identified.

## 8. Exposure-pressure dashboard

Add these to the research-005 dashboard when available:

### Exposure
- ad viewer rate;
- impressions / ad viewer;
- full-screen impressions / exposed user;
- ad-bearing sessions / sessions;
- eligible opportunities skipped due to cap/task state/late load.

### Serving
- requests;
- match rate;
- show rate;
- eCPM;
- estimated revenue;
- Ads ARPU.

### Product guardrails
- core-task completion;
- abandonment immediately after ad;
- activation rate for new cohorts;
- workflow-cadence retention;
- crash/jank/startup latency;
- ad-related support/reviews;
- policy/Confirmed Click signals.

A skipped ad due to a guardrail is not automatically lost revenue; it may preserve future sessions.

## 9. Experiment decision rule

Compare a restrained control with one material change at a time when volume allows.

Pre-register:
- hypothesis;
- placement/task state;
- format;
- frequency/exposure treatment;
- primary revenue metric;
- retention/core-task guardrails;
- observation window;
- minimum evidence threshold;
- stop conditions.

Possible outcomes:

- `RETAIN`: revenue improves and guardrails remain acceptable.
- `REVISE`: serving mechanics improve but a correctable latency/layout issue appears.
- `REJECT`: revenue gain accompanies material task/retention/trust/policy harm.
- `INCONCLUSIVE`: niche sample too small or privacy/noise prevents decision.

Do not promote `INCONCLUSIVE` to winner because same-day revenue is higher.

## 10. Incremental long-run test

For treatment T versus control C:

`incremental value ≈ Δcurrent ad revenue + expected Δfuture ad revenue from changed retention/use`

The second term can be negative.

Practical decision question:

> Does the extra exposure create more lifetime monetizable usage than it destroys?

Exact LTV modeling is not required at launch. Directional retention and repeated-core-use guardrails are still superior to same-session revenue alone.

## 11. MintTap provisional task map — HYPOTHESIS

Without inspecting the live implementation, do not prescribe placements.

Likely high-risk/no-interruption states:
- transaction/portfolio input or editing;
- ROC/tax-sensitive review;
- detailed calculations/data reconciliation;
- immediate portfolio checks after launch.

Potential lower-interruption candidates to investigate:
- stable non-interactive summary surfaces with reserved banner space;
- genuine completion/transition boundaries if they exist in actual workflow.

These require product telemetry, UI inspection and Design Studio review.

## 12. LogMate provisional task map — HYPOTHESIS

Likely high-risk/no-interruption states:
- flight-entry/edit forms;
- import conflict resolution;
- backup/restore/export;
- certificate/document handling;
- any time-critical quick lookup.

Potential candidates require observed workflow boundaries; do not invent a full-screen break in a professional logbook merely to monetize.

Rewarded access restrictions are particularly unsuitable if they make ordinary record keeping/export/recovery conditional on ad viewing.

## 13. Reusable company checklist

Before adding/increasing an ad:

1. What exact user task state is this?
2. Is this an existing natural opportunity or manufactured inventory?
3. What happens if the ad loads late?
4. What suppresses the ad after recent exposure?
5. Can the user complete normal/core use without watching it?
6. Is ad space reserved and separated from controls?
7. Which serving metric is expected to improve?
8. Which product/retention metrics could worsen?
9. What is the rollback/stop condition?
10. Does long-run retained-user revenue plausibly improve?

If these cannot be answered, the placement is not experiment-ready.

## 14. Current authoritative evidence checked 2026-09-15

Google first-party sources:
- AdMob — Disallowed interstitial implementations: https://support.google.com/admob/answer/6201362
- AdMob — Recommended interstitial implementations: https://support.google.com/admob/answer/6201350
- AdMob — Discouraged banner implementations: https://support.google.com/admob/answer/6275345
- AdMob — Implementation guidance: https://support.google.com/admob/answer/2936217
- AdMob — Confirmed Click: https://support.google.com/admob/answer/10094971
- Google Play — Ads policy: https://support.google.com/googleplay/android-developer/answer/9857753
- Google Mobile Ads — Flutter banner: https://developers.google.com/admob/flutter/banner
- Google Mobile Ads — App-open implementation/guidance: https://developers.google.com/admob/android/next-gen/app-open and https://developers.google.com/admob/ios/app-open
- Google Mobile Ads — Rewarded: https://developers.google.com/admob/android/rewarded and https://developers.google.com/admob/ios/rewarded
- Google Mobile Ads — Rewarded interstitial: https://developers.google.com/admob/android/rewarded-interstitial
- AdMob — Ad viewer rate: https://support.google.com/admob/answer/15241608
- AdMob — Impressions per ad viewer: https://support.google.com/admob/answer/15282068

## 15. Retained expert judgment

The new optimization hierarchy is:

`retained user → legitimate task-state opportunity → compliant timely request/show → acceptable exposure pressure → revenue`

not:

`screen → ad slot → impression`.

The economically useful ad opportunity is therefore constrained by product state and future user value. In specialist niche apps, skipping a badly timed impression can be the revenue-maximizing decision over the user's lifetime.

## Next gate

1. Inspect MintTap's actual ad implementation and telemetry before any product-specific recommendation.
2. If implementation access is not appropriate/available, continue the general curriculum into community trust/permission operations and reusable launch/distribution systems rather than inventing MintTap data.
3. Later validate frequency/placement with production cohorts and long-run retained-user revenue.