import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@/app/page';

describe('Home page', () => {
  it('renders navigation, hero, and lazy sections', async () => {
    ['hero', 'projects', 'skills', 'about', 'contact'].forEach((id) => {
      const section = document.createElement('section');
      section.id = id;
      document.body.appendChild(section);
    });

    render(<Home />);

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ruslan Nikolov' })).toBeInTheDocument();
    expect(document.getElementById('main-content')).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument();
      },
      { timeout: 5000 },
    );
  });
});
