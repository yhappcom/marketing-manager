# 094 — Apple App Tags Discovery Integrity

Date: 2026-09-18
Status: Canonical post-freeze research

## Decision
**Metadata now feeds a visible discovery taxonomy. Govern the inferred category, not only the written copy.**

Apple App Tags are a distinct zero-cost discovery surface. Apple states that tags can appear in search results, the Search landing page, and product pages; users can tap a tag to see related apps. Tags are based on App Store metadata, AI/LLMs, and human curation/review. Developers can manage which selected tags are visible. Current App Store Connect Help says user-visible tags are supported in the United States.

This creates a second-order metadata effect: Store copy is not only read directly and indexed for search; it can also contribute to a machine-inferred public classification. For niche professional apps, a broad but inaccurate classification can attract the wrong specialist job and create trust/support cost.

## G0–G5 App-Tag Integrity Gate
- **G0 — False association:** visible tag implies a material capability or professional job the shipped app does not support. Correct the association and underlying metadata where needed.
- **G1 — Unverified inference:** tag sounds adjacent but has not been mapped to a production job. Not growth evidence.
- **G2 — Functionally true, intent boundary unknown:** tag describes something real, but downstream intent may exceed product scope.
- **G3 — Evidence-aligned:** tag maps to a real production job, Store evidence demonstrates that job accurately, and material scope boundaries remain clear. Minimum state for intentionally retaining a tag as a discovery asset.
- **G4 — Downstream-qualified:** G3 plus acquisition can be evaluated against intent-specific first value, useful return, and mismatch/support signals.
- **G5 — Reusable taxonomy pattern:** across releases and metadata changes, the tag continues to attract the intended specialist job without recurrent semantic mismatch.

## Operating contract
1. Inventory visible App Tags before changing en_US metadata.
2. Map each tag to an explicit supported user job or mark it ambiguous.
3. Compare the tag against current screenshots, metadata, production behavior, support boundaries, and 092 trust surfaces.
4. Keep a tag as an intentional discovery asset only at G3+; G0 is corrective work and G1/G2 are observation states.
5. Never exaggerate metadata merely to induce a desirable tag. Apple search guidance requires accurate and relevant metadata.
6. A human-reviewed platform tag is not independent substantiation of a specialist claim.
7. Re-audit after material metadata, feature, positioning, scope, or category changes.

## Measurement ledger
`release → storefront → metadata version → visible tag → supported job → implication class → G-class → Store discovery → qualified acquisition → first value → useful return → support/review mismatch → keep/correct`

Do not optimize tag count or tag impressions in isolation. The target remains qualified retained utility and, for ad-supported products, cumulative ad revenue per retained useful user.

## Existing-framework interaction
- 091 L-class: current public support is US/en_US; do not infer localized-market readiness from tags.
- 092 T-class: a tag does not upgrade trust-surface evidence.
- 093 Q-class: CPP keyword routing is deliberate query-to-page routing; App Tags are platform-inferred taxonomy. Audit separately.

## MintTap
Capture current US App Tags and classify each G0–G5. For each tag, record the exact production job it represents and adjacent jobs it must not imply. Cross-check Store copy, screenshots, declarations, support surfaces, and first-value workflow. If analytics cannot isolate tag-origin traffic, do not invent attribution; use the audit as semantic-risk control until measurable evidence exists.

## LogMate
Future aviation/logbook tags must not be treated as validation of professional or jurisdiction-specific requirements. Retain intentionally only after production behavior and the corresponding claim boundary are independently evidenced.

## Primary evidence checked 2026-09-18
- Apple Developer, Manage app tags: tags are discovery terms shown in key Store surfaces; derived from metadata plus AI and human curation; developers can manage selected tags; current user-visible support is US.
- Apple Developer, WWDC25 What’s new in App Store Connect: tags are generated using LLMs from sources including app metadata, human reviewed, and open collections of apps with related features/functionality.
- App Store Connect API documentation exposes app-tag visibility/territory relationships and tag modification controls.
- Apple App Store Search guidance requires accurate, relevant metadata and describes search relevance inputs.

## Unresolved
- Whether App Analytics exposes a distinct reliable App-Tag-origin dimension rather than broader Store discovery attribution.
- Whether and when user-visible tags expand beyond the US.
- MintTap’s actual assigned tags and any scope mismatch.
- Documented refresh latency after metadata/tag changes.
- G4→G5 evidence when tag-origin acquisition cannot be isolated.
