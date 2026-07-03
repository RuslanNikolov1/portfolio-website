<p align="center">
  <img src="public/briefcase.svg" alt="Portfolio logo" width="72" height="72" />
</p>

<h1 align="center">Portfolio Website</h1>

<p align="center">
  A single-page portfolio for <strong>Ruslan Nikolov</strong> — frontend developer, UI designer, and electronic music producer.
</p>

<p align="center">
  <a href="https://portfolio-website-dusky-five-28.vercel.app">Live demo</a>
  ·
  <a href="#getting-started">Getting started</a>
  ·
  <a href="#customization">Customization</a>
  ·
  <a href="#testing">Testing</a>
  ·
  <a href="#architecture-dashboard">Architecture</a>
  ·
  <a href="#project-structure">Structure</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/SASS-CSS_Modules-CC6699?style=flat-square&logo=sass&logoColor=white" alt="SASS" />
  <img src="https://img.shields.io/badge/Coverage-80%25-brightgreen?style=flat-square" alt="80% unit test coverage" />
</p>

---

## Overview

This project is a performance-focused portfolio built with the Next.js App Router. It combines a cinematic hero, interactive project showcase, expandable skills section, career timeline, client testimonials, and direct contact links — all styled with scoped SASS modules and animated with Framer Motion.

The layout is mobile-first, accessibility-aware (skip link, semantic landmarks, reduced-motion support), and optimized for fast first paint through lazy-loaded sections, skeleton placeholders, and aggressive static asset caching. The codebase maintains **80% unit test coverage** across components and data modules, enforced by Vitest coverage thresholds.

> [!TIP]
> Use this repository as a starting point for your own portfolio. Most personal content lives in a handful of data files under `src/data/`.

## Features

- **Hero with deferred video** — poster image loads first; background video loads after paint via `requestIdleCallback` and Intersection Observer
- **Project showcase** — tabbed carousel with swipe gestures, keyboard navigation, and live/code links
- **Skills explorer** — categorized, collapsible skill cards with proficiency levels and personal notes
- **About section** — Radix Tabs for career timeline and hobbies, with CV download
- **Testimonials carousel** — animated feedback cards with previous/next controls
- **Sticky navigation** — section-aware scroll spy, mobile drawer menu, and optional in-nav music player
- **Contact hub** — social and messaging links (phone, email, GitHub, LinkedIn, SoundCloud, Viber)
- **Performance tooling** — bundle analyzer, optimized package imports, WebP/AVIF images, long-lived cache headers
- **Unit tests** — 80% coverage with Vitest and Testing Library across components, pages, and data modules
- **Architecture dashboard** — Understand Anything knowledge graph with an interactive dashboard to explore layers, dependencies, and guided tours

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | SASS/SCSS with CSS Modules (no Tailwind) |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Components | [Radix UI](https://www.radix-ui.com/) (Tabs, Collapsible), [Lucide React](https://lucide.dev/) |
| Testing | [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/) |
| Deployment | [Vercel](https://vercel.com/) |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (or another package manager)

### Install and run

```bash
git clone https://github.com/RuslanNikolov1/portfolio-website-design-taste.git
cd portfolio-website-design-taste
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage report (80% thresholds) |
| `npm run analyze` | Build with the Next.js bundle analyzer |

## Project structure

```
src/
├── app/                    # Next.js App Router entry
│   ├── globals.scss        # Global styles and design tokens
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   └── page.tsx            # Home page shell
├── components/             # UI sections and skeletons
│   ├── Hero.tsx
│   ├── HomeSections.tsx    # Lazy-loaded below-the-fold sections
│   ├── Navigation.tsx
│   ├── NavigationMusicPlayer.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── About.tsx
│   ├── Feedbacks.tsx
│   └── Contact.tsx
├── data/                   # Editable content
│   ├── projects.ts
│   ├── skills.ts
│   └── social-links.ts
├── styles/                 # Shared SASS partials and breakpoints
│   ├── _variables.scss
│   ├── _backdrops.scss
│   └── breakpoints.ts
└── types/                  # Shared TypeScript interfaces
    └── index.ts
```

## Architecture dashboard

This repo includes a pre-built [Understand Anything](https://github.com/Egonex-AI/Understand-Anything) knowledge graph under `.understand-anything/`. The interactive dashboard helps you explore how the app is structured without reading every file first.

| What you get | Details |
| --- | --- |
| **Knowledge graph** | `.understand-anything/knowledge-graph.json` — files, functions, imports, and relationships across the codebase |
| **Architecture layers** | Application Shell, UI Components, Styling, Data & Types, Static Assets & SEO, Configuration & Documentation |
| **Guided tour** | Step-by-step walkthrough from layout and routing through lazy-loaded sections and data modules |
| **Interactive UI** | Search nodes, inspect dependencies, and navigate the graph visually |

In Cursor, run `/understand-dashboard` to launch the local dashboard against this project's graph. If the graph is missing or stale, run `/understand` first to regenerate it.

> [!TIP]
> New to the codebase? Start with the guided tour in the dashboard, then jump to the **Application Shell** and **UI Components** layers to see how `page.tsx`, `HomeSections.tsx`, and the section components connect.

## Page sections

| Section | Highlights |
| --- | --- |
| **Hero** | Full-viewport intro with name, tagline, and deferred background video |
| **Projects** | Featured work carousel with technology tags and external links |
| **Skills** | Frontend, design, tools, and music skills with expandable details |
| **About** | Education and work timeline, hobbies, and downloadable CV |
| **Feedbacks** | Colleague and client testimonials in a swipeable carousel |
| **Contact** | Direct links to phone, email, GitHub, LinkedIn, SoundCloud, and Viber |

## Customization

Update these files to make the site yours:

| What to change | Where |
| --- | --- |
| Projects, thumbnails, and links | `src/data/projects.ts` |
| Skills and proficiency notes | `src/data/skills.ts` |
| Social and contact links | `src/data/social-links.ts` |
| SEO title, description, Open Graph | `src/app/layout.tsx` |
| Testimonials | `src/components/Feedbacks.tsx` |
| Career timeline and hobbies | `src/components/About.tsx` |
| Images and media | `public/` |

> [!NOTE]
> Project images use WebP assets in `public/`. Keep filenames in sync with the `imageUrl` fields in `projects.ts`.

### Design system

Colors and typography are centralized in `src/styles/_variables.scss` under the **Vibrant Digital Pulse** palette:

- Background: `#0d0f11`
- Surface: `#171a1e`
- Primary accent (CTA): `#FFD644`
- Highlight / links: `#5DB7FF`
- Success / active: `#7CFFB2`

Fonts are loaded in `layout.tsx` via `next/font/google`: **Rubik** for display headings and **Inter** for body text.

Responsive breakpoints (shared between SASS and TypeScript):

- Mobile: up to `768px`
- Tablet: `768px` – `1024px`
- Desktop: `1024px` and above

## Testing

The project uses Vitest with jsdom and Testing Library, with **80% unit test coverage** enforced for lines, functions, branches, and statements. `npm run test:coverage` fails if coverage drops below that threshold.

```bash
# Run all tests once
npm run test:run

# Watch mode during development
npm run test

# Generate an HTML coverage report
npm run test:coverage
```

Tests live alongside components and data modules (`*.test.ts`, `*.test.tsx`).

## Performance

Several optimizations keep the initial bundle lean:

- Below-the-fold sections are dynamically imported in `HomeSections.tsx` with skeleton fallbacks
- `optimizePackageImports` for `framer-motion` and `lucide-react` in `next.config.ts`
- Hero video deferred until after first paint
- Static assets served with one-year immutable cache headers
- Image pipeline configured for WebP and AVIF output

Inspect bundle composition locally:

```bash
npm run analyze
```

See `BUNDLE_ANALYSIS.md` for a snapshot of bundle size and dependency breakdown.

## Deployment

The site is configured for Vercel. Connect your repository and deploy — no environment variables are required for the default setup.

Production URL: [https://portfolio-website-dusky-five-28.vercel.app](https://portfolio-website-dusky-five-28.vercel.app)

---

Built by [Ruslan Nikolov](https://github.com/RuslanNikolov1).
