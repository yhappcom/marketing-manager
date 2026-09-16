# MintTap Codex Measurement Extraction V1

Date: 2026-09-16
Status: OPERATIONAL HANDOFF
Owner: Marketing Manager
Target release: MintTap 1.0.29

## Objective

Produce a privacy-filtered, decision-grade measurement snapshot that the Marketing Manager chat can read from GitHub without exposing Firebase credentials or user-level investment data.

Preferred path:

`Firebase / GA4 / Firestore / optional BigQuery -> Codex read-only extraction -> local aggregation/privacy checks -> marketing-manager/live_data/minttap/measurement_snapshot_v1.json`

This handoff must not modify MintTap product behavior and must not require an app redeploy.

## Hard security rules

Never commit or print into GitHub:

- Firebase service-account JSON, OAuth refresh/access tokens, API secrets, private keys, credentials or environment files;
- UID, email, name or reversible account identifiers;
- per-user ticker holdings, quantities, prices, invested amounts, portfolio IDs/names, P&L, distributions, ROC, tax values or notes;
- raw device IDs, IPs, advertising IDs or `user_pseudo_id` rows;
- user-level longitudinal rows, including hashed stable IDs.

Sensitive joins may occur transiently inside the approved Google/Firebase/Codex environment, but only aggregates may cross into the marketing repository.

Default exported minimum cell size: **5**. Suppress or merge segmented rows below this threshold. Increase the threshold when the segment itself is sensitive.

## Source priority

1. GA4 Data API for current aggregate reporting.
2. Firestore read-only aggregate of `users/{uid}.lastActiveAt`.
3. Existing GA4 BigQuery export only when already linked and useful for validation/raw-event questions.
4. Do not enable a new BigQuery link, change billing, change Analytics/AdMob configuration or create product events as part of this extraction without an explicit owner decision.

## Release/code fact used by this contract

MintTap 1.0.29 writes coarse authenticated activity to `users/{uid}.lastActiveAt` using `FieldValue.serverTimestamp()`. The application attempts this at most once per local calendar day on a device after a successful write. Therefore this field is an **account-recency signal**, not an exact session count or GA retention metric.

## Run window

Standard snapshot window:

- GA4 complete-day reporting: `28daysAgo` through `yesterday`.
- Daily trend: one row per date across the same window.
- Firestore recency: evaluated at snapshot generation time using elapsed time from `lastActiveAt`.
- Do not mix partial `today` data into the complete-day series. If today is queried, store it separately and mark `partial_day=true`.

## Access discovery

Codex must first determine, without guessing:

- Firebase project actually serving MintTap 1.0.29;
- linked GA4 property ID;
- whether the authenticated principal has GA4 Data API read access;
- whether a GA4 BigQuery export dataset already exists;
- whether Firestore `users` can be read with the approved credentials.

If the GA4 property ID cannot be established, record `BLOCKED_GA_PROPERTY_ID` and continue with any safe Firestore-only aggregates rather than inventing an ID.

If a source is inaccessible, mark it `UNAVAILABLE_PERMISSION`, `NOT_LINKED`, `NOT_PRESENT`, or another explicit missingness state. Never convert missing data to zero.

## GA4 Data API extraction

Use the Google Analytics Data API `properties.runReport` against the linked GA4 property. Validate dimension/metric compatibility before relying on a report. If one requested combination is incompatible, split it into smaller reports and preserve the native definitions.

### Query A — event inventory

Purpose: discover what 1.0.29 is actually emitting without assuming the code inventory equals runtime data.

Dimensions:

- `eventName`
- `appVersion`
- `platform`

Metrics:

- `eventCount`
- `totalUsers`
- `activeUsers`

Date range: `28daysAgo` to `yesterday`.

Required checks:

- presence/count of `first_open`;
- `session_start`;
- `user_engagement`;
- custom `app_start`;
- `ad_impression`;
- any plausible existing activation/useful-return event under another name.

Do not classify an unknown event as activation from its name alone. Surface it for later semantic review.

### Query B — daily usage baseline

Dimensions:

- `date`
- `appVersion`
- `platform`

Metrics:

- `activeUsers`
- `newUsers`
- `sessions`
- `engagedSessions`
- `userEngagementDuration`

Optional derived values, calculated after retrieval rather than silently replacing native metrics:

- engaged sessions / sessions;
- engagement seconds / active user;
- sessions / active user.

### Query C — focal event trend

Dimensions:

- `date`
- `eventName`
- `appVersion`
- `platform`

Metrics:

- `eventCount`
- `totalUsers`

Filter to the focal events that actually exist, initially checking:

- `first_open`
- `session_start`
- `user_engagement`
- `app_start`
- `ad_impression`

If an event is absent, represent that as `not_observed_in_window`; do not claim SDK/configuration absence from one reporting window.

### Query D — advertising/revenue evidence

Attempt a compatible report using:

Dimensions:

- `date`
- `appVersion`
- `platform`
- `adFormat`
- `adSourceName`
- `adUnitName`

Metrics:

- `eventCount`
- `totalAdRevenue`

If the full combination is incompatible, split it into:

1. ad impression dimensions + `eventCount`;
2. date/appVersion/platform + `totalAdRevenue`.

Critical interpretation rules:

- `totalAdRevenue` is the GA metric for total advertising revenue from AdMob and third-party sources; preserve it as native GA revenue evidence.
- Do not assume `eventCount` for an ad-dimension report equals a Home-banner-only count unless the ad unit mapping proves that placement.
- If `ad_impression` exists but revenue is blank/unavailable, report the missingness; do not fill zero unless the API explicitly returns numeric zero for a compatible report.
- Keep `adUnitName` only as aggregate placement metadata; never combine it with user-level identifiers.

### Query E — version/platform population

Dimensions:

- `appVersion`
- `platform`

Metrics:

- `activeUsers`
- `newUsers`
- `sessions`

Use this to identify how much observed activity is actually on 1.0.29 versus older builds.

## Optional GA4 acquisition report

Only if source/medium data is populated and useful:

Dimensions:

- `sessionSourceMedium` or the closest compatible native session acquisition dimension;
- `appVersion`;
- `platform`.

Metrics:

- `activeUsers`;
- `newUsers`;
- `sessions`;
- `engagedSessions`.

Do not create a channel-performance verdict until semantic activation exists. This report is descriptive acquisition quality evidence only.

## Firestore `lastActiveAt` extraction

Read only the minimum fields required from `users`.

Primary field:

- `lastActiveAt`

Optional field if already present and needed for a defined decision:

- account creation timestamp such as `createdAt`.

Do not export documents or UIDs.

At generation timestamp `T`, calculate aggregate buckets from valid server timestamps:

- `profiles_total_readable`
- `profiles_with_last_active_at`
- `profiles_missing_last_active_at`
- `active_within_24h`
- `active_within_7d`
- `active_within_30d`
- `inactive_31_to_90d`
- `inactive_over_90d`
- `future_or_invalid_timestamp_count`

A profile with no `lastActiveAt` is **missing**, not inactive by definition. Preserve that distinction.

Do not call these values `DAU`, `WAU`, or `MAU`; those names belong to differently defined Analytics metrics. Label them `account_recency_*`.

## Optional existing BigQuery validation

Use only if GA4 BigQuery export is already linked.

Dataset normally follows the Analytics export naming convention `analytics_<PROPERTY_ID>`. Confirm actual project/dataset rather than constructing a path blindly.

### Event inventory validation

Illustrative SQL pattern; replace identifiers only after discovery:

```sql
SELECT
  event_name,
  app_info.version AS app_version,
  platform,
  COUNT(*) AS event_count,
  COUNT(DISTINCT user_pseudo_id) AS pseudo_user_count
FROM `<PROJECT>.<DATASET>.events_*`
WHERE _TABLE_SUFFIX BETWEEN @start_yyyymmdd AND @end_yyyymmdd
GROUP BY 1,2,3
ORDER BY event_count DESC;
```

`pseudo_user_count` may be used only as an aggregate validation field. Never export `user_pseudo_id` rows.

### Ad-impression revenue validation

If the exported schema contains populated publisher fields:

```sql
SELECT
  event_date,
  app_info.version AS app_version,
  platform,
  publisher.ad_format,
  publisher.ad_source_name,
  publisher.ad_unit_id,
  COUNT(*) AS ad_impression_events,
  SUM(publisher.ad_revenue_in_usd) AS estimated_ad_revenue_usd
FROM `<PROJECT>.<DATASET>.events_*`
WHERE _TABLE_SUFFIX BETWEEN @start_yyyymmdd AND @end_yyyymmdd
  AND event_name = 'ad_impression'
GROUP BY 1,2,3,4,5,6
ORDER BY event_date;
```

Google documents publisher fields as not populated in intraday tables and certain fresh-daily exports, and the publisher record is not universally available. If the fields do not exist or are unpopulated, record `PUBLISHER_FIELDS_UNAVAILABLE`; do not treat this as zero revenue.

## Snapshot output

Write validated aggregate output to:

`live_data/minttap/measurement_snapshot_v1.json`

The file must validate against:

`live_data/minttap/measurement_snapshot_v1.schema.json`

Use the template:

`live_data/minttap/measurement_snapshot_v1.template.json`

Companion provenance and operating notes live in:

`live_data/minttap/README.md`

## Quality gates before commit

Codex must stop the commit if any are true:

1. credential/private-key/token material is present;
2. UID/email/raw user identifier is present;
3. a user-level investment field is present;
4. a raw user/device row is present;
5. a segmented cell below `minimum_cell_size` is exported without suppression;
6. source units are mislabeled (for example GA device/user metric relabeled as Firestore account metric);
7. unavailable data is silently written as zero;
8. partial-day data is mixed into complete-day historical series without marking it;
9. the snapshot cannot be parsed/validated against the schema.

## First-run success criteria

The first snapshot is successful even if some sources are missing, provided it truthfully answers:

1. Which events are actually observed for released 1.0.29?
2. Are `first_open`, `session_start`, `user_engagement` and `app_start` present?
3. Is `ad_impression` present?
4. Is GA advertising revenue present and queryable?
5. What proportion of current GA activity is 1.0.29 by platform?
6. What account-recency aggregates are available from Firestore `lastActiveAt`?
7. Which requested metrics remain unavailable, and why?

Do not reconstruct historical `first_portfolio_value_ready_v1` from weak proxies. It remains `NOT_INSTRUMENTED/NOT_VERIFIED` until runtime evidence proves otherwise.

## Authoritative references

- Google Analytics Data API reporting and schema: https://developers.google.com/analytics/devguides/reporting/data/v1/basics
- Data API dimensions/metrics: https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema
- Firebase Analytics events: https://firebase.google.com/docs/analytics
- Firebase BigQuery export: https://firebase.google.com/docs/projects/bigquery-export
- GA4 BigQuery export schema: https://support.google.com/analytics/answer/7029846
- Firestore data access: https://firebase.google.com/docs/firestore/query-data/get-data

## Handoff to Marketing Manager chat

Once Codex commits a valid snapshot, the Marketing Manager chat should read the snapshot and provenance files from GitHub, then:

1. classify source completeness;
2. establish only the baselines supported by the snapshot;
3. update the Live Evidence Registry and `STATUS.md`;
4. open Decision Records only where the evidence is sufficient;
5. keep all unsupported conclusions explicitly `UNKNOWN`.