# 031 — Product First-Value Semantics Readiness

Date: 2026-09-16
Status: POST-FREEZE LIVE-READINESS DELTA

## Question
Can Marketing define `first_value_reached` for MintTap and LogMate from current canonical product evidence without inventing activation semantics?

## Result

### MintTap / yieldmax_tracker
Current default-branch code is not a reliable source for production first-value semantics. `lib/main.dart` is still the Flutter counter-template shell titled `YieldMax Tracker`; it does not expose the portfolio/dividend/ROC workflow described by the business context. Therefore Marketing must not bind an activation event to a guessed MintTap workflow from this repository state.

State: **BLOCKED BY PRODUCT-SOURCE MISMATCH**.

Required evidence before definition: the actual production/current product branch or canonical product specification showing the user workflow and persisted domain state. Until then `MintTap first_value_reached = UNKNOWN`.

### LogMate
The canonical product source is materially stronger. `README.md` points to `MASTER.md` as the single source of truth. MASTER defines LogMate as a personal pilot logbook whose core value is recording, calculating, searching, and supporting paper-logbook transcription; manual entry must be sufficient and import is optional. It also explicitly says the current Home flight/time/activity/totals are mock/presentation shell and that canonical ledger, persistence, calculation/aggregation engine, production importer, backup and server Sync are not yet implemented.

This supports a semantic boundary but not a production event yet:

- **Not first value:** opening the app, authentication, visiting Home, viewing mock totals, opening Customize, choosing a format, or starting import.
- **Candidate semantic first value:** the user has successfully committed at least one valid personal FlightRecord to the canonical local ledger and can immediately retrieve/view that persisted record in the normal logbook workflow.
- **Do not require import:** manual-first is a confirmed product principle; making import part of activation would misclassify valid users.
- **Do not require Sync/Auth success:** local-first/cloud-minimal principles say network/auth/sync failure should not block core local use.
- **Do not use calculated totals as the V1 activation gate yet:** the calculation/aggregation engine is not currently implemented and exact generic Total Time semantics remain open.

State: **SEMANTIC CANDIDATE DEFINED / INSTRUMENTATION NOT READY**.

The candidate becomes canonical only when the production local ledger/persistence path exists and product owners confirm that a committed/retrievable FlightRecord is the earliest meaningful value boundary. Marketing should version the event definition rather than silently changing it later.

## Minimal semantic event contract implication
Do not instrument every tap. If/when product implementation supports it, the first contract should favor state transitions:

- `flight_record_committed_v1` — emitted only after durable local commit succeeds.
- `flight_record_retrieved_v1` — optional diagnostic event when a persisted record is successfully presented from the normal ledger path.
- derived `first_value_reached_v1` — first qualifying durable commit (and, if engineering requires stronger proof, successful normal-path retrieval), once per installation/user measurement scope.

No event payload should include crew names, remarks, airports/routes, registration, flight number, timestamps of actual flights, or other logbook contents merely for marketing attribution. Prefer coarse implementation/version metadata only where needed for measurement integrity.

## Measurement rule
Activation is a product-state transition, not a screen visit. A UI shell can exist without value delivery. Repository implementation state and canonical product semantics must both be checked before declaring an event measurable.

## Reusable rule for future niche apps
Define first value at the earliest **durable, user-recognizable completion of the core job**, subject to four tests:
1. it represents actual product value rather than navigation/setup;
2. it is valid for the simplest legitimate user path;
3. optional acquisition/automation features are not required;
4. implementation can verify the state transition without collecting sensitive domain content.

If canonical semantics and current implementation disagree, mark the metric UNKNOWN/NOT_INSTRUMENTED rather than fabricating activation from available screens.

## Next action
1. Locate MintTap's actual production/canonical workflow source before defining activation.
2. For LogMate, wait for/inspect the canonical local-ledger persistence implementation, then validate the candidate boundary against implementation.
3. Only then add versioned event definitions to the Live Evidence Registry and begin activation/retention baseline collection.
