# Undefined_VideosPage / Usamin Network

## Stack

- **React 19** + **Vite 8** with `@vitejs/plugin-react` (SWC, not Babel)
- **ESLint 10** flat config (`eslint.config.js`).
- No TypeScript. All source is plain `.jsx`/`.js`.
- No test framework set up.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server on port **60499** |
| `npm run build` | Production build to `dist/` |
| `npm run lint` | ESLint on `**/*.{js,jsx}` |
| `npm run preview` | Preview production build |
| `npm run setup-env` | Copies `.env.example` → `.env` if missing |
| `npm run setup-videos` | Copies `videos.example.json` → `videos.json` if missing |

## Video data system

- `videos.example.json` — committed to repo, 3-entry schema example
- `videos.json` — gitignored, real data. **Required for the app to work.**
- On first `npm run dev`, `setup-videos` auto-copies the example if `videos.json` doesn't exist.
- **Production**: download real data before build (`R2` or set as secret in CI):
  ```
  curl -s -o videos.json $VIDEOS_R2_URL && npm run build
  ```

## CI / Deploy

`.github/workflows/deploy.yml` builds and deploys to Cloudflare Pages on push to `main`.
Requires these secrets/vars in the GitHub repo:

| Secret | Purpose |
|---|---|
| `VIDEOS_R2_URL` | Signed URL to the real `videos.json` in R2 |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Pages write access |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |
| `VITE_*` (vars) | OG meta tag values for production |

## Meta tags / environment

`index.html` uses `%VITE_*%` placeholders for OG tags, title, and keywords. Vite replaces them at build time from `.env`.

- `.env.example` — committed, generic dev values.
- `.env` — gitignored, created automatically by `setup-env` on first `npm run dev`.
- **Production** (Cloudflare Pages): set the real values as environment variables in the dashboard to override the defaults.

## Visual Studio

Solution file `Undefined_VideosPage.slnx` + `.esproj` project. Launch configs in `.vscode/launch.json` target Edge/Chrome on `localhost:60499`.
