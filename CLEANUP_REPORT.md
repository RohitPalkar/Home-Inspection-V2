# Cleanup Report

## Overview

This report documents every file, package, configuration, and artifact removed during the migration from Lovable + TanStack Start + Nitro to standard React + Vite.

---

## Removed Files (19 files)

### Lovable/Nitro/SSR Server Files

| File                    | Reason                                                     |
| ----------------------- | ---------------------------------------------------------- |
| `src/server.ts`         | Nitro SSR server entry with Cloudflare fetch handler       |
| `src/start.ts`          | TanStack Start instance with middleware                    |
| `src/routeTree.gen.ts`  | Auto-generated TanStack Router route tree                  |
| `src/router.tsx`        | TanStack Router configuration                              |
| `src/routes/__root.tsx` | TanStack Router root layout (migrated to App.tsx + pages/) |
| `src/routes/index.tsx`  | TanStack Router file route (migrated to React Router)      |

### Lovable-Specific Files

| File                                 | Reason                                             |
| ------------------------------------ | -------------------------------------------------- |
| `src/lib/lovable-error-reporting.ts` | Calls `window.__lovableEvents.captureException()`  |
| `src/lib/error-capture.ts`           | Captures errors for h3/Nitro server error recovery |
| `src/lib/error-page.ts`              | SSR error HTML page generation                     |

### Configuration Files

| File              | Reason                                     |
| ----------------- | ------------------------------------------ |
| `components.json` | shadcn/ui configuration (no longer used)   |
| `lovable/`        | Lovable editor configuration directory     |
| `prettierignore`  | Not needed — `.gitignore` covers artifacts |

### Build Artifact Directories

| Directory    | Reason                                    |
| ------------ | ----------------------------------------- |
| `.output/`   | Nitro build output                        |
| `.tanstack/` | TanStack Router cache                     |
| `.wrangler/` | Cloudflare Wrangler configuration         |
| `.vinxi/`    | Vinxi (used by TanStack Start internally) |

### Lock Files

| File          | Reason                                   |
| ------------- | ---------------------------------------- |
| `bun.lock`    | Bun package manager lockfile (using npm) |
| `bunfig.toml` | Bun configuration                        |

---

## Removed Dependencies (18 packages)

### Removed Dependencies

| Package                             | Reason                                              | Category         |
| ----------------------------------- | --------------------------------------------------- | ---------------- |
| `@tanstack/react-start`             | TanStack Start full-stack framework                 | Full framework   |
| `@tanstack/router-plugin`           | TanStack Router build plugin                        | Routing          |
| `@lovable.dev/vite-tanstack-config` | Lovable's Vite preset                               | Build tooling    |
| `nitro`                             | Server engine for SSR                               | Server           |
| `vite-tsconfig-paths`               | Replaced by built-in `resolve.alias` in Vite config | Build tooling    |
| `@tanstack/react-query`             | Not used by any component                           | State management |

### Removed DevDependencies

| Package                                      | Reason |
| -------------------------------------------- | ------ |
| _(none — all original devDependencies kept)_ |        |

---

## New Dependencies Added

| Package            | Reason                                | Category |
| ------------------ | ------------------------------------- | -------- |
| `react-router-dom` | Client-side routing                   | Routing  |
| `@types/node`      | TypeScript types for `vite.config.ts` | Build    |

---

## Configuration Changes

### vite.config.ts

- **Removed**: `@lovable.dev/vite-tanstack-config` wrapper
- **Added**: `@vitejs/plugin-react` + `@tailwindcss/vite` + explicit `resolve.alias`
- **Result**: Transparent, standard Vite configuration

### tsconfig.json

- Split into project references: `tsconfig.app.json` + `tsconfig.node.json`
- Standard Vite React TypeScript template structure
- All strictness settings preserved

### eslint.config.js

- Removed: `no-restricted-imports` rule for `server-only` (TanStack Start specific)
- All other rules preserved

### package.json

- Renamed from `tanstack_start_ts` to `home-inspection-survey`
- Version bumped to `2.0.0`
- Scripts simplified: removed `build:dev` (Nitro-specific)
- `"sideEffects"` field removed (was part of Lovable config)
- All dependencies replaced with standard equivalents

### .gitignore

- Removed: `.output`, `.tanstack/**`, `.vinxi`, `.wrangler/`, `.dev.vars`
- All other entries preserved

### index.html (new)

- Standard Vite SPA entry point with `<div id="root">` and module script
- All SEO meta tags preserved from original `__root.tsx` head configuration

---

## Dead Code Removed

### Unused Utilities

| File                                 | Lines | Reason                           |
| ------------------------------------ | ----- | -------------------------------- |
| `src/lib/lovable-error-reporting.ts` | 43    | Lovable-specific error reporter  |
| `src/lib/error-capture.ts`           | 29    | Server-side error capture for h3 |
| `src/lib/error-page.ts`              | 30    | SSR error HTML page              |

### Generated Code

| File                   | Lines | Reason                         |
| ---------------------- | ----- | ------------------------------ |
| `src/routeTree.gen.ts` | ~15   | TanStack Router auto-generated |

### Console Logs

- `console.error(error)` in `src/server.ts` — server-side only, removed with the file
- `console.error` in `src/start.ts` — server-side only, removed with the file

---

## Total Impact

| Category      | Before         | After         | Reduction |
| ------------- | -------------- | ------------- | --------- |
| Source files  | 46             | 40            | -13%      |
| Dependencies  | 339            | 210           | -38%      |
| Build outputs | 3 environments | 1 environment | -67%      |
| Config files  | 10             | 8             | -20%      |
