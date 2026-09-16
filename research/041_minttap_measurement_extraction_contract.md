# 041 — MintTap measurement extraction contract

Date: 2026-09-16
Status: POST-FREEZE LIVE-READINESS / EXECUTION CONTRACT

## Purpose

Turn the Codex↔Firebase bridge from architecture into an executable, privacy-filtered extraction contract that can produce a GitHub snapshot for direct analysis in the Marketing Manager chat without an app redeploy.

## Newly validated platform facts

### GA4 Data API is sufficient for the first aggregate pass

Current Google Analytics Data API documentation exposes app/reporting dimensions including `eventName`, `appVersion`, `platform`, `adFormat`, `adSourceName` and `adUnitName` and metrics including `activeUsers`, `newUsers`, `sessions`, `engagedSessions`, `eventCount`, `totalAdRevenue` and `userEngagementDuration`.

This means the initial MintTap runtime audit does not require BigQuery or a paid connector merely to establish event inventory, version/platform mix, engagement, or aggregate ad revenue when those data are present in GA4.

Sources:
- https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema
- https://developers.google.com/analytics/devguides/reporting/data/v1/basics

### Automatic event semantics stay native

Google documents `session_start` and `user_engagement` as automatically collected Analytics events. `newUsers` corresponds to users who first interacted/launched the app through `first_open`/`first_visit` semantics. These must not be relabeled as MintTap semantic activation.

Sources:
- https://support.google.com/analytics/answer/9234069
- https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema

### Existing BigQuery export is a validation layer, not a prerequisite

Firebase supports Analytics export to BigQuery. The initial export can take time and standard Analytics export has a daily-event limit for non-360 properties. Therefore the first MintTap snapshot should prefer the existing GA4 Data API and only use BigQuery when it is already linked or needed for event-level validation.

Source:
- https://firebase.google.com/docs/projects/bigquery-export

### AdMob publisher fields have important availability limits

The GA4 BigQuery schema documents publisher fields such as `publisher.ad_revenue_in_usd`, `publisher.ad_format`, `publisher.ad_source_name` and `publisher.ad_unit_id` for ad-impression data, but also documents that these publisher fields are not populated in intraday tables and certain fresh-daily exports and are not universally available.

Therefore blank publisher fields must be represented as unavailable/missing, not zero revenue.

Source:
- https://support.google.com/analytics/answer/7029846

## MintTap code-grounded Firestore signal

MintTap 1.0.29 `UserActivityService` records actual authenticated activity at most once per local calendar day per device after a successful write attempt. `UserProfileRepository.recordLastActiveAt()` updates `users/{uid}.lastActiveAt` with a Firestore server timestamp and does not create a missing profile document.

Therefore `lastActiveAt` can support aggregate authenticated-account recency, but it is not a session count and it must not be called GA DAU/WAU/MAU.

## Operational consequence

The first no-redeploy snapshot can now be standardized around two independent source families:

`GA4 aggregate runtime evidence`

and

`Firestore authenticated-account recency`.

They are intentionally not silently joined at the user level.

## New canonical artifacts

- `playbook/MINTTAP_CODEX_MEASUREMENT_EXTRACTION_V1.md`
- `live_data/minttap/measurement_snapshot_v1.schema.json`
- `live_data/minttap/measurement_snapshot_v1.template.json`
- `live_data/minttap/README.md`

The extraction spec defines exact first-run queries, privacy gates, missingness states, optional existing-BigQuery validation, and the handoff into this Marketing Manager chat.

## Privacy rule strengthened

The marketing repository must never become a pseudonymous user warehouse. Stable hashed IDs, raw `user_pseudo_id`, UID rows or per-user investment records are prohibited even when direct identifiers are removed.

Default exported minimum cell size is 5; smaller segmented rows are suppressed/merged.

## First execution gate

The next task is no longer more measurement theory. It is to run the contract through Codex against the actual MintTap Firebase/GA4 environment and create:

`live_data/minttap/measurement_snapshot_v1.json`

A partial snapshot is acceptable when a source is inaccessible, provided missingness is explicit and zero is never substituted for unavailable data.

## Success questions for the first live snapshot

1. What events are actually present for released 1.0.29?
2. Are `first_open`, `session_start`, `user_engagement`, `app_start` and `ad_impression` observed?
3. Is `totalAdRevenue` queryable and non-missing?
4. What app versions/platforms account for current activity?
5. What account-recency distribution is available from Firestore `lastActiveAt`?
6. What remains unavailable because of permissions, linkage, instrumentation or reporting-window limits?

Do not reconstruct historical semantic activation from weaker events.