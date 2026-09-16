# 032 — MintTap Release-Branch Source Recovery and Activation Readiness

Date: 2026-09-16
Status: POST-FREEZE LIVE-READINESS DELTA
Scope: MintTap product source-of-truth recovery, analytics/ad instrumentation correction, first-value semantics

## Why this audit exists

Research 030–031 inspected the repository default branch and correctly limited their claims to that observed state. The remaining high-value question was whether the default branch actually represented the current MintTap product.

It does not. The repository contains maintained version branches through `1.0.29`, and branch `1.0.29` contains a full MintTap implementation. This resolves the product-source mismatch that blocked MintTap activation work.

## Verified source-of-truth recovery

Repository: `yhappcom/yieldmax_tracker`
Observed release branch: `1.0.29`
Declared app version: `1.0.29+29`

The branch README defines MintTap as a Flutter + Firebase application for YieldMax-style ETF positions, dividends and portfolio performance. It states that runtime behavior is defined by `lib/` and `functions/`, with Firestore policy and calculation contracts separately documented.

Verified product jobs include:

- storing user transactions in Firestore;
- computing holdings and cost basis;
- realized/unrealized P&L;
- dividend flows;
- tax-aware views;
- daily-close valuation with fresh intraday overlays;
- ex-dividend/payment/price-move notifications.

Therefore future MintTap product audits must not silently use the repository default branch. They must record the exact inspected ref. A default branch is not automatically a production source of truth.

## Correction to research 030

The earlier finding was deliberately worded `NOT OBSERVED IN CURRENT REPOSITORY` and must not be converted into a claim that production lacked analytics or advertising.

On release branch `1.0.29`, `pubspec.yaml` explicitly declares:

- `firebase_analytics: ^12.0.0`
- `google_mobile_ads: ^6.0.0`

`lib/main.dart` initializes Firebase Analytics, enables collection and emits an `app_start` event with platform and debug/release mode. It also initializes Mobile Ads after the first rendered frame on non-web platforms.

The branch contains a dedicated `lib/ads/` module including privacy management, AdMob configuration and mobile-ad initialization. `HomeScreen` imports `home_inline_ad_slot.dart` and inserts `HomeInlineAdSlot` in the normal non-browse Home flow.

Operational implication: MintTap analytics/ad instrumentation is **PRESENT IN RELEASE-BRANCH CODE**, but the completeness and production quality of downstream semantic event coverage, ad impression/revenue measurement and retention linkage remain unverified. Dependency presence is not equivalent to a complete measurement system.

## First-value semantics: source-backed candidate

The release implementation provides enough evidence to replace the previous `UNKNOWN — PRODUCT-SOURCE MISMATCH` state with a semantic candidate.

The product's central job is not app launch, authentication, onboarding completion, ticker browsing or ad exposure. The Home implementation explicitly detects an empty position state and presents a first-transaction tutorial. When the add-transaction flow returns success, Home synchronizes user data and reloads the portfolio summary. The product README states that user transactions feed holdings, cost basis, P&L, dividends and tax-aware views.

### Candidate

`first_portfolio_value_ready_v1`

Meaning:

> the user has successfully persisted the first valid portfolio transaction and the normal authenticated Home path can subsequently load a non-empty calculated portfolio state derived from user data.

This is stronger than `transaction_saved` alone because persistence without a usable calculated view has not yet delivered the tracker’s core value. It is also narrower than requiring dividend/ROC history, because a legitimate new user can receive core portfolio-tracking value before any distribution event exists.

### Do not require

- app open;
- sign-in by itself;
- onboarding completion;
- notification permission;
- import use;
- a dividend having occurred;
- ROC/tax-adjustment use;
- viewing a specific ticker-detail screen;
- an ad impression.

Those are either prerequisites, optional paths, later-value states or monetization states.

## Measurement contract implication

Existing `app_start` is a traffic/session-start signal, not an activation signal.

A minimal privacy-preserving activation contract should be based on semantic state transitions, not raw portfolio contents. Candidate events/state markers:

- `first_transaction_committed_v1` — first valid user transaction durably committed;
- `first_portfolio_value_ready_v1` — subsequent normal Home calculation returns a non-empty usable portfolio state;
- later-value events should be separately defined only where a real decision requires them.

Do not send ticker, quantity, price, portfolio balance, dividend amount, memo, tax amount or other sensitive financial contents merely to support marketing attribution. If segmentation is required later, prefer coarse non-sensitive product-state flags whose decision value is established in advance.

## Advertising implication

The source audit materially changes the ad-readiness picture: MintTap already has a Home inline ad surface in normal use and Mobile Ads initializes after first frame. Therefore the next ad question is no longer `does an ad SDK exist?` but:

1. exactly where the Home inline slot sits relative to the user's core task and natural break;
2. whether impression, paid-event/revenue and load-failure data are observable;
3. whether the slot affects first-value completion, task abandonment, latency or retention;
4. whether privacy/consent state is correctly respected before requests;
5. whether refresh behavior creates unnecessary inventory or UX harm.

This should be evaluated under the frozen Ad-Revenue Quality Economics framework rather than by maximizing impressions.

## Reusable operating rule

For every product repository audit, record:

`repository → exact ref/branch/tag/commit → declared app version → evidence date → source-of-truth statement → measurement findings`

Never treat `default branch` and `production/current product` as synonyms without evidence. When the source ref changes, measurement definitions and baselines receive a version/baseline-change review.

## Decision state after this audit

MintTap source-of-truth mismatch: **RESOLVED FOR CURRENT AUDIT using release branch `1.0.29`**.

MintTap first value: **SEMANTIC CANDIDATE DEFINED / LIVE BASELINE NOT YET VERIFIED**.

MintTap analytics: **SDK + `app_start` OBSERVED IN RELEASE-BRANCH CODE; DOWNSTREAM SEMANTIC COVERAGE UNKNOWN**.

MintTap advertising: **SDK + Home inline ad implementation OBSERVED; LIVE REVENUE/UX EFFECT UNKNOWN**.

## Next evidence targets

1. Inspect the transaction commit boundary and Home calculated-state boundary closely enough to identify safe implementation points for the two candidate activation states.
2. Inventory all Firebase Analytics event calls in the actual release/current branch; determine whether any existing event already represents activation and avoid duplicate instrumentation.
3. Inspect `HomeInlineAdSlot` and its callbacks/refresh semantics to map actual ad opportunity, request, impression, paid-event and failure observability.
4. Establish whether `1.0.29` is merely the newest visible version branch or the actual current production release before treating its runtime as live production truth.
5. Only after event definitions are versioned and production data are available, establish activation/retention/ad baselines and open channel Decision Records.
