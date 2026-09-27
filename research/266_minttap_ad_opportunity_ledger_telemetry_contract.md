# Research 266 — MintTap Ad Opportunity Ledger Telemetry Contract

Date: 2026-09-27

## Decision
MintTap must diagnose monetization at the eligible-opportunity level before any density, format, floor or mediation expansion.

Canonical funnel:
specialist job → protected-state exclusion → genuine boundary → eligible opportunity → request → load/failure → impression → paid event → workflow completion → next core value → repeated core value.

## AM0–AM7 telemetry contract
AM0 Stable surface identity: assign a durable surface_id independent of ad-unit rotation.
AM1 Product semantics: record specialist_job, protected_state and boundary_type; never portfolio holdings, tax-entry content or other financial payloads.
AM2 Eligibility: emit eligible=true/false plus a controlled suppression_reason before an ad request.
AM3 Delivery: record request, load/failure, show failure and latency; retain response/source diagnostics needed to separate product suppression from supply failure.
AM4 Impression: record impression separately from load.
AM5 Revenue: capture paid-event value_micros, currency and precision_type immediately in the paid callback; preserve loaded ad-source identity when available.
AM6 Product consequence: link exposure to workflow completion/abandonment, next-core-value and repeated-core-value using privacy-minimized pseudonymous/session identifiers.
AM7 Decision integrity: optimize revenue per eligible opportunity and per repeated-value user, not requests/session or eCPM alone.

## Required event families
ad_opportunity_evaluated: surface_id, specialist_job enum, protected_state, boundary_type, eligible, suppression_reason, format, app_version, consent_state_class.
ad_request: opportunity_id, ad_unit_alias, format.
ad_load_result: opportunity_id, success, failure_class, latency_bucket, source/adapter diagnostic where available.
ad_impression: opportunity_id.
ad_paid: opportunity_id, value_micros, currency_code, precision_type, loaded_source identifiers.
product_outcome: opportunity_id/exposure cohort, workflow_completed, abandoned, next_core_value, repeated_core_value_window.

## App-open denominator
A foreground event is not an eligible opportunity. For cold starts, count eligibility only while the user is genuinely waiting on a loading state. Do not show on first app start. If main content is reached before the ad loads, suppress the exposure. Loaded app-open ads expire after four hours.

## Privacy/minimization
Do not log ticker holdings, transaction values, tax-adjustment content, memos or calculated portfolio values. Marketing/monetization telemetry needs product-state classes, not financial content. Keep consent-state observability coarse enough to diagnose eligibility changes without storing consent-message content.

## Decision queries
1. opportunity loss: eligible opportunities / qualified sessions
2. request loss: requests / eligible opportunities
3. supply loss: loads / requests
4. presentation loss: impressions / loads
5. monetization yield: paid events / impressions and revenue / eligible opportunity
6. sustainable yield: revenue / repeated-value user
7. harm guardrail: workflow completion, abandonment and repeated-value deltas by exposure cohort

A fall in revenue must be localized to one or more stages before changing ad pressure.

## Current authoritative platform evidence
Google Mobile Ads paid-event callbacks expose value_micros, currency_code and precision_type and can expose loaded ad-source response information. Google recommends attaching the paid listener before display and sending revenue data immediately in the paid callback to reduce lost callbacks/discrepancies.

Google App Open guidance says not to show on the first app start; cold-start ads should be shown strictly from the loading screen while assets load, and if the user reaches main content before the ad loads, the late ad should not be shown. App-open ads expire four hours after loading.

Sources:
- https://developers.google.com/admob/android/next-gen/impression-level-ad-revenue
- https://developers.google.com/admob/flutter/app-open
- https://developers.google.com/admob/android/next-gen/app-open

## Next
Map actual MintTap ad units and UI surfaces into this schema. Until production mapping exists, do not infer unused inventory from screen transitions or foreground counts.
