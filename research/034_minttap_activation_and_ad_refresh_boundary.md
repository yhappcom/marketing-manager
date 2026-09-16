# 034 — MintTap activation and Home ad-refresh boundary audit

Date: 2026-09-16
Status: POST-FREEZE LIVE-READINESS DELTA

## Purpose

Continue the exact-ref MintTap audit without extending general marketing theory. Resolve two open questions from 033 using branch `1.0.29`: (1) the durable transaction → calculated Home boundary for the first-value event, and (2) whether detail-return actually recreates the Home banner and therefore initiates a fresh ad request.

## Evidence scope

Repository: `yhappcom/yieldmax_tracker`
Ref: branch `1.0.29`
Observed tree/head: `736bbc99a41c14130d82aeaa17ac81f0fc835a65`
Evidence date: 2026-09-16

Files inspected in this audit include:

- `lib/screens/edit_transaction_screen.dart`
- `lib/edit_transaction/edit_transaction_service.dart`
- `lib/edit_transaction/edit_transaction_repository.dart`
- `lib/home/home_summary_service.dart`
- `lib/screens/home_screen.dart`
- `lib/widgets/home_inline_ad_slot.dart`
- `lib/widgets/home_inline_ad_slot_mobile.dart`
- `lib/main.dart`

Store production identity remains outside the scope of repository evidence and therefore remains UNKNOWN until Store-side evidence is available.

## Finding 1 — the buy persistence success boundary is now code-verifiable

For a buy transaction, `EditTransactionScreen._save()` validates authenticated UID, portfolio, ticker, quantity, price and required FX state, then awaits `EditTransactionService.saveBuyTransaction(...)`.

`EditTransactionService.saveBuyTransaction(...)` delegates to `EditTransactionRepository.saveBuyTransaction(...)`, which returns the Firestore `add(payload)` future for:

`users/{uid}/transactions`

The UI does not mark the save as successful before that awaited future completes. After completion it:

1. calls `UserDataChangeNotifier.instance.markUserDataChanged(uid)`;
2. attempts `_preloadHomeSummaryAfterSave(uid)`;
3. returns `Navigator.pop(true)` to the caller.

The preload is intentionally non-blocking with respect to final success semantics: exceptions are swallowed and Home is expected to fall back to its normal refresh path. Therefore `Navigator.pop(true)` proves that the transaction write path completed, but does **not** by itself prove that calculated Home value was successfully exposed to the user.

### Sell note

Sell persistence uses a Firestore batch and awaits `batch.commit()`. This is also a durable persistence boundary for that transaction operation, but it is not relevant to the earliest first-value event because a legitimate new user can reach core value through a first buy without a prior sell.

## Finding 2 — Home calculation boundary is separate from transaction persistence

`HomeSummaryService.loadSummaryOnlyForUser(...)` fetches canonical Home input through `FirestoreCanonicalAdapter.fetchHomeInputForUser(...)` and then computes `HomeSummaryDto` using `CalculationEngine.calculateHomeSummary(input)`.

`HomeScreen._reloadHomeSummary()` awaits this calculated summary. Only after the await completes does it stage the result into `_latestHomeResult` / `_homeResultByPortfolioKey` and render `_HomeSummarySection`.

`_HomeSummarySection` obtains `result.summary` and renders the normal summary/positions UI. The first-transaction tutorial independently uses `summary.positions.isNotEmpty` to distinguish an already populated portfolio from an empty one.

This establishes two distinct semantic transitions:

`transaction persistence success`

and later

`calculated non-empty Home state available for rendering`

They must not be collapsed into a single save-click event.

## Finding 3 — `first_portfolio_value_ready_v1` can now be specified more precisely

The prior candidate remains conceptually correct, but the implementation predicate can now be narrowed.

### Candidate event contract

`first_portfolio_value_ready_v1`

Fire only when all are true:

- user is authenticated and not in browse/demo mode;
- a normal Home summary calculation has completed without the top-level Home error path;
- `summary.positions.isNotEmpty`;
- the event has not previously been recorded for that user under event-definition version v1.

The event should be attached to the successful calculated-Home boundary, **not** directly to the transaction-save button or `Navigator.pop(true)`.

Why: Firestore write success establishes durable input; the subsequent non-empty calculated Home state establishes that MintTap transformed that input into the product value users came for.

### Privacy contract

Do not attach:

- ticker;
- quantity;
- price or invested amount;
- portfolio name/id;
- tax values;
- P&L;
- dividend/ROC values;
- memo or transaction date.

At most use privacy-reviewed technical dimensions such as event-definition version, platform and app build if they are genuinely needed for measurement integrity.

### One-time semantics

A client-only local marker would undercount/duplicate across reinstall or device change. If exact one-time-per-account activation is required, the marker should use a server/account-scoped mechanism or another explicitly documented deduplication design. This audit does not prescribe the implementation storage location; it only establishes the event boundary.

## Finding 4 — detail-return definitely recreates the mobile Home banner widget

The unresolved 033 question is now resolved.

`HomeScreen._handleReturnFromDetail()` increments `_homeAdRefreshToken` whenever a normal, non-browse detail-return callback is handled.

`_HomeSummarySection` renders:

`HomeInlineAdSlot(key: ValueKey('home-inline-$homeAdRefreshToken'))`

Changing that key changes the widget identity. Flutter therefore disposes the old stateful ad-slot subtree and creates a new one.

`HomeInlineAdSlot` delegates on mobile to stateful `HomeInlineAdSlotImpl`. Its fresh state starts with no active/pending banner and `_didScheduleAdLoad == false`. During dependency initialization it schedules `_loadBanner()` 350 ms after the first frame. `_loadBanner()` performs consent checks and, if ads may be requested, constructs a new `BannerAd` and calls `banner.load()`.

Therefore the code path is:

`detail return → refresh token +1 → ValueKey changes → old ad slot disposed → new ad slot state created → delayed consent-gated banner load → fresh ad request when eligible`

This is no longer an inference. It is a verified implementation behavior on the inspected mobile ref.

## Finding 5 — current ad request opportunity is navigation-driven, not impression-driven

A detail return creates a **new request opportunity**, but it does not prove:

- the request was allowed by consent;
- the request filled;
- an ad loaded;
- an impression occurred;
- a paid event occurred.

The mobile slot still lacks verified `onAdImpression` and paid-event telemetry in the inspected listener. Therefore current code can establish the existence of navigation-triggered request recreation but cannot quantify actual exposure or revenue per recreation internally.

This distinction is essential:

`detail-return cycle ≠ ad impression`

and

`new BannerAd.load() ≠ monetized impression`.

## Finding 6 — the current refresh policy can create multiple requests during one useful portfolio-review session

Home passes the same `onReturnFromDetail` callback into multiple downstream detail flows. The inspected Home code also invokes the callback after returning from the dividend calendar. Consequently, ordinary review/navigation can increment the token multiple times without an app restart or a new authenticated day.

This does not establish that the policy is harmful. It establishes that ad-request frequency is partly a function of product navigation depth rather than only session start or elapsed time.

For a specialist portfolio app, that matters because highly engaged users may inspect several positions or detail surfaces in sequence. Raw request count can therefore be positively correlated with useful engagement even when additional impressions later become irritating. Request volume alone is not a monetization-quality KPI.

## Operating consequence — freeze frequency changes until exposure is measurable

Do not increase, decrease or otherwise optimize the detail-return refresh policy from raw AdMob revenue/request data alone.

Before changing frequency, establish the minimum observable chain:

`eligible slot creation → SDK-confirmed impression → paid value → authenticated return / harm guardrail`

The current verified `lastActiveAt` signal may contribute a coarse return guardrail, but it must retain its separate once-per-local-day-per-device semantics.

## Minimal implementation handoff for product engineering

This research is a measurement specification, not an instruction to modify product code immediately.

If instrumentation work is opened, the smallest useful handoff is:

1. add one-time `first_portfolio_value_ready_v1` at the successful non-empty calculated Home boundary;
2. add SDK-confirmed `home_ad_impression_v1` at the banner impression callback;
3. capture paid-value events with explicit value/currency/precision semantics supported by the Mobile Ads SDK;
4. attach a stable placement/event-definition version, not investment-content fields;
5. preserve detail-return banner recreation as the current baseline until enough evidence exists to evaluate it;
6. treat load failure telemetry as optional diagnostic instrumentation, not a growth KPI.

## Decision implications

- MintTap activation semantics have advanced from a conceptual candidate to a **CODE-VERIFIED EVENT BOUNDARY / NOT YET INSTRUMENTED** state on ref `1.0.29`.
- Store-served build identity remains unresolved, so live activation baselines must still wait for deployment identity alignment.
- Home detail-return ad recreation is **VERIFIED** on the inspected mobile ref.
- No claim about actual impression frequency, ad revenue per navigation, or user harm is justified until impression/paid telemetry and a live baseline exist.
- Acquisition work can continue at evidence-gathering scale, but channel optimization against product activation should not be treated as closed-loop until the served build contains the semantic event.

## Reusable lesson

For future niche apps, separate four monetization states that are often mistakenly merged:

`placement rendered → ad requested → impression confirmed → paid value observed`

Likewise separate:

`core input persisted → product output calculated → product output exposed → first-value event recorded`.

Marketing instrumentation should attach to the business-relevant state transition, not the nearest convenient button tap.

## Next evidence targets

1. Obtain authoritative Store-side current version/build evidence for MintTap.
2. Complete a broader exact-ref Firebase Analytics inventory if a repository-wide search/index becomes available; current verified custom event remains `app_start` plus the proposed activation event not yet implemented.
3. Verify the Mobile Ads SDK paid-event API semantics against current official Google documentation immediately before engineering implementation.
4. After deployment identity and instrumentation align, establish first live baselines for activation, authenticated return, confirmed Home ad impressions and paid value.
5. Only then open a Decision Record on whether detail-return ad recreation should remain, be capped, be time-gated, or be removed.