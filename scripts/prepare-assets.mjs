import { cp, mkdir, readdir, readFile, unlink } from "node:fs/promises";
import path from "node:path";

// Copy only public media, never repository files, archives, or original error logs.
const used = new Set();
const collect = (value) => {
  if (
    typeof value === "string" &&
    /^(\.\/)?(journey|projects)\/.*\.(png|jpe?g|gif|webp|svg)$/i.test(value)
  )
    used.add(value.replace(/^\.\//, ""));
  else if (Array.isArray(value)) value.forEach(collect);
  else if (value && typeof value === "object")
    Object.values(value).forEach(collect);
};
collect(JSON.parse(await readFile("src/content/portfolio.json", "utf8")));
for (const file of ["src/content/home.tsx", "src/content/eokka.tsx"]) {
  const source = await readFile(file, "utf8");
  for (const match of source.matchAll(/assetPath\(\s*("(?:[^"\\]|\\.)*")\s*,?\s*\)/g)) {
    const asset = JSON.parse(match[1]);
    if (asset.startsWith("/"))
      used.add(decodeURIComponent(asset.slice(1)).normalize("NFC"));
  }
}
await mkdir("public", { recursive: true });
for (const directory of [
  "assets",
  "photos",
  "profile",
  "journey/images",
  "projects/eokka/images",
]) {
  await mkdir(path.join("public", directory), { recursive: true });
  for (const file of await readdir(directory)) {
    if (
      !/\.(png|jpe?g|gif|webp|svg|ico)$/i.test(file) ||
      !used.has(`${directory}/${file}`.normalize("NFC"))
    )
      continue;
    await cp(
      path.join(directory, file),
      path.join("public", directory, file.normalize("NFC")),
    );
  }
  // public/ is ignored, generated output; source images are never deleted.
  for (const file of await readdir(path.join("public", directory))) {
    if (!used.has(`${directory}/${file}`.normalize("NFC")))
      await unlink(path.join("public", directory, file));
  }
}
