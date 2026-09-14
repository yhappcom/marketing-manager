# 006 — Store Page Diagnostic Model: Intent, Proof, Continuity, and Measurement

Status: **FOUNDATION COMPLETE — CURRENT PLATFORM SURFACES VERIFIED 2026-09-15**  
Curriculum: Stage 1 applied Foundation Block C  
Scope: App Store / Google Play product-page diagnosis before advanced ASO tactics

## Capability objective

Build a diagnostic model that can explain **why a store page succeeds or fails for a particular audience** without reducing the problem to keyword folklore, visual taste, or raw conversion rate.

The intended capability is to move from:

> “Are the screenshots good?”

or

> “Which keywords should we add?”

into:

> “Which audience arrived with which intent, what must they understand and believe before installing, what evidence reduces their uncertainty, what friction remains, and does the installed product deliver the same promise?”

This is deliberately a Foundation model. Detailed search-ranking behavior, metadata optimization, localization operations, and store-specific experimentation belong to later ASO stages and remain `CHANGE WATCH` where platform behavior can change.

---

## 1. Why the store page exists in the marketing system

A mobile app store page performs several jobs at once:

1. **Discovery surface** — the user may encounter the app through search, browse, recommendation, editorial placement, ads, a custom page, or an external link.
2. **Interpretation surface** — the user tries to understand what the app is, who it is for, and what problem it solves.
3. **Evidence surface** — screenshots, video, descriptions, ratings, reviews, branding, and other cues help the user judge whether the promise is credible.
4. **Risk-reduction surface** — the page can reduce uncertainty about relevance, quality, effort, privacy, switching, migration, compatibility, and expected value.
5. **Conversion surface** — it can turn qualified attention into an install/download.
6. **Expectation-setting surface** — it creates a promise that the installed product must subsequently fulfill.

The page therefore sits between acquisition and activation rather than belonging exclusively to either one.

### SYNTHESIS

Store conversion is not an isolated creative outcome. It is a conditional result of:

`traffic source + user intent + audience fit + proposition clarity + evidence + perceived risk + page friction + platform context + product promise continuity`.

This means a high conversion rate can be produced by unusually qualified traffic, while a low conversion rate can be produced by broad or mismatched traffic even if the page itself is competent.

---

## 2. Core diagnostic chain

Use the following causal sequence as the default model:

`ENTRY INTENT → RELEVANCE RECOGNITION → VALUE COMPREHENSION → CREDIBILITY / PROOF → RISK & FRICTION ASSESSMENT → INSTALL DECISION → ONBOARDING CONTINUITY → REALIZED VALUE → RETENTION / REVIEW / REFERRAL`

Each link can fail independently.

### 2.1 Entry intent

Ask:

- Where did this visitor come from?
- What were they trying to accomplish immediately before seeing the page?
- Did they search for a category, a named product, a specific workflow, a problem, or arrive from community/content/referral?
- Are they already category-aware or must the page teach the category?

A store page cannot be diagnosed correctly without the source/intention context because the same page may work differently for brand search, category search, Reddit referral, blog referral, or platform browsing.

### 2.2 Relevance recognition

The user needs to decide rapidly whether the product appears to be meant for their situation.

Diagnostic questions:

- Is the target user or use case recognizable?
- Does specialist language increase relevance or create unnecessary opacity?
- Does the listing immediately distinguish the app from a generic adjacent category?
- Is the first visible message aligned with the visitor's likely problem rather than the company's internal feature taxonomy?

For niche products, this is especially important: broad language can increase apparent reach while weakening recognition among the users who actually matter.

### 2.3 Value comprehension

The user must understand what improves if they install the app.

Use the chain:

`feature → functional consequence → user outcome → evidence`.

A screenshot that merely labels a feature may not explain why the feature matters. Conversely, benefit copy without visible product evidence may appear generic or untrustworthy.

### 2.4 Credibility and proof

The page must help the user believe that the promised value is real.

Possible proof mechanisms include:

- visible interface evidence;
- demonstrations of the actual workflow;
- accurate screenshots and previews;
- specialist terminology used correctly;
- ratings/reviews, interpreted cautiously because of selection effects;
- verified product capabilities;
- continuity with trusted external content or community reputation;
- concrete descriptions instead of unsupported superlatives.

`SOURCE`: Google explicitly describes preview assets as a way to showcase app features and functionality. Apple product-page optimization tests currently support testing visual product-page assets, confirming that these assets are treated as measurable conversion surfaces by the platform.

### 2.5 Risk and friction assessment

Users do not judge benefits alone. They judge expected benefit minus expected sacrifice and uncertainty.

For free niche apps, relevant friction can include:

- setup effort;
- learning effort;
- data-entry burden;
- import/migration complexity;
- concern about losing existing records;
- privacy concern;
- platform compatibility;
- uncertainty about ads;
- professional credibility risk;
- switching from an incumbent workflow;
- fear that the app will not support a specialist edge case.

The listing should not attempt to answer every possible objection, but the highest-impact adoption risks should be visible and testable.

### 2.6 Install decision

The install is an intermediate conversion, not the final marketing outcome.

A page can increase installs by widening the promise beyond what the product actually delivers. That is not a durable win.

Therefore:

`install conversion` must be paired with downstream quality measures whenever possible.

### 2.7 Onboarding continuity

The first app experience should confirm, not contradict, the store-page promise.

Examples of discontinuity:

- the first screenshot promises a simple workflow but onboarding is lengthy;
- the page emphasizes local/private data but onboarding immediately demands unnecessary account creation;
- the page emphasizes one specialist task but the first-run experience foregrounds something else;
- the store imagery implies a clean experience but the first screen is dominated by intrusive advertising.

### 2.8 Realized value and downstream effects

The strongest store-page treatment is not necessarily the treatment producing the most first-time downloads.

Where instrumentation allows, inspect:

- activation;
- completion of the first core task;
- D1/D7/D30 retention where meaningful;
- uninstall/churn;
- ratings/reviews;
- retained monetizable sessions;
- ad revenue per acquired and retained user;
- referral or repeat discovery behavior.

---

## 3. The six-layer store-page diagnostic

For operational use, diagnose the page across six layers.

### Layer A — Traffic and intent

Questions:

- What source delivered the visitor?
- What query/problem/referral context preceded the visit?
- How qualified is the visitor?
- Is traffic composition changing over time?

Primary failure mode:

> blaming page creative for a traffic-quality problem.

### Layer B — Message

Questions:

- What is the first promise?
- Is the category/use case understandable?
- Does the message prioritize user outcome over internal feature naming?
- Is the message specific enough for the niche?
- Is there a coherent hierarchy rather than several equal claims?

Primary failure mode:

> saying many true things without making the most important value obvious.

### Layer C — Proof

Questions:

- Can the user see the promised workflow?
- Are visuals demonstrations or decoration?
- Are claims supported by actual product behavior?
- Are screenshots representative and current?
- Is credibility borrowed from legitimate evidence rather than empty authority cues?

Primary failure mode:

> benefit-heavy creative with insufficient visible evidence.

### Layer D — Risk and friction

Questions:

- What prevents this audience from switching or trying?
- Does the page answer the highest-impact uncertainty?
- Are compatibility, migration, privacy, setup, or professional-use concerns important?
- Does advertising create an expectation mismatch?

Primary failure mode:

> assuming the only choice is “install versus do nothing” while ignoring incumbent workflows and switching cost.

### Layer E — Continuity

Questions:

- Does onboarding deliver the same promise?
- Does the core task appear where expected?
- Does the app's UI, speed, data model, monetization, and permissions support the listing claim?
- Are there hidden costs after install?

Primary failure mode:

> optimizing store conversion while degrading activation or trust.

### Layer F — Measurement

Questions:

- What is the denominator?
- Which source/territory/device/language is being evaluated?
- Was traffic randomized or observational?
- What exactly changed between variants?
- Is sample size adequate?
- Are downstream outcomes available?
- Is the result practically important, not merely directionally positive?

Primary failure mode:

> treating aggregate conversion as a timeless intrinsic score for the page.

---

## 4. Screenshot and preview sequence as information architecture

Screenshots should be treated as a sequential argument, not a gallery.

A useful Foundation sequence is:

1. **recognition** — “this is for my problem / role / workflow”;
2. **primary value** — “this is the main improvement I get”;
3. **proof** — “I can see how the product actually does it”;
4. **important secondary value** — only if it materially affects choice;
5. **risk reduction** — migration, backup, privacy, compatibility, accuracy, or other high-impact concern where relevant;
6. **depth / breadth** — demonstrate supporting capability without diluting the core promise.

This is not a universal required order. It is a diagnostic starting model.

### MARKETING JUDGMENT

For specialist apps, the first assets often need to maximize **correct recognition**, not generic visual appeal. A highly relevant user who quickly understands “this was made for my workflow” can be more valuable than a larger number of weakly qualified visitors.

### Design Studio boundary

Marketing owns:

- audience;
- use context;
- message hierarchy;
- proof requirements;
- desired action;
- test hypothesis;
- measurement criteria.

Design Studio owns reusable visual, typographic, color, spatial, and interaction design expertise. Marketing should not promote a one-off winning screenshot style into a universal visual rule.

---

## 5. Current platform capabilities verified on 2026-09-15

These facts are `CHANGE WATCH`.

### Apple App Store

Official Apple documentation currently establishes:

- Product Page Optimization can test up to three treatments involving app icons, screenshots, and app previews.
- Treatments are randomly shown to a defined user group and results are evaluated in App Analytics using conversion-lift estimates and confidence calculations.
- Tests can run for up to 90 days unless manually stopped.
- Apple currently supports up to 70 custom product pages per app.
- Custom product pages can use different screenshots, previews, promotional text, and keywords and can be shared through a unique URL.
- Apple App Analytics exposes product-page metrics including product-page views, downloads, and conversion, and supports downstream analysis for custom product pages.
- Apple currently allows 1–10 screenshots and up to three app previews per supported device size/language where previews are supported.

Primary sources:

- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization/
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/run-a-test/
- https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions/
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/custom-product-pages/
- https://developer.apple.com/help/app-store-connect/manage-app-information/upload-app-previews-and-screenshots/

### Google Play

Official Google Play Console documentation currently establishes:

- Store Listing Experiments can test graphics and, in localized experiments, text/description elements.
- A developer can currently run one default graphics experiment or up to five localized experiments at the same time for an app.
- Custom Store Listings support tailored listings for different audiences and Google currently allows up to 50 custom store listing pages.
- Current custom-store-listing targeting includes several audience segments such as churned/lapsed users and buyer-status segments, in addition to other targeting mechanisms described by Play Console.
- Preview assets can appear beyond the listing itself, including elsewhere in Google Play, so their function is not limited to the detail page.
- Google requires at least two screenshots across device types for publishing the store listing under the current preview-asset requirements.

Primary sources:

- https://support.google.com/googleplay/android-developer/answer/12053285
- https://support.google.com/googleplay/android-developer/answer/9867158
- https://support.google.com/googleplay/android-developer/answer/9866151

### SYNTHESIS

Both platforms now provide first-party mechanisms for **segmented presentation and controlled/structured store-page testing**. Therefore store-page work should be framed as a measurable marketing system rather than a one-time design deliverable.

Do not infer that the platforms expose identical targeting, randomization, statistics, metadata, or discovery behavior. Platform-specific implementation remains separate.

---

## 6. Measurement model

### 6.1 Minimum metric chain

`impression / eligible exposure → product-page view → first-time download/install → activation → retained relevant user → monetizable retained activity`

Not every source exposes every step. Missing steps must be labeled rather than silently assumed.

### 6.2 Conversion rate is conditional

A conversion rate should always be interpreted with context:

- source;
- territory;
- device;
- language/localization;
- new versus returning/lapsed user where relevant;
- time period;
- traffic intent;
- variant exposure;
- app version/product changes occurring during the test.

### 6.3 Controlled versus observational evidence

**Randomized store experiment:** stronger evidence that the changed treatment affected store conversion, subject to implementation and interpretation constraints.

**Before/after comparison:** vulnerable to traffic-mix changes, seasonality, product release effects, reviews/ratings changes, external coverage, community activity, and platform changes.

**Cross-source comparison:** useful diagnostically but not causal because audiences differ.

### 6.4 Guardrail principle

Do not ship a store treatment solely because first-time-download conversion increased if evidence suggests meaningful deterioration in:

- activation;
- retention;
- trust/review quality;
- core-task completion;
- long-run ad value per acquired user.

This is particularly important for ad-supported apps, where low-quality installs can create brief impression volume without durable monetizable usage.

---

## 7. Applied first-pass hypotheses for current products

These are not production decisions. Product-specific live data remains required.

### MintTap

Verified product context already recorded in `exercises/001_niche_maps_minttap_logmate.md` includes YieldMax-oriented portfolio tracking, distributions, performance, cost basis/P&L, tax-aware information, ROC information, split/reverse-split history, distribution timing, and notifications.

First-pass store diagnostic emphasis:

- **recognition:** clearly indicate YieldMax-specific relevance rather than generic portfolio tracking;
- **primary value:** reduce the tracking complexity created by distributions, ROC, reinvestment, cost basis, and splits;
- **proof:** show actual tracking views rather than generic finance imagery;
- **risk reduction:** demonstrate that specialist events such as reverse splits/ROC are represented accurately enough to warrant evaluation;
- **continuity:** first-run setup must lead rapidly toward adding/importing the relevant holding workflow without contradicting the listing promise.

OPEN:

- actual store search terms;
- current App Store / Play Store listing;
- traffic-source mix;
- product-page-to-activation linkage;
- current conversion by source/territory/device;
- whether separate intent-focused product pages are economically justified at present traffic volume.

### LogMate

Verified product context already recorded includes pilot logbook use, manual entry, optional import, local/on-device core, cloud-minimal sync/auth architecture, iOS/Android and tablet/EFB PWA targets, import/export/backup/sync layers.

First-pass store diagnostic emphasis:

- **recognition:** professional pilot logbook/workflow rather than generic journaling or flight-tracking;
- **primary value:** reliable everyday logbook use with control over data/migration/backup;
- **proof:** show genuine logbook entry, totals, search, backup/export/import workflows when production-ready;
- **risk reduction:** address lock-in, migration, backup/export, device/platform workflow, and professional-use credibility where verified;
- **continuity:** onboarding must not make manual entry difficult merely because import is available.

OPEN:

- priority geography and subsegment;
- professional-airline versus student/GA store positioning;
- launch platform sequence;
- competitor/search-intent map;
- which workflow concern most strongly drives adoption;
- whether advertising belongs in the first store promise or only in expectation-setting/support material.

---

## 8. Failure modes this model should prevent

### Failure A — “ASO = keywords”

Search relevance matters, but a visitor still must understand and trust the product after discovery.

### Failure B — “good design = conversion”

Visual quality cannot compensate for wrong traffic, unclear value, weak proof, or severe switching friction.

### Failure C — “first screenshot should show every feature”

Feature density can weaken message hierarchy and correct recognition.

### Failure D — “higher conversion proves a better listing”

It proves only a scoped outcome under the test conditions unless downstream quality and transfer are also validated.

### Failure E — “copy the competitor”

Competitor creative may reflect a different audience, installed base, brand awareness level, business model, or traffic source.

### Failure F — “one winning page for all traffic”

Different high-value intents may justify separate pages when the platform supports it and traffic volume is sufficient.

### Failure G — “store page ends at install”

Expectation mismatch can damage activation, retention, ratings, community trust, and ad-supported lifetime value.

---

## 9. Operational diagnostic worksheet

For each store-page review, record:

### Audience / source
- target segment;
- source/context;
- likely entry intent;
- awareness level;
- strongest incumbent/substitute.

### Message
- category/use-case statement;
- primary promise;
- secondary promises;
- what is intentionally omitted;
- specialist vocabulary required.

### Proof
- product evidence shown;
- claim-to-screen mapping;
- social/authority evidence if legitimate;
- unsupported claims to remove.

### Risk / friction
- setup;
- migration;
- privacy;
- compatibility;
- switching;
- professional or financial credibility;
- ads/monetization expectations;
- other segment-specific objections.

### Continuity
- first-run path;
- first core task;
- time to first meaningful value;
- listing/onboarding mismatch;
- monetization mismatch.

### Measurement
- primary hypothesis;
- exact changed variables;
- primary metric;
- guardrails;
- downstream metrics;
- sample/traffic constraints;
- causal strength;
- transfer limits.

---

## 10. RELATED DOMAIN CHECK

### Company constraint

Current yhappcom policy favors little/no direct marketing spend, makes store pages central marketing surfaces, serves specialist niches, and depends primarily on ad-supported monetization while rejecting intrusive UX. This increases the value of store conversion **quality** rather than install volume alone.

### Product truth

Current MintTap and LogMate product truth was previously checked through their respective repositories in the first niche-map exercise. This study does not add new product capability claims beyond that verified context.

### Design Studio

Relevant dependency: message hierarchy and proof requirements must be supplied by Marketing; final visual hierarchy, typography, color, and interaction treatment should use Design Studio expertise. Store-test outcomes are scoped market evidence, not automatic reusable design laws.

### Web Manager

Relevant dependency: external blog/search/community traffic must maintain message continuity into the store page. Web Manager owns technical website/SEO architecture; Marketing owns source intent, promise continuity, campaign role, and downstream interpretation.

### Marketing evidence

This study extends `research/002` (uncertainty/trust), `research/003` (niche distribution), `research/004` (cash-light acquisition), and `research/005` (ad-supported economics). It converts those mechanisms into a store-page diagnostic system.

### Measurement

Intended outcome: increase qualified store conversion without lowering activation, retention, trust, or long-run monetizable activity. Randomized platform experiments are preferred when available and sufficiently powered; observational comparisons must retain weaker causal labels.

---

## 11. Foundation conclusions retained

1. A store page is a discovery, evaluation, proof, risk-reduction, conversion, and expectation-setting surface.
2. Store conversion is conditional on traffic and intent; it is not an intrinsic quality score.
3. The primary diagnostic chain is `intent → relevance → value → proof → risk/friction → install → continuity → realized value`.
4. Screenshots are information architecture and product evidence, not decoration.
5. The first job for niche-app assets is often correct recognition by relevant users.
6. Store optimization must include downstream quality guardrails.
7. Apple and Google both currently provide first-party experimentation and segmented/custom listing capabilities, making measurable store-page systems operationally feasible.
8. Platform-specific implementation and policy remain `CHANGE WATCH`.
9. Marketing owns audience/message/proof/test intent; Design Studio owns reusable visual-design expertise.
10. MintTap and LogMate should not inherit one universal listing structure; their adoption risks and specialist proof differ.

## Next validation

- inspect actual MintTap and LogMate store listings when available;
- establish source-tagging and downstream activation linkage;
- build the Stage 1 community anti-spam failure→revision model;
- later, in Stage 6, deepen platform-specific ASO, metadata/search, localization, experiment design, and current ranking/discovery surfaces.
