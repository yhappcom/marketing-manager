# 134 — Google Play click-intent metrics break cross-platform CVR symmetry

Validated: 2026-09-20

## Decision

Google Play Store-performance measurement must no longer be modeled as a simple Android equivalent of Apple App Store conversion reporting. From June/July 2026, Google Play shifted the primary Store-listing performance surface toward **unique button clicks and CTR**: unique users clicking Install, Open, or Pre-register, divided by Store-listing visitors. Completed acquisitions remain available elsewhere (Grow overview, Statistics, and exports). The canonical registry must therefore preserve **surface, event, denominator, user state, and report generation/version** rather than storing an unlabeled `conversion_rate`.

## Authoritative findings

Google Play Console Help currently states that from June 2026 the primary Store-listing performance metrics are based on unique clicks, and from July 2026 Store-listing performance reports focus on user intent rather than successful outcomes. `Click-through Rate (CTR)` is the percentage of Store-listing visitors who clicked Install/Open/Pre-register and replaces the legacy `Conversion Rate` metric on those content-performance reports.

The same documentation says the default interaction view includes both new users who have never installed the app and returning users who previously installed it but have since removed it from all devices. This is materially different from legacy Store-listing acquisition definitions and means an Install-click KPI cannot be silently interpreted as first-time acquisition.

Completed `Store listing acquisitions` still exist: users who visited the Store listing and installed the app while not having it installed on any other device at that time. Google also warns that this count is lower than installs because a user installing on multiple devices is counted once.

Google's downloadable monthly Store-performance report remains acquisition-oriented and defines Store-listing visitors as users who visited without the app installed on any device, Store-listing acquisitions as those visitors who installed, and Store-listing conversion rate as acquisitions / visitors. Thus the current Console contains **coexisting metric families with different semantics**, not one universal Google Play conversion metric.

The Grow overview further separates user and device metrics and reports acquisitions, first opens, MAU and seven-day retention. A first open can occur for new or returning acquisitions within 150 days. This is useful downstream evidence, but it is not the same event as an Install click or Store-listing acquisition.

## Canonical measurement contract

Every Play Store observation used for a decision must carry:

- `surface`: listing content/performance, Grow overview, Statistics, export, experiment, etc.
- `metric_name_exact`: e.g. Unique user Install Clicks, CTR, Store listing acquisitions.
- `event`: click, completed acquisition, first open, retention, etc.
- `numerator` and `denominator` where a rate is used.
- `population`: new, returning, combined, user, or device.
- `traffic_scope`: listing-only versus wider Play surfaces.
- `store_listing`: default or named custom listing.
- `source/country/language/UTM` where applicable.
- `observation_window` and report/export date.
- `legacy/current semantic version`: required when comparing pre/post-2026 reports or exports.
- downstream `first_value` and `useful_return` evidence when available.

Never normalize Apple App Store conversion rate, Google Play CTR, and Google Play acquisition conversion into a single `CVR` column without retaining their native definitions.

## AZ0–AZ5 — Play metric-semantic integrity gate

**AZ0 — Ambiguous.** A dashboard number is called conversion/CVR without source, event, or denominator.

**AZ1 — Named.** Platform and metric label are retained, but population/surface semantics are missing.

**AZ2 — Defined.** Event and denominator are known, but new/returning, listing scope, or legacy/current version is unresolved.

**AZ3 — Decision-safe.** Exact metric semantics, surface, population, scope, time window and semantic version are retained; click intent is not treated as completed acquisition; acquisitions are not treated as first value; Apple/Google rates are not forced into symmetry.

**AZ4 — Downstream-linked.** AZ3 plus qualified acquisition/first open is connected to product-defined first value and useful return, with source composition controlled sufficiently for the decision.

**AZ5 — Reusable operating system.** Registry/schema and audit procedures automatically prevent ambiguous CVR comparisons across products, platforms, time periods and reporting surfaces.

## MintTap implications

1. The first AX+AY registry must contain separate Android fields for Store visitor, Install click, CTR, completed Store-listing acquisition, first open, first value and useful return where observable.
2. A 2026 CTR improvement after a listing change is evidence of stronger **button-click intent**, not by itself evidence of more completed installs or retained portfolio users.
3. Historical acquisition-based Play reports must not be plotted as a continuous `conversion rate` series against the post-July-2026 CTR surface without an explicit semantic break.
4. Custom Store Listing performance should be judged first against its intended specialist job and native metric semantics, then against downstream utility. Do not infer that a higher CTR means the ROC/reverse-split user obtained value.
5. For a zero-cost niche business, the most useful chain is `qualified visitor → install intent click → completed acquisition → first open → MintTap first value → useful return → compatible ad-bearing use`; missing links remain unknown rather than imputed.

## LogMate implications

Define this contract before launch. Pilot traffic is too scarce to waste on a metric migration discovered after data collection. Preserve raw native Play metrics and population definitions from day one; do not broaden the audience merely to stabilize CTR.

## Reusable rule

A platform dashboard redesign can change the meaning of the KPI while leaving familiar words such as performance, conversion, install and acquisition nearby. The metric contract—not the dashboard label—is canonical.

## Sources

- Google Play Console Help, “Understand and grow your app's user base” (current page; documents June/July 2026 intent-metric transition): https://support.google.com/googleplay/android-developer/answer/9859173?hl=en
- Google Play Console Help, “Download and export monthly reports” (current acquisition-oriented export definitions): https://support.google.com/googleplay/android-developer/answer/6135870?hl=en
- Google Play Console Help, “Get a high-level view of your app’s growth performance and opportunities” (Grow overview user/device, acquisition, first-open and retention semantics): https://support.google.com/googleplay/android-developer/answer/16394358?hl=en
- Google Play Console Help, “View app statistics” (Store-listing visitor/acquisition definitions): https://support.google.com/googleplay/android-developer/answer/139628?hl=en
