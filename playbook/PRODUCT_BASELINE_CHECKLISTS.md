# Product Baseline Checklists

Validated: 2026-09-16
Implements: `EVIDENCE_PROVENANCE_BASELINE_PROTOCOL.md` and `LIVE_EVIDENCE_REGISTRY_TEMPLATE.md`

## Rule
These are fillable readiness checklists, not scorecards. `UNKNOWN` is a valid state. Do not delay reversible low-risk work merely to fill every cell.

## MintTap

### Context and change boundaries
- [ ] Current iOS app/version: UNKNOWN until verified
- [ ] Current Android app/version: UNKNOWN until verified
- [ ] Current App Store listing change date/version: UNKNOWN
- [ ] Current Play listing change date/version: UNKNOWN
- [ ] Material onboarding/analytics/ad changes logged
- [ ] Primary market tags recorded separately (at minimum US/KR where relevant)

### Store discovery and intent
- [ ] Apple native impressions/source dimensions captured with native definitions
- [ ] Apple product-page views captured
- [ ] Apple first-time downloads captured
- [ ] Apple ASC Conversion Rate, if used, explicitly labeled as Apple-native
- [ ] Google Play visitors captured under current definition
- [ ] Google Play clicks captured under current definition
- [ ] Google Play CTR captured under current definition
- [ ] Google pre/post-2026 metric-definition boundary logged where historical data exists
- [ ] iOS/Android metrics kept separate unless comparability is justified

### Product value
- [ ] Candidate activation event identified from actual YieldMax workflow
- [ ] Activation definition validated against product telemetry/user behavior
- [ ] Natural retained-use cadence established from real workflow rather than generic D7/D30 convention
- [ ] Activation/retention event-definition versions logged

### Owned/community acquisition
- [ ] Search Console baseline by existing high-intent problem cluster
- [ ] Content inventory linked to problem clusters
- [ ] YieldMax community permission ledger populated
- [ ] Community observations preserve post URL/date/permission/moderation outcome
- [ ] Attribution gaps remain UNKNOWN rather than allocated by guesswork

### Advertising
- [ ] Ad-eligible task states identified
- [ ] Placement/state/frequency recorded
- [ ] Impressions per eligible active user/session observed if instrumented
- [ ] Revenue observed from native ad reporting
- [ ] Latency/task interruption/abandonment guardrails instrumented or marked NOT_INSTRUMENTED
- [ ] Retention impact is not inferred from revenue alone

### Decision readiness
- [ ] Highest-VOI current decision package identified
- [ ] Evidence IDs linked into its Decision Record
- [ ] Readiness state assigned: READY / READY_WITH_UNCERTAINTY / BASELINE_FIRST / RESEARCH_FIRST / NOT_MEASURABLE_YET

## LogMate

### Pre-launch context
- [ ] Launch platform(s): UNKNOWN until owner/product evidence verifies
- [ ] Launch geography: UNKNOWN
- [ ] Target pilot segment: UNKNOWN
- [ ] Jurisdiction/regulatory context tagged
- [ ] Live Store listing status verified before any Store baseline is created

### Proposition evidence
- [ ] Core recording-workflow proposition evidence recorded
- [ ] Migration/import proposition evidence recorded where relevant
- [ ] Evidence source distinguishes interview/observation/product telemetry from assumption
- [ ] No cross-airline/country transfer without T0-T4 classification

### Product value
- [ ] Candidate activation event derived from actual pilot workflow
- [ ] Activation definition validated after observable use exists
- [ ] Natural recurrence/retention cadence established from actual logbook workflow
- [ ] Import success is not automatically equated with retained product value

### Professional community
- [ ] Candidate pilot communities inventoried
- [ ] Promotion/research permission checked per community
- [ ] Disclosure/moderation outcomes recorded
- [ ] Qualitative pilot feedback stored with provenance and context

### Store and launch evidence
- [ ] Native Apple Store baseline begins only after listing produces data
- [ ] Native Google Play baseline begins only after listing produces data
- [ ] Pre-registration/pre-order metrics kept distinct from activation/retention
- [ ] Launch cohort source/context tagged where measurable

### Advertising
- [ ] Ad eligibility policy defined around precision/workflow-sensitive states
- [ ] Intrusive/deceptive/access-limiting placements excluded
- [ ] Task-interruption and latency guardrails defined before monetization experiments
- [ ] Revenue measurement does not override usability/retention guardrails

### Decision readiness
- [ ] Highest-VOI pre-launch decision package identified from actual evidence
- [ ] Evidence IDs linked into Decision Record
- [ ] Readiness state assigned without fabricated baselines

## Company-wide minimum setup
- [ ] Metric-definition registry initialized
- [ ] Baseline-change ledger initialized
- [ ] Source/campaign registry initialized only where measurement semantics justify it
- [ ] Evidence IDs are cited by Decision Records
- [ ] Marketing/Design/Web/Engineering capacity remains UNKNOWN until measured
- [ ] Maintenance demand per asset/channel remains UNKNOWN until observed
- [ ] Evidence collection is prioritized by VOI, not dashboard completeness
