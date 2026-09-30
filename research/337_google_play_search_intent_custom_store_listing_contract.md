# Research 337 — Google Play Search-Intent Custom Store Listing Contract

Validated: 2026-09-30

## Why this adds new knowledge

Research 336 established intent-matched Store destinations, primarily around Apple Custom Product Pages. Google Play now provides a materially different zero-cost routing surface: a Custom Store Listing (CSL) can target selected Play Search keywords, not only countries, URLs, or ad traffic. This makes search-intent routing a first-party Play mechanism rather than merely an external-link tactic.

## Authoritative platform facts

Google Play currently permits up to 50 custom store listings. A CSL can customize app name, icon, short/full descriptions, and graphic assets, while contact details, privacy policy, and app category remain shared.

For Search keyword targeting, Play Console lets the developer select keywords known to bring traffic, search for new keywords, and inspect/select spelling corrections and translations included in a keyword bundle. A published default listing is required before creating a CSL.

CSLs do not receive automatic translations. If a targeted audience needs another language, that translation must be supplied explicitly.

Play also supports a unique-URL CSL using a `listing` parameter. Search-keyword routing and URL routing are therefore distinct acquisition mechanisms and should not be conflated.

Current Play reporting distinguishes Search, Explore, and Ads/referrals. Store listing acquisitions remain available in Statistics/Exports, while Store listing opens and pre-registration are separate measures. Search/Explore attribution is platform-defined and is not proof of causal incrementality.

## IM0–IM9 — Search-intent CSL contract

IM0 — Evidence gate  
Create a search-intent CSL only from observed Play-search evidence or a specialist problem with defensible search demand. Do not manufacture keyword pages because the platform permits them.

IM1 — Intent coherence  
Bundle spelling/translation variants only when they express the same specialist intent. Similar words with different user jobs require separate evaluation.

IM2 — Material destination difference  
A CSL must change the value narrative materially enough to help that intent: screenshots, description emphasis, or other truthful assets. If the default listing already answers the intent, KEEP-DEFAULT.

IM3 — Claim integrity  
Every keyword-specific promise remains subject to the Claim Registry. Search targeting never licenses unsupported functionality, exaggerated financial outcomes, or roadmap claims.

IM4 — Language integrity  
Because CSLs are not auto-translated, do not route a language audience into an untranslated default-language experience unless that is intentionally acceptable. Add human-reviewed localization when evidence justifies it.

IM5 — Routing separation  
Keep Search-keyword CSL, unique-URL CSL, country CSL, and Google Ads CSL as distinct routing mechanisms in the ledger. Their traffic is not interchangeable.

IM6 — Sparse-traffic economy  
Do not create a CSL per ticker, aircraft, airline, or minor keyword variant. Consolidate variants around recurring specialist jobs unless workflow, evidence, or qualification materially differs.

IM7 — Measurement contract  
Measure listing exposure/intent metrics and acquisitions where available, then connect cohorts only as far downstream as privacy-safe first and repeated specialist value. A traffic-source shift alone is not evidence of incremental growth.

IM8 — Maintenance/invalidation  
Keyword bundles, screenshots, copy, localization, product evidence, and destination claims require revalidation when product behavior or search evidence changes.

IM9 — Decision  
CREATE / KEEP-DEFAULT / MERGE / REPAIR-COPY / REPAIR-LOCALIZATION / RETIRE / UNKNOWN.

## MintTap application

Do not create TSLY, CONY, MSTY, and NVDY clones merely because each ticker has searches. Candidate CSLs should correspond to recurring investor jobs such as:
- distribution / ROC interpretation and provenance;
- split / reinvestment reconstruction;
- portfolio recovery / total-return understanding.

A ticker-specific CSL becomes justified only when its search intent, workflow, evidence, or necessary qualification is materially different. Financial claims remain evidence-bound; search-keyword targeting must not imply investment performance or tax certainty that the product cannot substantiate.

## LogMate application

At launch, keep the default listing stable until real Play-search evidence exists. Plausible future specialist-intent clusters include:
- pilot logbook import / migration;
- duplicate reconciliation / continuity;
- fast multi-leg flight logging;
- export / backup / record continuity.

Do not fragment by airline, aircraft type, authority, or country before observed demand and materially different product value justify it.

## Reusable operating rule

For sparse niche apps:

observed search intent → coherent keyword bundle → truthful materially different CSL → first-party Store measurement → first specialist value → repeated specialist value

If the chain breaks before “materially different CSL,” keep the default listing.

## Operational audit fields

app | CSL id/name | routing type | keyword bundle | variations/translations | evidence source/date | specialist job | changed assets | Claim Registry links | localization coverage | Store metrics | acquisition metric | first specialist value | repeated specialist value | invalidation trigger | decision

## Sources

- Google Play Console Help, “Create custom store listings to target specific user segments,” current page checked 2026-09-30: https://support.google.com/googleplay/android-developer/answer/9867158?hl=en-EN
- Google Play Console Help, “Understand and grow your app's user base,” current page checked 2026-09-30: https://support.google.com/googleplay/android-developer/answer/9859173

## Next learning target

Audit MintTap's actual Google Play CSL inventory and Play-search evidence before proposing any new listing. Record existing CSL routing type, keyword bundles, localization, changed assets, Store metrics, and Claim Registry dependencies. Unknown production state stays UNKNOWN.
