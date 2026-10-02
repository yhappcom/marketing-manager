# Research 376 — Impression Revenue Precision and Reconciliation

Validated: 2026-10-02

## Decision
Impression-level ad revenue is the correct event-level measurement primitive for ad-placement analysis, but it is not finalized cash revenue. Preserve currency and precision type, and reconcile event data against network reporting and finalized earnings.

## Authoritative findings
Google Mobile Ads SDK paid-event data includes value in micros, currency code, and precision type. Google defines UNKNOWN, ESTIMATED, PUBLISHER_PROVIDED, and PRECISE. ESTIMATED may derive from aggregated data; PUBLISHER_PROVIDED may reflect manual CPMs; PRECISE is the precise value paid for the ad.

Google recommends attaching the paid-event listener before display and forwarding the event promptly to the analytics backend to reduce dropped callbacks and discrepancies.

ResponseInfo can expose the loaded ad source/instance, response ID, mediation metadata, errors, and adapter latency. This permits source and latency diagnosis without inferring them from aggregate eCPM.

AdMob reports daily estimated earnings separately from finalized earnings in Payments. Invalid-traffic filtering and finalization can change estimated earnings. SDK paid-event totals, network estimates, and finalized payable revenue are therefore distinct evidence layers.

## IO0–IO9
protected workflow/surface → request/ad unit → load outcome and response/error → impression → paid-event micros/currency → precision type → winning source/instance and latency → specialist-value context → report reconciliation → finalized-revenue reconciliation → KEEP / REDUCE / MOVE / REMOVE / INVESTIGATE.

## Operating rules
- Never aggregate micros across currencies without an explicit FX layer.
- Never discard precision type.
- UNKNOWN or zero test events do not establish zero production value.
- Treat a missing paid callback as telemetry unknown until reconciled, not automatically zero.
- Optimize revenue per retained specialist user and safe workflow opportunity, not raw requests or impressions.
- Separate opportunity volume, load/fill, source mix, precision, and specialist retention when diagnosing revenue changes.
- Reconcile event totals to AdMob reporting and separately to finalized payable earnings; do not expect exact equality at event time.
- Revenue telemetry must not delay the product workflow.

## App application
MintTap should instrument eligible low-interaction inventory as request → load/error → impression → paid event → precision/source/latency, while keeping core portfolio workflows protected.

For LogMate, any future advertising remains subordinate to professional logging integrity. A placement is economically successful only if revenue survives workflow and retention guardrails.

## Reusable principle
Event-level monetization telemetry is a measurement system, not a cash ledger. Preserve uncertainty and reconcile upward: paid event → network estimate → finalized revenue.

## Sources
- Google Developers, Impression-level ad revenue (Android), accessed 2026-10-02.
- Google Developers, Retrieve information about the ad response (Android), accessed 2026-10-02.
- Google AdMob Help, Track earnings, accessed 2026-10-02.
- Google Ad Manager Help, Estimated vs finalized earnings, accessed 2026-10-02.
