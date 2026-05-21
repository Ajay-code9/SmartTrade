# TRADEADDA

Marketing site for [TRADEADDA.live](https://tradeadda.live) — trading platform with zero brokerage, margin, F&O, and commodities.

## Prerequisites

- Node.js 20+

## Setup

```bash
npm install
npm run dev
```

App runs at http://localhost:3000

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (port 3000) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | TypeScript check (`tsc --noEmit`) |

## Layout

- `src/` — React app (Vite + React Router + Tailwind)
- `pubic/` — Static assets (`publicDir` in `vite.config.ts`; served from `/`)

## Environment

No required env vars for the frontend. Add `VITE_*` variables in `.env.local` when you wire APIs.
