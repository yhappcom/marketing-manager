# Research 403 — Ad Inventory Is a Workflow Contract, Not an Impression Quota

Validated: 2026-10-03

## Decision
For specialist utility apps, maximize revenue first by improving yield and measurement on workflow-safe inventory. Do not create extra full-screen inventory merely because an SDK supports it.

## Authoritative findings
Google's current interstitial guidance says interstitials work best at natural transition points such as completion of a task, and explicitly warns that increasing frequency can degrade user experience and lower CTR. Ads should be preloaded rather than shown as a consequence of the load-completion callback.

Google's current app-open guidance says the format is intended for app loading/foregrounding, recommends waiting until users have used the app a few times before the first app-open ad, and says cold-start ads should remain on a loading screen; once main content has loaded, do not surprise the user with an out-of-context ad.

Current Flutter banner guidance describes anchored adaptive banners as persistent top/bottom layout inventory and inline adaptive banners as the recommended form when ads belong in scrollable content. This supports treating banner placement as layout architecture, not arbitrary insertion.

## JM0–JM9 — Workflow-safe inventory contract
JM0 specialist workflow map
→ JM1 protected-state classification
→ JM2 natural-break identification
→ JM3 format eligibility
→ JM4 first-use/activation protection
→ JM5 preload/readiness contract
→ JM6 frequency/cooldown state
→ JM7 impression-level revenue + precision/source
→ JM8 first/repeated specialist-value guardrail
→ JM9 KEEP / YIELD-OPTIMIZE / REDUCE / REMOVE / HOLD-UNKNOWN

## Protected states
Default to NO FULL-SCREEN AD during:
- onboarding / first activation;
- data entry before durable save;
- import, reconciliation or conflict resolution;
- financial/tax/ROC interpretation where interruption can break context;
- export/certificate generation or other integrity-sensitive output;
- any step where dismissal can be confused with task completion.

A natural break must be demonstrated by the product workflow. Navigation alone is not proof of a natural break.

## MintTap
Do not insert full-screen ads into portfolio editing, ROC/tax-adjustment interpretation, split/reinvestment reconstruction, or reconciliation. If full-screen inventory exists, audit whether it follows a genuinely completed task and whether first/repeated specialist value changes after exposure. Prefer yield optimization of already-safe inventory before adding impressions.

## LogMate
Treat flight entry, import/migration, duplicate reconciliation, Previous Total continuity, certificate/export, and other log-integrity workflows as protected. Pre-launch monetization should not create artificial breaks in professional recordkeeping. Mobile banner inventory can be evaluated separately from PWA monetization architecture.

## Reusable operating rule
Revenue optimization order:
1. verify policy/privacy/readiness;
2. verify workflow-safe inventory;
3. repair request/load/impression/paid-event loss;
4. improve mediation/source yield on existing inventory;
5. measure specialist-value impact;
6. only then test additional inventory at a verified natural break.

A higher impression count with weaker activation, repeat specialist value, or record/task integrity is not a monetization win.

## Sources
- Google for Developers, Interstitial ads (current): https://developers.google.com/admob/flutter/interstitial
- Google for Developers, Interstitial best practices (current): https://developers.google.com/admob/ios/interstitial
- Google for Developers, App open ads (current): https://developers.google.com/admob/ios/app-open
- Google for Developers, Banner ads for Flutter (current): https://developers.google.com/admob/flutter/banner
