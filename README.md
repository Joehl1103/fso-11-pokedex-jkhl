# Full Stack Open CI/CD Pokedex

A React Pokedex application used in the Full Stack Open CI/CD module. The
application is bundled with Webpack, served locally by Express in production,
and configured for deployment to Fly.io.

## Prerequisites

- Node.js (the Docker build uses Node.js 24.5.0)
- npm
- Docker and the Fly.io CLI, only when building or deploying the container

## Getting started

Install dependencies from the project directory:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Webpack opens the app in your browser and serves it at
`http://localhost:8080`.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Webpack development server on port 8080. |
| `npm test` | Run the Jest unit-test suite. |
| `npm run test:e2e` | Run the Chromium Playwright end-to-end tests. This starts the development server automatically. |
| `npm run eslint` | Check JavaScript and JSX files with ESLint. |
| `npm run build` | Create an optimized production bundle in `dist/`. |
| `npm run start-prod` | Serve the built `dist/` directory with Express on port 5001 by default. |

To run the production build locally:

```bash
npm run build
npm run start-prod
```

Set the `PORT` environment variable to use a different production port.

## Deployment

### Fly.io (current)

The checked-in `fly.toml` deploys the Express application to Fly.io. It uses
port 5001 and verifies availability through `GET /health`, which returns
`200 OK` with the body `ok`.

The live application is available at
[fs-pokedex-silver-moon-3259.fly.dev](https://fs-pokedex-silver-moon-3259.fly.dev/).

After authenticating with Fly.io, deploy with:

```bash
fly deploy
```

The deployment runs with a canary strategy. The app also exposes `GET
/version`, currently returning `1`.

### Render.com

The application is also deployed on Render.com at
[fso-11-pokedex-jkhl.onrender.com](https://fso-11-pokedex-jkhl.onrender.com/).

## Project structure

- `src/` — React components, styles, and unit tests
- `tests/` — Playwright end-to-end tests
- `app.js` — Express server for the production build
- `Dockerfile` — multi-stage container build
- `fly.toml` — Fly.io deployment and health-check configuration
