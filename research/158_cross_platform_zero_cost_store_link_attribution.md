# 158 — Cross-platform zero-cost Store-link attribution

Validated: 2026-09-21

## Finding
Both major stores expose native zero-media-cost attribution that can turn existing organic distribution into interpretable evidence. Apple App Store Connect campaign links attribute campaign-token traffic to impressions, product-page views, downloads, usage, sales and subscriptions. Apple only displays a campaign metric after a minimum threshold of 5 in the selected date range; this is a reporting threshold, not statistical sufficiency.

Google Play Conversion analysis supports traffic-source, UTM source/campaign, Store listing, country, language and acquisition-state breakdowns. Store-performance exports include traffic source, search term, UTM source/campaign, Store-listing visitors, acquisitions and conversion rate. Google warns that Play Store organic is the sum of organic search and browse, so the aggregate must not be added to its components. Store-listing reports also exclude some other Play surfaces such as Promotional Content.

Authoritative sources (accessed 2026-09-21):
- Apple App Store Connect Help, Campaign links
- Google Play Console Help, Conversion analysis
- Google Play Console Help, Download and export monthly reports

## Operating principle
Use native Store attribution before adding third-party attribution complexity for zero-cost organic distribution.

Canonical chain:
`permission-qualified organic surface → stable source/content identity → native Store-tagged link → Store visit → acquisition → downstream product evidence`

A tag is measurement infrastructure, not proof of incrementality.

## BV0–BV5 Native Organic-Link Attribution Gate

### BV0 — Source eligibility
The originating community/social/owned surface must already pass its governance rules. Attribution does not authorize promotion.

### BV1 — Stable identity
Every deliberate external Store CTA gets a stable source/content identity before publication. Registry fields: app, platform, source family, community/account/site, content ID, intent/theme, publication date, Store destination, native attribution ID, permission/disclosure evidence where required, observation window.

### BV2 — Platform-native instrumentation
Prefer Apple campaign links for App Store CTAs and Play-compatible UTM-tagged links for Google Play CTAs. Preserve raw native identifiers. Cross-platform normalized campaign names are an analysis layer, not replacements for native semantics. Where CPP/CSL routing is also used, preserve both source identity and destination identity and validate the final link.

### BV3 — Measurement boundaries
Apple's >=5 visibility threshold is not a sample-size rule; suppressed data means not observable at that granularity, not zero. Google Store-listing reporting is not total Play distribution. Never double-count Play organic total together with organic search and browse.

### BV4 — Causal discipline
Tagged-link performance is observational attribution. It identifies a measurable route preceding an outcome; it does not prove incremental installs. Preserve denominator, period, territory, destination page, app version and material product/Store changes. Do not rank sparse channels from CTR or conversion alone.

### BV5 — Qualified downstream value
A source is not promoted merely because it produces installs. Where observable, evaluate first/restored core value, repeated useful value and legitimate ad-bearing use without core-utility degradation. Store attribution and in-app analytics remain separate evidence systems unless an explicit identity/time-window contract supports comparison.

## MintTap
Permitted Reddit educational posts, blog articles and owned-web pages should not all use indistinguishable Store links when deliberate CTAs are appropriate. BV supplies source evidence; BN/BO supply Store destination routing. BI–BK community permission/disclosure and BE financial-claim provenance remain upstream. A few attributed installs do not justify a new CPP/CSL.

## LogMate
Apply the same contract to qualified pilot-community posts, import guides, owned documentation/blog content and social assets. Attribution is separate from evidence for aviation regulatory claims.

## Reusable launch rule
Create the attribution registry before launch content is published. Default rule: no deliberate external Store CTA without a source identity, except where community rules, platform limitations or user experience make tagging inappropriate; record the exception instead of fabricating attribution.

## Non-claims
Campaign tokens/UTM tags do not prove incrementality. Apple's five-event threshold does not establish significance. Google Store-listing conversion analysis does not cover every Play surface. High Store conversion does not prove product-market fit.

## Next validation
Inventory live MintTap outbound Store links across owned web, Reddit/blog/social and Store surfaces; classify tagged/untagged and CPP/CSL-routed links; build the first live attribution registry; only then compare Store-native evidence with first/repeated/useful-value instrumentation.
