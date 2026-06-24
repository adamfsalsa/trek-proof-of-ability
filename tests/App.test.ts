import { fireEvent, render, screen, within } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import App from '../src/App.vue';

describe('App', () => {
  it('renders the Trek-style PLP structure', () => {
    render(App);

    expect(screen.getByRole('banner')).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Electric bikes' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: 'Breadcrumbs' })).toBeTruthy();
    expect(screen.getByText('62 Results')).toBeTruthy();
    expect(screen.getAllByRole('article').length).toBeGreaterThan(3);
  });

  it('updates compare state when a product compare button is clicked', async () => {
    render(App);

    const compareButtons = screen.getAllByRole('button', { name: /compare/i });
    await fireEvent.click(compareButtons[0]);

    const compareTray = screen.getByRole('complementary', {
      name: 'Selected bikes for comparison',
    });

    expect(within(compareTray).getByText('1 selected')).toBeTruthy();
    expect(within(compareTray).getByText(/FX\+ 1S/)).toBeTruthy();
  });
});
