# Research 225 — Organic Search-Intent Store-Page Routing

Date: 2026-09-23
Status: validated against current Apple Developer and Google Play documentation

## Why this matters

Store-page segmentation is no longer only an outbound-campaign technique. Both major stores now support routing organic search intent to differentiated product/listing experiences. For narrow professional apps, this creates a zero-cost growth lever: improve message-to-intent fit without manufacturing additional acquisition traffic.

## Current platform facts

### Apple App Store

Apple currently permits up to 70 custom product pages (CPPs) per app. A CPP may vary screenshots, app previews and promotional text. Apple now also allows keywords from the latest approved app version to be assigned to a CPP; when a customer searches those selected keywords, that CPP can appear instead of the default product page. Apple explicitly recommends intent-matched keywords and a unique keyword combination per CPP.

CPPs can also carry app deep links. On iOS/iPadOS 18 or later, opening the installed app from that CPP can route to the corresponding in-app destination. CPP metadata and deep links require review. App Analytics reports page-level impressions, downloads/redownloads and conversion; Apple documents engagement/retention comparison capabilities, while some CPP metrics require sufficient volume (for example, at least five first-time downloads for listed page metrics in App Store Connect Help).

Important distinction: Apple promotional text does not affect default App Store search ranking. CPP keyword assignment is a routing/discoverability mechanism and must not be confused with stuffing promotional copy for ranking.

Sources:
- Apple, Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- Apple, Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- Apple, App Store search: https://developer.apple.com/app-store/search/
- Apple, Creating Your Product Page: https://developer.apple.com/app-store/product-page/

### Google Play

Google Play custom store listings (CSLs) can target users who discover an app through specified Play Search keywords. The developer selects known traffic-producing terms or searches for terms; Play exposes spelling corrections/translations as keyword-bundle variations that can be included or excluded. A CSL can customize name, icon, descriptions and graphic assets. Play currently permits up to 50 CSL pages.

Google's I/O 2026 Play update adds an operational shortcut: a keyword recommendation on Grow overview can be used to have Gemini draft a CSL tailored to that keyword. This reduces production cost, but generated copy remains a draft requiring human verification against product truth, policy, localization and specialist language.

Sources:
- Google Play Console Help, Custom store listings: https://support.google.com/googleplay/android-developer/answer/9867158
- Android Developers, I/O 2026: What's new in Google Play: https://developer.android.com/blog/posts/i-o-2026-what-s-new-in-google-play

## New operating model — EK0–EK5 Search-Intent Store Routing Integrity Gate

**EK0 — Evidence identity**
Identify the actual store, territory/localization, search term or keyword bundle, eligible traffic, current default page and current custom-page inventory. Do not infer demand from brainstormed keywords.

**EK1 — Intent identity**
Map each supported query cluster to a distinct user job/problem. Different words with the same underlying intent do not automatically justify separate pages.

**EK2 — Message-match integrity**
Only create a custom page when screenshots/copy can materially improve the match between the supported intent and real app utility. Do not create pages merely because the platform allows 50/70 variants.

**EK3 — Routing integrity**
Record the exact keyword/bundle → custom page → optional deep-link destination relationship. On Apple, preserve uniqueness of CPP keyword combinations. On Google Play, preserve the selected bundle variations rather than treating a displayed keyword as a single literal query.

**EK4 — Sparse-evidence integrity**
Keep unavailable, thresholded or low-volume results unknown. A niche keyword page with insufficient observations is not a failed page. Do not proliferate variants until existing routes have enough evidence to justify a split.

**EK5 — Qualified-value decision**
Judge a route by qualified acquisition and subsequent specialist value, not Store conversion alone. Prefer `relevant search demand → intent-matched page → install/open → promised specialist task → repeated value` over maximizing raw CVR.

## MintTap application

Potential intent families must be evidence-led, not assumed. Candidate *conceptual* jobs include YieldMax portfolio tracking, distribution history, ROC/tax interpretation and ticker-specific monitoring, but no keyword or CPP/CSL should be created until Store search evidence confirms the corresponding demand and the current product actually satisfies the promise.

A validated intent may warrant an intent-specific screenshot sequence and copy. On Apple, a CPP keyword route can potentially replace the default page for that search intent; on Google Play, a search-keyword CSL can do the same class of message matching. This makes Store search itself a zero-cost segmentation surface.

Do not use YieldMax ticker/fund names indiscriminately as metadata. Existing trademark, relevance and Store-policy rules remain controlling. Search volume alone does not authorize a claim or protected term.

## LogMate application

Do not pre-create many pages for PIC/SIC, airline logbook, roster import, recency or EFB-related concepts merely because they sound plausible for pilots. First establish actual pilot search intent and the shipped capability. A page is justified only when it represents a materially different pilot job and can truthfully demonstrate it.

Because LogMate is English-only by current product direction, language expansion should not be fabricated merely to exploit keyword bundles. Territory and language routing remain product decisions, not ASO tricks.

## Cross-platform registry

Maintain one versioned table:

`store → territory/localization → observed query/keyword bundle → evidence window → intent/job → default/custom page → page version → keyword/bundle assignment → creative promise → deep-link destination (if any) → approval/publish state → impressions/visitors → first-time downloads/installs → conversion → qualified first value → repeat value → decision`

Do not compare Apple CPP and Google CSL metrics as if their denominators and routing semantics are identical.

## Canonical corrections

- `custom page URL ≠ only custom-page discovery path`
- `promotional text keywords ≠ Apple ranking signal`
- `search keyword targeting ≠ proof of keyword demand`
- `keyword bundle ≠ one literal query`
- `higher custom-page CVR ≠ qualified growth`
- `50/70 available pages ≠ target page count`
- `AI-generated CSL copy ≠ validated marketing claim`
- `low-volume/thresholded result ≠ zero demand`

## Next evidence target

Before creating additional MintTap Store variants, export/inspect current Apple App Analytics and Google Play acquisition/search evidence, existing CPP/CSL inventory, territories/localizations and page-level outcomes. Build the registry above and identify only those intent clusters where message mismatch is both evidenced and correctable. Then test the smallest defensible number of routes.