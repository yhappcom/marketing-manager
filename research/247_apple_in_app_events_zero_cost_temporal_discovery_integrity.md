# Research 247 — Apple In-App Events: Zero-Cost Temporal Discovery Integrity

Last validated: 2026-09-24

## Why this matters

For sparse professional apps, App Store discovery should not be manufactured by creating artificial campaigns. Apple In-App Events (IAE) provide a native, no-paid-media discovery surface, but only when there is a genuine time-bounded experience in the product. This research defines when IAE is legitimate and useful for MintTap, LogMate, and future niche apps.

## Authoritative platform facts

Apple describes In-App Events as timely events within apps/games. Event cards can appear on the product page, in App Store search, and in editorial/personalized discovery surfaces. Users can opt into an App Store notification for the event start, and users without the app can download from the event card/detail page. A deep link can route Open to the relevant in-app destination.

Current operational limits: up to 10 events may be published at once and up to 15 approved events may exist in App Store Connect. An event can last up to 31 days and can become discoverable up to 14 days before it starts. Events require App Review, but an already-approved app can submit an event independently of a new app version.

Apple explicitly says repetitive daily activities/rewards, price promotions without new content/features/goods, and general awareness promotions are not good candidates. Permanent/ongoing added content may be highlighted only when the event itself centers on a related limited-time moment or experience.

App Analytics can measure event downloads, acquisition source, impressions, event-detail views, app opens, and notification opt-ins.

Primary sources:
- https://developer.apple.com/app-store/in-app-events/
- https://developer.apple.com/help/app-store-connect/offer-in-app-events/offer-in-app-events
- https://developer.apple.com/help/app-store-connect/offer-in-app-events/overview-of-in-app-events
- https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-in-app-event

## Core conclusion

IAE is a **temporal discovery primitive**, not an ASO keyword hack, a release-note substitute, or a recurring content calendar that marketing invents to obtain Store impressions.

The qualifying chain is:

`real product moment → bounded participation window → specialist relevance → truthful event metadata → relevant deep-link destination → discovery/notification → event participation → repeated core value`

If the product moment would not exist without the desire to market it, default to no IAE.

## FG0–FG5 In-App Event Temporal Discovery Integrity Gate

### FG0 — Event identity
There must be a real in-product event, special-content launch, challenge, competition, or other legitimate timely experience. Routine operation, ordinary recurring data updates, a new blog post, or generic app promotion does not qualify.

### FG1 — Temporal integrity
The event must have a meaningful start/end relationship. Do not fabricate scarcity or a deadline around an evergreen feature merely to qualify for an event card.

### FG2 — Specialist relevance
The event must matter to the niche user's actual job. The event proposition must be understandable without inflated claims and must not turn routine domain activity into promotional theater.

### FG3 — Destination continuity
The event card/detail promise and deep-link destination must match. New users may require onboarding before reaching the destination; that transition must preserve the event promise. Avoid URL shorteners and unnecessary redirects.

### FG4 — Measurement integrity
Treat impressions, detail views, notification opt-ins, downloads and opens as distinct stages. None alone proves durable value. Evaluate participation and subsequent specialist-value/repeat-use evidence where observable. Do not infer causality from editorial placement or sparse event cohorts without evidence.

### FG5 — Reuse decision
Repeat an event pattern only when the underlying product moment legitimately recurs and prior evidence shows useful specialist participation or downstream value. Do not create an event cadence merely because the Store surface exists.

## MintTap application

Potentially legitimate future candidates could include a genuinely new, time-bounded product experience around a major product/content release that YieldMax investors can actually participate in. Routine monthly distributions, ticker price moves, ordinary ROC data refreshes, or a generic 'YieldMax update' are not automatically MintTap events; these are domain rhythms/data updates, not necessarily in-app events.

A ticker-specific market occurrence must not be converted into an IAE unless MintTap itself offers a corresponding bounded in-product experience. This prevents the Store surface from drifting toward investment-news promotion or manufactured urgency.

## LogMate application

Routine flight logging, monthly totals, recency clocks, roster imports, or ordinary recurrent pilot work are not events. A legitimate future candidate would require a real bounded product experience—for example, a time-limited structured migration/import clinic or product-led challenge—provided it is genuinely implemented and appropriate for professional pilot use. Launch itself is not enough.

## Company-wide operating rules

Preserve these non-equivalences:
- `new release ≠ In-App Event`
- `routine recurring domain activity ≠ event`
- `market/calendar moment ≠ in-product event`
- `event impressions ≠ acquisition quality`
- `notification opt-in ≠ participation`
- `download/open ≠ repeated specialist value`
- `Store eligibility ≠ reason to manufacture an event`

IAE should remain a selective zero-cost discovery tool downstream of real product programming. It must not become a quota-driven marketing surface.

## Next evidence target

Audit whether MintTap has any actual planned product moments that satisfy FG0–FG3. If none exist, explicitly keep IAE inactive. For LogMate, keep IAE outside launch-critical scope until a genuine post-release temporal product experience exists.