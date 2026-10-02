# Research 377 — Monetization Readiness Is a Supply-Chain Gate, Not an Ad-Placement Detail

Validated: 2026-10-02

## Why this matters
Research 374–376 established protected-workflow placement, stable interaction geometry, and impression-level revenue reconciliation. A separate failure mode remains: an otherwise good placement can still be commercially non-operational if the app is not authorized, review-ready, crawlable, or traffic-quality-safe.

For a small niche app, this is material because low volume makes every lost or restricted impression disproportionately visible, while aggressive attempts to “fix” low revenue by adding inventory can worsen traffic-quality and UX risk.

## Authoritative findings
Google AdMob currently requires new apps set up in AdMob to verify monetization authorization with app-ads.txt before full ad serving. Starting January 2025, new AdMob apps require this verification. After authorization verification, the app goes through app readiness review; full serving depends on both verification and approval.

The app-ads.txt crawler begins at the developer root domain. The root must return or redirect to the file; the file should return HTTP 200, remain crawlable under robots.txt, be correctly formatted, and be reachable over HTTP and HTTPS. A hard 404 can purge previously seen entries. AdMob notes that changes may take days to appear and, for apps with few ad requests, can take up to a month.

This means app-ads.txt is not merely a launch checklist checkbox. It is a persistent monetization dependency whose health can change after release.

## Readiness contract — IP0–IP9
IP0 product/store identity
→ IP1 supported-store linkage
→ IP2 developer-domain identity
→ IP3 app-ads.txt authorization
→ IP4 crawl/HTTP/HTTPS/robots/format health
→ IP5 app readiness approval
→ IP6 Policy Center / serving-status health
→ IP7 traffic-quality and placement integrity
→ IP8 request→load→impression→paid-event observability
→ IP9 estimated→finalized revenue reconciliation
→ READY / REPAIR-AUTHORIZATION / REPAIR-CRAWL / HOLD-REVIEW / HOLD-POLICY / INVESTIGATE-TRAFFIC / READY-MEASURED.

A placement does not enter yield optimization until IP0–IP7 pass.

## Operational rules
1. Never respond to weak revenue by increasing ad pressure before authorization, readiness, serving status, traffic quality, and telemetry are known.
2. Treat app-ads.txt as monitored infrastructure. Re-check after developer-domain, hosting, redirect, robots.txt, HTTPS, seller/mediation, or Store metadata changes.
3. Preserve no-fill and serving restriction as distinct states. Do not silently classify either as “low demand.”
4. Do not infer that an SDK request succeeded commercially merely because no implementation error was thrown.
5. Low-volume niche apps need explicit UNKNOWN/HOLD states; absence of enough ad requests can delay app-ads.txt state propagation and makes short-window yield diagnosis weak.
6. Revenue optimization starts only after workflow integrity (Research 374–375) and measurement integrity (Research 376) are intact.

## MintTap application
Before increasing MintTap ad density, audit:
- current Store linkage and developer-domain identity;
- exact app-ads.txt root URL behavior on HTTP and HTTPS;
- crawler accessibility and status;
- authorized seller entries;
- app readiness / Policy Center / serving status;
- actual request, load/error, impression and paid-event funnel;
- traffic-quality anomalies by acquisition source where observable;
- estimated vs finalized revenue reconciliation.

Portfolio inspection/editing, distribution/ROC reconstruction, Tax Adjustment, split/reinvestment continuity remain protected workflows. Readiness does not grant permission to monetize a protected workflow.

## LogMate application
Treat monetization readiness as a pre-launch dependency only if ads are actually planned. Do not let ad-readiness work delay or distort core pilot workflows. If ads are introduced, establish developer-domain/app-ads.txt/readiness and telemetry before scaling inventory; flight logging, import/migration, duplicate reconciliation, totals, export/backup and recovery remain protected.

## Reusable niche-app rule
The monetization sequence is:
truthful product → supported distribution → monetization authorization → readiness approval → policy/traffic health → non-intrusive eligible placement → observable delivery → reconciled revenue → cautious yield optimization.

Do not reverse this sequence.

## Evidence
- Google AdMob Help, “Verify your app with app-ads.txt,” current page checked 2026-10-02: https://support.google.com/admob/answer/14538460
- Google AdMob Help, “Ensure your app-ads.txt files can be crawled,” current page checked 2026-10-02: https://support.google.com/admob/answer/9679128

## Next validation target
Audit MintTap's actual production monetization readiness rather than adding more monetization theory: developer-domain/app-ads.txt state, Store linkage, readiness/Policy Center status, serving restrictions, request funnel, paid-event precision, and finalized-revenue reconciliation.