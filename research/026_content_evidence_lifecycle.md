# 026 — Content Evidence Lifecycle

Validated: 2026-09-16

## Purpose

Turn specialist-user problems into durable owned/search assets without allowing financial, tax, regulatory, professional, product, or platform claims to outlive their evidence. Primary cases: MintTap YieldMax/ROC content and LogMate pilot/logbook content.

## Core finding

Content is not merely a publishing unit. For a specialist app it is a maintained evidence-bearing asset with two independent jobs:

1. answer a real user problem well enough to earn discovery/trust;
2. keep factual claims traceable to evidence whose scope and freshness remain valid.

Therefore publication is the midpoint, not the end, of the content process.

Canonical lifecycle:

`problem evidence → intent/claim map → source validation → draft claim ledger → publish → distribution → native performance evidence → factual surveillance → refresh / preserve / retract / archive`

Search performance and factual validity are separate state machines. Traffic never validates a factual claim.

## Why this matters for this portfolio

MintTap operates around investment distributions, ROC, cost basis, splits, taxes, and product data. These topics can contain time-sensitive financial/tax facts and jurisdiction-specific interpretations.

LogMate serves pilots. Logbook requirements, endorsements, operator practices, and jurisdictional rules can be safety/professional/regulatory topics. Community experience is useful problem evidence but is not regulatory authority.

Both apps therefore need a stronger lifecycle than ordinary evergreen SEO publishing.

## Source hierarchy by claim type

Use the strongest competent source reasonably available for the exact claim. Do not use one hierarchy for every question.

### Tier A — controlling/primary authority

Examples: statute/regulation, competent regulator, tax authority, official platform policy, issuer/fund filing or official product documentation where it is the source of truth.

### Tier B — authoritative implementation guidance

Examples: regulator handbooks/advisory circulars, official platform developer documentation, official technical/help documentation.

### Tier C — qualified secondary explanation

Useful for interpretation/context, but do not let it override Tier A/B.

### Tier D — community/first-hand qualitative evidence

Useful for discovering vocabulary, workflows, confusion, objections, and examples. Never silently promote this to legal/tax/regulatory truth.

### Tier E — unattributed/aggregated web claims

Discovery lead only until validated.

A source can be authoritative yet still be wrong for the claim because jurisdiction, date, product, population, or scope differs.

## Claim ledger

Before publication, decompose consequential content into claims rather than attaching sources only to an article as a whole.

Recommended fields:

- `claim_id`
- content asset ID / URL
- claim text or normalized proposition
- claim class: `PRODUCT | FINANCIAL | TAX | REGULATORY | PROFESSIONAL | PLATFORM_POLICY | TECHNICAL | EMPIRICAL | EDITORIAL`
- jurisdiction / platform / product / audience scope
- source ID(s)
- source tier
- source publication/effective/retrieval date where applicable
- interpretation required? yes/no
- reviewer/owner
- factual state: `VALIDATED | QUALIFIED | CONFLICTED | UNKNOWN | SUPERSEDED | RETRACTED`
- refresh trigger
- last checked
- next check if a calendar check is justified

Not every sentence needs bureaucracy. Apply claim-level control to consequential or decay-prone propositions; low-risk editorial explanation can remain lighter weight.

## Freshness model: trigger first, calendar second

Do not declare universal 30/90/365-day expiry periods. Evidence decay is mechanism-specific.

### Event triggers

Revalidate when any relevant event occurs:

- law/regulation/tax guidance changes;
- regulator or platform documentation changes;
- issuer/fund revises final tax classification or distribution data;
- product/app workflow or UI changes enough to make screenshots/instructions inaccurate;
- Store policy/metadata rules change;
- a cited source disappears, is superseded, or materially changes;
- credible contradiction is discovered;
- user reports reveal that a statement no longer matches practice;
- geography/jurisdiction/audience scope expands;
- a high-performing old article begins attracting queries outside its validated scope.

### Calendar surveillance

Use scheduled rechecks only where event monitoring is unreliable or the consequence of stale information warrants it. Frequency must follow volatility and harm, not SEO superstition.

## Four content states

Every maintained specialist content asset should be classifiable as:

- `CURRENT` — material claims remain supported within scope.
- `REVIEW_DUE` — a trigger occurred or surveillance is due; do not silently assert freshness.
- `PARTIALLY_STALE` — some material claims no longer support the current version; correct promptly and label scope/update where needed.
- `RETRACT_OR_ARCHIVE` — the asset's core answer is no longer defensible or maintaining it would mislead.

High traffic is not a reason to preserve stale content. It increases the exposure cost of being wrong.

## Publication/update dates

Google Search Central currently recommends prominent user-visible publication/update dates and corresponding `datePublished` / `dateModified` structured data. Google also warns against artificially freshening a page without significant new information.

Company rule:

- preserve original publication date;
- change `last updated` only after a material content change;
- do not bump dates merely to look fresh;
- where a consequential rule/tax/product fact was revalidated but wording did not materially change, record the internal `last_checked` separately; optionally expose a clear `fact checked/reviewed` field only if the site can explain what it means consistently.

A date is evidence metadata, not an SEO decoration.

## Search and content-quality implications

Google Search Essentials continues to emphasize helpful, reliable, people-first content and using the words people use to search. Google's February 2026 Discover update explicitly says it is increasing in-depth, original, timely content from sites with topic expertise and reducing sensational/clickbait content.

Operational synthesis for a narrow app company:

- build topic depth around actual specialist jobs rather than broad finance/aviation traffic;
- use community/search language to discover questions, then validate consequential answers independently;
- prefer original calculators, worked examples, screenshots, product/workflow explanations, and transparent methodology where they add genuine value;
- do not scale generic AI pages merely to occupy keywords;
- do not treat traffic growth as proof that the content is accurate or commercially qualified.

## MintTap content protocol

### Problem discovery

Community/search/user evidence can identify questions such as ROC, distributions, reverse splits, cost basis, final tax classification, and portfolio-tracking consequences.

### Validation boundary

For U.S. tax concepts, current IRS material confirms that a nondividend distribution/return of capital generally reduces stock basis and, after basis reaches zero, additional nondividend distribution is generally treated as capital gain. That fact does **not** establish Korean tax treatment, a particular YieldMax fund's final classification, or a user's brokerage settlement treatment.

Therefore every MintTap tax/ROC article must declare scope. Separate at minimum:

- U.S. federal tax concept;
- fund/issuer-specific reported classification;
- Korean tax/brokerage handling;
- MintTap tracking behavior.

Do not merge these into a single universal `ROC tax rule`.

### High-risk decay triggers

- final 1099/tax-character data replaces estimates;
- IRS/Korean tax guidance changes;
- issuer corrects distribution/tax data;
- split or distribution history changes;
- app calculation logic changes.

When a final classification replaces an estimate, update the article and preserve that the prior statement was provisional if historically relevant.

## LogMate content protocol

### Problem discovery

Pilot communities and user research can reveal confusion around required logbook fields, electronic records, endorsements, operator workflows, import formats, EFB constraints, and jurisdiction differences.

### Validation boundary

FAA material identifies 14 CFR 61.51 as the regulation governing pilot logbook information, and FAA guidance confirms logbooks must be presented to specified officials on request under 61.51(i). These U.S. rules do not establish requirements in Korea, EASA states, or an airline's internal record policy.

Therefore regulatory content must bind every material claim to jurisdiction and authority. Operator practice should be labeled as operator practice, not regulation.

### High-risk decay triggers

- regulation/amendment or authority guidance changes;
- target jurisdiction expands;
- app begins representing compliance rather than recordkeeping assistance;
- airline/operator workflow changes;
- import parser or supported data fields change.

## Asset-to-evidence loop

Publishing creates a new hypothesis, not proof of market demand.

For each asset capture native evidence where available:

- Search Console query/page impressions, clicks, CTR, position;
- landing-page engagement/qualified CTA where instrumented;
- Store campaign/source evidence only within native attribution boundaries;
- community response classified under research 025;
- activation/retention downstream only when a defensible link exists.

Interpretation examples:

- impressions without clicks can indicate weak snippet relevance, ranking/position effects, or intent mismatch; do not assume title failure alone;
- clicks without qualified activation can indicate content/product-intent mismatch;
- low volume can still be strategically valuable in a tiny professional niche;
- high traffic from broad non-target queries can be negative portfolio value if it creates maintenance burden without qualified users.

## Content portfolio priority

Prioritize assets using:

`problem recurrence × qualified audience fit × answerability/authority × durable usefulness × product adjacency × evidence value`

Discount for:

`factual volatility × harm if stale × maintenance tail × weak differentiation × broad low-quality traffic risk`

Do not assign fabricated numeric weights before live calibration.

## Refresh decision

When a trigger fires:

1. identify affected claims, not merely the article;
2. fetch the current competent source;
3. classify `UNCHANGED | CLARIFIED | CHANGED | CONFLICTED | SOURCE_GONE`;
4. update only what evidence supports;
5. record material revision and date honestly;
6. re-check internal links, screenshots, CTA/product behavior;
7. preserve or create a baseline boundary if the content proposition materially changed;
8. if no defensible answer remains, retract/archive rather than patch around uncertainty.

## Separation of three truths

Every specialist content operation must keep these distinct:

1. **Factual truth** — is the claim supported by the competent source?
2. **Audience truth** — is this actually a problem/question for the target niche?
3. **Commercial truth** — does solving the information need lead to qualified product use?

Community research can strengthen #2. Authoritative validation governs #1. Native product/channel evidence is needed for #3. No one layer substitutes for the others.

## Anti-patterns

- publishing a community consensus as tax/regulatory guidance;
- using an old high-ranking article as evidence that its facts remain current;
- changing `last updated` without material change;
- treating one jurisdiction's rule as global;
- treating issuer estimates as final tax character;
- bulk-generating adjacent keyword pages without original user value;
- deleting old evidence provenance when a source changes;
- optimizing for sessions while ignoring qualified activation and maintenance cost;
- hiding uncertainty instead of using `UNKNOWN` or qualified language.

## Required content record

For consequential owned content, record:

- asset ID / canonical URL
- target audience/problem/intent
- content owner
- publication date / material-update date
- claim-ledger references
- source snapshot/retrieval dates
- jurisdiction/product/platform scope
- content state
- refresh triggers
- native evidence IDs
- linked Decision Record
- maintenance owner

This links content operations to the existing Live Evidence Registry rather than creating a parallel analytics system.

## Source notes

Authoritative sources revalidated 2026-09-16:

- Google Search Central, Search Essentials: helpful, reliable, people-first content; use searcher language; crawlable links; legitimate audience awareness.
- Google Search Central, publication/byline date documentation: visible dates plus `datePublished`/`dateModified`; dates should represent genuine publication/significant update, not artificial freshness.
- Google Search Central, February 2026 Discover core update: more locally relevant, in-depth, original and timely content from topic expertise; reduced sensational/clickbait content.
- IRS Topic 404 and Publication 550 (2025): U.S. federal treatment of nondividend distributions/return of capital and basis reduction, including treatment after basis reaches zero.
- FAA FAQ on logbook presentation and FAA Aviation Instructor's Handbook Appendix C: 14 CFR 61.51 governs pilot logbook information; 61.51(i) governs presentation on request.

The lifecycle, claim ledger, freshness states, prioritization model, and three-truth separation are company operating synthesis, not claims that these authorities prescribe this exact marketing workflow.
