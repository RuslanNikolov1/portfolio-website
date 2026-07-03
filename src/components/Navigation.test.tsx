import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import Navigation from '@/components/Navigation';
import { MQ_BELOW_MD } from '@/styles/breakpoints';

function setupDomSections() {
  ['hero', 'projects', 'skills', 'about', 'contact'].forEach((id) => {
    if (!document.getElementById(id)) {
      const section = document.createElement('section');
      section.id = id;
      document.body.appendChild(section);
    }
  });
}

describe('Navigation', () => {
  beforeEach(() => {
    setupDomSections();
    vi.spyOn(window, 'matchMedia').mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  it('renders main navigation with logo and links', () => {
    render(<Navigation />);
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    expect(screen.getByLabelText('Go to home section')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });

  it('toggles mobile menu', async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    const toggle = screen.getByRole('button', { name: 'Open navigation menu' });
    await user.click(toggle);

    expect(screen.getByRole('button', { name: 'Close navigation menu' })).toBeInTheDocument();
  });

  it('closes mobile menu on Escape key', async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Open navigation menu' })).toBeInTheDocument();
    });
  });

  it('scrolls to section on nav link click', async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    await user.click(screen.getByRole('link', { name: /Projects/i }));

    expect(window.scrollTo).toHaveBeenCalled();
  });

  it('navigates via keyboard shortcut', async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    await user.keyboard('p');

    expect(window.scrollTo).toHaveBeenCalled();
  });

  it('ignores keyboard shortcuts inside editable fields', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Navigation />
        <input aria-label="Search" defaultValue="" />
      </>,
    );

    const input = screen.getByRole('textbox', { name: 'Search' });
    await user.click(input);
    await user.keyboard('p');

    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it('hides menu links on mobile until opened', async () => {
    vi.spyOn(window, 'matchMedia').mockImplementation((query: string) => ({
      matches: query === MQ_BELOW_MD,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<Navigation />);

    expect(screen.getByRole('list', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
  });
});
