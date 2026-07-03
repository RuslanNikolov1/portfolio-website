import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

describe('Contact', () => {
  it('renders section heading and subtitle', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /Ready to Start Your/i })).toBeInTheDocument();
    expect(screen.getByText(/Whether you're a startup founder/i)).toBeInTheDocument();
  });

  it('renders social links from data', () => {
    render(<Contact />);
    expect(screen.getByLabelText('GitHub (opens in new tab)')).toBeInTheDocument();
    expect(screen.getByLabelText('Email (opens in new tab)')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn (opens in new tab)')).toBeInTheDocument();
  });
});

describe('Footer', () => {
  it('renders brand and navigation links', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', { name: 'Ruslan Nikolov', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders copyright with current year', () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Ruslan Nikolov`))).toBeInTheDocument();
  });

  it('renders connect social links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Phone/i })).toBeInTheDocument();
  });
});
