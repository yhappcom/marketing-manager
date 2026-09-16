# 052 — Sparse-Niche Controlled Activation Validation

Updated: 2026-09-16

## Problem
MintTap has a severe owner-observed sustained-use warning but lacks a valid historical denominator and complete activation telemetry. Waiting for statistically stable retention data would delay product learning. Small-N qualitative testing can instead identify first-value friction, but it must not be misrepresented as quantitative proof.

## Evidence boundary
Nielsen Norman Group recommends roughly five participants for a qualitative usability study as a high benefit/cost starting point, while explicitly distinguishing this from quantitative research, where five is inadequate. Therefore 5–8 specialist participants are suitable for discovering recurring activation barriers and testing task comprehension, not for estimating population conversion or retention percentages.

Apple App Store Connect usage and retention data are also incomplete views: usage data depends on users opting in to share diagnostics/usage; usage metrics have privacy thresholds, and retention is defined over devices that installed and eventually opened the app. Sparse cohorts can remain blank. This reinforces triangulation rather than treating native Store analytics as a complete census.

## Controlled activation protocol

### Participant eligibility
Recruit actual or credible target-domain users, not generic mobile users. For MintTap: users who currently hold, previously held, or actively track YieldMax-style option-income ETFs. Do not require disclosure of real holdings; use sanitized fixtures.

### Two first-data routes
A. Manual route: start from clean install/account state, enter a supplied small transaction set, reach a personal portfolio result.
B. Import route: start from the same clean state, import a supplied sanitized CSV/XLSX fixture, resolve any required review, reach the same semantic first-value state.

Do not force both routes on every participant if learning/order effects would contaminate the observation. If comparing route comprehension within-person, counterbalance order. Otherwise use sequential qualitative rounds: first diagnose each route, fix obvious defects, then retest.

### Semantic first-value state
First value is not account creation, onboarding completion, transaction save, or import completion. It occurs when the participant can see a personalized portfolio result and correctly explain at least one meaningful result relevant to the app's specialist promise.

Minimum evidence tuple:
`task start → route chosen/discovered → prerequisites completed → personal result visible → participant interpretation → understood reason to return`

### Observe, do not lead
Moderator intervention invalidates unassisted task success for that attempt. Record:
- route discovery without prompting;
- completion / abandonment;
- first blocking point;
- wrong turns and backtracking;
- fields/settings that trigger uncertainty;
- help requests;
- whether terminology is understood;
- whether the final result is interpreted correctly;
- whether participant can state a credible future return trigger.

Time-to-first-value may be recorded as diagnostic task time, but small-N medians/means are not population estimates.

### Severity model
S0 observation only — no material task impact.
S1 friction — hesitation or recoverable detour.
S2 material — repeated confusion, help request, or substantial avoidable work.
S3 activation blocker — abandonment, inability to reach first value, materially wrong interpretation, or requirement the target user reasonably cannot satisfy.

Promote an issue for remediation when any of the following holds:
- one S3 with clear product causality;
- same S2 pattern independently appears in >=2 participants;
- issue directly contradicts Store promise or hides a lower-friction supported route;
- issue creates specialist trust/compliance risk.

These are product decision rules, not statistical significance thresholds.

## Round structure
Prefer iterative rounds over one large study:
1. Round A: ~5 target users, diagnose high-severity first-value barriers.
2. Fix only well-supported/high-severity issues.
3. Round B: ~5 fresh target users where feasible, test whether blockers recur and whether fixes create new friction.
4. Only after qualitative activation credibility improves should acquisition be deliberately widened.

A participant may be reused for longitudinal comprehension questions, but fresh participants are preferred for testing discoverability because prior exposure destroys first-use validity.

## MintTap decision gates

### Gate V0 — instrumentability
Fixture, clean-state procedure, task script, observation sheet, semantic first-value definition exist.

### Gate V1 — route discoverability
Target user can identify Manual or Import without moderator instruction. Import must be visible early enough to compete with manual entry for users with existing history.

### Gate V2 — first-value reachability
No unresolved S3 blocker in the tested route after remediation round. This is qualitative confidence, not a conversion-rate claim.

### Gate V3 — comprehension
Participant can explain the resulting portfolio state sufficiently to distinguish useful result from mere data entry completion.

### Gate V4 — return reason
Participant can identify a plausible recurring job: distribution update, portfolio performance check, ROC/tax review, transaction update, or another implemented specialist use case.

### Gate V5 — acquisition restart
Only after V1–V4 are credible and semantic telemetry is available should Store/community acquisition be deliberately increased. Native retention remains a downstream validation layer.

## Metrics hierarchy
1. Primary qualitative: unassisted first-value success, blockers, correct interpretation, return reason.
2. Diagnostic: route discovery, wrong turns, help requests, task time.
3. Product telemetry after release: first-value event coverage, first-value latency where safely measurable, useful-return events.
4. Native Store: source/campaign usage and retention, interpreted with opt-in/privacy limitations.
5. Economic: ad-bearing useful return and aggregate revenue only after retention credibility exists.

## Rules
**Discovery Before Estimation** — small-N tests discover failure modes; they do not estimate market rates.

**First Value, Not Form Completion** — activation requires a meaningful personalized result.

**Fresh Eyes for Discoverability** — do not use trained users to validate first-use route discovery.

**Fix Blockers Before Scaling Traffic** — scarce specialist traffic should not be spent on a known broken activation path.

**Triangulate Sparse Evidence** — qualitative observation, product telemetry, Store analytics and owner evidence answer different questions and must not be collapsed into one denominator.

## Reuse for LogMate
The same protocol applies pre-launch: sanitized roster/logbook fixture; manual/import route; first useful logbook result; correct interpretation; recurring return job. Aviation regulatory/compliance claims remain outside usability validation and require separate domain verification.
