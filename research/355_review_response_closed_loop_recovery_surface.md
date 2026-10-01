# Research 355 — Review Response as a Closed-Loop Recovery Surface

Date: 2026-10-01
Status: VALIDATED
Scope: MintTap, LogMate, reusable niche-app marketing operating system

## Decision

Treat public Store-review responses as a post-failure recovery and product-feedback surface, not as promotional copy and not as a substitute for support.

The operating loop is:

review evidence → classify defect/expectation → resolve or route → verify repair → truthful public response → reviewer re-engagement opportunity → update product/support/Store claims where needed → measure recurrence.

A response is valuable when it closes a real specialist problem or documents a verified repair. Response volume is not a KPI.

## Authoritative findings

### Apple
Apple states that developer responses can improve user experience and ratings; the reviewer is notified and can update the review. Apple recommends concise, respectful, personalized replies that directly address feedback, without personal information, marketing language, or spam. If response capacity is limited, prioritize low-star reviews and current-version technical issues. When an update fixes an issue mentioned in an older review, Apple recommends disclosing the fix in release notes and considering a reply to the affected review to re-engage the user.

Apple also exposes filtering by app version, rating, and response/edit state, which makes version-specific defect clustering operationally possible.

### Google Play
Google states that public developer responses exist to resolve app problems and build relationships. Replies must be relevant, clear, valuable, truthful, and directly address the review. Solicitation and promotion are prohibited. After a reply, the reviewer receives push and email notifications; the notification includes the reply and a link to contact the developer using the Store Listing contact email. Google also supports review notifications and daily CSV reports.

## New operational distinction

Separate three surfaces:

1. Public review response — bounded public closure for the issue raised.
2. Support channel — account-specific, diagnostic, sensitive, or multi-step resolution.
3. Marketing/Store claim — acquisition promise changed only after the underlying repair is verified.

Never turn a review response into a product pitch, cross-sell, referral request, rating-upgrade request, or generic acquisition CTA.

## JQ0–JQ9 contract

JQ0 Evidence capture — version, territory, rating, review text, edit/reply state, date.
JQ1 Classification — defect / data-quality / expectation mismatch / usability / support / policy-billing / praise / unclear.
JQ2 Severity — blocks specialist job, degrades job, cosmetic, informational.
JQ3 Ownership — product / data / support / Store claim / platform.
JQ4 Resolution state — UNKNOWN / INVESTIGATING / VERIFIED-FIX / EXPECTED-BEHAVIOR / SUPPORT-ROUTE / PLATFORM-ROUTE.
JQ5 Response gate — respond only with verified facts; no speculative fix promise.
JQ6 Privacy boundary — move account-specific or sensitive diagnostics to support; do not request personal information publicly.
JQ7 Repair propagation — when a verified fix invalidates prior expectations, synchronize release notes, relevant support/owned references, affected Store claims, and older review closure where useful.
JQ8 Recurrence measurement — count recurring issue classes by version/territory/workflow, not merely average star rating.
JQ9 Outcome — CLOSE / REPLY / ROUTE-SUPPORT / ROUTE-PLATFORM / REPAIR-PRODUCT / REPAIR-CLAIM / WATCH / UNKNOWN.

## MintTap application

Highest-priority review classes should map to specialist trust failures: distribution/ROC provenance, split or reinvestment reconstruction, after-tax/recovery calculations, missing/stale market data, and portfolio-state persistence. A negative review involving one of these cannot be repaired by copy alone. Verify the data/calculation/product repair first, then close the loop publicly.

Do not answer a data discrepancy with a generic “please update the app” response unless that action is actually the verified remedy. Do not use replies to promote other MintTap features.

## LogMate application

Predefine review classes before launch: import/migration fidelity, duplicate reconciliation, Previous Total continuity, multi-leg entry friction, offline/PWA/device boundaries, export/backup integrity, and sync/recovery if applicable.

For a professional pilot tool, an apparently small review may expose a workflow-integrity defect. Severity therefore follows impact on the pilot's logging job, not star count alone.

## Sparse-niche rule

In a niche app, one review can represent a meaningful specialist failure without being statistically representative. Do not infer prevalence from one review, but do not wait for statistical significance before investigating a high-severity workflow-integrity claim.

Use two separate questions:
- Is this evidence sufficient to investigate? High-severity single reports often are.
- Is this evidence sufficient to generalize prevalence or rewrite acquisition claims? Usually not without corroboration.

## Metrics

Primary:
- unresolved high-severity review classes
- recurrence by version/workflow
- time from verified repair to public closure
- edited-review/re-engagement evidence where observable
- support resolution evidence
- repeated specialist-value recovery after repair where measurable

Secondary:
- rating distribution and average rating

Do not optimize response count, response speed alone, or star-rating movement without defect-resolution evidence.

## Evidence

- Apple, Ratings, reviews, and responses: https://developer.apple.com/app-store/ratings-and-reviews/
- Apple, View ratings and reviews: https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/view-ratings-and-reviews/
- Google Play Console Help, View and analyse your app's ratings and reviews: https://support.google.com/googleplay/android-developer/answer/138230

## Next evidence target

Audit MintTap's actual review inventory and current response practice. Build a JQ ledger by version/workflow, then identify any high-severity unresolved specialist issue whose repair should propagate into support, release notes, owned references, or Store claims.
