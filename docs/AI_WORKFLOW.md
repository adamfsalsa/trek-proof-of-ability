# AI Workflow

This project is designed to show practical, responsible AI-assisted frontend development.

The job listing specifically calls for comfort with AI coding assistants such as Claude, Cursor, GitHub Copilot, ChatGPT, Codex, or similar tools. This repo treats AI as part of the development workflow while still requiring human review, testing, and product judgment.

## How AI was used

- Interpreting the job listing and mapping it to a proof-of-ability scope
- Scaffolding the initial Vue + TypeScript project structure
- Refactoring a single-file prototype into reusable components
- Drafting TypeScript data models for products, filters, colors, and promo tiles
- Iterating on responsive layout and component styling
- Debugging fragile tests
- Drafting documentation for design translation, accessibility, performance, and submission framing
- Reviewing whether the repo demonstrates the role's core requirements

## Human review responsibilities

- Defining the project scope
- Confirming that the proof should be a design-translation case study, not a clone
- Reviewing screenshots against the target page
- Deciding not to use production-owned assets in the public repo
- Running local tests, builds, and browser QA
- Reviewing final docs and submission language
- Validating that AI-generated output is simple enough to explain in an interview

## Guardrails

- Do not invent production APIs, private Figma details, CMS models, or internal implementation decisions.
- Do not copy proprietary source code or bundle brand-owned images in the repo.
- Keep product data clearly mock/demo-oriented.
- Validate generated code with tests and production build.
- Keep components understandable and reviewable.
- Document tradeoffs instead of hiding them.
- Treat accessibility and performance claims as areas to validate, not assumptions.

## Example prompts used or appropriate for this project

```txt
Review this Vue + TypeScript branch as a frontend engineering proof-of-ability. Focus on accessibility, responsive layout, component architecture, TypeScript correctness, and whether it demonstrates design-system thinking.
```

```txt
Refactor this product listing UI into reusable Vue components without changing the visible behavior. Preserve accessibility attributes and keep the code explainable.
```

```txt
Debug this failing Testing Library assertion. Prefer testing user-visible behavior over implementation details.
```

```txt
Write documentation that explains how this project maps to a Frontend Engineer role requiring Vue, TypeScript, WCAG awareness, testing, documentation, and AI-assisted development.
```

## Validation checklist

Before submission:

- Run `npm run test:run`.
- Run `npm run build`.
- Review the app at desktop, tablet, and mobile widths.
- Confirm the README does not overclaim production readiness.
- Confirm all image and design-source notes are honest.
- Confirm the project can be explained clearly in an interview.
