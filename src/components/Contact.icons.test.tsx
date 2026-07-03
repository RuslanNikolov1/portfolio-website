import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Contact from '@/components/Contact';
import { socialLinks } from '@/data/social-links';

describe('Contact icon rendering', () => {
  it('renders viber icon for viber social link', () => {
    render(<Contact />);
    expect(screen.getByLabelText('Viber (opens in new tab)')).toBeInTheDocument();
  });

  it('covers all configured social link icons', () => {
    render(<Contact />);

    socialLinks.forEach((link) => {
      expect(screen.getByLabelText(`${link.name} (opens in new tab)`)).toBeInTheDocument();
    });
  });
});
