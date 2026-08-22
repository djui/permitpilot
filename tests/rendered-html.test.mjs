import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("static GitHub Pages build includes robots.txt", async () => {
  const robots = await readFile(new URL("../dist-pages/robots.txt", import.meta.url), "utf8");

  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /unofficial/i);
  assert.match(robots, /https:\/\/permitpilot\.ch\//);
});

test("static GitHub Pages build includes the PermitPilot shell", async () => {
  const html = await readFile(new URL("../dist-pages/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>PermitPilot<\/title>/);
  assert.match(
    html,
    /Find the likely Swiss work and residence permit route/,
  );
  assert.match(html, /Unofficial guidance; the canton decides/);
  assert.match(html, /Content-Security-Policy/);
  assert.doesNotMatch(html, /og\.png/);
  assert.match(html, /id="root"/);
  assert.match(html, /\.\/assets\/index-.*\.js/);
  assert.match(html, /href="\.\/favicon\.svg"/);
  assert.match(html, /og:url" content="https:\/\/permitpilot\.ch\/"/);
});

test("static GitHub Pages build includes the custom-domain CNAME", async () => {
  const cname = await readFile(new URL("../dist-pages/CNAME", import.meta.url), "utf8");

  assert.equal(cname.trim(), "permitpilot.ch");
});
