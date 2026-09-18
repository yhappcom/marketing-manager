# 112 — Age Rating as Distribution Eligibility and Claim Surface

Validated: 2026-09-19

## Canonical principle
**Age rating is not decorative Store metadata. It is a product-capability disclosure that can alter who can discover/download the app and what users see about its capabilities. Never lower or optimize a rating for conversion; make the questionnaire match the shipping product.**

## Newly validated Apple state
Apple's current age-rating system uses 4+, 9+, 13+, 16+, and 18+ globally, with region-specific outcomes where required. Ratings are calculated from the developer questionnaire and appear on the product page. Users can inspect declared controls/capabilities and other rating answers. An unrated app cannot be published on the App Store.

The questionnaire now covers capabilities relevant to our business, including advertising, UGC, messaging/chat, controls, and sensitive-content categories. A developer may override to a higher rating when product policy/EULA requires it; the override applies across regions but maps to regional rating values.

As of September 2026, Apple requires developers submitting new versions/updates to indicate whether the app contains social-media capabilities. If declared, Apple places the app in its Social Media Time Allowance category and applies a minimum 13+ rating unless the under-13 experience is disabled using the required age-range handling. A Social Media descriptor can appear on the product page.

Korea is not simply the global rating rendered in Korean. Apple has region-specific Korean ratings. For Games/Entertainment, Apple announced additional Korea-specific changes in 2026, including GRAC RCN override support and October 2026 descriptor changes. Do not generalize those Games/Entertainment-specific rules to MintTap/LogMate without category evidence.

## Why this matters for niche growth
A rating/capability declaration can affect eligibility and trust before first value. Marketing therefore cannot treat a lower age number as a conversion optimization target. The correct sequence is shipping capability -> accurate questionnaire -> resulting regional rating/descriptor -> Store promise -> qualified acquisition.

For MintTap, advertising is an actual capability that belongs in the age-rating audit. Future community/social features, chat, UGC, unrestricted web access, or similar additions must re-enter the rating audit before release. Financial specialization is not itself evidence for an Apple age threshold; do not invent one.

For LogMate, professional pilot positioning likewise does not justify guessing a rating. Ads, any future crew/community features, messaging, imported content, web surfaces and PWA/native divergence must be classified from the shipping implementation.

## AD0–AD5 Age-Rating Evidence Gate
- **AD0 — contradiction/manipulation:** questionnaire or public age/capability claim materially understates shipping behavior, or rating is deliberately manipulated for reach.
- **AD1 — unknown:** Store rating is known but the answers/capabilities producing it are not audited.
- **AD2 — mapped:** current questionnaire, major capabilities and regional rating outputs are inventoried, but release-change triggers or Store/public parity are incomplete.
- **AD3 — acquisition-ready:** shipping capabilities, questionnaire answers, regional outputs/descriptors, EULA/minimum-age policy, Store/public claims and release-change triggers are mutually consistent. No rating is optimized merely for conversion.
- **AD4 — regression-controlled:** parity is revalidated after capability/category/policy changes and across material regions/releases.
- **AD5 — reusable:** the evidence model and release gate can be applied to future niche apps without assuming one app's rating is appropriate for another.

Deliberate acquisition must not scale through a known AD0 contradiction. AD3 is the minimum evidence state for using age suitability as a public trust statement.

## Release triggers
Re-audit age-rating metadata when adding/removing: advertising; UGC; messaging/chat; social-media capability; unrestricted web access; parental/age controls; sensitive content; product category; EULA/minimum-age policy; material region distribution; or any feature covered by Apple's questionnaire.

Registry fields:
`app -> shipping version -> region -> category -> questionnaire version -> capability -> observed implementation -> declared answer -> calculated rating -> override -> descriptor -> EULA/min-age -> Store/public claim -> change trigger -> owner -> AD-class`.

## Measurement discipline
No evidence was established that a lower Apple age rating mechanically improves ranking or conversion. Do not claim it. If rating/capability presentation is ever evaluated as a conversion factor, treat it as trust/eligibility metadata and use the existing sparse-niche experiment rules; never alter truthful questionnaire answers as an experiment variable.

## Sources
- Apple Developer, Set an app age rating (current 2026 documentation).
- Apple Developer, Age ratings values and definitions.
- Apple Developer, What's New — App Store / 2026 social-media declaration requirement.
- Apple Developer News, August 12 2026 Korea age-rating update.

## Next operational check
Audit MintTap's live App Store age-rating questionnaire and resulting regional ratings/descriptors against the shipping build, especially advertising and any web/community capability. Record unknown Console evidence as unknown; do not infer answers from the public rating alone.