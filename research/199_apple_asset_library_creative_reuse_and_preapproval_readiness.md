# Research 199 — Apple Asset Library Creative Reuse & Preapproval Readiness

Validated: 2026-09-22

## Why this matters
Apple has announced a new App Store Connect Asset Library, described as coming in fall 2026. It is intended to centralize images, videos, app previews, and screenshots; let teams reuse them across App Store surfaces; submit assets independently of an app submission; and obtain approval in advance for later product-page updates or Apple Ads campaigns. Apple also announced a product-page preview tool for checking how header, name, description, screenshots, and search-result creative will appear before publication.

This is not yet treated as a universally available production capability. Until availability is verified in the relevant App Store Connect account, it is a readiness target, not an operational fact.

Authoritative source: Apple Developer, “What’s New — App Store” (current page observed 2026-09-22), https://developer.apple.com/app-store/whats-new/

Supporting current-state source: Apple App Store product-page guidance states that screenshots communicate actual UI/experience, up to 10 screenshots may be shown, and the first one to three can appear in search results when no preview is present. https://developer.apple.com/app-store/product-page/

## New operating insight
For a sparse-niche app, creative production should be managed as a versioned evidence system rather than a collection of one-off campaign exports.

Canonical chain:
`specialist job/evidence → source UI state → approved master creative → surface-specific derivative → localization → Store review/approval state → routed audience → qualified conversion → downstream specialist value`

Central reuse can reduce zero-cost marketing labor, but reuse is safe only when the underlying product claim, UI state, localization, territory, device presentation, and destination remain valid.

## DK0–DK5 — Creative Asset Provenance, Reuse & Preapproval Integrity Gate

### DK0 — Capability identity
Record whether Asset Library/product-page preview is actually available in the relevant account, platform, territory/workflow and on what date. “Announced” is not “available to us.”

### DK1 — Provenance identity
Every reusable creative must identify its source app/version/build or canonical UI state, capture date, supported job/value proposition, device class, locale, and owner. Generated composites must remain distinguishable from direct UI captures.

### DK2 — Claim and state integrity
Before reuse, verify that every visible claim, number, workflow, UI element, badge, feature, and limitation still matches the shipping app and current metadata policy. Approval of an asset does not prove the represented product state remains current.

### DK3 — Surface/localization fit
A technically reusable asset is not automatically semantically reusable. Default product page, CPP, In-App Event, editorial nomination support, search-result creative, owned web/community/social, and future Apple Ads can serve different intents. Localize specialist terminology rather than mechanically translating it.

### DK4 — Approval/version integrity
Track draft → submitted → approved → active/reused → superseded/retired. If Apple permits advance approval, treat approval as removal of review lead-time risk, not as permission to publish stale or mismatched creative later.

### DK5 — Qualified-value decision
Evaluate a creative change through qualified conversion and downstream specialist-value completion/repetition, not asset reuse count, approval count, visual novelty, or raw conversion alone.

## Canonical semantic separations
- `Apple announcement ≠ account availability`
- `asset uploaded ≠ asset approved`
- `asset approved ≠ asset still truthful`
- `reusable file ≠ reusable message`
- `same screenshot ≠ same audience intent`
- `preapproved ≠ safe to publish indefinitely`
- `preview looks correct ≠ live Store rendering guaranteed across all contexts`
- `higher conversion ≠ higher specialist-user quality`
- `creative library size ≠ marketing capability`

## MintTap application
Build a small master-asset registry around real YieldMax-investor jobs, not a large generic creative library. Each asset should map to an actual shipping workflow such as portfolio tracking or supported distribution/ROC/tax-adjustment functionality. Any asset containing portfolio values, distribution examples, tax language, ticker-specific state, or time-sensitive UI needs an expiry/revalidation rule. Never reuse an old screenshot merely because Apple previously approved it.

For zero-cost distribution, the same verified master evidence can reduce labor across App Store pages, minttap.app, Reddit explanations, blog posts, and social posts, but each derivative must preserve context and community/store rules. A Store screenshot optimized for conversion is not automatically an acceptable Reddit promotional image.

## LogMate application
Use provenance more strictly because pilot-facing screenshots can imply operational, regulatory, synchronization, import, or logging capability. Asset records should identify the exact supported workflow and release state. Do not let future marketing reuse turn a prototype/import concept or planned PWA behavior into an apparent shipping capability.

## Reusable company framework
Maintain a Creative Evidence Registry with at least:
`asset_id, app, source_version/build, capture_date, source_state, specialist_job, claim_set, device, locale, territory, surfaces_allowed, review_state, approval_date, linked_destination, expiry/revalidation_trigger, experiment_ids, downstream_value_metric, retirement_reason`.

Revalidation triggers include UI/workflow changes, feature removal/renaming, materially changed data semantics, policy changes, localization changes, destination changes, and a new Store surface with different context.

## Immediate operational consequence
Do not create a large asset migration project yet. First verify whether Asset Library and product-page preview are actually enabled in the MintTap App Store Connect account. If enabled, inventory only currently truthful high-value assets and establish provenance before migration. If unavailable, use the same registry discipline with existing App Store Connect creative workflows so migration later is mechanical rather than reconstructive.

## Unresolved evidence
- Actual Asset Library availability in MintTap App Store Connect.
- Actual product-page preview availability in MintTap App Store Connect.
- Existing MintTap screenshot/app-preview source files and provenance.
- Which current assets contain time-sensitive investment/tax/data claims.
- Current localization ownership and revalidation process.
- LogMate launch asset set and which screenshots represent production vs design/prototype state.
