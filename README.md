# Undefined VideosPage

Reproductor de videos aleatorios. Muestra videos desde un archivo JSON
con información como nombre, fuente, anime, música y película.

## Stack

- React 19 + Vite 8 + SWC
- Sin TypeScript — JavaScript plano
- CSS con convención BEM

## Desarrollo

```bash
npm run dev      # Servidor en localhost:60499
npm run build    # Build producción en dist/
npm run lint     # ESLint
```

## Despliegue

Build automático en Cloudflare Pages al hacer push a `main`.
Los datos reales de videos se descargan desde R2 durante el build.
