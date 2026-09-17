# 072 — Ad Interaction-Proximity & Invalid-Traffic Gate

Date: 2026-09-17
Status: CANONICAL
Scope: company-wide, with MintTap/LogMate application

## Why this exists

069–071 established that ads belong after completed value, not inside protected work, and that visible time is not automatically revenue-quality time. A remaining gap is spatial/interaction safety: even an ad placed after value can be poor inventory when it sits next to high-frequency taps, navigation, editable controls, or content that users repeatedly cross.

The monetization objective is therefore not `maximize clickable exposure`. It is `maximize legitimate ad opportunity after value while preserving deliberate user intent and traffic quality`.

## Refreshed first-party evidence

Google AdMob guidance reviewed 2026-09-17 states:

- close proximity between banner ads and clickable/interactive app elements is a major source of accidental clicks;
- banners should not sit immediately beside navigation buttons, custom menu bars, interactive content, or other continuously manipulated UI;
- sandwiching an ad between interactive content and bottom navigation is discouraged because users repeatedly cross the ad while highly engaged;
- floating/overlapping ads over app content are against policy;
- recommended implementations provide buffer/separation, including non-clickable borders or other visual/spatial separation;
- ads must remain distinguishable from app content rather than mimicking it;
- Google may apply Confirmed Click when placements exhibit accidental-click signals; it is removed only after sustained improvement in click quality;
- publishers may not artificially inflate impressions/clicks or encourage non-rewarded ad interaction.

These are policy/implementation floors. Internal product standards below are deliberately stricter for specialist apps.

## New distinction: value-safe is not interaction-safe

A placement must pass two independent gates.

### Gate V — value boundary
Pass 069–071: completed value precedes the placement; exposure is E4/E5 rather than friction/protected work/transition.

### Gate I — interaction proximity
The ad must not compete spatially or temporally with the user's intended controls.

Passing Gate V does not imply passing Gate I.

Example: a Home result card may be complete value, but a banner immediately above a bottom navigation bar can still create accidental-click risk because users repeatedly cross the ad to navigate.

## Interaction-Proximity classes

- **I0 — synthetic/unknown:** no production evidence of surrounding controls or tap paths.
- **I1 — collision:** overlap, floating placement, tap target conflict, or ad appearing where a control is normally expected. Reject.
- **I2 — adjacency:** directly next to navigation, primary CTA, editable/interactive content, swipe target, or repeated tap path. Reject for optimization; redesign first.
- **I3 — crossing corridor:** users repeatedly move through the ad region to reach navigation/detail actions even if no direct adjacency exists. High risk; requires redesign or strong evidence before monetization.
- **I4 — separated passive region:** complete value has been delivered; ad is visually distinct and buffered from interactive controls. Candidate.
- **I5 — stable low-risk inventory:** I4 plus production evidence shows deliberate surrounding interaction, no meaningful accidental-click/Confirmed-Click signal, and no degradation of useful return. Strongest banner/native candidate.

## Company rules

### 1. Accidental CTR Is Not Monetization Success
A CTR increase accompanied by interaction proximity, Confirmed Click, abnormal click behavior, or navigation disruption is a defect signal, not a growth win.

### 2. Protect Tap Intent
The user's intended tap target has priority over ad opportunity. Never place inventory where a likely navigation, edit, save, back, expand, swipe, or retry gesture can be confused with ad interaction.

### 3. Separate Before You Optimize
Before testing refresh, size, density, or format, verify spatial separation from interactive controls. A bad geometry cannot be repaired by revenue metrics.

### 4. Crossing Frequency Is a Risk Metric
Count how often normal use requires users to traverse the ad region. Repeated Home↔detail or tab-navigation crossings can increase accidental-click risk even when the ad is technically static.

### 5. Traffic Quality Is a Revenue Guardrail
Placement-level revenue must be interpreted with traffic-quality and product metrics. A placement does not graduate on CTR/eCPM/revenue alone.

## Placement evidence ledger extension

For each candidate ad unit record:

- screen / placement ID;
- preceding value block and E-class;
- I-class;
- nearest interactive controls above/below/left/right;
- whether bottom/top navigation is adjacent;
- whether normal task flow crosses the ad region;
- layout behavior during scroll, keyboard, text scaling and orientation changes;
- visual distinction/separation mechanism;
- request / match / impression;
- aggregate revenue;
- CTR only as a diagnostic, never a target by itself;
- Confirmed Click / policy-center signal if available;
- useful-return completion;
- rapid exit/background;
- accidental-navigation or user-reported confusion incidents.

Do not collect unnecessary user-level ad-click data. Prefer aggregate placement evidence.

## MintTap application

The current Home inline ad remains UNVERIFIED, not because inline ads are inherently unsuitable, but because the ledger lacks exact production geometry and interaction-path evidence.

Before any refresh/size experiment, verify:

1. the exact complete value block above the ad;
2. the controls immediately around it;
3. distance/separation from bottom navigation and tappable cards;
4. whether Home→detail→Home use repeatedly crosses the ad;
5. behavior under supported text scale/device sizes;
6. aggregate request/impression/revenue and any traffic-quality signals;
7. useful-return completion and rapid abandonment.

If the placement is I2/I3, relocation/separation precedes monetization optimization even if current CTR or revenue appears attractive.

## LogMate application

LogMate remains pre-eligibility under 068/069. When real pilot workflows exist, entry/edit/save/reconciliation/navigation corridors are protected from ad adjacency. In particular, controls used during repeated logbook entry should not share a tap corridor with banners/native ads. First identify an E4/E5 value region, then require I4/I5 geometry before monetization.

## Reusable launch rule

For future niche apps, ad acceptance requires both:

`completed value (V) × interaction-safe geometry (I) × sustainable downstream behavior`

If any term is unverified, inventory is not mature.

## Decision consequence

Do not optimize an ad because it gets clicked. Optimize only after establishing that users can deliberately complete their specialist job, deliberately navigate the product, and encounter the ad as clearly separate inventory.

## Next evidence target

Build the MintTap Home placement ledger with both E-class and I-class. The next monetization decision should be relocation/separation if interaction geometry fails, not refresh/size experimentation.
