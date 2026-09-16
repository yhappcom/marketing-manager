# 047 — MintTap Activation Barrier Cross-Functional Diagnosis

Date: 2026-09-16
Status: LIVE PRODUCT REMEDIATION / CROSS-FUNCTIONAL DIAGNOSIS
Product ref: `yhappcom/yieldmax_tracker` branch `1.0.29`, audited head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`

## Purpose

MintTap has now been publicly released for roughly four months. The product owner reports that only two accounts show sustained use and one of those is the owner's separate account, leaving one currently known external sustained user. The install denominator and complete historical retention cohort are not available, so this observation must **not** be converted into a retention percentage.

The operating question is therefore not initially "how do we acquire more users?" but:

**Is the current path from install -> product understanding -> own-data setup -> first useful portfolio result too expensive for a niche YieldMax investor?**

This diagnosis combines:

- Marketing Manager funnel/activation evidence;
- exact MintTap 1.0.29 source inspection;
- Design Studio's existing MintTap whole-app audit and Home alternatives;
- Web Manager's current governance/cross-surface boundary;
- Software Engineering Studio maturity limits;
- current public App Store evidence;
- current first-party aggregate measurement limits.

It separates observed facts, professional diagnosis, hypotheses and remediation proposals.

---

## 1. Evidence boundary

### Direct owner observation

- sustained-use accounts observed by owner: 2;
- one is the owner's separate account;
- known external sustained users: 1.

This is extremely important product evidence, but the total install cohort is not yet known. Therefore no numerical retention rate is claimed.

### Live measurement state

The first privacy-filtered Firestore snapshot contains 129 readable user profiles, but `lastActiveAt` exists for only 7 because that telemetry was introduced in the recent 1.0.29 line. 122 missing values cannot be called inactive. GA4 remains blocked by property-discovery permission.

Therefore current telemetry cannot locate historical drop-off precisely.

Canonical rule remains:

`Telemetry Coverage Before Retention`.

### Design expertise state

Design Studio's MintTap source audit independently diagnoses:

- information hierarchy rather than information deficit as the central product-design problem;
- compactness/accessibility pressure;
- expert workflows that need progressive disclosure;
- onboarding that is **configuration-first rather than value-first**;
- Home as the first redesign target;
- Browse/demo mode as a strategic asset worth strengthening.

Design Studio has Stage 1/2 PASS in Layout & Interaction and has an existing MintTap-specific audit branch. Human task evidence remains explicitly unproven and must be collected in the real product.

### Engineering expertise state

Software Engineering Studio is still in Foundation; no specialist has passed Foundation. Its current work is valuable for contracts, state ownership and future implementation review but is not treated as a mature product-UX verdict. Exact MintTap code/Codex evidence remains the primary engineering evidence for this remediation.

---

# 2. Current first-value path reconstructed from 1.0.29

## 2.1 Welcome

Source-confirmed:

- prominent Apple / Google / email authentication actions;
- a lower-emphasis Browse Demo text action;
- one short category statement that MintTap is for YieldMax ETFs;
- no richer proof sequence before sign-in.

Positive: users can view the product without an account.

Risk: the main commitment actions appear before the product has strongly demonstrated why the user should invest setup effort.

## 2.2 Browse/demo

Source-confirmed:

- Browse mode loads a populated demo Home and detail data;
- Browse mode is read-only;
- attempting Add Transaction or other protected editing actions shows the browse read-only message rather than starting an explicit "track my portfolio" conversion flow;
- settings/exit-demo paths return to Welcome.

Diagnosis:

Browse mode solves **comprehension before commitment**, but its natural conversion moment is weak. A user who sees value and attempts to act is told the mode is read-only instead of being carried forward with their intent preserved.

## 2.3 Authentication gate

Source-confirmed:

- normal editable usage is authenticated;
- password/email users can be blocked until email verification;
- signed-in users without completed onboarding are routed to onboarding;
- browse mode bypasses the normal auth/onboarding gate.

The email-verification path may add friction for some users, but current evidence does not show auth-provider mix or abandonment and it is not yet a P0 change candidate.

## 2.4 Onboarding

Source-confirmed onboarding currently exposes before Home:

- language;
- country;
- default currency;
- portfolio name;
- tax rate;
- notification settings.

Country/currency/tax have locale-based defaults, but they remain visible setup objects. Portfolio name is required before submit.

Most importantly, `initState()` schedules `requestPermissionIfNeeded()` for notifications immediately on onboarding entry.

Diagnosis:

This is a high-confidence activation-friction candidate. The user has not yet created or imported any holdings and therefore has not experienced the benefit of ex-dividend/payment reminders when the permission request appears.

Apple's current HIG privacy guidance recommends requesting protected access only when the need is clear and ideally when the user invokes the feature that needs it. The current flow asks before that context exists.

## 2.5 Empty Home

Source-confirmed:

- after onboarding, the user reaches Home;
- if `summary.positions.isEmpty`, the first-transaction tutorial highlights Add Transaction;
- the tutorial's primary action opens `EditTransactionScreen`;
- the tutorial does **not** offer Import as a peer first-data path.

Diagnosis:

The app's first-use guidance assumes a manual transaction is the canonical bootstrap method.

This is poorly aligned with the likely situation of an existing YieldMax investor who may already have months/years of purchase history, reinvestments and split-adjusted records.

## 2.6 Import discoverability

Source-confirmed:

- transaction import exists and is sophisticated: CSV/XLSX, preview, validation, duplicate/error handling and import history;
- however the entry point is a text action in the Add Transaction screen AppBar;
- it appears only after the user has already followed the manual `Add Asset` path.

Current public App Store description enumerates many product features but does not mention CSV/XLSX transaction import in its main description, even though 1.0.27 release notes mention the feature.

Diagnosis:

MintTap currently has a strong friction-reduction capability without making that capability part of the acquisition or first-value story.

This is a **cross-surface discoverability gap**:

`Store promise -> onboarding -> empty Home -> first-data choice`

fails to surface the lowest-effort path for users with an existing portfolio history.

## 2.7 First manual transaction contains an avoidable extra step

Source-confirmed chain:

- Home defaults to `All Portfolios`;
- the empty-state tutorial therefore opens Add Transaction with `initialPortfolioId = null`;
- onboarding has already created the user's initial portfolio;
- `EditTransactionScreen._loadPortfolios()` does not auto-select the only portfolio when no preferred/initial portfolio ID is supplied;
- instead `_selectedPortfolioId` remains null;
- a second tutorial then highlights the portfolio selector.

Diagnosis:

For a one-portfolio new account, the product asks the user to choose the only possible portfolio before entering the actual investment data. This is a low-risk, code-verifiable friction defect.

## 2.8 Manual buy itself has useful automation that should be preserved

Source-confirmed:

- date defaults to today;
- ticker options/search exist;
- price and exchange-rate suggestions can be loaded from market data;
- the save predicate can use suggested price/FX when explicit values are absent.

Therefore the first-transaction engine itself is not inherently too primitive. The strongest opportunity is to reduce **surface and routing friction**, not replace the financial engine.

---

# 3. Current post-activation Home problem

Design Studio's exact-ref audit finds that Home simultaneously acts as portfolio selector, portfolio/performance/income/cash-flow dashboard, navigation hub, positions list, ROC entry and ad surface.

Its central diagnosis:

> MintTap has an information-hierarchy problem, not an information-deficit problem.

The current Home also places the inline ad between the summary and positions. This interrupts the natural explanatory chain:

`portfolio result -> holdings that explain the result`.

Design Studio compared three Home architectures and preliminarily recommends **Option B — Decision-First Portfolio Summary**:

1. portfolio value;
2. total performance;
3. income/recovery;
4. holdings;
5. income trend;
6. ROC/tax.

This is not yet human-validated, but it is the strongest cross-functional structural proposal currently available.

---

# 4. Current Store-side diagnosis

Current public App Store evidence for 1.0.29 remains broadly feature-list oriented. The description says the app tracks YieldMax ETFs and then enumerates portfolio records, payout history, schedules, dates, tax settings, gross/net, currencies, ROC/reverse splits, multilingual support and account sync.

Observed weaknesses relative to the new Store Proof framework:

- limited outcome-first narrative;
- the specialist reason to endure setup is not strongly demonstrated in the description;
- transaction import is not promoted in the main description;
- the page currently has too little ratings/review evidence to use social proof as a major trust mechanism;
- the privacy disclosure includes tracking/advertising-related data, which may be a trust consideration for a finance-category product but has not been proven to affect conversion.

Do not solve the product problem by rewriting Store copy alone. A stronger promise with the same first-use friction would increase the number of users reaching a weak activation flow.

---

# 5. Primary diagnosis

The current strongest hypothesis is:

**MintTap's immediate bottleneck is activation / time-to-first-value, not a simple lack of acquisition.**

Evidence supporting this hypothesis:

1. owner-observed sustained external use is effectively one known user;
2. onboarding is configuration-first and asks notification permission before value;
3. new-account empty state privileges manual transaction entry;
4. the robust Import capability is one level deeper and absent from the main Store story;
5. the first manual transaction asks a one-portfolio user to select the only portfolio;
6. Browse mode demonstrates value but does not convert natural editing intent directly into setup;
7. after first data, Home immediately exposes a very dense dashboard with an ad separating summary from positions.

Causal confidence remains limited because historical GA4 funnel telemetry and structured first-use observation do not yet exist.

Therefore the correct operating posture is:

`reduce obvious reversible friction -> instrument first value -> observe target users -> then scale acquisition`.

---

# 6. Remediation architecture

## P0-A — Turn Browse Demo into a conversion bridge

Preserve demo mode.

Change protected-action behavior from:

`try Add -> read-only message`

into a context-preserving handoff such as:

`try Add/Import -> "Track your own portfolio" -> sign in -> minimal setup -> resume first-data choice`.

Do not require the user to rediscover the task after authentication.

Low/medium implementation risk because Browse mode and auth routes already exist; intent-resume design needs engineering validation.

## P0-B — Replace configuration-first onboarding with minimum-required setup

Keep technically required invariants, but minimize decisions before first value.

Recommended principle:

- infer language/country/currency from existing defaults;
- expose a concise confirmation/correction surface rather than presenting every default as a task;
- create/use an initial portfolio with minimal naming burden where product requirements permit;
- apply the recommended tax rate by default and make adjustment contextual/later unless legal/calculation requirements require explicit confirmation;
- remove notification permission from onboarding entry;
- ask notification permission only after the user has holdings and can understand the ex-dividend/payment reminder benefit.

Important engineering constraint: default currency currently has immutability behavior. Do not simply move currency configuration after onboarding without reviewing calculation/data invariants.

## P0-C — Create a first-data chooser before an empty dashboard

For a new authenticated account with no positions, present two clear primary jobs:

### Existing YieldMax investor

`Import my transactions` — CSV/XLSX existing implementation.

### Simple/new portfolio

`Add my first holding` — streamlined manual buy.

A third low-priority action may allow continued exploration/help, but it should not compete with the two activation routes.

This is more aligned with the real segmentation than one universal "Add Asset" tutorial.

## P0-D — Remove redundant portfolio selection for the single-portfolio case

If exactly one portfolio exists and no explicit initial selection was supplied, auto-select it in the first-data flow.

Retain manual selection when multiple portfolios exist.

This is one of the clearest low-risk quick wins because current code explicitly leaves the sole choice unselected.

## P0-E — Instrument semantic first value in the remediation release

Implement/verify:

`first_portfolio_value_ready_v1`

only when normal authenticated Home calculation succeeds and `summary.positions.isNotEmpty`.

For the first-data fork, one additional low-cardinality technical dimension/event may record `manual` vs `import` path if privacy review approves. Do not attach ticker, quantity, amount, portfolio name, P&L, dividend, tax or ROC values.

Without this, a redesign can look cleaner while remaining impossible to evaluate.

---

# 7. P1 — Make the first useful Home understandable

Adopt Design Studio Option B as the **prototype baseline**, not yet as a proven production winner.

Target narrative:

`portfolio state -> total outcome -> income/recovery -> holdings -> income trend -> specialist ROC/tax`.

Key changes to validate:

- one dominant portfolio answer rather than four equal metrics;
- integrated `View` disclosure rather than multiple tiny persistent toggles;
- holdings earlier as the explanation of portfolio state;
- ROC/tax as specialist depth rather than simultaneous top-level competition;
- relocate Home ad after Holdings or another complete semantic block.

The aim is not to delete advanced data. It is progressive disclosure.

---

# 8. P1 — Build a meaningful return loop after first value

Existing product capabilities already provide return reasons:

- ex-dividend dates;
- payment dates;
- payout history;
- current/estimated distributions;
- calendar;
- ROC/final ROC;
- price changes.

Do not invent gamification before exploiting these real recurring jobs.

Recommended sequence:

1. user sees own portfolio result;
2. app explains one future/periodic reason to return;
3. only then offer relevant notification permission;
4. Home makes the recurring answer visible without requiring deep navigation.

Future research may test a lightweight "what changed / what is next" return block, but this is not yet specified as a build requirement.

---

# 9. P1 — Align Store/web promise with the activation path

After the in-app activation path is fixed, update Store/owned-web proof around the actual low-friction value path.

Immediate content gap to address:

- CSV/XLSX Import should be evaluated as a first-class Store proof because it directly reduces setup cost for existing YieldMax investors.

Use the Store Proof Triad:

1. Recognition: built specifically for YieldMax portfolios;
2. Outcome: visible portfolio/distribution/recovery result;
3. Specialist proof: e.g. ROC/reverse-split-aware tracking or transaction import, depending route/product evidence.

Do not expand acquisition aggressively until the activation path can carry the traffic.

---

# 10. Trust / advertising remediation

Design Studio correctly flags the current Home inline ad between summary and positions as semantically disruptive.

Company monetization policy already prefers sustainable ad inventory over intrusive placement.

Recommendation:

- move the Home inline ad after a complete product-value block;
- avoid ads inside setup/import/review/financial-write flows;
- maintain stable layout on load/fail;
- do not add more ad inventory while first-value/retention evidence is weak.

Separately audit whether the current App Store privacy declarations and actual AdMob configuration remain exactly aligned. Never weaken a privacy disclosure merely to improve conversion.

---

# 11. Cross-functional collaboration plan

## Marketing Manager — lead for activation economics and evidence

Own:

- activation funnel and first-value definition;
- first-data segmentation (Import vs Manual);
- Store/route promise;
- sparse-user research plan;
- experiment/measurement gates;
- decision to scale/pause acquisition.

## Design Studio — lead for interaction/hierarchy implementation specification

Ask Layout/Interaction to own:

- onboarding recomposition;
- first-data chooser;
- demo -> real-portfolio handoff;
- empty-state design;
- Option B Home prototype;
- ad relocation/layout stability;
- accessibility/large-text validation.

Ask Content Design, within its current Foundation maturity, for a bounded terminology review of:

- first-data chooser labels;
- tax/default explanation;
- import validation/recovery language;
- ROC/payback estimated/final distinctions.

Do not treat Content Design as fully mature expert certification yet.

## Web Manager — lead for cross-surface expectation setting

Web Manager curriculum is mature, but `minttap.app` production state remains OPEN until verified.

Ask it to audit/implement after product flow is decided:

- pre-install explanation of what the user needs to start;
- import template/setup guide;
- Store/web source-message continuity;
- support/FAQ for ROC, reverse splits, tax and data privacy;
- links/route integrity.

Do not let the website promise a simpler setup than the app actually delivers.

## Software Engineering Studio / product Codex — implementation/invariant review

Software Engineering Studio remains Foundation-stage, so use it for bounded review rather than final architectural authority.

Engineering questions:

- which onboarding fields are technically required before calculations?
- can sole-portfolio auto-selection be safely implemented without state ambiguity?
- how should demo intent resume across auth without leaking sample state?
- what invariants make default currency immutable today?
- can Import be launched directly from empty Home/onboarding completion without duplicating workflow logic?
- where should semantic activation fire exactly once per account/event-definition?

Exact product code/Codex validation outranks abstract architecture advice.

---

# 12. Human validation plan — zero-cash and privacy-safe

The current user base is too small to rely only on passive analytics. Use a bounded qualitative activation study before a broad redesign rollout.

Target:

- 5–8 YieldMax investors if recruitable through permission-respecting community channels;
- include both investors with substantial existing transaction history and simpler/newer portfolios;
- do not require participants to expose their real investment amounts; provide sanitized/test import files if needed.

Tasks:

1. Explain what you think MintTap does from Welcome/Store.
2. Explore the demo.
3. Decide to track your own portfolio.
4. Set up an account/profile.
5. Add existing data using whichever path feels natural.
6. Tell us when the app first becomes useful to you.
7. Find total performance, cumulative distributions and next/period income.
8. Explain what would make you reopen the app next week/month.

Capture:

- time to first useful result;
- hesitation points;
- abandoned/ignored controls;
- whether Import is discovered unprompted;
- wrong turns/backtracking;
- words users use for the job/problem;
- whether demo creates confidence or merely curiosity;
- whether Home's primary answer is understood correctly.

Do not ask only whether users "like" the design.

---

# 13. Suggested remediation sequence

## Release tranche 1 — activation rescue / relatively reversible

1. defer onboarding notification permission;
2. auto-select sole portfolio;
3. expose Import as a peer first-data path on empty Home;
4. convert Browse protected-action attempts into an explicit sign-in/setup handoff;
5. add/verify first-value instrumentation;
6. move Home ad after a complete semantic block if low implementation risk.

## Release tranche 2 — structural UX

1. simplify/progressively disclose onboarding configuration;
2. prototype + validate Option B Home;
3. simplify normal Buy surface while retaining expert options;
4. improve empty/loading/error hierarchy;
5. contextual notification invitation after first value.

## Release tranche 3 — acquisition re-expansion

After first-value evidence improves:

1. update Store Proof Triad;
2. promote Import where evidence supports it;
3. align minttap.app help/landing paths;
4. restart controlled Reddit/blog/source-package acquisition;
5. measure source -> Store -> first value rather than install alone.

---

# 14. Acquisition policy until remediation

Do **not** stop all marketing learning or community participation.

But avoid maximizing installs into the current high-friction path.

Use acquisition mainly for:

- intent research;
- recruiting usability participants;
- validating problem language;
- maintaining community trust;
- small source-package baselines.

The scarce niche audience should not be consumed as unmeasured top-of-funnel traffic while activation remains unresolved.

---

# 15. Decision gates

Before calling the remediation successful, require evidence for:

### Gate A — activation path

- new user can identify Manual vs Import path;
- no irrelevant permission request before first value;
- no redundant single-portfolio choice;
- demo-to-real transition is explicit.

### Gate B — first-value comprehension

- users can identify portfolio outcome and YieldMax-specific value without explanation;
- Home does not present all metrics at equal priority;
- ad does not break the primary reasoning sequence.

### Gate C — measurement

- semantic first-value event is observable;
- time-to-first-value can be estimated;
- onboarding/data-path abandonment can be investigated without collecting investment content.

### Gate D — acquisition restart

- at least a small external-user cohort reaches first value;
- obvious activation defects are no longer dominating observation;
- Store/source promise matches actual setup/value flow.

No arbitrary numeric retention threshold is declared yet because the baseline cohort is not valid.

---

## Sources

Internal exact-ref evidence:

- `yhappcom/yieldmax_tracker` `1.0.29`
  - `lib/screens/welcome_screen.dart`
  - `lib/screens/post_auth_gate.dart`
  - `lib/screens/onboarding_screen.dart`
  - `lib/screens/home_screen.dart`
  - `lib/screens/edit_transaction_screen.dart`
- `design-audit/minttap-1.0.29/docs/design-audit/MINTTAP_APP_DIAGNOSIS.md`
- `design-audit/minttap-1.0.29/docs/design-audit/02_HOME_REDESIGN_OPTIONS.md`
- `design-audit/minttap-1.0.29/docs/design-audit/04_HOME_VALIDATION_MATRIX.md`
- `yhappcom/design-studio/progress/STATUS.md`
- `yhappcom/web-manager/STATUS.md`
- `yhappcom/software-engineering-studio/progress/STATUS.md`

Current public/official references:

- MintTap App Store: https://apps.apple.com/de/app/minttap/id6766008739
- Apple HIG Privacy: https://developer.apple.com/design/human-interface-guidelines/privacy
- Apple Design Principles: https://developer.apple.com/design/human-interface-guidelines/design-principles
- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/

## Reusable lesson

For a specialist tracker whose value depends on importing/entering existing domain history, the key growth surface is not only the Store page.

It is the entire **bootstrap path**:

`recognize specialist value -> safely explore -> commit -> bring existing data -> see own result -> understand why to return`.

A sophisticated product can have low retention because it asks the user to construct the data model before demonstrating enough personal value. The remediation objective is not feature reduction; it is **value before configuration, and progressive disclosure after value**.