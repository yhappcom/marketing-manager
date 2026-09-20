# 144 — Ad instrumentation contract: automatic `ad_impression` is not placement evidence

Validated: 2026-09-20

## Why this addition is necessary

Research 141 established revenue precision/reconciliation requirements, while 142–143 found live MintTap 1.0.29 banner placements and task-boundary risks. The remaining instrumentation question is narrower: what can Firebase/AdMob collect automatically, and what must MintTap instrument explicitly to make placement-level monetization decisions?

## Authoritative findings

### 1. Linked AdMob + Firebase Analytics can automatically measure `ad_impression`

Firebase's current official ad-revenue guidance states that when an AdMob app is linked to Firebase and Analytics, the Firebase SDK for Google Analytics automatically logs `ad_impression` whenever an AdMob impression occurs. This means absence of a hand-written `logEvent('ad_impression')` in Flutter source does **not** prove that impression analytics are absent.

Source: https://firebase.google.com/docs/analytics/measure-ad-revenue

### 2. Automatic collection does not establish MintTap's business placement identity

The automatic event answers that an ad impression occurred and can carry monetization dimensions. It does not, by itself, prove that the event preserves MintTap's decision-grade semantic identity such as `P1 home`, `P5 transaction-history/passive-review`, action boundary, route substate, remount reason, or natural eligible-state denominator.

Therefore the audit must not equate `Firebase ad_impression exists` with `placement experiment is measurable`.

### 3. SDK lifecycle callbacks provide independent operational evidence

Google's current banner documentation exposes load failure, load, impression, click, open and close lifecycle callbacks and recommends configuring callbacks before loading the banner. Flutter's BannerAdListener likewise exposes impression and click lifecycle events. These callbacks can support placement-local request/lifecycle diagnostics, while automatic Firebase `ad_impression` can remain the monetization analytics path.

Source: https://developers.google.com/admob/flutter/banner

### 4. Firebase recommends three validation surfaces

Firebase's current guidance explicitly recommends:

- DebugView during implementation to inspect `ad_impression` parameters;
- Realtime after deployment to confirm events are arriving;
- BigQuery export over one or more days to detect zero / `(not set)` values and unhandled cases.

This creates an evidence ladder rather than a source-code-only audit.

Source: https://firebase.google.com/docs/analytics/measure-ad-revenue

### 5. Reporting latency must not be mistaken for instrumentation failure

Firebase's AdMob quick-start states that analytics/user-metric data typically appears within an hour but can take up to 48 hours. Reconciliation therefore needs an explicit observation/cutoff policy before a discrepancy is labelled a break.

Source: https://firebase.google.com/docs/admob/android/quick-start

## BH0–BH5 Ad Instrumentation Observability Gate

**BH0 — Unknown**  
No evidence that the production/release build's AdMob/Firebase linkage and analytics path are functioning.

**BH1 — SDK/config present**  
Relevant SDK/configuration is present. This is implementation evidence only, not event-delivery evidence.

**BH2 — Automatic impression path validated**  
A production-equivalent test demonstrates `ad_impression` in DebugView/Realtime with expected monetization parameters. Automatic collection may satisfy the generic impression path, but not placement semantics.

**BH3 — Placement identity validated**  
The event chain can associate an impression with the canonical placement registry identity: release ref, platform, placement ID, route, relevant substate/action boundary, and lifecycle/remount context. Where automatic events cannot carry the required business identity, a separate correlated custom event/context mechanism is required; do not duplicate ad revenue by manually logging a second revenue-bearing `ad_impression` for the same AdMob impression.

**BH4 — Warehouse/reconciliation validated**  
BigQuery/export evidence shows expected non-null dimensions/value/currency, known reporting latency is respected, and BG reconciliation can be performed over matched windows.

**BH5 — Decision-grade**  
BH4 plus BF eligible-state denominator and core-value guardrails allow incremental revenue decisions by natural user state rather than raw impression volume.

## Canonical distinction

Three evidence layers must remain separate:

1. **Ad SDK lifecycle:** request/load/failure/impression/click/open/close and paid-event callbacks.
2. **Analytics monetization event:** automatically collected AdMob `ad_impression` where linkage is valid.
3. **Product-semantic context:** MintTap placement/substate/action-boundary/lifecycle/eligible-state identity.

One layer cannot be inferred from another.

## MintTap implications

For 1.0.29, the previously observed lack of explicit `onPaidEvent` in two audited widgets remains a BG limitation for placement-level impression-paid-value evidence. However, lack of a custom `ad_impression` call must no longer be interpreted as evidence that Firebase impression collection is absent. The next audit should instead verify actual Firebase linkage and event delivery.

For P1–P6, the minimum event contract should preserve:

`release_ref, platform, placement_id, route, substate/action_boundary, widget_instance_or_remount_reason, eligible_state_id, ad_format`

Revenue-specific fields remain governed by BG and should not be fabricated from lifecycle callbacks.

The Home policy conflict remains frozen: instrumentation completeness is not permission to optimize P1 while the later Home-ad-free product decision conflicts with implementation.

## Operational audit sequence

1. Verify production Firebase Analytics + AdMob linkage/config for the audited release.
2. Use test/prod-equivalent DebugView to inspect automatic `ad_impression` and parameters.
3. Inspect BannerAdListener coverage for load/failure/impression/click and determine whether callbacks carry canonical placement context.
4. Search all ad objects for paid-event registration and preserve precision/currency/value per BG.
5. Validate deployed events in Realtime.
6. Inspect BigQuery/export sample for null/not-set dimensions and duplicate revenue logging.
7. Reconcile matched windows only after the documented reporting-latency allowance.
8. Join to BF eligible-state and core-value events before monetization decisions.

## Anti-patterns now prohibited

- Declaring Firebase impression measurement absent solely because source lacks manual `logEvent('ad_impression')`.
- Declaring a placement measurable solely because automatic `ad_impression` exists.
- Manually emitting a second revenue-bearing `ad_impression` for the same AdMob impression without a documented deduplication design.
- Treating missing data inside the normal reporting-latency window as a pipeline break.
- Optimizing impressions/revenue before placement identity and BF eligible-state denominators are joinable.

## Next evidence target

Obtain live MintTap release source/config or analytics access sufficient to verify the BH ladder: Firebase/AdMob linkage, automatic `ad_impression`, placement context, paid-event coverage, BigQuery/export quality, and reconciliation. Continue remaining `AdaptiveInlineBannerSlot` render-site inventory when the release repository/source is accessible.