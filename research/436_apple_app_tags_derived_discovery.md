# Research 436 — App Tags Turn Metadata Into a Derived Discovery Surface

Date: 2026-10-05
Status: VALIDATED

## Why this matters

Apple App Tags create a new discovery layer between ordinary App Store metadata and user navigation. Tags are glanceable terms describing an app's essential qualities. They can appear in App Store search results and on the product page, and users can tap a tag to browse related apps.

As of this validation, Apple states that App Tags are supported and displayed only in the United States.

## Authoritative findings

1. Apple derives tags from App Store Connect metadata, artificial intelligence, and human curation.
2. Tags are applied by default from the metadata supplied in App Store Connect for en-US.
3. Eligible App Store Connect roles can review and deselect tags. Deselecting all tags may reduce discoverability.
4. Tags can appear in search results, the Search landing page, and the product page and can become clickable navigation into related apps.
5. Apple search continues to use text relevance — including title, subtitle, keywords and primary category — plus user behavior such as downloads, ratings and reviews.
6. Search-result presentation can include ratings, screenshots/previews and App Tags. Apple also states that tags are generated using LLMs based on metadata supplied in App Store Connect.
7. This does not make metadata stuffing rational. Apple still requires accurate, relevant keywords and prohibits irrelevant, trademark-abusive, competitor-name and other manipulative metadata.

## Strategic interpretation

App metadata now has two jobs:

- direct retrieval: title/subtitle/keywords/category help establish search relevance;
- derived classification: truthful metadata can also influence the tags Apple infers and exposes.

Therefore an ASO audit should no longer stop at "which keywords rank?" It should also ask "what specialist identity is Apple inferring from the metadata, and is that identity accurate enough to route the right user?"

A wrong-but-plausible tag is a classification defect. A relevant tag is not automatically valuable: it must map to a real specialist job, truthful Store promise, and product experience.

## JS0–JS9 Derived-Discovery Contract

JS0 — Identify the specialist jobs the app actually performs.
JS1 — Atomize the verified claims/features supporting those jobs.
JS2 — Audit en-US name, subtitle, keywords, category, description and visual context for semantic consistency.
JS3 — Observe the App Tags Apple currently assigns; never invent an observed tag.
JS4 — Classify each observed tag as MATCH / TOO-BROAD / MISLEADING / LOW-VALUE / UNKNOWN.
JS5 — Deselect materially misleading tags where App Store Connect permits it.
JS6 — Repair underlying metadata only when the metadata itself is inaccurate or underspecified; do not stuff metadata merely to chase a desired tag.
JS7 — Map retained tags to matching default/Custom Product Page intent and first specialist value.
JS8 — Measure search impressions/conversion and downstream first/repeated specialist value, recognizing that tag-specific incrementality may not be separately observable.
JS9 — KEEP / REPAIR-METADATA / DESELECT-TAG / HOLD-SPARSE / REVALIDATE after material metadata/product changes.

## MintTap application

Do not assume finance/investing labels are beneficial merely because MintTap serves YieldMax investors. First inspect the actual US App Tags. Retain only tags that accurately describe shipped functionality and do not blur portfolio tracking with capabilities MintTap does not provide.

The highest-value audit is:
observed tag → supporting Store metadata → supporting shipped workflow → matching user intent → first/repeated value.

This also provides a diagnostic for finance classification language: App Tags do not replace Google Play Financial features classification, Apple category choice, or the Claim Registry. Each surface has its own contract.

## LogMate application

Before launch, optimize metadata for truthful pilot/logbook jobs rather than trying to manufacture broad aviation tags. After US distribution begins, inspect the tags Apple actually assigns. If tags imply generic travel, flight booking, passenger tracking, or another non-pilot job, treat that as evidence that the Store semantics may be underspecified.

Useful tag evidence should reinforce real jobs such as pilot logbook management/import/export only where Apple actually assigns such tags and the shipped product supports them.

## Reusable niche-app rule

For a niche app, semantic precision can be more valuable than maximum category breadth.

metadata → inferred platform classification → specialist-intent routing → Store promise → first value → repeated value

Do not optimize for a tag in isolation. Optimize for truthful semantic coherence across that chain.

## Operational checklist

Add these fields to Store audits:
- territory
- observed App Tags
- tag source status: OBSERVED / NOT-OBSERVED
- tag fit
- supporting metadata
- supporting Claim Registry item
- matching Store route
- shipped workflow
- first-value event
- repeated-value event
- action/status

Because current tag display is US-only, do not transfer observed US tag behavior to Korea or other storefronts without fresh platform evidence.

## Sources

- Apple Developer, “Manage app tags,” accessed 2026-10-05: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-tags
- Apple Developer, “App Store search,” accessed 2026-10-05: https://developer.apple.com/app-store/search/
- Apple Developer, “Creating Your Product Page,” accessed 2026-10-05: https://developer.apple.com/app-store/product-page/
- Apple Developer, “App Review Guidelines,” accessed 2026-10-05: https://developer.apple.com/app-store/review/guidelines/

## Next learning target

Do not continue generic App Tag theory. Inspect actual MintTap US App Tags and en-US metadata when production evidence is available. If unavailable, move to the next unresolved operational gap rather than hypothesizing tags.
