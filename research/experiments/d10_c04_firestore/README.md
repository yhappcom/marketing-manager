# D10 C04 — Firestore Emulator reward-admission harness (research only)

**Date:** 2026-11-09 KST. **Scope:** independently executable research test design, not LogMate product code, live AdMob, or real Firestore validation.

## Objective

Test the conceptual invariant **one authenticated advertising attempt ⇒ at most one usable fulfillment**, even when signed-fixture SSV, publisher compensation, duplicate delivery and retry compete. The provider-verification flag is intentionally synthetic; it is NOT a Google-origin signature verifier. The code is only for the Marketing Manager research repository.

## Safety and reproducibility

- Requires exactly `GCLOUD_PROJECT=demo-logmate-c04` and loopback `FIRESTORE_EMULATOR_HOST` on port 8080. Any other environment fails **before** the Firestore SDK is loaded. Never bypass this guard to test a production/staging account.
- The official Firebase docs explain that `demo-` Emulator projects have **no real Firebase resources**, while using a real Firebase project with un-emulated services may contact those live resources. See https://firebase.google.com/docs/emulator-suite/connect_firestore.
- `firestore.rules` denies client SDK access. Server SDKs bypass Security Rules, so these tests do NOT validate authentication or client-permission enforcement.
- Synthetic owner IDs, random isolated research run paths, no aviation records, no secrets, no AdMob publisher credentials. Direct versions are source-checked `@google-cloud/firestore 9.4.0` and `firebase-tools 15.35.0` as of this study; transitive dependencies are not lock-pinned until a future approved `npm install` creates a lockfile.
- Code was syntax-parsed in a V8 isolate, and its unsafe-environment guard was evaluated with mocked Node builtins. **No Firestore Emulator, actual database writes, Google SSV, or server-side concurrency tests were run in this research environment.**

## Local execution, only in an authorized isolated environment

From this directory, with Node 22+, Java 21+, npm and the Firebase CLI prerequisites installed:

```bash
npm install
npm run check:syntax
npm run test:guard    # execute without GCLOUD_PROJECT / FIRESTORE_EMULATOR_HOST set
npm run test:emulator # starts/stops the demo- project's Firestore Emulator
```

`firebase emulators:exec` is the vendor-supported pattern for short-lived automated tests: https://firebase.google.com/docs/emulator-suite/install_and_configure. Capture exact Node/Java/SDK/CLI versions, commit SHA, stdout/stderr, emulator logs and test receipts. If dependencies or the Emulator cannot start, record **NOT RUN**, not PASS. Do not run in the LogMate product repo, modify its Firebase configuration, or import actual user data.

## Scenario oracles

| Fixture | Expected Emulator evidence |
| --- | --- |
| Three SDK clients: SSV + compensation + duplicate SSV | Two distinct audit receipts, one fulfillment, account balance +4 |
| Compensation first and verified SSV afterward | Two receipts, one fulfillment, +4 |
| Committed grant then discarded handler response/retry | One receipt, one fulfillment, +4 (this is **simulated** ACK loss) |
| Injected exception before commit, then retry | No initial receipt/grant, one payout after retry |
| Provider transaction reused by a different synthetic UID | Cross-owner request rejected, no second payout |
| Unverified synthetic SSV or inactive synthetic owner | Rejected, no receipt/grant |

All transaction document reads happen before writes. The receipt and fulfillment are written within the same server-side transaction; retryable callbacks have no external/HTTP side effects. The test creates **three Firestore SDK client instances inside one Node process**, not three independently crashable OS processes.

## Why a PASS will still not close C04

Firestore Emulator does not implement every real Firestore transaction conflict/locking behavior and does not enforce all production limits or index requirements: https://firebase.google.com/docs/emulator-suite/connect_firestore. C04 requires a **separately authorized, nonproduction real Firestore test project** with real two+ independent worker processes, controlled forced transaction retries and `ABORTED`/timeout, actual service-level HTTP ACK loss and replay, account deletion/owner epoch, redacted trace receipt and cost limits.

Future C03 additionally needs an **actual Google-signed** AdMob SSV callback and Google public-key check: https://developers.google.com/admob/flutter/ssv. P0 publisher/App Store interpretation of zero free allowance and P2 actual managed EFB PWA Sync also remain OPEN.

**Score:** A 2/4, B 1/4, C 2/5, D 1/5, E 1/3, F 0/3 = **7/24 (29.17%) evidence-gate coverage unchanged**; defining an Emulator run is not running it.
