# Accessibility Notes

This project treats accessibility as part of the component contract, not a final QA layer.

## Implemented

- Semantic sections and headings
- Button elements for interactive controls
- Visible focus states
- Accessible comparison status messaging
- Responsive layout without horizontal overflow
- Reduced motion support in global styles

## Manual checks to perform

- Tab through the full page without using a mouse.
- Confirm focus order follows visual order.
- Confirm comparison buttons are reachable and understandable.
- Check color contrast for text, muted text, borders, and CTAs.
- Test at 320px, 390px, 768px, 1024px, and desktop widths.
- Test with browser zoom at 200%.

## Future checks

- Add axe-core automation.
- Add Playwright keyboard navigation tests.
- Add screen reader smoke testing with NVDA, VoiceOver, or equivalent.
