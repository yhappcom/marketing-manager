# 012 — Cross-Store Optimization Operating Framework

Date: 2026-09-15
Status: FOUNDATION / OPERATING FRAMEWORK

## Why this block exists

Research 006 established the store-page diagnostic chain; 009 defined measurement; 010 mapped Google Play's current measurement contract; 011 separated demand capture from demand development. This block turns those foundations into one company operating procedure for App Store and Google Play without pretending the two stores expose identical metadata, targeting, experiments or metrics.

The objective is not a universal ASO score. The objective is a repeatable decision process:

`demand evidence → intent map → default listing architecture → intent-specific page → creative/proof → native experiment → downstream activation/retention validation → retain/revise/stop`

## 1. Cross-store principle: normalize the question, not the metric

Apple and Google answer similar business questions with different product surfaces and metric definitions. Therefore yhappcom should normalize the diagnostic question while preserving native field names and denominators.

Common questions:

1. Which relevant users are arriving?
2. What intent/problem brought them?
3. Does the listing make category/product relevance obvious?
4. Does it prove the promised value with credible product evidence?
5. Does the user express install/download intent?
6. Does that intent become a real acquisition/first open?
7. Does the acquired user activate and retain?

Do not create one unlabeled `store conversion` KPI that mixes Apple download conversion with Google Play intent-click CTR or completed acquisition metrics.

## 2. Current platform surface map

### Apple App Store

Current first-party documentation checked 2026-09-15 supports:

- localized app name up to 30 characters and subtitle up to 30 characters;
- searchability through app name, subtitle, keywords and company name;
- localized metadata and localized keywords;
- 1–10 screenshots and up to three optional app previews per supported device size/language;
- Product Page Optimization (PPO) with up to three treatments, testing app icon, screenshots and previews; tests run up to 90 days and results appear after at least five first-time downloads attributed to the test;
- up to 70 Custom Product Pages (CPPs), with distinct screenshots, previews, promotional text and keywords; CPPs can be reached by unique URL and can be surfaced in search when keywords are configured;
- App Tags, currently documented as displayed in the United States, derived from metadata/AI/human curation and manageable in App Store Connect.

Operational consequence: Apple has separate tools for default-page creative experimentation (PPO) and intent/source-specific page variants (CPP). PPO is not available for CPPs. Do not confuse segmentation with experimentation.

### Google Play

Current first-party documentation checked 2026-09-15 supports:

- Main Store Listing with localized text and localized graphic assets;
- preview assets including icon, feature graphic, screenshots and optional video; these assets can also appear in search/home/promotional placements beyond the listing;
- up to 50 Custom Store Listings (CSLs) for targeted audience segments; current documented segment options include lifecycle/value segments such as churned/lapsed users and buyer states, in addition to targeting mechanisms documented elsewhere in the CSL workflow;
- Store Listing Experiments: one default graphics experiment or up to five localized experiments can run simultaneously; default graphics experiments can test icon, feature graphic and screenshots, while localized experiments can test icon, feature graphic, screenshots and descriptions.

Research 010 separately freezes the current 2026 Play measurement transition: listing performance centers on unique user intent clicks/CTR while completed acquisition remains a distinct downstream layer.

Operational consequence: Google Play's feature graphic and text experimentation surface differs materially from Apple PPO. Do not copy an Apple test plan field-for-field into Play Console.

## 3. Store Optimization operating cycle

### Gate A — Evidence intake

Before editing metadata or creative, collect the strongest available evidence:

1. actual store search terms / native acquisition sources;
2. source-linked campaign or custom-page behavior;
3. user support questions, community language and product reviews;
4. product workflow evidence and current screenshots;
5. competitor/category observation;
6. founder/team hypothesis only after observed evidence is exhausted.

Tag each claim `OBSERVED / DERIVED / ESTIMATED / UNKNOWN` under research 009.

### Gate B — Intent map

Create a small intent ledger. Each candidate intent must state:

- user/problem state;
- exact evidence source;
- likely category-entry situation;
- product capability that resolves it;
- proof available in the actual app;
- appropriate destination: default listing, intent-specific page, owned web content, or no action;
- evidence strength.

Do not create a custom page merely because the platform allows dozens of pages. A page requires materially different intent, promise or proof and enough traffic/strategic value to justify maintenance.

### Gate C — Default listing job

The default listing must explain the broadest strategically valuable category frame without becoming generic.

Default-page hierarchy:

`recognition → relevance → differentiated promise → product proof → trust/risk reduction → install intent`

Audit questions:

- Can a target user identify what the app is within seconds?
- Is the first promise tied to a real user job rather than a vague adjective?
- Do first visible screenshots show the product doing that job?
- Are claims demonstrable in the current build?
- Does visual hierarchy survive small-screen browsing?
- Are important trust constraints clear where needed?
- Does the listing promise match onboarding and first-session reality?

### Gate D — Metadata/search architecture

Do not use keyword stuffing.

For each platform, preserve native metadata rules and use actual search evidence where available. The common company rule is:

`user language + category relevance + truthful product capability + demand evidence > internal terminology`

Apple-specific search fields and Google Play text surfaces should be managed independently; a keyword useful on one store is not automatically valuable or even represented through the same field on the other.

Localization is not word substitution. Localize only when target-market evidence justifies the maintenance cost, and validate screenshots/text together where user expectations differ.

### Gate E — Creative/proof architecture

Every visible asset needs a job. Suggested sequence for specialist utilities:

1. category/problem recognition;
2. core differentiated workflow;
3. proof of specialist capability;
4. trust/data-control/reliability proof where relevant;
5. secondary workflow or breadth;
6. advanced evidence only after the core proposition is clear.

Screenshots are product evidence, not decorative posters. Marketing Manager should specify message/proof requirements; Design Studio should determine typography, visual hierarchy, color and composition under its own canonical design rules.

Do not claim a workflow in a screenshot that the shipping product cannot perform.

### Gate F — Intent-specific page decision

Create CPP/CSL only when at least one condition is true:

- a verified source arrives with a materially different problem/intent;
- a campaign/community/content asset promises a specific workflow requiring matching proof;
- a meaningful search term/category-entry situation merits a tailored page;
- a lifecycle/segment state supported by the platform needs a distinct message;
- default-page breadth creates a demonstrated relevance problem.

Reject page proliferation when traffic is too sparse, proof is unchanged, or maintenance would exceed learning value.

### Gate G — Native experiment

Experiment only after stating:

- hypothesis;
- exact changed element(s);
- target audience/localization;
- platform-native primary metric and denominator;
- minimum detectable change/evidence threshold where supported;
- guardrails;
- downstream validation plan;
- stop/retain/revise rule.

Prefer one coherent hypothesis per experiment. Multi-element redesigns may be valid when testing a proposition package, but the result then validates the package, not each individual element.

Apple PPO and Google Store Listing Experiments have different capabilities and statistical/reporting contracts. Use native terminology in experiment records.

### Gate H — Downstream validation

A listing winner is provisional until product behavior is checked.

Required chain where data permits:

`native store outcome → first open → activation → retained core-value use → sustainable ad-bearing usage`

A creative that increases install intent by attracting poorly matched users can be a business loss. Activation/retention guardrails therefore outrank a small store-only lift when the evidence is reliable.

### Gate I — Decision and knowledge retention

Record:

- hypothesis;
- variant and asset versions;
- dates/app versions;
- native metrics exactly as defined;
- downstream metrics;
- result status: `WIN / LOSS / INCONCLUSIVE / INVALIDATED`;
- what can and cannot be generalized;
- next test.

Never turn one platform/locale result into a universal design rule without replication or supporting evidence.

## 4. Apple vs Google operating differences that must remain visible

| Decision area | Apple App Store | Google Play | Company rule |
|---|---|---|---|
| Default creative test | PPO | Store Listing Experiments | Use native experiment contract |
| Variant capacity | PPO up to 3 treatments | experiment structure differs; default/localized experiment modes | Never compare treatment count as capability quality |
| Intent-specific pages | CPP, up to 70 | CSL, up to 50 | Create only from verified segment/intent need |
| CPP/CSL experimentation relationship | PPO not available for CPP | Play supports its own listing experiment structures; verify exact target listing before execution | Never assume parity |
| Search metadata | name/subtitle/keywords/company + evolving discovery surfaces | listing text/search-term reporting under Play rules | Maintain separate field maps |
| Creative surfaces | icon/screenshots/previews | icon/feature graphic/screenshots/video | Design asset plan per store |
| Native conversion evidence | Apple download-oriented conversion metrics | 2026 Play listing performance emphasizes intent clicks/CTR; acquisitions separate | Preserve native denominators |
| Localization | localized metadata/assets/keywords | localized text/assets and localized experiments | Localize from market evidence, not completeness goals |

## 5. Sparse-traffic protocol for niche apps

MintTap and LogMate may have insufficient traffic for frequent statistically useful store tests. Therefore:

1. Do not split small traffic across many variants/pages.
2. Prefer larger proposition-level differences over tiny cosmetic changes when evidence is sparse.
3. Use qualitative evidence to choose what is worth testing, but do not report qualitative preference as conversion proof.
4. Pool observation windows only when product/version/traffic conditions remain comparable.
5. Mark privacy-suppressed or insufficient-volume results as inconclusive, never zero.
6. If native testing cannot resolve a decision, prioritize message clarity and product truth over endless experimentation.

## 6. MintTap application hypothesis

Do not freeze store copy before current listing/search data are inspected.

Candidate intent clusters to validate:

- YieldMax portfolio tracking;
- distribution tracking/history;
- ROC/final ROC understanding and adjustment;
- reverse-split continuity;
- cost-basis/return interpretation.

Default listing should likely establish `YieldMax-specialist portfolio tracker` recognition before exposing advanced concepts. Intent-specific pages should exist only where search/source evidence shows a distinct user problem and the product has direct visual proof.

Potential failure: leading with specialist terminology such as ROC before a new visitor understands the product category. Test/observe recognition first.

## 7. LogMate application hypothesis

Candidate intents to validate:

- professional/pilot logbook;
- migration/import from existing records/systems;
- backup/data ownership;
- offline workflow;
- export/career-record continuity.

Default listing should establish professional logbook relevance quickly. Migration/import may warrant intent-specific treatment if external content/search/community sources bring users specifically because switching cost is the barrier.

Potential failure: advertising a broad feature inventory before proving that existing records can be moved and trusted.

## 8. Handoff contract with Design Studio and Web Manager

Marketing Manager owns:

- target audience/intent evidence;
- proposition and proof requirements;
- asset job/order;
- platform constraints;
- experiment hypothesis and measurement;
- result interpretation.

Design Studio owns visual execution under current design-system knowledge and project constraints.

Web Manager owns web implementation/content surface when an owned landing/search asset is required.

Marketing must not prescribe arbitrary visual styling as if it were evidence, and Design/Web work should not invent the marketing proposition independently when a validated brief exists.

## 9. Anti-patterns now prohibited

- copying identical metadata/creative blindly between iOS and Android;
- calling both stores' metrics `conversion rate` without definition;
- keyword stuffing;
- creating many CPPs/CSLs because capacity exists;
- treating screenshot beauty as proof of relevance;
- changing multiple unrelated elements and claiming one caused the lift;
- ending tests because an early result looks favorable;
- optimizing store outcome while ignoring activation/retention deterioration;
- localizing every market before demand evidence exists;
- presenting founder intuition as observed search demand.

## 10. Current evidence checked

First-party/current documentation checked 2026-09-15:

Apple Developer / App Store Connect Help:
- App information and searchability fields;
- localized app information;
- upload app previews/screenshots;
- Product Page Optimization overview/create/configure/run/results;
- Custom Product Pages configuration/submission;
- App Tags.

Google Play Console Help:
- create/set up app and localized listing assets;
- preview assets;
- Custom Store Listings;
- Store Listing Experiments.

Research 010 remains canonical for the exact 2026 Google Play measurement transition and should be read with this framework.

## 11. Retained expert judgment

ASO is not a keyword-ranking project and not a screenshot-design project. For yhappcom it is a controlled interface between existing/developed demand and product reality.

The correct operating loop is:

`observe intent → make relevance legible → prove the workflow → measure native store response → validate product quality downstream → retain only learning that survives the full chain`

This structure is reusable for future niche apps because the procedure is stable even when platform fields and target audiences change.

## Next research gate

Deepen positioning/brand foundations for narrow specialist apps: category frame, target problem, promise, reasons-to-believe, trust signals, category-entry situations and distinctive brand assets. Separate positioning decisions from visual identity decisions and connect the result to this store operating framework.