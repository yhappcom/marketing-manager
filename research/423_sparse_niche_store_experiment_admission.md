# Research 423 — Sparse-Niche Store Experiment Admission Control

Validated: 2026-10-04

## New finding
For niche apps, Store experimentation is not automatically a zero-cost optimization opportunity. It consumes scarce eligible traffic and can leave decisions censored when the app cannot accumulate enough first-time downloads or statistical confidence.

Apple Product Page Optimization (PPO) can test up to three treatments of icon/screenshots/previews. Tests run for at most 90 days. Analytics does not surface a test until at least five first-time downloads are attributed, and Apple may mark a treatment Likely to be Inconclusive when current evidence is unlikely to reach significance. A treatment is labeled Performing Better/Worse at 90% confidence. PPO cannot test Custom Product Pages (CPPs).

CPPs solve a different problem: intent routing, not randomized default-page optimization. They can carry distinct screenshots/previews/promotional text/keywords, unique URLs, and optional deep links. CPP analytics also requires at least five first-time downloads per page before data appears.

## Operating implication
Do not split sparse traffic merely because Apple exposes testing or routing tools. Admit an experiment only when:
1. the decision is business-material;
2. there is one falsifiable hypothesis;
3. the expected eligible traffic can produce interpretable evidence within the platform window;
4. the proposed treatment differs materially enough to affect the intended decision;
5. no release/metadata change is likely to contaminate the run;
6. a predeclared stopping/decision rule exists.

When traffic is insufficient, prefer evidence accumulation: review language, community problem recurrence, Store-search terms, support questions, and first/repeated specialist-value telemetry. Do not convert weak evidence into a cosmetic A/B test.

## JD0–JD9 — Store Experiment Admission Contract
JD0 decision to be made
→ JD1 specialist intent/evidence
→ JD2 material hypothesis
→ JD3 default-page vs intent-route classification
→ JD4 eligible-traffic sufficiency
→ JD5 contamination/change freeze
→ JD6 treatment materiality
→ JD7 platform observation threshold/confidence
→ JD8 downstream first/repeated specialist value
→ JD9 SHIP / KEEP-BASELINE / HOLD-SPARSE / ROUTE-CPP / RESEARCH-FIRST / STOP-INCONCLUSIVE.

## MintTap
Use PPO only when default-page traffic can support a material creative decision. Use CPP only for materially distinct specialist intents, not ticker or copy clones. If either surface cannot accumulate interpretable evidence, preserve traffic and collect intent evidence instead.

## LogMate
Before launch, do not pre-build a portfolio of Store experiments. First establish pilot-language and Store-search evidence. After launch, test only decisions with enough traffic and a direct relationship to professional workflow value.

## Reusable rule
Platform experimentation capacity is not evidence capacity. Sparse niche apps should optimize the value of each observation, not the number of experiments.

## Authoritative sources
- Apple Developer — Overview of Product Page Optimization
- Apple Developer — Run a Product Page Optimization Test
- Apple Developer — Product Page Optimization Analytics
- Apple Developer — Configure Custom Product Pages
- Apple Developer — Custom Product Pages Analytics
