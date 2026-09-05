// Placeholder photography — stable, deterministic seeded URLs (swap for real
// campaign photography once available; the CMS content layer in `src/data`
// only stores a URL string, so no other code needs to change).
export function placeholder(seed: string, width = 1600, height = 2000) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
