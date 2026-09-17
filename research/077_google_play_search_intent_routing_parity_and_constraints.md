# 077 — Google Play Search-Intent Routing: Parity, Differences, and Sparse-Niche Rules

Last validated: 2026-09-17

## Why this matters

076 established that Apple Custom Product Pages can route organic App Store search intent to an intent-matched page without randomized testing. Google Play now has a materially similar capability through Custom Store Listings (CSLs) targeted by **Search keywords**. This changes the cross-platform Store architecture: intent routing is no longer an Apple-only tactic.

The important point is not feature parity for its own sake. For MintTap and LogMate, both stores can now support a zero-media-spend sequence in which observed specialist search demand is routed to a more relevant, already-earned promise before scarce traffic is spent on randomized experiments.

Canonical cross-platform sequence:

`observed specialist search demand → materially distinct job/intent → earned product promise → minimum intent-routed Store page → first value/useful return → randomized experiment only when evidence budget exists`

## First-party Google evidence

Google Play Console Help currently documents that:
- an app can have up to **50 custom store listings**;
- CSLs can target several audience types, including country/region, ads traffic, churned/lapsed users, buyer segments, custom audiences, and **Search keywords**;
- search-keyword targeting lets the developer select Play Search keywords that lead users to a particular CSL;
- the Console exposes keywords known to bring the app traffic and also permits searching for additional keywords;
- `View variations` exposes spelling corrections and translations grouped with a keyword, and variations can be selected/deselected;
- a CSL can customize app name, icon, descriptions, and graphic assets;
- CSLs are **not automatically translated**; translations must be deliberately supplied;
- a unique CSL URL remains available as a separate routing mechanism;
- Google distinguishes Store traffic sources including Google Play search, Google Play explore, and ads/referrals.

This is deterministic audience/search routing. It is not a randomized store-listing experiment and must not be interpreted as causal lift evidence.

## Apple vs Google Play: operational parity, not identical mechanics

### Shared principle

Both stores now permit organic search intent to influence which tailored product/store page a user sees. Therefore the company-wide principle from 076 generalizes:

**Routing Can Precede Randomization; Routing Does Not Prove Lift.**

### Important differences

Apple CPP search routing uses keywords from the latest approved app version and supports up to 70 CPPs. Google Play CSL search targeting exposes Play Search keyword selection in Console and supports up to 50 CSLs. Do not build a single abstraction that hides these platform constraints.

Google also exposes keyword **variation bundles** including spelling corrections/translations. This is useful for discovery coverage but creates a semantic-risk requirement: every included variation must still represent the same specialist job and promise. A translated or corrected query is not automatically semantically equivalent for a financial or aviation workflow.

Google CSLs are not automatically translated. This reinforces 063/064: routing a Korean-language or non-English searcher to a page is not enough; workload, terminology, screenshots, promise, and first-value semantics must remain valid in that locale.

## New canonical rule: Search Bundle Is a Semantic Contract

A keyword bundle is not merely an ASO traffic bucket.

Before assigning a Google Play search keyword/variation to a CSL, verify:
1. the query represents the same specialist job as the page;
2. the public promise is already supported by production evidence;
3. the creative does not imply a broader capability than the product provides;
4. language/translation variants preserve domain meaning;
5. the post-install first-value path fulfills that same intent;
6. downstream qualified activation/useful return can be observed without relying only on Store conversion.

If a variation broadens intent materially, deselect it or create no routing for it until a distinct page/job is earned.

## Sparse-niche operating model

Use the minimum number of CSLs required by materially different jobs. The 50-page limit is capacity, not strategy.

G0 — no observed search-intent family: default listing only.

G1 — query evidence exists but product promise is not evidence-qualified: observe/map only.

G2 — one materially distinct, product-supported search intent exists: candidate CSL.

G3 — CSL approved with coherent search keyword bundle, assets and localization.

G4 — G3 plus Store→in-app promise continuity and target-user first value verified.

G5 — G4 plus useful return/source-quality evidence; sustainable scaling candidate.

Do not split small synonymous keyword families across pages merely to increase page count. Do not infer that a higher CSL conversion rate caused the improvement: routed cohorts have different intent.

## MintTap application

MintTap should eventually inspect actual Play Search terms/traffic before creating CSLs. Potential job classes such as YieldMax portfolio tracking, distribution/income tracking, or ROC/tax workflows remain hypotheses until observed demand and the existing claim-evidence ladder support them.

Ticker names alone do not justify ticker-specific CSLs unless they reveal a materially different user job and first-value path. A page that merely swaps a ticker name while delivering the same workflow fragments sparse traffic without increasing semantic relevance.

Korean/English routing requires extra care. A keyword variation or translation that sounds natural in Store search may still imply a different tax, currency, return, or accounting meaning. Apply 064 before accepting the bundle.

Current MintTap status: **GOOGLE PLAY SEARCH-INTENT ROUTING NOT YET READY FOR EXECUTION**. Exact live Store listing, observed Play Search terms/traffic, existing CSL inventory, localized assets and downstream semantic first-value evidence remain required.

## LogMate application

Do not create CSLs for every airline system, aircraft, import source, platform, or planned capability. Under 068, the first eligible search-intent page must map to a production-supported pilot job that reaches verified first value.

A search term related to import, sync, backup, regulatory logbook compliance, or a named crew system is ineligible if the production path/claim is not yet evidence-qualified. Search demand cannot upgrade roadmap capability into marketing inventory.

Current LogMate status: **NOT ELIGIBLE** until a real specialist workflow reaches first value.

## Measurement

For each Google Play intent-routed CSL record:

`locale/country → intent family → keyword + selected variation bundle → CSL ID/name → promise → creative → publication date → Store traffic source → visitors → acquisitions → Store conversion → first value → useful return → source quality → review/support incidents`

Keep Google Play Search, Explore, and Ads/referrals conceptually separate. A shift in source attribution after routing is not itself incremental acquisition.

For sparse samples, preserve counts and observation windows. Do not promote a page because a tiny cohort has a higher percentage.

## Decision rules

1. **Routing Can Precede Randomization.** Search-intent routing serves relevance without requiring an A/B evidence budget.
2. **Routing Does Not Prove Lift.** Different search cohorts invalidate naive cross-page causal comparisons.
3. **Search Bundle Is a Semantic Contract.** Google keyword variations must remain one job, not merely one lexical bundle.
4. **Capacity Is Not Strategy.** Up to 50 CSLs does not justify page proliferation.
5. **Observed Demand Before Keyword Brainstorming.** Start with actual Play Search evidence whenever available.
6. **Promise Must Already Be Earned.** Search demand cannot justify marketing unfinished capability.
7. **Localization Requires Semantic Parity.** CSLs are not auto-translated; translation and workflow meaning must both be validated.
8. **Store Conversion Cannot Veto Activation.** A page that installs well but produces weak first value/useful return is not a successful route.
9. **Source Reclassification Is Not Growth.** Search/Explore attribution changes must not be counted as incremental demand without total/downstream evidence.
10. **Cross-Platform Framework, Platform-Specific Implementation.** Apple CPP and Google CSL intent routing share a decision model but retain separate keyword, page-count, localization and analytics constraints.

## Effect on prior research

This generalizes 076 from Apple-specific discovery into a cross-platform Store-intent architecture. It does not replace 065–067. Minimum viable message architecture remains the prerequisite; randomized Store experiments still require an evidence budget and precommitted stopping rules.

Preferred Store sequence is now platform-neutral:

`observed search/source evidence → specialist intent family → earned promise → minimum Apple CPP / Google CSL routing where supported → Store-to-first-value continuity → useful-return/source-quality observation → randomized testing only if a material uncertainty remains and traffic is sufficient`

## Next evidence target

When MintTap Play Console evidence becomes available, capture:
- default localized listing and current CSL inventory;
- Play Search terms/available search-keyword candidates and variation bundles;
- Search vs Explore vs Ads/referrals baseline;
- CSL performance where any already exist;
- locale/country mapping;
- downstream first-value/useful-return semantics.

Build the intent map from observed demand. Do not create speculative CSLs merely because Google exposes 50 slots.

## Authoritative references

- Google Play Console Help — Create custom store listings to target specific user segments: https://support.google.com/googleplay/android-developer/answer/9867158
- Google Play Console Help — Understand and grow your app's user base / Store listing traffic sources: https://support.google.com/googleplay/android-developer/answer/9859173
- Google Play Console Help — Best practices for your store listing: https://support.google.com/googleplay/android-developer/answer/13393723
