# Accessibility Notes

This project treats accessibility as part of the component contract, not a final QA layer.

The implementation is not a full WCAG audit. It is a focused proof that shows how I think about accessible frontend components while translating a product listing design into Vue.

## Implemented

- Semantic `header`, `main`, `section`, `nav`, `article`, and `aside` structure
- Screen-reader-only top-level page heading for the PLP document title
- Named breadcrumb navigation
- Native `button` elements for menu, search, cart, filter groups, compare actions, and clearing compare state
- Native `select` controls for items-per-page and sort controls
- `aria-expanded` on collapsible filter groups
- `aria-pressed` on compare buttons so selection state is programmatically exposed
- Named comparison tray region that appears only after a bike is selected
- `aria-live` messaging for comparison state updates
- Product images with descriptive alt text
- Visible focus styles in the global CSS layer
- Responsive layout intended to avoid horizontal overflow
- Reduced motion support in global styles

## Manual checks to perform

- Tab through the full page without using a mouse.
- Confirm focus order follows visual order.
- Confirm filter groups can be expanded and collapsed with the keyboard.
- Confirm comparison buttons announce state changes clearly.
- Confirm comparison tray appears only after a bike is selected.
- Confirm all controls have understandable names.
- Check color contrast for text, muted text, borders, and CTAs.
- Test at 320px, 390px, 768px, 1024px, and desktop widths.
- Test with browser zoom at 200%.
- Test with at least one screen reader smoke pass, such as VoiceOver, NVDA, or Narrator.

## Known limitations

- This proof does not currently include automated axe checks.
- The mobile filter UI is currently a simplified responsive sidebar/button pattern, not a fully managed modal drawer.
- The mock header controls do not open real menus.
- The demo does not include full production search, cart, or product filtering behavior.
- Color contrast should be validated against final approved design tokens before production use.

## Future checks

- Add axe-core automation.
- Add Playwright keyboard navigation tests.
- Add mobile filter drawer focus trapping and escape-key behavior.
- Add screen reader smoke testing notes to the pull request checklist.
