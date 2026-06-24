# Trek Proof of Ability

A focused Vue + TypeScript proof-of-ability project for a frontend engineering application.

This repo rebuilds a **Trek-style ecommerce product discovery section** without copying Trek assets, proprietary copy, or production code. The goal is to demonstrate frontend engineering judgment: component architecture, responsive UI, accessibility, testability, and design-system thinking.

## What this demonstrates

- Vue 3 single-file components with TypeScript
- Responsive product grid and comparison workflow
- Semantic HTML and keyboard-friendly interactions
- Accessible filtering controls and focus states
- Reusable UI primitives and tokenized CSS
- Mock data modeled separately from presentation
- Component tests with Vitest and Testing Library

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

## Engineering notes

The implementation intentionally keeps scope narrow. Instead of cloning an entire ecommerce site, this project focuses on a high-signal section: product discovery, filtering, product cards, comparison selection, and a conversion-oriented hero.

## Accessibility focus

See `docs/ACCESSIBILITY_NOTES.md`.

## AI workflow disclosure

See `docs/AI_WORKFLOW.md`.

This project is intentionally AI-assisted, matching the job description's expectation that candidates are comfortable using AI coding tools. Human judgment remains responsible for final review, browser testing, and accessibility verification.

## What I would improve next

- Add Playwright end-to-end tests
- Add Storybook or Histoire for design-system documentation
- Replace mock product data with CMS/API-driven data
- Add visual regression testing
- Expand comparison into a full specification table
- Run automated axe checks in CI
