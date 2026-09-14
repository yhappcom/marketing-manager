# Applied Foundation Exercise 001 — MintTap & LogMate Niche Maps

Status: **FIRST PASS — evidence-bounded, not market-size complete**  
Reviewed: 2026-09-15

## Purpose

Apply Stage 1 theory to the two current products without copying one channel strategy into the other.

This exercise separates:

- `VERIFIED PRODUCT TRUTH`;
- `OBSERVED MARKET/COMMUNITY EVIDENCE`;
- `MARKETING HYPOTHESIS`;
- `OPEN / VALIDATION`.

No audience-size, conversion, retention, or revenue number is invented where evidence is absent.

---

# A. MintTap niche map

## A1. VERIFIED PRODUCT TRUTH

Source: `yhappcom/yieldmax_tracker`, branch `1.0.29` README + Korean user guide.

MintTap is a Flutter/Firebase app for YieldMax-style ETF tracking across Android, iOS, and web.

Verified functions include:

- position/holding tracking;
- cost basis;
- realized/unrealized P&L;
- dividend/distribution flows;
- tax-aware views;
- ROC-related views;
- total performance and recovery/payback views;
- split/reverse-split history;
- distribution calendar / ex-date / pay-date information;
- expected cash-flow and yield views;
- notifications;
- Google Mobile Ads in the product stack.

### Product-level implication

MintTap is not merely “a stock tracker.” Its differentiated problem-space is concentrated around high-distribution YieldMax-style products whose distributions, ROC, cost basis, reinvestment, splits, and total-return interpretation can create tracking complexity.

This is a product-structure inference grounded in verified functionality, not yet a measured positioning claim.

---

## A2. OBSERVED MARKET / COMMUNITY EVIDENCE

### Dedicated YieldMax community exists and is active

Current/recent Reddit evidence confirms an active `r/YieldMaxETFs` community discussing YieldMax fund choices, distributions, NAV decay, risk, and strategy.

Examples:

- April 2026 discussion: “Why YieldMax?” includes comparisons with NEOS/Roundhill and discussion of sustainability/NAV erosion.
  - https://www.reddit.com/r/YieldMaxETFs/comments/1si84v9/why_yieldmax/
- Historical scale checkpoint: August 2025 moderator update stated 70K members and very high activity/visits at that time. This is **historical evidence only**, not a current 2026 member count.
  - https://www.reddit.com/r/YieldMaxETFs/comments/1mv2itx

### Adjacent broader dividend communities also discuss YieldMax

Recent/current examples in `r/dividends` include skepticism, experience reports, risk questions, and comparisons.

Examples:
- July 2026 one-year YieldMax experience with distribution yield and IRR discussion.
- May 2026 warning/discussion around whether investors “need” YieldMax.

These establish that the audience is not confined to the dedicated subreddit, while sentiment outside the core community can be substantially more skeptical.

### Official YieldMax information itself creates recurring tracking/education objects

Current official YieldMax pages publish:

- per-fund distribution history;
- declaration/ex/payable dates;
- estimated ROC percentages;
- distribution schedules;
- explicit warning that estimated ROC can later change classification.

Examples:
- https://yieldmaxetfs.com/roc-center/
- https://yieldmaxetfs.com/distribution-schedule/
- individual fund pages such as YMAX.

### Observed implication

The niche generates repeated information events around:

- distributions;
- ROC estimates/final classification;
- ex/pay dates;
- total-return vs payout interpretation;
- NAV erosion concerns;
- reinvestment decisions;
- fund comparisons.

MintTap's verified product features overlap materially with these recurring user information needs.

---

## A3. Likely audience layers — HYPOTHESES TO VALIDATE

### Core Layer 1 — active YieldMax holders

Possible needs:
- accurate position/dividend tracking;
- understanding total performance rather than payout alone;
- ROC/cost-basis awareness;
- handling splits/reinvestment;
- monitoring expected/actual distributions.

### Layer 2 — multi-high-income ETF users

Observed community discussions often compare YieldMax with NEOS, Roundhill, Rex and other income products.

Hypothesis:
- some users may value a tracker that begins with YieldMax specificity but eventually supports adjacent high-distribution workflows.

Do not broaden product positioning without product confirmation.

### Layer 3 — prospective YieldMax investors

Possible needs:
- education and scenario understanding before commitment;
- distinguishing distribution yield from total return;
- understanding ROC and NAV effects.

MintTap may or may not be designed for pre-investment analysis; this requires product-positioning validation.

---

## A4. High-value trust signals to validate

Likely trust signals for this niche:

- exact handling of distributions;
- correct split/reverse-split adjustment;
- transparent ROC treatment;
- explicit distinction between estimated and final ROC;
- clear treatment of taxes/cost basis;
- calculations that users can audit;
- transparent limitations rather than “magic” returns;
- current data timing and provenance;
- release notes when calculation logic changes.

These are hypotheses derived from product structure and observed market discussion. User research should rank them.

---

## A5. Candidate zero/low-cash channels

### Tier A candidate — App Store / Google Play

Why:
- direct high-intent evaluation surface;
- product already exists as a mobile app;
- can communicate specialist relevance before install.

Need to validate:
- actual search terms;
- current store listing performance;
- platform-specific organic discovery.

### Tier A candidate — dedicated YieldMax Reddit/community

Why:
- confirmed concentration of relevant audience;
- recurring domain-specific questions;
- strong product-feedback potential.

Risk:
- promotion-first behavior can damage trust;
- moderator/community rules must be checked at time of use;
- echo-chamber bias.

### Tier A/B candidate — owned blog / searchable educational content

Potential durable topics:
- estimated vs final ROC;
- reverse-split accounting;
- distribution vs total-return interpretation;
- reinvestment/cost-basis tracking;
- how to audit YieldMax performance.

Strategic mechanism:
- reduce search/uncertainty;
- build domain credibility;
- create durable search assets.

### Tier B candidate — adjacent dividend/income communities

Why:
- YieldMax discussions occur there.

Risk:
- skepticism toward YieldMax may be high;
- product promotion could be interpreted as promoting the investment product itself rather than a neutral tracker;
- content must remain informational and not investment advice.

### Selective SNS — OPEN

No current evidence yet justifies a specific social platform as a primary MintTap channel.

Do not create broad social operations before confirming audience concentration and content fit.

---

## A6. Channels to reject by default until evidence changes

- mass generic social reach;
- broad finance audiences with little YieldMax/high-income ETF relevance;
- paid acquisition as default;
- virality-oriented content detached from product credibility;
- repetitive self-promotion inside investment communities.

---

## A7. MintTap measurement priorities

Before scaling any channel, instrument/observe:

- source → store visit;
- source → install;
- first portfolio/transaction completion as candidate activation;
- continued use around distributions/ex/pay dates;
- D7/D30 retention;
- ad revenue per active/retained user;
- community-assisted acquisition where last-click is unavailable;
- review/referral behavior;
- high-value content queries that precede installation.

Actual activation event must be chosen from product telemetry, not this exercise alone.

---

# B. LogMate niche map

## B1. VERIFIED PRODUCT TRUTH

Source: `yhappcom/logmate` README.

LogMate is a personal Pilot Logbook.

Verified framing includes:

- manual entry alone must be sufficient to use the product;
- import is optional;
- core work is local/on-device;
- Firebase Auth / owner Sync is a cloud-minimal connectivity layer above local operation;
- native iOS/Android and tablet/EFB PWA are first-class targets;
- semantic/calculation/projection outcomes should remain platform-independent;
- optional import/export, backup, owner binding and sync are separate capabilities.

### Product-level implication

LogMate competes not only with other logbook apps but also with:

- paper logbooks;
- spreadsheets;
- EFB-integrated logbooks;
- incumbent aviation apps already used for other functions;
- airline roster/import ecosystems.

This status-quo competition is visible in current pilot community discussions.

---

## B2. OBSERVED MARKET / COMMUNITY EVIDENCE

### Pilots actively ask for logbook recommendations

Recent 2026 Reddit threads across `r/flying`, `r/AskAPilot`, `r/AirlinePilots`, and related aviation communities show repeated comparison of:

- LogTen;
- ForeFlight;
- MyFlightbook;
- CrewLounge PILOTLOG;
- Wingman;
- spreadsheets/paper;
- other niche logbook products.

Representative current threads:

- February 2026 `r/flying` — “Which digital logbook should I use?”
  - https://www.reddit.com/r/flying/comments/1qwf6kw/which_digital_logbook_should_i_use/
- April 2026 `r/AskAPilot` — “What logbook app?”
  - https://www.reddit.com/r/AskAPilot/comments/1sctgma/what_logbook_app/
- June 2026 `r/flying` — pilot praised support helping import non-standard files after prior software disappeared.
  - https://www.reddit.com/r/flying/comments/1u6hd3d/pilot_logbook_app/
- August 2026 `r/flying` — discussion on paper versus electronic logbooks for airline career progression.
  - https://www.reddit.com/r/flying/comments/1w3eft5/are_paper_logbooks_dead/

### Repeated decision criteria observed

Community comments repeatedly mention:

- free/price sensitivity;
- cross-platform access;
- exportability;
- backup safety;
- import/migration ease;
- support responsiveness;
- airline interview/acceptance concerns;
- report/export quality;
- avoiding vendor lock-in;
- airline-roster imports;
- ease of use.

These are **observed discussion themes**, not ranked market-wide preferences.

### Competitor/product evidence supports import/export as a real category feature

Current first-party evidence:

- ForeFlight supports CSV export and recurring email export in CSV/PDF.
  - https://support.foreflight.com/hc/en-us/articles/215600817-Is-it-possible-to-export-ForeFlight-Logbook-data
- CrewLounge states PILOTLOG can import flight data from numerous airline crew systems and from more than 50 other logbook apps / spreadsheet data.
  - https://support.crewlounge.aero/support/solutions/articles/24000033763
  - https://support.crewlounge.aero/support/solutions/articles/24000034487

### Observed implication

Data portability, migration, backup, and airline workflow integration are not edge concerns in this category. They appear repeatedly in both competitor functionality and community discussion.

---

## B3. Likely audience layers — HYPOTHESES TO VALIDATE

### Core Layer 1 — airline/professional pilots maintaining personal records

Possible needs:
- quick accurate logging;
- cumulative totals;
- multi-device access;
- backup/export;
- roster/system import;
- proof/report preparation;
- reliable long-term data ownership.

### Layer 2 — pilots transitioning into airline careers

Observed discussions suggest concern about:
- airline applications/interviews;
- converting paper/existing electronic records;
- presenting totals/reports cleanly.

### Layer 3 — existing digital-logbook users dissatisfied with incumbent cost/workflow

Possible triggers:
- subscription price increases;
- platform limitations;
- poor import/export;
- software abandonment;
- support issues;
- desire for local/offline control.

Do not position against any named competitor without stronger comparative product evidence.

---

## B4. High-value trust signals to validate

Likely trust signals:

- clear data ownership/export story;
- reliable backup/restore;
- transparent offline/local behavior;
- accurate calculations/totals;
- import auditability and duplicate handling;
- support for professional pilot workflows;
- continuity across phone/tablet/PWA;
- visible long-term maintenance commitment;
- strong release/support response;
- explicit limitations and supported import sources.

### Important category lesson

One recent community example praised a replacement logbook partly because support helped migrate a non-standard file after a prior provider went out of business.

`MARKETING HYPOTHESIS` — In this niche, durability of data and developer support may be part of the product's trust proposition, not merely post-sale support.

---

## B5. Candidate zero/low-cash channels

### Tier A candidate — App Store / Google Play

High-intent users directly compare logbook apps.

Store page must likely answer quickly:
- who it is for;
- offline/local capability;
- platform coverage;
- import/export/backup status;
- core logging workflow;
- price/ad model when finalized.

### Tier A candidate — pilot communities

Potential surfaces:
- `r/flying`;
- `r/AirlinePilots`;
- regional/EASA pilot communities;
- airline/professional forums where product discussion is permitted.

Mechanism:
- research + credibility + support + recommendation discovery.

Risk:
- self-promotion rules;
- professional skepticism;
- community fragmentation by region/regulation/career stage.

### Tier A/B candidate — searchable owned documentation/content

Potential durable questions:
- digital vs paper logbook;
- backup/export best practices;
- migrating from spreadsheets;
- preserving data ownership;
- preparing reports/totals;
- importing airline roster/system data;
- offline/EFB workflows.

### Partnerships / professional referrals — later validation

Potential sources:
- flight schools;
- pilot associations;
- training communities;
- airline-related peer groups;
- instructors.

No priority claim yet; actual accessibility and trust economics need research.

### Generic SNS — OPEN / low default priority

Current evidence supports search/community/recommendation behavior more directly than generic entertainment-oriented social reach.

Do not infer zero value; verify where professional pilots actually use social platforms for tool discovery.

---

## B6. Channels to reject by default until evidence changes

- generic productivity-app audiences;
- broad aviation-fan audiences that are not pilots/logbook users;
- high-cadence social content with no workflow value;
- promotion that implies regulatory/airline acceptance without verified legal/operational evidence;
- paid acquisition as default.

---

## B7. LogMate measurement priorities

Potential funnel:

`relevant pilot discovery → store/product evaluation → install → first valid flight entry/import → meaningful total/report view → continued logging → export/backup/sync trust → retention/referral`.

Candidate measures:
- first valid entry;
- number of flights/records entered/imported;
- return to log after next flying cycle;
- export/backup use;
- retention by pilot segment/source;
- migration completion;
- support issues during import;
- referrals/recommendations.

No final activation definition is claimed yet.

---

# C. Cross-product comparison

| Dimension | MintTap | LogMate |
| --- | --- | --- |
| Core niche | YieldMax-oriented investors | professional/airline pilots |
| Status-quo alternatives | brokerage, spreadsheet, generic tracker | paper, spreadsheet, ForeFlight/LogTen/MyFlightbook/CrewLounge/etc. |
| High-frequency domain events | distributions, ROC updates, ex/pay dates, price/splits | flights, rosters, duty cycles, career/report milestones |
| Trust emphasis | calculation/tax/ROC/total-performance accuracy | record integrity, backup/export, portability, professional workflow |
| Strong current community evidence | dedicated YieldMax subreddit + adjacent dividend communities | distributed aviation/pilot communities |
| Content durability | mix of evergreen + time-sensitive distribution events | strong evergreen workflow/migration/backup content potential |
| Likely key acquisition mode | concentrated investor communities + store/search/content | professional recommendation + search/store + workflow content |
| Main community risk | investment-promotion perception / echo chamber | self-promotion / regulatory-professional credibility |
| Generic mass social priority | low until proven | low until proven |

---

# D. Transfer conclusion

The transferable method is:

`verify product truth → map status quo → observe real community questions → identify trust/switching costs → identify concentrated channels → define measurement → test`.

The channel playbook is **not** transferable as-is.

MintTap's concentrated YieldMax community structure is materially different from LogMate's distributed pilot/professional ecosystem.

---

# E. OPEN / next validation

## MintTap
- current App Store / Play Store listing and search visibility;
- exact subreddit/community self-promotion rules;
- current r/YieldMaxETFs scale/activity metrics;
- user search-query data;
- user acquisition source mix;
- activation/retention;
- ad cohort economics;
- competitors used specifically for YieldMax portfolio tracking.

## LogMate
- priority launch geography;
- FAA/EASA/other regulatory positioning boundaries;
- actual airline-pilot vs student/general-aviation target mix;
- current competitor pricing and feature matrix;
- community self-promotion rules;
- search demand;
- import-source priorities;
- ad model at launch;
- pilot interviews/observational validation.
