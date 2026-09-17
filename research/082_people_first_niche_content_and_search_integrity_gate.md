# 082 — People-First Niche Content & Search-Integrity Gate

Updated: 2026-09-18

## Decision

Zero-cost blog/search growth for specialist apps must begin with a real specialist question and a useful standalone answer. Search demand is a distribution signal, not permission to manufacture pages.

Canonical rule:

> **Earn the query before routing the reader.**

A page should remain worth publishing if Google traffic and the app CTA were removed. The app may be the next step only where it genuinely solves the problem described.

## Authoritative findings

Google Search Central says its ranking systems are designed to prioritize helpful, reliable information created to benefit people rather than manipulate rankings. Its self-assessment asks whether content adds original information/research/analysis, is substantial, goes beyond obvious summaries, demonstrates expertise, has a clear site purpose, and leaves the reader able to achieve the intended goal.

Google explicitly identifies warning signs for search-engine-first publishing: producing many topics hoping some rank, extensive automation across topics, summarizing others without added value, chasing trends outside the site's audience, targeting niches without real expertise, changing dates without substantive updates, or mass-changing content merely to appear fresh.

For high-impact financial/safety topics, Google states that signals aligned with strong E-E-A-T receive greater weight; trust is the most important component. This is directly material to MintTap's investment/ROC/tax-adjacent education and to future LogMate aviation/regulatory content.

Google's spam policies separately prohibit doorway abuse: substantially similar pages created for similar queries that funnel users toward the actual useful destination. They also prohibit keyword stuffing and link-spam patterns. Therefore ticker-, airport-, aircraft-, country-, or role-specific page multiplication is not a valid growth strategy unless each page has materially distinct user value.

Google currently supports `SoftwareApplication` structured data for software-app pages. It can help Google understand app details and can make a page eligible for richer presentation, but Google does not guarantee rich-result display. The current documentation requires app name, price/offer information, and a rating or review for eligibility, with category and operating system recommended. Markup is an eligibility/understanding layer, not a ranking substitute or a reason to invent ratings.

## Niche Content Eligibility Gate — N0–N5

- **N0 — Search idea only:** keyword/topic exists; no specialist evidence.
- **N1 — Demand without authority:** relevant query exists, but we cannot yet answer it with first-hand/product/authoritative evidence.
- **N2 — Useful answer, weak differentiation:** accurate answer exists but largely restates public sources; publish only if needed for support, not as a growth asset.
- **N3 — Distinct specialist utility:** page resolves a real user job with original synthesis, examples, workflow evidence, calculations, product-derived evidence, or authoritative-source reconciliation.
- **N4 — Trust-complete utility:** N3 plus clear sourcing, authorship/review responsibility where expected, scope/limitations, update discipline, and correct separation of education from app promotion.
- **N5 — Compounding asset:** N4 plus observed qualified search/community traffic that reaches the intended page, shows useful engagement, and where applicable proceeds to an earned Store/app route and first value without misleading promise.

Only N3+ is growth inventory. N4 is the target for financial, aviation, regulatory, tax-adjacent, or other high-consequence specialist content.

## Content-unit contract

Each proposed article must record:

1. `specialist_job` — the real problem/question.
2. `audience` — e.g. YieldMax holder, Korean YieldMax investor, airline pilot, pilot importing historical records.
3. `why_us` — first-hand product evidence, original analysis, or authoritative synthesis we can uniquely contribute.
4. `source_authority` — primary/official sources required for claims.
5. `standalone_value` — what the reader gains without installing anything.
6. `claim_boundary` — what the page must not imply.
7. `app_bridge` — only the product capability that truthfully continues the solved job.
8. `update_trigger` — policy/product/data change that makes review necessary; do not refresh dates cosmetically.
9. `measurement` — query/page/source cohort → Store route if any → first value/useful return.
10. `N_class` — N0–N5 with evidence.

## MintTap application

High-value candidates are not generic articles such as “best YieldMax ETFs” written for volume. Prefer specialist jobs where MintTap has genuine domain/product evidence, for example explaining why reverse splits complicate historical per-share/distribution tracking, how ROC/tax adjustments affect portfolio records, or how reinvestment changes longitudinal interpretation.

Because these subjects can affect financial decisions, educational pages must separate calculation/tracking mechanics from investment recommendations and use authoritative sources for tax, issuer, or regulatory claims. MintTap's app CTA must not transform an informational article into an implied investment recommendation.

Do **not** create near-identical pages for every YieldMax ticker merely to capture ticker queries. A ticker page is justified only when its underlying data/history/user job is materially distinct enough to stand alone.

## LogMate application

Do not mass-create pages for every airline, aircraft type, airport, authority, or logbook system before product/domain evidence exists. Regulatory/logbook-format content should target N4: primary authority sources, jurisdiction/scope boundaries, explicit distinction between regulation and app behavior, and review triggers when rules change.

Once production import/manual-entry workflows exist, original parser/workflow findings can support N3/N4 content because they add first-hand specialist utility rather than generic SEO summaries.

## AI/automation rule

AI may assist research, drafting, transformation, or maintenance, but automation does not create publishing entitlement. If automation substantially generates content, apply the same N-gate and human/domain verification. Never use automation to expand one thin template across ticker/airport/aircraft/country permutations for search capture.

## Search-to-product measurement

Use:

`query family → landing page → specialist-job completion proxy → optional app bridge → Store route → acquisition → first value → useful return`

Do not optimize only for impressions, clicks, or ranking position. A page that attracts broad traffic but fails specialist qualification is not a successful zero-cost channel.

## Structured-data rule

Use `SoftwareApplication` markup only on the canonical app/software page when the visible page truthfully contains the represented information and eligibility requirements can be met. Validate with Google's Rich Results Test and URL Inspection. Do not fabricate aggregate ratings/reviews or assume markup guarantees a rich result.

## Operational consequence

The blog backlog should be evidence-led rather than keyword-volume-led. Before adding a new article, first search the repository for an existing page/job. If the proposed page cannot exceed N2, improve/merge an existing asset or defer it. This prevents shallow content accumulation and protects limited marketing labor.

## Sources

- Google Search Central — Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central — Spam policies for Google web search: https://developers.google.com/search/docs/essentials/spam-policies
- Google Search Central — Software app structured data: https://developers.google.com/search/docs/appearance/structured-data/software-app
