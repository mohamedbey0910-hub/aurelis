import type { NextConfig } from "next";

// Static export for GitHub Pages. GH Pages serves this repo at
// https://mohamedbey0910-hub.github.io/aurelis/ — a subpath, not the
// domain root — so every internal link/asset needs the /aurelis prefix.
// That prefix would break local `next dev`, so it's gated behind the
// GITHUB_PAGES env var the CI workflow sets.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "aurelis";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
