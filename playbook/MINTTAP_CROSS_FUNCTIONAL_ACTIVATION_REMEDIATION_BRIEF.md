# MintTap Cross-Functional Activation Remediation Brief

Date: 2026-09-16
Status: ACTIVE HANDOFF BRIEF
Canonical diagnosis: `research/047_minttap_activation_barrier_cross_functional_diagnosis.md`
Product release: MintTap `1.0.29`

## Shared problem statement

Do not frame the current MintTap problem as "we need more promotion".

Owner-observed sustained use is two accounts, one of which is the owner's separate account. Historical install/retention denominator is unavailable, but the current external sustained-use evidence is weak enough that **activation / time-to-first-value must be investigated before acquisition is scaled**.

Shared chain:

`Store/source promise -> demo/commitment -> auth -> minimum setup -> first-data method -> calculated personal value -> understandable Home -> recurring reason to return`

Every team should preserve exact domain/calculation semantics and reduce unnecessary user work around that chain.

---

## P0 shared change candidates

### 1. Notification permission timing

Current: onboarding requests notification permission on entry.

Target: permission invitation only after the user has holdings / sees the actual benefit of ex-dividend or payment reminders.

Owners:
- Marketing: benefit/trigger definition
- Design/Content: contextual invitation
- Engineering: lifecycle/permission implementation

### 2. First-data method selection

Current: empty Home tutorial sends only to Add Transaction; Import appears later in the Add Transaction AppBar.

Target empty-state choice:
- `Import my transactions`
- `Add my first holding`

Owners:
- Marketing: segmentation and measurement
- Design: choice hierarchy/empty-state interaction
- Engineering: route reuse without duplicate import logic
- Web: import help/template documentation after flow is fixed

### 3. Single-portfolio redundant selection

Current: first transaction receives no portfolio ID from `All Portfolios`; Edit Transaction leaves the sole portfolio unselected.

Target: when exactly one valid portfolio exists, select it automatically unless an explicit different state is required.

Owners:
- Engineering: invariant/edge-case verification
- Design: ensure automatic context remains visible and reversible

### 4. Demo-to-real conversion bridge

Current: Browse demo proves value but protected actions generally return a read-only message.

Target: preserve attempted intent:

`demo Add/Import intent -> sign in -> minimum setup -> resume corresponding first-data route`

Owners:
- Marketing: conversion semantics
- Design: transition + disclosure
- Engineering: resume-state contract

### 5. First-value measurement

Required semantic event:

`first_portfolio_value_ready_v1`

Boundary:
- authenticated normal user;
- Home calculation success;
- `summary.positions.isNotEmpty`;
- once per account/event-definition;
- no investment-content parameters.

Optional safe first-data method dimension/event: `manual` / `import`, only if privacy review approves.

Owners:
- Marketing: metric definition
- Engineering: implementation/deduplication

---

## P1 structural change candidates

### Home hierarchy

Prototype baseline: Design Studio **Option B — Decision-First Portfolio Summary**.

Narrative:

`portfolio state -> total outcome -> income/recovery -> holdings -> income trend -> ROC/tax`

Do not call Option B proven until human/runtime validation passes.

### Home ad placement

Current inline ad is between summary and holdings.

Target: after Holdings or another complete semantic block so it does not interrupt `result -> explanation`.

### Progressive onboarding

Goal: minimum decisions before first value.

Engineering must first classify onboarding data:

- hard prerequisite for calculation/data model;
- safe inferred default;
- editable later;
- permission/request that can be deferred.

Do not move default currency casually: current implementation contains immutability behavior.

### Normal Buy progressive disclosure

Preserve market-price/FX automation and expert logic. Reduce simultaneous presentation of optional/expert fields where possible.

---

## Design Studio request

Use existing MintTap audit as canonical design evidence.

Priority deliverables:

1. low-fidelity **activation-flow map** from Welcome through first personal Home value;
2. empty Home first-data chooser;
3. demo-to-real transition;
4. onboarding minimum-required variant;
5. Option B Home prototype;
6. ad-relocation variant;
7. activation validation matrix covering first-use tasks, not only Home comprehension.

Human validation must measure task success/hesitation/backtracking, not preference alone.

Marketing hands over:
- target user jobs;
- activation definitions;
- evidence/claim constraints;
- measurement requirements.

Design owns interaction/layout/visual composition.

---

## Web Manager request

Do not optimize web traffic volume yet.

When assigned live MintTap work, verify actual `minttap.app` production state and then support the repaired activation path with:

1. setup expectations;
2. import template/guide;
3. YieldMax-specific capability explanation;
4. privacy/data handling explanation based only on verified policy;
5. support pages for ROC/reverse split/tax concepts;
6. source -> Store/app promise continuity.

Web copy must not promise less setup than the app actually requires.

---

## Software Engineering / Codex request

Software Engineering Studio remains Foundation-stage. Use it for bounded contract/invariant review; use exact product code/Codex for implementation truth.

Questions to resolve before build:

1. Which onboarding values are hard prerequisites?
2. Can initial portfolio be auto-created/auto-selected safely?
3. Can Import launch directly from empty Home using existing workflow?
4. Can attempted demo action be resumed after auth/onboarding?
5. Why is default currency immutable, and what changes would relaxing onboarding presentation require?
6. Where is the reliable once-per-account activation marker stored?
7. Can notification permission be moved without affecting push token/subscription correctness?

No calculation-engine simplification is requested.

---

## Marketing Manager request

Marketing continues research, but acquisition execution changes temporarily:

- do not maximize installs;
- use community/content primarily for demand evidence and usability recruitment;
- update Store proof only after product bootstrap changes are credible;
- build route/source-package measurement around semantic first value, not download alone.

Near-term research continues independently:
- specialist localization semantics;
- community permission operations;
- Store proof/route evidence;
- source-package live validation when data becomes available.

---

## Zero-cash human validation packet

Recruit 5–8 target YieldMax investors if feasible through permission-respecting channels.

Use sanitized/demo data so no real portfolio disclosure is required.

Core tasks:

1. Understand the app from Store/Welcome.
2. Explore demo.
3. Decide to use own data.
4. Set up minimum profile.
5. Choose Import or Manual naturally.
6. Reach first personal portfolio result.
7. Explain the result.
8. Identify one reason to return.

Record:
- time to first value;
- friction/hesitation;
- import discovery;
- wrong taps/backtracking;
- terminology confusion;
- Home comprehension;
- return intent.

---

## Release ordering

### Tranche 1 — activation rescue
- defer notification permission;
- auto-select sole portfolio;
- surface Import on empty Home;
- demo-to-real conversion bridge;
- first-value telemetry;
- relocate Home ad if safely separable.

### Tranche 2 — structural UX
- progressive onboarding;
- Option B Home;
- normal Buy progressive disclosure;
- contextual notification invite.

### Tranche 3 — controlled growth restart
- Store Proof refresh;
- website/import support;
- controlled community/blog routes;
- source-package measurement to semantic first value.

## Stop condition

Do not scale acquisition merely because Store conversion improves.

Growth restart requires evidence that external target users can reach and understand personal first value without expert assistance.