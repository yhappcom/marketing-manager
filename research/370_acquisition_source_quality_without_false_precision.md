# Research 370 — Acquisition Source Quality Without False Precision

Validated: 2026-10-02

## Decision

For sparse niche apps, do not optimize acquisition channels on installs or Store conversion alone. Preserve the chain:

source → Store exposure → first-time download/redownload → first specialist value → repeated specialist value → sustainable monetization.

Platform-attributed source data is observational unless the platform explicitly provides a randomized experiment. It can rank diagnostic priorities, but does not by itself prove incrementality.

## Current Apple evidence

App Store Connect Acquisition attributes sales, usage, and subscription data to the download source recorded at download/redownload. A manual redownload resets the recorded source, so subsequent usage and sales are attributed to the new source. Acquisition can be segmented by Search, Browse, app referrer, web referrer, campaign, territory, and device. Total Downloads can be split into first-time downloads and redownloads.

This makes source-to-downstream-quality analysis possible, but the attribution semantics must be retained: source is the recorded download/redownload source, not proof that the source caused all later value.

Apple app-retention data has an additional censoring boundary: it uses usage data from users who opted to share diagnostics/usage, appears only above privacy thresholds, and excludes installers who never open the app from both numerator and denominator. Sparse cohorts can therefore be blank or unstable. Blank retention is UNKNOWN, not zero retention.

## IG0–IG9 — Source-quality contract

IG0 specialist problem/intent
→ IG1 source/campaign identity
→ IG2 Store exposure/page
→ IG3 first-time download vs redownload
→ IG4 first specialist value
→ IG5 repeated specialist value
→ IG6 retention availability/opt-in/privacy threshold
→ IG7 monetization quality
→ IG8 attribution/incrementality qualification
→ IG9 SCALE / KEEP-LEARNING / REPAIR-ROUTING / REPAIR-PRODUCT / HOLD-SPARSE / STOP.

## Sparse-data rules

1. Never merge first-time downloads and redownloads when evaluating new-user acquisition quality.
2. Never interpret blank platform retention cells as zero.
3. Never call a source incremental merely because attributed downstream usage is high.
4. Prefer coarse, decision-relevant source cohorts over many tiny campaign slices.
5. A source with lower install conversion can be superior if it reliably reaches first/repeated specialist value.
6. A source with high Store conversion but weak first/repeated value is a routing/claim/product-quality investigation, not an automatic acquisition win.
7. Do not create traffic merely to make an analytics cell appear.

## MintTap

Compare Search, Browse, web/app referrer and permissioned community routes only when source volume is sufficient. Keep first-time download separate from redownload/reactivation. Community/referrer success should be judged by recurring specialist problems reaching real portfolio/distribution/ROC workflows, not raw referral count.

## LogMate

Pre-launch, instrument first-value events around real pilot jobs (for example successful import/migration, valid multi-leg logging, continuity/export outcomes) before attempting fine-grained channel optimization. Early pilot-community cohorts will likely be sparse; preserve UNKNOWN rather than inventing precision.

## Reusable rule

Channel dashboards answer “where was this download attributed?” Product instrumentation answers “did the specialist job succeed?” Neither alone answers “would this user have arrived without the channel?” Keep attribution, product value, and incrementality as separate evidence layers.

## Authoritative sources

- Apple Developer, App Store Connect Analytics — Acquisition: https://developer.apple.com/help/app-store-connect-analytics/acquisition/acquisition
- Apple Developer, App Store Connect Analytics — App retention: https://developer.apple.com/help/app-store-connect-analytics/engagement/app-retention
- Apple Developer, App Store Connect Analytics — Analytics dashboard: https://developer.apple.com/help/app-store-connect-analytics/overview/analytics-dashboard
