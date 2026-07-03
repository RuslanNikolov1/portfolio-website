import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import FloatingCTA from '@/components/FloatingCTA';
import DownloadCVButton from '@/components/DownloadCVButton';

describe('FloatingCTA', () => {
  beforeEach(() => {
    document.body.innerHTML = '<section id="contact"></section>';
  });

  it('renders work with me button', () => {
    render(<FloatingCTA />);
    expect(screen.getByRole('button', { name: 'Work with me' })).toBeInTheDocument();
  });

  it('scrolls to contact section on click', async () => {
    const user = userEvent.setup();
    const contactSection = document.getElementById('contact')!;
    const scrollIntoView = vi.spyOn(contactSection, 'scrollIntoView');

    render(<FloatingCTA />);
    await user.click(screen.getByRole('button', { name: 'Work with me' }));

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});

describe('DownloadCVButton', () => {
  it('renders download link with correct href', () => {
    render(<DownloadCVButton />);
    const link = screen.getByRole('link', { name: 'Download CV (PDF)' });
    expect(link).toHaveAttribute('href', '/Ruslan Nikolov - CV.pdf');
    expect(link).toHaveAttribute('download', 'Ruslan Nikolov - CV.pdf');
  });
});
