import axios from "axios";

// Base instance pointing at the TMDB (The Movie Database) v3 API.
// The individual endpoints live in ./requests.js
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
