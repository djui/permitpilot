import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("static GitHub Pages build includes the PermitPilot shell", async () => {
  const html = await readFile(new URL("../dist-pages/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>PermitPilot<\/title>/);
  assert.match(
    html,
    /Find the likely Swiss work and residence permit route/,
  );
  assert.match(html, /id="root"/);
  assert.match(html, /\/permitpilot\/assets\/index-.*\.js/);
  assert.match(html, /href="\/permitpilot\/favicon\.svg"/);
});
