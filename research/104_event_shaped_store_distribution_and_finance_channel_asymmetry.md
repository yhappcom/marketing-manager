# 104 — Event-Shaped Store Distribution and Finance-Channel Asymmetry

Validated: 2026-09-19

## Decision principle

**A product moment earns event-shaped Store distribution only when the moment is real, time-bounded, production-valid, and eligible on that platform. Never manufacture an event to obtain Store exposure.**

This note separates Apple In-App Events (IAE) from Google Play Promotional content. They are not interchangeable growth surfaces, and MintTap's finance/investment context creates a material platform asymmetry.

## Why this matters

Niche apps have few legitimate high-attention moments. Treating every release as an event creates weak claims, wastes review/creative effort, and can damage specialist trust. Conversely, a genuine major product moment can create first-party discovery and re-engagement without paid acquisition.

The correct unit is therefore not `release`; it is a **validated event-shaped user moment**.

## Current authoritative facts

### Apple In-App Events

Apple defines In-App Events as timely events within an app. Event cards can appear on the product page, in search, and potentially in editorial/personalized App Store surfaces. Users without the app can download from the event card; users can be routed to the relevant in-app section.

Apple explicitly says recurring everyday activities, price promotions without new content/features/goods, and general app-awareness promotion are not appropriate In-App Events. A Major Update must introduce significant new features/content/experiences rather than minor UI changes or bug fixes.

Operational constraints currently include:
- event duration: maximum 31 days;
- event card can become discoverable up to 14 days before start;
- up to 10 events can be published at a time, with up to 15 approved events per app in App Store Connect;
- events require review before becoming visible.

Apple Analytics provides event impressions, event page views, app opens, reminders/notification taps, downloads/redownloads and downstream usage/sales filters. Event data appears after the event has at least five first-time downloads. This reporting threshold must not be interpreted as zero response below threshold.

Sources:
- https://developer.apple.com/help/app-store-connect/offer-in-app-events/overview-of-in-app-events
- https://developer.apple.com/help/app-store-connect/reference/in-app-events/in-app-event-badges
- https://developer.apple.com/help/app-store-connect/offer-in-app-events/offer-in-app-events
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/in-app-events

### Google Play Promotional content: finance restriction

Google's current Promotional content quality guidance states that Promotional content is not allowed for certain financial products/services and explicitly lists investing/trading-related tools and terms including investment resources, investment management, stocks, funds, shares and financial utility services.

This is separate from the broader Google Play financial-services policy, under which apps with financial features have their own declarations/compliance obligations. Passing general Play eligibility therefore does **not** imply eligibility for Promotional content.

For MintTap, whose product purpose is YieldMax ETF portfolio tracking, the conservative canonical assumption is **do not plan Google Play Promotional content** unless Google changes the restriction or a future first-party eligibility determination clearly establishes otherwise.

Sources:
- https://support.google.com/googleplay/android-developer/answer/12929944
- https://support.google.com/googleplay/android-developer/answer/12932123
- https://support.google.com/googleplay/android-developer/answer/17517561

## V0–V5 Event-Shaped Distribution Gate

### V0 — Invalid / prohibited
The proposed event is false, misleading, outside production capability, manufactured solely for exposure, or ineligible under the platform/category rules. Do not publish.

### V1 — Release-shaped, not event-shaped
A normal release, bug fix, cosmetic UI change, routine data refresh, recurring daily task, or generic awareness campaign is being relabeled as an event. Use release notes/content/community channels instead.

### V2 — Real change, insufficient moment
There is a genuine product change but no clear time-bounded specialist reason to discover/re-engage now, or eligibility/evidence is unresolved. Hold.

### V3 — Deliberate event candidate
Minimum threshold. Require all of:
1. real production-valid feature/content/experience;
2. genuine timely or bounded user moment;
3. platform/category eligibility verified;
4. Store copy/media accurately represent shipped behavior;
5. safe destination/deep-link/fallback where used;
6. first-value/useful-return hypothesis defined before publication;
7. no trust, financial, privacy, or professional-scope expansion.

### V4 — Downstream validated
V3 plus evidence that event-origin users reach the intended first value/useful return without degrading trust or monetization boundaries. Platform impressions/app opens alone are insufficient.

### V5 — Reusable pattern
The same event mechanism has produced interpretable, downstream-valid evidence across multiple legitimate product moments/releases without event inflation. Only then may the pattern be reused for another niche app, subject to that app's platform/category eligibility.

## MintTap application

Potential Apple IAE candidates must be evaluated as actual product moments, not as market-news hooks. A major production release that materially changes how users handle a specialist tracking problem could qualify as a Major Update candidate. Routine YieldMax distribution updates, ticker-by-ticker refreshes, market volatility, an ETF split announcement, or a tax/ROC calendar date do **not** become MintTap In-App Events merely because they are timely externally.

This distinction is critical: the event must be an event **within the app/product experience**, not an attempt to borrow urgency from the financial market.

MintTap Google Play Promotional content remains excluded from planning under the current restricted-finance guidance. Do not spend design or engineering capacity building a Google Promotional-content calendar for MintTap.

## LogMate application

LogMate may eventually have more category freedom, but scarcity still applies. First launch is handled by the prelaunch framework (099), not automatically as an event. A future substantial production feature could become an event candidate only after the underlying pilot workflow is stable and V3 is met. Routine database updates, parser maintenance, compatibility fixes, or ordinary version releases remain V1.

## Cross-platform rule

Never require symmetric Store campaigns. If Apple offers a valid surface and Google does not, use Apple only. Cross-platform visual/calendar symmetry is not a marketing objective.

The reusable planning object is:

`product moment → platform eligibility → V-class → Store surface → safe destination → first value → useful return → channel decision`

not:

`release date → make matching Apple/Google promotion`.

## Measurement contract

For Apple IAE, retain platform-native metrics as diagnostics:
- event impressions / unique impressions;
- event page views;
- reminders and notification taps where relevant;
- event-origin app opens;
- downloads/redownloads;
- downstream usage/sales where available.

Do not optimize event-card CTR or app opens in isolation. Connect the event route to the same first-value and K3 useful-return semantics used elsewhere. Respect Apple's five-first-download reporting threshold and privacy constraints; missing sparse data is not zero.

## Operational checklist

Before any event-shaped Store submission:
1. identify the specialist job changed by the product moment;
2. verify it is shipped/production-valid;
3. verify platform/category eligibility from current first-party rules;
4. classify V0–V5;
5. reject V0–V2 from deliberate event distribution;
6. define accurate Store evidence and destination;
7. define first-value/useful-return measurement;
8. publish only within the platform's real event window;
9. archive outcome, including non-selection/non-signal;
10. do not create another event until substantive novelty exists.

## Unresolved / evidence needed

- MintTap: whether any currently planned release is genuinely V3 for Apple IAE.
- MintTap: actual App Store IAE history and downstream event-origin useful-return instrumentation.
- Google: whether MintTap has any explicit Play Console Promotional-content eligibility state beyond the public finance restriction; public guidance remains sufficient to exclude it from planning unless contrary first-party evidence appears.
- LogMate: future Promotional-content/IAE eligibility and useful event moments after production scope stabilizes.

## Relationship to prior research

- 095 governs Apple Editorial Featuring nominations; editorial nomination and IAE are separate mechanisms.
- 099 governs prelaunch commitments; pre-registration/pre-order is not an event substitute.
- 100 governs destination continuity.
- 102 defines useful return.
- 103 governs monetization evidence after useful use.

The new contribution is the **V-gate and explicit platform/category asymmetry rule**: first-party Store distribution should follow real product moments and actual eligibility, not a symmetric campaign calendar.