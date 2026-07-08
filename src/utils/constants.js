// TMDB image bases (see Resources/usefulLinks.txt)
export const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
export const BANNER_BASE = "https://image.tmdb.org/t/p/original";

// Eagerly import every bundled resource image so we can fall back to them when
// no TMDB API key is configured. Keyed by file name, e.g. "banner.jpeg".
const imageModules = import.meta.glob("../assets/image/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export const localImages = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [path.split("/").pop(), url])
);

// Resolve the small poster image for a card. Local fallbacks win when present.
export function getPoster(movie) {
  if (movie?.local) return movie.local;
  const path = movie?.poster_path || movie?.backdrop_path;
  return path ? `${IMAGE_BASE}${path}` : "";
}

// Resolve the large backdrop image for the banner.
export function getBackdrop(movie) {
  if (movie?.local) return movie.local;
  const path = movie?.backdrop_path || movie?.poster_path;
  return path ? `${BANNER_BASE}${path}` : "";
}

// Title works for both movies (title) and TV shows (name).
export function getTitle(movie) {
  return movie?.title || movie?.name || movie?.original_name || "Untitled";
}

// Trim an overview to a readable length for the banner.
export function truncate(text, n) {
  if (!text) return "";
  return text.length > n ? `${text.slice(0, n)}...` : text;
}
