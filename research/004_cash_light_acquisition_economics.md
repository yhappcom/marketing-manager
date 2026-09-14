# 004 — Cash-Light Acquisition Economics: Zero Media Spend Is Not Zero Acquisition Cost

Status: **FOUNDATION — integrated checkpoint**  
Reviewed: 2026-09-15

## Capability target

Build a financially disciplined model for yhappcom's preferred low/zero-paid-acquisition strategy.

Questions:

1. What does acquisition cost mean when media spend is near zero?
2. How should owner/manager time, writing, moderation, design, engineering, and opportunity cost be counted?
3. Which outcome should organic channels optimize: impressions, installs, activated users, retained users, or long-run customer value?
4. How should scarce internal time be allocated across store pages, communities, blog/search, social, referral, and partnerships?
5. When should an apparently “free” channel be reduced or abandoned?
6. Why does retention change the amount of acquisition effort the business can rationally support?

---

## RELATED DOMAIN CHECK

### Marketing Manager evidence checked

- `001_marketing_foundations.md`
- `002_choice_value_uncertainty_trust.md`
- `003_niche_distribution_community_economics.md`
- `context/COMPANY_MARKETING_CONSTRAINTS.md`
- `curriculum/STAGE1_YHAPPCOM_APPLIED_FOUNDATIONS.md`

Inherited mechanisms:

- relevant-user penetration matters more than gross reach for current specialist apps;
- search cost, uncertainty, switching cost, and trust affect adoption;
- community is a social system rather than free inventory;
- organic channels consume labor and opportunity cost even when media spend is zero.

### Product truth

Product-specific operating details are not inferred from generic marketing theory.

Verified current product evidence used only where necessary:

- MintTap is a Flutter/Firebase app for tracking YieldMax-style ETF positions, dividends, portfolio performance, tax-aware views, ROC-related information, splits, notifications, and ad-supported operation in the 1.0.29 product branch.
- LogMate is a pilot logbook product targeting native iOS/Android and tablet/EFB PWA, with manual entry as a complete path and import/export/sync as optional layers.

Product sources:
- `yhappcom/yieldmax_tracker` branch `1.0.29` README and user guide;
- `yhappcom/logmate` README.

No current user counts, acquisition costs, retention, ad revenue, or market-size estimates are assumed.

### Design Studio / Web Manager

- Design Studio becomes relevant when store, content, and campaign execution depend on hierarchy, typography, color, interaction, or web presentation.
- Web Manager becomes relevant for blog/search durability, technical SEO, landing pages, analytics, and owned-web operations.

This study owns the marketing/economic allocation question, not those implementation disciplines.

---

## 1. Cash spend and economic cost must be separated

Company policy favors little or no direct paid acquisition.

That creates two distinct accounting views:

### Cash acquisition spend

Examples:
- paid media;
- sponsorship fees;
- creator payments;
- paid distribution;
- paid tools directly attributable to a channel.

### Fully loaded acquisition cost

Examples:
- owner/manager hours;
- writing/editing;
- community moderation;
- design production;
- store-page production;
- engineering work needed for measurement or landing surfaces;
- localization;
- tooling;
- support burden caused by a campaign;
- opportunity cost of not doing the next-best activity.

`MARKETING JUDGMENT` — For yhappcom, a channel may be compliant with the “no paid marketing” policy while still being economically expensive.

Therefore report both:

`cash CAC-like cost`

and

`fully loaded acquisition cost`.

Do not call an organic channel “free” without specifying which cost boundary is being used.

---

## 2. Acquisition and retention are joint economic decisions

`SOURCE` — Blattberg and Deighton (1996) framed marketing as a balance between customer acquisition and customer retention and proposed customer equity as the financial object to optimize rather than treating acquisition spending in isolation.

Source: Robert C. Blattberg & John Deighton, “Manage Marketing by the Customer Equity Test,” *Harvard Business Review*, 1996.  
https://hbr.org/1996/07/manage-marketing-by-the-customer-equity-test

`SOURCE` — Rust, Lemon, and Zeithaml (2004) proposed evaluating marketing strategies by the change in customer equity relative to incremental marketing expenditure, where customer equity aggregates current and future customer lifetime values.

Source: Roland T. Rust, Katherine N. Lemon, Valarie A. Zeithaml, “Return on Marketing: Using Customer Equity to Focus Marketing Strategy,” *Journal of Marketing*, 68(1), 2004.  
https://journals.sagepub.com/doi/10.1509/jmkg.68.1.109.24030

### yhappcom translation

For an ad-supported app, the useful unit is not simply “one install.”

A more useful progression is:

`relevant prospect → store/product visit → install → activation → retained use → monetizable activity → ad revenue + referral/review/learning value`

The acquisition channel changes the probability of reaching each later stage.

Therefore a channel that produces cheap installs but weak retention can be economically worse than a labor-intensive niche channel that produces fewer but much more relevant retained users.

---

## 3. Retention must not be romanticized either

`SOURCE` — Reinartz and Kumar (2000) tested common assumptions that long-life customers are necessarily more profitable in a noncontractual setting and showed that relationship duration should not automatically be equated with profitability.

Source: Werner J. Reinartz & V. Kumar, “On the Profitability of Long-Life Customers in a Noncontractual Setting,” *Journal of Marketing*, 64(4), 2000.  
https://journals.sagepub.com/doi/10.1509/jmkg.64.4.17.18077

### Foundation rule

Do not use the slogan:

> retention is always cheaper and therefore always more valuable.

Instead ask:

- Does the retained user continue to receive real value?
- Does the user generate meaningful ad-supported activity?
- What support/infrastructure burden follows?
- Does the user's presence improve reviews, referrals, feedback, or network credibility?
- Is the app retaining the right niche users or merely low-value activity?

`MARKETING JUDGMENT` — Retention is economically important because it extends the opportunity to realize value and monetize activity, but profitability must be measured rather than presumed.

---

## 4. Define the acquisition denominator correctly

Possible cost metrics include:

### Cost per impression/reach
Weak for current niche apps unless the reach is highly qualified.

### Cost per store visit
Useful for channel-to-store efficiency but incomplete.

### Cost per install
Useful operationally but can reward low-quality acquisition.

### Cost per activated user
Better when activation corresponds to first meaningful value.

### Cost per retained relevant user
Often more aligned with current yhappcom economics because retained use creates the inventory base for future ad revenue.

### Cost per monetizing retained user
Potentially stronger after ad instrumentation matures, but it can become circular if ad burden itself affects retention.

### Working rule

At Foundation stage, keep a metric ladder rather than one universal CAC:

`effort/cash → qualified reach → store visit → install → activation → retention → monetizable retained activity`

Later project work should choose the denominator that matches the decision.

---

## 5. A fully loaded organic acquisition model

For a defined channel and period:

`Fully Loaded Channel Cost`

approximately equals

`direct cash + labor time × internal shadow rate + production/tooling + moderation/support + attributable engineering/design + opportunity cost allowance`

Then calculate several outcome ratios rather than a single score:

- cost per qualified visit;
- cost per install;
- cost per activated user;
- cost per D7/D30 retained relevant user;
- cost per referred retained user;
- durable asset value generated;
- market-learning value generated.

`MARKETING JUDGMENT` — The internal shadow rate does not need to be an accounting salary rate. Its purpose is to make scarce owner/manager time visible in comparisons.

---

## 6. Organic content behaves partly like an asset, not only a campaign

A paid impression usually disappears when spending stops.

Some organic work can continue producing value:

- store listing improvements;
- evergreen documentation;
- searchable blog posts;
- high-quality community answers that remain discoverable;
- product comparison/help pages;
- FAQs;
- referral mechanisms;
- review accumulation;
- reusable release-note structures.

This does **not** mean organic content always compounds.

Some work decays quickly:

- transient social-feed posts;
- time-sensitive market commentary;
- community posts removed by moderation;
- platform-dependent content with weak searchability;
- material tied to obsolete product behavior.

### Asset-style evaluation

For durable content, track:

- creation cost;
- maintenance cost;
- useful lifetime;
- qualified visits over time;
- assisted store visits/installs;
- support questions deflected;
- citations/shares/backlinks where relevant;
- product changes that make the asset obsolete.

A post with low first-week installs can still outperform frequent short-lived social posting if it repeatedly reduces a high-value search problem for years.

---

## 7. The scarce resource in zero-paid marketing is usually attention and labor

When cash spend approaches zero, the optimization problem changes from:

`Where should we spend media budget?`

into:

`Where should we spend scarce owner/marketing/design/web/community hours?`

### Time-budget portfolio

A weekly or monthly organic marketing plan should assign explicit capacity across:

- store optimization;
- owned content;
- third-party community participation;
- owned community moderation;
- selective social;
- review/referral operations;
- partnerships;
- measurement/analysis;
- product-feedback synthesis.

This prevents a visible but low-value platform from consuming unlimited effort merely because no invoice is generated.

---

## 8. Marginal return matters more than historical average

A channel can look good historically while the next hour of effort is poor.

Examples:

- first 20 high-quality subreddit contributions may establish credibility;
- the 200th repetitive post may add almost no new relevant reach;
- first complete store rewrite may materially improve clarity;
- endless minor keyword edits may produce little incremental value;
- an evergreen guide may continue working with minimal maintenance;
- a social feed may require constant production just to maintain the same reach.

### Foundation decision rule

Ask:

> What does the **next unit of effort** plausibly add?

not only:

> What did this channel produce in total?

This introduces diminishing returns and saturation into cash-light marketing.

---

## 9. Channel exit rules are mandatory

A channel should not continue indefinitely because it is “free.”

Possible exit/reduction triggers:

- relevant-audience concentration is lower than expected;
- qualified store visits remain negligible;
- high labor burden with no durable asset creation;
- repeated anti-spam friction or moderation risk;
- audience overlap means new effort mostly reaches the same people;
- content requires high cadence but produces little learning;
- downstream activation/retention is materially worse than other sources;
- platform rules create unacceptable dependency;
- owner time is better allocated to store, product, documentation, or another community.

A channel can also remain active for learning or reputation even when direct acquisition is low, but that objective must be explicit.

---

## 10. Demand capture and demand creation have different payback shapes

### Capture

Examples:
- store search;
- web search;
- “best tool for X” discussion;
- problem-specific questions.

Usually higher intent and more immediate measurability.

### Creation / education

Examples:
- explaining why ROC tracking is difficult;
- explaining pilot-logbook data portability or workflow risks;
- publishing domain education before the user is actively shopping for software.

May have slower and harder-to-attribute impact but can expand future consideration.

### Relationship maintenance

Examples:
- changelogs;
- release notes;
- educational updates;
- community responses.

Can improve trust, retention, and referral rather than first-touch acquisition.

`MARKETING JUDGMENT` — yhappcom should not demand identical short-term install ROI from all three functions.

---

## 11. Foundation scorecard for cash-light channels

For every channel, record:

| Dimension | Meaning |
| --- | --- |
| Cash spend | Direct external spend |
| Labor hours | Recurring internal effort |
| Production burden | Writing/design/video/engineering burden |
| Relevant audience concentration | Share of reachable people plausibly in target niche |
| Intent | Search/comparison vs passive exposure |
| Trust fit | Whether expertise can be demonstrated credibly |
| Durability | How long the work remains useful/discoverable |
| Marginal reach | New relevant users reached by next effort unit |
| Conversion continuity | Ease of moving from exposure to store/product |
| Activation quality | Whether acquired users reach first meaningful value |
| Retention quality | Whether they continue using the specialist product |
| Learning value | Quality of market/product insight returned |
| Reputation risk | Spam/overpromotion/low-quality-content risk |
| Platform risk | Dependency on rules/algorithms/moderation |
| Maintenance cost | Ongoing burden after initial creation |
| Exit rule | Evidence threshold for reducing/stopping effort |

No weighted total is authoritative until project data justify weights.

---

## 12. MintTap / LogMate preliminary consequences

### MintTap

Verified product behavior in branch 1.0.29 includes YieldMax-style ETF position/dividend/performance tracking, tax-aware views, ROC-related information, splits, and notifications.

`MARKETING HYPOTHESIS` — High-value organic content may come from explaining specialist problems that generic portfolio tools handle poorly or opaquely, but actual user demand/search behavior must be measured.

Potential cash-light strengths to validate:

- App Store / Play Store intent around YieldMax/dividend/ROC tracking;
- YieldMax-focused Reddit/community participation;
- durable explanations of ROC, reverse splits, total performance, and distribution tracking;
- release/update communication where market events change the user's workflow.

### LogMate

Verified product framing emphasizes a pilot logbook, manual-entry completeness, local/on-device core operation, native + tablet/EFB PWA targets, and optional import/export/sync layers.

`MARKETING HYPOTHESIS` — High-value organic distribution may depend more on professional workflow credibility, data ownership/portability, peer recommendations, aviation communities, search, and detailed product documentation than on broad social reach.

Actual pilot-channel concentration and market norms remain OPEN.

---

## 13. Retained Foundation judgment

1. Zero paid media does not imply zero CAC.
2. Owner time is a scarce allocation resource and must be made visible.
3. Organic marketing should be evaluated against activated/retained relevant users, not only reach or installs.
4. Durable assets and transient posts have different economics.
5. Marginal return and channel saturation matter.
6. Every “free” channel needs an exit rule.
7. Acquisition and retention are economically linked.
8. Long retention is valuable only when it produces ongoing user/business value; duration alone is not profitability.
9. Current yhappcom strategy should optimize relevant niche penetration with low cash spend, not maximize gross awareness.
10. The next stage of this reasoning is ad-supported unit economics: retained relevant users create monetizable inventory, while ad burden can change retention itself.

---

## OPEN / VALIDATION

- actual MintTap acquisition-source mix;
- MintTap activation and D7/D30 retention by source;
- actual community/store/search contribution;
- owner/marketing labor-time estimates;
- LogMate market/channel concentration;
- LogMate launch acquisition and retention instrumentation;
- useful internal shadow-rate convention;
- product-specific lifetime/ad-revenue value;
- causal effect of specific organic activities;
- attribution between community/blog/store touchpoints.

---

## Sources

- Blattberg, R. C., & Deighton, J. (1996). *Manage Marketing by the Customer Equity Test*. Harvard Business Review. https://hbr.org/1996/07/manage-marketing-by-the-customer-equity-test
- Rust, R. T., Lemon, K. N., & Zeithaml, V. A. (2004). *Return on Marketing: Using Customer Equity to Focus Marketing Strategy*. Journal of Marketing, 68(1), 109–127. https://journals.sagepub.com/doi/10.1509/jmkg.68.1.109.24030
- Reinartz, W. J., & Kumar, V. (2000). *On the Profitability of Long-Life Customers in a Noncontractual Setting*. Journal of Marketing, 64(4), 17–35. https://journals.sagepub.com/doi/10.1509/jmkg.64.4.17.18077
