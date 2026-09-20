# 142 — MintTap 1.0.29 live ad placement audit

Date: 2026-09-20

## Why this addition exists

Research 140–141 froze the theory: monetize only natural eligible states, preserve impression-level revenue provenance, and reconcile revenue before optimization. The next required step was not another framework. It was to inspect actual MintTap implementation evidence.

This audit uses `yhappcom/yieldmax_tracker` release branch `1.0.29`, not `main`. The default branch is materially stale for this purpose: its `pubspec.yaml` is 1.0.0 and contains no Google Mobile Ads dependency, while `1.0.29` declares version 1.0.29+29 and `google_mobile_ads: ^6.0.0`. Ad implementation conclusions must therefore be release-ref-qualified.

## Confirmed implementation inventory

### P1 — Home inline mobile banner

Evidence:
- `lib/screens/home_screen.dart` imports and renders `HomeInlineAdSlot` for non-browse users.
- It is placed between the upper Home content and the Positions card.
- `HomeInlineAdSlot` is keyed by `_homeAdRefreshToken`.
- `_handleReturnFromDetail()` increments `_homeAdRefreshToken`, so returning from detail reconstructs the Home ad slot and can create a new request opportunity.
- `home_inline_ad_slot_mobile.dart` waits 350 ms after the frame, prepares privacy/consent, checks whether ads may be requested, then requests an inline adaptive banner with anchored adaptive fallback.
- If no banner is loaded, the slot collapses to zero height.
- The widget has load/failure callbacks but no `onPaidEvent` revenue callback.

Marketing interpretation:
- This is a real production Home placement, not a proposed placement.
- It conflicts with the later product/marketing direction that Home should be ad-free. Treat this as an implementation-policy drift requiring product reconciliation, not as permission to optimize Home revenue.
- The return-from-detail refresh behavior means exposure/request frequency is partly navigation-driven. There is no explicit user/session cap or cooldown in this widget.

### P2 — Stock-detail fixed-bottom mobile banner

Evidence:
- `lib/screens/stock_detail_screen.dart` sets `FixedBottomBannerAdSlot` as `bottomNavigationBar` for non-browse users.
- The widget key contains the selected tab name: `stock-detail-bottom-${_selectedTab.name}`. Changing tabs therefore changes the key and reconstructs the ad slot.
- `fixed_bottom_banner_ad_slot_mobile.dart` waits 350 ms, runs privacy/consent gating, then requests an anchored adaptive banner using the stock-detail ad unit.
- Loading and failure states reserve a primary-button-height status area; a loaded ad is rendered inside a SafeArea.
- The widget has no explicit frequency cap/cooldown and no `onPaidEvent` callback.

Marketing interpretation:
- The natural candidate state is “user is consuming stock-detail information,” but current implementation does not distinguish passive reading from high-attention/interactive subflows within the detail surface.
- Tab switching can create additional request opportunities because the keyed slot is reconstructed. That is an implementation fact to measure before treating requests/session or impressions/session as intentional inventory.
- This placement is closer to the BF/AP static-secondary-surface model than Home, but it is not yet decision-grade because core-value guardrails and revenue reconciliation are absent.

### P3 — Additional ad infrastructure exists but is not yet fully mapped

The 1.0.29 tree contains:
- `adaptive_inline_banner_slot*`
- `web_adsense_banner*`
- AdMob privacy/consent manager and mobile ads initializer
- `app-ads.txt` / `ads.txt`

These establish additional monetization infrastructure, but this run does not infer live placement locations without direct screen-level evidence. They remain `unmapped`, not `inactive`.

## Instrumentation gap confirmed

Neither confirmed mobile banner implementation registers Google Mobile Ads `onPaidEvent`. Therefore the BG precision-preserving chain cannot currently be established from these widgets:

`impression → paid event → value/currency/precision → analytics transport → AdMob reconciliation`

The absence of an `onPaidEvent` callback in these confirmed placement widgets means placement-level impression revenue cannot be treated as reconstructed from application code. Firebase/AdMob automatic aggregate reporting may still exist, but it does not substitute for the placement-level BG contract.

No explicit placement-level event logging for request/load/impression/click/revenue, no first-value/useful-return guardrail event binding, and no cap/cooldown ownership were identified in the two confirmed widgets. These are `not evidenced in audited implementation`, not claims that no external configuration exists.

## First live AM–AR + BF + BG registry slice

| ID | Surface | Format | Trigger / request opportunity | Consent gate | Explicit cap/cooldown | Paid-event precision path | BF status | Decision status |
|---|---|---|---|---|---|---|---|---|
| MT-AD-P1 | Home | mobile inline adaptive banner | Home render; reconstructed after detail return via refresh-token key | yes | not evidenced | absent in widget | conflicts with later Home-ad-free direction | freeze optimization; reconcile/remove first |
| MT-AD-P2 | Stock detail | mobile anchored adaptive fixed-bottom banner | detail render; keyed reconstruction on tab change | yes | not evidenced | absent in widget | plausible secondary/static surface, guardrails undefined | instrument and measure before optimization |
| MT-AD-P3 | Other inline/web infrastructure | banner / AdSense | unmapped | varies / unverified | unverified | unverified | unknown | audit next |

## Operational decisions

1. **Release ref is mandatory evidence metadata.** Never audit monetization from repository default branch alone when production/release branches diverge.
2. **Do not optimize MT-AD-P1.** First reconcile actual Home implementation with the later ad-free Home product decision. A policy/implementation conflict is a defect, not an experiment opportunity.
3. **Instrument before optimizing MT-AD-P2.** Add/verify request, load, impression and paid-event evidence with placement identity; preserve value, currency and precision; then reconcile against AdMob before BF revenue testing.
4. **Treat navigation-driven remounts as exposure mechanics.** Home return and stock-detail tab changes must be included in eligible-state/request denominators. Do not mistake extra requests caused by widget lifecycle for user demand.
5. **Do not invent a cap.** First measure natural navigation/exposure distribution and core-value outcomes. Then set a product-owned cap/cooldown only if evidence shows repeated exposure is materially useful and non-intrusive.
6. **No new ad formats until the existing banners are measurable.** Interstitial/rewarded/native expansion would increase inventory complexity before the current revenue and guardrail chain is decision-grade.

## Next audit slice

- Map every use of `AdaptiveInlineBannerSlot`, `FixedBottomBannerAdSlot`, `HomeInlineAdSlot`, and web AdSense components on release 1.0.29.
- Recover exact screen/substate eligibility and whether widget remounts cause repeated requests.
- Inspect Firebase Analytics implementation for ad/request/core-value events.
- Verify whether paid-event callbacks exist outside the widgets before concluding application-wide absence.
- Reconcile the Home-ad-free product decision with release implementation.
- After instrumentation is known, obtain AdMob/Firebase reporting evidence to complete BG rather than inferring revenue quality from code.

## Canonical conclusion

The first implementation audit changes the monetization priority. MintTap already has live banner infrastructure, including a Home banner and a stock-detail bottom banner, but the confirmed widgets do not expose a placement-level paid-event precision path or explicit frequency ownership. The immediate revenue opportunity is therefore **not more inventory**. It is to remove implementation-policy drift, make existing inventory measurable, and distinguish natural user exposure from widget-lifecycle-generated requests before any revenue optimization.