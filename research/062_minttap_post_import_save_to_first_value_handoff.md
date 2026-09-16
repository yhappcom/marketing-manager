# 062 — MintTap post-Import-save → semantic first-value handoff audit

Date: 2026-09-17
Product evidence: MintTap 1.0.29 release reference `736bbc99a41c14130d82aeaa17ac81f0fc835a65`

## Question
After a successful CSV/XLSX batch save, does MintTap actually deliver the personalized portfolio result that the semantic-first-value contract requires, or does the user still have to discover another navigation step?

## Verified code path

### 1. Save succeeds inside `TransactionImportReviewScreen`
`_handleSubmitImport` validates the rows, calls `_saveImportBatch`, writes transactions/import-batch state, then calls `UserDataChangeNotifier.instance.markUserDataChanged(uid)`.

After success the screen does **not** navigate to Home and does not open a personalized result. It clears the selected-file state, stores `_lastImportBatch`, stops the saving state, and shows a success snackbar. The Import screen remains the active route and renders a saved-import panel.

Therefore:

`batch saved ≠ personalized result presented ≠ semantic first value`

### 2. The data-change signal does refresh Home state
`UserDataChangeNotifier.markUserDataChanged` clears canonical/Home/detail caches, increments a revision, notifies listeners, and starts best-effort derived-screen prewarming.

`HomeScreen` registers a listener for this notifier in `initState`. On a new matching UID revision, `_handleUserDataChanged` calls `_synchronizeHomeAfterDataChange(forceRefresh: true)`. That function reloads portfolio options and Home summary. Home summary is then staged after `loadSummaryOnlyForUser` returns and later completed with dividend-flow data.

So the architecture can make the underlying Home state fresh while the Import route is still on top. This is useful performance plumbing, but it is not evidence that the user has seen or understood the result.

### 3. The missing boundary is presentation/navigation
The successful Import path has no verified automatic `Navigator.pop`, Home push/replacement, result CTA, or other transition that exposes the newly calculated portfolio result. The user must leave the Import surface and eventually return to Home through the surrounding navigation hierarchy.

The exact number of back actions depends on the route from which Import was opened and must not be generalized without route-specific observation. For the current Settings-discovery route, Import is nested under Settings, so the user should be treated as having additional post-save navigation work until observed otherwise.

## Activation interpretation

The Import engine can complete ingestion successfully while activation remains unfinished. This creates a **post-ingestion value gap**:

`discover Import → prepare/select file → validate/review → save → [value gap] → reach Home → see personalized result → understand result`

The gap matters because the success snackbar is a completion signal. A user can reasonably interpret “saved” as task completion and stop before reaching the actual product value that MintTap intends to deliver.

This is especially important for Store/community claims. “Import transactions” may be supported by implementation evidence; “quickly see your portfolio result after import” requires evidence across the post-save handoff as well.

## New reusable principles

### Save Confirmation Is Not Value Confirmation
A persistence success message proves data ingestion, not outcome delivery.

### Background Readiness Is Not User Attainment
Prewarming/reloading can reduce latency, but semantic first value requires the user-facing result boundary.

### Completion Signals Must Point Toward Value
When an intermediate operation emits a strong completion signal, the UI should either deliver the promised outcome immediately or make the next value-bearing action unmistakable.

### Measure Through the Handoff
Import execution studies must not stop the clock/observation at batch save. For activation, continue through personalized result presentation and comprehension.

## Consequences for Study E

The Import arm stop condition remains semantic first value + V3 comprehension. Add explicit observation fields:

- `save_success_observed_at`
- `post_save_surface`
- `next_action_without_prompt`
- `home_result_reached_without_prompt`
- `post_save_navigation_incident_severity`
- `result_comprehension_evidence`

Do not treat a successful snackbar or saved-import panel as V2.

If a participant stops after save because the product appears complete, record this as a post-save handoff incident. If the product gives no adequate cue toward the personalized result and the participant cannot independently reach it, this can qualify as S3 because semantic first value is blocked despite successful ingestion.

## Tranche-1 implication

The existing peer Manual/Import exposure proposal remains justified, but discoverability parity alone is insufficient. Import needs a **value handoff acceptance criterion**. A low-risk candidate is an explicit post-save action such as “View portfolio results” that takes the user to the relevant Home state, subject to Product/Design review and fresh-user validation. Automatic navigation may be faster but should not be assumed superior because users may need to inspect the import summary or undo a batch.

Acceptance should therefore be outcome-based rather than prescribing a specific UI:

> After a successful import, a fresh user can independently reach the newly personalized portfolio result without mistaking persistence success for completion of the value task.

## Measurement/telemetry implication

`first_portfolio_value` must remain attached to the Home personalized-result presentation boundary, not to `_saveImportBatch`, transaction writes, `markUserDataChanged`, cache prewarming, or the Import success snackbar.

A separate bounded operational event such as `transaction_import_completed` could be useful later for funnel diagnosis, but it must not substitute for semantic first value and should only be added when a concrete decision requires it.

## Status
Verified from release code: successful Import remains on the Import screen; data-change notification refreshes/prewarms derived Home state; Home listens and force-refreshes on matching data revision. User-facing post-save transition to personalized result is **not implemented in the audited success path**.

Next: verify KRW/non-English Import semantics and update the executable observation sheet with the post-save handoff fields.