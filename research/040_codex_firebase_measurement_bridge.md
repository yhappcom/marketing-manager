# 040 — Codex ↔ Firebase measurement bridge for in-chat marketing analysis

Date: 2026-09-16
Status: POST-FREEZE LIVE-READINESS / ACCESS ARCHITECTURE

## Decision context

The preferred operating experience is to analyze MintTap measurement inside the Marketing Manager chat. Current connector discovery did not expose a native Firebase/Firestore/BigQuery first-party connector directly to this chat. Third-party GA4 connectors exist, but they add another processor, permission surface, and potentially recurring cost.

The product owner confirmed that Codex can access Firebase. Therefore use Codex as the privileged data-access layer and the already-connected GitHub `yhappcom/marketing-manager` repository as the non-sensitive evidence handoff layer.

## Preferred hierarchy

1. **Direct in-chat first-party Firebase/GA4 access**, if a native connector becomes available later.
2. **Codex → Firebase/GA4/BigQuery → privacy-filtered aggregate snapshot → GitHub → Marketing Manager chat.**
3. Manual Firebase/GA4 export supplied to the chat.
4. Third-party GA4 connector such as Windsor.ai only when it materially reduces labor and the permission/cost tradeoff is justified.
5. Paid connector only after repeated multi-source operational demand is proven.

This supersedes any earlier implication that a third-party connector is the default next step.

## Bridge architecture

`Firebase / Firestore / GA4 / BigQuery`

→ authenticated read by Codex/local engineering environment

→ local aggregation + privacy filter

→ versioned measurement snapshot

→ `yhappcom/marketing-manager/live_data/...`

→ this Marketing Manager chat reads the snapshot through the existing GitHub connection

→ Decision Record / live baseline / marketing analysis

## Security boundary

Firebase credentials, service-account JSON, refresh tokens, API secrets and raw authentication material must **never** be committed to GitHub.

User-level investment/logbook data must not be committed to the marketing repository. In particular do not export:

- UID or reversible user identifiers;
- email/name;
- ticker-level holdings tied to a user;
- transaction amounts, prices or quantities tied to a user;
- portfolio names/IDs;
- P&L, dividend, ROC or tax data tied to a user;
- free-text notes;
- raw IP/device identifiers.

Codex may use user/account-level records transiently inside the trusted Firebase/Google environment when required to produce a legitimate aggregate, but the GitHub handoff should contain only minimum aggregate evidence.

## Recommended snapshot contract v1

Suggested path:

`live_data/minttap/measurement_snapshot_v1.json`

Companion provenance file:

`live_data/minttap/README.md`

Minimum top-level metadata:

- `schema_version`
- `generated_at`
- `source_window_start`
- `source_window_end`
- `app_version_scope`
- `platform_scope`
- `source_systems`
- `query_or_method_version`
- `missingness_notes`

### GA4 / Firebase Analytics aggregates

Where currently available without app redeploy:

- active users/devices by day;
- new users / `first_open`;
- sessions / `session_start`;
- engagement / `user_engagement`;
- custom `app_start`;
- app version/platform/country aggregates;
- `ad_impression` count if present;
- ad revenue aggregate and currency semantics if present and validated;
- retention/cohort aggregates from native GA semantics when needed.

Do not label these account-level unless the source definition actually is account-level.

### Firestore account-recency aggregates

For MintTap 1.0.29 `lastActiveAt`, Codex can calculate aggregate account-level recency inside the Firebase access boundary, for example:

- total authenticated accounts in defined population;
- accounts active today / last 7 days / last 30 days;
- accounts by days-since-last-active bucket;
- new accounts in window;
- returning-account counts under a documented definition.

Export counts/rates only. Do not export the underlying UID rows to GitHub.

### Cross-source joins

If acquisition/GA4/device data must be joined to Firestore/account data, perform the sensitive join inside the trusted Codex/Google environment and export only cohort aggregates that meet a minimum-cell-size/privacy rule.

Do not put hashed per-user rows in GitHub merely because the hash looks anonymous. Stable pseudonyms can still enable longitudinal re-identification and are unnecessary for the marketing repository.

## Minimum-cell rule

For segmented outputs, avoid very small cohorts that can reveal individual behavior. Default company rule for GitHub-exported marketing evidence:

- do not export user/account-level rows;
- suppress or merge very small segments;
- retain only the granularity needed for a real marketing decision.

The exact minimum cell threshold can be tightened later if product/privacy requirements require it.

## Cost architecture

The bridge itself can have **$0 connector subscription cost**.

Potential costs are only the underlying Google/Firebase/BigQuery usage and engineering/runtime labor. At MintTap's current specialist-app scale, native Firebase Analytics is free and BigQuery can often remain within the free tier if queries are designed carefully; actual billing must still be monitored rather than assumed.

This makes the bridge economically preferable to a paid third-party connector while only one/few niche apps are being measured.

## Operating modes

### Mode 1 — on-demand snapshot

Preferred starting mode.

When Marketing Manager needs fresh evidence, Codex runs the approved queries and updates the snapshot. No recurring infrastructure is required.

### Mode 2 — scheduled daily snapshot

Use only if repeated decisions justify automation. A scheduled job can generate daily aggregate snapshots, but this creates maintenance and secret-management obligations and should not be introduced before on-demand use proves value.

## Snapshot quality gates

Every snapshot must declare:

1. exact source system;
2. native metric definition where relevant;
3. unit of analysis (`device`, `user-instance`, `account`, `session`, `impression`);
4. observation window;
5. app version/platform scope;
6. known missingness;
7. whether data is measured, modeled, inferred, or derived;
8. extraction/query version.

Never silently merge GA device-level retention with Firestore account-level recency.

## Immediate MintTap use

Without another app release, the Codex bridge should first answer:

1. What Analytics events are actually present for released 1.0.29?
2. Are `first_open`, `session_start`, `user_engagement`, `app_start` being collected as expected?
3. Is `ad_impression` present? If yes, what validated revenue fields are available?
4. What is the app-version/platform distribution?
5. What account-level return/recency picture is available from `lastActiveAt`?
6. How different are GA device-level activity and Firestore account-level recency at aggregate level?

Do not attempt to reconstruct the not-yet-instrumented `first_portfolio_value_ready_v1` historically from weaker proxy events.

## Engineering handoff

Codex should implement/read only what is required to create the aggregate snapshot. Product behavior must not be modified merely to make the bridge work.

Preferred implementation sequence:

1. authenticate locally/through existing approved Firebase/Google credentials;
2. inventory accessible Firebase/GA4/BigQuery sources;
3. run read-only queries;
4. aggregate locally;
5. validate no sensitive rows/fields remain;
6. write/update the snapshot and provenance files in `marketing-manager`;
7. Marketing Manager chat consumes those files and updates Decision Records/STATUS.

## Reusable company rule

For niche apps with existing engineering access but no direct marketing-chat connector:

`privileged source access stays near the product → only decision-grade aggregates cross into the marketing knowledge layer`.

This preserves zero/low cash cost, limits third-party exposure, and still allows the Marketing Manager chat to operate from fresh first-party evidence.