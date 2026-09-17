# 076 — Apple Search-Intent Routing Without Randomization

Last validated: 2026-09-17

## Why this matters

Research 065–067 established that sparse-niche apps should not fragment scarce traffic or run randomized Store experiments without an evidence budget. Apple’s current App Store capabilities now create a distinct zero-cost mechanism that must not be confused with experimentation: **search-intent routing**.

Apple now allows an approved Custom Product Page (CPP) to be assigned keywords from the app’s latest approved version. For those selected keywords, the CPP can appear in App Store search results **instead of the default product page**. Apple supports up to 70 CPPs, but page capacity is not a reason to create pages. The sparse-niche constraint still applies.

This creates a new acquisition architecture:

`search intent → keyword family → intent-matched CPP → optional deep link → in-app first value`

The mechanism is deterministic routing by search intent, not random allocation. It therefore can improve message relevance without consuming scarce traffic as an A/B-test sample.

## First-party evidence

Apple’s current App Store Connect Help states:
- up to 70 custom product pages can be created per app;
- CPPs may have different screenshots, previews, promotional text, and keywords;
- a CPP is normally visible through its unique link, but adding keywords can make it visible in App Store search results;
- keywords assigned to a CPP come from the latest approved app version;
- when a customer searches those keywords, the CPP can be shown rather than the default product page;
- Apple recommends a unique keyword set for each page to maximize relevance;
- CPPs require approval before visibility;
- App Analytics exposes impressions, downloads, conversion rate and other page-level metrics, with CPP analytics beginning after at least five first-time downloads.

Apple’s App Store search guidance further states that search ranking considers textual relevance, including title, subtitle, keywords and primary category, as well as user behavior such as downloads, ratings and reviews. Apple also explicitly recommends matching CPP keywords to the intent of the page and avoiding keyword overlap across pages.

Apple App Tags are a separate discovery surface. Tags are generated from App Store metadata plus AI/human curation, can appear in search/product-page discovery, and are currently supported/displayed only in the United States. They should therefore be treated as a US-only metadata-derived discovery signal, not as a global controllable keyword system.

Apple also announced iOS 27/iPadOS 27 product-page headers, search-result creative assets, Asset Library and product-page preview tooling. As of this validation, Apple’s current What’s New page still labels several of these capabilities as **Coming this fall**. Do not treat announced rich-media capabilities as production-available until App Store Connect availability is verified for the app/account.

## Core distinction

### Randomized experiment

`eligible traffic → random treatment allocation → statistical comparison → adopt/reject`

Consumes traffic as evidence. Governed by 066–067.

### Intent routing

`expressed search intent → mapped keyword family → matching approved page`

Uses traffic to serve a more relevant promise. It does not establish causal lift by itself.

**Canonical rule: Routing Can Precede Randomization; Routing Does Not Prove Lift.**

A CPP receiving better conversion than the default page is not automatically evidence that the CPP caused the difference because the audiences/search intents differ. Treat page metrics as cohort performance unless a valid experiment provides causal evidence.

## Sparse-niche operating model

Do not create dozens of CPPs because Apple permits 70. Start with the minimum architecture that corresponds to materially different specialist jobs.

Candidate hierarchy:

- S0 — no verified search-intent family: default page only.
- S1 — keyword evidence exists, but product promise is not yet evidence-qualified: collect/search-map only.
- S2 — one materially distinct, product-supported intent family: candidate CPP.
- S3 — approved CPP with unique keyword family and message/creative aligned to that intent.
- S4 — S3 plus first-value/deep-link continuity verified in product.
- S5 — S4 plus sufficient page/source cohort evidence showing qualified activation/useful return, not merely Store conversion.

Scale CPP count only when a new intent family reaches at least S2. Similar keywords that imply the same specialist job belong in the same page family rather than creating another page.

## MintTap application

Potential intent families must be derived from real search/source evidence and implemented product capability, not brainstormed keyword volume. Examples of *hypothesis classes only* include portfolio tracking, distribution/income tracking, ROC/tax-adjustment understanding, or a specific YieldMax-oriented workflow. These are not approved public claims until the corresponding capability/first-value evidence passes the existing claim ladder.

MintTap should not create CPPs merely for individual ticker names unless evidence shows that ticker-specific search intent is both material and meaningfully served by a different first-value path. A ticker label alone is not a distinct job.

If a future CPP promise maps to a specific in-app destination, use the optional CPP deep link only after the destination is durable and the path reaches first value without creating a B1–B3 monetization interruption.

Current MintTap status: **SEARCH-INTENT ROUTING NOT YET READY FOR EXECUTION** because exact live Store assets, Store/source baselines, search-intent evidence, and semantic first-value evidence remain unresolved. However, CPP keyword routing is now the preferred zero-cost Store segmentation mechanism to evaluate *before* sparse randomized testing once those prerequisites exist.

## LogMate application

Do not build pages for every aviation feature/system/import source. The first eligible CPP should correspond to a production-supported pilot job that has reached target-user first value under 068.

Possible future classes may include manual logbook recording or an import-specific workflow only after each is functionally implemented, persistent, verified and useful to the target pilot. Roadmap items such as Sync, backup or unsupported import systems remain ineligible.

Current LogMate status: **NOT ELIGIBLE**. Production first-value capability is still the gate.

## App Tags operating rule

For US App Store presence:
1. inspect Apple-selected tags;
2. deselect tags that materially misrepresent the app or recruit the wrong intent;
3. never alter product metadata merely to manufacture a desirable tag if the resulting metadata weakens claim accuracy;
4. record tag changes with Store/search cohort observations;
5. do not extrapolate US tag behavior to Korea or other storefronts while Apple documents US-only support.

**Canonical rule: Metadata Accuracy Before Tag Acquisition.**

## Measurement ledger

For each intent-routed CPP record:

`locale/storefront → intent family → keyword family → CPP ID/name → promise → creative → deep-link destination (if any) → approval/visibility date → impressions → product-page views → first-time downloads → conversion → first value → useful return → source/cohort quality → review/support incidents`

For sparse samples, retain counts and observation windows. Do not turn five first-time downloads—the threshold at which Apple begins displaying CPP analytics—into a decision threshold.

## Decision rules

1. **Minimum Viable Intent Architecture Before Maximum Page Count.** The 70-page limit is capacity, not strategy.
2. **Routing Can Precede Randomization.** Deterministic relevance routing does not require an A/B evidence budget.
3. **Routing Does Not Prove Lift.** Cross-page conversion differences are confounded by different search intent.
4. **One Intent Family, One Primary Page.** Avoid overlapping keyword assignments/pages that make routing semantics ambiguous.
5. **Latest-Approved Keyword Constraint.** CPP search routing can only use keywords available from the latest approved app version; Store metadata planning and CPP planning therefore form one system.
6. **Promise Must Already Be Earned.** CPPs cannot promote roadmap/shell capability.
7. **Deep Link Must Preserve Continuity.** Discovery promise, Store page, destination and first value must describe the same job.
8. **Do Not Confuse Analytics Visibility With Evidence Sufficiency.** Five first-time downloads only unlock page analytics display.
9. **US Tags Are a Separate Surface.** Manage relevance where available; do not treat tags as globally deployed.
10. **Announced Rich Media Is Not Live Inventory Until Verified.** iOS 27 header/search creative should enter the playbook only when App Store Connect exposes the production capability.

## Effect on prior research

This refines 065 rather than replacing it. 065’s minimum viable message architecture remains correct, but Apple now provides a stronger organic search-routing implementation path than a simple URL-only CPP model. 066–067 remain unchanged because CPP keyword routing is not randomized experimentation.

The preferred sequence for sparse-niche iOS apps is now:

`verified specialist intent → earned promise → default metadata/keyword architecture → minimum CPP intent routing → source/page cohort observation → first-value/useful-return validation → randomized PPO only if a material uncertainty remains and the evidence budget is sufficient`

## Next evidence target

When MintTap Store access/assets become available, capture the latest approved localized keyword set, current CPP inventory, US App Tags, search-source baseline, and any existing page-level analytics. Build the first intent map from observed demand rather than generating speculative keyword lists.

## Authoritative references

- Apple Developer — Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- Apple Developer — Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- Apple Developer — App Store Search: https://developer.apple.com/app-store/search/
- Apple Developer — Manage app tags: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-tags
- Apple Developer — App Store Connect API, Custom Product Page Localizations/search keywords: https://developer.apple.com/documentation/appstoreconnectapi/app-custom-product-page-localizations
- Apple Developer — What’s New / discovery and marketing enhancements: https://developer.apple.com/app-store/whats-new/
- Apple Developer — App Store Asset Best Practices and Resources: https://developer.apple.com/app-store/asset-best-practices/
