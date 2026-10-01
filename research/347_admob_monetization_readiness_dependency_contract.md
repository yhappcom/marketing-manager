# Research 347 — AdMob Monetization Readiness Dependency Contract

Validated: 2026-10-01

## Decision

For a niche app, ad monetization readiness is a dependency chain, not an instruction to increase ad pressure. Do not optimize placement count, request volume, mediation, or eCPM until ownership verification and serving readiness are known.

Google's current AdMob documentation establishes a hard sequencing constraint for new apps: app-ads.txt verification establishes authorization to monetize; after that, the app enters app-readiness review; an app cannot fully serve ads until both app-ads.txt verification and readiness approval are complete. Since January 2025, new apps set up in AdMob require app-ads.txt verification.

## Readiness chain

**Store listing → developer website → root app-ads.txt → crawler reachability → AdMob authorization verification → app-readiness review → eligible production serving → request/load/impression/paid-event measurement → UX-safe optimization**

Treat every earlier stage as a prerequisite for interpreting later-stage revenue metrics.

## JR0–JR9

1. **JR0 — Store identity:** confirm the production app is registered in Google Play or the Apple App Store and linked correctly in AdMob.
2. **JR1 — Developer-domain identity:** confirm the developer website is actually exposed in the Store listing field AdMob uses.
3. **JR2 — Root-file contract:** verify app-ads.txt at the crawler-derived hostname root, not merely at an arbitrary support/marketing path.
4. **JR3 — Crawlability:** HTTP/HTTPS behavior, 200 status, redirects, robots.txt and file syntax must permit Google-adstxt crawling.
5. **JR4 — Seller authorization:** confirm the required seller IDs are present and AdMob reports the file verified.
6. **JR5 — App readiness:** distinguish app-ads.txt verification from the separate app-readiness approval state.
7. **JR6 — Serving state:** record READY / GETTING-READY / REQUIRES-REVIEW / LIMITED / DISAPPROVED / UNKNOWN before diagnosing revenue.
8. **JR7 — Funnel observability:** only after readiness, measure request → load/match → impression/show → paid event/reconciled revenue, with source and latency/error context.
9. **JR8 — UX protection:** monetization changes must preserve protected workflows, consent/privacy eligibility, caps/cooldowns, and non-intrusive placement boundaries.
10. **JR9 — Decision:** VERIFY / REPAIR-DOMAIN / REPAIR-FILE / WAIT-CRAWL / WAIT-REVIEW / DIAGNOSE-SERVING / OPTIMIZE / HOLD / UNKNOWN.

## Current authoritative platform facts

Google AdMob states that, for AdMob to find and verify app-ads.txt, the app must be registered with Google Play or the Apple App Store and the Store listing must include the developer website. AdMob derives the hostname from that Store-listed developer website and checks app-ads.txt at the hostname root over HTTPS/HTTP.

For Google Play, Google says the developer website should appear under App support; Store changes may take up to 24 hours for AdMob to detect. For Apple, the developer website is supplied through the marketing URL field.

Crawler correctness is independent of whether the file looks correct in a browser. Google's troubleshooting guidance requires root reachability, HTTP 200, valid formatting, crawl permission, and safe redirect behavior. A hard 404 can purge previously seen entries; Google recommends making the file reachable through both HTTP and HTTPS.

Google also notes that app-ads.txt changes can take a few days to appear in AdMob and, for low-request sites/apps, potentially up to a month. Therefore a sparse niche app must distinguish **configuration failure** from **censored/slow verification** rather than repeatedly changing a correct configuration.

Most importantly, current AdMob guidance states that authorization verification with app-ads.txt occurs before app-readiness review and that apps cannot fully serve ads until app-ads.txt is verified and the app is approved after readiness review.

## MintTap operating rule

Do not respond to weak revenue by adding ad surfaces. First inventory:
- Store-linked developer domain;
- exact app-ads.txt discovery URL and HTTP/HTTPS status;
- authorized seller lines and AdMob verification state;
- app-readiness/serving status;
- consent/request eligibility;
- ad-unit/surface map;
- request/load/impression/paid-event funnel;
- error/source/latency and revenue reconciliation;
- caps/cooldowns and protected workflows.

If any JR0–JR6 state is UNKNOWN, revenue optimization is premature. A readiness or crawl defect can masquerade as poor fill/revenue.

MintTap's product principle remains: maximize sustainable revenue per trusted specialist user, not ads per session. Portfolio interpretation, ROC/distribution work, reconstruction and other high-attention financial workflows should not be degraded merely to create inventory.

## LogMate operating rule

Pre-launch ad planning remains subordinate to professional workflow integrity. If AdMob is used later, establish Store/domain/app-ads.txt/readiness architecture before production-serving expectations. Do not create ad inventory merely to accelerate approval or generate test traffic. Protected pilot workflows and first/repeated specialist value remain higher priority than ad density.

## Reusable niche-app rule

A new app's monetization launch checklist must separate:
- **ownership readiness** (Store/domain/app-ads.txt),
- **platform serving readiness** (review/approval),
- **privacy/request eligibility**,
- **technical funnel health**,
- **traffic quality**,
- **UX-safe yield optimization**.

Never use eCPM, fill/match rate, or impression count as a diagnosis until upstream eligibility is known.

## Evidence

Authoritative sources checked 2026-10-01:
- Google AdMob Help, “Verify your app with app-ads.txt”: https://support.google.com/admob/answer/14538460
- Google AdMob Help, “Set up an app-ads.txt file for your app”: https://support.google.com/admob/answer/9363762
- Google AdMob Help, “Ensure your app-ads.txt files can be crawled”: https://support.google.com/admob/answer/9679128
- Google AdMob Help, “Resolve issues with app-ads.txt”: https://support.google.com/admob/answer/9776740

## Next audit

Apply JR0–JR9 to MintTap production. Unknowns requiring account/production evidence: current AdMob app status, exact Store-linked developer website, verified app-ads.txt status, seller inventory, consent/request state, ad-unit map, request→paid-event funnel, mediation/source configuration, Policy Center/traffic-quality history, caps/cooldowns, and revenue reconciliation.
