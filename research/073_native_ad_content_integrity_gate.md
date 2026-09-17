# 073 — Native Ad Content-Integrity Gate

Validated: 2026-09-17

## Why this exists
069–072 establish value timing, return timing, exposure quality, and interaction geometry. Native ads add a different risk: because they deliberately use app-native UI components, a visually integrated ad can become *too* similar to specialist content. In MintTap or LogMate, that can damage trust even if the placement is technically after value and spatially safe.

## Authoritative findings
Google's current Mobile Ads SDK documentation states that native ads are rendered with UI components native to the app and can be formatted to match the app design. It also requires visible ad attribution and an AdChoices overlay, and warns not to place custom click handlers over/within the native ad view; SDK asset views handle clicks. Current guidance also says the AdChoices overlay must remain visible and have adequate contrast/space. Native ads have material lifecycle/resource costs: cache only what is needed, destroy unused ads, and avoid continuous retry loops after load failure.

Sources checked 2026-09-17:
- https://developers.google.com/admob/android/next-gen/native/advanced
- https://developers.google.com/admob/android/native
- https://developers.google.com/admob/android/native/options

## Core distinction
**Native-looking is not content-equivalent.**

A native ad can be visually coherent without being allowed to inherit the semantics, authority, or interaction grammar of professional app content.

For specialist apps, ad/content confusion has a larger trust cost than in generic entertainment feeds. A YieldMax investor must not plausibly read an advertiser card as MintTap portfolio analysis, distribution/ROC information, or an investment-related recommendation. A pilot must not plausibly read an advertiser card as a flight record, operational notice, compliance item, roster/import result, or calculated logbook value.

## C0–C5 content-integrity classification
- **C0 UNKNOWN** — native placement has not been reviewed in real layouts/accessibility states.
- **C1 DISGUISED/SEMANTIC COLLISION** — ad can reasonably be mistaken for app-owned specialist information or an action/result produced by the app. Reject.
- **C2 ATTRIBUTION FRAGILE** — attribution/AdChoices exists nominally but can become unclear through contrast, clipping, text/display scaling, localization, responsive layout, or surrounding design. Reject until fixed.
- **C3 VISUAL/INTERACTION MIMICRY** — ad is labeled, but card hierarchy, icons, CTA treatment, or placement closely imitates a high-trust app component. Redesign before monetization optimization.
- **C4 DISTINCT NATIVE INTEGRATION** — visually compatible with the app while unmistakably advertising; attribution remains robust and the ad does not impersonate a specialist object. Candidate inventory only if B/E/I gates also pass.
- **C5 STABLE CONTENT-SAFE INVENTORY** — C4 plus production evidence across device sizes, text/display scaling, localization and repeated use, with no material confusion/traffic-quality signal. Eligible for cautious optimization.

## Required combined gate
A native placement is not monetization-ready merely because native ads often blend better visually than banners.

Eligibility requires at minimum:
`B4/B5 value boundary + E4/E5 exposure + I4/I5 interaction geometry + C4/C5 content integrity`.

If any gate fails, increasing fill, density, refresh-like replacement, or native-card prominence is premature.

## Specialist semantic firewall
Never style or position an ad so it can plausibly inherit one of these meanings:

### MintTap
- portfolio holding/result card;
- dividend/distribution/ROC result;
- tax-adjustment result;
- ticker-specific analytical conclusion;
- app-generated recommendation or alert.

### LogMate
- FlightRecord/logbook row;
- calculated total/time result;
- import/duplicate-resolution result;
- regulatory/compliance status;
- operational/company notice.

The firewall applies even when the advertiser happens to be financially or aviation relevant. Relevance does not grant product authority.

## Accessibility/responsive audit
Native-ad compliance and trust must survive the same layout states as the product. For each candidate placement verify:
1. ad attribution remains visible and semantically clear;
2. AdChoices remains visible with adequate contrast/space;
3. large text/display scaling does not hide or crowd attribution;
4. localization does not truncate the advertising label;
5. media/CTA does not overlap product controls;
6. the ad container remains distinguishable from adjacent specialist cards;
7. screen-reader order does not imply the ad is part of the preceding result.

A default-device screenshot is insufficient evidence.

## Native inventory economics
Do not assume native automatically monetizes better because it is more integrated. Measure:
`eligible C4/C5 exposures → impressions → legitimate engagement/revenue → useful-return completion → rapid exit/background → retained qualified use`.

A CTR increase accompanied by more semantic confusion, accidental interaction, or lower useful-return completion is not a win. 072's rule still applies: accidental CTR is not monetization success.

## Resource/performance guardrail
Native ads have heavier asset/lifecycle requirements than simple banners. Production experiments must include load latency, memory/resource behavior, failed-load retry behavior and impact on the value surface. Never delay specialist content to wait for a native ad. Cache only immediately useful inventory and destroy unused native ads according to SDK guidance.

## Current product decision
- **MintTap:** native-ad substitution/experimentation is NOT ELIGIBLE. The existing Home placement still lacks the complete 069–072 production ledger. A native format cannot be used as a shortcut around unresolved value/exposure/interaction evidence.
- **LogMate:** NOT ELIGIBLE. No validated specialist first-value boundary exists yet.

## Reusable rule
**Integration must reduce visual disruption without reducing semantic separation.**

The objective is not to make ads look like content. The objective is to make advertising coexist cleanly with content while remaining unmistakably advertising.

## Next evidence target
Do not study another ad format next. For MintTap, populate the real Home placement ledger with B/E/I classification first. If native is later considered, add C-class, attribution/AdChoices visibility under accessibility/localization states, and performance/resource evidence before any revenue comparison.