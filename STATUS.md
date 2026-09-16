# Marketing Manager Status

Last updated: 2026-09-16

## Current phase

**Stage 1 — FOUNDATION COMPLETE. Stage 2 — Sparse-Niche Decision Science COMPLETE. Application Readiness V1 — COMPLETE / FROZEN FOR LIVE VALIDATION.**

General theory remains frozen by default. New work follows live product evidence, authoritative platform changes, or concrete framework failures.

Canonical growth chain:

`relevant demand → credible promise → qualified acquisition → meaningful activation → repeated core value → sustainable ad-bearing use`

## Locked operating context

Default to little/no direct cash spend. Store, owned/editorial, permission-respecting community surfaces and selective evidence-gated social are the core acquisition system. MintTap and LogMate serve narrow specialist audiences. Advertising is the intended monetization path unless owner policy changes, but intrusive/deceptive/access-limiting ads are unacceptable. Optimize sustainable ad revenue subject to usability, trust, retention, accessibility, performance and policy.

## Canonical applied system

- `playbook/MARKETING_DECISION_QUEUE.md`
- `playbook/DECISION_RECORD_TEMPLATE.md`
- `playbook/EVIDENCE_PROVENANCE_BASELINE_PROTOCOL.md`
- `playbook/LIVE_EVIDENCE_REGISTRY_TEMPLATE.md`
- `playbook/PRODUCT_BASELINE_CHECKLISTS.md`
- `curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md`
- `playbook/MINTTAP_CODEX_MEASUREMENT_EXTRACTION_V1.md`

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain `UNKNOWN/NOT_INSTRUMENTED`. Attribution is not reconstructed after the fact.

## Canonical MintTap release state

**MintTap 1.0.29 is RELEASED.**

First-party owner information supersedes earlier public-crawler uncertainty. Repository branch `1.0.29`, previously audited at head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, is the current release-version implementation reference for marketing/measurement analysis unless newer first-party release information supersedes it.

Platform-specific exact build numbers, phased rollout, territory availability and exact binary↔commit provenance remain separate facts when a decision requires them.

## Post-freeze live-readiness deltas

### 029 — Store discovery surface change
`research/029_ios27_app_store_discovery_surface_change.md`

Store creative now has distinct discovery/search recognition, product-page persuasion and routed-message-continuity jobs. Apple PPO/CPP semantics remain separate.

### 030–032 — instrumentation audit and source recovery
Initial default-branch inspection did not represent the live MintTap implementation. Version branches recovered the full product source; never equate default branch with production without evidence.

### 033–034 — activation/ad lifecycle
`lastActiveAt` is a coarse authenticated-account recency signal only. MintTap first value is a **CODE-VERIFIED EVENT BOUNDARY / NOT YET VERIFIED AS INSTRUMENTED** at the successful normal authenticated Home calculated-state boundary with `summary.positions.isNotEmpty`.

Release-version Home ad mechanism:

`detail return → _homeAdRefreshToken increment → ValueKey change → new HomeInlineAdSlot state → consent gate → BannerAd.load()`

This proves a fresh request opportunity, not an impression or paid event.

### 035–037 — deployment/release correction
Earlier 1.0.29 production uncertainty is superseded. MintTap 1.0.29 is released. 1.0.28 comparison remains historical compatibility evidence only.

### 038 — activation cohort measurement design
Keep the states separate:

`acquisition event ≠ first value ≠ useful return ≠ account recency ≠ monetized impression`

Do not use `app_start` as activation. Preserve `first_portfolio_value_ready_v1` as the one-time first-value specification. If no equivalent runtime event exists, a future repeatable `portfolio_value_viewed_v1` may represent useful-return value exposure with rebuild/session deduplication and no investment-content parameters.

### 039 — measurement access cost architecture
Do not purchase Windsor.ai Basic/Standard for the current MintTap problem. Default order:

`native free analytics → zero-cash bridge/export → first-party BigQuery when raw evidence is needed → paid connector only after repeated operational bottleneck`

### 040 — Codex ↔ Firebase bridge
Current ChatGPT connector discovery does not expose native Firebase/Firestore/BigQuery access directly to this conversation. Owner confirms Codex can access Firebase.

Preferred architecture:

`Firebase / Firestore / GA4 / BigQuery → Codex read-only access → local privacy filtering/aggregation → marketing-manager GitHub snapshot → Marketing Manager chat`

GitHub is a non-sensitive evidence handoff layer, never a raw user-data warehouse.

### 041 — executable MintTap measurement extraction contract
`research/041_minttap_measurement_extraction_contract.md`

The bridge is now executable rather than conceptual.

Current official GA4 Data API supports the dimensions/metrics needed for the first pass, including runtime event inventory, app version/platform, engagement and aggregate advertising revenue. BigQuery is optional validation when already linked, not a prerequisite.

MintTap 1.0.29 code verifies that `users/{uid}.lastActiveAt` is updated with a Firestore server timestamp for coarse authenticated activity. It remains account-recency evidence, not sessions or GA DAU/WAU/MAU.

New operational artifacts:

- `playbook/MINTTAP_CODEX_MEASUREMENT_EXTRACTION_V1.md`
- `live_data/minttap/measurement_snapshot_v1.schema.json`
- `live_data/minttap/measurement_snapshot_v1.template.json`
- `live_data/minttap/README.md`

The next gate is an actual Codex extraction that creates `live_data/minttap/measurement_snapshot_v1.json`.

## Current MintTap measurement state

- Release version: **1.0.29 RELEASED**.
- Firebase Analytics initialization / custom `app_start`: code-verified.
- Mobile Ads initialization: code-verified.
- `first_portfolio_value_ready_v1`: semantic/code boundary verified; runtime implementation **not yet verified**.
- Repeatable useful-return event: candidate specified; runtime implementation not verified.
- Home detail-return ad recreation: code-verified release-version mechanism.
- App-side Home banner impression/paid callback: not observed in audited file.
- AdMob↔Firebase automatic `ad_impression`: runtime/console linkage **UNKNOWN**.
- `lastActiveAt`: release-version coarse account-recency signal.
- Actual activation, useful-return cadence, ad impression frequency, paid value and retention/harm: **NOT YET BASELINED**.
- Direct Firebase access from this chat: **NOT CURRENTLY AVAILABLE THROUGH A NATIVE CONNECTOR**.
- Codex Firebase access: **OWNER-CONFIRMED AVAILABLE**.
- Codex extraction specification/schema: **READY FOR FIRST LIVE RUN**.

## Measurement access and privacy rule

Preferred access ordering:

`direct first-party in-chat if available → Codex privacy-filtered bridge → manual native export → zero-cost third-party bridge if justified → paid connector only after proven need`

Never commit Firebase credentials, UID/email, raw `user_pseudo_id`, per-user investment data, raw device identifiers or stable pseudonymous user rows to the marketing repository.

Default exported minimum cell size: **5**. Missing/unavailable data must never be silently converted to zero.

Every metric must declare its unit: GA user/device-oriented population, account, session, event/impression, etc. Do not silently join GA device/user metrics to Firestore account recency.

## Immediate operating sequence

1. **Run the first Codex extraction contract.** Use `playbook/MINTTAP_CODEX_MEASUREMENT_EXTRACTION_V1.md` against the actual MintTap Firebase/GA4 environment.
2. Create/update `live_data/minttap/measurement_snapshot_v1.json` only after validating it against the schema and privacy gates.
3. First snapshot must determine actual 1.0.29 event inventory; `first_open/session_start/user_engagement/app_start`; `ad_impression` presence; aggregate ad-revenue availability; app-version/platform mix; Firestore `lastActiveAt` account-recency.
4. If an equivalent semantic activation/useful-return event already exists at runtime under another name, inspect its semantics before proposing new app code.
5. If absent, preserve future engineering handoff for one-time `first_portfolio_value_ready_v1` and deduplicated `portfolio_value_viewed_v1`; no investment-content parameters.
6. Keep detail-return ad recreation unchanged until impression/revenue evidence can be compared with useful-use and harm guardrails.
7. Establish acquisition→activation, activation→useful-return and useful-use→ad-revenue baselines only after source semantics align.
8. Open channel/ad-frequency Decision Records only after live baseline evidence exists.
9. Do not purchase paid analytics infrastructure unless the 039 cost gate is passed.
10. Reuse the same privileged-source→aggregate-evidence architecture for LogMate when product telemetry becomes available.

## First snapshot success questions

1. Which events are actually observed for released 1.0.29?
2. Are `first_open`, `session_start`, `user_engagement`, `app_start` and `ad_impression` present?
3. Is GA `totalAdRevenue` queryable and non-missing?
4. What proportion of current activity comes from 1.0.29 by platform?
5. What account-recency distribution exists from Firestore `lastActiveAt`?
6. Which requested metrics are blocked by permissions, missing linkage, instrumentation or reporting limits?

Do not reconstruct historical semantic activation from weaker proxies.

## Major unresolved live questions

### MintTap

Actual runtime event inventory; existing activation/useful-return event semantics; AdMob↔Firebase linkage; automatic `ad_impression` coverage; actual activation rate/time-to-first-value; useful-return cadence; GA activity vs account-recency differences; Home inline-ad impressions/revenue per useful-use window; retention/harm; Store/search/source baseline; community permissions; content freshness; Search Console baseline; Store experiment resolution.

### LogMate

Production local-ledger/persistence; validation of FlightRecord first value; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics implementation; workflow/retention cadence; ad model; pilot observations; professional-community permissions; regulatory authority mapping; launch traffic ceiling.

### Company-wide

Native Firebase/GA4 access path for this chat; measured labor capacity; maintenance demand; privacy-compliant event/ingestion path; long-run ad revenue per retained user; empirical stop thresholds; populated claim/permission ledgers; social qualified-response baselines; reusable launch records; proof that reusable assets reduce later labor.

## Progress interpretation

Do not report progress by file count. The current bottleneck is **live first-party evidence**, not missing marketing theory. Further learning follows actual snapshots, authoritative platform deltas and concrete execution failures.