import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomeSections from '@/components/HomeSections';

describe('HomeSections', () => {
  it('renders lazy-loaded section content', async () => {
    render(<HomeSections />);

    await waitFor(
      () => {
        expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument();
      },
      { timeout: 5000 },
    );

    expect(screen.getByRole('heading', { name: /Skills & Expertise/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'What People Say' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Ready to Start Your/i })).toBeInTheDocument();
  });
});
