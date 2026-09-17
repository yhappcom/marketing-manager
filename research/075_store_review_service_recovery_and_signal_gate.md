# 075 — Store Review Service-Recovery and Signal Gate

Updated: 2026-09-17

## Decision

For sparse specialist apps, ratings/reviews are not primarily a vanity-ASO surface. Treat them as a public service-recovery channel and a sparse qualitative product-signal stream.

Canonical rule: **Repair the Experience, Not the Rating.**

A developer reply has two audiences: the reviewer who experienced the problem and prospective users reading the public record. The operating objective is therefore `issue recognition → useful response → product/support action → verified fix → durable trust`, not `negative review → persuasion → higher stars`.

## First-party platform evidence refreshed 2026-09-17

### Apple

App Store Connect permits one public developer response per review; the response can later be edited or deleted and may take up to 24 hours to appear. Apple also exposes review filtering by platform, country/region, app version, rating, and response/edit status. This makes review evidence useful for release/localization incident triage, but it does not establish population-level prevalence in a sparse app.

Apple permits resetting an app's overview rating when releasing a new version. The reset affects all countries/regions for that platform, cannot be restored after release, and does **not** remove written reviews. Therefore rating reset is not a substitute for remediation or review-response work.

Sources:
- https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/respond-to-reviews
- https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/view-ratings-and-reviews
- https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/reset-an-app-overview-rating

### Google Play

Google Play explicitly prohibits manipulated/incentivized ratings and reviews. Its current guidance says replies should stay focused on the user's issue and should not ask for a higher rating; helpful support/FAQ resources may be included.

Play Console allows one public reply per user review and the reply can be edited. After a reply, the reviewer receives a push notification and email and can update the rating/review. Google normally delays public posting/new-rating impact for around 24 hours while screening suspicious activity. Review data can be inspected by dimensions such as app version, country/region, language, Android version, device type/model and carrier. Google also notes that the displayed Play rating is weighted toward more recent ratings, while ratings do not simply reset when a new package version is published.

Sources:
- https://support.google.com/googleplay/android-developer/answer/9898684
- https://support.google.com/googleplay/android-developer/answer/138230

## Sparse-niche operating model

### R0 — no actionable information
Rating-only or vague sentiment with no reproducible issue. Record; do not invent a diagnosis.

### R1 — support question
A user appears blocked but no product defect is established. Give the shortest useful public answer and route sensitive/account-specific detail to a private support channel where available.

### R2 — reproducible product friction
The review identifies a workflow, wording, localization, performance, accessibility or discoverability problem that can be reproduced. Create/attach a product issue and preserve app version/platform/locale evidence.

### R3 — confirmed defect or promise failure
The product fails a documented or publicly implied promise. Product remediation takes precedence over reputation management. Reply with factual scope/status only; do not overpromise a fix date.

### R4 — verified remediation
A fix has shipped and the affected path has been verified. The existing public response may be updated with concise factual resolution information where useful. Do not ask the reviewer to raise the rating.

### R5 — repeated cross-user signal
Independent reviews/incidents show the same failure family across a meaningful window. Escalate from individual support to product/marketing claim review. In sparse samples, report counts, versions and incident windows before percentages.

## Response protocol

A useful response contains only what evidence supports:

1. acknowledge the specific observed issue;
2. state known scope or a concrete next action;
3. provide a support path if private diagnostics are necessary;
4. after a verified fix, state the version/path that changed;
5. never bargain for stars, offer incentives, recruit positive reviews, or ask a negative reviewer to revise upward.

Do not expose account, portfolio, financial, employment, flight or other sensitive user detail in a public response.

## Marketing integration

### MintTap

Review families should be mapped to the existing activation/semantic gates: onboarding/auth, Manual vs Import discovery, Import preparation burden, KRW/currency semantics, post-save first value, portfolio interpretation, and ad interruption. A complaint about exchange-rate meaning is semantic evidence even if parsing/validation succeeds. A complaint that a saved import produces no obvious personal result is first-value evidence, not merely customer-service sentiment.

### LogMate

Until production persistence/manual-entry/calculation paths are validated, reviews must not be interpreted as proof that roadmap functionality exists. Once launched, classify reports by actual workflow state: entry, persistence, calculation, import, offline behavior, backup/restore, sync/conflict, platform parity and professional/regulatory misunderstanding. A review revealing that users infer official/compliance status from marketing should trigger claim review even if the software itself is functioning.

## Rating-request eligibility

Do not optimize prompt timing before first value and useful return are verified. A legitimate rating prompt must be downstream of completed product value, non-coercive, non-incentivized and independent of whether the user is likely to be positive. Do not build a satisfaction gate that routes happy users to the Store while suppressing Store access for unhappy users as a reputation-management substitute.

## Rating reset rule for Apple

Default: **do not reset**.

Consider an overview-rating reset only when all are true:
- a materially different version has shipped;
- the major historical failure family has been verified as remediated;
- current product evidence supports the new public promise;
- the team accepts that written reviews remain visible;
- the decision is documented before release rather than used reactively to hide criticism.

Reset is irreversible after release and global across countries/regions for the affected platform, so it is a release/reputation governance decision, not routine ASO maintenance.

## Measurement

Maintain a privacy-safe aggregate review ledger:
`platform → country/locale → app version → issue family → R-class → response status → linked product issue → fix version → verified/not verified → recurrence count/window`.

Useful metrics are response coverage for actionable reviews, time-to-triage, time-to-verified-fix, recurrence after fix, and issue-family concentration. Star average is contextual evidence, not the operating objective.

## Failure modes

- treating every 1-star review as a marketing problem;
- replying defensively for prospective readers rather than resolving the user's issue;
- asking for a higher rating in the reply;
- rewarding reviews;
- extrapolating one specialist review into a population percentage;
- resetting Apple ratings before fixing the underlying product;
- celebrating a rating increase without checking version mix, issue recurrence or product changes;
- using public replies to disclose sensitive diagnostics;
- turning review solicitation into a pre-first-value interruption.

## Next operational gate

Do not add more review theory by default. When Store review data is available, build the first MintTap review issue-family ledger and compare it against the activation/semantic unresolved list. For LogMate, wait for a production specialist workflow and launch evidence before designing rating-prompt timing.