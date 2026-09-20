# 143 — MintTap 1.0.29 ad surface expansion and task-boundary audit

Date: 2026-09-20

## Why this addition exists

Research 142 established two live placements and froze inventory expansion until the existing system is mapped and measurable. This continuation stays on the production-relevant `yhappcom/yieldmax_tracker` ref `1.0.29` and expands the screen-level map rather than adding monetization theory.

## Newly confirmed placements

The shared `FixedBottomBannerAdSlot` is not limited to stock detail. Direct screen evidence confirms additional fixed-bottom placements:

- **MT-AD-P3 — Distribution by period.** `DistributionByPeriodScreen` always attaches `FixedBottomBannerAdSlot(debugLabel: 'distribution-bottom')`. Unlike some other surfaces, the constructor has no browse-mode eligibility flag, so no screen-level browse exclusion is evidenced here.
- **MT-AD-P4 — Dividend calendar.** `DividendCalendarScreen` attaches `FixedBottomBannerAdSlot(debugLabel: 'calendar-bottom')` only when `_isBrowseMode` is false.
- **MT-AD-P5 — Transaction history.** `TransactionHistoryScreen` attaches `FixedBottomBannerAdSlot(debugLabel: 'history-bottom')` for signed-in users. This is a management/history surface containing add/edit and tax-adjustment timeline interactions, so it must not be treated as passive reading merely because the banner is fixed-bottom.
- **MT-AD-P6 — Yearly ROC.** `YearlyRocScreen` attaches `FixedBottomBannerAdSlot(debugLabel: 'yearly-roc-bottom')` when `isBrowseMode` is false. The same screen can launch tax-adjustment entry, so eligibility is adjacent to a consequential financial/accounting workflow.

Together with 142, the confirmed mobile/banner map now includes Home, stock detail, distribution-by-period, dividend calendar, transaction history and yearly ROC.

## Web parity is real, not merely infrastructure

The shared slot abstractions are conditional implementations. `fixed_bottom_banner_ad_slot_web.dart` maps every configured fixed-bottom placement to `WebAdSenseBanner` using `AdSenseConfig.bottomBannerSlot`. `home_inline_ad_slot_web.dart` similarly maps Home to the configured Home AdSense slot. `adaptive_inline_banner_slot_web.dart` maps generic inline placements to the configured inline AdSense slot.

Therefore, where a shared slot is actually rendered by a screen and the corresponding AdSense slot is configured, the same product surface can carry web inventory. Web must be tracked as a separate platform/format path because request, impression and revenue semantics differ from Google Mobile Ads. Do not merge mobile AdMob and web AdSense into one placement metric merely because they share a Flutter abstraction/debug label.

## Task-boundary finding

The new screen map invalidates a simplistic rule such as `secondary screen = safe ad surface`. The confirmed fixed-bottom inventory spans materially different user states:

- calendar and distribution review can be predominantly information-consumption states;
- stock detail mixes reading with navigation among analytical tabs;
- transaction history is a record-management surface and gateway to add/edit actions;
- yearly ROC is a financial interpretation surface and gateway to tax adjustment.

A placement's natural eligible state must therefore be defined at **substate/action-boundary level**, not only by route name. A persistent banner may remain visible while the user's job changes from passive review to consequential edit/adjustment intent. BF eligibility must exclude or separately classify such transitions before revenue experiments.

## Important negative evidence

`EditTransactionScreen` and `TransactionImportReviewScreen` do not import the audited ad-slot widgets in their 1.0.29 source headers. This supports the current product principle that direct transaction editing/import review should not be monetized as ad inventory. It does not prove absence of every possible externally injected ad mechanism, but there is no direct shared-slot evidence in those screens.

## Registry update

| ID | Surface | Shared slot | Screen eligibility | Task-boundary risk | Current decision |
|---|---|---|---|---|---|
| MT-AD-P1 | Home | HomeInlineAdSlot | non-browse | conflicts with later Home-ad-free direction | freeze; reconcile/remove |
| MT-AD-P2 | Stock detail | FixedBottomBannerAdSlot | non-browse | tab remount/request amplification; mixed analysis states | instrument before optimization |
| MT-AD-P3 | Distribution by period | FixedBottomBannerAdSlot | screen-level browse exclusion not evidenced | filter/date interaction but primarily review | define substates; verify browse path |
| MT-AD-P4 | Dividend calendar | FixedBottomBannerAdSlot | non-browse | month/date exploration | candidate only after instrumentation |
| MT-AD-P5 | Transaction history | FixedBottomBannerAdSlot | signed-in | record-management/add-edit boundary | high guardrail priority |
| MT-AD-P6 | Yearly ROC | FixedBottomBannerAdSlot | non-browse | tax-adjustment gateway/consequential interpretation | high guardrail priority |

## Operational decisions

1. Replace route-level ad eligibility with `route + substate + action boundary + platform + lifecycle/remount` in the live placement registry.
2. Keep direct transaction editing and import review outside ad inventory unless future direct implementation evidence changes that fact.
3. Treat yearly ROC → tax adjustment and history → add/edit transitions as guardrail boundaries. Revenue optimization must never create friction around these consequential actions.
4. Split mobile AdMob and web AdSense measurement paths even when the Flutter screen-level placement identity is shared.
5. Continue searching for actual `AdaptiveInlineBannerSlot` render sites; widget existence alone remains insufficient evidence of a live placement.
6. The next implementation slice should inspect analytics/event instrumentation and the remaining shared-slot render sites. No new format expansion is justified yet.

## Canonical conclusion

MintTap 1.0.29 has a broader persistent-banner footprint than the first audit showed. The key marketing implication is not additional inventory; it is that **screen identity is too coarse to define a safe monetization denominator**. Persistent banners cross from passive specialist utility into record-management and tax-adjustment-adjacent states. Decision-grade monetization now requires substate/action-boundary eligibility plus platform-specific measurement, while direct edit/import workflows remain protected by current implementation evidence.