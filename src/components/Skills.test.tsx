import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Skills from '@/components/Skills';

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /Skills & Expertise/i })).toBeInTheDocument();
  });

  it('renders skill category headings', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: 'Technical Skills', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Development Tools', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Soft Skills', level: 3 })).toBeInTheDocument();
  });

  it('renders frontend skills with years', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getAllByText('7 years').length).toBeGreaterThan(0);
  });

  it('expands skill notes on toggle click', async () => {
    const user = userEvent.setup();
    render(<Skills />);

    const reactToggle = screen.getByRole('button', { name: /React(?! Router| Query| Table| Hook Form)/i });
    await user.click(reactToggle);

    expect(screen.getByText(/component-based architecture/i)).toBeInTheDocument();
  });
});
