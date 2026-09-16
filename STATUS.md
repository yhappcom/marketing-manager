# Marketing Manager Status

Last updated: 2026-09-16

## Phase
Foundation, Sparse-Niche Decision Science, and Application Readiness V1 are complete. General theory is frozen by default; new work follows live product evidence, authoritative platform changes, framework failures, or operational gaps.

Canonical growth chain:
`relevant demand → credible promise → qualified acquisition → meaningful activation → repeated core value → sustainable ad-bearing use`

## Operating context
MintTap and LogMate serve narrow specialist audiences. Default to little/no direct cash spend. Store, owned/editorial, permission-respecting communities and selective evidence-gated social are the core acquisition system. Advertising is the intended monetization path, subject to usability, trust, retention, accessibility, performance and policy.

## MintTap live state
MintTap 1.0.29 is released. Repository branch `1.0.29`, audited at `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, remains the release implementation reference unless newer first-party evidence supersedes it.

Owner-observed sustained use remains a critical activation warning, not a numerical retention rate because the historical eligible denominator is unavailable.

Measurement remains partial: first aggregate snapshot contained 129 readable profiles, 7 with `lastActiveAt`, 122 missing. GA4 property access and aggregate ad-revenue evidence remain unresolved. Rule: **Telemetry Coverage Before Retention**.

## Canonical post-freeze work
- 042 Cross-surface intent routing.
- 043 Specialist Store proof architecture: **Proof Before Breadth**.
- 044 Community intent evidence mining: **Evidence Before Route**, **Native Help Before Promotion**.
- 045 First live measurement snapshot interpretation.
- 046 Source-package measurement taxonomy: **Package Before Parameter**, **Decision Before Granularity**, **Accumulate Before Splitting**, **Missing Is Not Zero**.
- 047 MintTap activation-barrier cross-functional diagnosis.
- 048 Specialist localization semantics: **Meaning Before Wording**, **Locale Is Not Market**, **Proof Travels With the Claim**, **Domain Review Before Scale**, **No Compliance by Translation**.
- 049 Community permission operations.
- 050 MintTap concrete community permission pilot: **Fit Does Not Grant Permission**.
- 051 Store Proof × Activation Handoff: **Activation Before Conversion Optimization**, **Expectation Cost Is Product Cost**, **Mature-State Screens Require Path Evidence**.
- 052 Sparse-Niche Controlled Activation Validation: **Discovery Before Estimation**, **First Value Not Form Completion**, **Fresh Eyes for Discoverability**, **Fix Blockers Before Scaling Traffic**, **Triangulate Sparse Evidence**.
- 053 Post-First-Value Ad Monetization Guardrails: **First Value Before Monetization**, **Value Block Integrity**, **Transition Not Interruption**, **Wait-State Fit for App Open**, **Revenue Per Retained User Not Impressions Per Session**.

## 053 — Post-First-Value Ad Monetization Guardrails
`research/053_post_first_value_ad_monetization_guardrails.md`

Ad inventory is now modeled as a consequence of retained specialist value rather than a target to maximize independently.

Canonical monetization chain:
`first value → complete value block → natural transition → eligible ad opportunity → return behavior → sustainable revenue`

A value block is the smallest uninterrupted sequence needed for a specialist user to obtain and understand a meaningful result. Interruptive ads must not split an action from its required result/comprehension.

Current Google AdMob guidance validates two important constraints: app-open ads should not appear on first app start and are recommended only after users have used the app several times while they are already waiting for loading; interstitials belong at natural transition points/pauses such as after task completion. These platform rules are now translated into product-level eligibility rules rather than treated as mere SDK implementation details.

For MintTap, weak sustained use plus unresolved revenue telemetry means increased interruptive ad pressure is not justified. Existing ad placement should be reviewed against value-block integrity; activation remediation remains upstream of monetization optimization.

Operational artifact: `playbook/AD_VALUE_BLOCK_REGISTRY_TEMPLATE.md`.

## Parallel tracks

### Track A — measurement
Resolve GA4 discovery/read access without guessing IDs or modifying production configuration. Continue privacy-filtered aggregate Firestore snapshots until recency coverage stabilizes. Verify semantic first-value telemetry and aggregate ad-revenue access before monetization experiments.

### Track B — marketing learning
Continue reusable niche-launch systems from actual product evidence. Community permission work is action-triggered rather than generic. Continue LogMate pre-launch work without claims ahead of implementation. Ad research now proceeds through workflow/value-block evidence rather than generic format comparisons.

### Track C — MintTap activation / retention remediation — highest live-product priority
Tranche 1 remains: defer notification permission; auto-select a sole portfolio subject to invariant review; expose Import and Manual as peer first-data paths; preserve Demo protected-action intent through sign-in/setup; implement/verify semantic first-value telemetry; relocate the Home inline ad after a complete value block if low risk.

Controlled validation supplies the acceptance framework. Tranche 2 is structural onboarding/Home simplification plus fresh-user retesting. Tranche 3 is controlled acquisition restart only after V1–V4 activation credibility and telemetry readiness.

## Immediate next targets
1. Convert Tranche-1 changes into a cross-functional acceptance matrix tied to V1–V4, Store Promise-to-Value continuity, and ad value-block integrity.
2. Define sanitized MintTap Manual/Import fixtures and outcome-oriented task scripts suitable for Design Studio human validation.
3. Map the actual MintTap 1.0.29 ad triggers/placements into the Ad Value-Block Registry and identify PROTECT / ELIGIBLE_AFTER_BLOCK / REJECT boundaries from code evidence.
4. MintTap live Store creative audit once exact current listing assets are available.
5. MintTap high-risk localization ledger pilot using verified specialist terminology only.
6. LogMate Promise-to-Value and pre-launch monetization map only from implemented capabilities.

## Unresolved questions
MintTap: GA4 access; historical install denominator; auth/onboarding abandonment; demo-to-real conversion; Import discovery; manual-vs-import qualitative first-value performance; AdMob↔Analytics linkage; aggregate ad revenue; actual ad trigger frequency/context; activation/useful-return telemetry; stable recency coverage; Store/search/source baseline; current r/YieldMaxETFs action permissions; exact live Store assets; specialist terminology semantics; real task performance after proposed changes.

LogMate: production persistence; first-value validation; launch geography/segment/regulatory boundaries; import priorities; analytics; retention cadence; ad model; selected community permissions; regulatory mapping; terminology conventions; launch traffic ceiling.

Company-wide: measured labor capacity; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim/term/ad-value-block ledgers; social qualified-response baselines; reusable launch records; evidence that activation and monetization changes improve sustainable downstream value rather than short-run impressions or Store conversion alone.

## Progress interpretation
Do not report progress by file count. The highest-value question remains whether a target specialist user can reach personal first value with acceptable effort, understand why to return, and then encounter monetization only at contextually legitimate boundaries. Small-N research discovers failure modes; it does not manufacture percentages. Weak activation is not repaired by increasing ad pressure.