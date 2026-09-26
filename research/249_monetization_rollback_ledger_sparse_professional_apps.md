# Research 249 — Monetization Rollback Ledger for Sparse Professional Apps

Validated: 2026-09-26

## Decision
Ad monetization changes must be reversible before they are expandable. MintTap, LogMate, and future professional niche apps must predeclare rollback conditions before increasing full-screen exposure, adding app-open inventory, reducing cooldown, or widening eligible surfaces.

The optimization target is not impressions or eCPM. It is sustainable verified ad revenue subject to preservation of specialist task completion, repeated core value, reliability, policy compliance, and user control.

## Authoritative constraints
Google Play's Better Ads Experiences policy prohibits unexpected full-screen interstitials when the user chose to do something else, prohibits full-screen video interstitials before the loading screen, and generally requires interruptive full-screen ads to be closeable within 15 seconds. Explicitly opt-in rewarded ads and full-screen ads that do not interrupt user actions are treated differently.

Google Mobile Ads guidance says app-open ads should not appear on the first app start, should be shown while users are already waiting for loading, and on cold start should only be shown from the loading screen; if main content is reached before the ad loads, the ad should not be shown. Current SDK guidance also treats app-open ads as expired after four hours.

Google's interstitial guidance explicitly warns that increasing frequency can degrade user experience and lower CTR.

## GS0–GS8 Monetization Rollback Gate
GS0 Protected-workflow contract — enumerate workflows/surfaces that cannot become interruptive inventory.
GS1 Baseline freeze — capture pre-change specialist-job completion, repeat-value, reliability, eligible opportunities, exposure/session, consent mix and impression-level revenue.
GS2 Change isolation — change one monetization lever at a time where practical; record rollout version, date, geography and traffic/source composition.
GS3 Policy hard-stop — any policy-invalid or semantically unexpected placement is rollback, not an experiment to optimize.
GS4 Product hard-stop — material evidence that the change obstructs core-job completion, produces accidental interaction, or breaks a protected workflow triggers rollback.
GS5 Reliability hard-stop — crashes, ANRs, rendering/navigation faults, ad callback defects or stuck full-screen states attributable to the change trigger rollback.
GS6 Economic hold — higher impressions without defensible incremental paid-event revenue is not a win. Separate auction/traffic/consent changes from placement effects.
GS7 Sparse-evidence discipline — insufficient observations produce HOLD/UNKNOWN, not EXPAND. Absence of measured harm in a tiny cohort is not proof of safety.
GS8 Expansion decision — EXPAND only when policy/semantic integrity remains intact, specialist-value guardrails remain acceptable, and incremental verified revenue is supported by evidence.

## Rollback states
- IMMEDIATE ROLLBACK: policy violation/risk, protected-workflow intrusion, accidental-click pattern, ad blocks expected navigation, reliability regression attributable to placement.
- ROLLBACK: credible material specialist-value degradation with plausible causal link.
- HOLD: evidence insufficient, confounded, or revenue uplift lacks reliable incremental support.
- KEEP: current treatment remains within guardrails but evidence is not sufficient for further density.
- EXPAND: incremental revenue survives product/reliability/policy guardrails and evidence is sufficiently interpretable.

No universal numeric percentage is declared for task-completion or repeat-value degradation. Sparse professional apps need product-specific baselines and confidence bands; invented generic thresholds create false precision. Policy and protected-workflow violations remain zero-tolerance regardless of sample size.

## MintTap application
Home remains protected from ads under the current product decision. Distribution/ROC/reinvestment/tax-adjustment workflows are not full-screen inventory merely because navigation boundaries exist. YieldMax distribution dates, market shocks and acquisition campaigns are explicit confounders because they can alter both session composition and ad economics.

An app-open experiment cannot begin on first launch. Cold-start display is eligible only while a genuine loading state remains; once main content is available, a late ad is suppressed. Foregrounding alone does not override product-side cooldown or protected-session rules.

## LogMate application
Flight entry, import, Previous Total setup, duplicate reconciliation and logbook review are protected professional record-keeping workflows. Any future full-screen monetization starts outside those workflows. A technically valid transition is not sufficient semantic justification for an interruption.

## Required ledger
experiment_id; app_version; start/end; changed_lever; eligible_surface; protected_workflow_check; consent_state; traffic_source; country; specialist_job; eligible_opportunity; request; load; impression; paid_event_value; revenue_precision; exposure_ordinal; task_completion; abandonment; repeat_value_window; crash/ANR; policy_incident; confounders; decision; rollback_reason.

## Reusable operating rule
Revenue expansion is asymmetric: evidence required to increase interruption should be stronger than evidence required to stop a harmful or policy-risky treatment. Monetization is therefore a reversible layer over specialist utility, never a dependency for access to core functionality.

## Next research
Move away from ad-density theory after this gate. Next useful target is a cross-platform Store-review recovery protocol: how release quality, review prompts, review-response operations and ratings evidence interact in sparse niche cohorts without manipulation or premature prompting.
