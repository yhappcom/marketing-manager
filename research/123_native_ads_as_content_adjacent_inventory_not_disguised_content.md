# 123 — Native ads as content-adjacent inventory, not disguised content

Validated: 2026-09-19

## Decision
Native ads are not automatically the least-intrusive or best-fit format for a specialist utility. Their advantage is layout integration; their corresponding risk is ambiguity. The company should use native inventory only where an advertisement can sit beside a genuine content/feed/list unit without being mistaken for that content, without occupying a protected core-workflow control surface, and without creating accidental-click incentives.

## Authoritative findings
Google describes native ads as ad assets rendered through the app's own native UI components. The app controls presentation, so implementation responsibility is materially higher than for a fixed banner. Required native elements include clear ad attribution and AdChoices; attribution exists specifically so users do not mistake the unit for app content. Google also provides a native-ad validator on test ads and warns that publishing before fixing detected implementation issues can produce a policy violation.

Google publisher policy treats accidental clicks as invalid traffic. Ads must not be implemented to encourage or cause accidental clicks. Google's Confirmed Click system can add a second confirmation when placements appear to generate accidental clicks; the remedy is sustained improvement in click quality, not optimizing around the confirmation layer.

Native loading also has operational constraints: cache only what is needed, destroy unused ads, and treat roughly one hour as the cache lifetime in Google's implementation guidance. Full-screen native exists, but Google's own examples position it around content experiences such as social/story feeds. Existence of the format is not evidence of fit for a utility app.

Sources:
- https://developers.google.com/admob/android/native
- https://support.google.com/admob/answer/9923650
- https://support.google.com/admob/answer/12243577
- https://support.google.com/admob/answer/10094971
- https://support.google.com/admob/answer/3342054
- https://support.google.com/admanager/answer/7031536
- https://developers.google.com/admob/ios/native/full-screen

## AO0–AO5 Native Content-Adjacency Gate

### AO0 — prohibited/deceptive
Ad is disguised as app content; attribution/AdChoices is absent, obscured or unreliable across accessibility/display-size states; placement causes or solicits accidental clicks; or the ad replaces/blocks a protected core action.

### AO1 — format-first inventory
Native is selected because it can visually blend with the app, because SDK revenue guidance suggests it, or because a slot can technically be inserted. No natural content adjacency or specialist-user rationale exists.

### AO2 — plausible placement
A real list/feed/content surface exists and native placement is plausible, but production rendering, attribution visibility, accessibility/display-size behavior, accidental-click risk, denominator and downstream guardrails are not yet evidenced.

### AO3 — evidence-ready placement
Require all of:
1. a naturally recurring content/list surface that exists without advertising;
2. protected core task controls excluded;
3. unmistakable ad attribution and visible AdChoices across supported screen/display/text-size states;
4. no visual treatment that makes the ad impersonate portfolio rows, transactions, flight records, alerts, calculations or system messages;
5. adequate separation from navigation/edit/delete/submit controls;
6. test-ad validation before release;
7. explicit eligible-opportunity denominator and ad-unit identity;
8. impression-level revenue instrumentation compatible with U;
9. AC privacy and AD age/capability compatibility;
10. first-value/useful-return, accidental-click/Confirmed-Click and support/reputation guardrails;
11. cache/resource lifecycle owned and tested.

### AO4 — observed retained economics
AO3 plus production evidence that incremental retained-user revenue is positive without material degradation of useful return, core-task completion, accidental-click quality, support burden or reputation. CTR is never a success metric by itself.

### AO5 — reusable portfolio rule
Placement archetype, exclusion zones, accessibility QA, validator evidence, economics, retirement trigger and ownership are reusable across niche apps without assuming that a feed-like surface exists in every product.

## MintTap application
Potential native inventory must be evaluated by semantic surface, not screen space. A native ad must never visually resemble a holding, transaction, dividend/distribution event, ROC/tax item, exchange-rate result, warning or portfolio calculation. Those objects carry financial meaning; ad/content ambiguity would damage both trust and click quality.

If MintTap eventually has a genuine editorial/news/education feed whose cards exist independently of ads, an in-feed native unit can be an AO2 candidate. Portfolio tables, transaction history, distribution/ROC history and tax-adjustment workflows are not candidates merely because they are lists.

Default now: do not add native inventory solely to increase ad density. Audit existing app surfaces first. A simple non-obstructive banner may be safer than a visually integrated native unit where content semantics are high-stakes.

## LogMate application
Flight records, totals, crew search results, import-preview rows, duplicate-review records, backup/restore state and operational warnings are protected semantic surfaces. Native ads must not imitate or interrupt these records.

A future educational/community content feed could be assessed separately, but LogMate currently has no launch need to create such a feed for monetization. Full-screen native is especially unjustified unless the product later develops a genuine full-screen content stream independent of ads.

## Measurement contract
Do not optimize native CTR. High CTR can represent relevance or accidental ambiguity. Track:
`eligible natural placement opportunities → request → fill → rendered impression → paid event → revenue`
and pair it with:
`core-task completion / useful return / accidental-click or Confirmed-Click signals / support complaints / retention`.

The business question is incremental retained-user revenue per eligible natural opportunity, not clicks per impression.

## Reusable rule
`native-looking` must mean design-compatible, never content-indistinguishable. If the ad only performs because users can confuse it with the specialist object they came to inspect, the inventory is invalid strategically even before a formal policy action occurs.

## Next validation
Audit MintTap for any existing native ad units and every candidate list/feed surface. Capture production/test rendering at supported display/text sizes, verify attribution/AdChoices and separation from interactive controls, run the native-ad validator, then assign AO class. If no natural content-adjacent surface exists, close native inventory as not applicable rather than inventing one.