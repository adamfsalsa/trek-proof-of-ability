# Trek PLP Translation Brief

Source page: Trek Electric Bikes PLP

Target: Vue + TypeScript proof-of-ability implementation that translates the observed PLP structure into reusable components without copying Trek proprietary source code.

## Source order reviewed

1. Public Trek electric bikes page URL
2. Desktop screenshots
3. Mobile screenshots
4. OuterHTML excerpt
5. CSS/design token excerpt

## High-level page structure

```txt
main#main-content
  h1.sr-only
  global header
  hero marquee
  breadcrumbs
  intro copy
  product listing page
    filter sidebar or mobile filter button
    result toolbar
    product grid
    promo tile
    product cards
    compare controls
```

## Desktop observations

- Header is dark charcoal/black, approximately 60px high.
- Trek logo sits left on desktop with nav centered across the header.
- Search sits right in a rectangular outlined field.
- Hero is a full-width photographic marquee with dark overlay.
- Hero content is centered: white heading, two white CTA buttons.
- Breadcrumb section is white with gray text and a home icon.
- Intro paragraph is centered, max-width approximately 800px, with generous vertical spacing.
- PLP uses a left filter sidebar and a main product content area.
- Desktop product layout resembles a 6-column system: sidebar is roughly one column, products occupy the remaining area.
- Product cards are minimal and image-forward.
- Product names and prices are centered.
- Swatches are centered beneath images.
- Compare action appears near the top/right of each product card.
- Promo tile appears inside the grid, not outside it.

## Mobile observations

- Header becomes mobile-first: hamburger left, centered Trek 50 logo, search/cart icons right.
- Header height is taller than desktop, visually around 90px.
- Hero remains large and image-first.
- Hero heading and CTAs remain centered over the image.
- Breadcrumb simplifies to home and Bikes.
- Intro copy becomes large and centered.
- Filter sidebar collapses into a full-width bordered Filters button.
- Product controls show 62 Results at left with Items and Sort by at right.
- Product grid becomes two columns on mobile/tablet widths shown in screenshots.
- Product card spacing is very open; large white product wells dominate the layout.
- Chat widget overlaps lower-left of the viewport, but it should not be implemented in the proof.

## Token mapping

Use local design tokens inspired by the observed values:

```css
--brand-red: #ce1a2b;
--brand-gray: #1a1a1a;
--brand-blue: #007ab8;
--gray-02: #fafafa;
--gray-05: #f4f4f4;
--gray-10: #e8e8e8;
--gray-20: #d1d1d1;
--gray-70: #5f5f5f;
--gray-90: #313131;
--gray-100: #1a1a1a;
--font-body: Roboto, Arial, Helvetica, sans-serif;
--font-heading: Avalon-Bold, Arial, Helvetica, sans-serif;
--header-height: 60px;
--card-inner-padding: 1.5rem;
--button-radius: 8px;
--focus-outline: #007ab8;
```

Do not include or distribute Trek font files. Use safe font stacks only.

## Component target

```txt
src/components/TrekHeader.vue
src/components/HeroMarquee.vue
src/components/Breadcrumbs.vue
src/components/IntroCopy.vue
src/components/FilterSidebar.vue
src/components/FilterGroup.vue
src/components/ProductToolbar.vue
src/components/ProductGrid.vue
src/components/ProductCard.vue
src/components/ColorSwatches.vue
src/components/CompareButton.vue
src/components/PromoTile.vue
src/components/CompareTray.vue
src/data/bikes.ts
src/types/bike.ts
src/styles/tokens.css
src/styles/base.css
```

## Acceptance criteria

- App still runs with `npm run dev`.
- `npm run test:run` passes.
- `npm run build` passes.
- Desktop header, hero, breadcrumbs, intro, filter sidebar, toolbar, product grid, and promo tile match the observed structure.
- Mobile header uses hamburger/logo/search/cart structure.
- Mobile PLP uses full-width Filters button.
- Product cards support compare toggles with `aria-pressed`.
- Filter groups use real buttons with `aria-expanded`.
- Toolbar controls use native selects with accessible labels.
- A live comparison tray announces selected products.
- README explains this as a design translation proof, not a production clone.

## Asset policy

Prefer original CSS-rendered placeholders or locally generated mock artwork for the proof. Do not package Trek-owned images or font files in the repo. If public imagery is temporarily referenced for comparison, document that it is a reference-only placeholder and should be replaced before deployment.
