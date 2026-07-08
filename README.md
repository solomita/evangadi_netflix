# Netflix Clone — Phase 4 · Week 1

A Netflix landing-page clone built with **React + Vite**, following the Week 1
guided video sequence. It reproduces the header, banner, movie rows/cards, and
footer, with live movie data from **TMDB** (The Movie Database).

## Features (built in video order)

1. **Project overview & setup** — Vite + React scaffold.
2. **Header** — logo, nav links, expanding search box, notifications bell, and a
   profile dropdown (Account / Help Center / Sign out). Darkens on scroll.
3. **Banner** — a random Netflix Original with title, overview, and Play / My List
   buttons over a full-bleed backdrop with a bottom fade.
4. **Card** — poster with a Netflix-style hover panel (play / add / mark-watched /
   more buttons, rating, media type, HD badge, and genres).
5. **Row & Slider** — horizontal, hover-navigable sliders built with **Swiper**.
6. **API integration** — `axios` against the TMDB v3 API across 8 categories.
7. **Footer** — social icons, four link columns, and copyright.
8. **Deployment** — `vercel.json` for a one-command Vercel deploy.
9. **AI integration (possibilities)** — see `docs/AI-INTEGRATION.md`.

## Getting started

```bash
npm install
cp .env.example .env      # then paste your TMDB key into .env
npm run dev               # http://localhost:5173
```

### TMDB API key

Live data needs a free TMDB v3 key
(<https://www.themoviedb.org/settings/api>). Put it in `.env`:

```
VITE_TMDB_API_KEY=your_key_here
```

**No key? No problem.** The app ships with an offline fallback that renders the
bundled resource images (`src/assets/image`), so every component is fully
browsable before you add a key.

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the Vite dev server          |
| `npm run build`   | Production build into `dist/`      |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Run ESLint                         |

## Deployment (Vercel)

1. Push the repo to GitHub.
2. Import it in Vercel — framework preset **Vite** is detected automatically.
3. Add the `VITE_TMDB_API_KEY` environment variable in the Vercel dashboard.
4. Deploy. `vercel.json` sets the build command, output dir, and SPA rewrites.

## Project structure

```
src/
  components/
    Header/    Banner/    MovieCard/    Row/    Footer/
  utils/
    axios.js         # TMDB axios instance
    requests.js      # 8 category endpoints + hasApiKey flag
    constants.js     # image bases + local-image + helpers
    fallbackData.js  # offline catalogue from bundled images
  App.jsx            # header + banner + 8 rows + footer
```
