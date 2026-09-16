# 056 — Semantic First-Value Measurement Contract

Date: 2026-09-17
Status: engineering-review contract; not evidence that production telemetry is implemented

## Problem
MintTap currently cannot safely equate onboarding completion, transaction save, import completion, Home view, or account recency with activation. The marketing decision system needs a privacy-safe boundary that says a user has reached personal portfolio value without exporting holdings or reconstructing identity.

## Governing distinction
`mechanical completion != semantic first value`

Recommended semantic boundary:

`eligible real portfolio context + at least one accepted real data record + derived personal portfolio result successfully rendered`

This is intentionally narrower than V3 comprehension. Analytics can observe that the product delivered the result; fresh-user research is still needed to establish that users understand it.

## Event contract
Candidate custom event name: `first_portfolio_value`.

Fire once per local/account telemetry eligibility epoch when all of the following are true:
1. User is in a real portfolio context, not Demo/sample/browse.
2. At least one accepted transaction/imported record belongs to the active eligible portfolio.
3. The portfolio calculation/result pipeline completes successfully.
4. A defined personal result surface is rendered successfully to the user.
5. The event has not already been acknowledged for the same telemetry eligibility epoch.

The event must not fire merely because onboarding completed, a file parsed, a transaction was submitted, authentication succeeded, or Home opened.

## Minimal aggregate-safe parameters
Prefer no parameters unless a decision requires them. If engineering needs route attribution, permit only bounded enums such as:
- `entry_route`: `manual` | `import`
- `platform`: rely on Analytics-native platform dimension rather than duplicating where possible.
- `app_version`: rely on Analytics-native app-version dimension where available.

Do not send ticker, portfolio name, holdings, quantities, prices, cost basis, distributions, tax values, memo text, file name/path, email, UID, brokerage, or stable custom user identifiers as event parameters.

## Deduplication semantics
Analytics event delivery itself is not the durable source of truth for exactly-once business semantics. The app should maintain a small first-value acknowledgement state appropriate to its existing architecture. The state records only that the semantic boundary was previously reached, not portfolio content.

Required behavior:
- repeated Home renders do not create repeated first-value events;
- detail-screen returns do not create repeated first-value events;
- app restart does not create a new first-value event for an already acknowledged eligibility epoch;
- failed calculations/rendering do not acknowledge first value;
- Demo/sample data never acknowledges real first value.

Engineering must define how reinstall, logout/account change, data deletion, account deletion, multi-device use and analytics-consent changes affect the eligibility epoch before implementation. Marketing must not invent these semantics.

## Existing-user rule
Do not retroactively infer historical first value from account existence, current holdings, `lastActiveAt`, or old transactions. After telemetry deployment, pre-existing users may become observable only when they satisfy the live semantic boundary under the documented eligibility rules.

`historical missing != historical failure`

This prevents a new event from manufacturing a false activation denominator.

## Funnel interpretation
Recommended observable chain once runtime access exists:
`tutorial_begin/onboarding boundary → first-data route selection → accepted data → first_portfolio_value → useful_return`

Use Google's recommended onboarding events when they semantically match the implementation, but do not rename product-specific value into `tutorial_complete`. Onboarding completion and first portfolio value answer different questions.

## Privacy boundary
Marketing repository exports remain aggregate only. No raw event rows keyed by UID, email, user_pseudo_id or another stable identifier are required for routine marketing decisions. Small cells remain suppressed under the established minimum-cell rule.

## Validation
Before production interpretation:
1. Engineering confirms exact trigger location and invariants.
2. Debug instrumentation verifies one event on qualifying Manual route.
3. Debug instrumentation verifies one event on qualifying Import route.
4. Demo/sample route verifies zero events.
5. repeated Home/detail/restart path verifies no duplicate business event.
6. failure path verifies zero acknowledgement.
7. GA4 aggregate reporting is readable before acquisition decisions depend on the event.

## Reusable company rule
**Semantic Boundary Before Funnel Metric.**

A reusable niche-app activation event must correspond to delivered domain value, not the nearest convenient UI completion event. The event's trigger, eligibility, deduplication, privacy boundary and historical-coverage limitations must be documented before it is used as an acquisition or monetization denominator.

## Sources
Authoritative sources checked 2026-09-17:
- Firebase Analytics event documentation: custom events are supported when recommended events do not cover an app-specific need; event names are case-sensitive and custom parameters require deliberate reporting configuration.
- Google Analytics recommended events: `tutorial_begin` and `tutorial_complete` specifically represent onboarding start/completion, supporting separation of onboarding from MintTap's product-specific first-value event.
- Google Analytics privacy disclosure policy: Analytics use and data processing require disclosure.
