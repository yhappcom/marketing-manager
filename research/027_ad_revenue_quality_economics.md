# 027 — Ad-Revenue Quality Economics

Validated: 2026-09-16

## Purpose

For an ad-funded niche app, maximize durable ad revenue without turning maximum possible ad insertion into the objective. MintTap and LogMate serve narrow specialist audiences; retained trust and repeated useful sessions are scarce inventory-producing assets.

## Core distinction

`monetizable opportunity != maximum ad insertion`

An ad opportunity exists only when the user's current task state can absorb the format without materially degrading task completion, trust, accessibility, performance, policy compliance, or future use.

A useful economic decomposition is:

`durable ad value ≈ retained qualified users × useful sessions/user × eligible ad opportunities/session × fill/show rate × value/impression`

subject to guardrails for task success, latency, accidental interaction, abandonment, retention, trust, accessibility and policy.

This is an operating model, not a claim that every factor can currently be measured multiplicatively or causally. Unknown terms stay UNKNOWN until first-party evidence exists.

## Why eCPM alone is insufficient

Observed short-run revenue can rise while long-run inventory falls. Adding an interruption can create more impressions today but reduce session completion, return probability or trust. Because future impressions depend on retained use, the relevant comparison is incremental durable revenue, not isolated eCPM.

Do not infer causality from an eCPM/retention correlation. Use the Decision Queue and appropriate experiment/observation route.

## Inventory state model

Classify product states before choosing formats:

1. `TASK_CRITICAL` — user is entering, reviewing or acting on information where interruption risks error or abandonment. Default: no interruptive ad.
2. `TASK_ACTIVE` — meaningful workflow is in progress. Persistent ads require layout/interaction validation; interruptive formats default off.
3. `NATURAL_BREAK` — a completed action or genuine transition where interruption does not block the promised next action. Candidate for carefully tested interruptive inventory.
4. `PASSIVE_REVIEW` — user is reading/browsing without precision interaction. Candidate for non-disruptive in-layout inventory if spacing/performance are safe.
5. `WAITING/LOAD` — user is genuinely waiting for app loading. Candidate for app-open inventory only within platform guidance and after user familiarity.
6. `FIRST_VALUE/ONBOARDING` — user has not yet established product value. Default: protect this state from interruptive monetization.

These labels are company taxonomy, not Google terminology.

## Format constraints validated from current Google guidance

### App-open
Google describes app-open ads as monetization for app load screens/foregrounding. Current implementation guidance says not to show the first app-open ad on the very first app start; best-practice guidance says wait until users have used the app a few times. On cold starts, show only from a loading screen while assets load; if main content is reached before the ad loads, do not show it. Loaded app-open ads expire after four hours.

Operational rule: app-open eligibility is a real waiting state, not merely an app lifecycle event.

### Anchored adaptive banners
Google describes anchored adaptive banners as persistent top/bottom layout inventory while users interact. They occupy real screen area. Placement therefore has an opportunity cost in information density and controls, especially in professional/financial screens.

Operational rule: a banner is not automatically low-cost because it is non-interstitial. Validate viewport loss, safe areas, accessibility, scrolling/layout stability and interaction proximity.

### Banner accidental-click risk
Current AdMob guidance identifies proximity to navigation and other interactive elements as a major source of accidental clicks and recommends against such placement.

Operational rule: CTR is not a success metric when placement can create accidental interaction. Suspicious CTR increases trigger implementation review, not celebration.

### Interruptive/disruptive behavior
Google Play's ads policy and AdMob implementation guidance prohibit deceptive/disruptive implementations and unexpected ads that interfere with normal use. Therefore natural-break eligibility and user expectation are policy/UX constraints, not revenue-optimization knobs that can be ignored when short-run yield is attractive.

## The inventory frontier

For each candidate placement, distinguish:

- `possible inventory`: technically possible impressions;
- `eligible inventory`: impressions compatible with task state and policy;
- `served inventory`: eligible opportunities where an ad is actually requested/shown;
- `quality-adjusted inventory`: served impressions that do not breach defined product guardrails.

Optimization target: expand quality-adjusted inventory, not possible inventory.

## Measurement object

For each placement/format record:

- placement ID and product surface;
- task-state class;
- format;
- eligibility rule and exclusion states;
- opportunities, requests, impressions and revenue using native definitions;
- load/show latency where measurable;
- task-completion/abandonment proxy;
- accidental-click/invalid-activity warning signals;
- session depth and return/retention metrics appropriate to the product cadence;
- complaints/support signals;
- accessibility/layout regressions;
- policy state;
- evidence state and observation window;
- linked Decision Record and stopping/rollback contract.

Do not collapse missing telemetry into zero.

## Decision logic

A candidate placement should normally pass four gates:

1. `POLICY/TRUST GATE` — no deceptive, unexpected, access-limiting or precision-task interference.
2. `ELIGIBILITY GATE` — a defensible task state exists in which the format can be shown.
3. `MEASUREMENT GATE` — revenue and at least the material harm signals can be observed sufficiently to support the decision.
4. `INCREMENTAL VALUE GATE` — evidence supports incremental durable value rather than merely more impressions.

If Gate 1 fails: reject/rollback, not experiment. If Gate 2 fails: no inventory. If Gate 3 fails: instrument/research before aggressive expansion. Gate 4 uses the sparse-niche decision system; INCONCLUSIVE is valid.

## Guardrail asymmetry

Revenue upside and product harm need not require symmetric evidence. A severe policy, trust, accidental-click or workflow harm signal can justify immediate rollback even while revenue uplift remains statistically unresolved. This follows the existing HEALTH LOOK != DECISION LOOK rule.

## MintTap implications

Potentially sensitive states include transaction entry/editing, ROC/tax interpretation, portfolio reconciliation and any precision financial calculation. These should default away from interruptive inventory. Passive dashboard/review surfaces may support carefully designed persistent inventory, but screen-space loss and accidental-click proximity must be tested on actual layouts.

Do not monetize anxiety: a user opening a tax/ROC correction flow is not a natural break merely because a navigation transition exists.

## LogMate implications

Flight/log entry, correction, import conflict resolution, totals verification and certificate/export workflows are precision/professional states. Interruptive ads should default off inside these tasks. A pilot-facing app also has potentially high trust cost from interruption even if no formal safety claim is made.

Pre-launch, actual eligible states, retention cadence and ad tolerance remain UNKNOWN. Do not import MintTap placement results as effect-size evidence; transfer only the task-state/guardrail method until LogMate is validated.

## Revenue expansion ladder

Prefer, in order:

1. improve retained useful use;
2. improve fill/yield of already eligible inventory without worsening UX/policy;
3. improve layout/format fit of existing eligible placements;
4. discover additional genuine eligible states;
5. only then consider higher interruption/frequency, with stronger evidence and rollback controls.

This ordering prevents monetization pressure from bypassing the growth chain.

## Anti-patterns

- optimizing eCPM while ignoring retained-user inventory;
- treating every screen transition as a natural break;
- app-open ad on first use or after content is already interactive;
- banner adjacent to navigation/input controls;
- interpreting high CTR as quality without accidental-click checks;
- increasing frequency because short-run ARPDAU rose while retention is unresolved;
- copying one app's ad frequency into another specialist workflow;
- inventing universal frequency caps without live evidence;
- blocking core app access to manufacture impressions.

## Evidence and source notes

Authoritative sources revalidated 2026-09-16:

- Google for Developers, App open ads (Android/iOS): format purpose, cold-start/loading-screen behavior, first-use guidance, four-hour expiry.
- Google for Developers, Banner ads / anchored adaptive banners (Android/Flutter): persistent layout behavior and adaptive sizing.
- Google AdMob Help, Discouraged banner implementations: proximity to interactive elements and accidental-click/invalid-activity risk.
- Google Play Developer Program ads policy / AdMob implementation guidance: deceptive/disruptive and accidental-click constraints.

Vendor guidance establishes implementation/policy constraints; it does not prove that a placement is economically optimal for MintTap or LogMate. Product-specific effect sizes require first-party evidence.

## Unresolved live evidence

MintTap: actual placement map, task-state map, opportunities/request/impression/revenue funnel, latency, accidental-click signals, retention cadence and placement-level effects.

LogMate: launch workflow, eligible states, ad format policy, pilot tolerance/trust evidence, natural retention cadence and all monetization baselines.

Company: durable ad revenue per retained user, validated harm thresholds, causal effect of frequency/format changes, and whether current analytics can link placement exposure to downstream use without privacy-invasive instrumentation.
