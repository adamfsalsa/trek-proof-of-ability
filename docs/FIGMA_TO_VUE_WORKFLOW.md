# Figma to Vue Workflow Proof of Concept

Figma file: https://www.figma.com/design/51ioXm585CXewIWrDknr2A

## Purpose

This companion Figma file is a small proof-of-concept for the design-to-code workflow described in the Frontend Engineer listing.

The goal is not to recreate the full Trek site in Figma. The goal is to show a focused handoff loop:

```txt
Public PLP reference -> self-authored Figma component spec -> Vue + TypeScript implementation -> validation
```

## Scope

The Figma proof is centered on the ProductCard/ProductGrid section because it maps cleanly to the current Vue implementation:

- `src/components/ProductCard.vue`
- `src/components/ProductGrid.vue`
- `src/components/CompareButton.vue`
- `src/components/ColorSwatches.vue`
- `src/components/FilterSidebar.vue`
- `src/components/ProductToolbar.vue`
- `src/styles/tokens.css`

## What the Figma file is intended to show

- Workflow overview
- Product card default, hover, selected/compared, and mobile states
- Product grid desktop reference
- Filter/sidebar and toolbar placement
- Design tokens to map into CSS
- Accessibility handoff notes
- Vue component mapping notes

## How to use this in the submission

Describe it as a companion workflow artifact:

> I also created a small Figma-to-Vue proof-of-concept showing how a product-card/product-grid design spec maps into the Vue components in this repo. It documents states, tokens, accessibility notes, and implementation mapping rather than presenting the project as a production clone.

## Notes

- This is self-authored design work based on public page patterns.
- It does not use internal Trek Figma files.
- It does not claim to represent official Trek design system assets.
- It is meant to demonstrate the handoff process: design reference, component states, CSS tokens, accessibility decisions, and Vue mapping.

## Validation checklist

When reviewing the Figma file against the code:

- Product card states are represented visually.
- Compare state maps to `aria-pressed` in `CompareButton.vue`.
- Tokens map back to `src/styles/tokens.css`.
- Hover/selected states map to current component CSS.
- Accessibility notes match the repo's `ACCESSIBILITY_NOTES.md`.
- The design remains small enough to explain in an interview.
