# 057 — MintTap First-Value Engineering Invariant Audit

Date: 2026-09-17
Scope: MintTap release branch `1.0.29` at `736bbc99a41c14130d82aeaa17ac81f0fc835a65`

## Purpose

Turn the 056 semantic first-value contract into an engineering-safe measurement boundary without inventing account, device, or persistence semantics.

Canonical semantic boundary from 056:

`eligible real portfolio context + accepted real data + successful derived personal result render`

Candidate aggregate Analytics event: `first_portfolio_value`.

## Code-verified findings

### 1. App-start is too early by construction

`lib/main.dart` enables Firebase Analytics and emits `app_start` immediately after Firebase initialization. This occurs before auth routing, onboarding, portfolio selection, transaction/import acceptance, Home summary computation, or personal result display.

Conclusion: `app_start` can remain an availability/session-adjacent signal but cannot proxy first value.

### 2. User activity is account-scoped remotely but device-day-gated locally

`UserActivityService` resolves the current Firebase UID, writes `users/{uid}.lastActiveAt`, and uses SharedPreferences key `user_activity.last_active_recorded.{uid}` to suppress repeat writes on the same local calendar day. The local key is UID-scoped, while the durable recency value is stored on the user profile.

This is a useful implementation precedent for separating local write suppression from account-scoped semantic state. It is not itself a first-value implementation.

### 3. Home has a real post-calculation success boundary

For authenticated non-browse users, `HomeScreen._reloadHomeSummary()` calls `HomeSummaryService.loadSummaryOnlyForUser(uid, portfolioId: ...)`, receives a `HomeSummaryDto`, stages it into `_latestHomeResult`, prefetches detail tickers, then asynchronously loads dividend-flow data. This establishes a code-verifiable point after the canonical calculation pipeline has produced a personal summary.

The event must not fire merely because this future completed. 056 requires accepted real data and a successfully rendered meaningful personal result. The candidate trigger therefore belongs downstream of successful non-demo summary computation and must additionally verify an eligible data/result condition.

### 4. `summary.positions.isNotEmpty` is a useful eligibility guard, not the entire first-value definition

The existing first-transaction tutorial treats `summary.positions.isNotEmpty` as evidence that the empty first-transaction state has been exited. This provides a code-backed signal that personal holdings exist. However, first value additionally requires a meaningful derived result to be available and displayed. A position existing is therefore necessary evidence for the current Manual/Import paths, not sufficient semantic proof by itself.

### 5. Browse/Demo must remain excluded

`HomeScreen` has an explicit `_isBrowseMode` path and loads `BrowseModeService.instance.loadHome(...)` instead of the authenticated user's Home summary. This gives engineering a direct exclusion condition. No `first_portfolio_value` event should be emitted from Browse/Demo data.

### 6. Current first-transaction tutorial persistence is not a safe template for first-value deduplication

`first_transaction_tutorial_completed` is stored as one unscoped SharedPreferences boolean. It is not UID-scoped in the audited Home code. That is acceptable only for its current local tutorial semantics; it would be unsafe as the canonical deduplication mechanism for an account-level first-value event because account switching on the same device could inherit the marker.

New rule: **Tutorial State Is Not Measurement State**.

### 7. Existing profile storage supports an account-scoped durable marker pattern

`UserProfileRepository.saveUserProfile(uid, data)` merges data into `users/{uid}`. `recordLastActiveAt(uid)` updates the same account document without creating a partial profile before onboarding. The repository therefore already has a durable account-scoped storage surface that could technically hold first-value state.

This audit does **not** mandate a specific field or schema. Engineering should choose the exact persistence contract and security/write semantics. The marketing requirement is that cross-device duplicate suppression and account switching behave consistently with the same account-level first-value definition.

## Required invariants before implementation

### I1 — Context invariant
Emit only for an authenticated real-user context. Browse/Demo/sample contexts are excluded.

### I2 — Data invariant
At least one accepted real holding/transaction/import-derived position must be represented in the computed personal summary. Parsing, draft review, or transaction form completion alone does not qualify.

### I3 — Result invariant
At least one meaningful derived personal portfolio result must have successfully reached the rendered Home state. Do not use route arrival or future completion alone.

### I4 — Account invariant
Deduplication semantics must be scoped to Firebase UID or an equivalently durable account identity, not a device-global boolean.

### I5 — Multi-device invariant
The same account reaching first value on a second device must not be counted as a second semantic first-value attainment merely because local storage differs.

### I6 — Account-switch invariant
A second account on the same device remains independently eligible. Device-global first-value markers are prohibited.

### I7 — Reinstall invariant
Reinstalling the app must not create a new semantic first-value attainment for an account that already reached it if durable account state still exists.

### I8 — Logout invariant
Logout alone does not erase prior attainment. Signing back into the same account must not make the account newly eligible.

### I9 — Deletion invariant
Account deletion semantics must follow the actual product/data-deletion contract. Marketing does not decide whether a newly created account after deletion represents a new identity epoch. This remains an explicit engineering/product decision.

### I10 — Consent invariant
Analytics consent/collection state and product attainment state are separate. If a user reaches first value while Analytics collection is unavailable, do not later fabricate the original event timestamp or infer historical attainment from holdings. A durable product-state marker may prevent duplicate semantic attainment, while Analytics observability remains `UNKNOWN/UNOBSERVED` for that historical event.

New rule: **Attainment State Is Not Observation State**.

## Recommended implementation shape

A safe conceptual architecture is:

`Home non-demo calculated summary → eligible real-data/result predicate → durable account-scoped compare/set → Analytics emission only on newly attained transition`

The durable compare/set must be designed to avoid duplicate emission from concurrent renders/devices. A purely local SharedPreferences flag is insufficient for the account-level invariant. Exact Firestore transaction/server schema is an engineering choice and should be reviewed against security rules and account-deletion behavior.

## What not to do

- Do not emit on `app_start`, sign-in, onboarding completion, Home route open, transaction submit, file parse, or import review completion.
- Do not use `lastActiveAt` as first-value evidence.
- Do not backfill old users from positions/holdings.
- Do not use the existing unscoped tutorial SharedPreferences flag.
- Do not count a reinstall or second device as a second first value for the same durable account.
- Do not attach ticker, quantity, price, tax/distribution values, portfolio name, file name, UID/email, or other financial/identifying data to Analytics.

## Measurement interpretation

For a new implementation, activation reporting must distinguish:

`eligible post-instrumentation accounts`

from

`historical accounts whose prior attainment is unknowable`.

The first-value event measures observed transitions after the instrumentation boundary; it is not a retrospective census of all users who ever obtained value.

## New reusable company principles

1. **Tutorial State Is Not Measurement State** — UX completion markers cannot be reused blindly as account-level measurement state.
2. **Attainment State Is Not Observation State** — product truth and analytics visibility are separate dimensions.
3. **Durable Identity Before Deduplication** — semantic once-only events require a persistence scope matching the business identity being measured.
4. **Render Boundary Before Route Boundary** — route arrival is not value; successful meaningful output is the boundary.
5. **Historical Unknown Stays Unknown** — instrumentation does not authorize retrospective inference.

## Decision impact

The 056 contract is now sufficiently constrained for an engineering handoff, but implementation is not yet code-verified. The remaining engineering decisions are the exact durable marker/schema, atomic compare/set behavior, account-deletion epoch semantics, and the precise Home result predicate representing a meaningful rendered result.

Acquisition remains gated. This audit improves measurement correctness; it does not establish that activation itself has improved.