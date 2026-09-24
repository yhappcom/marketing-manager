# Research 234 — Google Play Technical-Quality Visibility & 2027 Memory/Code Threshold Integrity

Date: 2026-09-24
Status: Validated from current Google/Android primary sources

## Why this matters
For a zero-paid-acquisition business, Play visibility is not only an ASO metadata problem. Google explicitly links Android vitals/core technical quality to Play visibility. A marketing system that optimizes keywords, listings, community referrals, or social traffic while ignoring technical-quality thresholds can lose discovery or create a poor post-install experience.

## Validated current state
Google Android vitals identifies core vitals including user-perceived crash rate, user-perceived ANR rate, excessive partial wake locks, memory usage, and bitmap memory usage. Google states core vitals affect Google Play visibility. DEX Code Optimization is also flagged as a quality item that may affect visibility.

Current documented stability/battery bad-behavior thresholds include:
- user-perceived crash rate: 1.09% overall; 8% per phone model;
- user-perceived ANR rate: 0.47% overall; 8% per phone model;
- excessive partial wake locks: 5% overall.

Google assesses app quality using a trailing 28-day period. Per-device failures matter independently of overall health; therefore a healthy global average does not prove healthy discovery eligibility for every device cohort.

### February 2027 expansion
Google announced that starting February 2027 apps and games must meet bad-behavior thresholds for:
1. dynamic memory usage (Anonymous RSS + Swap), assessed by app state and device RAM tier;
2. bitmap memory usage;
3. DEX code optimization.

Google says titles failing these thresholds may see reduced Play visibility and publishing capabilities. The DEX rule applies to apps with >10 MB DEX code; current Android vitals documentation specifies a minimum 25% threshold across optimization, obfuscation, and shrinking. Google’s August 26, 2026 announcement states optimized bundles should have at least 25% coverage across those dimensions using R8 or another shrinking tool.

Memory is not one universal MB ceiling. Google evaluates different RAM tiers and app states, so a single laboratory peak-memory number cannot authorize a claim that the app meets Play quality requirements.

### Existing wake-lock visibility consequence
This is not merely a future principle. Since March 1, 2026, titles exceeding the excessive partial wake-lock threshold may be excluded from prominent discovery surfaces such as recommendations, and Google may display a Store warning about battery drain.

## Marketing interpretation
Technical quality is a distribution prerequisite, not an ASO tactic. Do not describe performance work as a ranking hack and do not promise a ranking increase after remediation. The defensible chain is:

`qualified demand → Store/community exposure → install → technically reliable first value → repeat value`

with Play technical-quality eligibility constraining both discovery opportunity and downstream value.

Preserve these distinctions:
- technical-quality compliance ≠ ranking guarantee;
- overall healthy average ≠ every-device health;
- profiler/lab result ≠ Android-vitals production result;
- current threshold pass ≠ future threshold pass;
- visibility eligibility ≠ qualified acquisition;
- install ≠ repeated specialist value.

## ET0–ET5 Technical-Quality Visibility Integrity Gate

### ET0 — Platform/surface identity
Record Android/Google Play surface, app version/build, device population, reporting surface/API, and observation date. Never transfer an iOS quality result to Play.

### ET1 — Metric identity
Store the exact metric definition: crash, ANR, partial wake lock, Anonymous RSS + Swap, bitmap memory, or DEX optimization. Do not collapse them into a generic “performance score.”

### ET2 — Threshold/cohort integrity
Record overall versus per-device scope, RAM tier, process/app state, percentile where applicable, and the current threshold/effective date. Future February-2027 thresholds must remain future requirements until effective.

### ET3 — Production-evidence integrity
Use Android vitals/Play evidence for enforcement and visibility decisions. Local profiling, CI benchmarks, Accessibility Scanner, emulator results, or framework assumptions can diagnose risk but do not substitute for production-vitals evidence.

### ET4 — Discovery-causality integrity
If visibility changes after a quality fix, do not attribute the change solely to that fix without evidence. Record Store/search/listing changes, release changes, seasonality, territory, and acquisition mix alongside vitals.

### ET5 — Sustainable-value decision
Prioritize remediation where technical bad behavior threatens discovery eligibility or interrupts first/repeated specialist value. Do not trade critical product correctness, privacy, accessibility, or protected workflows for cosmetic benchmark gains.

## MintTap application
Build a Play technical-quality register before additional organic-acquisition optimization:
`version/build × metric × overall/device cohort × RAM tier/app state × 28-day window × threshold × status × first/repeat-value impact`.

Portfolio/distribution/tax surfaces can contain data-heavy lists, charts, and images. Treat those as hypotheses for profiling only; do not claim a production memory problem until actual evidence exists. Review current wake-lock, crash, ANR, memory/bitmap, DEX optimization, split-bundle, and Android-vitals warnings before interpreting weak Play discovery as an ASO problem.

## LogMate application
Because LogMate is prelaunch, technical-quality evidence should enter release readiness rather than being repaired after marketing begins. Preserve representative Android phone/tablet testing and ensure the build pipeline is ready for DEX optimization/shrinking. Flight logging, import/export, totals, and sync are protected workflows: performance optimization must not compromise record correctness or reliability.

After launch, establish a 28-day production-vitals baseline before interpreting Play visibility trends. Sparse early production evidence remains sparse; do not invent quality conclusions from absent cohorts.

## Reusable company rule
For every future Android niche app, Store growth readiness requires both truthful merchandising and technical-distribution health. Add a prelaunch/release checklist item for current Play technical-quality requirements and future-dated enforcement changes. Revalidate thresholds from Google primary sources because the requirement set can change.

## Sources
- Android Developers, Android vitals: https://developer.android.com/games/optimize/vitals (accessed 2026-09-24).
- Android Developers Blog, “Elevating app quality: Reducing memory usage and improving device migration,” published 2026-08-26: https://developer.android.com/blog/posts/elevating-app-quality-reducing-memory-usage-and-improving-device-migration
- Android Developers Blog, “Raising the bar on battery performance: excessive partial wake locks metric is now out of beta”: https://android-developers.googleblog.com/2025/11/raising-bar-on-battery-performance.html

## Next evidence
1. MintTap: inspect actual Play Console Android vitals and build configuration; classify observed values through ET0–ET5.
2. LogMate: add February-2027 memory/bitmap/DEX readiness to Android launch engineering handoff.
3. Recheck Google documentation before February 2027 for final publishing-capability details and any threshold revisions.
