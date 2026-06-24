import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import App from '../src/App.vue';

describe('App', () => {
  it('renders the product discovery experience', () => {
    render(App);

    expect(screen.getByRole('heading', { name: /responsive product discovery/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Mountain' })).toBeTruthy();
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });
});
