# 043 — Specialist Store Proof Architecture

Date: 2026-09-16
Status: POST-FREEZE AUTHORITATIVE PLATFORM / STORE-CONVERSION OPERATING DELTA

## Purpose

Define how a specialist app should use Store metadata and creative to prove relevance, competence and value before asking a narrow professional audience to install. This extends 042's intent-routing system. 042 decides **which Store story a given intent should reach**; 043 decides **what evidence that Store story must show, and in what order**.

The problem is not merely creative quality. For MintTap-, LogMate- and future specialist-app audiences, the Store page must answer quickly:

1. Is this actually for my problem/workflow?
2. Does the product understand the specialist details that generic apps miss?
3. Can I see the useful result rather than only read a claim?
4. Does the product look trustworthy enough to put my data/workflow into it?

## Authoritative platform findings

### Apple: the first Store assets carry search and product-page duties

Apple currently allows up to 10 screenshots. When no app preview is present, depending on orientation the first one to three screenshots can appear directly in App Store search results. Apple explicitly advises that these should highlight the essence of the app, and that subsequent screenshots should focus on main benefits or features.

Apple's current asset best-practices guidance says screenshots should depict the app in use, give a clear view of the expected experience, lead with the strongest features/benefits, and sequence them into a cohesive story. It specifically cautions against using the entire asset for general accolades or call-to-action statements.

Sources:
- https://developer.apple.com/app-store/product-page/
- https://developer.apple.com/app-store/asset-best-practices/
- https://developer.apple.com/help/app-store-connect/manage-app-information/upload-app-previews-and-screenshots

### Apple: video is optional and it displaces the screenshot-first sequence

Apple allows up to three app previews, each up to 30 seconds. App previews autoplay muted on product pages and may appear in search. App previews are displayed before screenshots.

Apple's guidance is to show real in-app UI, make the first seconds visually compelling, and tell a coherent beginning-middle-end story.

For a low-resource specialist app, this creates an operating rule: **do not add preview video merely because it exists as a format**. A preview should be used only when the product's core value is materially clearer in motion than in the first still assets and the team can maintain/localize the video without weakening the screenshot proof stack.

Sources:
- https://developer.apple.com/app-store/app-previews/
- https://developer.apple.com/help/app-store-connect/manage-app-information/upload-app-previews-and-screenshots

### Google Play: screenshots are reused beyond the listing itself

Google Play allows up to eight screenshots per supported device type. Google states that screenshots may appear not only on the Store Listing but also in search, home and promotional surfaces.

For apps to be eligible for certain large recommendation formats, Google recommends at least four high-resolution screenshots. It requires/strongly recommends that screenshots demonstrate the actual in-app experience and core features so users can anticipate what the app is like. Google specifically says stylized screenshot sequences are allowed, but the **first three screenshots should prioritize UI as much as possible**.

Google also recommends keeping screenshot tagline text limited; its Korean guidance says that when taglines are necessary, they should not occupy more than roughly 20% of the image.

Sources:
- https://support.google.com/googleplay/android-developer/answer/9866151
- https://support.google.com/googleplay/android-developer/answer/13393723

### Google Play: feature graphic is a value/story asset, not a screenshot substitute

Google requires a feature graphic and can use it as a preview-video cover and in large-format promotional placements. It recommends conveying the app experience/core value proposition and avoiding fine visual detail that will not survive small screens.

This means the feature graphic should carry one simple recognition/value idea, while screenshots carry product/workflow proof.

Source:
- https://support.google.com/googleplay/android-developer/answer/9866151

### Both platforms prioritize truthful representation

Apple's asset guidance centers on accurate expectations and actual experience. Google explicitly warns that Store screenshots/images must accurately reflect app functionality and that mismatches between the listing promise and the product may cause rejection.

Therefore marketing proof must be based on implemented, reproducible product states. A future roadmap item is not Store proof.

Sources:
- https://developer.apple.com/app-store/asset-best-practices/
- https://support.google.com/googleplay/android-developer/answer/15191715

## Core conclusion — the first three screenshots are a proof unit

For specialist apps, treat screenshots 1–3 as one **Proof Triad**, not three independent feature cards.

The first three should answer, in order:

### 1. Recognition proof — "this is for my job/problem"

Show the product inside the target user's real conceptual world. Use actual UI and domain vocabulary the intended audience recognizes.

Goal:

`qualified user recognizes the job before reading a full description`

Failure patterns:

- generic logo/brand splash;
- vague phrases such as "manage smarter";
- generic dashboard with no specialist context;
- abstract lifestyle imagery with little product UI.

### 2. Outcome proof — "I can see the useful result"

Show a completed or clearly progressing core job in actual UI: a summary, calculation, record, calendar, report or other output the user came for.

Goal:

`promise -> visible product result`

Do not confuse input screens with value. Data entry may be necessary, but the proof asset should preferably expose what the effort produces.

### 3. Specialist proof — "this app understands the hard part"

Show one high-friction, domain-specific capability or data structure that differentiates the app from a generic tool. It should be a real supported capability, not marketing jargon.

Goal:

`generic-tool doubt -> domain competence`

This is especially important for professional/niche audiences whose main purchase/install concern is often not "does this have many features?" but "will this handle my special case correctly?"

## Store Proof Stack

After the Proof Triad, use later assets in a controlled sequence.

### Layer P1 — Recognition proof

Who/what the product is for.

### Layer P2 — Outcome proof

What useful state/result the user gets.

### Layer P3 — Specialist proof

Why a generic tracker/logbook/spreadsheet is insufficient.

### Layer P4 — Workflow proof

How the user gets from normal input/import/navigation to that value with reasonable effort.

### Layer P5 — Trust/control proof

Show product evidence relevant to risk: backup, data ownership, offline/local behavior, sync, transparent calculations, history/auditability, privacy controls, or other implemented safeguards. Only use the trust proof actually relevant to the product's real risk model.

### Layer P6 — Breadth proof

Secondary features, additional analyses, convenience features, customization and long-tail use cases.

### Layer P7 — Return-value proof

If the product supports meaningful repeated use, show why returning later remains useful: upcoming events, ongoing summaries, periodic reports, history, reminders, etc.

The default order is:

`recognition -> outcome -> specialist competence -> workflow -> trust -> breadth -> return value`

Not every app needs every layer. Remove a layer rather than fill it with weak claims.

## Why a feature-list sequence is weaker for a specialist audience

A conventional sequence such as:

`dashboard -> calendar -> settings -> notifications -> import -> reports`

is organized by product navigation. It forces the prospective user to infer value.

A proof sequence is organized by uncertainty:

`is it for me? -> does it produce my result? -> does it handle the hard part? -> can I trust/use it?`

This distinction is reusable across specialist domains.

## Evidence classes for Store assets

Every material Store asset should be tagged with one primary evidence class.

### E1 — UI evidence

A real product state shows the capability directly.

Strongest default class for screenshots.

### E2 — Computed-result evidence

The app visibly produces a domain result from user/product data.

Particularly useful for trackers, calculators and professional records.

### E3 — Workflow evidence

The asset demonstrates input/import/retrieval/navigation efficiency.

### E4 — Trust/control evidence

The product visibly supports backup, privacy, offline, audit/history, sync or other relevant control.

### E5 — Social/scale evidence

Ratings, adoption, testimonials, awards or similar external claims.

Use cautiously. Platform policies constrain some forms of ranking/award/testimonial language, and social proof should not displace actual UI proof in the first assets.

Company preference: **E1/E2/E3/E4 before E5**.

## Screenshot copy rule

Text should explain the evidence, not replace it.

Good pattern:

`short domain-specific benefit line + visible UI that proves it`

Weak pattern:

`large marketing headline + tiny/obscured UI`

The screenshot should remain intelligible if the tagline is mentally removed.

Google explicitly recommends minimal text and UI priority; Apple likewise emphasizes actual in-use experience and avoiding full-asset CTA/accolade cards.

## Video gate

A preview video is justified only if all are true:

- motion materially explains the core job better than still screenshots;
- the first seconds show recognizably real product value;
- it does not push a stronger still-image Proof Triad out of the highest-value search/product-page position without evidence;
- maintenance/localization cost is acceptable;
- the video can stay accurate across product releases.

Otherwise default to screenshots first.

For sparse niche apps, "no video" is a valid deliberate choice.

## Platform-specific implementation

### Apple

- Default page: first 1–3 screenshots must function in search when no preview is present.
- CPP: preserve the same Proof Stack but change Recognition/Specialist proof to match the routed intent from 042.
- PPO: test meaningful proof hypotheses, not superficial decoration. For example, test whether Outcome proof or Specialist proof deserves screenshot 1, not only a color change.
- App previews: use only after passing the Video Gate.

### Google Play

- Keep actual UI strong in first three screenshots because those assets can appear across search/home/recommendation surfaces.
- Provide at least four strong high-resolution screenshots when practical to preserve eligibility for screenshot-based recommendation formats.
- Keep feature graphic simple and value-oriented; do not try to encode the complete workflow into it.
- Custom Store Listings: change the Proof Triad for the routed intent, while later trust/breadth assets may be reusable.
- Store Listing Experiments: test one proof hypothesis at a time when traffic can support a decision.

## Sparse-traffic testing rule

Specialist apps should not continuously A/B test every screenshot position. Platform experiment systems need traffic and can return "more data needed".

Use experiment capacity only for decisions where plausible outcome differences justify the waiting time.

Preferred order:

1. fix obvious proof defects from platform guidance and product evidence;
2. observe baseline Store behavior;
3. identify one high-value uncertainty;
4. test one large contrast;
5. stop/keep control when evidence remains weak rather than accumulating tiny variants.

This remains consistent with Stage 2 sparse-inference rules.

## Specialist examples observed — descriptive, not templates to copy

### Pilot logbook category

Current LogTen materials use immediate professional language and visible flight-logbook UI rather than a generic travel/lifestyle story. Public Store copy identifies the product as a digital electronic flight log and emphasizes logging, analysis/reporting, duty/rest/currency and career workflows. Public screenshot examples visibly expose flight fields, calendar/log entries and reporting/duty interfaces.

Descriptive lesson: the product demonstrates "pilot-ness" through the data/workflow itself.

Source:
- https://apps.apple.com/us/app/logten-pilot-logbook/id837274884

### Dividend/portfolio category

Current dividend-tracker examples commonly expose portfolio totals, dividend income, payout calendars and holdings/analytics directly in promotional imagery and Store descriptions rather than relying only on generic wealth imagery.

Descriptive lesson: the strongest proof is often the output the target investor expects to monitor repeatedly.

Examples reviewed:
- DivTracker public promotional imagery/site
- Stock Events Google Play listing
- Portseido Google Play listing

These examples are observational category evidence, not proof that their creative causes higher conversion.

## MintTap application — candidate proof architecture, evidence-gated

Do not yet prescribe finished creative. Marketing should hand Design Studio a proof hierarchy, not a visual composition.

Possible default-page hypotheses to validate against actual product/store state:

1. **Recognition:** unmistakably YieldMax-specific portfolio tracking rather than generic portfolio tracking.
2. **Outcome:** calculated portfolio/distribution state visible in the normal Home experience.
3. **Specialist competence:** one implemented YieldMax-specific complexity that generic trackers commonly handle poorly, selected from verified product capabilities rather than roadmap claims.
4. **Workflow:** how transactions/data become usable portfolio results.
5. **Trust/control:** only the strongest implemented evidence relevant to financial-data confidence.
6. **Breadth/return:** recurring distribution/history/calendar/analysis value if current product supports the chosen proof.

For an intent-routed CPP/CSL, the third proof should match that route's specialist problem rather than trying to represent every YieldMax issue at once.

## LogMate application — candidate proof architecture, evidence-gated

Because LogMate is still under development, Store proof must trail implementation.

Future proof hierarchy when capabilities are real:

1. **Recognition:** airline-pilot personal logbook, not a generic aviation app.
2. **Outcome:** a completed/retrievable personal flight record or useful period summary.
3. **Specialist competence:** actual pilot-logbook fields/workflow and one verified professional edge.
4. **Workflow:** fast manual entry and/or verified import path, depending on implemented product state.
5. **Trust/control:** local/offline/backup/sync claims only when technically verified in the release candidate.
6. **Breadth/return:** search, period totals, certificates, reports or other completed features.

Do not market planned sync/import/offline properties as Store proof until their release behavior is verified.

## Marketing -> Design Studio handoff contract

Marketing owns:

- target intent;
- uncertainty being resolved;
- proof hierarchy/order;
- claim/evidence IDs;
- required real product state;
- screenshot job and maximum copy burden;
- experiment hypothesis/measurement plan.

Design Studio owns:

- composition;
- typography;
- crop/scale;
- color hierarchy;
- device framing where appropriate;
- visual continuity;
- accessibility/readability;
- final asset production.

Marketing should never prescribe a polished visual before the proof job is clear.

## New company rule — Proof Before Breadth

For a specialist app Store page:

`first prove fit -> then prove value -> then prove specialist competence -> then prove trust/workflow -> only then show breadth`

A screenshot slot is not justified because a feature exists. It is justified because it resolves a meaningful pre-install uncertainty.

## Next research / execution implications

1. Audit MintTap's **actual current App Store / Google Play creative sequence** against the Proof Stack rather than redesigning from memory.
2. Create a Store Proof Registry that maps screenshot slot -> user uncertainty -> product evidence -> claim -> route -> measurement.
3. Hand any visual remediation to Design Studio after the evidence sequence is fixed.
4. Study localization for specialist vocabulary next: translation is insufficient when professional terminology, regulations, tax concepts or platform conventions differ by market.
5. Keep LogMate proof work gated by implementation readiness.

## Reusable lesson

Specialist Store optimization is not primarily "make screenshots prettier."

It is:

`pre-install uncertainty -> strongest truthful product evidence -> ordered Store proof -> matched first-use value`.

The first three assets should behave like a compact expert demonstration, not a miniature feature catalog.
