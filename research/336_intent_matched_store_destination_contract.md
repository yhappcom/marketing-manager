# Research 336 — Intent-Matched Store Destination Contract

Validated: 2026-09-30

## Decision
For sparse specialist apps, acquisition optimization should route a known specialist intent to a matching Store narrative before spending scarce traffic on randomized cosmetic tests. Destination matching and Product Page Optimization are different jobs.

## Authoritative findings
Apple currently allows up to 70 Custom Product Pages (CPPs). A CPP can vary screenshots, promotional text, previews, and keywords; it has a unique URL, can be localized, and can be measured separately in App Analytics. Apple also permits keywords from the latest approved app version to be assigned to a CPP so that the matching CPP, rather than the default page, can appear for those searches. Keyword combinations should be unique to one CPP. CPP metadata must pass App Review.

A CPP can carry a deep link on iOS/iPadOS 18+ so that opening the installed app can continue to a specific in-app destination. Apple recommends universal links and explicitly advises testing the deep link. Disabled/deleted CPP URLs fall back to the default product page, so retirement must include link-inventory cleanup rather than assuming old links fail closed.

Apple publicly reports an average 2.5 percentage-point conversion increase for referred users reaching CPPs versus its cited 1.6% default-page average. Treat this as platform-wide descriptive evidence, not a forecast for MintTap or LogMate.

## IL0–IL9
IL0 specialist-intent evidence → IL1 claim/evidence eligibility → IL2 materially distinct destination need → IL3 default-vs-custom choice → IL4 keyword/URL routing integrity → IL5 screenshot/copy continuity → IL6 optional deep-link continuity → IL7 sparse-traffic measurement → IL8 downstream specialist-value check → IL9 KEEP / CREATE / MERGE / REPAIR / RETIRE / UNKNOWN.

## Operating rules
1. Do not create a CPP merely because Apple permits 70. One page must correspond to a materially distinct intent/workflow with enough evidence to justify different Store framing.
2. A custom destination is not an A/B-test treatment. Use CPP for deterministic intent matching; use PPO only when randomized evidence on the default product page is actually needed and traffic can support it.
3. Do not duplicate near-identical pages by ticker, aircraft, airline, country, or channel unless user intent, product workflow, evidence, or qualification genuinely changes.
4. Each CPP claim remains subject to the Claim Registry. Roadmap functionality, unsupported authority, or future workflow cannot be advertised as current capability.
5. Measure page-level impressions/downloads/conversion, but promotion decisions require first/repeated specialist value downstream. Sparse/censored cohorts remain UNKNOWN rather than zero.
6. Retiring a page requires auditing every owned/community/social link that still carries its unique URL because Apple can fall back to the default page.

## MintTap
Candidate intent clusters are not ticker pages. Highest-value candidates, subject to actual Store/search evidence, are:
- distribution/ROC understanding and provenance;
- split/reinvestment reconstruction;
- portfolio recovery/total-return understanding.
Do not make TSLY/CONY/MSTY/NVDY clones without evidence of materially different intent. Financial claims remain tightly qualified.

## LogMate
Post-launch candidates, only after the workflows exist and are verified:
- import/migration continuity;
- fast multi-leg flight logging;
- record/export/backup continuity.
Pre-launch, CPPs can be prepared with the first app submission, but they must not claim unshipped capability. Deep-link continuity is especially valuable only when it lands on a verified relevant workflow rather than Home.

## Reusable rule
For a niche app, prefer:
problem evidence → intent cluster → matching Store destination → matching first specialist workflow → repeated value
over:
channel → generic Store page → install count.

## Sources
- Apple Developer, Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- App Store Connect Help, Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- App Store Connect Help, Submit a custom product page: https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-a-custom-product-page

## Next validation
Audit MintTap's actual CPP inventory, assigned keywords, live unique URLs, link destinations, and page-level analytics before creating any new destination. For LogMate, defer execution until launch claims/workflows are stable enough to pass the same contract.
