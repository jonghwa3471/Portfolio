import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const projects = JSON.parse(
  await readFile("src/content/portfolio.json", "utf8"),
).journey.filter((item) => item.id !== "eokka");
const pages = [
  "index.html",
  "projects/eokka/index.html",
  "journey/detail.html/index.html",
  ...projects.map((item) => `journey/${item.id}/index.html`),
];
let references = 0;
for (const file of pages) {
  const html = await readFile(path.join("out", file), "utf8");
  assert.ok(
    !html.includes('src="./app.js"') && !html.includes('src="./detail.js"'),
    file,
  );
  for (const match of html.matchAll(
    /<(?:a|img|script|link)\b[^>]*\b(?:href|src)="([^"]+)"/g,
  )) {
    const url = match[1].replaceAll("&amp;", "&");
    if (!url.startsWith("/")) continue;
    assert.ok(
      !base || url === base || url.startsWith(`${base}/`),
      `${file}: missing basePath ${url}`,
    );
    const relative = decodeURIComponent(
      url.slice(base.length).split(/[?#]/)[0],
    ).replace(/^\//, "");
    const target = path.resolve("out", relative);
    assert.ok(target.startsWith(path.resolve("out")), url);
    const info = await stat(target).catch(() => null);
    assert.ok(info, `${file}: missing ${relative}`);
    if (info.isDirectory()) await stat(path.join(target, "index.html"));
    references++;
  }
}
const assets = await readdir("out/projects/eokka/images");
assert.ok(
  !assets.some((file) => file.includes("-original.")),
  "Original error captures must not be exported",
);
console.log(
  `Static export verified: ${pages.length} pages, ${references} local references, basePath=${base || "/"}`,
);
