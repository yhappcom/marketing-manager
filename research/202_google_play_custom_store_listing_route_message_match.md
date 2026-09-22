# Research 202 — Google Play Custom Store Listing Route–Message Match

Validated: 2026-09-23

## Why this extends Research 201
Research 201 established attribution semantics for Google Play UTM/referral data. This note addresses a separate zero-cost lever: changing the Store promise itself for a meaningful acquisition route using Custom Store Listings (CSLs), without confusing routing with attribution.

## Authoritative findings
Google Play currently allows up to 50 custom store listings. A CSL can customize app name, icon, descriptions, and graphic assets while contact details, privacy policy, and category remain shared. CSLs can target countries/regions, pre-registration, Play search keywords, user-state segments, custom audiences, ads traffic, or a unique URL. A URL-targeted CSL uses a developer-defined unique `listing` parameter and is reachable as `https://play.google.com/store/apps/details?id=[packageName]&listing=[parameter]`.

Custom listings are not automatically translated. The developer selects a default language and must add translations deliberately; otherwise targeted users receive the CSL default language.

Play Console acquisition analysis can distinguish default versus custom store listing, but attribution dimensions and CSL routing remain different concepts. Monthly Store Performance exports expose third-party UTM source/campaign, and sparse values may collapse to `Other`. Therefore a CSL parameter must not be treated as a replacement for UTM/source evidence, nor UTM attribution as proof that a particular tailored message caused acquisition.

## DN0–DN5 — CSL Route–Message Match Gate
0. **Route identity** — Define a durable audience route/job before creating a CSL. Do not create one per post.
1. **Routing integrity** — Record the exact CSL `listing` parameter, targeting mode, default fallback, countries, languages, and active dates. A route token identifies a destination; it does not prove causality.
2. **Promise integrity** — Tailor only truthful specialist value already available in the production app. Do not manufacture a broader capability claim merely to match community language.
3. **Localization integrity** — Validate copy and screenshots for the actual target language. CSLs do not inherit automatic translations.
4. **Measurement integrity** — Keep CSL identity separate from UTM source/campaign, traffic source, `Other`/suppressed rows, and downstream product events. Compare qualified value, not only Store conversion.
5. **Scale/retirement decision** — Retain a CSL only when it improves route-to-specialist-value continuity without fragmenting sparse traffic beyond interpretability. Revalidate or retire stale claims/assets.

## Canonical semantic rules
- `unique CSL URL ≠ attribution truth`
- `CSL visit ≠ UTM-attributed visit`
- `higher CSL conversion ≠ better retained specialist users`
- `more CSLs ≠ better segmentation`
- `up to 50 allowed ≠ 50 strategically useful`
- `targeted country ≠ localized language`
- `default language fallback ≠ acceptable localization`
- `search-keyword targeting ≠ permission to keyword-stuff metadata`
- `route-message match ≠ permission to change product truth`

## MintTap application
Start with coarse, durable specialist jobs rather than individual posts. A future CSL is justified only if production evidence shows materially different intent that deserves a different truthful Store explanation—for example, a route centered on YieldMax distribution/ROC tracking versus a broader portfolio-tracking route. The Reddit/blog/social post and CSL should preserve the same claim and specialist job, but the CSL must not imply brokerage execution, investment advice, tax filing, or other unavailable capability.

Do not create separate CSLs for every ticker, subreddit post, or social post. Sparse niche traffic should remain pooled until route volume and downstream-value evidence justify separation. Maintain UTM/source measurement independently under DM.

## LogMate application
Prepare the architecture but do not proliferate pre-launch pages. Once production capabilities are fixed, distinct pilot intents such as importing an existing logbook versus starting a new digital logbook may justify different Store explanations only if both workflows are genuinely supported and measurable. Pilot-community links must never imply navigation, dispatch, regulatory certification, or operational guidance beyond the released product.

## Reusable operating record
For each CSL record: `listing_parameter`, targeting mode, route/audience job, promise/claim set, production capability evidence, default language, translations, countries, assets/version, source/UTM mapping, activation dates, Store visitors/acquisitions/conversion, sparse/Other state, downstream activation, repeated specialist value, and retirement trigger.

## Decision rule
Create a CSL only when all three are true: (1) a durable route has meaningfully different specialist intent; (2) the production app can truthfully satisfy that intent; and (3) traffic is sufficient to evaluate the route without destroying sparse-cohort interpretability. Otherwise use the default listing and preserve measurement simplicity.

## Sources
- Google Play Console Help, “Create custom store listings to target specific user segments,” accessed 2026-09-23: https://support.google.com/googleplay/android-developer/answer/9867158?hl=en
- Google Play Console Help, “Understand and grow your app's user base,” accessed 2026-09-23: https://support.google.com/googleplay/android-developer/answer/9859173?hl=en
- Google Play Console Help, “Download and export monthly reports,” accessed 2026-09-23: https://support.google.com/googleplay/android-developer/answer/6135870?hl=en
