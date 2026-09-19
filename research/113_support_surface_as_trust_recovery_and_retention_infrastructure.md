# 113 — Support Surface as Trust, Recovery, and Retention Infrastructure

Validated: 2026-09-19

## Canonical principle

**Support is not a footer obligation. For a sparse professional app, the Store-visible support route is part of the acquisition promise and the recovery path that protects useful return after failure.**

Do not optimize support for ticket suppression. Optimize for legitimate problem resolution with the lowest reasonable user effort, while preserving a route for product-learning signals to reach the product team.

## Authoritative platform facts

### Apple

Apple App Store Connect defines a Support URL as a URL to support information for the app. Apple's current reference says it must lead to actual contact information — such as legal address, email address or telephone number as required by local law — so users can reach the developer about app issues, general feedback and feature-enhancement requests. The Support URL is required and localizable. A Marketing URL is a separate, optional/localizable destination for learning more about the app.

This distinction matters operationally: a marketing homepage is not automatically a valid support destination. Support and marketing jobs must be modeled separately even when they share the same domain.

Apple also requires a Privacy Policy URL for all apps and optionally supports a User Privacy Choices URL. Those are separate trust/recovery surfaces and should not be collapsed into a generic support page.

### Google Play

Google Play's current verified-account documentation says Store listing contact details are managed in Store settings. An email address is required to publish or update apps; phone and website may also be supplied, and the information appears on the app's Google Play listing. Google separately distinguishes account contact information used by Google from developer/app-support information shown to users. Per-app support contact details can differ from account contact details.

This creates an important operating distinction: `platform/account contact`, `public developer identity`, and `per-app user support` are different records and should not be treated as one contact field.

## Why this matters to zero-cost growth

Sparse professional apps cannot assume enough volume to statistically compensate for a poor recovery path. A specialist who reaches a calculation discrepancy, import failure, backup problem or unexplained app behavior may be one of a small number of highly relevant users. Losing that user is simultaneously:

1. a retention failure;
2. a lost qualitative research opportunity;
3. a possible negative-review precursor;
4. a loss of future word-of-mouth inside a small professional network.

The economic unit is therefore not `tickets avoided`; it is `legitimate failures resolved without destroying trust or useful return`.

No causal claim is made that a better support page directly increases Store ranking. The framework treats support as trust/recovery infrastructure, not an ASO ranking factor.

## AE0–AE5 Support-Recovery Evidence Gate

### AE0 — Broken or deceptive

Examples: dead Store support link; support URL that only redirects to promotional copy; no reachable contact route where the Store contract requires one; fabricated response-time promises; hiding known failure routes to reduce ticket volume.

Acquisition scaling is blocked when the affected failure can materially damage the specialist's data, trust or core job.

### AE1 — Reachable but unmanaged

A contact method exists, but ownership, response path, issue classification and escalation are unknown.

### AE2 — Managed channel without recovery evidence

Ownership and basic routing exist, but the team cannot connect incoming problems to affected product jobs, release versions or recurring failure families.

### AE3 — Minimum deliberate-acquisition readiness

Require all of the following where applicable:

- live Store support destination/contact verified on each platform;
- clear separation of support, marketing and privacy jobs;
- app identity and affected platform/version can be established without demanding unnecessary personal data;
- issue taxonomy maps to specialist jobs;
- severe data-integrity/privacy/safety-like failures have an escalation owner;
- known limitations are not concealed by promotional language;
- support path is usable without a rating/review prerequisite;
- resolution outcome can feed product learning;
- support promises do not exceed demonstrated operating capacity.

### AE4 — Closed recovery loop

AE3 plus repeated evidence that material failure families are routed, resolved or converted into product fixes; release regressions and stale support content are audited; support burden and useful-return recovery are measured together.

### AE5 — Reusable niche-app system

A portable registry, taxonomy, escalation model and evidence standard work across multiple specialist apps without erasing domain-specific severity.

## MintTap application

Support taxonomy should be organized around specialist failure jobs rather than generic UI screens. Initial families:

- portfolio/transaction persistence;
- distribution or ROC discrepancy;
- reverse-split quantity/cost-basis discrepancy;
- tax-adjustment discrepancy;
- exchange-rate/currency interpretation;
- account/data/privacy request;
- ad interference or inappropriate placement;
- Store/version/update issue.

A financial-tracking discrepancy should never be answered with marketing copy or an unsupported claim that the calculation is correct. Capture enough reproducible context to distinguish product defect, data-source issue, user-entry issue and documentation ambiguity.

Do not request brokerage statements, account identifiers or other sensitive financial material by default. Evidence collection should be data-minimized and AC privacy-gate compatible.

The support surface can also host durable, evidence-backed explanations for recurring mechanisms, but those articles must remain distinct from individualized financial advice.

## LogMate application

Initial high-severity families should include:

- flight record not saved / apparent data loss;
- incorrect totals;
- import/duplicate handling error;
- backup/restore failure;
- offline/PWA persistence or sync failure;
- export/certificate attachment issue;
- search/history discrepancy.

Because a pilot's logbook is a professional record, data-loss/corruption reports outrank cosmetic issues even if crash metrics are normal. Support evidence should feed the AB product-quality gate and launch-readiness matrix.

## Support registry

Maintain at minimum:

`app → platform → storefront/locale → Store support field → live destination → contact method → owner → supported languages → expected operating window → issue taxonomy version → severity/escalation rule → privacy/data-minimization rule → known limitation source → stale trigger → last live-path test → AE-class`

Do not publish an SLA unless it is operationally supported. Internal response targets may exist without becoming public promises.

## Measurement

Useful measurements:

- contact-route failure rate;
- time to first meaningful response, where measurable;
- resolution / unresolved / product-defect classification;
- repeat contact for the same failure family;
- failure family by release version;
- support-originated defect fixes;
- useful-return recovery after a support event when privacy-safe analytics can establish it;
- support burden per eligible useful user.

Avoid optimizing `ticket count down` in isolation. Fewer tickets can mean fewer defects, better self-service, hidden support, or user abandonment. The metric is ambiguous without outcome evidence.

## Relationship to existing gates

- **AB quality:** support does not excuse a broken specialist job; severe recurring support evidence can lower AB readiness.
- **AC privacy:** evidence collection must be data-minimized and match disclosures.
- **R rating prompts:** support/recovery must never be conditional on leaving a review; unresolved/error states remain prompt-suppression candidates.
- **K useful return:** recovery is successful when the user can safely resume the relevant specialist job, not merely when a ticket is closed.
- **W assets / Z locale:** Store support links and localized claims need stale/fallback control just like other public surfaces.

## Operational decision

Before additional acquisition scaling, audit MintTap's live Apple Support URL and Google Play app-support fields, then test the complete user path from Store listing to a reachable support outcome. Assign AE-class only from observed Store/site evidence. Do not infer support readiness from the existence of minttap.app.

For LogMate, design the support taxonomy before public pilot acquisition so early scarce pilot failures become structured product evidence rather than disappearing into ad-hoc messages.

## Sources

- Apple Developer — App Store Connect Help, Platform version information / Support URL and Marketing URL (current 2026-09-19).
- Apple Developer — App privacy reference / Privacy Policy URL and User Privacy Choices URL (current 2026-09-19).
- Google Play Console Help — View and manage your developer account information / Store listing contact details (current 2026-09-19).
- Google Play Console Help — Required information to create a Play Console developer account / distinction between Google account contact and public developer/app-support information (current 2026-09-19).
