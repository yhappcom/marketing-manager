# 044 — Community → Intent-Route Evidence Mining

Date: 2026-09-16
Status: POST-FREEZE COMMUNITY / DEMAND-EVIDENCE OPERATING DELTA

## Purpose

Define a rigorous, low-cost method for turning recurring specialist-community/search questions into evidence for content, Store intent routes, and product-marketing decisions without treating every post, keyword, or anecdote as demand.

This extends 042 (intent routing) and 043 (Store proof). The new question is: **what evidence is strong enough to justify an intent route or proof change?**

## Authoritative constraints

### Reddit promotion is community-governed, not universally forbidden or universally allowed

Reddit's current official spam guidance says promotional content is not inherently spam, but individual communities may prohibit promotion entirely or use rules such as a 10% self-promotion convention. Reddit defines spam around repeated/unwanted/unsolicited actions that negatively affect users or communities and explicitly prohibits mass-posting repetitive content for exposure or financial gain. Community-specific rules therefore override any generic promotional assumption.

Sources:
- https://support.reddithelp.com/hc/en-us/articles/28012014962580-How-do-I-keep-spam-out-of-my-community
- https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam

### Reddit is not a free scraping corpus

Reddit's current site-integrity guidance prohibits scraping without an authorized agreement and prohibits accessing/collecting Reddit data without permission. Marketing research must therefore rely on normal permitted browsing/search, first-party community participation, authorized APIs where applicable, and manually recorded aggregate evidence—not an unauthorized bulk scraper.

Source:
- https://support.reddithelp.com/hc/en-us/articles/360043512931-Don-t-break-the-site

### Search Console query data is useful but incomplete

Google Search Console defines queries as search terms that led users to the site, but anonymizes some queries for privacy and may truncate the displayed query rows. Therefore Search Console is a first-party demand signal, not a complete census of search demand.

Source:
- https://support.google.com/webmasters/answer/17011259

## Core distinction — Question ≠ Demand ≠ Route

A single community question is evidence that one person expressed a problem. It is not automatically a market segment, Store route, content pillar, or feature request.

Use the hierarchy:

`observation → recurring problem cluster → qualified intent → route/content hypothesis → measured decision`

Do not skip levels.

## Evidence unit: Intent Observation

Record the smallest useful non-sensitive observation:

- `observation_id`
- date/window
- surface class: community / owned blog search / Search Console / Store search / support / direct feedback
- community/source identifier where policy permits
- audience fit: target / adjacent / unknown
- normalized problem statement
- exact specialist concept(s)
- lifecycle stage: discover / evaluate / onboard / use / return / troubleshoot
- user language fragment or paraphrase (respect copyright/privacy)
- commercial/product relationship disclosure requirement
- promotion permission state
- evidence strength
- linked existing intent cluster if any

Do not store unnecessary usernames or personal identifiers.

## Evidence classes

### C1 — isolated expression

One relevant question/comment/search phrase. Useful for vocabulary discovery; insufficient for route creation.

### C2 — repeated independent expression

The same underlying job/problem appears independently across multiple threads/users/time windows or surfaces.

### C3 — cross-surface corroboration

The problem appears in at least two different evidence systems, e.g. Reddit + Search Console, blog search + Store search, support + community.

### C4 — behavioral validation

Content/store material addressing the problem attracts qualified clicks, Store intent, activation or useful-return behavior under compatible measurement.

### C5 — durable economic validation

The route produces retained useful users and sustainable ad-bearing use without violating trust/harm guardrails.

Route creation should normally require at least C2 plus a supported distinct Store story; C3 is preferred. C1 can justify a reply or exploratory article, not a dedicated CPP/CSL by itself.

## Independence rule

Ten comments inside one viral thread are not equivalent to ten independent demand observations.

Count evidence by independent origin:

- different authors/questions where observable and policy-compliant;
- different threads;
- different time windows;
- different communities;
- different search/support systems.

A cluster dominated by one event/thread is marked `burst-concentrated` and should not be promoted to evergreen intent without later recurrence.

## Problem normalization

Do not cluster only by keywords. Normalize by job/problem.

Example for MintTap:

- "CONY reverse split messed up my average"
- "How should I track a 1:5 split after reinvesting distributions?"

may belong to one conceptual cluster if the underlying job is preserving portfolio continuity through corporate actions.

But:

- "What is CONY's next distribution?"

is a different job even though the same ticker appears.

Canonical clustering fields:

`audience + trigger/context + desired outcome + specialist constraint`

## Route Promotion Gate

Promote an intent cluster into a dedicated Store route candidate only when all are true:

1. **Audience fit** — the observations are materially from the product's intended specialist audience.
2. **Independent recurrence** — C2 or stronger evidence exists; not one thread/event duplicated many times.
3. **Distinct job** — the problem is meaningfully different from existing routes.
4. **Product truth** — current/release-ready product can actually satisfy the promise.
5. **Distinct proof** — Store Recognition/Outcome/Specialist proof should genuinely differ.
6. **Permission-safe source path** — at least one sustainable source surface can discuss/link the problem without violating rules.
7. **Measurability** — traffic is likely sufficient for a decision, or the route has exceptional strategic importance.
8. **Maintenance economics** — expected decision value exceeds creative/localization/monitoring burden.

This composes with 042's Route Consolidation Rule rather than replacing it.

## Content Decision Gate

The threshold for useful content is lower than for a Store route.

- C1: answer directly when useful and permitted; optionally record vocabulary.
- C2: candidate FAQ/blog/community explainer.
- C3: durable content pillar / owned landing content candidate.
- C4+: candidate for stronger Store-route or product-marketing investment.

Thus the content system acts as a low-cost validation layer before multiplying Store assets.

## Community participation rule — Answer First, Route Second

For external communities, default behavior is:

`solve the user's question natively → disclose relevant affiliation → link only when rules and context permit → never mass-repeat the same promotional payload`

A link is not the objective. Qualified problem understanding is the objective.

Before posting/linking in a community, record:

- promotion allowed / conditional / prohibited / unknown;
- disclosure requirement;
- link restrictions;
- frequency/self-promotion rules;
- moderator guidance if obtained;
- last verified date.

If permission is unknown, do not assume permission from Reddit's sitewide policy; inspect the specific community rules first.

## Owned-community distinction

The company's own r/MintTapforYieldMax community has a different role from third-party communities. It can support product discussion and feedback, but should not become a manufactured evidence loop where company-created prompts are counted as independent market demand.

Mark observations from owned/moderated communities as `owned-community` and avoid treating company-seeded threads as independent C2 recurrence.

Reddit's moderator guidance also requires clear community expectations and appropriate labeling of official/unofficial affiliation.

Source:
- https://support.reddithelp.com/hc/en-us/articles/27031214413588-Moderator-Code-of-Conduct-Rule-2-Set-Appropriate-and-Reasonable-Expectations

## Sparse-niche evidence scoring

Do not invent a false-precision numeric score. Use an ordinal decision matrix:

- recurrence: isolated / repeated / persistent
- independence: concentrated / mixed / distributed
- audience fit: weak / plausible / strong
- product fit: unsupported / partial / strong
- source permission: prohibited / unknown / conditional / allowed
- Store-story distinctness: low / medium / high
- measurable traffic: insufficient / uncertain / plausible
- durability: event-driven / periodic / evergreen

The route decision must cite these dimensions explicitly.

## Event-driven vs evergreen demand

Specialist finance apps are especially vulnerable to event bursts: a distribution announcement, reverse split, tax season, issuer change, or market move can temporarily dominate discussion.

Classify clusters:

- `evergreen`: recurring regardless of a specific event;
- `periodic`: predictable recurring window such as tax/reporting cycle;
- `event-driven`: triggered by one issuer/product/platform event;
- `emerging`: new pattern not yet durable.

Event-driven demand is usually better served by timely content than a permanent Store route unless recurrence persists.

For LogMate, analogous bursts may come from regulatory changes, airline-system migrations, recurrent training periods, or a vendor shutdown/export issue.

## Zero-cost evidence loop

1. Observe permitted community/search/support signals.
2. Normalize into user jobs, not keywords alone.
3. Merge duplicates and mark independence/durability.
4. Answer high-value questions natively where permitted.
5. Turn repeated clusters into owned evergreen content.
6. Measure qualified response/search discovery when possible.
7. Promote only corroborated, product-supported clusters into Store intent-route candidates.
8. Align the route's Proof Triad with the exact uncertainty.
9. Measure downstream first value/useful return when telemetry exists.
10. Retire/merge clusters whose recurrence or product relevance disappears.

## MintTap operating implications

Potential YieldMax-related themes already known from product/content work—ROC, distributions, reverse splits, cost-basis continuity, reinvestment, recovery—must not automatically become six routes. They begin as candidate clusters. The evidence-mining process must determine whether users actually express distinct jobs strongly enough to justify separate content and Store stories.

A practical hierarchy may emerge where several technical issues are evidence for one broader job such as "keep YieldMax portfolio history economically coherent despite distributions/corporate actions." That is exactly why clustering precedes route creation.

## LogMate operating implications

Pilot communities are professionally sensitive and fragmented by jurisdiction, employer, aircraft/operation type and software ecosystem. A question about importing CrewConnex data, for example, is not automatically evidence that all pilots value import equally. Record source/audience context and avoid generalizing one airline/system community to the entire pilot market.

Regulatory questions should be separated from workflow demand and supported by authoritative aviation sources before they become claims.

## New company rule — Evidence Before Route

`community/search expression → independent recurrence → corroborated intent → truthful product proof → route`

Never:

`interesting post → new Store page`.

## New company rule — Native Help Before Promotion

External community participation earns distribution by usefulness and rule compliance, not by repeated link placement.

The company should optimize for:

`qualified conversations + reusable problem evidence + trust`

before raw outbound clicks.

## Operational artifact

Use `playbook/COMMUNITY_INTENT_EVIDENCE_REGISTRY_TEMPLATE.md` to record observations/clusters without storing unnecessary personal identifiers.

## Next research

1. Build stable source-package measurement taxonomy for Apple campaign links / Google UTM naming without sparse-data fragmentation.
2. Deepen specialist localization semantics: professional/tax/regulatory vocabulary must be market-adapted, not literally translated.
3. Once sufficient evidence exists, populate a MintTap Intent Route Registry from actual observed clusters.
4. Audit live Store creative only against verified route/proof evidence.

## Reusable lesson

Community marketing for a niche app is not primarily a distribution hack. It is a **permission-constrained demand-sensing system**.

The valuable output is not the maximum number of links posted. It is a defensible map from recurring specialist problems to truthful product proof and measurable routes.