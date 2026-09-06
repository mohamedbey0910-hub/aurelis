// Placeholder photography — stable, deterministic seeded URLs (swap for real
// campaign photography once available; the CMS content layer in `src/data`
// only stores a URL string, so no other code needs to change).
export function placeholder(seed: string, width = 1600, height = 2000) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

// next/image does not auto-prefix local `public/` asset paths with
// basePath (unlike next/link) — see basePath.md, "Images" section — so
// local product photography needs this helper wherever it's referenced.
const BASE_PATH = process.env.GITHUB_PAGES === "true" ? "/aurelis" : "";

export function localAsset(path: string) {
  return `${BASE_PATH}${path}`;
}
