# Research 380 — Cross-Store Search-Intent Routing Is Asymmetric

Date: 2026-10-02
Status: VALIDATED
Scope: Apple App Store Custom Product Pages (CPP) vs Google Play Custom Store Listings (CSL), zero-cost specialist-intent routing

## Why this research exists

Research 378–379 established that Apple Custom Product Pages can route selected search intents to differentiated product pages. The next operational risk is assuming that Apple and Google implement the same mechanism and therefore copying one Store architecture to the other.

They do not. The reusable principle is shared; the platform contracts are not.

## Authoritative findings

### 1. Both Stores now support organic search-intent routing to tailored pages

Apple states that keywords can be assigned to a Custom Product Page. For searches on those selected keywords, the CPP can appear instead of the default product page. Apple recommends selecting keywords that match the CPP's intent and making each keyword combination unique to a single CPP.

Google Play states that search-keyword targeting lets a developer define Play Search keywords that lead users to a Custom Store Listing. The selection interface exposes keywords already known to bring traffic, permits searches for additional keywords, and exposes spelling corrections/translations as keyword variations.

This makes specialist search intent a first-class Store-routing input on both platforms.

### 2. The routing objects are materially different

Apple CPP:
- up to 70 additional product pages;
- customizable screenshots, promotional text, and app previews;
- keyword assignment for relevant search results;
- optional deep link to a specific in-app destination on iOS/iPadOS 18+;
- metadata and deep links require review;
- App Analytics can compare CPP performance with the default page and includes downstream retention/proceeds metrics.

Google Play CSL:
- up to 50 custom store listing pages;
- customizable app name, icon, descriptions, and graphic assets;
- targeting is broader than search: country/region, churned/lapsed users, buyer states, ads traffic, pre-registration, search keywords, and custom audiences;
- search-keyword targeting uses keyword bundles/variations surfaced by Play;
- contact details, privacy policy, and app category remain shared across listings.

Therefore a CPP is not an Apple-named CSL, and a CSL is not a Google-named CPP.

### 3. Apple keyword routing has a stronger destination-continuity primitive

Apple permits a CPP deep link so that, after install/open from that CPP, the user can be taken to the corresponding in-app destination on supported OS versions.

The Google CSL documentation reviewed here establishes Store-page audience routing but does not establish an equivalent CSL-specific post-install deep-link contract. Do not infer one.

Operationally, Apple can support:
search intent → CPP promise → CPP proof → in-app destination.

For Google Play, the validated contract in this research is:
search intent/audience → CSL promise/proof → acquisition,
with downstream product routing instrumented separately unless a separately validated Play mechanism is available.

### 4. Google's search-keyword input is evidence-bearing, not a free-form keyword calendar

Play explicitly exposes keywords known to bring the app traffic and keyword variation bundles, while also allowing searches for new keywords. This should be treated as Store-provided intent evidence.

Do not manufacture dozens of CSLs merely because Play allows 50. A keyword is not automatically a distinct specialist job.

### 5. Cross-store creative parity is not the objective

Apple allows CPP-specific screenshots, promotional text, and previews. Google CSL can also customize title/name, icon, descriptions, and graphics. Because the editable fields differ, forcing pixel/copy parity can reduce relevance.

The invariant should be:
same truthful specialist promise + same product capability + same evidence boundary.

The rendering and metadata expression should be platform-native.

## IS0–IS9 — Cross-Store Intent Routing Contract

IS0 — Observe specialist search intent separately by Store.

IS1 — Map the query/keyword cluster to a real specialist job, not merely a lexical variant.

IS2 — Test whether the default Store page already serves that job adequately.

IS3 — Verify the promise against the Claim Registry and current product behavior.

IS4 — Choose the platform-native routing surface:
- Apple: default vs CPP;
- Google Play: default vs CSL and the appropriate eligible audience-targeting type.

IS5 — Build materially relevant proof using the fields the platform actually permits; do not force cross-store asset parity.

IS6 — Preserve routing integrity:
- Apple keyword combinations should be unique across CPPs;
- Google keyword bundles/variations should be audited for overlap and intent dilution.

IS7 — Preserve destination continuity. Use an Apple CPP deep link where the product and OS support it. Do not claim equivalent Google post-install routing without separate evidence.

IS8 — Measure Store acquisition separately from first/repeated specialist value. Sparse or censored Store reporting remains UNKNOWN/HOLD, not failure.

IS9 — Decide independently per Store:
DEFAULT / ROUTE / MERGE / REASSIGN / REPAIR / HOLD-SPARSE / DO-NOT-CREATE.

## MintTap application

Do not create ticker-by-ticker Store pages solely because TSLY, CONY, MSTY, or NVDY are different query strings. First determine whether they represent a materially different job, proof set, or destination.

Potential job-level clusters remain:
- distribution / ROC tracking;
- portfolio recovery / tax-adjustment workflow;
- split / reinvestment continuity.

These are candidates, not approved Store pages. Each Store requires its own search evidence and routing decision.

For Apple, a validated job may justify a CPP plus matching deep link if a truthful destination exists.

For Google Play, use actual Play keyword evidence/bundles before creating a search-targeted CSL. MintTap's finance-category restrictions on other optional Play discovery surfaces must not be generalized to CSL without evidence; surface eligibility remains independently audited.

## LogMate application

Do not pre-build mirrored Apple/Google page sets before launch evidence exists.

Candidate pilot jobs include:
- import / migration;
- multi-leg logging;
- export / continuity.

After release, evaluate search evidence separately on each Store. A job can warrant an Apple CPP and not a Google CSL, or vice versa. Cross-platform symmetry is not a success criterion.

## Reusable niche-app rule

The reusable architecture is not “make the same custom pages on both Stores.”

It is:
specialist intent evidence → real job → truthful promise → platform-native routing object → matching proof → product destination/first value → repeated specialist value.

Store-specific implementation is deliberately asymmetric.

## Measurement cautions

- Do not compare CPP and CSL conversion as if exposure eligibility were identical.
- Do not treat keyword variants as independent demand without job-level evidence.
- Do not infer incremental lift from routed-page conversion alone.
- Do not create routing surfaces faster than sparse traffic can evaluate them.
- Do not let Store-page proliferation outrun Claim Registry maintenance.

## Sources

- Apple Developer, Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- Apple Developer, App Store Search: https://developer.apple.com/app-store/search/
- Apple Developer, Submit a custom product page: https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-a-custom-product-page
- Google Play Console Help, Create custom store listings to target specific user segments: https://support.google.com/googleplay/android-developer/answer/9867158

## Next operational target

Audit MintTap's actual Apple approved-keyword/CPP inventory and Google Play search-keyword/CSL inventory side-by-side, but make independent decisions per Store. Produce a job-level routing matrix with DEFAULT / ROUTE / MERGE / REASSIGN / HOLD-SPARSE / DO-NOT-CREATE and link every proposed promise to the Claim Registry and downstream specialist-value event.
