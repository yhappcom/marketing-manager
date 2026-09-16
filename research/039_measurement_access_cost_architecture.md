# 039 — Measurement access cost architecture

Date: 2026-09-16
Status: POST-FREEZE LIVE-READINESS / COST + ACCESS DECISION

## Purpose

Define the lowest-cost trustworthy path for MintTap measurement before paying for third-party connectors or expanding instrumentation. This follows the company constraint that marketing should default to little/no direct cash spend and that unnecessary third-party exposure of specialist-app data should be avoided.

## Authoritative cost facts

### Firebase / Google Analytics

Google Analytics for Firebase is available at no charge. Firebase currently describes Analytics as an unlimited analytics solution with reporting for up to 500 distinct defined events.

Sources:
- https://firebase.google.com/docs/analytics
- https://firebase.google.com/pricing

### Windsor.ai

Current Windsor.ai pricing:

- Forever Free: $0; 1 user, 1 data source, 1 account; no scheduled backfill.
- Initial 30-day free period has expanded capacity.
- Basic: $23/month month-to-month or $19/month equivalent when billed annually; 3 data sources and backfill.
- Standard: $118/month or $99/month equivalent annually; broader source count and hourly scheduling.

The pricing page also lists a 30-day history limitation for the Free tier. Treat free-plan history/backfill as constrained and verify the exact account entitlement before relying on it for historical cohort analysis.

Sources:
- https://windsor.ai/pricing/
- https://windsor.ai/documentation/pricing-information/
- https://windsor.ai/documentation/how-to-start-for-free/

### BigQuery

BigQuery currently provides a free usage tier of:

- first 10 GiB storage per month;
- first 1 TiB of query data processed per month.

Firebase Spark projects can use BigQuery Sandbox; Blaze projects can use full BigQuery subject to pricing. Standard GA4 daily exports are limited to 1 million events/day. Streaming export can add BigQuery-side cost and is unnecessary for the current MintTap decision cadence.

Sources:
- https://cloud.google.com/bigquery/pricing
- https://firebase.google.com/docs/projects/bigquery-export
- https://support.google.com/analytics/answer/9358801

## Cost/access options for MintTap

### Option A — Native Firebase/GA4 only

Cash cost: **$0** for Analytics itself.

Use for:
- event inventory;
- first_open/session/user_engagement/app_start inspection;
- retention/cohort exploration;
- ad_impression verification if AdMob↔Firebase linking is already working;
- version/platform/country analysis.

Advantages:
- no new third party;
- lowest privacy surface;
- no recurring connector charge.

Limitation:
- this ChatGPT session cannot currently access the Firebase console directly;
- analysis must be done in-console or via exported evidence supplied to the analysis workflow.

### Option B — Windsor.ai Forever Free as a read-only GA4 bridge

Cash cost: **$0**.

Expected fit: one MintTap GA4 property can fit the 1-data-source / 1-account free-plan envelope.

Use for:
- direct conversational access to current GA4 data through a connected third-party bridge;
- checking event inventory and recent performance without repeated manual exports.

Constraints:
- third-party processor/data-access surface;
- free history/backfill limitations;
- current task should grant only the minimum GA4 read scope, not Firebase Admin, Firestore write, authentication management, Drive/Gmail, or unrelated Google account access.

Decision: **acceptable as an optional zero-cash convenience layer, not required infrastructure.**

### Option C — Windsor.ai Basic

Cash cost: **$23/month**, or **$19/month equivalent** on annual billing at current published pricing.

Adds:
- multiple sources;
- backfill;
- broader account capacity.

Current MintTap decision: **DO NOT PAY YET.** The current problem is validating one GA4/Firebase Analytics source, not operating a multi-channel data warehouse. There is not yet evidence that Basic saves enough labor or unlocks enough decision value to justify recurring spend.

### Option D — BigQuery Sandbox / low-volume BigQuery

Cash cost: can remain **$0 within current free-tier/sandbox limits**.

Use when:
- raw event-level analysis is needed;
- GA4 UI is insufficient;
- longer-term cohort/event joining is required;
- we need reproducible SQL rather than a connector UI.

Advantages:
- first-party Google data path;
- raw-event ownership/access controls;
- potentially near-zero cost at MintTap's current specialist-app scale if usage stays within the free tier.

Limitations:
- setup/SQL/maintenance labor;
- enabling export does not recreate all historical data retroactively in every configuration, so start timing matters;
- this ChatGPT session still needs an export/connector path to consume the data directly.

Decision: **preferred long-run first-party analytical foundation if raw-event analysis becomes necessary; not required just to verify current event/ad coverage.**

### Option E — Manual CSV/export workflow

Cash cost: **$0**.

Use when:
- analysis is occasional;
- privacy minimization is more important than convenience;
- connector value has not been proven.

Tradeoff:
- highest recurring human labor;
- slower iteration;
- greater chance of inconsistent export windows/definitions unless a strict template is used.

## Company decision rule

Do not purchase an analytics connector because it is easier to query. A paid connector must pass this gate:

`decision value unlocked + labor saved > recurring cash cost + third-party risk + maintenance cost`

For a narrow specialist app with low/early traffic, the default order is:

`native free analytics → free/read-only bridge if needed → first-party BigQuery when raw evidence is needed → paid connector only after repeated labor/decision bottleneck is demonstrated`

## MintTap current decision

1. Do not buy Windsor.ai Basic/Standard now.
2. First use Firebase/GA4 native data at $0.
3. If direct ChatGPT querying materially reduces work, test Windsor.ai Forever Free using one GA4 source/account and minimum read-only permission.
4. Do not connect Firestore user investment records through Windsor.ai.
5. If the free connector's history limits block cohort work, prefer native GA4 + BigQuery Sandbox/free tier or manual export before paying a recurring connector fee.
6. Reconsider a paid connector only after MintTap + LogMate + future apps create a genuine multi-source operational need.

## Cost trigger for reevaluation

Reopen the purchase decision only when at least one is true:

- more than one app/property must be queried repeatedly in the same operating cycle;
- historical backfill is repeatedly required and cannot be handled efficiently through native GA4/BigQuery;
- manual exports consume meaningful recurring marketing labor;
- cross-source joins (GA4 + Search Console + Ads + Store/other sources) become decision-critical;
- automation frequency beyond daily materially changes an operating decision.

Until a trigger occurs, recurring connector spend is not justified.

## Next evidence target

Inspect what MintTap's current Firebase/GA4 already exposes without code changes: event inventory, app version/platform distribution, first_open/session/user_engagement/app_start, ad_impression presence/revenue fields, and available retention/cohort evidence. Only then decide whether a connector is operationally necessary.