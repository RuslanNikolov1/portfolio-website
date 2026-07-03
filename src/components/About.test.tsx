import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { mockUseReducedMotion } from '../../vitest.setup';
import About from '@/components/About';

describe('About', () => {
  beforeEach(() => {
    mockUseReducedMotion.mockReturnValue(false);
  });
  it('renders section heading and profile image', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
    expect(screen.getByAltText('Ruslan Nikolov working on laptop')).toBeInTheDocument();
  });

  it('renders career timeline entries', () => {
    render(<About />);
    expect(screen.getByText(/Freelance Frontend Developer & UI\/UX Designer/i)).toBeInTheDocument();
    expect(screen.getAllByText(/EPAM Systems/i).length).toBeGreaterThan(0);
  });

  it('renders hobbies tabs and switches content', async () => {
    const user = userEvent.setup();
    render(<About />);

    expect(screen.getByRole('tab', { name: 'Music' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Sports' })).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Sports' }));

    expect(screen.getByText(/basketball and crossfit/i)).toBeInTheDocument();
  });

  it('shows music hobby content by default', () => {
    render(<About />);
    expect(screen.getByRole('link', { name: 'SoundCloud' })).toBeInTheDocument();
  });

  it('renders with reduced motion preference enabled', () => {
    mockUseReducedMotion.mockReturnValue(true);
    render(<About />);
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
  });
});
