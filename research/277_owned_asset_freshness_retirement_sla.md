# Research 277 — Owned-Asset Freshness & Retirement SLA

Validated: 2026-09-28

## Decision
Zero-cost owned content is an asset only while it remains accurate, useful, maintainable, and consolidates rather than fragments specialist demand. Freshness is a truth-maintenance problem, not a publishing-frequency target.

## FY/FZ operating contract
FZ0 classify the specialist job and harm if stale.
FZ1 record authoritative source(s), verified date, volatile claims and owner.
FZ2 assign volatility: LOW (stable workflow/concept), MEDIUM (product/platform behavior), HIGH (financial/tax/regulatory/policy/time-sensitive claims).
FZ3 define event triggers before publication: source-policy change, product capability change, material data/schema change, community contradiction, broken destination, or measured failure.
FZ4 reverify the volatile claim, not merely the page timestamp.
FZ5 update only when substance changes; never refresh dates to simulate freshness.
FZ6 consolidate overlapping assets when they answer the same normalized specialist job; preserve a single preferred URL where practical.
FZ7 retire when the job is obsolete, capability no longer exists, evidence cannot be maintained, or another asset fully supersedes it. Redirect only to a genuinely relevant consolidated replacement.
FZ8 record outcome: MAINTAIN / UPDATE / MERGE / RETIRE / HOLD and the next trigger.

## SLA
Calendar review is a backstop, not proof of freshness:
- HIGH: event-triggered review immediately; otherwise review at least monthly while surfaced to users.
- MEDIUM: event-triggered review; quarterly backstop.
- LOW: event-triggered review; annual backstop.
These are internal operating defaults, not platform requirements. Shorten them when harm from stale information is higher.

## Search-integrity findings
Google explicitly warns against changing page dates merely to make content seem fresh and against adding/removing content primarily to make a site seem fresh. For sitemaps, lastmod should represent the last significant update to main content, structured data, or links—not cosmetic changes. This makes truthful revision history part of distribution integrity, not SEO decoration.

When multiple pages become substantially duplicative, consolidation is preferable to preserving URL count. Google treats redirects and rel=canonical as strong canonicalization signals; sitemap inclusion is weaker. If old content is genuinely consolidated into a new relevant page, a permanent redirect is appropriate; irrelevant mass redirects can be treated as soft 404s.

Recrawl requests are not a growth lever: Google states repeated requests do not make the same URL crawl faster, and crawling/indexing can take days to weeks.

## Portfolio application
MintTap: distribution/ROC/tax or fund-policy explanations are HIGH by default because stale claims can affect financial decisions. Ticker pages should not multiply when they answer the same investor job; preserve ticker-specific material only when the underlying facts or workflow materially differ.

LogMate: regulatory/legal-recordkeeping claims are HIGH; vendor/import behavior and platform instructions are MEDIUM unless safety/legal consequences elevate them; stable product workflow explanations can be LOW/MEDIUM. Retire instructions when supported import/export behavior changes rather than leaving historical guidance discoverable without clear status.

## Durable-asset ledger fields
asset_id; normalized_job; audience; canonical_url; source_authority; source_url; verified_at; volatility; volatile_claims; event_triggers; harm_if_stale; product_capability_dependency; last_material_update; next_backstop_review; status; superseded_by; redirect_target; search_console_note; community_reuse_note.

## Guardrails
- Publication date != evidence date.
- Review date != material update date.
- More pages != more demand.
- More frequent edits != more freshness.
- Search traffic never overrides accuracy or product truth.
- A retired URL must not redirect to an irrelevant homepage/category merely to preserve traffic.
- For YMYL-like financial content, trust and sourcing dominate publishing velocity.

## Next target
Build an Ad-Revenue Marginal-Utility Contract: determine when an additional ad opportunity increases sustainable revenue versus damaging first/repeated specialist value, using protected workflows, session exposure, consent, fill/impression/paid-event evidence and retention—not raw ad density.
