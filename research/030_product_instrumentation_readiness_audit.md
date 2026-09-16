# 030 — Product Instrumentation Readiness Audit

Date: 2026-09-16
Status: VERIFIED REPOSITORY AUDIT / LIVE-READINESS DELTA

## Why this audit exists

Application Readiness V1 is frozen. The next permitted task is not more general marketing theory; it is to inspect actual product repositories for measurement readiness and identify concrete gaps without inventing product behavior.

Repositories inspected on `main`:

- `yhappcom/yieldmax_tracker` (MintTap codebase)
- `yhappcom/logmate`

This is a repository-state audit, not proof of production configuration, Store Console state, runtime behavior, or historical analytics data.

## Verified findings

### MintTap / yieldmax_tracker

`pubspec.yaml` declares Flutter plus `firebase_core`, but does not declare `firebase_analytics` or `google_mobile_ads`.

Repository code search found no `firebase_analytics`, Firebase Analytics event API, or Google Mobile Ads SDK/API references under the searched current default branch.

Therefore, from repository evidence alone:

- product-event analytics instrumentation: **NOT OBSERVED IN CURRENT REPOSITORY**;
- in-app ad SDK instrumentation: **NOT OBSERVED IN CURRENT REPOSITORY**;
- Firebase project/bootstrap presence: **OBSERVED**, but Firebase Core alone is not evidence that marketing/product analytics events are collected.

### LogMate

`pubspec.yaml` declares Firebase Auth, Firebase Core, Cloud Functions, and localization dependencies, but does not declare `firebase_analytics` or `google_mobile_ads`.

Repository code search found no `firebase_analytics`, Firebase Analytics event API, or Google Mobile Ads SDK/API references under the searched current default branch.

Therefore, from repository evidence alone:

- product-event analytics instrumentation: **NOT OBSERVED IN CURRENT REPOSITORY**;
- in-app ad SDK instrumentation: **NOT OBSERVED IN CURRENT REPOSITORY**;
- Firebase backend/auth capability: **OBSERVED**, but it must not be treated as analytics instrumentation.

## Important evidence semantics

`NOT OBSERVED IN CURRENT REPOSITORY` is deliberately narrower than `ABSENT IN PRODUCTION`.

Possible states outside repository evidence include Store-native analytics, server-side measurement, another branch, an unpublished implementation, or external dashboards. None should be inferred without direct evidence.

The Live Evidence Registry should therefore use `NOT_INSTRUMENTED` only after implementation/runtime confirmation. Until then, product-event/ad measurement fields should be recorded as `UNKNOWN — repository implementation not observed` where appropriate.

## Concrete marketing consequence

The current bottleneck is no longer lack of marketing theory. It is inability to connect qualified acquisition to meaningful activation, retention, and ad-bearing use with verified first-party product events.

Store-native Apple/Google metrics can still answer Store discovery/conversion questions, but they cannot by themselves establish whether a specialist user reached the product's meaningful first value, returned on a natural workflow cadence, or generated sustainable ad-bearing use.

Do not launch broad community/social activity merely to create traffic before the minimum downstream measurement path exists. Sparse specialist traffic is itself a scarce experimental resource.

## Minimum instrumentation contract — specification, not implementation order

Before engineering work, Marketing and Product should define a small semantic event contract rather than instrument every tap. Candidate classes:

1. `first_value_reached` — product-specific, must be defined from verified workflow rather than assumed.
2. `core_task_completed` — one or a few meaningful completed jobs, not screen views.
3. `return_core_value` — evidence of repeated value on the product's natural cadence; cadence remains UNKNOWN until validated.
4. `ad_eligible_opportunity` — a genuine safe monetization opportunity after workflow-state classification.
5. `ad_impression` / revenue callback — only when an ad SDK exists and policy/privacy requirements are satisfied.
6. `critical_failure_or_abandonment` — only for product states where a defensible failure/abandonment definition exists.

Required event properties should be minimal, purpose-limited, privacy-reviewed, stable, and versioned. Do not send portfolio holdings, financial amounts, pilot logbook content, names, free-text memos, or other potentially sensitive user content merely for marketing attribution.

## Measurement handoff

The minimum useful chain remains:

`source/store evidence → acquisition or routed surface → product first-value event → repeated core-value evidence → safe ad opportunity → ad revenue evidence`

Every link may be independently UNKNOWN. Missing links must not be reconstructed after the fact.

## What this audit does NOT establish

- actual App Store Connect / Play Console analytics availability;
- production Firebase Analytics configuration;
- production AdMob or another ad network configuration;
- actual MintTap activation definition;
- actual LogMate activation definition;
- natural retention cadence for either product;
- current Store screenshots/listing assets;
- ad placement UX or frequency;
- consent/privacy implementation.

These require direct console, runtime, product, or policy evidence.

## Decision impact

Priority live-readiness sequence:

1. Define product-specific first-value/core-task semantics with Product using actual workflow evidence.
2. Confirm whether production analytics/ad measurement exists outside the inspected repository state.
3. If absent, implement the minimum semantic instrumentation contract before spending scarce niche traffic on broad promotion or fine-grained Store experiments.
4. Connect event definitions to `LIVE_EVIDENCE_REGISTRY_TEMPLATE.md` with version/change boundaries.
5. Only then establish activation/retention/ad baselines and open channel-specific Decision Records.

## Recheck triggers

Re-audit when:

- either product adds/removes analytics or ad SDK dependencies;
- analytics/event schema is committed;
- Store launch instrumentation is prepared;
- production telemetry evidence becomes available;
- privacy/consent architecture changes.
