import assert from "node:assert/strict";
import test from "node:test";
import {
  decodeShareHash,
  encodeShareHash,
  isShareHash,
} from "../app/share.ts";

const sample = {
  key: "euB" as const,
  lang: "de" as const,
  answers: {
    audience: "person",
    status: "new",
    nationality: "eu",
    arrangement: "local",
    employmentDuration: "twelveplus",
    canton: "ZH",
  },
};

test("encodeShareHash writes a readable route, canton and answers", () => {
  const hash = encodeShareHash(sample);
  assert.ok(hash.startsWith("#euB/zh?"));
  assert.match(hash, /lang=de/);
  assert.match(hash, /nationality=eu/);
  assert.equal(isShareHash(hash), true);
});

test("decodeShareHash restores a readable share link", async () => {
  const decoded = await decodeShareHash(encodeShareHash(sample));
  assert.ok(decoded);
  assert.equal(decoded.key, "euB");
  assert.equal(decoded.lang, "de");
  assert.deepEqual(decoded.answers, sample.answers);
});

test("decodeShareHash rejects an invalid language or canton", async () => {
  assert.equal(await decodeShareHash("#euB/zh?lang=xx&nationality=eu"), null);
  assert.equal(await decodeShareHash("#euB/zz?lang=en&nationality=eu"), null);
  assert.equal(isShareHash("#history"), false);
});

test("decodeShareHash rejects non-answer query values", async () => {
  assert.equal(await decodeShareHash("#euB/zh?lang=en&nationality=eu-efta"), null);
});

test("legacy snapshot hashes are recognised", () => {
  assert.equal(isShareHash("#d.abc"), true);
  assert.equal(isShareHash("#d."), false);
});
