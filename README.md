# Trek Frontend Proof of Ability

A focused Vue 3 + TypeScript frontend engineering case study based on Trek's public Electric Bikes product listing page.

**Live demo:** https://trek-proof-of-ability.vercel.app/  
**GitHub repo:** https://github.com/adamfsalsa/trek-proof-of-ability  
**Implementation PR:** https://github.com/adamfsalsa/trek-proof-of-ability/pull/3

This is **not** a production clone of TrekBikes.com. It is a proof-of-ability project that uses mock product data, remote placeholder bike imagery, locally defined design tokens, and a componentized implementation to demonstrate the kind of work described in Trek's Frontend Engineer listing: translating UX/UI references into responsive, accessible, reusable frontend components.

## Case study summary

I chose a product listing page because it exercises the practical frontend responsibilities in the role: component architecture, responsive layout, accessibility, product-card composition, stateful UI, design-token thinking, QA validation, and documentation.

The implementation turns the public Electric Bikes PLP reference into a Vue 3 application with reusable sections for the header, hero, breadcrumbs, intro copy, filters, toolbar, product grid, product cards, color swatches, comparison controls, promo tile, and comparison tray.

The goal was not to recreate Trek's internal production stack. The goal was to show that I can inspect a real UX reference, break it into maintainable frontend components, make pragmatic implementation tradeoffs, validate behavior locally and in CI, and document the work clearly enough for UX, QA, and engineering partners to review.

## Role alignment

| Trek Frontend Engineer signal | How this project demonstrates it |
| --- | --- |
| Vue + TypeScript | Vue 3 single-file components, typed props, typed data models, Composition API patterns, and Vite build tooling |
| Responsive interfaces | Desktop, tablet, and mobile PLP layout with safe narrow-screen reflow and no horizontal clipping |
| Accessible web UI | Semantic landmarks, native controls, keyboard-reachable filters and compare actions, visible focus styles, ARIA state, and descriptive image alt text |
| UX/UI to component translation | Public page reference translated into component boundaries that map to PLP sections and reusable UI primitives |
| Design system contribution | Shared CSS tokens for color, spacing, typography, radius, focus treatment, and button treatment |
| Testing and troubleshooting | Vitest + Testing Library smoke tests, local build validation, GitHub Actions test/build workflow, and production deployment |
| Technical documentation | Design translation, accessibility, performance, image policy, review checklist, AI workflow, and submission notes |
| AI-assisted workflow | AI was used for scaffolding, refactoring, debugging, review, and documentation, with human review controlling scope and final decisions |

## What this demonstrates

- Vue 3 single-file components with typed props and data models
- Vite build tooling
- Stateful client-side UI for product comparison
- Responsive desktop, tablet, and mobile product listing layout
- WCAG 2.1 AA-minded accessibility implementation for keyboard use, semantic HTML, visible focus, understandable control state, readable contrast, responsive reflow, and reduced-motion support
- Design-token CSS layer for Trek-inspired spacing, typography, color, and button treatment
- Product-card, toolbar, filter, promo, and compare components that could map into a design system
- Vitest + Testing Library smoke tests
- GitHub Actions validation for tests and production build
- Documentation that explains design translation, AI workflow, accessibility, performance, and image choices

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

Because I did not have access to Trek's internal Figma files, I treated the public Electric Bikes PLP, desktop/mobile screenshots, rendered DOM structure, and observed design tokens as the design reference. The goal was to simulate translating a UX/UI reference into reusable Vue components in the same way a frontend engineer would translate a provided design artifact into implementation.

The design-translation proof comes from:

- Desktop and mobile page references
- Rendered public DOM structure
- Observed spacing, color, typography, and component patterns
- `src/styles/tokens.css` for tokenized CSS decisions
- Component boundaries that map to PLP sections and reusable UI primitives
- Documentation of tradeoffs and production caveats

## Accessibility focus

See [`docs/ACCESSIBILITY_NOTES.md`](docs/ACCESSIBILITY_NOTES.md).

Current focus areas:

- Semantic page regions and heading structure
- Keyboard-reachable controls
- Native `button`, `a`, `input`, and `select` elements where possible
- `aria-expanded` on mobile filters and collapsible filter groups
- `aria-pressed` on compare toggles
- Named navigation and comparison regions
- Visible focus styles
- Descriptive image alt text
- Contrast-conscious color tokens and image overlays
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

- Add Playwright end-to-end tests for keyboard and responsive flows
- Add automated axe checks
- Add Storybook or Histoire stories for reusable components
- Refine product-card hover/image-swap states against approved imagery
- Integrate with CMS/API-shaped data
- Replace mock product data and placeholder imagery with approved production sources
