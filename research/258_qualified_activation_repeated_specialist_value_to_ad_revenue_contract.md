# Research 258 — Qualified Activation → Repeated Specialist Value → Ad Revenue Measurement Contract

Date: 2026-09-25
Status: validated
Scope: MintTap, LogMate, future sparse-niche ad-supported apps

## Decision

Install, sign-up, onboarding completion, app open, session count and Store conversion are not qualified activation by themselves. The portfolio needs one product-specific first-value event and one later repeated-value event before acquisition channels can be compared on durable specialist value.

Ad monetization must then be joined downstream of that value chain. The optimization target is not impressions or eCPM in isolation:

`qualified acquisition → qualified activation → repeated specialist value → ad-eligible use → impression → impression-level revenue → reconciled sustainable revenue`.

## Product contracts

### MintTap
Provisional qualified activation: a real portfolio context is established by saving/importing at least one real holding and the resulting portfolio state becomes usable.

Provisional repeated specialist value: on a later session/date, the user returns to the saved real portfolio and performs a meaningful tracking/review job. Same-session edits, test records, Home views, ticker browsing and ad impressions do not count as repeated core value.

### LogMate
Provisional qualified activation: at least one real flight record is successfully entered/imported and reflected in a usable logbook/totals state.

Provisional repeated specialist value: on a later logging occasion, another real flight is recorded/imported or another explicitly approved core logbook-maintenance job is completed. Authentication, onboarding completion and repeated edits of the first record do not qualify.

These definitions are provisional until implementation QA verifies exact product semantics.

## GC0–GC7 value-to-revenue gate

GC0 acquisition integrity — preserve source/cohort where observable; missing attribution is not zero acquisition.

GC1 first-value integrity — count only a successful real specialist job; exclude demo/test/duplicate/failed states.

GC2 repeat-value integrity — require a later independent value occasion; do not inflate repeat value with same-session edits.

GC3 ad-eligibility integrity — only product-approved non-critical surfaces enter monetization inventory. Protected workflows remain NO AD.

GC4 impression integrity — distinguish eligible opportunity, request, load and impression. Revenue cannot repair a broken delivery funnel.

GC5 revenue integrity — capture impression-level revenue with currency, ad source/unit/format and value precision where available.

GC6 reconciliation integrity — impression-level values are analytical signals, not automatically final accounting revenue. Reconcile aggregates against AdMob reporting and preserve precision class.

GC7 marginal decision — compare added revenue against qualified activation, repeat value, retention/trust, traffic quality and exposure distribution. KEEP only when incremental monetization does not materially degrade specialist value.

## Authoritative implementation facts

Google Analytics for Firebase documents `ad_impression` as the event for ad-revenue measurement. When AdMob is linked to Firebase/Analytics, AdMob impressions can be measured automatically. The event can carry ad platform/source, currency and value.

Google Mobile Ads SDK also exposes impression-level paid-event callbacks. The returned ad value includes currency and a precision classification. Google distinguishes UNKNOWN, ESTIMATED, PUBLISHER_PROVIDED and PRECISE values; therefore a revenue field must retain precision metadata rather than treating every impression value as exact cash revenue.

Google recommends registering the paid-event listener before showing the ad and forwarding paid-event data immediately to reduce callback loss/discrepancies.

## Minimum event/measurement contract

For product value events:
- event name and semantic definition
- success trigger
- exclusions and deduplication
- first-value rule
- repeat-value window/occasion rule
- source/cohort keys where privacy-eligible
- definition version and effective date
- QA evidence

For monetization:
- product surface / eligibility class
- ad unit and format
- eligible opportunity timestamp
- request/load/impression state
- impression revenue value and ISO currency
- revenue precision class
- ad source/network where available
- consent/privacy state where lawful and operationally appropriate
- product-value cohort linkage using privacy-safe identifiers/aggregation
- reconciliation period/status

## Sparse-niche reporting

Do not optimize on daily eCPM noise. Use cohort/window reporting:
1. acquired users
2. qualified activations
3. users reaching repeated specialist value
4. ad-eligible active users
5. impressions per ad-eligible active user
6. impression-level estimated revenue per ad-eligible active user
7. revenue per activated/repeated-value user
8. activation/repeat-value/retention guardrails

States such as immature, unavailable, suppressed or insufficient must remain distinct from zero.

## Portfolio consequence

MintTap can now connect zero-cost acquisition channels to business economics without rewarding intrusive inventory: channel → qualified portfolio activation → repeated portfolio use → eligible secondary-surface exposure → revenue.

LogMate should implement the same event semantics before monetization decisions. Its core logging/import/reconciliation workflows remain protected; lack of monetizable inventory inside those workflows is not a failure.

## Sources
- Firebase, “Measure ad revenue”: https://firebase.google.com/docs/analytics/measure-ad-revenue
- Google for Developers, “Impression-level ad revenue — Android”: https://developers.google.com/admob/android/impression-level-ad-revenue
- Google for Developers, “Impression-level ad revenue — iOS”: https://developers.google.com/admob/ios/impression-level-ad-revenue
- Firebase, “Use more features of Google Analytics and Firebase with AdMob apps”: https://firebase.google.com/docs/admob/analytics-and-firebase

## Next validation
Implement/audit the exact MintTap event map and determine whether existing analytics can reconstruct GC0–GC7 without new instrumentation. Do not add ad pressure before this measurement path is verified.
