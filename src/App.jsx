import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import Footer from "./components/Footer/Footer";
import requests from "./utils/requests";
import "./App.css";

// Each row maps a display title to a request key + its TMDB endpoint.
const ROWS = [
  { title: "Netflix Originals", key: "fetchNetflixOriginals" },
  { title: "Trending Now", key: "fetchTrending" },
  { title: "Top Rated", key: "fetchTopRatedMovies" },
  { title: "Action Movies", key: "fetchActionMovies" },
  { title: "Comedy Movies", key: "fetchComedyMovies" },
  { title: "Horror Movies", key: "fetchHorrorMovies" },
  { title: "Romance Movies", key: "fetchRomanceMovies" },
  { title: "Documentaries", key: "fetchDocumentaries" },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <main className="rows">
        {ROWS.map((row) => (
          <Row
            key={row.key}
            title={row.title}
            fetchKey={row.key}
            fetchUrl={requests[row.key]}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
