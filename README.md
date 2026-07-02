# Home Inspection Self-Survey

A guided survey application for documenting property conditions for insurance purposes. Built with React 19, Vite, TypeScript, and Tailwind CSS v4.

## Tech Stack

| Technology         | Purpose                   |
| ------------------ | ------------------------- |
| **React 19**       | UI framework              |
| **Vite 8**         | Build tool and dev server |
| **TypeScript**     | Type safety               |
| **React Router 7** | Client-side routing       |
| **Tailwind CSS 4** | Utility-first styling     |
| **Lucide React**   | Icon library              |

## Prerequisites

- **Node.js** >= 18
- **npm** >= 9

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR        |
| `npm run build`   | TypeScript check + production build   |
| `npm run preview` | Preview production build locally      |
| `npm run lint`    | Run ESLint across all source files    |
| `npm run format`  | Format all source files with Prettier |

## Project Structure

```
src/
├── main.tsx                     # Application entry point
├── App.tsx                      # Root component with routes
├── styles.css                   # Tailwind CSS v4 theme + custom properties
├── vite-env.d.ts                # Vite type declarations
├── components/
│   ├── ErrorBoundary.tsx        # React error boundary
│   ├── forms/                   # Reusable form primitives
│   │   ├── CheckRow.tsx         # Checkbox-style select row
│   │   ├── DefaultHelpBody.tsx  # Default help content
│   │   ├── FieldLabel.tsx       # Form field label
│   │   ├── FileDropZone.tsx     # Drag-and-drop file upload
│   │   ├── HelpLink.tsx         # Help trigger link
│   │   ├── Input.tsx            # Text input
│   │   ├── NavFooter.tsx        # Back/Next navigation
│   │   ├── OutlineButton.tsx    # Secondary button
│   │   ├── PrimaryButton.tsx    # Primary action button
│   │   ├── RadioRow.tsx         # Radio-style select row
│   │   ├── Select.tsx           # Dropdown select
│   │   └── StepCard.tsx         # Card wrapper for steps
│   └── survey/                  # Survey-specific components
│       ├── HelpOverlay.tsx      # Responsive help modal
│       └── Shell.tsx            # App shell with header + progress
├── features/
│   └── survey/                  # Survey feature module
│       ├── types.ts             # Survey data types
│       ├── constants.ts         # Initial data, progress map
│       ├── SurveyApp.tsx        # Survey orchestrator
│       └── steps/               # Step components
│           ├── WelcomeStep.tsx
│           ├── FaqStep.tsx
│           ├── VerifyStep.tsx
│           ├── OccupancyStep.tsx
│           ├── InfrastructureStep.tsx
│           ├── WiringStep.tsx
│           ├── PanelStep.tsx
│           ├── PropertyDetailsStep.tsx
│           ├── BusinessStep.tsx
│           ├── PhotosStep.tsx
│           ├── ReviewStep.tsx
│           ├── SuccessStep.tsx
│           ├── OptOutStep.tsx
│           └── OptOutConfirmed.tsx
├── hooks/
│   └── use-media-query.ts       # Responsive media query hook
├── lib/
│   ├── utils.ts                 # cn() utility (clsx + tailwind-merge)
│   ├── sanitize.ts              # XSS prevention utilities
│   └── secure-storage.ts        # Namespaced localStorage wrapper
└── pages/
    ├── SurveyPage.tsx           # Survey route with error boundary
    └── NotFound.tsx             # 404 catch-all page
```

## Features

- **Multi-step survey wizard** with 14 steps
- **Progress tracking** with visual progress bar
- **Responsive design** — works from 320px to 1440px+
- **Help overlays** with mobile/tablet/desktop variants
- **Photo uploads** with drag-and-drop and previews
- **WCAG 2.2 AA compliant** — keyboard navigation, ARIA labels, semantic HTML
- **Dark mode** support via `.dark` class

## Building for Production

```bash
npm run build
```

Produces an optimized build in `dist/`:

```
dist/
├── index.html
├── assets/
│   ├── index-*.js       # ~286 KB (87 KB gzip)
│   └── index-*.css      # ~29 KB (6 KB gzip)
```

## Deployment

Deploy the `dist/` folder to any static hosting provider:

### Vercel

```bash
npx vercel dist
```

### Netlify

```bash
npx netlify deploy --dir=dist
```

### Cloudflare Pages

```bash
npx wrangler pages deploy dist
```

### GitHub Pages

```bash
npx gh-pages -d dist
```

## Accessibility

The application maintains WCAG 2.2 AA compliance:

- Skip-to-content link
- Proper heading hierarchy
- ARIA labels on interactive elements
- Focus management in modals and overlays
- Keyboard navigation support
- Sufficient color contrast
- Touch targets ≥ 48px

## Browser Support

| Browser            | Supported |
| ------------------ | --------- |
| Chrome (latest 2)  | ✓         |
| Firefox (latest 2) | ✓         |
| Safari (latest 2)  | ✓         |
| Edge (latest 2)    | ✓         |
| iOS Safari         | ✓         |
| Android Chrome     | ✓         |

## Migration

This project was migrated from Lovable + TanStack Start + Nitro to standard React + Vite. See `MIGRATION_REPORT.md` and `CLEANUP_REPORT.md` for full details.
