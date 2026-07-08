<div align="center">

# 🎬 Netflix Clone

A pixel-faithful **Netflix landing page** built with React + Vite — header, banner,
hover cards, sliders, and footer, powered by the **TMDB** movie API.

<br/>

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-14-6332F6?logo=swiper&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1-5A29E4?logo=axios&logoColor=white)

<br/>

![Netflix clone preview](docs/preview.png)

</div>

> **Phase 4 · Week 1** project — built by following the guided video sequence
> (setup → header → banner → cards → rows/slider → API → footer → deploy → AI).

---

## ✨ Features

| Component | What it does |
| --------- | ------------ |
| **Header** | Logo, nav links, expanding search box, notifications bell, and a profile dropdown. Fades to solid black on scroll. |
| **Banner** | A random Netflix Original with title, overview, and **Play** / **My List** buttons over a full-bleed backdrop. |
| **MovieCard** | Poster that expands on hover into a panel with play / add / mark-watched / more buttons, rating, media type, HD badge, and genres. |
| **Row + Slider** | Horizontal, hover-navigable sliders (**Swiper**) across 8 categories. |
| **API** | `axios` against the **TMDB v3** API — trending, originals, top rated, action, comedy, horror, romance, documentaries. |
| **Footer** | Social icons, four link columns, and copyright. |

> 💡 **No API key? No problem.** The app ships with an offline fallback that renders
> bundled images, so every component is fully browsable before you add a key.

---

## 🚀 Getting started

```bash
git clone git@github.com:solomita/evangadi_netflix.git
cd evangadi_netflix

npm install
cp .env.example .env      # optional: paste your TMDB key
npm run dev               # → http://localhost:5173
```

### 🔑 TMDB API key (optional, for live data)

Get a free key at **<https://www.themoviedb.org/settings/api>** and add it to `.env`:

```env
VITE_TMDB_API_KEY=your_key_here
```

---

## 📜 Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## ☁️ Deployment

The repo is deploy-ready for both platforms — build command `npm run build`,
publish directory `dist`. Set `VITE_TMDB_API_KEY` in the host's environment
variables for live data (optional).

- **Netlify** — Import the repo; `netlify.toml` supplies the build + SPA redirect.
- **Vercel** — Import the repo; `vercel.json` supplies the build + SPA rewrites.

---

## 🗂️ Project structure

```
src/
├─ components/
│  ├─ Header/      # nav, search, bell, profile dropdown
│  ├─ Banner/      # featured title hero
│  ├─ MovieCard/   # poster + hover overlay
│  ├─ Row/         # Swiper slider of cards
│  └─ Footer/      # socials + links
├─ utils/
│  ├─ axios.js         # TMDB axios instance
│  ├─ requests.js      # 8 category endpoints + hasApiKey flag
│  ├─ constants.js     # image bases + helpers
│  └─ fallbackData.js  # offline catalogue from bundled images
└─ App.jsx             # header + banner + 8 rows + footer
```

---

## 🤖 AI integration

Planned next step: **movie recommendations from liked titles** — see
[`docs/AI-INTEGRATION.md`](docs/AI-INTEGRATION.md).

---

## 🙏 Credits

Movie data & images © [The Movie Database (TMDB)](https://www.themoviedb.org/).
This is a non-commercial educational clone, not affiliated with Netflix.
