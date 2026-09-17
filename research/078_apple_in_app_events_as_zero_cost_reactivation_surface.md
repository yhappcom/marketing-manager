# 078 — Apple In-App Events as a Zero-Cost Reactivation Surface

Last validated: 2026-09-17

## Decision

Treat Apple In-App Events (IAE) as a **time-bounded discovery/reactivation surface**, not as a generic ASO slot or a substitute for weak activation.

Canonical principle:

> **Event Surface Requires Event Truth.**

A specialist app should create an IAE only when a real, time-bounded in-app experience exists and the event deep link lands directly in that experience. Routine app usage, generic promotion, minor UI work, bug fixes, or an invented marketing deadline do not qualify.

## First-party facts validated

Apple currently states that In-App Events can be discovered on the App Store, including the product page, search, and editorial/personalized surfaces. Users can also opt in to an App Store notification when an event starts. The event can reach new, active, and former users.

Operational limits currently documented by Apple:
- up to 10 In-App Events may be published at one time;
- up to 15 approved events may exist per app in App Store Connect at one time;
- an event may run for at most 31 days;
- its event card can become discoverable up to 14 days before the event starts;
- event metadata and media require review;
- an already approved app can submit an IAE without bundling it with a new app version;
- the deep link must take the user to the proper in-app event destination.

Apple explicitly excludes ordinary recurring activities, price promotions without new content/features/products, and generic awareness promotion. Major Update is an available event badge, but minor UI changes and bug fixes are not sufficient.

Apple Analytics exposes event impressions, event page views/interactions, app opens, downloads and other downstream measures. Apple states that per-event data appears after at least five first-time downloads. Sparse-niche teams must therefore expect censored/absent event-level reporting at very low volume.

## Why this matters to the company

The company has a zero-cost acquisition constraint and narrow professional audiences. IAE can potentially add a Store-native discovery and reactivation surface without paid media, but only when product reality creates a legitimate event.

This changes the launch/growth architecture:

`real product milestone or time-bounded specialist moment → event eligibility → truthful event promise → direct deep link → specialist first/useful value → return`.

It does **not** change the activation rule. Additional Store visibility cannot repair a weak post-install workflow.

## E0–E5 eligibility ladder

### E0 — No event
Normal app operation, evergreen content, generic app promotion.

### E1 — Marketing-shaped pseudo-event
A date or campaign is invented only to obtain Store exposure. Reject.

### E2 — Product change but event-ineligible
Bug fix, minor UI adjustment, routine maintenance, or evergreen feature with no meaningful event moment. Do not create IAE.

### E3 — Legitimate event candidate
A meaningful new feature/content/experience or genuine time-bounded specialist experience exists, but deep-link destination, claim evidence, or user-value path is incomplete.

### E4 — Publishable event
Event truth, timing, metadata, media, geography, deep link, and destination are verified. User can reach the promised experience directly.

### E5 — Evidence-qualified event surface
E4 plus event-specific Store discovery/engagement and downstream first/useful-value evidence. Only E5 can justify reuse of the event pattern.

## MintTap application

Do not manufacture events around ordinary YieldMax distribution dates merely because the audience watches them. A distribution date is an external market occurrence, not automatically an in-app event.

Potential future candidates require an actual MintTap experience tied to the moment. Examples to evaluate, not current claims:
- a substantial newly released ROC/tax-adjustment workflow;
- a genuinely new portfolio-analysis experience launched as a Major Update;
- a time-bounded in-app educational/analysis experience, only if the app actually provides it and event metadata accurately describes it.

A generic “YieldMax distribution week” card that merely opens the normal Home screen fails Event Surface Requires Event Truth.

## LogMate application

LogMate is currently premature for IAE marketing. A production specialist first-value workflow must exist first.

Future legitimate candidates could include a major newly released logbook workflow or other substantial in-app experience, but regulatory/professional claims must independently pass the existing claim-evidence gate. A marketing date cannot convert roadmap functionality into an event.

## Zero-cost reactivation advantage

IAE has a distinct role from CPP/CSL intent routing:
- CPP/CSL: route relatively stable search intent to a matched Store promise;
- IAE: expose a **time-bounded** product moment and potentially reactivate former/current users;
- PPO/randomized experiments: estimate causal creative effects when evidence budget permits.

Do not collapse these surfaces into one ASO metric.

## Measurement ledger

For each event record:

`event_id → event truth/type → publish window → territory → audience intent → Store impression → event page interaction → notification opt-in/tap where available → app open/download → deep-link arrival → promised experience reached → first/useful value → subsequent useful return`

Interpretation rules:
1. Event impressions are discovery, not value.
2. Event downloads are acquisition, not activation.
3. Event app opens are not proof the deep-linked experience worked.
4. Cross-event conversion differences are cohort observations unless a valid causal design exists.
5. Sparse event analytics may not appear until Apple's reporting threshold is met; absence of a report is not zero demand.

## Anti-patterns

- inventing a monthly “event” to obtain recurring Store inventory;
- treating an ETF ex-dividend/payment date itself as MintTap content;
- using IAE as a release-note card for bug fixes;
- deep-linking to Home when metadata promises a specific workflow;
- creating many events because Apple permits 10 concurrent/15 approved;
- counting Store notification opt-ins as retained users;
- increasing event cadence before first/useful-value evidence exists.

## Reusable company rule

Before creating an IAE, answer all five:
1. What genuinely happens **inside the app**?
2. Why is this moment meaningfully time-bounded or a major new experience?
3. Can metadata describe only that event, without generic app promotion?
4. Does the deep link land directly at the promised experience?
5. Can downstream value be distinguished from Store exposure?

Any “no” keeps the candidate below E4.

## Sources

Validated against Apple Developer / App Store Connect documentation on 2026-09-17:
- Overview / Offer In-App Events
- App Review Guidelines §2.3.13
- In-App Event badges
- Submit / manage In-App Events
- App Store Connect Analytics — In-App Events
- App Store Discovery and Engagement analytics schema
