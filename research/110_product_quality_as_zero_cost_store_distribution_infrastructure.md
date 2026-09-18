# 110 — Product quality as zero-cost Store distribution infrastructure

Validated: 2026-09-19

## Why this is a new layer
The existing operating system separates acquisition, Store conversion, useful return and monetization. A remaining gap is that Google Play explicitly treats product quality and user behavior as inputs to Store visibility/quality treatments. Marketing therefore cannot treat technical/product quality as merely downstream engineering work.

## Canonical principle
**For a sparse niche app, product quality is part of zero-cost distribution infrastructure. Do not buy, manufacture or optimize more acquisition while the platform can observe avoidable user loss, instability or weak sustained value.**

This is not a claim that every quality metric directly determines ranking. Only use causal language where the platform states it. Apple publicly identifies text relevance and customer behavior such as downloads and ratings/reviews as App Store search factors; Google is more explicit that core vitals affect Play visibility and that user metrics can determine eligibility for quality treatments.

## Authoritative findings
### Google Play
Google's current Android quality guidance says Play evaluates app quality using user metrics and in-app evaluation, including user loss/uninstalls, DAU, MAU, ad load, usability, performance and content/feature depth. For certain Play details-page treatments (beta), published user-metric requirements include user loss rate <5%, DAU/MAU >8%, sufficient engaged users, and measurement across at least 24 days in a 30-day period. These are treatment eligibility criteria, not universal ranking thresholds.

Android vitals states core vitals affect Play visibility. Current published bad-behavior thresholds include user-perceived crash rate 1.09% overall and user-perceived ANR rate 0.47% overall, with separate per-device thresholds. Play evaluates quality over a rolling 28-day period. Google also states that apps exceeding thresholds may have visibility reduced and may receive Store-listing warnings. Memory/bitmap/code-optimization visibility effects are scheduled to begin in February 2027, so they are tracked as a future platform change rather than a current MintTap growth claim.

Google's core-value guidance explicitly says acquisition metrics are generally not a good measure of core value because marketing spend and other factors can influence them. It says user value must exist on first use and over time and should match the target audience's needs. This strongly supports the existing first-value/K3 useful-return architecture.

### Apple
Apple's public App Store search documentation says ranking uses multiple factors including text relevance and customer behavior, with downloads and ratings/reviews named examples. Apple does not publicly provide an equivalent Google-style crash/ANR visibility threshold on the reviewed discoverability pages. Therefore do not claim that improving a particular Apple crash metric will directly increase ranking without further authoritative evidence.

## AB0–AB5 Product-Quality Distribution Gate
- **AB0 — invalid:** known severe crash/ANR/data-loss/deceptive or unusable core path; marketing acceleration is prohibited.
- **AB1 — acquisition-only:** Store/community traffic is optimized while post-install loss and technical quality are unknown.
- **AB2 — observed:** technical/user-loss metrics are monitored, but there is no job-specific first-value/useful-return diagnosis or release ownership.
- **AB3 — controlled minimum:** core specialist jobs are production-valid; Google core-vitals/user-loss signals are below applicable bad-behavior thresholds or explicitly investigated; first-value and K3 useful-return are defined; regressions have owners; acquisition changes are evaluated against downstream quality rather than installs alone.
- **AB4 — validated:** multiple releases show stable quality plus useful return, and additional qualified acquisition does not materially worsen loss, support burden or trust.
- **AB5 — reusable:** the release/growth quality gate and evidence schema transfer to another niche app without assuming identical cadence or platform thresholds.

AB3 is the minimum for deliberate acquisition scaling. It is not a requirement to wait for large-sample DAU/MAU treatment eligibility when a niche app cannot yet generate that sample; sparse/insufficient data must be recorded as unknown, not failure or success.

## MintTap implications
1. Before increasing Reddit/blog/SNS posting frequency or Store experimentation, audit Play Console Android vitals, user loss/uninstall metrics and any quality-treatment eligibility visible in the account.
2. Map failures to specialist jobs: portfolio creation/import, transaction entry, distribution/ROC/reverse-split tracking, tax adjustment and return calculations. A generic crash-free percentage without job context is insufficient.
3. Never add ad inventory merely to improve short-term revenue if ad load increases user loss or damages useful return; Google's own quality model lists ad load among experience signals it may consider.
4. A successful zero-cost post that produces installs but increases rapid uninstall/support failures is not a marketing success. Route evidence must continue through first value and K3 useful return.
5. Do not market around a known material calculation/data-integrity defect. For a financial tracker, correctness and persistence failures are trust failures even when they do not cross a platform crash threshold.

## LogMate implications
Prelaunch pilot evidence remains more valuable than premature acquisition. AB3 for LogMate should cover production-valid manual entry, persistence, totals/search, offline/backup and recovery paths before community launch acceleration. Because flight-log data is professionally consequential, data-loss/corruption is an AB0 blocker even if platform technical metrics look healthy.

## Reusable release-to-growth contract
For each release record:
`release → affected specialist jobs → crash/ANR/data-integrity status → user-loss status → first-value impact → useful-return impact → support/review themes → ad-load change → Store/community acquisition change → AB-class → owner/action`

Use platform metrics as diagnostics with their exact definitions. Never infer causality from a simultaneous Store-visibility change unless the platform evidence or a controlled test supports it.

## Operational rule
Marketing Manager should participate in release readiness only at the growth boundary: identify whether a known product-quality issue invalidates acquisition, Store experimentation or monetization scaling. Engineering remains responsible for remediation. This prevents marketing from becoming a second QA organization while preserving the causal chain from promise to retained utility.

## Sources
- Android Developers, User metrics on Google Play: https://developer.android.com/quality/core-value/user-metrics
- Android Developers, Android vitals: https://developer.android.com/topic/performance/vitals
- Android Developers, What great core value looks like: https://developer.android.com/quality/core-value
- Apple Developer, Discovery on the App Store: https://developer.apple.com/app-store/discoverability/
- Apple Developer, App Store search: https://developer.apple.com/app-store/search/

## Next evidence work
Audit MintTap's live Play quality state before assigning AB-class: current user-perceived crash/ANR rates, user-loss metric, sufficient-sample status, quality-treatment eligibility/warnings, and affected specialist jobs. Do not infer unavailable Console values.