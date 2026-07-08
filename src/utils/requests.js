// TMDB request endpoints (see Resources/MovieRequestingUrl.txt).
// The API key is read from the Vite environment variable VITE_TMDB_API_KEY.
// Put your key in a .env file at the project root:  VITE_TMDB_API_KEY=xxxxx
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// True only when a real key has been provided. Components use this to decide
// whether to hit the network or fall back to the bundled resource images.
export const hasApiKey = Boolean(API_KEY) && API_KEY !== "your API KEY HERE";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
