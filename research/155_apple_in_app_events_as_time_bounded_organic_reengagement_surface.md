# 155 — Apple In-App Events as a Time-Bounded Organic Re-engagement Surface

Validated: 2026-09-21

## Decision
Apple In-App Events (IAE) are a zero-media-cost App Store discovery/re-engagement surface, but they are not a generic release-announcement or evergreen ASO surface. Use only when the app contains a real, time-bounded experience or a meaningful content/feature moment that fits Apple's event semantics.

## Authoritative findings
Apple states that In-App Events can be discovered on the product page, in App Store search, and in editorial/personalized recommendations on Today/Apps/Games. They can serve new, active, and lapsed users. Users without the app can download from the event surface and then be routed toward the relevant in-app destination.

Apple explicitly excludes repetitive daily activity, price promotion without new content/features/goods, and general app promotion. A permanent/ongoing feature may be highlighted only through a related limited-time moment or experience; the event must not merely advertise the app as a whole.

Operational constraints: an event can run up to 31 days and can become discoverable up to 14 days before it starts. Apple supports up to 15 approved events in App Store Connect and up to 10 published events at a time. Events can be submitted independently of a new app version after the app is approved. A deep link should route to the relevant experience; Apple recommends universal links and says new users may need onboarding first, while retaining a path back to the main app experience.

Purpose can be set to all users, attract new users, keep active users informed, or bring back lapsed users. Apple uses this as one factor in personalized recommendations, while published events remain discoverable generally.

App Analytics exposes event impressions, event-page views, app opens, downloads and related downstream commercial metrics, with source/territory/device filtering. Event-level data appears after at least five first-time downloads. This is a reporting/privacy threshold, not a sufficient-sample rule.

## Strategic implication for sparse professional apps
IAE differs from BR Featuring Nominations. BR submits a credible release/story moment for editorial consideration; IAE creates an actual time-bounded Store object that can itself be discovered, shared, deep-linked and measured. An approved/published IAE may also support a BR nomination, but neither approval nor editorial selection proves acquisition quality, financial correctness, or regulatory compliance.

IAE also differs from BN Custom Product Pages. BN is persistent intent-specific Store routing. IAE is temporal discovery/re-entry around a genuine event. Do not manufacture artificial countdowns or recurring pseudo-events merely to gain Store real estate.

### MintTap
Default posture: **not automatically eligible/useful**. Ordinary ETF distribution dates, ex-dividend dates, market events, recurring monthly YieldMax distributions, routine data refreshes, tax reminders, or generic app updates should not be converted into marketing events merely because they are timely. This risks confusing an external financial-market occurrence with an app-hosted event and conflicts with Apple's rejection of repetitive/general promotion.

A MintTap candidate requires an actual in-app time-bounded experience or substantial content/feature launch that users can reach and use, with financial claims still passing BE provenance. Do not imply Apple endorsement of YieldMax, investment outcomes, ROC/tax treatment, or data accuracy.

### LogMate
Potentially stronger future fit only when there is a genuine in-app limited-time experience or major content/feature moment. Routine flight logging, recency deadlines, regulatory dates, or recurrent pilot duties are not automatically IAE candidates. Never transform compliance obligations into promotional events. Any aviation/regulatory wording must remain separately substantiated.

## BS0–BS5 In-App Event Integrity Gate
- **BS0 — Surface eligibility:** confirm the app/account and intended event can use IAE and identify the exact App Store object.
- **BS1 — Genuine temporal experience:** there must be a real in-app event/content/feature moment; reject routine activity, generic promotion, artificial scarcity and external calendar events that are not an in-app experience.
- **BS2 — Claim and audience integrity:** metadata must describe the event specifically and truthfully; consequential finance/aviation claims inherit their domain evidence gates.
- **BS3 — Destination/readiness integrity:** event content must exist, be reachable in the advertised territory/time, deep-link correctly, accommodate necessary onboarding, and preserve a route back to the main app.
- **BS4 — Lifecycle and measurement semantics:** record intended lifecycle purpose (new/active/lapsed/all), territory, dates, event ID, source, impressions, page views, opens/downloads and downstream value without treating the five-download reporting threshold as statistical sufficiency.
- **BS5 — Outcome integrity:** distinguish `approved/published → discovered/reached → opened/downloaded → event value → core/restored value → useful return`. Featuring or event engagement is not domain correctness or product-market fit.

## Registry fields
`app | event_id/reference_name | event type/badge | user-facing event name | evidence of genuine event | start/end | publish start | territories/localizations | lifecycle purpose | deep link | destination readiness | BE/domain claim refs | App Review state | BR nomination ref if any | impressions | event-page views | notifications | app opens | first-time downloads | redownloads/reactivation where available | source type | downstream core/restored value | decision | observation date`

## Operational rule
Do not create IAE inventory to satisfy a marketing calendar. First identify a genuine product/content moment, then test BS0–BS5. If BS1 fails, stop before creative production.

## Sources
- Apple Developer, “In-App Events”: https://developer.apple.com/app-store/in-app-events/ (validated 2026-09-21)
- Apple App Store Connect Help, “Overview of In-App Events”: https://developer.apple.com/help/app-store-connect/offer-in-app-events/overview-of-in-app-events (validated 2026-09-21)
- Apple App Store Connect Help, “Offer In-App Events”: https://developer.apple.com/help/app-store-connect/offer-in-app-events/offer-in-app-events (validated 2026-09-21)
- Apple App Store Connect Analytics Help, “In-App Events”: https://developer.apple.com/help/app-store-connect-analytics/acquisition/in-app-events (validated 2026-09-21)
- Apple Developer, “App Store search”: https://developer.apple.com/app-store/search/ (validated 2026-09-21)
