# Research 240 — Google Play Custom Store Listing Zero-Cost Intent-Routing Integrity

Date: 2026-09-24
Status: Canonical

## Why this matters
Research 239 established Apple Custom Product Pages as potential zero-cost intent-routing surfaces. Google Play has a superficially similar capability, Custom Store Listings (CSLs), but its targeting model and constraints differ enough that Apple CPP rules must not be copied across platforms.

## Validated platform facts
Google Play currently allows up to 50 custom store listings per app. A CSL can customize app name, icon, descriptions and graphic assets, while contact details, privacy policy and category remain shared.

Current targetable audiences include country/region, pre-registration users, search keywords, churned users, lapsed users (no open in the last 28 days), lapsed+churned users, non-buyers, one-time buyers, repeat buyers, lapsed buyers (no purchase in the last 180 days), ads traffic and custom audiences. A CSL can also be reached through a unique listing URL parameter.

Search-keyword targeting is especially relevant to zero-cost niche acquisition: users who discover an app on Play using specified search terms can be served a matching CSL. This permits intent-matched Store presentation, but does not establish that adding a keyword improves ranking for that query.

A unique CSL URL uses a developer-selected listing parameter and can route external traffic to a tailored listing. This makes community/owned-web/social → intent-matched Play listing possible without paid media.

CSLs are not automatically translated. A default language is selected for the CSL, and translations must be explicitly added where appropriate. Therefore segmentation without localization can reduce message fit rather than improve it.

Country targeting has exclusivity constraints: a country can be targeted by only one country-targeted CSL at a time. Do not treat CSLs as freely composable targeting layers.

## Critical asymmetry versus Apple CPP
Do not model Apple CPP and Google CSL as one feature.

Apple CPP and Google CSL can share a business-level intent taxonomy, but platform-native registries must remain separate. Google supports lifecycle/behavior audiences such as lapsed/churned/buyer states and keyword-targeted CSLs; Apple CPP mechanics, limits, review/deep-link behavior and analytics semantics differ.

Google currently supports up to 50 CSLs; Apple's current CPP limit is 70. Neither limit is a segmentation target.

## Zero-cost operating rule
Use CSL only when all of the following are true:
1. A recurring specialist intent or lifecycle state is evidenced.
2. The tailored Store promise is materially different and truthful.
3. The product can deliver the promised value after install/open.
4. The segment is large enough to justify operational and measurement complexity.
5. Localization is handled where the targeted audience requires it.
6. The page changes a real continue/stop/product decision rather than merely increasing page count.

For external zero-cost distribution, prefer a small number of decision-level unique CSL URLs rather than one page per Reddit post, ticker, social post or content article.

## MintTap application
Do not create one CSL per YieldMax ticker. TSLY, CONY, MSTY, NVDY etc. are not automatically separate Store propositions. A CSL is justified only if evidence shows a materially distinct recurring job, for example portfolio tracking versus distribution/ROC analysis, and the app genuinely supports a distinct promise/destination.

Search-keyword CSLs may be useful for materially different YieldMax intents, but keyword assignment must never be represented internally as ranking optimization. It is presentation routing for qualifying search traffic.

Lifecycle CSLs for lapsed/churned users should be considered only when MintTap has a genuinely meaningful product improvement to communicate. Repackaging unchanged functionality as a re-engagement promise is prohibited.

## LogMate application
Keep CSL proliferation outside the launch-critical path. After launch, evidence may justify separate specialist jobs such as migration/import versus routine flight logging, but only if each requires materially different Store communication and the product reliably fulfills it.

Lapsed/churned targeting should not be used to compensate for unresolved reliability, import, sync, export or logging problems.

## EZ0–EZ5 — Google Play CSL Intent-Routing Integrity Gate
EZ0 — Intent/segment identity: define the recurring specialist job or lifecycle state and evidence it.

EZ1 — Material-difference integrity: require a meaningfully different truthful Store proposition; reject cosmetic segmentation.

EZ2 — Targeting integrity: preserve the exact Play targeting mechanism (keyword, country, URL, lifecycle, buyer, ads, custom audience) and its constraints; never infer ranking improvement from keyword targeting.

EZ3 — Localization/promise integrity: ensure title, descriptions and graphics fit the target language/audience and match actual product capability.

EZ4 — Measurement/sparsity integrity: do not interpret missing or low-volume CSL reporting as zero demand; avoid fragmentation that makes a niche cohort operationally or statistically useless.

EZ5 — Durable-value decision: retain a CSL only when it improves a decision-relevant chain from qualified Store visit through meaningful/repeated specialist value, not merely page-level conversion.

## Preserve these distinctions
- CSL count ≠ segmentation quality.
- Search-keyword targeting ≠ search-ranking guarantee.
- Unique listing URL ≠ causal proof of acquisition.
- Store conversion ≠ retained specialist value.
- Lifecycle targeting ≠ permission to exaggerate what changed.
- Default CSL language ≠ automatic localization.
- Apple CPP ≠ Google CSL.
- Platform page limit ≠ recommended page count.

## Reusable company framework
Maintain one business-level `intent/segment` registry and separate platform implementations:
`business intent → evidence → platform eligibility → platform-native targeting → truthful Store promise → localization → matching product value → acquisition/reactivation evidence → repeated specialist value`.

Only create a Store destination when available niche traffic and product differentiation can support a decision. For future specialist apps, default to one strong listing and add differentiated destinations only after evidence establishes the need.

## Sources
Google Play Console Help, “Create custom store listings to target specific user segments,” current as checked 2026-09-24: https://support.google.com/googleplay/android-developer/answer/9867158
Google Play Console Help, automatic protection / integrity custom listing behavior, current as checked 2026-09-24: https://support.google.com/googleplay/android-developer/answer/15621622
