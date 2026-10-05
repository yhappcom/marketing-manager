# MintTap production-source authority audit — 2026-10-05

## Decision impact
D2 production monetization remains **ACTIVE / PRESSURE HOLD**.

## Verified repository evidence
The currently accessible canonical GitHub repository named `yhappcom/yieldmax_tracker` has `main` at commit `d88f5855dbe5be91c979b58f3670487e3691f479` (2026-02-11, “Merge develop into main (bootstrap complete)”). Its current tree is a bootstrap Flutter/Firebase project and does not contain the later MintTap advertising surfaces previously described in Marketing Manager run output.

The accessible commit history on `main` also ends in February 2026. Therefore this repository cannot presently serve as authoritative evidence for the current shipped MintTap ad inventory, Home ad placement, consent runtime, paid-event instrumentation, mediation, or release binary.

## Correction / evidence boundary
A prior run reported a MintTap `1.0.29` source commit and specific `HomeInlineAdSlot` behavior. That source is **not reproducible from the currently accessible `yhappcom/yieldmax_tracker/main`** and must not be treated as canonical production evidence until the authoritative current source or shipped binary is identified and re-verified.

This does not prove that the reported ad behavior is absent from the live app. It changes the evidence state from “production-source verified” to **UNVERIFIED CURRENT-SOURCE CLAIM**.

## Operational consequence
Do not revise the protected-workflow contract or increase ad pressure from the unreproducible source claim. The next valid D2 evidence target is the authoritative current shipped source/binary plus:
- complete ad surface/unit map;
- UMP/consent and request eligibility state;
- live app-ads.txt authorization;
- request → load → impression → paid-event chain;
- ILAR precision/source and estimated → finalized reconciliation;
- mediation/floor/refresh configuration;
- accidental-click geometry and Confirmed Click/Policy Center/serving-limit history;
- caps/cooldowns and first/repeated-value guardrails.

Public App Store advertising/privacy declarations remain evidence that advertising/tracking is declared, but not evidence of the runtime implementation above.
