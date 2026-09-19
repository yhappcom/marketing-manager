# 133 — Sparse-niche storefront evidence before optimization

Date: 2026-09-20
Status: Canonical post-freeze addition

## Decision

For a sparse professional app, storefront optimization must be gated by **evidence sufficiency**, not by the mere availability of CPP/CSL/PPO/experimentation tools. A small niche can easily generate conversion-rate movements that look actionable but are censored, compositionally different, or too sparse to support a causal decision.

Canonical principle: **route intent first (AX), then establish an interpretable evidence unit, then optimize creative.**

## Newly validated platform facts

### Apple acquisition is source-attributed beyond the Store click

App Store Connect Analytics attributes sales, usage and subscription data to the recorded download source, allowing source-level comparison beyond impressions/downloads. A manual redownload resets the recorded source for subsequent attributed activity. Acquisition can be segmented by source type, territory and device. Apple exposes Unique Impressions, Unique Product Page Views, Total Downloads and Conversion Rate; usage metrics such as Sessions/Installations/Active Devices can also be inspected from acquisition views.

Operational implication: acquisition source is not a permanent user-origin label. Do not treat a redownloaded user's current source as immutable lifetime provenance.

Source: Apple, App Store Connect Analytics — Acquisition (validated 2026-09-20).

### CPP has an explicit sparse-data threshold

Apple states that analytics for an individual Custom Product Page appear only after that page receives at least **five first-time downloads**. CPP analytics then support product-page views, downloads, conversion, proceeds and downstream metrics; individual CPP export is available in detailed reports with stronger privacy protections.

Operational implication: `no CPP data` can mean **below disclosure threshold**, not zero demand. Never convert censored observations into zeroes.

Source: Apple, App Store Connect Analytics — Custom Product Pages (validated 2026-09-20).

### Campaign evidence is also thresholded

Apple campaign links appear in Analytics only after more than one day has passed since campaign launch and at least **five App Units** are attributed. Campaign links can connect campaign identity to impressions, page views, downloads, usage, sales and subscriptions.

Operational implication: tiny Reddit/blog/social campaigns need an explicit `censored/insufficient` state. Combining unrelated specialist intents merely to cross the threshold destroys the decision unit.

Source: Apple, App Store Connect Analytics — Filters and Dimensions; Campaign Links (validated 2026-09-20).

### Store conversion is not the terminal outcome

Apple explicitly positions acquisition analytics as a way to identify sources driving high-quality downloads, and CPP analytics as a way to identify not only which page converts best but which page brings higher-value users. Retention can be filtered by acquisition source/campaign.

Operational implication: a creative/destination does not win solely because Store conversion rises. For MintTap/LogMate, the minimum useful chain remains `Store exposure → qualified download → first value → useful return`; ad-bearing use is evaluated later and separately.

### Conversion denominator semantics matter

Apple defines App Store conversion rate as Total Downloads / Unique Device Impressions. Total Downloads includes first-time downloads and redownloads. This is not identical to `first-time installs / product-page visitors`.

Operational implication: every dashboard/registry field must carry its denominator definition. Never compare differently defined “conversion rates” as though they were the same KPI.

Sources: Apple App Store Connect Analytics — metric definitions and analytics overview (validated 2026-09-20).

## AY0–AY5 — Sparse-Niche Storefront Evidence Gate

**AY0 — Dashboard reaction**
- Decisions from raw conversion-rate movement, screenshots, or a few installs.
- Missing denominator definitions.
- Censored/missing data interpreted as zero.

**AY1 — Metric awareness**
- Store metrics are recorded, but first-time vs redownload, impression vs page-view, source composition, or thresholding remains mixed.

**AY2 — Defined observation unit**
- Destination, specialist intent, platform, territory, source, date window and denominator are recorded.
- Censored/unknown/missing are distinct from zero.
- Still insufficient downstream evidence or comparison discipline.

**AY3 — Decision-grade minimum**
- AX-qualified destination/intent.
- Exact metric definitions and denominators retained.
- First-time download and redownload effects understood where available.
- Privacy/disclosure thresholds represented explicitly.
- Source/territory/device composition checked before comparison.
- Store outcome connected to first value/useful return where product instrumentation permits.
- Deterministic routing is not interpreted as randomized causal evidence.
- No decision when the evidence unit is too sparse; extend the window or remain `insufficient` without merging unlike intents.

**AY4 — Repeated interpretable evidence**
- Same intent/destination accumulates enough repeated observations across appropriate windows to distinguish persistent signal from transient composition changes.
- Creative changes are annotated and evaluated against the correct exposure population.
- Platform Store metrics reconcile directionally with product-side activation/return evidence.

**AY5 — Reusable sparse-niche decision system**
- Cross-app evidence registry preserves platform-specific definitions, censoring rules, destination lineage and downstream utility.
- Promotion/retirement decisions have explicit evidence requirements and rollback criteria.
- Framework transfers to future niche apps without inventing universal sample-size thresholds.

## Decision rules

1. **Never invent a universal minimum sample size.** Platform disclosure thresholds are not statistical-power thresholds.
2. **Never merge different jobs just to make the chart appear.** A ROC/tax-adjustment intent and reverse-split-history intent remain separate if their user jobs differ.
3. **Missing ≠ zero.** Use at least `observed`, `censored`, `unknown`, `not instrumented`, `not applicable`.
4. **Conversion definitions travel with the number.** Store impression conversion, page-view conversion, first-time-download rate and product activation are separate quantities.
5. **Selected destinations are not experiments.** CPP/CSL audience differences can reflect routing/source composition; causal creative claims require an actual randomized instrument or appropriately controlled evidence.
6. **Optimize downstream utility, not Store cosmetics.** A conversion lift that produces weaker first value/useful return is not a qualified win.
7. **Sparse evidence can rationally end in no change.** For a small professional audience, preserving a truthful stable page can be superior to continuous testing.

## MintTap application

Do not create or optimize ticker-level pages because TSLY/CONY/MSTY traffic can be counted separately. First require a distinct specialist job under AX. For each real destination, record source, territory, device, observation window, unique impressions/page views, first-time downloads where available, redownload context, threshold/censor state, first value and useful return. If a CPP has fewer than Apple's disclosure threshold, mark it censored rather than unsuccessful.

This is especially important for zero-cost Reddit/blog/social traffic: tiny high-intent cohorts may be strategically valuable even when Store dashboards cannot disclose a page/campaign breakout.

## LogMate application

Do not consume a scarce pilot audience to obtain A/B-test volume. Before launch, define the evidence contract and destination taxonomy only. After launch, accumulate naturally occurring qualified traffic around real jobs (for example import continuity or previous totals) and prefer longer observation windows over broadening to irrelevant aviation audiences.

## Reusable registry fields

`platform | destination_id | AX_intent | route_type | source | territory | device | window | metric_name | numerator | denominator | first_time/redownload_semantics | threshold_state | value | creative_version | first_value_definition | first_value_rate | useful_return_definition | useful_return_rate | evidence_grade | decision | rollback_rule`

## Relationship to existing framework

`specialist demand → AT/AU/AW permission/utility → AS attribution → AX intent routing → AY interpretable storefront evidence → qualified acquisition → first value → useful return → AR-compatible monetization evidence`

AY does not replace platform experiments. It determines whether the observed evidence can support the decision being claimed.

## Next validation

Build the first MintTap AX+AY destination registry from live App Store Connect and Google Play Console evidence. Record unavailable access/data as `unknown`, not as absence. Verify Google Play's current metric/experiment semantics directly in Console/help before establishing cross-platform denominator mappings; do not infer them from Apple definitions.