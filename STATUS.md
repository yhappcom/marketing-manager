# Marketing Manager Status

Last updated: 2026-09-16

## Current phase

**Stage 1 — FOUNDATION COMPLETE. Stage 2 — Sparse-Niche Decision Science COMPLETE. Application Readiness V1 — COMPLETE / FROZEN FOR LIVE VALIDATION.**

General theory remains frozen by default. New work follows live product evidence, authoritative platform changes, or concrete framework failures.

## Canonical applied system

- `playbook/MARKETING_DECISION_QUEUE.md`
- `playbook/DECISION_RECORD_TEMPLATE.md`
- `playbook/EVIDENCE_PROVENANCE_BASELINE_PROTOCOL.md`
- `playbook/LIVE_EVIDENCE_REGISTRY_TEMPLATE.md`
- `playbook/PRODUCT_BASELINE_CHECKLISTS.md`
- `curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md`

Canonical growth chain:

`relevant demand → credible promise → qualified acquisition → meaningful activation → repeated core value → sustainable ad-bearing use`

## Locked operating context

Default to little/no direct cash spend. Store, owned/editorial, and permission-respecting community surfaces are core growth assets; social is selective/evidence-gated. MintTap and LogMate serve narrow specialist audiences. Advertising is the intended monetization path unless owner policy changes, but intrusive/deceptive/access-limiting ads are unacceptable. Optimize sustainable ad revenue subject to usability, trust, retention, accessibility, performance, and policy. Zero-cash never means zero labor/opportunity cost.

## Application Readiness state

Stage 2 Gate: **PASS**. Application Readiness V1: **COMPLETE / FROZEN**.

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain `UNKNOWN/NOT_INSTRUMENTED`. Attribution is not reconstructed after the fact.

## Canonical MintTap release state

**MintTap 1.0.29 is RELEASED.**

This is current first-party operational information supplied by the product owner and supersedes prior public-crawler-based uncertainty about whether 1.0.29 had entered production/release.

Repository branch `1.0.29`, previously audited at head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, is the current release-version implementation reference for marketing/measurement analysis unless newer first-party release information supersedes it.

Platform-specific exact build numbers, phased-rollout percentages, territory availability and exact binary↔commit provenance remain separate facts when a decision specifically requires them.

## Post-freeze authoritative / live-readiness deltas

### 029 — iOS/iPadOS 27 Store discovery surfaces
`research/029_ios27_app_store_discovery_surface_change.md`

Store creative now has distinct discovery/search recognition, product-page persuasion and routed-message-continuity jobs. PPO remains the randomized default-product-page experiment surface; CPP is routed/localized and observational unless another valid causal design exists.

### 030 — Product instrumentation repository audit
`research/030_product_instrumentation_readiness_audit.md`

Default-branch inspection initially did not observe analytics/ad SDKs. 032 later established that MintTap's default branch was not representative of the versioned release implementation.

### 031 — Product first-value semantics readiness
`research/031_product_first_value_semantics_readiness.md`

LogMate candidate first value is durable commit of a valid personal FlightRecord to the canonical local ledger with normal-path retrieval/view. State remains **SEMANTIC CANDIDATE DEFINED / INSTRUMENTATION NOT READY**.

### 032 — MintTap release-branch source recovery
`research/032_minttap_release_branch_source_recovery.md`

Branch `1.0.29` contains the full MintTap implementation, declares `1.0.29+29`, Firebase Analytics and Google Mobile Ads, emits `app_start`, initializes Mobile Ads, contains ad privacy/config modules, first-transaction tutorial and normal-flow Home inline ad.

### 033 — MintTap release evidence and ad observability
`research/033_minttap_release_evidence_and_ad_observability.md`

`UserActivityService.lastActiveAt` is a coarse authenticated-return/recency signal only. Inspected Home ad code loaded consent-gated banners but did not contain verified app-side impression/paid-value handlers.

### 034 — MintTap activation and Home ad-refresh boundary
`research/034_minttap_activation_and_ad_refresh_boundary.md`

MintTap first value is **CODE-VERIFIED EVENT BOUNDARY / NOT YET VERIFIED AS INSTRUMENTED**. Candidate `first_portfolio_value_ready_v1` belongs at the successful normal authenticated Home calculated-state boundary when `summary.positions.isNotEmpty`.

Current release-version Home ad mechanism:

`detail return → _homeAdRefreshToken increment → ValueKey change → new HomeInlineAdSlot state → consent gate → BannerAd.load()`

This proves a fresh request opportunity, not an impression or paid event.

### 035 — Served-version identity and monetization telemetry contract
`research/035_minttap_served_version_and_monetization_telemetry_contract.md`

Former 1.0.29 production uncertainty is **SUPERSEDED BY 037**. Telemetry conclusions remain active: prefer SDK/network-confirmed impression/revenue evidence and a single canonical revenue path; do not optimize CTR.

### 036 — MintTap 1.0.28 → 1.0.29 transfer audit
`research/036_minttap_1_0_28_to_1_0_29_transfer_audit.md`

Historical compatibility evidence only. Home and Home inline-ad core files were unchanged between refs, while `UserActivityService` was a 1.0.29 addition.

### 037 — MintTap 1.0.29 release-state correction
`research/037_minttap_1_0_29_release_state_correction.md`

First-party operational correction establishes **MintTap 1.0.29 = RELEASED**.

### 038 — MintTap activation-cohort measurement design
`research/038_minttap_activation_cohort_measurement_design.md`

New measurement distinction:

`acquisition event ≠ first value ≠ useful return ≠ account recency ≠ monetized impression`

Do not use `app_start` as MintTap activation or useful-retention evidence. Preserve `first_portfolio_value_ready_v1` as the one-time first-value specification and, if no equivalent existing event is found, use a separate repeatable `portfolio_value_viewed_v1` candidate for successful non-empty normal Home value exposure. The repeatable event must be deduplicated against UI rebuilds and contain no investment-content parameters.

`lastActiveAt` remains a separate account-linked coarse recency signal. Current Google Analytics cohort exploration is device-based and does not use User-ID, so GA retention cohorts and authenticated-account recency must not be treated as identical populations.

Preferred minimal future funnel:

`first_open/acquisition → first_portfolio_value_ready_v1 → portfolio_value_viewed_v1 → automatic ad_impression/revenue`

with `lastActiveAt` retained independently for account-recency questions.

### 039 — Measurement access cost architecture
`research/039_measurement_access_cost_architecture.md`

Cost conclusion: do **not** purchase Windsor.ai Basic/Standard for the current MintTap measurement problem. Native Firebase/GA4 is the zero-cash baseline; BigQuery can often remain within its free tier at specialist-app scale if raw event evidence is needed. A paid connector must prove labor/decision value beyond recurring cash cost, third-party risk and maintenance.

Default cost order:

`native free analytics → zero-cash bridge/export → first-party BigQuery when raw evidence is needed → paid connector only after repeated operational bottleneck`

### 040 — Codex ↔ Firebase measurement bridge
`research/040_codex_firebase_measurement_bridge.md`

Current ChatGPT connector discovery did not expose a native Firebase/Firestore/BigQuery first-party connector directly to this conversation. The owner confirmed Codex can access Firebase. Preferred architecture is therefore:

`Firebase / Firestore / GA4 / BigQuery → Codex read-only access → local privacy filtering/aggregation → marketing-manager GitHub snapshot → Marketing Manager chat`

This makes GitHub a **non-sensitive evidence handoff layer**, not a raw user-data warehouse.

Security rules:

- never commit Firebase credentials/service-account JSON/tokens;
- never commit UID/email or user-level investment/logbook records;
- perform sensitive joins inside the trusted Firebase/Google/Codex environment;
- export only decision-grade aggregates with explicit unit/window/version/missingness;
- do not treat hashed user rows as safe merely because identifiers are pseudonymized.

Preferred first snapshot path:

`live_data/minttap/measurement_snapshot_v1.json`

with companion provenance in `live_data/minttap/README.md`.

Direct in-chat native Firebase access remains the preferred future path if an appropriate first-party connector becomes available. Third-party GA4 connectors are fallback convenience layers, not the default infrastructure.

## Current MintTap measurement state

- Release version: **1.0.29 RELEASED**.
- Firebase Analytics initialization / `app_start`: code-verified.
- Mobile Ads initialization: code-verified.
- `first_portfolio_value_ready_v1`: semantic/code boundary verified, **implementation not yet verified**.
- Repeatable useful-return event: **candidate specified in 038; implementation not verified**.
- Home detail-return ad recreation: code-verified release-version mechanism.
- App-side Home banner impression/paid callback: not observed in audited file.
- AdMob↔Firebase automatic `ad_impression`: runtime/console linkage state **UNKNOWN**.
- `lastActiveAt`: 1.0.29 coarse authenticated-return/recency signal; separate from GA retention.
- Actual live activation, useful-return cadence, Home ad impression frequency, paid value and retention/harm effects: **NOT YET BASELINED**.
- Direct Firebase access from this chat: **NOT CURRENTLY AVAILABLE THROUGH A NATIVE CONNECTOR**.
- Codex Firebase access: **OWNER-CONFIRMED AVAILABLE**, to be used as preferred bridge if direct chat access remains unavailable.

## Company ordering rule

`released deployment identity → semantic first value → repeatable useful value → SDK/network-confirmed impression → canonical revenue event → retention/harm guardrails → frequency/channel decision`

Every metric must declare its unit: device/user-instance/account/session/impression. Do not silently join device-level GA cohorts to account-level Firestore state.

Access/cost ordering:

`direct first-party in-chat if available → Codex privacy-filtered bridge → manual native export → zero-cost third-party bridge if justified → paid connector only after proven need`

## Capability state

**FOUNDATION COMPLETE. STAGE 2 COMPLETE. APPLICATION READINESS V1 COMPLETE/FROZEN.**

## Next learning / operating sequence

1. **Do not extend general theory by default.**
2. Prefer solving Firebase/GA4 analysis inside this Marketing Manager chat. Recheck for a native first-party connector when the platform/tool surface changes.
3. Until direct Firebase access exists here, use Codex as the privileged read-only Firebase/GA4/BigQuery access layer and generate the privacy-filtered aggregate snapshot defined in 040.
4. First snapshot should answer: actual 1.0.29 event inventory; `first_open/session_start/user_engagement/app_start`; `ad_impression` presence/revenue fields; app-version/platform mix; Firestore `lastActiveAt` account-recency aggregates.
5. Inspect exact MintTap 1.0.29 code/runtime evidence for any existing semantic activation/useful-return events under other names before proposing app changes.
6. If absent, preserve the minimum future engineering handoff: one-time `first_portfolio_value_ready_v1` and deduplicated repeatable `portfolio_value_viewed_v1`, with no investment-content parameters.
7. Keep detail-return ad recreation unchanged until confirmed impression/revenue evidence can be compared with useful-return and harm guardrails.
8. Establish acquisition→activation, activation→useful-return and useful-use→ad-revenue baselines only after source semantics are aligned.
9. Do not purchase a paid analytics connector unless repeated multi-source labor/decision bottlenecks pass the 039 cost gate.
10. For LogMate, apply the same privileged-source→aggregate-evidence architecture if future product telemetry requires it.

## Major unresolved live questions

### MintTap

- actual event inventory for released 1.0.29;
- whether equivalent semantic activation/useful-return events already exist under other names;
- AdMob↔Firebase/Analytics linkage state and live automatic `ad_impression` parameter/revenue coverage;
- actual activation rate and time-to-first-value;
- useful portfolio-return cadence by activated cohort;
- device-level GA retention vs account-level recency differences;
- Home inline-ad impressions and paid value per useful-return window;
- retention/harm effects;
- Store/search/source baseline, community permissions, content freshness, Search Console baseline and Store experiment resolution.

### LogMate

Production local-ledger/persistence implementation; validation of FlightRecord first value; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics implementation; workflow/retention cadence; ad model; pilot observations; professional-community permissions; regulatory-content authority mapping and launch traffic ceiling.

### Company-wide

Native first-party Firebase/GA4 access path for this chat; measured labor capacity; maintenance demand; privacy-compliant event/ingestion path; long-run ad revenue per retained user; empirical stop thresholds; populated claim/permission ledgers; social qualified-response baselines; reusable launch records; proof that reusable assets reduce later labor.

## Progress interpretation

Do not report progress by file count. Missing live evidence remains explicitly unknown. Further learning follows real evidence, authoritative platform deltas and concrete execution failures rather than accumulating adjacent theory.
