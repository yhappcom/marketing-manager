# MintTap Live Measurement Data

This directory is the privacy-filtered handoff surface between privileged Firebase/GA4 access and the Marketing Manager chat.

## Canonical files

- `measurement_snapshot_v1.schema.json` — validation contract.
- `measurement_snapshot_v1.template.json` — starting template.
- `measurement_snapshot_v1.json` — current validated snapshot; created/updated by the approved extraction workflow after a real run.

Operational extraction specification:

- `../../playbook/MINTTAP_CODEX_MEASUREMENT_EXTRACTION_V1.md`

## Current target

MintTap release: **1.0.29**.

First-run evidence targets:

1. runtime GA4 event inventory;
2. `first_open`, `session_start`, `user_engagement`, custom `app_start`;
3. `ad_impression` presence and aggregate ad-revenue availability;
4. app-version/platform activity mix;
5. Firestore `lastActiveAt` account-recency aggregates;
6. explicit source/missingness status.

## Commit policy

Only commit aggregate, privacy-filtered evidence.

Never commit credentials, tokens, keys, UID/email, raw `user_pseudo_id`, user-level holdings/transactions/portfolio values, device identifiers, or stable pseudonymous user rows.

Default minimum exported cell size is 5. Small segmented cells must be suppressed or merged.

## Missingness vocabulary

Use explicit states such as:

- `AVAILABLE`
- `UNAVAILABLE_PERMISSION`
- `NOT_LINKED`
- `NOT_PRESENT`
- `NOT_OBSERVED_IN_WINDOW`
- `PUBLISHER_FIELDS_UNAVAILABLE`
- `BLOCKED_GA_PROPERTY_ID`
- `UNKNOWN`

Missing does not mean zero.

## Unit discipline

Every metric must retain its source unit.

Examples:

- GA4 `activeUsers`: GA-defined user/device-oriented Analytics population.
- GA4 `sessions`: session unit.
- `ad_impression`: impression/event unit.
- Firestore `lastActiveAt`: authenticated account-recency state.

Do not call Firestore recency counts DAU/WAU/MAU. Do not silently join GA retention with account recency.

## Snapshot lifecycle

1. Codex/approved engineering environment authenticates to the existing Firebase/Google sources.
2. Run read-only extraction per `MINTTAP_CODEX_MEASUREMENT_EXTRACTION_V1.md`.
3. Aggregate locally and apply privacy suppression.
4. Validate against `measurement_snapshot_v1.schema.json`.
5. Commit/update `measurement_snapshot_v1.json` only if quality gates pass.
6. Marketing Manager chat reads the snapshot, updates evidence/decision records, and never reconstructs unsupported metrics.

## No-redeploy boundary

The snapshot is designed to maximize what can be learned from the currently released 1.0.29 without an app update.

It cannot legitimately recover a semantic event that was never instrumented. In particular, do not infer `first_portfolio_value_ready_v1` historically from `app_start`, transaction persistence, sessions, or `lastActiveAt`.

## BigQuery note

Use an existing Analytics BigQuery export when present and useful. Do not enable new export/billing as an implicit side effect of this workflow. Any configuration or billing change requires a separate owner decision.
