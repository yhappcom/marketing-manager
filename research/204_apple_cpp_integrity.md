# Research 204 — Apple Custom Product Page Integrity

Validated: 2026-09-23

## Findings
Apple currently permits up to 70 Custom Product Pages (CPPs) per app. Pages can vary screenshots, promotional text and app previews, can be localized, and have unique URLs. Developers can assign approved App Store keywords to a CPP so it can appear instead of the default page for those searches. Apple recommends matching keyword intent to the page and using unique keyword combinations per page.

CPP metadata is reviewed and can be submitted independently of an app-version update for an already approved app. CPPs can carry a deep link; deep-link behavior is supported on iOS 18/iPadOS 18 or later, so fallback behavior still matters.

App Analytics provides CPP impressions, downloads/redownloads and conversion data and supports retention/proceeds comparison. Individual CPP data appears only after at least five first-time downloads. Missing sparse data is therefore unknown, not zero.

Apple reports an average 2.5 percentage-point conversion-rate increase when people are referred to CPPs versus its cited 1.6% average default-page conversion rate. This is aggregate Apple evidence, not an app-specific forecast.

## DP0–DP5 gate
- DP0 Page necessity: create a CPP only when a durable audience job or search intent needs materially different Store communication.
- DP1 Entry identity: distinguish unique URL, assigned search keyword, other Store surfaces, and paid traffic if ever used. CPP identity alone does not identify source.
- DP2 Promise integrity: keywords and creative claims must match intent and currently shipped capability.
- DP3 Destination continuity: preserve `entry intent → Store promise → install/open state → deep-link/fallback → specialist task → value completion`. Test new-install, already-installed, onboarding, unsupported-OS and invalid-destination states.
- DP4 Sparse measurement: preserve Apple's five-first-time-download visibility threshold. Do not interpret missing analytics as zero demand or Store conversion alone as downstream success.
- DP5 Scale/retire: retain a CPP only while intent remains distinct, claims/localization remain current, destination works, and evidence justifies maintenance.

## Canonical rules
`CPP available ≠ CPP needed`; `70-page capacity ≠ segmentation target`; `unique CPP URL ≠ attribution truth`; `keyword assigned ≠ rank guarantee`; `keyword match ≠ qualified-user match`; `CPP conversion lift ≠ downstream-value lift`; `Apple aggregate uplift ≠ app-specific forecast`; `deep link configured ≠ destination continuity proven`; `approved CPP ≠ permanently truthful CPP`; `no visible CPP analytics ≠ zero activity`; `same CPP ≠ same acquisition source`.

## Product application
MintTap: do not create ticker-by-ticker or post-by-post CPPs. First recover production inventory and demand evidence. Create a page only when a durable specialist job has a genuinely different promise and shipped destination. Community/blog/social CPP URLs may improve route-message continuity, but attribution remains separate.

LogMate: prepare hypotheses before launch rather than proliferating pages. After production evidence exists, distinct pilot jobs such as importing an existing logbook versus starting a new digital logbook may warrant separate pages only when both are shipped, materially different and supported by maintained destinations.

## Registry
`cpp_id | reference_name | locale | lifecycle_state | specialist_job | entry_route_types | unique_url | assigned_keywords | claim_set | asset_version | capability_evidence | deep_link | fallback | min_os_behavior | review_state | analytics_visibility_state | store_metrics | downstream_guardrails | last_revalidated | retirement_trigger`

## Sources
- Apple Developer — Custom Product Pages
- App Store Connect Help — Configure multiple product page versions
- App Store Connect Help — Submit a custom product page
- Apple Developer — App Store search
- App Store Connect Analytics Help — Custom Product Pages

## Next evidence task
Audit MintTap production CPP inventory before creating anything new: page IDs/reference names, review state, locales, unique URLs, assigned keywords, creative/claim versions, entry routes, deep links/fallbacks, analytics visibility, threshold state, conversion and downstream specialist-value evidence. Unknown remains unknown.
