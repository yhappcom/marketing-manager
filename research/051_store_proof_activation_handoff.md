# 051 — Store Proof × Activation Handoff

Date: 2026-09-16
Status: CANONICAL / APPLIED TO MINTTAP

## Problem

For a sparse specialist app, Store conversion is not a sufficient objective. A listing can increase installs while worsening downstream activation if the Store promise hides setup cost, data prerequisites, or the actual path to personal value.

Canonical chain:

`Store promise → install expectation → first-session action → data/setup burden → first personal result → understood return reason`

The marketing/product boundary is therefore a **handoff contract**, not a page boundary.

## Authoritative platform evidence

Apple states that screenshots should depict the app in use, give a clear view of the experience, lead with the strongest features/benefits, and tell a cohesive story reflective of how someone uses the app. Up to three screenshots can appear in search results depending on orientation. Apple app previews demonstrate features, functionality and UI using on-device footage and precede screenshots when present. Product Page Optimization can test icons, screenshots and previews, but its primary evaluation is conversion lift; downstream product activation must therefore be measured separately by the developer.

Operational consequence: a Store asset that promises an outcome without representing the required first-use workflow can be conversion-effective but activation-destructive.

## New framework — Promise-to-Value Continuity

Every acquisition promise must map to five fields:

1. **Promise** — what useful outcome the Store/community asset makes salient.
2. **Prerequisite** — what user data/account/setup is actually required.
3. **First action** — the first meaningful in-app action after install/sign-in.
4. **First-value state** — the first personalized result that fulfills the promise.
5. **Return reason** — why the specialist should reopen later.

A route is coherent only when these five fields form a plausible continuous path.

### Handoff failure classes

- H1 Promise inflation: Store implies more immediacy/automation than product provides.
- H2 Prerequisite concealment: material setup/import/manual-entry cost is invisible before install.
- H3 Route discontinuity: Store intent lands in generic onboarding rather than the promised job.
- H4 Choice friction: user must make avoidable configuration decisions before first value.
- H5 Proof mismatch: Store screenshots show mature-state dashboards but first session is an empty/configuration state.
- H6 Return ambiguity: first value is reached but no recurring specialist job is made obvious.

## Sparse-niche rule

**Activation Before Conversion Optimization.**

For a product with unresolved first-value friction and very low sustained use, do not optimize Store conversion in isolation. First establish a credible Store→first-value handoff and instrument the downstream boundary. Apple PPO remains useful later, but Store conversion lift alone is not evidence of qualified growth.

**Expectation Cost Is Product Cost.**

If a user must import or enter historical holdings to obtain the promised portfolio result, that effort belongs in acquisition strategy. Marketing must either reduce it with product/design or set an accurate expectation and surface the easiest route.

**Mature-State Screens Require Path Evidence.**

A mature dashboard screenshot is valid proof only when the listing sequence or adjacent copy makes the route to that state credible. Do not imply that a populated specialist dashboard exists immediately after install.

## MintTap application

Current cross-functional evidence identifies likely first-use friction: configuration-heavy onboarding, notification permission before demonstrated value, Import hidden behind transaction entry, redundant portfolio selection, Demo protected actions not preserving intent, and a dense mature Home state.

The Store promise should therefore be audited against two real first-data routes:

### Route M — Manual
`recognize YieldMax problem → install → minimal setup → Add manually → first personalized portfolio result`

### Route I — Import
`recognize existing-history problem → install → minimal setup → Import CSV/XLSX → review/commit → first personalized portfolio result`

Import must be treated as a first-class activation route for existing investors, not a secondary advanced feature, if runtime/design validation confirms it materially lowers time-to-first-value.

### Store Proof Triad adaptation

1. Recognition: YieldMax-specific portfolio/distribution tracking problem.
2. Outcome: a real personalized portfolio result, not generic wealth imagery.
3. Competence + path: demonstrate the specialist complexity handled **and** make the route to personal data credible (manual/import as appropriate).

Do not claim effortless, automatic, tax-compliant, or brokerage-synced behavior unless implementation and jurisdiction-specific evidence support it.

## Measurement contract

Minimum events/states for a future remediation release:

- Store/source package identifier where available and privacy-safe.
- first app/session entry.
- onboarding/setup completion or meaningful abandonment boundary.
- first-data-path selected: manual/import.
- first valid personal data commit.
- semantic first-value state reached.
- useful return in a later session/window.

Primary diagnostic metrics after telemetry coverage is adequate:

- install/first-open → first-data-path selection;
- path selection → first valid commit;
- first valid commit → first value;
- time-to-first-value by Manual vs Import;
- first value → useful return.

Store conversion is upstream context, not the terminal KPI.

## Decision gate before Store creative testing

Do not run a Store screenshot/PPO optimization merely because new creative is available. Require:

1. verified product route represented by the creative;
2. no known material promise/prerequisite mismatch;
3. first-value boundary instrumented or otherwise observable;
4. enough traffic to avoid meaningless sparse tests;
5. a decision that can change based on the result.

## Reusable launch lesson

For future niche apps such as LogMate, define the Promise-to-Value Continuity map before launch creative is finalized. A pilot-logbook listing that emphasizes imported history, totals, or compliance-oriented records must expose a credible first-use path to those outcomes. This prevents acquisition assets from outrunning implementation.

## Sources

- Apple Developer, App Store Asset Best Practices and Resources, accessed 2026-09-16.
- Apple Developer, Upload app previews and screenshots, accessed 2026-09-16.
- Apple Developer, App Previews, accessed 2026-09-16.
- Apple Developer, Overview of Product Page Optimization, accessed 2026-09-16.
