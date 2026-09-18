# 111 — Store Privacy Disclosure as Acquisition Trust Contract

Validated: 2026-09-19

## Why this is a marketing problem

For a sparse professional app, privacy metadata is not back-office compliance only. It is user-visible product-page evidence presented before download. A specialist evaluating a financial tracker or pilot logbook can therefore compare the product promise with the Store's disclosure of data collection, tracking, and third-party behavior.

Canonical principle:

> **Privacy disclosure is product evidence first and acquisition trust evidence second. Never optimize the label; optimize the underlying data practice and make every public disclosure match it.**

This is deliberately not a claim that a particular privacy label mechanically improves ranking or conversion. No such causal ranking claim was established here. The valid claim is narrower: Apple explicitly surfaces privacy practices on the product page before download, and requires accurate disclosures for the app and integrated third-party partners.

## Authoritative findings

### Apple

Apple states that Privacy Nutrition Labels on the App Store let users see what data an app may collect, whether it is linked to identity/device, and whether it is used to track. New apps and app updates require privacy-practice information in App Store Connect.

Apple also requires the developer to include the practices of third-party partners whose code is integrated into the app and to keep the answers accurate and current when practices change. A privacy-policy URL is required for all apps. A public User Privacy Choices URL is optional and can explain access, deletion, or modification choices.

Privacy manifests create an important supply-chain bridge: third-party code such as advertising or analytics SDKs can declare collected data, uses and tracking in a standard format, and Xcode combines manifests into a privacy report that can help the developer produce accurate Store disclosures. Apple separately maintains a list of commonly used SDKs that require privacy manifests and, for binary dependencies in the stated cases, signatures.

Marketing consequence: adding or upgrading an advertising/analytics SDK is not merely a monetization or engineering change. It can change the Store-visible trust contract and therefore needs a disclosure-parity review before release.

### Google Play

Google Play's Data safety declaration similarly creates a Store-facing description of data practices. Operationally, the critical principle is parity between the shipping bundle, SDK behavior, Data safety declaration and privacy policy. Do not infer a clean declaration from the app's own first-party code while ignoring advertising, analytics, crash-reporting or other dependencies.

Because current authoritative Google search retrieval was less complete than Apple's in this research pass, this document does **not** invent detailed Google ranking/conversion effects or app-specific declarations. Live Play Console values and the current MintTap bundle must be audited directly before assigning a passing class.

## AC0–AC5 Privacy Trust Evidence Gate

**AC0 — invalid / contradictory**
- Store disclosure conflicts with known shipping behavior;
- undisclosed third-party collection/tracking is known;
- privacy copy makes a materially false `no data`, `no tracking`, or equivalent promise;
- marketing minimizes a material practice that the Store disclosure reveals.

**AC1 — declaration-only**
- required forms/policy exist;
- no verified dependency-to-disclosure mapping;
- no release owner or change trigger.

**AC2 — mapped but not release-controlled**
- first-party and major SDK data flows are inventoried;
- Store/privacy-policy fields are mapped;
- production parity or release-change process remains incomplete.

**AC3 — minimum deliberate acquisition state**
- shipping-version data-flow inventory exists;
- every material first-party and third-party flow has an owner/purpose;
- Apple privacy / Google Data safety / privacy policy are checked against that inventory;
- tracking/consent behavior is checked where applicable;
- SDK add/upgrade/remove is a disclosure-review trigger;
- user-facing marketing claims do not exceed the verified privacy state;
- unresolved material flows block privacy-based claims and acquisition scaling around trust.

**AC4 — maintained evidence**
- AC3 survives release changes and dependency updates;
- regression/audit cadence exists;
- support/review evidence does not reveal material privacy-expectation mismatch;
- changes are reflected promptly across Store and owned-web surfaces.

**AC5 — reusable system**
- the dependency/data-flow registry, release gate, disclosure mapping and claim rules transfer cleanly to another niche app without copying app-specific assumptions.

## MintTap application

MintTap is a financial portfolio tracker and uses advertising as its monetization model. That combination makes privacy ambiguity disproportionately expensive to trust even if no policy violation occurs.

Do not market MintTap as `private`, `anonymous`, `local`, `we don't collect your financial data`, `no tracking`, or equivalent until the exact shipping build, Firebase/analytics configuration, advertising SDK behavior, identifiers, crash reporting and network flows support the statement and the Store disclosures agree.

A portfolio value or ticker being entered by the user is not automatically equivalent to an Apple/Google disclosure category; classification must follow each platform's definitions. Marketing must not improvise legal/platform classifications.

Required MintTap AC audit:

`shipping version → dependency/SDK → data type → leaves device? → linked? → tracking? → purpose → retention/control → Apple disclosure → Play disclosure → privacy-policy text → consent/choice surface → owner → release trigger → AC class`

Ad monetization experiments from U/E gates cannot bypass AC. A higher-revenue SDK/configuration that materially changes data handling first re-enters AC review.

## LogMate application

LogMate's offline-first/no-login direction can become a strong trust property only after it is technically true across the complete production stack. `Offline capable` is not the same claim as `no data leaves the device`; crash reporting, ads, update checks, web/PWA components or analytics can independently create network/data flows.

Pilot logbook data can contain professionally sensitive history. Therefore synthetic marketing data (W gate) and actual privacy behavior (AC gate) must remain separate controls: synthetic screenshots prevent disclosure in creative assets, while AC prevents incorrect claims about runtime collection.

Before launch, classify manual-entry/native, backup/export, ad/analytics, and any PWA/sync path independently. Do not inherit MintTap's declarations.

## Cross-functional release rule

A dependency change is a marketing-relevant release event when it can alter public privacy evidence.

Minimum handoff:

`engineering dependency diff → data-flow diff → privacy owner review → Store disclosure/policy diff → marketing claim ceiling → release`

This prevents the common failure where marketing copy remains static while an SDK changes the actual privacy contract.

## Measurement discipline

Do not claim that changing a privacy label caused Store ranking improvement without controlled evidence. If privacy presentation is later tested, require J3 experimentation and downstream K3 useful return, not clicks alone.

Useful operational measures are instead:
- percentage of shipping dependencies with known data-flow owner;
- unresolved data-flow count;
- disclosure parity defects per release;
- time from material data-practice change to public-disclosure parity;
- support/review themes indicating privacy expectation mismatch.

These are integrity controls, not vanity conversion metrics.

## Sources

- Apple, User Privacy and Data Use — Privacy Nutrition Labels, third-party code/privacy manifests, ATT and App Privacy Report: https://developer.apple.com/app-store/user-privacy-and-data-use/
- Apple, Manage App Privacy — developer responsibility for accurate/current answers including third-party partners; privacy policy and optional privacy choices URL: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
- Apple, App Privacy reference — required privacy policy URL and Store data-type fields: https://developer.apple.com/help/app-store-connect/reference/app-information/app-privacy
- Apple, Third-party SDK requirements — privacy-manifest/signature requirements for listed SDKs: https://developer.apple.com/support/third-party-SDK-requirements/

## Next evidence task

Audit MintTap's shipping dependency/data-flow graph against both live Store disclosures and the published privacy policy. Assign AC-class only from observed build/Console evidence. In parallel, keep LogMate at `unknown` until its production stack is stable enough to audit.