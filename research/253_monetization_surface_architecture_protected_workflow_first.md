# Research 253 — Monetization Surface Architecture: Protected Workflow First

Status: validated
Date: 2026-09-25

## Decision
Ad-format selection starts with screen semantics, not expected eCPM. Every screen/state is classified before monetization as protected workflow, dense interaction, passive reading, browsing/discovery, or utility-secondary. A valid outcome is NO AD. No format is entitled to inventory merely because a screen is secondary.

## Authoritative findings
- Google Play prohibits disruptive ads shown unexpectedly, causing inadvertent clicks, or interfering with normal use; users cannot be forced to click an ad before fully using an app.
- Full-screen interstitials shown unexpectedly while the user has chosen to do something else are prohibited. Opt-in rewarded ads are treated separately.
- AdMob says interstitials belong between pages/content and should not appear on app load/exit; repeated interstitials degrade UX and increase accidental-click risk.
- Google supports banner, native, interstitial, rewarded and app-open inventory, but format availability is not placement eligibility.
- High-engagement settings can lengthen skip/exit friction for interstitial/rewarded/app-open inventory. Therefore enabling a monetization setting can alter product interruption cost and must be governed as a UX change, not only an ad-yield change.

## FT0–FT7 Monetization Surface Eligibility Matrix
1. **Job identity** — state the user's job on the surface.
2. **Protection class** — protected workflow / dense interaction / passive reading / browsing-discovery / utility-secondary.
3. **Interruption tolerance** — determine whether interruption, persistent occupancy, content insertion, or voluntary value exchange is semantically compatible.
4. **Format eligibility** — evaluate each format independently; default is ineligible until justified.
5. **Interaction separation** — exclude accidental-click adjacency, content impersonation, navigation interception and deceptive placement.
6. **Exposure budget** — govern frequency/session pressure across eligible surfaces; eligibility does not imply every opportunity should serve.
7. **Economic validation** — reconcile paid-event/finalized revenue with task completion, continuation, retention, traffic quality and performance cost.
8. **Keep/rollback/NO AD** — preserve NO AD when no format passes all gates.

## Default matrix
| Surface class | Banner | Native | Interstitial | App open | Rewarded |
|---|---|---|---|---|---|
| Protected workflow | NO | NO | NO | NO while workflow active | NO for core value |
| Dense interaction | Usually NO | Usually NO | NO | NO | Only truly optional value outside task |
| Passive reading | Candidate if separated | Candidate if unmistakable | Only at genuine completed transition | Not surface inventory | Optional only |
| Browsing/discovery | Candidate | Candidate with semantic separation | Rare completed transition only | Not surface inventory | Optional only |
| Utility-secondary | Candidate after interaction audit | Case-specific | Case-specific natural boundary | Not surface inventory | Optional only |

This is an eligibility matrix, not a mandate to serve ads.

## Portfolio application
### MintTap
Protected by default: Home, portfolio manipulation, ticker/filter controls when actively manipulating data, Tax Adjustment, financial interpretation/analysis states where advertising could be mistaken for product information, recovery/account-critical flows. Begin monetization audits only on clearly separated secondary/passive surfaces.

### LogMate
Protected by default: Home, onboarding, Add/Edit Flight, import/migration, validation, totals reconciliation, sync/recovery, data portability required for user control, and any recency/compliance-relevant state. Launch architecture should allow NO AD across core logging work. Secondary passive/browsing surfaces can be evaluated after real usage evidence exists.

## Operational ledger
`screen/state → specialist job → protection class → interaction density → interruption tolerance → eligible formats → exclusion reason → opportunity/exposure → request/load/impression/paid event → task continuation → retention → traffic quality → finalized revenue → keep/rollback/NO AD`

## Forbidden inferences
- supported ad format = eligible placement
- secondary screen = monetizable screen
- empty space = ad inventory
- natural visual gap = natural interstitial transition
- eligible opportunity = serve every time
- higher eCPM = better surface decision
- policy compliant = non-intrusive
- NO AD = monetization failure

## Reusable rule
For niche professional apps, monetize surplus attention around the specialist job; never monetize access to, interruption of, or ambiguity inside the specialist job itself. The company optimizes sustainable revenue per protected specialist relationship, not ad density.

## Next evidence target
Build the actual MintTap screen/state inventory and assign each state a protection class before any new ad-format or density experiment. Repeat for LogMate only when its monetization plan becomes release-relevant.
