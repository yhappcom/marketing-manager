# 005 — Ad-Supported Unit Economics & UX Guardrails: Revenue per Retained User, Not Ads per Screen

Status: **FOUNDATION — integrated checkpoint**  
Reviewed: 2026-09-15

## Capability target

Build the monetization foundation required to advise yhappcom on ad-supported apps without degrading the product.

Questions:

1. How does ad revenue mechanically arise from user activity?
2. Which metrics explain a revenue change?
3. Why are eCPM and impression count insufficient as standalone optimization targets?
4. How can ad placement/frequency increase short-run revenue while reducing long-run value?
5. What product/UX guardrails should constrain monetization experiments?
6. How should different ad formats be evaluated for utility-style specialist apps?

---

## RELATED DOMAIN CHECK

### Marketing Manager evidence checked

- `002_choice_value_uncertainty_trust.md`
- `003_niche_distribution_community_economics.md`
- `004_cash_light_acquisition_economics.md`
- company marketing constraints and Stage 1 applied supplement.

Inherited rule:

`retained relevant users → repeated useful sessions → monetizable opportunities`, while advertising itself can increase perceived sacrifice and reduce trust/retention.

### Product truth

MintTap branch 1.0.29 explicitly includes Google Mobile Ads in the stack. This study does not assume current ad placements, frequency, network performance, or revenue.

LogMate's current README establishes product architecture but does not establish a live ad implementation here. No implementation claim is made.

### Design Studio

Ad placement materially touches Layout/Interaction, Color, Type, accessibility, and Web/PWA behavior. Marketing Manager owns the monetization objective and measurement; Design Studio should own reusable visual/interaction judgment for actual placements.

### Current-source requirement

Ad network terminology, supported formats, mediation behavior, privacy requirements, and policy constraints are `CHANGE WATCH` items.

Google AdMob official documentation was checked on 2026-09-15 for current metric definitions and available formats.

---

## 1. The basic ad-revenue tree

A useful revenue decomposition is:

`Active Users`

× `Sessions per Active User`

× `Eligible Ad Opportunities per Session`

× `Ad Request Rate`

× `Match Rate`

× `Show Rate`

× `Revenue per Impression`

≈ `Ad Revenue`.

With eCPM:

`Revenue ≈ Impressions × eCPM / 1000`.

This is a management decomposition, not a statement that every network reports every stage identically.

### Current official definitions — Google AdMob

`SOURCE` — AdMob defines:

- **Requests** as ad requests received from the app;
- **Match rate** as matched requests divided by requests;
- **Impressions** as ads shown to users;
- **Show rate** as impressions divided by matched requests;
- **eCPM** as estimated earnings per 1,000 impressions, calculated as `(earnings / impressions) × 1000`;
- **Ads ARPU** as ad revenue divided by active users in supported reporting contexts.

Sources checked 2026-09-15:
- https://support.google.com/admob/answer/7356428
- https://support.google.com/admob/table/9462111

### Why this matters

If revenue changes, diagnose the component:

- more/fewer active users?
- more/fewer sessions?
- more/fewer eligible opportunities?
- more/fewer requests?
- lower match rate?
- lower show rate?
- lower eCPM?
- geography/seasonality/mix change?

Do not react to a revenue decline by automatically increasing ad frequency.

---

## 2. eCPM is a price-like metric, not the business objective

`SOURCE` — AdMob explicitly notes that eCPM can fluctuate with market/platform conditions and recommends reviewing impressions, eCPM, requests, match rate, and other metrics together rather than interpreting eCPM alone.

Source checked 2026-09-15:  
https://support.google.com/admob/answer/15337570

### Failure mode

An operator may see:

`higher eCPM → assume monetization improved`.

But total revenue can decline if impressions fall sufficiently.

The opposite can also occur:

`lower eCPM + much higher impressions → higher total revenue`.

Neither condition tells us whether the **product** improved.

### yhappcom objective

A stronger business metric family is:

- ad revenue per active user;
- ad revenue per retained user;
- ad revenue per completed core task/session;
- long-run revenue per acquired relevant user;
- retention/churn under different ad loads.

These connect ad economics to the user base that generates the inventory.

---

## 3. More ad opportunities are not automatically more valuable

Increasing frequency can raise potential impressions per current session.

But ads can also change:

- session duration;
- task completion;
- willingness to return;
- review/rating behavior;
- trust;
- perceived professionalism;
- privacy/consent burden;
- referral likelihood;
- accidental-click/invalid-activity risk.

### Long-run model

A conceptual revenue model is:

`Long-run ad value per acquired user`

≈

`sum over future periods [probability user remains active × sessions × impressions × revenue per impression]`

minus attributable serving/operational costs.

This makes retention endogenous to monetization design.

`MARKETING JUDGMENT` — The optimal ad load is therefore not necessarily the load that maximizes impressions in a single session.

---

## 4. Intrusiveness is a real behavioral risk, but context matters

`SOURCE` — Research on digital/mobile advertising has repeatedly linked perceived invasiveness/intrusiveness to irritation and avoidance in specific contexts.

Examples:

- Edwards, Li, and Lee-style intrusiveness literature established interruption as a central mechanism in online advertising research;
- a 2021 *Journal of Retailing and Consumer Services* study found space and attention invasiveness were associated with irritation, which in turn related to advertising avoidance in its social-media context;
- a 2025 *Journal of Research in Interactive Marketing* study found animated in-app banner ads produced greater perceived intrusiveness than static ads in its controlled experiments.

Useful current references:
- https://www.sciencedirect.com/science/article/pii/S096969892031328X
- https://www.sciencedirect.com/org/science/article/pii/S2040712225000155

### Scope limit

These studies do **not** prove that every banner, animation, interstitial, or ad in every specialist utility app causes churn.

They justify treating intrusiveness as a measurable risk, not assuming its magnitude for MintTap or LogMate.

---

## 5. Current AdMob ad-format taxonomy

`SOURCE` — Google Mobile Ads documentation currently lists these major formats for Flutter/iOS/Android integrations:

- Banner;
- Interstitial;
- Native;
- Rewarded;
- Rewarded interstitial;
- App open.

Source checked 2026-09-15:  
https://developers.google.com/admob/flutter/quick-start

Google's documentation characterizes interstitials as full-page ads intended for natural transition points, rewarded as opt-in value exchange, native as customizable to app presentation, and app-open ads as overlays shown around app loading/foreground entry.

### Foundation warning

The existence of a format is not a recommendation to use it.

A specialist utility app must evaluate whether its task structure actually contains a legitimate transition or value exchange appropriate to that format.

---

## 6. yhappcom's hard monetization guardrail

Owner preference rejects cluttered advertising and ads that materially restrict normal app use.

Canonical objective:

> **Maximize sustainable advertising revenue subject to preserving a clean, trustworthy, usable product.**

This means monetization has hard guardrails rather than one scalar objective.

### Guardrail classes

#### Core-task integrity
- no obstruction of critical information;
- no forced ad before ordinary essential task completion unless explicitly approved after evidence;
- no repeated interruption of short workflows;
- no ad placement that makes taps on product controls ambiguous.

#### Trust / professionalism
- no deceptive ad/product visual blending;
- no design whose business logic appears to prioritize ad serving above the specialist task;
- no misleading reward/access framing.

#### Accessibility
- primary task remains operable with text scaling, focus/keyboard/assistive technology where relevant;
- ad containers must not destroy structural reading/navigation order;
- no reliance on accidental proximity for monetization.

#### Performance
- monitor startup/loading latency;
- layout shift/jank;
- memory/network burden;
- ad failure behavior.

#### Policy / invalid activity
`SOURCE` — AdMob defines invalid activity to include clicks or impressions that artificially inflate advertiser costs or publisher earnings, including accidental clicks.

Source checked 2026-09-15:  
https://support.google.com/admob/answer/6168758

`MARKETING JUDGMENT` — Accidental clicks are not only bad UX; they can also create monetization-policy risk.

---

## 7. Ad placement must be mapped to the task model

Before selecting a format, map:

1. What is the user's primary task?
2. How long does it normally take?
3. Where are true task boundaries?
4. Which information must remain continuously visible?
5. Is the user in a high-stakes/precision state?
6. Is there a user-controlled moment that can host an ad without coercion?
7. What frequency is acceptable before the product feels ad-led?
8. What happens if the ad fails to load?

### Utility-app principle

For MintTap/LogMate-like specialist tools, a “natural break” cannot simply be invented because an interstitial format exists.

A break should correspond to the user's task structure, not the monetization system's desire for an impression.

Actual placement design requires Product + Design Studio validation.

---

## 8. Format-level hypotheses, not universal rankings

### Banner

Potential strengths:
- predictable inventory;
- continuous but spatially bounded monetization;
- low interaction requirement.

Potential risks:
- permanent visual clutter;
- lost vertical space on data-dense screens;
- accidental proximity to controls;
- habituation/low value;
- refresh/network overhead.

### Native

Potential strengths:
- more controllable integration with content hierarchy;
- potentially less visually alien than standard display units.

Potential risks:
- deceptive blending if disclosure/hierarchy is poor;
- greater design/implementation burden;
- can still consume core information space.

### Interstitial

Potential strengths:
- stronger per-impression monetization potential in some markets;
- no permanent screen-space occupation.

Potential risks:
- full interruption;
- severe mismatch with short utility workflows;
- session abandonment;
- perceived coercion when shown outside legitimate transitions.

### Rewarded

Potential strengths:
- explicit user choice/value exchange;
- clearer consent to the interruption.

Potential risks:
- requires a legitimate reward that does not violate the company's “basic use should remain available” philosophy;
- can distort product incentives if useful functionality is artificially withheld.

### App open

Potential strengths:
- monetizes launch/foreground moments.

Potential risks:
- slows perceived access to a tool the user opened for immediate utility;
- can be especially damaging if sessions are brief and task-driven.

### Rewarded interstitial

Potential strengths/risks combine interruption with incentive and require careful policy/UX review.

`MARKETING JUDGMENT` — No format receives a universal yhappcom approval. Each format is a hypothesis conditioned on the app's workflow.

---

## 9. The ad experiment metric stack

An ad experiment should measure at least four layers.

### Layer A — serving mechanics
- requests;
- match rate;
- show rate;
- impressions;
- eCPM;
- estimated earnings;
- revenue per active user.

### Layer B — session/product behavior
- core-task completion;
- session abandonment;
- session duration interpreted cautiously;
- screen exits after ad;
- repeat task frequency;
- latency/crash/jank changes.

### Layer C — retention/trust
- D1/D7/D30 retention where sample supports it;
- uninstall/churn proxies;
- rating/review changes;
- support complaints mentioning ads;
- qualitative annoyance/intrusiveness feedback.

### Layer D — long-run economics
- revenue per retained user;
- revenue per acquired relevant user cohort;
- incremental ad revenue versus incremental churn;
- source/geography/segment heterogeneity.

Do not declare a winner from Layer A alone.

---

## 10. Simple break-even logic for adding ad load

Suppose a heavier ad treatment adds:

`+Δ ad revenue per current active user`

but causes:

`-Δ probability of remaining active in future periods`.

The heavier treatment is economically justified only if the incremental current/future ad revenue exceeds the value of users lost because of the treatment, after uncertainty and guardrails.

This requires cohort measurement rather than guessing.

### Practical implication

A $0.01 increase in same-day ARPU can be bad if it causes enough users to stop returning.

Conversely, a more restrained placement with lower immediate revenue can be superior if it preserves many more future sessions.

---

## 11. Niche apps add another constraint: limited replacement supply

In a mass consumer market, high churn may sometimes be masked temporarily by large acquisition volume.

For a narrow specialist audience, replacement users may be finite and expensive in attention/trust even when media spend is zero.

Therefore intrusive monetization can consume two scarce assets simultaneously:

- current retained-user inventory;
- future reputation within the niche.

`MARKETING JUDGMENT` — This makes ad-induced trust damage potentially more serious for current yhappcom products than a raw daily-revenue dashboard would show.

This is a strategic hypothesis to validate, not a measured effect yet.

---

## 12. Foundation ad dashboard architecture

Do not build only an “ad revenue” dashboard.

A future management view should connect:

### User base
- active users;
- new users;
- retained cohorts;
- source/channel;
- geography.

### Usage
- sessions/user;
- key task completions;
- eligible ad moments.

### Ad serving
- requests;
- match/show rates;
- impressions;
- eCPM;
- earnings;
- Ads ARPU/RPM as applicable.

### Guardrails
- abandonment;
- retention;
- ratings/reviews;
- ad complaints;
- latency/crash/performance;
- accidental-click/invalid-activity indicators if available.

### Experiment context
- placement;
- format;
- frequency;
- app version;
- geography;
- user segment;
- date/season.

This prevents a change in market eCPM from being mistaken for a design win.

---

## 13. Retained Foundation judgment

1. Ad revenue is generated by retained usage, serving mechanics, and market price together.
2. eCPM is not a standalone business objective.
3. More impressions can reduce long-run revenue if the added burden damages retention enough.
4. Format availability does not imply format suitability.
5. Actual task boundaries should determine where interruptions are even considered.
6. Accidental clicks are both UX and policy risk.
7. Ad experiments require serving, product-behavior, retention/trust, and long-run economic metrics.
8. Limited niche replacement supply increases the strategic importance of protecting trust and retention.
9. Marketing Manager owns monetization objective/measurement; Design Studio/Product own material implementation constraints and validation.
10. yhappcom's owner preference is appropriately represented as a constrained optimization problem, not a revenue-maximization-at-any-cost policy.

---

## CHANGE WATCH / OPEN

Current-source recheck required before production decisions for:

- Google AdMob policies and format guidance;
- Apple/Google privacy/consent requirements;
- mediation/bidding behavior;
- invalid-activity rules;
- regional consent requirements;
- platform-specific SDK behavior.

Project evidence still needed:

- actual MintTap ad locations/formats/frequency;
- MintTap request→match→show→impression metrics;
- Ads ARPU/revenue by geography/format;
- ad exposure by cohort;
- retention by ad treatment;
- ad-related reviews/feedback;
- performance cost;
- whether/how LogMate intends to monetize with ads at launch.

---

## Sources

Official/current:
- Google AdMob app overview metrics: https://support.google.com/admob/answer/7356428
- Google AdMob reports glossary: https://support.google.com/admob/table/9462111
- Google AdMob eCPM fluctuation guidance: https://support.google.com/admob/answer/15337570
- Google AdMob Flutter formats: https://developers.google.com/admob/flutter/quick-start
- Google AdMob invalid activity overview: https://support.google.com/admob/answer/6168758

Research:
- “When I feel invaded, I will avoid it: The effect of advertising invasiveness on consumers’ avoidance of social media advertising,” *Journal of Retailing and Consumer Services*, 2021. https://www.sciencedirect.com/science/article/pii/S096969892031328X
- “Are animated in-app banner ads intrusive? Examining the interplay of structural and semantic ad factors,” *Journal of Research in Interactive Marketing*, 2025. https://www.sciencedirect.com/org/science/article/pii/S2040712225000155
