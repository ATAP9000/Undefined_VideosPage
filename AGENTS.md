# Undefined_VideosPage

## Stack

- **React 19** + **Vite 8** with `@vitejs/plugin-react` (SWC, not Babel)
- **ESLint 10** flat config (`eslint.config.js`).
- No TypeScript. All source is plain `.jsx`/`.js`.
- No test framework set up.
- CSS with **BEM** convention, co-located per component.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server on port **60499** (auto-runs `setup-env` + `setup-videos`) |
| `npm run build` | Production build to `dist/` |
| `npm run lint` | ESLint on `**/*.{js,jsx}` |
| `npm run preview` | Preview production build |
| `npm run setup-env` | Copies `.env.example` → `.env` if missing |
| `npm run setup-videos` | Copies `videos.example.json` → `videos.json` if missing |

## Video data system

- `videos.example.json` — committed to repo, 3-entry schema example
- `videos.json` — committed, 77 entries synced with `videos/`. Fields: `Name`, `Video` (R2 URL), `Source`, `Music`, `Movie`.
- `videos/` — local video files. Upload to R2 when adding new content.
- On first `npm run dev`, `setup-videos` auto-copies the example if `videos.json` doesn't exist.
- **Production**: `npm run build` uses the committed `videos.json`. To fetch from R2 instead, add a download step to the Cloudflare build command.

## Meta tags / environment

`index.html` uses `%VITE_*%` placeholders for OG tags, title, and keywords. Vite replaces them at build time from `.env`.

- `.env.example` — committed, generic dev values.
- `.env` — gitignored, created automatically by `setup-env` on first `npm run dev`.
- **Production** (Cloudflare Pages): set the real values as environment variables in the dashboard to override the defaults.

## Visual Studio

Solution file `Undefined_VideosPage.slnx` + `.esproj` project. Launch configs in `.vscode/launch.json` target Edge/Chrome on `localhost:60499`.
