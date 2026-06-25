import { fireEvent, render, screen } from '@testing-library/vue';
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

    expect(screen.getByText('1 selected')).toBeTruthy();
    expect(compareButtons[0].getAttribute('aria-pressed')).toBe('true');
  });
});
