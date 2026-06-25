# Code Review Checklist

This checklist is included to show how I would review this work with UX, QA, and software delivery partners.

## Product and UX

- Does the page structure match the intended product-listing flow?
- Does the hierarchy make sense on desktop and mobile?
- Are filter, sort, and compare controls discoverable?
- Are product cards visually scannable?
- Are known placeholder assets clearly documented?

## Accessibility

- Can the page be navigated by keyboard?
- Do interactive controls use native elements where possible?
- Are ARIA attributes used to expose state rather than decorate markup?
- Do images have useful alt text?
- Does focus order follow visual order?
- Does the responsive layout avoid horizontal overflow?
- Are color contrast decisions acceptable against final design tokens?

## Engineering

- Are components small and reusable?
- Are props and data models typed?
- Is state kept local where possible?
- Are tests focused on user-visible behavior?
- Does the production build pass?
- Are docs accurate and free of overclaims?
- Are external assets and licenses documented?

## Follow-up work

- Add mobile filter drawer behavior.
- Add Storybook/Histoire component examples if requested.
- Add Playwright and axe coverage.
- Replace placeholder images with approved production assets.
- Integrate CMS/API data and loading/error states.
