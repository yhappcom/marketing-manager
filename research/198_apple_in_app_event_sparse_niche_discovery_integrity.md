# Research 198 — Apple In-App Event Sparse-Niche Discovery Integrity

Validated: 2026-09-22

## Scope
Operational framework for using Apple In-App Events (IAE) as a zero-media-spend discovery/reactivation surface for sparse professional apps without manufacturing pseudo-events.

## Authoritative findings
Apple defines In-App Events as timely experiences/content. Event cards can appear on the product page, in App Store search, and in editorial/personalized surfaces. People can discover an event directly; users without the app can download from the event surface, and users opening the app can be routed to the relevant experience.

Apple explicitly says poor candidates include repetitive activities, price promotions without new content/features/goods, and general awareness promotions. A permanent feature/content addition can be highlighted only when the event itself centers on a related limited-time moment or experience. Therefore a routine release, routine data refresh, ordinary distribution update, evergreen capability, or generic 'try the app' campaign must not be relabeled as an IAE.

An event can last up to 31 days and may be promoted up to 14 days before it starts. Regional availability and dates can be configured. Apple permits up to 15 approved events in App Store Connect at a time and up to 10 published events on the Store at a time.

The event purpose can be set to all users, attract new users, keep active users informed, or bring back lapsed users. Apple states this purpose is one factor in personalized recommendations and uses app-usage information processed on-device. Purpose therefore represents intended audience, not proof that Apple delivered that audience.

Every event should have destination continuity. Apple recommends a deep link to the relevant event content, preferably a universal link; unnecessary redirect/shortener chains should be avoided. If onboarding is necessary for a new user it may precede the destination, but the user should still reach the promised event and retain a path back to the main app experience.

App Analytics can report event impressions, event-page views, app opens, downloads, subscriptions and sales, with dimensions including territory/source/device. Individual event data appears after at least five first-time downloads. This privacy/reporting threshold means absence of event-level reporting in a very small niche app is not evidence of zero event activity.

## DJ0–DJ5 Apple In-App Event Discovery & Reactivation Integrity Gate

### DJ0 — Surface and eligibility identity
Record platform/version, Store territory/localization, event status, publish/start/end times, badge, priority, and whether the event is actually published. Draft, approved, scheduled, published, past and featured are distinct states.

### DJ1 — Event truth / temporality integrity
Require a real time-bounded user experience, timely content, or meaningful moment. Reject routine maintenance, recurring data refresh, ordinary portfolio updates, generic awareness, evergreen capability, and artificial countdowns created only to gain Store inventory.

### DJ2 — Audience-purpose integrity
Declare the primary job: acquisition, active-user engagement, lapsed-user reactivation, or all users. Do not infer delivered audience from the selected purpose. Evaluate each cohort separately where evidence permits.

### DJ3 — Promise-to-destination continuity
Event card/name/description/media must describe the actual event. Open/deep-link routing must reach the promised state, subject only to necessary onboarding/authentication. Record deep-link target, fallback, unsupported-OS behavior and failure path.

### DJ4 — Measurement-semantic integrity
Keep event impression, details-page view, notification interest, app open, first-time download, redownload/reactivation, value completion and repeated core value separate. Preserve Store source/territory/device identity and Apple reporting thresholds. Do not treat missing sparse event-level data as zero activity.

### DJ5 — Qualified-growth decision
Keep or repeat an event pattern only if it attracts or restores the intended specialist audience and users reach the promised core value without degrading normal workflows. Editorial featuring is upside, not the event's success criterion.

## Canonical semantic rules
- `release/update exists ≠ In-App Event`
- `timely label ≠ genuinely time-bounded user value`
- `published event ≠ featured event`
- `event purpose selected ≠ audience delivered`
- `event impression ≠ event engagement`
- `event page view ≠ app open`
- `app open ≠ specialist-value completion`
- `download ≠ retained specialist user`
- `missing event-level analytics under sparse thresholds ≠ zero event activity`
- `more event cards ≠ more sustainable organic discovery`

## MintTap application
Do not create IAEs for ordinary YieldMax distribution updates, price/data refreshes, ROC updates, routine tax data maintenance, or generic portfolio-tracker promotion. A candidate must represent a genuine limited-time specialist experience or a meaningful feature/content launch with a legitimate time-bounded moment. Any candidate must route users to the exact promoted value and be measured through specialist-value completion/repeat use rather than event impressions alone.

## LogMate application
Routine app maintenance, aircraft/database compatibility maintenance, import-parser fixes, or generic 'pilot logbook' promotion are not IAEs. A launch-related or genuinely time-bounded professional experience may qualify only when it exists in the product and does not interrupt protected flight-entry/edit, import, validation/recovery, or safety/compliance-adjacent workflows.

## Reusable registry
For each candidate/published event record:
`app → platform → territory/localization → event ID/name → event truth/evidence → badge → intended cohort → publish/start/end → status → priority → card/details metadata → media → deep link/fallback → featuring evidence → impressions → details views → notification interest → opens → first-time downloads → reactivation evidence → promised-value completion → repeated value → decision`

## Sources
- Apple Developer, In-App Events: https://developer.apple.com/app-store/in-app-events/
- Apple Developer, App Store search: https://developer.apple.com/app-store/search/
- App Store Connect Help, Overview of In-App Events: https://developer.apple.com/help/app-store-connect/offer-in-app-events/overview-of-in-app-events
- App Store Connect Analytics Help, In-App Events: https://developer.apple.com/help/app-store-connect-analytics/acquisition/in-app-events

## Next evidence target
Audit MintTap App Store Connect for actual In-App Event availability/history, statuses, event metadata, territory/localization, audience purpose, deep links, featuring evidence and event analytics. Do not create an event calendar before production evidence and a genuine qualifying event exist.