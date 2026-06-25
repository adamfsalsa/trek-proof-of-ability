# Performance Notes

This proof is intentionally narrow: it demonstrates a responsive product listing interface without adding unnecessary application complexity.

## Current performance choices

- Vite is used for fast development and optimized production builds.
- Vue components are scoped and small.
- Product data is local mock data, avoiding artificial network complexity.
- Product images are lazy-loaded with `loading="lazy"`.
- Product images use `decoding="async"` where appropriate.
- The product comparison state is a small local reactive array.
- The project avoids unnecessary routing, global state libraries, animation libraries, and CSS frameworks for this proof.
- Native browser form controls are used for sort and item-count controls.
- CSS is split into base styles, design tokens, and component-scoped styles.

## Core Web Vitals considerations

For a production Trek implementation, I would focus on:

- LCP: optimize the hero image, use responsive image sources, and preload the selected hero asset.
- CLS: reserve image dimensions and avoid layout shifts in product cards, filter panels, and promo tiles.
- INP: keep filter, compare, and sort interactions lightweight; avoid expensive re-renders of large product lists.
- Bundle size: keep shared UI components tree-shakable and avoid adding libraries unless they solve a clear product need.
- Image delivery: use the production image CDN/CMS pipeline with responsive `srcset` and modern formats.
- Caching: rely on CDN caching for static assets and CMS/product imagery.

## Known limitations in this proof

- Remote placeholder images are useful for safe portfolio photography, but they are not optimized like a production image pipeline.
- The hero image does not yet use responsive `srcset`.
- There is no Lighthouse report committed to the repo.
- There is no production analytics or Core Web Vitals instrumentation.
- The app uses mock data rather than a paginated API or CMS integration.

## Next improvements

- Add responsive image sizes and `srcset`.
- Add a Lighthouse note after deployment.
- Add bundle analysis if the project grows.
- Add API-shaped product data and loading/error states if needed for a deeper frontend integration proof.
