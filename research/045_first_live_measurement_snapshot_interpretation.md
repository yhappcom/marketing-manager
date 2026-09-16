# 045 — First MintTap live measurement snapshot interpretation

Date: 2026-09-16
Status: POST-FREEZE LIVE EVIDENCE / FIRST SNAPSHOT INTERPRETATION

## Purpose

Interpret the first validated `live_data/minttap/measurement_snapshot_v1.json` without turning incomplete telemetry into false retention, activation, or monetization conclusions.

This is the first successful end-to-end run of the preferred bridge:

`Firebase / Firestore -> Codex privacy-filtered aggregate -> GitHub -> Marketing Manager`

The bridge itself is now operational for aggregate first-party evidence.

## Snapshot provenance

Snapshot generated at `2026-09-16T06:35:37Z`.

Target release/ref:

- MintTap `1.0.29`
- repository ref `1.0.29`
- ref resolved to `736bbc99a41c14130d82aeaa17ac81f0fc835a65`

Quality controls recorded by the snapshot:

- schema validation passed;
- minimum exported cell size = 5;
- small recency segments were suppressed;
- no user rows or document IDs were exported.

## Source availability

### Firestore — AVAILABLE

Read-only aggregate access to `users/{uid}.lastActiveAt` succeeded.

### GA4 Data API — BLOCKED_GA_PROPERTY_ID

The active Google principal could access the Firebase project/Firestore path but Firebase Management `analyticsDetails` returned HTTP 403. Therefore no verified GA4 property ID was available and GA4 Data API queries were not executed.

This is a permission/discovery blocker, not evidence that Analytics data does not exist.

### BigQuery — NOT_LINKED / not observed

The accessible Firebase/GCP project returned no BigQuery datasets. No existing GA4 export dataset was observed.

### AdMob↔Firebase/Analytics linkage — NOT VERIFIED

Repository code confirms Firebase Analytics initialization and Google Mobile Ads usage, but remote linkage and runtime ad-revenue evidence remain unresolved.

## First account-recency evidence

Firestore aggregate population:

- readable user profiles: `129`
- profiles with `lastActiveAt`: `7`
- profiles missing `lastActiveAt`: `122`
- active within 7 days among profiles with a recorded signal: `6`
- active within 30 days among profiles with a recorded signal: `7`
- future/invalid timestamp count: `0`

The <5-cell rule suppresses exact values for some buckets, including the known single `active_within_24h` observation.

## Critical interpretation — coverage first, retention later

`lastActiveAt` was introduced in MintTap 1.0.29 and is written only after qualifying authenticated activity. Therefore the current 7 recorded profiles are a **signal-coverage subset**, not a complete retention cohort.

Do not calculate or communicate overall retention as:

`6 / 7`

or

`7 / 129`

without an explicit cohort/eligibility definition.

Why:

- the 122 missing values may include accounts that have not opened a build containing the tracker;
- missing `lastActiveAt` is explicitly not equivalent to inactive;
- the exact release/rollout/exposure date and eligible account population are not encoded in this snapshot;
- the field is a coarse once-per-local-day-per-device attempt, not a session counter;
- the observed subset is conditioned on successful recording.

The first decision-grade conclusion is therefore about **instrumentation coverage**, not user retention.

## Coverage state

Current state:

`129 readable profiles -> 7 have account-recency signal -> 122 remain missing`

This proves that the 1.0.29 recency mechanism is writing for some real accounts in production, which upgrades `lastActiveAt` from code-only evidence to **RUNTIME-OBSERVED / PARTIAL-COVERAGE**.

It does not yet establish a stable account-recency baseline.

## What can already be learned

1. The Codex/Firebase bridge works end to end with privacy filtering.
2. Firestore account-recency telemetry is present in live production data.
3. The tracker has no observed invalid/future timestamps in the readable aggregate.
4. All seven profiles with a recorded recency signal were within the last 30 days at snapshot time; six were within seven days. This describes the recorded subset only.
5. The much larger missing population means future snapshots should focus first on **coverage growth by calendar time**, not on retention-rate optimization.

## New baseline rule — Telemetry Coverage Before Retention

Before treating a newly introduced account-level activity field as retention evidence, establish:

`eligible population -> observed telemetry coverage -> stable coverage window -> cohort return metric`

A newly introduced field with substantial missingness is first an instrumentation-adoption signal.

## Recommended next snapshot additions — no app redeploy required

Without changing the app, the next Firestore snapshot should add only aggregate fields that help interpret coverage:

- snapshot date/time;
- total readable profiles;
- profiles with `lastActiveAt`;
- coverage count/rate trend versus prior snapshots;
- if a trustworthy account creation timestamp already exists, counts by creation-period buckets;
- if release timing is known operationally, counts of profiles created before/after the 1.0.29 release boundary;
- recency buckets under the same minimum-cell privacy rule.

Do not add per-user export or stable pseudonymous rows.

A time series of aggregate snapshot coverage can distinguish:

- normal adoption of a newly introduced field;
- stalled instrumentation;
- genuine lack of returning-account activity.

## GA4 blocker priority

The highest-value measurement blocker is now the GA4 property permission/discovery problem.

Resolve by giving the Codex/Google principal sufficient read access to identify/query the linked GA4 property, or by supplying the verified property ID through an approved first-party configuration path.

Do not guess the property ID and do not change Firebase/AdMob configuration merely to solve discovery.

Once GA4 access is restored, the first priority remains:

- runtime event inventory;
- version/platform distribution;
- `first_open`, `session_start`, `user_engagement`, `app_start`;
- automatic `ad_impression` presence;
- aggregate ad revenue availability.

## Marketing decision impact

No acquisition, Store-route, ad-frequency or retention decision should be changed from this snapshot alone.

The snapshot changes **measurement readiness**, not marketing strategy:

- measurement bridge: PROVEN;
- production `lastActiveAt`: RUNTIME-OBSERVED;
- account-recency coverage: PARTIAL / NOT YET BASELINED;
- GA4 activation/acquisition/ad evidence: BLOCKED;
- monetization baseline: NOT AVAILABLE.

## Reusable company rule

When telemetry is newly introduced into an existing app population:

`missing != inactive`

and

`observed users != eligible cohort`.

First measure telemetry adoption/coverage over time. Only after coverage and eligibility stabilize should the field support retention or cohort-quality judgments.
