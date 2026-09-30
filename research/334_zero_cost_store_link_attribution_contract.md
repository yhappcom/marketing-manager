# Research 334 — Zero-Cost Store-Link Attribution Contract

Date: 2026-09-30
Status: VALIDATED

## Why this matters

For sparse niche apps, zero-cost community/blog/social distribution should not be judged by raw clicks or installs alone. The store platforms already expose first-party attribution surfaces that can distinguish channel/campaign intent without buying an MMP. The operating problem is to preserve campaign identity from link → store → acquisition/intent → downstream specialist value, while accepting privacy thresholds and sparse data.

## Authoritative findings

### Apple App Store Connect campaign links

Apple App Store Connect Analytics can generate campaign links for marketing materials. A campaign link maps activity to a campaign token and can report impressions, product-page views, downloads, usage, sales, and subscriptions. Results can be filtered by dimensions including territory, device, and page type.

Apple's current reporting has a privacy threshold: an individual campaign appears after at least five individual first-time downloaders, and individual metrics are shown only when the selected range meets a minimum threshold of five. Detailed exports may withhold or combine very small cohorts.

Apple counts a first-time download for campaign attribution when the user first downloads within 24 hours after using the campaign link/token. If multiple campaign links are used, the most recent receives credit for subsequent sales in the attribution logic described by Apple.

A provider token identifies the developer account and is reused; the campaign token distinguishes campaigns. App Store storefront codes in the URL do not constrain geography: users are redirected to their local storefront.

Operational implication: a missing campaign row in a sparse niche app is not evidence of zero impact. It can be censored by privacy thresholds.

Source: Apple Developer, App Store Connect Analytics — Campaign links, current 2026 documentation.

### Google Play first-party attribution

Google Play Store performance can be filtered by traffic source, country, language, UTM source and UTM campaign. Google’s downloadable store-performance traffic-source reports include UTM source and UTM campaign fields.

Google changed Store listing performance reporting in June/July 2026 to emphasize unique intent clicks (Install/Open/Pre-register) and CTR; completed acquisitions remain available elsewhere in Play Console, Statistics, and exports. Therefore a 2026 Play Store experiment must not silently compare a new click-based metric with an older acquisition-based metric.

For Android app-side attribution, Play Install Referrer securely exposes the install referrer URL plus click/install timestamps and install version. Google states referrer information is available for 90 days and does not change unless the app is reinstalled; it recommends retrieving it once after first launch rather than making unnecessary repeated calls.

Sources: Google Play Console Help — Understand and grow your app's user base; Download and export monthly reports. Android Developers — Google Play Install Referrer.

## IJ0–IJ9 — First-party attribution contract

IJ0 — Define the decision before creating the link.
Every token must answer a decision such as “Does this native Reddit answer produce users who reach specialist value?” Tokens created only because tracking is possible are noise.

IJ1 — Preserve channel identity.
Use stable, human-readable campaign taxonomy across store platforms where possible. Separate source/community/content-purpose, but do not fragment every post into a cohort too small to interpret.

IJ2 — Prefer first-party store attribution before paid tooling.
For current zero-cost operations, App Store Connect campaign links and Play UTM/store reporting are the default acquisition layer. Do not add a paid MMP merely to obtain dashboards the platforms already provide.

IJ3 — Separate store intent from completed acquisition.
Especially on Google Play after the 2026 reporting change, keep visitors/clicks/CTR distinct from acquisitions. Never splice historical acquisition conversion and current click CTR into one trend without an explicit metric break.

IJ4 — Connect acquisition to specialist value.
A channel is not successful merely because it produces a store click/download. Join the campaign cohort, where privacy/implementation permits, to first specialist value and repeated specialist value. MintTap examples: successful portfolio setup/use of a core tracking workflow. LogMate examples: successful import/migration or completed trustworthy record workflow.

IJ5 — Respect platform attribution semantics.
Apple's 24-hour first-download and last-link rules are attribution rules, not causal proof. Google UTM/referrer data likewise identifies a recorded source; it does not prove the campaign caused the user's long-term value.

IJ6 — Treat censored data as UNKNOWN.
Apple's threshold of five and privacy suppression mean absent/small campaign data is not zero. Do not manufacture certainty from tiny cohorts. Aggregate compatible campaigns or extend the observation window only when doing so preserves the decision question.

IJ7 — Prevent taxonomy explosion.
For sparse audiences, prefer a small hierarchy such as app / platform / source / problem-cluster / asset-type / period. Do not create unique campaign names for every comment if that destroys statistical usefulness.

IJ8 — Reconcile link and product evidence.
Keep a ledger containing campaign token/UTM, destination/store page, claim/reference used, publication location, date, store intent, acquisition, first specialist value, repeated value, and status. If a campaign claim becomes stale, invalidate the associated reusable link/asset.

IJ9 — Decision states.
KEEP / SCALE-ORGANICALLY / REPAIR-DESINATION / REPAIR-MESSAGE / AGGREGATE / RETIRE / UNKNOWN. “SCALE” means more zero-cost use of a proven problem/message/channel fit, not repetitive posting that violates community norms.

## Application

### MintTap

Do not use a single generic App Store/Play link across Reddit, blog, and social when first-party campaign attribution is available. Campaign taxonomy should follow recurring YieldMax problem clusters rather than ticker spam: ROC provenance/state, broker/substitute-payment mismatch, split/reinvestment reconstruction, and total-return methodology.

A high-click campaign that does not reach meaningful portfolio/tracking value is a message/store/product continuity defect, not a marketing win.

### LogMate

Pre-launch and launch links should distinguish professional problem intent such as migration/import, duplicate reconciliation, Previous Total continuity, export integrity, and offline/PWA workflow. Avoid over-segmenting by airline/aircraft/geography until evidence volume supports it.

Professional workflow completion outranks install volume.

## Reusable rule

The minimum viable zero-cost attribution stack is:

community/blog/social asset
→ stable campaign identity
→ first-party store intent/acquisition
→ first specialist value
→ repeated specialist value
→ trust/retention/ad-revenue counter-metrics.

Do not buy attribution complexity before this chain is operational.

## Next learning target

Audit the current MintTap production distribution links and analytics implementation against IJ0–IJ9. Determine which channels currently collapse into untracked generic store URLs, whether Play UTM and Apple campaign links are in use, and whether acquisition can be connected to first/repeated specialist value without collecting unnecessary personal data.
