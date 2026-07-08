import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import instance from "../../utils/axios";
import { hasApiKey } from "../../utils/requests";
import { fallbackRows } from "../../utils/fallbackData";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./Row.module.css";

function Row({ title, fetchUrl, fetchKey }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let active = true;

    async function fetchData() {
      // No key → bundled fallback catalogue for this category.
      if (!hasApiKey) {
        if (active) setMovies(fallbackRows[fetchKey] || []);
        return;
      }

      try {
        const { data } = await instance.get(fetchUrl);
        if (active) setMovies(data.results || []);
      } catch {
        if (active) setMovies(fallbackRows[fetchKey] || []);
      }
    }

    fetchData();
    return () => {
      active = false;
    };
  }, [fetchUrl, fetchKey]);

  if (!movies.length) return null;

  return (
    <section className={styles.Row}>
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={2}
        spaceBetween={12}
        breakpoints={{
          640: { slidesPerView: 3 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
          1500: { slidesPerView: 6 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Row;
