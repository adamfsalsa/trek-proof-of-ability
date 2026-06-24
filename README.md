# Trek Proof of Ability

A Vue + TypeScript proof-of-ability project that translates a Trek-style electric-bike product listing page into a componentized frontend implementation.

This is **not** a production clone of TrekBikes.com. It uses original mock data, CSS-rendered placeholder art, and locally defined design tokens inspired by the observed page structure. The goal is to demonstrate the kind of work described in the Frontend Engineer role: translating design references into responsive, accessible, reusable Vue components.

## What this demonstrates

- Vue 3 single-file components with TypeScript
- Figma-style design translation from screenshots, DOM structure, and tokens
- Product listing page architecture
- Responsive desktop/mobile layout
- Accessible buttons, selects, collapsible filters, and live compare state
- Design-token CSS layer
- Componentized PLP structure
- Vitest + Testing Library smoke tests

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

The implementation is based on:

- The public Trek electric bikes PLP
- Desktop screenshots
- Mobile screenshots
- Rendered outerHTML
- Extracted CSS/design tokens

## Accessibility focus

See [`docs/ACCESSIBILITY_NOTES.md`](docs/ACCESSIBILITY_NOTES.md).

Current focus areas:

- Semantic page regions
- Native controls for filters, sort, items-per-page, and compare actions
- `aria-expanded` on collapsible filter groups
- `aria-pressed` on compare toggles
- `aria-live` comparison tray
- Keyboard-visible focus states
- Responsive layout without horizontal overflow

## AI workflow disclosure

See [`docs/AI_WORKFLOW.md`](docs/AI_WORKFLOW.md).

This project is intentionally AI-assisted, matching the job description's expectation that candidates are comfortable using AI coding tools. Human review is still required for final visual QA, browser testing, and accessibility validation.

## What I would improve next

- Replace CSS placeholder art with approved original or licensed assets
- Add Playwright end-to-end tests
- Add axe accessibility checks
- Add Storybook/Histoire component documentation
- Add a true mobile filter drawer
- Add product-card hover states and image swap states
- Deploy a live demo through Vercel, Netlify, or GitHub Pages
