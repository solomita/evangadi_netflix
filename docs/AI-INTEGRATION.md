# Possible AI Integration (Video 9)

Directions this clone is set up to grow into, based on
`Resources/FutureIntegrationPossibilities.txt`.

## Non-AI integration (foundation)

- **Login & signup with authentication.** Add an auth page (design reference
  `login.jpg`) backed by a provider (Firebase Auth, Supabase, or a custom
  Node/Express + JWT backend). Gate the browse page behind a session.

## AI integration

- **Movie suggestions based on liked movies.** The "add to list" / "mark
  watched" buttons on each card already model user intent. Feed that signal to
  a recommendation step:
  1. Collect the user's liked/watched TMDB `genre_ids` and titles.
  2. Send them to an LLM (e.g. **Claude**, model id `claude-opus-4-8`) with a
     prompt like _"Given these liked titles and genres, suggest 10 similar
     Netflix-style titles as JSON."_
  3. Resolve each suggestion back to a TMDB record and render it in a new
     **"Recommended for You"** row.

Because rows are data-driven (`App.jsx` → `Row`), a recommendations row is just
one more entry in the `ROWS` array whose data comes from the AI step instead of
a fixed TMDB endpoint.

> Note: keep any AI provider key on a small backend/serverless function — never
> ship a provider key in client-side Vite env vars.
