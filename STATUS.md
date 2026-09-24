# Marketing Manager Status

Last updated: 2026-09-24

## Phase
Foundation and Sparse-Niche Decision Science are complete. General theory is frozen by default; new work follows live product evidence, authoritative platform changes, framework failures, or operational gaps.

Canonical growth chain:
`relevant demand → audience-native language → credible promise → specialist utility → truthful Store/community/owned-web surface → intent-matched Store destination → qualified acquisition/reactivation → matching in-app destination → meaningful/restored core value → repeated core value → current privacy/consent state → verified seller/domain authorization → privacy-eligible non-intrusive monetization → eligible ad opportunity → request/supply/delivery diagnosis → impression-level revenue → traffic-quality integrity → reconciled sustainable revenue`

## Canonical knowledge state
Research 042–079 remains canonical. Post-freeze additions 080–245 extend the operating system. Recent gates: EU Sparse-Niche Store Experiments (235); EV Rating/Review Integrity (236); EW Apple Campaign Attribution (237); EX Google Play UTM/Install Referrer (238); EY Apple Custom Product Page Intent Routing (239); EZ Google Play Custom Store Listing Intent Routing (240); FA app-ads.txt Authorization & Readiness (241); FB Impression-Level Revenue (242); FC Delivery & Mediation Diagnosis (243); FD Invalid-Traffic & Traffic-Quality Growth Integrity (244); **FE0–FE5 Consent-State & Revocation Integrity (245)**. Earlier canonical gates remain in force.

## Latest validated addition — 245
Ad consent is a mutable runtime state, not a one-time launch checkbox. Google requires a Google-certified CMP integrated with IAB TCF for personalized ads in the EEA/UK and Switzerland, and UMP guidance requires a revocation/privacy-options path. Consent mode distinguishes ad storage, ad personalization, ad user data and analytics storage; these states must not be collapsed.

A correct consent UI is not proof that downstream ad requests carry the correct state. Current next-generation Android guidance specifically notes that UMP's under-age-of-consent flag is not automatically forwarded to the Mobile Ads SDK, so age-restricted treatment must also be configured on ad requests.

FE0–FE5: `regulatory/message identity → choice-state integrity → signal identity → request-path integrity → measurement integrity → sustainable decision`.

Preserve: `dialog shown ≠ effective consent`; `consent once granted ≠ permanent`; `UMP state ≠ automatically identical to ad-request state`; `analytics decline ≠ engagement decline when analytics eligibility changed`; `revenue decline ≠ placement/mediation failure when consent mix changed`.

## Immediate next targets
1. Apply FA+FB+FC+FD+FE to MintTap production: reconstruct authorization, consent/request state and `ad unit → UI surface → eligible opportunity → request/load/impression/paid-event`; verify Policy Center history, traffic changes, placement risk, precision and reconciliation before changing density, format, floor or mediation.
2. Audit MintTap UMP/CMP implementation, privacy-options/revocation availability, consent-message configuration/version, effective ad-request state and whether monetization/analytics reports can distinguish material consent-state changes.
3. Audit MintTap Store-visible developer website(s), app-ads.txt hostname/root/redirect, AdMob verification and app-readiness state.
4. Audit MintTap Apple CPPs and Google Play CSLs against one business-level intent registry without ticker-by-ticker fragmentation.
5. Apply EW+EX+EM to actual MintTap external Store links, Apple Sources/Campaigns, Google Play acquisition evidence, Reddit, owned web and social distribution.
6. Verify MintTap Play Install Referrer implementation and retained-installer evidence.
7. Apply EV/EU/ET/ER/ES to actual ratings, experiments, technical quality and accessibility evidence before further Store optimization.
8. LogMate: if AdMob is planned, include domain authorization, certified consent/revocation, downstream request-state verification, test-device separation, eligible inventory, paid-event measurement and traffic-quality evidence in pre-monetization readiness; keep core workflows protected.

## Unresolved questions
**MintTap:** actual UMP/CMP version/configuration; consent-message state; privacy-options/revocation path; effective downstream ad-request state; consent-state observability in analytics/monetization; production ad-unit/surface map; request/load/impression/paid-event funnel; Policy Center history; test-device configuration; traffic-quality discontinuities; placement risks; adapter/source errors; mediation/floor configuration; paid-event precision/reconciliation; Store developer-domain/app-ads.txt/readiness state; CPP/CSL inventory; acquisition/referrer evidence; ratings/reviews; Store experiments; Android vitals; accessibility declarations; community/referral evidence; owned-web demand evidence.

**LogMate:** whether/when AdMob is planned; if so, certified CMP/consent/revocation/request-state architecture, domain/app-ads.txt authorization, test-device separation, eligible non-critical inventory, paid-event/delivery/traffic-quality dependencies; post-release Store routing evidence; launch analytics; review/experiment readiness; accessibility; pilot-community permissions; Store-search demand; privacy readiness; owned-web routing.

**Company-wide:** model regulatory applicability, CMP/message, current user choice, revocation, effective advertising/analytics signals and downstream ad-request configuration as separate states. Treat consent-state composition as a possible confounder in revenue/eCPM/analytics changes. Default to `diagnose before expanding`; never increase ad pressure to compensate for privacy-driven eligibility changes.

## Progress interpretation
Zero-cost success is not page count, campaign links, attributed downloads, rankings, clicks, followers, ratings, installs, Store conversion, Reddit karma, ad requests, fill, impressions, CTR, eCPM or estimated impression revenue alone. Sustainable growth requires truthful specialist intent → matching promise → first and repeated specialist value, with reliable technical experience, current user-controlled privacy state, verified monetization authorization, non-intrusive delivery, diagnosed losses, valid traffic, precision-aware revenue measurement and reconciliation.
