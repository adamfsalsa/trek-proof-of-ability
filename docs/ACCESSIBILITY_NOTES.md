# Accessibility Notes

This project treats accessibility as part of the component contract, not a final QA layer.

The implementation is not a full formal audit. It is a focused proof that shows how I think about accessible frontend components while translating a product listing design into Vue.

## Target

The working target is WCAG 2.1 AA for the demo surface: keyboard operation, semantic HTML, visible focus, understandable control names and states, readable contrast, responsive reflow, and reduced-motion support.

## Implemented

- Semantic `header`, `main`, `section`, `nav`, `article`, and `aside` structure
- Hidden top-level page heading for the PLP document title
- Named breadcrumb navigation
- Native `button` elements for menu, search, cart, mobile filters, filter groups, compare actions, and clearing compare state
- Native `select` controls for items-per-page and sort controls
- `aria-expanded` on mobile filters and collapsible filter groups
- `aria-pressed` on compare buttons so selection state is exposed
- Named comparison tray region that appears only after a bike is selected
- `aria-live` messaging for comparison state updates
- Product images with descriptive alt text
- Visible focus styles in the global CSS layer
- Responsive layout intended to avoid horizontal overflow
- Reduced motion support in global styles
- Contrast-conscious token choices for primary text, muted text, header controls, buttons, links, and badges

## Manual checks to perform

- Tab through the full page without using a mouse.
- Confirm focus order follows visual order.
- Confirm all focused controls have a visible focus outline.
- Confirm filter groups can be expanded and collapsed with the keyboard.
- Confirm the mobile filter panel opens and closes from the keyboard.
- Confirm comparison buttons announce state changes clearly.
- Confirm comparison tray appears only after a bike is selected.
- Confirm all controls have understandable names.
- Check color contrast for text, muted text, borders, image overlays, and CTAs.
- Test at 320px, 390px, 768px, 1024px, and desktop widths.
- Test with browser zoom at 200%.
- Test with one browser accessibility smoke pass.

## Known limitations

- This proof does not currently include automated axe checks.
- The demo does not include full production search, cart, or product filtering behavior.
- Color contrast should be validated against final approved design tokens before production use.

## Future checks

- Add axe-core automation.
- Add Playwright keyboard navigation tests.
- Add mobile filter drawer focus trapping and escape-key behavior if the filter UI becomes a true modal.
- Add manual accessibility testing notes to the pull request checklist.
