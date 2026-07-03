import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { mockUseReducedMotion } from '../../vitest.setup';
import Feedbacks from '@/components/Feedbacks';

describe('Feedbacks', () => {
  beforeEach(() => {
    mockUseReducedMotion.mockReturnValue(false);
  });
  it('renders section heading', () => {
    render(<Feedbacks />);
    expect(screen.getByRole('heading', { name: 'What People Say' })).toBeInTheDocument();
  });

  it('shows first testimonial by default', () => {
    render(<Feedbacks />);
    expect(screen.getByText(/Gergana Borisova/i)).toBeInTheDocument();
    expect(screen.getByText(/creative and innovative thinkers/i)).toBeInTheDocument();
  });

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup();
    render(<Feedbacks />);

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }));

    await waitFor(() => {
      expect(screen.getByText(/Dimitar Petrov/i)).toBeInTheDocument();
    });
  });

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup();
    render(<Feedbacks />);

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }));

    await waitFor(() => {
      expect(screen.getByText(/Petar Dimitrov/i)).toBeInTheDocument();
    });
  });

  it('selects testimonial via counter button', async () => {
    const user = userEvent.setup();
    render(<Feedbacks />);

    await user.click(screen.getByRole('button', { name: 'Testimonial 3 of 6' }));

    await waitFor(() => {
      expect(screen.getByText(/Elena Stoyanova/i)).toBeInTheDocument();
    });
  });

  it('does not change slide when selecting the active counter button', async () => {
    const user = userEvent.setup();
    render(<Feedbacks />);

    await user.click(screen.getByRole('button', { name: 'Testimonial 1 of 6' }));

    expect(screen.getByText(/Gergana Borisova/i)).toBeInTheDocument();
  });

  it('renders with reduced motion preference enabled', () => {
    mockUseReducedMotion.mockReturnValue(true);
    render(<Feedbacks />);
    expect(screen.getByText(/Gergana Borisova/i)).toBeInTheDocument();
  });
});
