// next/image does not auto-prefix local `public/` asset paths with
// basePath (unlike next/link) — see basePath.md, "Images" section — so
// local product photography needs this helper wherever it's referenced.
const BASE_PATH = process.env.GITHUB_PAGES === "true" ? "/aurelis" : "";

export function localAsset(path: string) {
  return `${BASE_PATH}${path}`;
}
