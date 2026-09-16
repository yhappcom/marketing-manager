# 042 — Cross-surface intent routing for niche-app acquisition

Date: 2026-09-16
Status: POST-FREEZE AUTHORITATIVE PLATFORM / ACQUISITION OPERATING DELTA

## Purpose

Define a zero-cash acquisition architecture for specialist apps where Reddit/blog/social/search traffic should not automatically land on one generic Store page. The operating question is:

**How can a narrow audience keep message continuity from external intent -> Store persuasion -> app value without buying ads or fragmenting measurement beyond what sparse traffic can support?**

This research focuses on current first-party Apple and Google capabilities and converts them into a reusable operating framework for MintTap, LogMate and future niche apps.

## Authoritative platform findings

### Apple Custom Product Pages (CPP)

Apple currently allows up to **70 Custom Product Pages per app**. Each page can have different screenshots, app previews, promotional text and keywords, is localizable, and has a unique shareable URL.

CPPs can be surfaced in two ways relevant to zero-cash acquisition:

1. a user follows the CPP's unique URL from an external surface;
2. approved keywords can route matching App Store search traffic to that CPP rather than the default product page.

Apple also allows an optional app deep link on a CPP. For users on iOS/iPadOS 18+, tapping Open can route to specific in-app content. Apple recommends Universal Links where possible and requires the CPP/deep-link metadata to pass review before use.

CPP analytics can report product-page views, downloads and conversion rate, plus downstream metrics such as sales/subscription performance. CPP-specific metrics appear after at least five first-time downloads for that page.

Sources:
- https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/custom-product-pages
- https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-a-custom-product-page

### Apple campaign links

App Store Connect Analytics can generate privacy-friendly campaign links for marketing materials. Campaign links attach provider/campaign tokens to App Store traffic and can associate campaign activity with impressions, product-page views, downloads, usage, sales and subscriptions.

Important sparse-data constraint: campaign metrics are shown only when the selected metric reaches Apple's minimum privacy threshold of 5 in the selected date range. A campaign itself is not useful as a measurement unit if its traffic will remain below that threshold.

A campaign token therefore should represent a meaningful decision unit, not every individual post.

Source:
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links

### Google Play Custom Store Listings (CSL)

Google Play currently allows up to **50 Custom Store Listings per app**.

A CSL can tailor:

- app name;
- app icon;
- descriptions;
- graphic assets.

Current targeting options include country/region, pre-registration, search keywords, inactive/churned and buyer-related user segments, custom audiences, ads traffic, and **a unique custom listing URL**.

URL-routed CSLs use a developer-defined unique `listing` parameter, enabling an external blog/community/social link to land on a listing tailored to the same user intent.

Source:
- https://support.google.com/googleplay/android-developer/answer/9867158

### Google Play measurement changed materially in 2026

From July 2026 Google Play's Store listing performance reporting focuses on **unique user clicks** expressing intent to Install/Open/Pre-register rather than using acquisition outcomes as the primary Store-listing metric.

Current Store listing reports can be filtered/broken down by dimensions including:

- traffic source;
- store listing;
- country;
- language;
- search term;
- UTM source;
- UTM campaign;
- install state.

UTM source/campaign are available for ads/referrals and can therefore support external zero-cash traffic analysis. Google also supports Store listing experiments for default and custom Store Listings.

Sources:
- https://support.google.com/googleplay/android-developer/answer/9859173
- https://support.google.com/googleplay/android-developer/answer/12053285

## Core strategic conclusion

For specialist apps, acquisition should be modeled as an **intent route**, not merely a channel.

Bad model:

`Reddit -> default Store page`

`Blog -> default Store page`

`Social -> default Store page`

Better model:

`specific user problem/intent -> external asset carrying that promise -> intent-aligned Store page -> aligned first-use path -> measured downstream value`

The important unit is the **promise/intent**, because the same intent may appear on Reddit, a blog article, social search, App Store search or Google Play search.

## Reusable Intent Route object

Every material zero-cash acquisition route should have:

- `route_id`
- `audience/problem`
- `source surfaces`
- `external promise`
- `proof asset(s)`
- `Store destination`
- `Store message/creative variant`
- `routing mechanism`
- `Store-native measurement token/dimension`
- `expected first value`
- `semantic activation event when available`
- `expiry/review trigger`
- `Decision Record`

Canonical chain:

`problem intent -> source asset -> routed Store promise -> first useful product state -> return/use quality -> ad-bearing durable use`

## Sparse-niche constraint: do not create dozens of routes because the platforms allow it

Apple supports 70 CPPs and Google supports 50 CSLs, but those are capacity ceilings, not recommended counts.

For a narrow app, excessive route fragmentation creates three problems:

1. traffic per route becomes too small for Store privacy/reporting thresholds;
2. creative maintenance multiplies;
3. decision quality deteriorates because each route accumulates evidence too slowly.

Therefore route creation is evidence-gated.

Create a separate route only when all are true:

- the intent/problem is materially different from the current route;
- the Store promise/creative should genuinely differ;
- the route has enough expected recurring traffic or strategic importance to justify maintenance;
- a decision can be made from the resulting measurement;
- the route does not require unsupported product claims.

Do not create one CPP/CSL per Reddit post, blog post or social post.

## Route taxonomy for specialist apps

Use three layers:

### Layer 1 — evergreen problem routes

A small set of durable high-intent jobs/problems. These are the main candidates for CPP/CSL differentiation.

### Layer 2 — source tracking

Use Apple campaign tokens and Google UTM source/campaign to distinguish meaningful source packages without creating a new Store page for each source instance.

### Layer 3 — individual content assets

Track in the content/permission ledger. Individual posts/articles inherit an existing route unless they establish a genuinely different user problem.

This produces:

`many content assets -> few source campaigns -> very few durable intent routes`

which is appropriate for sparse niche traffic.

## Apple operating design

Use CPP when the user intent needs a meaningfully different product-page story.

Use a campaign link when the Store page can remain the same but the source package needs measurement.

Possible combinations:

- campaign link -> default product page;
- campaign link -> a specific CPP where supported by the generated/shareable link structure;
- direct CPP unique URL without a separate campaign token when page-level measurement is sufficient;
- App Store keyword -> CPP for high-intent Store search routing.

Do not confuse CPP with Product Page Optimization (PPO):

- CPP = routed/segmented product-page experience;
- PPO = randomized test on the default product page.

CPP conversion differences across sources are observational unless another valid causal design exists.

## Google Play operating design

Use CSL for durable intent differentiation. A URL-routed CSL is especially useful for blog/community/social referrals because the external page can preserve the same promise through the Store.

Use UTM source/campaign dimensions for source-package attribution rather than multiplying CSLs unnecessarily.

Use CSL keyword targeting when Play search terms demonstrate a recurring intent worth a different listing.

Use Store listing experiments only when the traffic level and decision importance justify an experiment. A sparse niche should not keep low-powered experiments running merely because the feature exists.

Important 2026 measurement interpretation:

Google Play Store-listing CTR/click metrics describe Store-level intent. They do **not** prove downstream activation or durable value. Join them conceptually to product activation only after compatible product telemetry exists.

## Message-continuity quality test

A route passes only if the same user problem is recognizable at four points:

1. **Source** — why the user clicked.
2. **Store** — why this app solves that problem.
3. **First use** — what the user is asked to do first.
4. **First value** — what useful result confirms the promise.

If one stage changes the job-to-be-done, the route has message debt.

Example failure:

`source: specialist workflow problem -> Store: generic all-features page -> onboarding: account/settings friction -> Home: unrelated generic summary`

A high-converting Store page can still create poor users if the product path breaks the promise after install.

## Measurement hierarchy

Do not reduce route performance to Store conversion alone.

Use this hierarchy as evidence becomes available:

1. source exposure/click;
2. Store page view/visitor;
3. Store Install/Open click or first-time download according to native platform definition;
4. first product value;
5. useful return;
6. ad impression/revenue per useful user;
7. trust/harm/retention guardrails.

Apple and Google Store metrics must stay native and separate; their definitions are not interchangeable.

## Zero-cash operating rule

The purpose of routed Store pages is not to create more marketing assets. It is to reuse a small number of proven promises across all no-cost surfaces.

Preferred sequence:

1. identify recurring target-audience questions/problems from community/search/content evidence;
2. cluster them into a few durable intents;
3. create one Store route only when the promise truly needs differentiation;
4. route relevant Reddit/blog/social/search traffic to that Store experience;
5. measure Store-native performance;
6. evaluate downstream product quality when semantic telemetry exists;
7. merge or retire weak/redundant routes.

## MintTap application hypothesis — evidence-gated, not yet deployed

MintTap should not immediately create many CPPs/CSLs. A first route inventory should be derived from actual recurring YieldMax-investor problems already supported by the product and existing content evidence. Potential route families may include areas such as distribution tracking, ROC/tax/recovery understanding, and reverse-split/cost-basis continuity, but each requires claim/product verification and sufficient traffic before becoming a separate Store route.

The default product page remains the broad fallback.

## LogMate application hypothesis — evidence-gated, not yet deployed

Likewise, LogMate should use durable professional workflow intents rather than lifestyle segments. Potential future route families could differentiate manual personal flight logging, import/migration, offline/local-first workflow, or professional record retrieval only after those capabilities are implemented and the audience/problem evidence is real.

Pre-launch claims must never outrun product readiness.

## New company framework — Route Consolidation Rule

A new route is justified only when:

`distinct intent × distinct Store story × measurable traffic × supported product value > maintenance + fragmentation cost`

Otherwise reuse an existing route and distinguish the source through campaign/UTM metadata.

This rule is intended to keep zero-cost marketing operationally cheap as the company adds more niche apps.

## Next research / execution implications

1. Build a small Intent Route Registry before creating CPP/CSL assets.
2. For MintTap, inventory current community/blog/search themes and cluster them into no more routes than evidence supports.
3. Verify current default App Store/Google Play listing messages against the highest-value route candidates.
4. Coordinate visual asset changes with Design Studio rather than designing screenshots inside Marketing Manager.
5. Coordinate landing-page/source content with Web Manager where owned web content is involved.
6. Do not open route-level optimization decisions until Store-native measurement and product-value semantics are both understood.

## Reusable lesson

In sparse professional markets, the marketing system should maximize **message continuity per maintained route**, not the number of campaigns or creative variants.

`many touchpoints -> few durable intents -> few routed Store experiences -> one coherent product value`.
