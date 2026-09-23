# Research 211 — Google Play Retained-Installer vs Behavioral-Retention Integrity

Date: 2026-09-23
Status: validated operating guidance

## Why this matters

For a sparse niche app, a Store acquisition metric can look like retention while measuring something materially weaker than repeated specialist value. Google Play exposes several retention-adjacent measures whose denominators, cohort anchors, and events differ. They must not be substituted for one another.

## Authoritative findings

Google Play acquisition reporting historically defines a **retained installer** as an installer who kept the app installed on at least one device for the specified number of days. Google explicitly notes that this does **not** mean the app was opened during that period. Retained-installer reports can expose 1-, 7-, 15-, and 30-day retained-installer counts/rates by supported acquisition dimensions.

By contrast, Play Console Statistics exposes behavioral retention metrics such as 28-day user retention based on whether a user opened the app on the relevant day after first open. These are different events with different cohort semantics.

Store-performance acquisition metrics are different again: Store listing acquisitions count users who visited the Store listing and installed the app while not already having it installed on any device; Store listing visitors use a Store-listing-visitor denominator. Grow-users reporting may include both new and returning users depending on the surface/default view.

Google also warns that acquisition reports and other measurement sources can differ because of different measurement methods. Sparse observations can be hidden or grouped under `Other` when minimum thresholds apply.

## Canonical distinction

Never use the generic word `retention` without preserving the exact metric.

- `retained installer` = app remained installed; it does not prove app use.
- `behavioral user retention` = qualifying app-open behavior under that metric's cohort definition.
- `specialist-value repetition` = the user actually repeats the product's promised specialist workflow; this is a product-defined downstream event and is not established by either Play metric alone.
- `ad-bearing repeat use` = repeated eligible sessions/surfaces where non-intrusive ads can legitimately serve; this is downstream of useful product use and must not be inferred from install persistence.

Thus:

`kept installed ≠ reopened ≠ repeated specialist value ≠ monetizable repeat session ≠ sustainable revenue`

## DW0–DW5 — Google Play Retention-Semantic Integrity Gate

### DW0 — Metric identity
Record the exact Play surface, metric label, definition, denominator, cohort anchor, observation window, geography, and filters. Do not normalize distinct metrics to `retention`.

### DW1 — Cohort-anchor integrity
Distinguish Store-listing visit, acquisition/install, first open, and active-user anchors. A cohort anchored on Store visit cannot be directly substituted for a cohort anchored on first open.

### DW2 — Event integrity
Classify the measured event: remained installed, opened app, completed specialist workflow, repeated specialist workflow, or generated privacy-eligible ad-bearing use. Do not infer a stronger event from a weaker one.

### DW3 — Sparse/aggregation integrity
Preserve suppressed/`Other` observations as unknown or aggregated. Do not infer zero. Avoid excessive channel/UTM/country fragmentation that destroys useful cohort visibility.

### DW4 — Diagnostic triangulation
Read Store conversion, retained-installer persistence, behavioral retention, activation, specialist-workflow completion, repeat specialist value, technical quality, and acquisition source together. A gap between install persistence and behavioral/product retention is itself diagnostic evidence.

### DW5 — Growth/monetization decision
Scale a zero-cost route only when its users progress beyond installation toward repeated specialist value. Do not optimize content, ASO, community activity, or ads merely because a route produces installs that remain on-device.

## Diagnostic patterns

### High Store conversion + high retained-installer rate + weak behavioral/product repetition
Likely interpretation: acquisition promise is attractive and users do not immediately remove the app, but persistent specialist utility is unproven. Investigate activation, workflow friction, recurrence cadence, notifications only where justified, and promise-to-product continuity. Do not call this healthy retention.

### Modest Store conversion + strong behavioral/product repetition
Likely interpretation: qualified users may be valuable once acquired. Investigate Store-message clarity and route-message match before broadening positioning. Protect niche specificity.

### Strong behavioral retention + weak specialist-value repetition
App opens may not equal meaningful utility. Inspect whether users are actually completing MintTap/LogMate core jobs rather than opening shallow surfaces.

### Strong specialist repetition + weak ad revenue
Do not increase ad intrusion by default. First inspect consent eligibility, ad-supply activation, fill, eligible surface coverage, technical delivery, and revenue reconciliation under the existing ad-governance gates.

## MintTap application

For MintTap, a user retaining the Android app on-device does not establish repeated YieldMax portfolio/distribution/ROC utility. Production analysis should join, where privacy and tooling permit, route/source evidence with Store acquisition, exact Play retention metric, activation, core specialist-workflow completion, repeat specialist value, and eligible non-intrusive ad-bearing use.

Do not broaden YieldMax positioning because a broad source produces many retained installers. A smaller route producing repeat specialist value can be superior.

## LogMate application

For LogMate, pre-launch targets must not be copied from generic retained-installer benchmarks. Post-launch, distinguish app persistence from actual repeated logbook/import/offline workflow use. Preserve the ad-free Home product constraint; retention weakness is not permission to insert intrusive monetization into the core Home surface.

## Reusable company rule

Every dashboard/export/experiment note containing a retention number must carry a metric-semantic tuple:

`platform | surface | exact metric | cohort anchor | denominator | event | window | geography | source/filter state | sparsity state`

Cross-platform reports may compare directionally related outcomes only after this tuple is preserved. Apple retention, Google behavioral retention, Google retained-installer persistence, and internal repeat-value events must never be merged into a synthetic company retention percentage.

## Next evidence target

MintTap Play Console production packet:

1. current Store listing acquisitions/visitors and exact filters;
2. any available retained-installer export with 1/7/15/30-day fields;
3. current behavioral user-retention metrics from Statistics, including exact definitions/windows;
4. acquisition channel/UTM/country dimensions and suppression state;
5. internal activation and repeat specialist-value events;
6. eligible ad-bearing repeat use and reconciled revenue.

The objective is not to maximize any one retention number. It is to identify where qualified acquisition stops progressing toward repeated specialist value and sustainable, non-intrusive revenue.

## Sources

- Google Play Console Help, “Measure your app's acquisition and retention” — retained installers are users who kept the app installed; installation persistence does not mean the app was opened; acquisition-source measurements can differ and sparse data can be grouped.
- Google Play Console Help, “Download and export monthly reports” — retained-installer exports expose 1/7/15/30-day fields and acquisition dimensions; organic search/browse totals require double-counting care.
- Google Play Console Help, “View app statistics” — behavioral user-retention metrics are based on app-open events and use their own cohort definitions.
- Google Play Console Help, “Understand and grow your app's user base” — acquisition views can include new and returning users depending on reporting surface.
