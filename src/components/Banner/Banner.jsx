import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import requests, { hasApiKey } from "../../utils/requests";
import { fallbackOriginals } from "../../utils/fallbackData";
import { getBackdrop, getTitle, truncate } from "../../utils/constants";
import styles from "./Banner.module.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    let active = true;

    async function fetchBanner() {
      // No API key configured → use a bundled featured title.
      if (!hasApiKey) {
        const pick =
          fallbackOriginals[
            Math.floor(Math.random() * fallbackOriginals.length)
          ];
        if (active) setMovie(pick);
        return;
      }

      try {
        const { data } = await instance.get(requests.fetchNetflixOriginals);
        const results = data.results || [];
        const pick = results[Math.floor(Math.random() * results.length)];
        if (active) setMovie(pick);
      } catch {
        // Network/key failure → graceful fallback.
        if (active) setMovie(fallbackOriginals[0]);
      }
    }

    fetchBanner();
    return () => {
      active = false;
    };
  }, []);

  if (!movie) return <div className={styles.banner} />;

  return (
    <header
      className={styles.banner}
      style={{ backgroundImage: `url(${getBackdrop(movie)})` }}
    >
      <div className={styles.contents}>
        <h1 className={styles.title}>{getTitle(movie)}</h1>
        <p className={styles.description}>{truncate(movie.overview, 160)}</p>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.play}`}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <button className={`${styles.button} ${styles.list}`}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M11 5h2v14h-2z" />
              <path d="M5 11h14v2H5z" />
            </svg>
            My List
          </button>
        </div>
      </div>
      <div className={styles.fadeBottom} />
    </header>
  );
}

export default Banner;
