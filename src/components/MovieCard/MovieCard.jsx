import React from "react";
import { getPoster, getTitle } from "../../utils/constants";
import styles from "./MovieCard.module.css";

// Small round action button used in the hover overlay.
function CircleButton({ label, filled, children }) {
  return (
    <button
      className={`${styles.circle} ${filled ? styles.filled : ""}`}
      aria-label={label}
    >
      {children}
    </button>
  );
}

function MovieCard({ movie }) {
  const poster = getPoster(movie);
  const genres = movie.genres || [];
  const rating = movie.rating || "U/A 16+";
  const media = movie.media === "Movie" ? "Movie" : "Series";

  return (
    <div className={styles.card}>
      <img className={styles.poster} src={poster} alt={getTitle(movie)} loading="lazy" />

      <div className={styles.hover}>
        <div className={styles.thumb}>
          <img src={poster} alt={getTitle(movie)} />
          {movie.recentlyAdded && (
            <span className={styles.badge}>Recently added</span>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.actions}>
            <CircleButton label="Play" filled>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </CircleButton>
            <CircleButton label="Add to list">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M11 5h2v14h-2z" />
                <path d="M5 11h14v2H5z" />
              </svg>
            </CircleButton>
            <CircleButton label="Mark watched">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20 8l-1.4-1.4z" />
              </svg>
            </CircleButton>
            <CircleButton label="More">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </CircleButton>
          </div>

          <div className={styles.meta}>
            <span className={styles.age}>{rating}</span>
            <span>{media}</span>
            <span className={styles.hd}>HD</span>
          </div>

          <div className={styles.genres}>
            {genres.map((g, i) => (
              <React.Fragment key={g}>
                {i > 0 && <span className={styles.dot}>•</span>}
                <span>{g}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
