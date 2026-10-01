# Research 353 — Store Intent Routing Must Be Measured Beyond Install

Validated: 2026-10-01

## Why this closes a real gap

Research 352 established that Apple Custom Product Pages (CPP) and Google Play Custom Store Listings (CSL) can route distinct search intent to differentiated Store pages. The missing control was the outcome horizon: a routed page can improve Store conversion while attracting users whose downstream specialist value is weaker. For sparse niche apps, install conversion alone is therefore insufficient.

## Authoritative platform facts

### Apple

Apple currently permits up to 70 CPPs. A CPP can have differentiated screenshots, previews, promotional text and keywords. Approved keywords can cause the CPP to appear instead of the default product page for matching searches. Apple explicitly recommends that assigned keywords match page intent and that each page use a unique keyword combination.

Apple App Analytics can measure CPP impressions, downloads and conversion rate. Apple also documents deeper CPP measurement, including engagement, retention and average proceeds per paying user. CPPs may additionally use a deep link on iOS/iPadOS 18+ so that the Store promise can continue into a specific in-app destination.

Operational consequence: CPP success is not “higher conversion.” The route should preserve intent from search → Store promise → install → intended first-value path → repeated value.

Sources:
- https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- https://developer.apple.com/app-store/custom-product-pages/
- https://developer.apple.com/app-store/search/

### Google Play

Google Play currently permits up to 50 CSLs. CSLs can target search keywords, countries/regions, ads traffic, pre-registration and several lifecycle/user segments. Search-keyword targeting can include spelling corrections and translations in the keyword bundle.

Google Play Store performance reporting exposes dimensions including search term and Store listing, with metrics including visitors, install clicks/CTR and Store listing acquisitions. This makes intent/listing-level acquisition diagnosis possible where sufficient data is available.

CSLs are not automatically translated. A route that is semantically correct in one language can therefore become a localization failure if the targeted audience receives the CSL default language instead of a maintained translation.

Sources:
- https://support.google.com/googleplay/android-developer/answer/9867158
- https://support.google.com/googleplay/android-developer/answer/9859173

## New operating contract — JO0–JO9

JO0 — Intent evidence
: Identify a recurring specialist search/job from observed evidence, not keyword-tool volume alone.

JO1 — Material distinction
: Separate a route only when the user problem, promise, proof or first-value path is materially different. Synonyms stay clustered.

JO2 — Truthful Store promise
: Every differentiated screenshot/copy claim must remain backed by the Claim Registry and current product behavior.

JO3 — Localization integrity
: Verify every routed language/market. Never assume CSL auto-translation; Apple CPP localization must also preserve the same claim scope.

JO4 — Destination continuity
: The post-install experience must make the promised job easy to reach. Where Apple CPP deep links are appropriate and supported, they may tighten this continuity; otherwise onboarding/navigation must do it.

JO5 — Store outcome
: Measure exposure/visits and Store conversion/acquisition by route where platform data permits.

JO6 — First specialist value
: Determine whether routed acquisitions complete the promised first-value action. A conversion lift without first-value lift is not a validated win.

JO7 — Repeated specialist value
: Compare retention/repeated job completion or the closest trustworthy proxy. Apple CPP analytics can contribute retention/engagement evidence; product analytics must complete the cross-platform picture.

JO8 — Sparse-evidence discipline
: Do not multiply routes faster than traffic can distinguish material outcomes. Low-volume routes remain UNKNOWN/HOLD rather than being declared winners from noisy conversion changes.

JO9 — Decision
: DEFAULT / ROUTE / MERGE / REPAIR-CONTINUITY / REPAIR-LOCALIZATION / HOLD / RETIRE / UNKNOWN.

## MintTap application

Do not create ticker-by-ticker Store pages merely because ticker queries exist. Candidate route families remain problem-led: distribution/ROC tracking, split + reinvestment reconstruction, after-tax/recovery understanding, and portfolio total-return tracking.

A route is retained only if it produces a coherent chain:

search intent → matching Store promise → install/acquisition → promised MintTap workflow reached → first useful result → repeated specialist use.

If a ROC-oriented page converts better but those users do not reach or repeat the ROC/distribution workflow, the correct response is not “scale the winning creative.” Diagnose promise mismatch, navigation friction, measurement error or low-quality intent first.

## LogMate application

Pre-launch, avoid proliferating pages around generic synonyms such as pilot logbook / flight logbook / digital logbook. Distinct routes become justified only when evidence supports materially different professional jobs, such as migration/import continuity, rapid multi-leg logging, Previous Total continuity, or offline/export integrity.

For a professional audience, Store conversion is subordinate to workflow credibility. A page that attracts more installs but weaker first/repeated pilot value is a failed route.

## Reusable niche-app rule

The unit of ASO optimization is not the keyword and not the Store page. It is the verified intent-to-value chain.

Optimize:
specialist intent × truthful promise × destination continuity × first value × repeated value

subject to:
traffic sufficiency, localization integrity, platform policy, and maintenance cost.

This prevents a common niche-app failure: increasing Store conversion by broadening or sharpening a promise that does not survive contact with the product.

## What this research does not claim

- Apple CPP keyword assignment does not guarantee ranking.
- Google CSL keyword targeting does not guarantee that sparse traffic will yield decision-grade reporting.
- Higher Store conversion does not prove incremental business value.
- Platform-attributed retention or acquisition is not causal incrementality.
- A deep link is not required for every CPP and should not be created solely to manufacture measurement.

## Next operational target

Audit MintTap's actual Store inventory and analytics evidence. Build an intent-route ledger containing: platform, intent cluster, search evidence, current destination/default page, differentiated claim, localization, first-value event, repeated-value event, traffic sufficiency, and JO decision. Do not create a new CPP/CSL until that ledger shows a materially distinct route with measurable downstream value.
