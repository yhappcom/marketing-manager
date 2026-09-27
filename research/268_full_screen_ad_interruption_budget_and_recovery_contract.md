# Research 268 — Full-Screen Ad Interruption Budget and Recovery Contract

Date: 2026-09-27

## Decision
Research 265–267 establish density guardrails, telemetry, and production inventory truth. Research 268 adds the missing product-side control: full-screen ads are a scarce interruption budget, not inventory to maximize.

A technically eligible interstitial/app-open opportunity does not automatically authorize an exposure. The product must first prove that the exposure occurs at a genuine boundary or wait state and that the user's next specialist action can resume without ambiguity or lost state.

Canonical chain:
eligible opportunity → interruption-budget check → show decision → dismissal → deterministic resume target → next-core-value → repeated specialist value.

## AO0–AO8 interruption-budget gate
AO0 Protected-core exclusion: no full-screen exposure inside portfolio editing, transaction/tax adjustment, distribution/ROC interpretation, corporate-action reconciliation, calculation confirmation, or equivalent high-consequence specialist work.
AO1 Boundary truth: interstitial eligibility requires a completed task or other genuine natural pause. Navigation alone is not a natural pause.
AO2 App-open wait-state truth: app-open eligibility requires an actual load/wait state. First use is suppressed; a cold-start ad that loses the race to main content is suppressed; stale loaded ads are not shown.
AO3 Session interruption budget: maintain a product-side full-screen exposure budget independent of network/app/ad-unit frequency caps. Network caps are a backstop, not the product policy.
AO4 Recovery contract: every full-screen exposure has a deterministic resume target. Dismissal must return to the expected post-boundary state without replaying a completed action, losing unsaved work, or obscuring the next specialist action.
AO5 No load-driven show: a load callback never creates permission to interrupt. Preload and show eligibility are separate state machines.
AO6 Exposure accounting: record opportunity, suppression reason, show/impression, dismissal/failure, time-to-next-core-value, abandonment and repeated-value outcome.
AO7 Incremental test: only test more exposure after delivery losses have been diagnosed and baseline product outcomes are observable.
AO8 Reversal rule: if exposure raises revenue but materially worsens completion, recovery, next-core-value or repeated specialist value, revert. Sparse evidence remains INCONCLUSIVE and keeps the lower-pressure baseline.

## Why this is distinct from frequency capping
Frequency caps answer “how often may this ad be served?” The interruption budget answers “should the product spend an interruption here at all?”

A valid implementation can therefore suppress an exposure even when:
- an ad is loaded;
- an ad unit/network cap permits it;
- the user has consented to requests;
- the surface is generally non-protected.

The product-side budget is stricter because professional apps have context-reconstruction cost. A pilot or portfolio user may need to re-check state after a full-screen interruption even when no data is technically lost.

## Required product-side state
For each full-screen candidate surface retain:
- surface_id and specialist_job;
- protected_state;
- boundary_type;
- opportunity_id;
- session_fullscreen_count;
- last_fullscreen_elapsed bucket;
- suppression_reason;
- expected_resume_target;
- actual_resume_target;
- workflow_completion;
- time_to_next_core_value bucket;
- abandonment;
- repeated_value cohort.

Do not put portfolio holdings, transaction amounts, tax memo content, or other specialist record contents into ad telemetry.

## Format-specific rules
### Interstitial
Use only after a completed non-critical task or another genuine pause. Preload before the boundary. Never show merely because loading finished. The dismissal path must resume the post-task state.

### App open
Treat foregrounding as a trigger to evaluate eligibility, not as inventory. Do not show on first start. During cold start, show only while the user is still in a legitimate loading state; if main content wins the race, suppress. Enforce loaded-ad freshness.

### Rewarded interstitial
Not a substitute for ordinary interstitial inventory. Before display, present clear reward messaging and a skip option. The reward must not create a restriction on core specialist functionality.

## Initial MintTap posture
- Home: retain no-full-screen-ad default.
- Portfolio/transaction/tax adjustment/ROC/corporate-action/calculation workflows: PROTECTED.
- Search/results or secondary browse surfaces: candidate only after the production inventory audit proves a genuine boundary and deterministic recovery.
- App open: EXPERIMENT_ONLY until first-use suppression, wait-state race handling, freshness, cooldown/budget and downstream outcome joins are verified.

## Initial LogMate posture
Flight add/edit, Previous Total, import/mapping, duplicate reconciliation, totals verification, export, sync/recovery and record-integrity confirmation remain PROTECTED. If monetization is introduced, begin with non-critical passive inventory; full-screen inventory requires a separate boundary/recovery audit.

## Authoritative evidence
Google Mobile Ads documents interstitials as full-screen ads for natural transition points and recommends preloading rather than showing from the load-completion callback; it also warns against flooding users with interstitials. Google App Open guidance says not to show the first app-open ad on first start, to use cold-start ads only from a loading screen, to suppress a late ad after main content is reached, and to treat loaded app-open ads as expired after four hours. Rewarded interstitial guidance requires a pre-ad intro with clear reward messaging and a skip option.

## Reusable company rule
For future niche professional apps:
1. define protected specialist work before adding ads;
2. define natural boundaries independently of ad SDK callbacks;
3. create a product-side interruption budget;
4. specify deterministic recovery;
5. measure next-core-value and repeated value;
6. only then test incremental full-screen exposure.

Ad network availability is supply. Product eligibility is permission. They are not the same.

## Next target
Execute a code/configuration census against MintTap and populate the Research 267 inventory table. If repository/code access is insufficient, do not infer production placements; record the missing evidence and move to the next high-value marketing topic.
