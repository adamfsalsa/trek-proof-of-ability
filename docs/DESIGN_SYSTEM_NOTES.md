# Design System Notes

The UI uses CSS custom properties as lightweight design tokens.

## Token categories

- Color
- Spacing
- Radius
- Shadow
- Typography
- Focus rings
- Motion

## Component patterns

### AccessibleButton

A wrapper around native button behavior, preserving semantics while centralizing variants and sizing.

### ProductCard

A reusable ecommerce card with category, name, price, specs, CTA, and compare toggle.

### FilterBar

A button-based filter group that exposes selected state and keeps filter behavior understandable without custom ARIA-heavy controls.

### CompareDrawer

A lightweight selected-items surface that demonstrates state propagation and an expandable path toward a full comparison feature.
