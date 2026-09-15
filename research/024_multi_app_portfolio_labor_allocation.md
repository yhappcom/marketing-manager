# 024 — Multi-App Portfolio Labor Allocation

Last updated: 2026-09-15

## Research question

When direct marketing spend is near zero but Marketing, Design, Web, Engineering and niche traffic are scarce, how should yhappcom allocate effort across MintTap, LogMate and future specialist apps without confusing urgency, app count, or local activity with company-level value?

## Core finding

Zero-cash marketing is capacity-constrained marketing. The scarce economic resources are specialist hours, attention, engineering/design dependencies, owned-surface capacity, community goodwill and qualified experimental traffic.

The allocation objective is therefore not `maximize tasks completed` or `give every app equal time`.

Canonical objective:

`allocate the next constrained unit of labor to the work most likely to improve the current company/product bottleneck and create durable retained-user/ad-bearing throughput, subject to trust, policy, quality and maintenance constraints.`

This adapts a general Theory-of-Constraints principle: improving a non-constraint can leave total system throughput unchanged, while attention to the limiting constraint has the highest leverage. It is an analogy for operating discipline, not evidence that app marketing behaves identically to manufacturing.

## Why equal allocation fails

Equal app shares appear fair but ignore:
- lifecycle stage;
- size/severity of the current bottleneck;
- decision value and evidence quality;
- dependencies on Design/Web/Engineering;
- reversibility and downside;
- maintenance burden after launch;
- whether an app currently has enough traffic/evidence to learn from the work;
- strategic option value of a reusable asset.

An app with ten attractive ideas should not automatically receive more labor than an app with one high-leverage constraint.

## Portfolio unit: decision package, not app

Allocate resources to a **decision package**:

`app × bottleneck × intervention × required capability × expected durable value × evidence/uncertainty × maintenance tail`

This prevents broad labels such as “work on MintTap marketing” from hiding low-value activity.

## Mandatory work classes

Before discretionary ranking, classify work:

### A. Mandatory protection
Policy/compliance, materially false Store/content claims, broken attribution needed for decisions, severe trust/UX harm, critical launch blockers. These can override normal scoring because downside avoidance is not comparable to optional growth work.

### B. Constraint work
Work directly aimed at the currently supported bottleneck in acquisition → activation → retention → sustainable monetization.

### C. Learning work
High-VOI research/experiments that can change a material decision.

### D. Durable asset work
Owned content, Store assets, reusable measurement/launch templates, permission records and other assets with future reuse value.

### E. Maintenance
Necessary upkeep of existing assets, factual freshness, community relationships, Store metadata and measurement integrity.

### F. Optional optimization
Cosmetic or local improvements without evidence that they address a meaningful constraint. Default low priority.

## Allocation gates

A candidate cannot outrank other work merely by receiving a large speculative score. Apply gates first.

1. **Truth/policy gate** — factual, regulatory, Store/ad/community policy conflicts are resolved before growth optimization.
2. **Bottleneck gate** — identify the best-supported current constraint. If unknown, the first allocation may be diagnosis rather than execution.
3. **Decision-route gate** — use the Decision Queue: ACT+MONITOR, OBSERVE, EXPERIMENT, RESEARCH FIRST, DEFER.
4. **Capacity gate** — identify the actual constrained capability: Marketing, Design, Web, Engineering, or qualified traffic.
5. **Maintenance-tail gate** — include recurring cost created by the intervention; a “free” new channel that needs weekly upkeep is not free.
6. **Evidence gate** — separate known facts, transferred evidence and speculation; T2/T3 evidence cannot be silently scored as direct proof.

## Priority model

Do not create fake precision with a universal weighted score. Use an auditable ordinal comparison across these dimensions:

- **Bottleneck leverage** — direct / supporting / unrelated.
- **Expected durable value** — likely effect on qualified acquisition, activation, retention or sustainable ad-bearing use over its useful life.
- **Decision confidence** — quality/directness of evidence, not confidence rhetoric.
- **VOI / learning value** — ability to resolve an important uncertainty and improve later decisions.
- **Time-to-useful-signal** — when evidence or user value can realistically appear.
- **Reversibility / downside** — trust, policy, UX and rework risk.
- **Capability cost** — hours and cross-functional dependencies at the actual bottleneck resource.
- **Maintenance tail** — ongoing labor after initial completion.
- **Reuse/option value** — whether the work becomes a reusable company asset or opens a future low-cost path.
- **Expiry risk** — chance evidence/content becomes obsolete before value is realized.

A candidate wins only when the reasoning survives comparison against the best alternative use of the same constrained resource.

## The next-hour test

For each scarce capability ask:

> If only one additional focused block of this capability were available, which decision package would most improve or clarify the current limiting factor without creating disproportionate maintenance or trust cost?

This is deliberately marginal. Annual “importance” does not determine what the next hour should do.

## WIP limit and resource churn

Too many simultaneous initiatives create context switching, waiting on dependencies, unfinished assets and ambiguous measurement. PMI material on portfolio prioritization notes that frequent reshuffling can create resource churn and that capacity planning matters when skills are shared across projects.

Company rule:
- maintain a small active set per constrained capability;
- finish, stop, invalidate, or explicitly park work before opening more discretionary WIP;
- reprioritize on a defined trigger, not every new idea.

Reprioritization triggers:
- bottleneck materially moves;
- launch/release date creates a genuine dependency;
- policy/regulatory/community rule changes;
- evidence invalidates the mechanism;
- harm signal appears;
- a high-VOI time-limited opportunity emerges;
- constrained capability availability changes materially.

Urgency without one of these triggers is not sufficient.

## Maintenance reserve

Owned channels accumulate liabilities: stale factual articles, broken Store screenshots, outdated app UI references, dead links, community permission drift, analytics breakage.

Therefore reserve capacity for maintenance before discretionary expansion. The exact percentage is **not baselined** and must not be invented. Track actual maintenance demand first; then establish an empirical reserve.

A new channel or asset must declare its maintenance owner and expected cadence before launch.

## Reusable-asset multiplier — use cautiously

Reusable systems can deserve priority even before immediate app-level payoff when they remove repeated future labor: campaign/source registry, Store experiment record, launch checklist, evidence-transfer record, community permission ledger, analytics definitions.

But “reusable” is not automatically valuable. Require a credible second use case; otherwise it can become premature infrastructure.

## MintTap / LogMate representative allocation logic

No live performance is asserted here.

### If MintTap has traffic but weak activation
Do not spend the next Marketing/Design hours primarily increasing Reddit/social reach. Diagnose promise-to-first-value mismatch and activation first. More acquisition into a retention/activation constraint amplifies waste.

### If MintTap activation/retention are healthy but qualified discovery is weak
Durable search/Store/community discovery work can outrank minor product-presentation refinements, subject to factual maintenance and permission constraints.

### If LogMate is pre-launch with unresolved core proposition
Pilot evidence and Store proposition research can outrank building multiple social channels. There is little value in scaling distribution before the promise and first-use job are sufficiently grounded.

### If both apps need the same Design specialist
Compare decision packages, not app seniority. A high-VOI Store proposition asset for a launch may temporarily outrank a reversible cosmetic improvement for a live app; a severe live Store misrepresentation or trust issue may reverse that priority.

### If an ad experiment requires Engineering while Engineering is the bottleneck
Its opportunity cost includes the product/measurement work displaced. A small predicted impression gain should not consume the constraint unless expected retained-user revenue value clears that alternative.

## Portfolio board schema

For each active/parked package record:
- app;
- decision;
- work class A–F;
- current bottleneck;
- route from MARKETING_DECISION_QUEUE;
- constrained capability;
- evidence + T0–T4 status;
- expected durable value;
- VOI;
- time-to-signal;
- downside/reversibility;
- initial labor estimate;
- maintenance owner/tail;
- dependencies;
- next checkpoint;
- state: ACTIVE / WAITING / PARKED / DONE / STOPPED / INVALIDATED.

## Anti-patterns prohibited

- 50/50 MintTap/LogMate allocation by default.
- “Oldest request first” when value differs.
- Highest-download app always wins.
- Highest-revenue app always wins.
- Every app must maintain every social channel.
- Score inflation to force a preferred project.
- Starting work because a specialist is momentarily idle without checking the portfolio bottleneck.
- Treating Marketing labor as free because cash spend is zero.
- Ignoring maintenance created by owned content/community/social expansion.
- optimizing acquisition while activation/retention is the supported bottleneck.

## Evidence and provenance

External management evidence is used only for general resource-allocation principles. PMI discusses resource churn from frequent priority reshuffling and the need to account for skill capacity in portfolio scheduling. Theory of Constraints literature emphasizes identifying the limiting factor and focusing improvement effort there. These principles are adapted to yhappcom; the specific marketing allocation system above is a company operating framework and requires empirical calibration from actual labor and product data.

## What is not yet known

- actual Marketing/Design/Web/Engineering hours consumed by recurring work;
- each app's current empirically supported bottleneck;
- maintenance load per content/community/social surface;
- marginal long-run ad revenue per retained user;
- realistic traffic/time-to-signal for each experiment class;
- whether reusable assets actually reduce labor on the second and third app.

These remain LIVE VALIDATION items, not blanks to fill with assumptions.

## Next research implication

Stage 2 now has the components needed for integration: sparse inference (020), VOI/reversibility (021), stopping/staged commitment (022), evidence transfer/decay (023), operational decision queue, and portfolio labor allocation (024). The next step should be a Stage 2 gate review and a single reusable decision/portfolio template, not another adjacent theory file unless the review exposes a genuine gap.
