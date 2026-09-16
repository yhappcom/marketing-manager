# Store Proof Registry Template

Purpose: turn App Store / Google Play creative from a feature gallery into a decision-grade proof sequence for specialist apps.

Use one registry per default listing or durable intent route. Do not create one registry per individual post.

## Header

- App:
- Platform: Apple App Store / Google Play
- Listing type: default / CPP / CSL
- Intent route ID:
- Target audience/problem:
- Storefront/language:
- Product version/build scope:
- Evidence review date:
- Marketing owner:
- Design Studio handoff ID:
- Decision Record:

## Proof Triad

| Slot | Proof role | User uncertainty | Required product evidence | Proposed claim/copy job | Evidence class | Product-state source | Route-specific? | Measurement | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Recognition proof | Is this for my exact job/problem? | | | E1/E2/E3/E4 | | | | |
| 2 | Outcome proof | What useful result will I get? | | | E1/E2 | | | | |
| 3 | Specialist proof | Does this handle the hard domain-specific part? | | | E1/E2/E3 | | | | |

## Later proof stack

| Slot | Proof layer | User uncertainty | Evidence | Claim/copy job | Evidence class | Reusable across routes? | Status |
|---|---|---|---|---|---|---|---|
| 4 | Workflow proof | How hard is it to get value? | | | E3 | | |
| 5 | Trust/control proof | Can I trust/control my data/workflow? | | | E4 | | |
| 6 | Breadth proof | What else can it handle? | | | E1/E2/E3 | | |
| 7 | Return-value proof | Why will I come back? | | | E1/E2 | | |
| 8+ | Optional | Only if a material uncertainty remains | | | | | |

Do not fill a slot merely because the platform permits more screenshots.

## Evidence classes

- **E1 UI evidence** — real in-app state directly demonstrates the capability.
- **E2 Computed-result evidence** — real UI shows the result/output produced by the app.
- **E3 Workflow evidence** — input/import/retrieval/navigation efficiency is visible.
- **E4 Trust/control evidence** — backup/privacy/offline/sync/history/audit/control is visible and verified.
- **E5 Social/scale evidence** — ratings/adoption/testimonials/awards; use cautiously and never let it replace core UI proof.

Company default: E1/E2/E3/E4 before E5.

## Asset validity checks

For each screenshot/preview, confirm:

- [ ] capability exists in the scoped release/build;
- [ ] screenshot uses a reproducible product state;
- [ ] no roadmap/future feature is implied;
- [ ] no sensitive real-user data is shown;
- [ ] tagline explains the UI rather than substituting for it;
- [ ] first three remain intelligible at Store/search scale;
- [ ] specialist terminology is accurate for the target market;
- [ ] claim provenance is recorded where factual/regulatory/financial claims require it;
- [ ] localized version is not a literal mistranslation of specialist terminology;
- [ ] asset remains valid after the latest product/UI change.

## Video Gate

Only add a preview video when all are true:

- [ ] motion explains the core value materially better than stills;
- [ ] the first seconds visibly show real product value;
- [ ] putting video before screenshots does not weaken the current Proof Triad without evidence;
- [ ] maintenance/localization cost is acceptable;
- [ ] the video remains accurate for the scoped release.

If any answer is no or unknown, screenshots-first is the default.

## Proof sequence quality check

A user should be able to answer these questions by scanning the first three assets:

1. What kind of specialist/user is this for?
2. What useful result does the app produce?
3. What hard/special case proves this is more than a generic tool?

If not, the Proof Triad is incomplete.

## Route consistency check

For CPP/CSL routes:

`source promise -> screenshot 1 recognition -> screenshot 2 result -> screenshot 3 route-specific specialist proof -> first-use path -> first product value`

Record any message break as **message debt**.

## Measurement plan

Do not use one blended "conversion" metric across platforms.

Record separately:

- Apple native Store metric(s):
- Google Play native Store metric(s):
- route/campaign/UTM identifier:
- semantic activation event when available:
- useful-return metric when available:
- minimum sample/privacy threshold:
- test/observation window:
- decision rule:

## Experiment hypothesis

Use Store experiments only for one material uncertainty at a time.

Template:

> For [target population], moving/reframing [proof role] from [control] to [treatment] may change [native Store metric] because [specific uncertainty]. We will not infer downstream activation unless product telemetry supports it.

## Design Studio handoff

Marketing supplies:

- screenshot slot/job;
- target user uncertainty;
- verified product-state reference;
- claim/evidence source;
- copy burden / must-show UI;
- route context;
- localization constraints;
- experiment context.

Design Studio supplies:

- final composition;
- type hierarchy;
- crop/scale/device treatment;
- color hierarchy;
- readability/accessibility;
- visual continuity and export-ready assets.

## Retirement trigger

Re-review or retire an asset when:

- product UI materially changes;
- the underlying claim/evidence changes;
- target intent changes;
- specialist terminology becomes outdated;
- Store surface behavior changes;
- asset route receives insufficient traffic to justify maintenance;
- a stronger proof replaces it;
- trust/compliance interpretation changes.
