# Source Package Registry Template

Use this registry to map many low-volume assets into a small number of decision-useful acquisition packages.

## Controlled vocabulary

Maintain centrally. Do not create spelling/case variants ad hoc.

### Product
`minttap | logmate | <future-product>`

### Source family
`reddit | owned-blog | owned-web | organic-social | pilot-community | search | other-validated`

### Medium
`organic-community | owned-editorial | organic-social | organic-search | referral`

### Lifecycle window
`prelaunch | launch | evergreen | event-<slug> | seasonal-<slug>`

## Package record

| Field | Value |
|---|---|
| Internal Source Package ID | |
| Product | |
| Intent Route ID | |
| Source family | |
| Medium | |
| Audience / market | |
| Lifecycle window | |
| Decision question | |
| Evidence IDs supporting route | |
| Permission state / ledger ref | |
| Store/landing proof destination | |
| Apple `ct` / alias | |
| Apple `pt` state | KNOWN / UNKNOWN / N/A |
| Google `utm_source` | |
| Google `utm_medium` | |
| Google `utm_campaign` | |
| Google `utm_id` | |
| `utm_content` enabled? | NO by default |
| Start date | |
| Distribution end date | |
| State | DRAFT / ACTIVE / OBSERVING / DECISIONABLE / INCONCLUSIVE / ARCHIVED |
| Native visibility/threshold state | |
| Activation evidence | |
| Useful-return evidence | |
| Ad-bearing-use evidence | |
| Attribution limitations | |
| Linked Decision Record | |
| Notes | |

## Asset child record

Assets are children of a package, not campaigns by default.

| Asset ID | Package ID | Surface | Community/account | Published date | Content/job | Permission checked | Link used | Material variant | Result note |
|---|---|---|---|---|---|---|---|---|---|

## New-package gate

Before adding a package answer:

1. Does this represent a materially different intent route, Store proof story, audience/market, permission regime, source behavior, or bounded event?
2. What concrete decision could change if enough evidence accumulates?
3. Is expected volume plausibly sufficient for separate interpretation?
4. Can the distinction remain asset metadata instead?

If #2 is unclear, consolidate. If #3 is weak, default to consolidation.

## Naming rules

Internal ID:

`{product}_{route}_{source}_{market}_{window}`

- lowercase ASCII;
- controlled vocabulary;
- hyphens within values, underscores between fields;
- no user IDs;
- no individual post IDs;
- no arbitrary weekly/monthly suffix;
- never recycle archived IDs.

## Interpretation rules

- Missing/withheld/Other != zero.
- Apple/Google raw attribution is not assumed equivalent.
- Aggregate upward before declaring failure.
- Do not split by creative until volume and a concrete decision justify it.
- Low-volume evergreen packages may remain active for long periods.
