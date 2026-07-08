// Offline fallback catalogue built from the bundled resource images
// (Resources/ImagesForInitialUse). Used to populate the UI when no TMDB API
// key is present so the clone is fully browsable without a network call.
import { localImages } from "./constants";

const genresPool = [
  ["Sci-Fi", "Thriller", "Action"],
  ["Drama", "Romance"],
  ["Comedy"],
  ["Horror", "Mystery"],
  ["Documentary"],
  ["Adventure", "Fantasy"],
];

// Wrap a local image file name into a TMDB-shaped object the cards understand.
function make(file, title, i) {
  return {
    id: `${file}-${i}`,
    title,
    overview:
      "A gripping story that keeps you on the edge of your seat, streaming now on Netflix.",
    local: localImages[file],
    genres: genresPool[i % genresPool.length],
    rating: i % 2 === 0 ? "U/A 16+" : "U/A 13+",
    media: i % 3 === 0 ? "Movie" : "TV",
    recentlyAdded: i % 4 === 0,
  };
}

// Featured / Netflix Originals — the named .webp title-art images.
export const fallbackOriginals = [
  make("monarchLegacyOfMonsters.webp", "Monarch: Legacy of Monsters", 0),
  make("scream7.webp", "Scream 7", 1),
  make("youngSherlock.webp", "Young Sherlock", 2),
  make("TheBride.webp", "The Bride", 3),
  make("vladimir.webp", "Vladimir", 4),
  make("pursuitOfJade.webp", "Pursuit of Jade", 5),
  make("hoppers.webp", "Hoppers", 6),
  make("coldStorage.webp", "Cold Storage", 7),
  make("marshals.webp", "Marshals", 8),
  make("hamnet.webp", "Hamnet", 9),
  make("WareMachine.webp", "War Machine", 10),
];

// The numbered poster images, reused across the other rows.
const posters = [
  "10061.jpg", "10066.jpg", "10067.jpg", "10069.png", "10072.jpg",
  "10075.png", "10076.jpg", "10077.jpg", "10078.jpg", "10079.jpg",
  "10080.jpg", "10081.png", "10082.jpg", "10083.jpg", "10084.jpg",
  "10085.jpg", "10086.jpg", "10092.jpg",
];

// Build a row by rotating through the poster set starting at `offset`.
function buildRow(offset) {
  return posters.map((file, i) =>
    make(file, `Featured Title ${((offset + i) % posters.length) + 1}`, offset + i)
  );
}

export const fallbackRows = {
  fetchTrending: buildRow(0),
  fetchNetflixOriginals: fallbackOriginals,
  fetchTopRatedMovies: buildRow(3),
  fetchActionMovies: buildRow(6),
  fetchComedyMovies: buildRow(9),
  fetchHorrorMovies: buildRow(2),
  fetchRomanceMovies: buildRow(5),
  fetchDocumentaries: buildRow(8),
};

// Map a request path (from requests.js) back to a fallback row key.
export function fallbackFor(fetchUrl) {
  const key = Object.keys(fallbackRows).find((k) =>
    fetchUrl.includes(k.replace("fetch", "").toLowerCase())
  );
  return fallbackRows[key] || fallbackRows.fetchTrending;
}
