"""D10 research-only ECDSA/SSV callback verifier fixture.

Run: python d10_ssv_crypto_fixture_20261108.py
Tests synthetic locally signed data, NOT Google AdMob signatures, keys, Firebase,
network receipt, production reward attribution, or LogMate application logic.
Google spec: https://developers.google.com/admob/android/ssv
"""
import base64
import json
from urllib.parse import urlsplit, parse_qsl
from cryptography.exceptions import InvalidSignature
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import ec

KEY_ID = 42
UNIT = "adunit-test-7"
ITEM = "flight_saves"
QTY = "4"
TX = "a" * 32
NONCE = "attempt/7"
SIGNED_PAIRS = [
    ("ad_network", "1953547073528090325"),
    ("ad_unit", UNIT),
    ("custom_data", "attempt%2F7"),
    ("reward_amount", QTY),
    ("reward_item", ITEM),
    ("timestamp", "1790000000000"),
    ("transaction_id", TX),
]
SIGNED_QUERY = "&".join(f"{name}={value}" for name, value in SIGNED_PAIRS)
PRIVATE = ec.generate_private_key(ec.SECP256R1())
PUB = PRIVATE.public_key()
OTHER_PUB = ec.generate_private_key(ec.SECP256R1()).public_key()
KEYS = {KEY_ID: PUB}
ATTEMPTS = {NONCE: {"uid": "pilot-uid", "offer": "offer-v1"}}
OFFER = {"unit": UNIT, "item": ITEM, "amount": QTY, "version": "offer-v1"}

class Reject(ValueError):
    pass


def encode_sig(buf):
    return base64.urlsafe_b64encode(buf).decode("ascii").rstrip("=")


def signed_url(query=SIGNED_QUERY, *, private=PRIVATE, key_id=KEY_ID):
    sig = encode_sig(private.sign(query.encode("ascii"), ec.ECDSA(hashes.SHA256())))
    return f"https://example.invalid/ssv?{query}&signature={sig}&key_id={key_id}"


def verify(url, *, keys=KEYS, attempts=ATTEMPTS, uid="pilot-uid", offer=OFFER):
    # Reject ambiguity: signature and key_id must be the final two parameters.
    query = urlsplit(url).query
    chunks = query.split("&")
    if len(chunks) < 4 or not chunks[-2].startswith("signature=") or not chunks[-1].startswith("key_id="):
        raise Reject("TAIL_ORDER")
    raw_signed = "&".join(chunks[:-2])
    if not raw_signed.isascii():
        raise Reject("NON_ASCII_QUERY")
    signed_pairs = parse_qsl(raw_signed, keep_blank_values=True, strict_parsing=True)
    fields = [k for k, _ in signed_pairs]
    if len(set(fields)) != len(fields) or "signature" in fields or "key_id" in fields:
        raise Reject("DUPLICATE_FIELD")
    if fields != sorted(fields):
        raise Reject("FIELD_ORDER")
    required = {"ad_network", "ad_unit", "reward_amount", "reward_item", "timestamp", "transaction_id"}
    allowed = required | {"custom_data", "user_id"}
    if not required.issubset(fields) or not set(fields).issubset(allowed):
        raise Reject("FIELDS_MISSING_OR_EXTRA")
    sig_literal = chunks[-2][len("signature="):]
    key_literal = chunks[-1][len("key_id="):]
    if not sig_literal or not key_literal.isdecimal():
        raise Reject("BAD_SIGNATURE_METADATA")
    key = keys.get(int(key_literal))
    if key is None:
        raise Reject("UNKNOWN_KEY_ID")
    try:
        sig = base64.urlsafe_b64decode(sig_literal + "=" * (-len(sig_literal) % 4))
        key.verify(sig, raw_signed.encode("ascii"), ec.ECDSA(hashes.SHA256()))
    except (ValueError, InvalidSignature) as exc:
        raise Reject("BAD_SIGNATURE") from exc
    # Only AFTER verifying original signed bytes may decoded fields be used.
    args = dict(signed_pairs)
    if args["ad_unit"] != offer["unit"] or args["reward_item"] != offer["item"] or args["reward_amount"] != offer["amount"]:
        raise Reject("OFFER_MISMATCH")
    # Google samples show multiple timestamp digit lengths; check numeric syntax,
    # not a fabricated fixed-length requirement. Separate freshness logic is needed.
    if not args["timestamp"].isdecimal():
        raise Reject("INVALID_TIMESTAMP")
    tx = args["transaction_id"]
    if len(tx) != 32 or any(c not in "0123456789abcdef" for c in tx):
        raise Reject("INVALID_TRANSACTION")
    candidate = attempts.get(args.get("custom_data"))
    if candidate is None or candidate["uid"] != uid or candidate["offer"] != offer["version"]:
        raise Reject("UNBOUND_ATTEMPT")
    return {"uid": uid, "transaction_id": tx, "attempt": args["custom_data"], "grant": int(args["reward_amount"])}


def expect_reject(fn, reason):
    try:
        fn()
    except Reject as e:
        return str(e) == reason
    return False


def query_change(name, value):
    return "&".join(f"{n}={value if n == name else v}" for n, v in SIGNED_PAIRS)


def mutation(url, search, repl):
    return url.replace(search, repl)

base = signed_url()
reversed_order = "&".join(f"{n}={v}" for n,v in reversed(SIGNED_PAIRS))
tests = [
  ("valid signed callback accepted", lambda: verify(base)["grant"] == 4),
  ("tamper reward amount rejected by signature", lambda: expect_reject(lambda: verify(mutation(base,"reward_amount=4", "reward_amount=9")),"BAD_SIGNATURE")),
  ("reordering raw pairs rejected", lambda: expect_reject(lambda: verify(mutation(base,SIGNED_QUERY,reversed_order)),"FIELD_ORDER")),
  ("equivalent percent escape re-encoding breaks signature", lambda: expect_reject(lambda: verify(mutation(base,"attempt%2F7","attempt%2f7")),"BAD_SIGNATURE")),
  ("extra signed-body field rejected", lambda: expect_reject(lambda: verify(signed_url(SIGNED_QUERY+"&x=1")),"FIELDS_MISSING_OR_EXTRA")),
  ("duplicate signed-body field rejected", lambda: expect_reject(lambda: verify(signed_url(SIGNED_QUERY+"&reward_item=flight_saves")),"DUPLICATE_FIELD")),
  ("wrong unknown key id rejected", lambda: expect_reject(lambda: verify(signed_url(key_id=43)),"UNKNOWN_KEY_ID")),
  ("wrong trusted public key fails", lambda: expect_reject(lambda: verify(base,keys={KEY_ID:OTHER_PUB}),"BAD_SIGNATURE")),
  ("invalid base64url signature rejected", lambda: expect_reject(lambda: verify(mutation(base,"signature=", "signature=notvalid")),"BAD_SIGNATURE")),
  ("incorrect UID cannot claim nonce", lambda: expect_reject(lambda: verify(base,uid="other-uid"),"UNBOUND_ATTEMPT")),
  ("mismatched advertised ad unit rejected", lambda: expect_reject(lambda: verify(signed_url(query_change("ad_unit", "foreign"))),"OFFER_MISMATCH")),
  ("mismatched advertised reward item rejected", lambda: expect_reject(lambda: verify(signed_url(query_change("reward_item", "coins"))),"OFFER_MISMATCH")),
  ("mismatched advertised reward amount rejected", lambda: expect_reject(lambda: verify(signed_url(query_change("reward_amount", "5"))),"OFFER_MISMATCH")),
  ("missing nonce attempt rejected", lambda: expect_reject(lambda: verify(base,attempts={}),"UNBOUND_ATTEMPT")),
  ("invalid transaction ID rejected", lambda: expect_reject(lambda: verify(signed_url(query_change("transaction_id", "bad"))),"INVALID_TRANSACTION")),
  ("invalid timestamp format rejected", lambda: expect_reject(lambda: verify(signed_url(query_change("timestamp", "abcd"))),"INVALID_TIMESTAMP")),
  ("official 16-digit timestamp style accepted", lambda: verify(signed_url(query_change("timestamp", "1507770365237823")))["grant"] == 4),
  ("optional signed user_id cannot override nonce owner", lambda: verify(signed_url(SIGNED_QUERY+"&user_id=other_uid"))["uid"] == "pilot-uid"),
  ("missing optional custom_data fails LogMate binding", lambda: expect_reject(lambda: verify(signed_url("&".join(f"{n}={v}" for n,v in SIGNED_PAIRS if n!="custom_data"))),"UNBOUND_ATTEMPT")),
  ("tail signature order rejected", lambda: expect_reject(lambda: verify(base.split("&signature=")[0] + "&key_id=42&signature=" + base.split("&signature=")[1].split("&key_id=")[0]),"TAIL_ORDER")),
  ("attempt offer version mismatch rejected", lambda: expect_reject(lambda: verify(base,attempts={NONCE:{"uid":"pilot-uid","offer":"old-offer"}}),"UNBOUND_ATTEMPT")),
]
results=[]
for name,test in tests:
    try:
        results.append({"name":name,"pass":bool(test())})
    except Exception as e:
        results.append({"name":name,"pass":False,"exception":str(e)})
passed=sum(r["pass"] for r in results)
print(json.dumps({"project":"D10 research-only local ECDSA fixture", "passed":passed,"total":len(results),"failed":[r for r in results if not r["pass"]],"limits":"Locally generated key only; NOT Google key, network SSV, Firebase, or LogMate app"},indent=2))
if passed!=len(results):
    raise SystemExit(1)
