# Trek Frontend Proof of Ability

A focused Vue + TypeScript frontend engineering case study based on Trek's public Electric Bikes product listing page.

This is **not** a production clone of TrekBikes.com. It is a proof-of-ability project that uses mock product data, remote licensed placeholder bike imagery, locally defined design tokens, and a componentized implementation to demonstrate the kind of work described in Trek's Frontend Engineer listing: translating UX/UI references into responsive, accessible, reusable frontend components.

## Why this project exists

The job listing emphasizes:

- Vue and TypeScript frontend development
- Responsive, accessible web interfaces
- UX/UI-to-component translation
- Internal design system contribution
- Testing and troubleshooting
- Technical documentation
- Practical use of AI coding tools
- Collaboration with UX, QA, and software delivery partners

This project is scoped around those exact signals rather than building a large fake e-commerce application.

## What this demonstrates

- Vue 3 single-file components with typed props and data models
- Vite build tooling
- Stateful client-side UI for product comparison
- Responsive desktop, tablet, and mobile product listing layout
- Accessible buttons, native selects, semantic landmarks, collapsible filters, and compare state
- Design-token CSS layer for Trek-inspired spacing, typography, color, and button treatment
- Product-card, toolbar, filter, promo, and compare components that could map into a design system
- Vitest + Testing Library smoke tests
- GitHub Actions validation for tests and production build
- Documentation that explains design translation, Figma-to-Vue workflow, AI workflow, accessibility, performance, and image choices

## Local setup

```bash
npm install
npm run dev
```

Run tests:

```bash
npm run test:run
```

Build:

```bash
npm run build
```

## Continuous integration

This repo includes a GitHub Actions workflow at `.github/workflows/ci.yml`.

The workflow runs:

```bash
npm install
npm run test:run
npm run build
```

## Component architecture

```txt
src/components/
  TrekHeader.vue
  HeroMarquee.vue
  Breadcrumbs.vue
  IntroCopy.vue
  FilterSidebar.vue
  FilterGroup.vue
  ProductToolbar.vue
  ProductGrid.vue
  ProductCard.vue
  ColorSwatches.vue
  CompareButton.vue
  PromoTile.vue
  CompareTray.vue

src/data/bikes.ts
src/types/bike.ts
src/styles/tokens.css
src/styles/base.css
```

## Design translation source

See [`docs/TREK_PLP_TRANSLATION_BRIEF.md`](docs/TREK_PLP_TRANSLATION_BRIEF.md).

Because I did not have access to Trek's internal Figma files, I treated the public Electric Bikes PLP, desktop/mobile screenshots, rendered DOM structure, and observed design tokens as the design reference. The goal was to simulate translating a UX/UI reference into reusable Vue components.

## Figma-to-Vue workflow proof

See [`docs/FIGMA_TO_VUE_WORKFLOW.md`](docs/FIGMA_TO_VUE_WORKFLOW.md).

A companion Figma file was created to demonstrate a smaller handoff loop: public PLP reference, self-authored ProductCard/ProductGrid component spec, design-token notes, accessibility handoff notes, and mapping to Vue components.

## Accessibility focus

See [`docs/ACCESSIBILITY_NOTES.md`](docs/ACCESSIBILITY_NOTES.md).

Current focus areas:

- Semantic page regions and heading structure
- Keyboard-reachable controls
- Native `button` and `select` elements where possible
- `aria-expanded` on collapsible filter groups
- `aria-pressed` on compare toggles
- Named navigation and comparison regions
- Visible focus styles
- Responsive layout without horizontal overflow

## Performance focus

See [`docs/PERFORMANCE_NOTES.md`](docs/PERFORMANCE_NOTES.md).

Current focus areas:

- Small scoped component surface
- Vite production build
- Lazy-loaded product imagery
- Native browser controls
- Minimal runtime state
- Avoidance of unnecessary client-side routing or API complexity for this proof

## AI workflow disclosure

See [`docs/AI_WORKFLOW.md`](docs/AI_WORKFLOW.md).

This project is intentionally AI-assisted. AI helped scaffold, refactor, debug tests, review structure, and draft documentation. Human review controlled the scope, final UX decisions, validation, and submission framing.

## Image policy

See [`docs/IMAGE_CREDITS.md`](docs/IMAGE_CREDITS.md).

The demo uses remote placeholder images rather than Trek-owned assets. In a production Trek implementation, these would be replaced with approved CMS/product imagery.

## Review checklist

See [`docs/CODE_REVIEW_CHECKLIST.md`](docs/CODE_REVIEW_CHECKLIST.md).

The checklist explains how I would review this work with UX, QA, and software delivery partners.

## Submission note

See [`docs/SUBMISSION_NOTE.md`](docs/SUBMISSION_NOTE.md) for a short message draft that can be used when sharing the repo.

## What I would improve next

- Add a true mobile filter drawer with focus management
- Add Playwright end-to-end tests for keyboard and responsive flows
- Add automated axe checks
- Add Storybook or Histoire stories for reusable components
- Refine product-card hover/image-swap states against approved imagery
- Integrate with CMS/API-shaped data
- Deploy a live preview through Vercel, Netlify, or GitHub Pages
