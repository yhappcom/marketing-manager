# Research 229 — Store-Native Re-engagement Event Integrity

Date: 2026-09-24
Status: Validated addition
Scope: Zero-cost Store-native acquisition/re-engagement for niche professional apps, with Apple In-App Events as the currently validated mechanism.

## Why this research exists

For a small specialist app, re-engagement is often discussed as push, email, social posting, or paid retargeting. Apple provides a Store-native surface that can reach new, active, and lapsed users without paid media: In-App Events. This is useful only when the app has a genuine time-bounded event or major update. It must not become a loophole for generic promotion.

## Authoritative findings

Apple states that In-App Events can be discovered directly in the App Store and can reach new, current, and previous users. They can appear on the product page, in search, and in editorially curated or personalized recommendations. Users can opt into an App Store notification for the event start. Users without the app can download from the event surface and then open into the relevant in-app destination.

Apple explicitly says repetitive activities such as daily tasks/rewards, price promotions without new content/features/goods, and general app-awareness promotion are not good In-App Event candidates. A qualifying event can last up to 31 days and can be promoted up to 14 days before its start. Apps can have up to 15 approved events in App Store Connect and up to 10 published at once.

The event requires a deep link to the relevant experience. Apple recommends universal links for security, discourages URL shorteners/unnecessary redirects, and says the destination should reflect user state: a live event can deep-link directly; a pre-event state may use a relevant landing destination; a new user may need onboarding before reaching the event.

Apple allows the developer to specify an event purpose: all users, attract new users, keep active users informed, or bring back lapsed users. Apple uses this as one factor for personalized recommendations; published events remain discoverable to all users.

App Store Connect Analytics exposes event impressions, event-page views, app opens, downloads, subscriptions, and sales, filterable by dimensions such as territory, source type, and device. Critically for sparse niche apps, data for an individual event appears only after at least five first-time downloads. Missing event analytics below that threshold is therefore unknown/suppressed evidence, not zero demand or zero engagement.

## EO0–EO5 Store-Native Re-engagement Event Integrity Gate

EO0 — Event eligibility identity
- Identify the concrete time-bounded event, major update, special content, challenge, or experience.
- Reject generic awareness, routine recurring activity, or price-only promotion.

EO1 — Audience-state identity
- Declare the primary intended state: new, active, or lapsed user.
- Do not treat one event as evidence that all three populations respond equivalently.

EO2 — Destination integrity
- Event card/detail promise must match the in-app destination.
- Deep link must be tested.
- Preserve necessary onboarding for new users and a route back to the main app experience.

EO3 — Store-distribution integrity
- Separate product-page/search/editorial/personalized exposure from owned/social/community promotion of the event.
- Store visibility is distribution opportunity, not guaranteed reach or featuring.

EO4 — Sparse-evidence integrity
- Preserve the five-first-time-download analytics threshold.
- Missing event-level analytics below threshold remains unknown, not zero.
- Keep impressions → event-page views → opens/downloads → first specialist value → repeated specialist value distinct.

EO5 — Qualified re-engagement decision
- Success requires restored or new specialist value, not event impressions, notification opt-ins, downloads, or opens alone.
- Reuse only when the event is truthful, operationally supportable, and does not manufacture artificial urgency.

## MintTap application

Potential future candidates must arise from real product/content changes or genuinely time-bounded specialist moments. Examples may include a substantial new YieldMax-specific capability or a bounded release moment, but no event should be created merely because a distribution date, ordinary portfolio check, or recurring dividend cycle exists. Routine investor behavior is not automatically an App Store event.

For any candidate, preserve:
`event eligibility → intended user state → Store exposure/source → event-page engagement → download/open → deep-linked MintTap task → first/restored YieldMax specialist value → repeat specialist value`.

Do not use financial-market urgency, fear of missing out, or routine market movement to manufacture event eligibility.

## LogMate application

Before launch, In-App Events are not a substitute for release readiness or pilot-community validation. Post-launch, a major capability release or genuinely bounded pilot-relevant experience could qualify if it meets Apple eligibility and the in-app destination is complete and reliable.

Do not turn recurring pilot duties, ordinary logbook entry, recency checks, or routine reminders into artificial Store events. Critical flight/logbook workflows remain protected from intrusive monetization.

## Reusable company rule

Store-native re-engagement is a distribution primitive, not a reason to invent an event. Use it only when a real product moment already exists. The canonical outcome is not Store exposure but qualified first/restored value followed by repeated specialist value.

## Evidence required before use

Record: platform; event eligibility rationale; event metadata/version; territory; start/end/promotion dates; intended audience state; deep-link target/test result; source type; event impressions; event-page views; notification opt-ins where available; app opens; first-time downloads/redownloads where semantically available; privacy/threshold state; first/restored specialist value; repeated specialist value; and any support/review impact.

## Sources

- Apple Developer, In-App Events: https://developer.apple.com/app-store/in-app-events/
- Apple Developer, App Store Connect Analytics — In-App Events: https://developer.apple.com/help/app-store-connect-analytics/acquisition/in-app-events
- Apple Developer, Submit an In-App Event: https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-in-app-event

## Unresolved

- Actual MintTap iOS In-App Event inventory/history, if any.
- Whether MintTap has a genuine upcoming event/update that satisfies Apple eligibility.
- Actual event-to-specialist-value instrumentation.
- Google Play equivalent Store-native promotional-content capabilities require a separate authoritative validation pass before cross-platform equivalence is assumed.