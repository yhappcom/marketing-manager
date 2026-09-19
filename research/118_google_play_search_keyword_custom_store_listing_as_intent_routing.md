# 118 — Google Play Search-Keyword Custom Store Listings as Intent Routing

Date: 2026-09-19
Status: Canonical

## Why this matters
Google Play Custom Store Listings (CSLs) now support targeting users who discover an app through selected Play Search keywords. This creates an Android counterpart to specialist-intent routing, but it must not be treated as a ranking hack or as permission to manufacture dozens of near-duplicate pages.

## Authoritative findings
Google Play Console Help documents that developers can create up to 50 custom store listing pages and target multiple audience types, including Search keywords. For search-keyword targeting, Play Console lets the developer select keywords known to bring traffic, search for additional keywords, inspect keyword variations, and select/deselect spelling corrections and translations included in a keyword bundle. A search-keyword CSL can customize app name, descriptions and graphic assets like other CSLs.

Google also documents an optional Gemini-assisted description generator based on the published default listing and selected search terms. Generated copy is suggestion material only: it does not relax Store policy, truthfulness, localization, or production-evidence requirements.

CSLs are not automatically translated. A listing without a translation may be served in its chosen default language. This makes existing Z0–Z5 served-locale/fallback controls mandatory for keyword-targeted CSLs.

Google permits up to 50 CSLs, but inventory capacity is not a growth objective. Search terms should be grouped by materially distinct specialist jobs and evidence needs, not by superficial ticker/model/role substitution.

Google's store-listing best-practice guidance still prohibits misleading identity/relationships and inappropriate promotional/ranking claims. Keyword routing therefore cannot justify unsupported copy.

## Canonical interpretation
**Google Play search-keyword CSL = intent-routing surface, not a proven ranking boost.**

The job is to preserve intent continuity:
`Play query family → owning keyword bundle → truthful CSL → matching specialist evidence → first value → useful return`.

Do not infer that creating a keyword-targeted CSL increases rank for that keyword unless Google provides separate evidence. Its validated function is serving tailored listing content to users discovering the app through specified search terms.

## AJ0–AJ5 — Google Play keyword-CSL evidence gate

### AJ0 — Manipulative / invalid
Irrelevant keyword targeting, misleading identity or affiliation, unsupported feature/outcome claims, deceptive keyword stuffing, or a CSL that materially misrepresents the shipping product.

### AJ1 — Inventory chasing
Pages are created mainly because Play allows up to 50 CSLs. Near-duplicate pages split by ticker, aircraft type, job title, or synonym without a materially different user job/evidence requirement.

### AJ2 — Plausible segmentation
A search family appears relevant, but demand, keyword bundle/variation behavior, locale coverage, shipping evidence, or measurement ownership is incomplete.

### AJ3 — Operationally valid routing
Requires all of:
- materially distinct specialist search/job family;
- selected keyword bundle and variation review;
- truthful production-valid app name/copy/graphics;
- Z3+ served-locale parity for intended audience;
- clear default-listing vs CSL ownership;
- first-value path consistent with the promise;
- performance measurement plan and retirement owner;
- generated copy, if used, independently reviewed rather than trusted because Gemini produced it.

### AJ4 — Observed qualified routing
Sufficient evidence shows the CSL is reaching its intended search cohort and producing acceptable downstream first value/useful return. Store conversion alone is insufficient.

### AJ5 — Reusable portfolio system
Company-wide query-family registry, keyword-bundle ownership, locale/evidence templates, lifecycle/retirement rules and cross-app learning exist without encouraging page proliferation.

## MintTap application
Do not create CONY, MSTY, TSLY, NVDY etc. pages merely by replacing ticker names. Candidate Android intent families should first prove materially different jobs, such as:
- YieldMax portfolio/distribution tracking;
- ROC/tax-adjustment accounting;
- reverse-split quantity/cost-basis continuity.

A ticker can appear inside evidence where genuinely relevant, but ticker substitution alone does not create a new AJ3 family.

Because MintTap serves a financially sensitive niche, no CSL should imply investment performance, guaranteed income, tax advice, brokerage affiliation, or capabilities absent from the shipping build.

## LogMate application
Do not spend scarce prelaunch evidence on keyword CSL proliferation. Potential future families may include pilot logbook/manual entry, import/migration, or offline/backup only after production-valid workflows and pilot first-value evidence establish that these are distinct acquisition intents.

## Cross-platform rule
Apple CPP keyword routing (AI0–AI5) and Google Play keyword CSL routing (AJ0–AJ5) share a query-family registry, but they are not assumed to have identical keyword availability, matching/variation behavior, locale behavior, analytics, asset rules, or ranking effects.

A single specialist intent can have separate Apple and Google surface owners while retaining one semantic job definition.

## Measurement caution
Sparse niche traffic creates small samples. Do not declare a CSL winner from a handful of visits or installs. Evaluate Store exposure/conversion only as an intermediate measure; preserve first-value and cadence-appropriate useful-return evidence. Lack of reportable data is `unknown`, not failure.

## Operational checklist
For each candidate:
1. Name the specialist job/query family.
2. Record available Play keyword bundle and included variations.
3. Verify that default listing or another CSL does not already satisfy the job.
4. Verify production claim evidence.
5. Define localized copy/assets and Z-class.
6. Define first-value destination/continuity.
7. Define Store and downstream measurement.
8. Assign stale/retirement owner.
9. Promote only at AJ3+.

## Sources
- Google Play Console Help, “Create custom store listings to target specific user segments” — https://support.google.com/googleplay/android-developer/answer/9867158
- Google Play Console Help, “Best practices for your store listing” — https://support.google.com/googleplay/android-developer/answer/13393723

## Next validation
Audit MintTap Play Console for existing CSLs, keyword-targeted CSLs, available search-keyword bundles/variations, translations, performance reporting and any overlap with the default listing. Do not create a page until a candidate reaches AJ3.