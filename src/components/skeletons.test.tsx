import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HeroSkeleton from '@/components/HeroSkeleton';
import ProjectsSkeleton from '@/components/ProjectsSkeleton';
import AboutSkeleton from '@/components/AboutSkeleton';
import SkillsSkeleton from '@/components/SkillsSkeleton';
import ContactSkeleton from '@/components/ContactSkeleton';
import FeedbacksSkeleton from '@/components/FeedbacksSkeleton';

describe('skeleton components', () => {
  it('renders HeroSkeleton with loading label', () => {
    render(<HeroSkeleton />);
    expect(screen.getByLabelText('Loading hero section')).toBeInTheDocument();
  });

  it('renders ProjectsSkeleton with section id', () => {
    render(<ProjectsSkeleton />);
    expect(screen.getByLabelText('Loading projects section')).toBeInTheDocument();
    expect(document.getElementById('projects')).toBeInTheDocument();
  });

  it('renders AboutSkeleton with section id', () => {
    render(<AboutSkeleton />);
    expect(screen.getByLabelText('Loading about section')).toBeInTheDocument();
    expect(document.getElementById('about')).toBeInTheDocument();
  });

  it('renders SkillsSkeleton with section id', () => {
    render(<SkillsSkeleton />);
    expect(screen.getByLabelText('Loading skills section')).toBeInTheDocument();
    expect(document.getElementById('skills')).toBeInTheDocument();
  });

  it('renders ContactSkeleton with section id', () => {
    render(<ContactSkeleton />);
    expect(screen.getByLabelText('Loading contact section')).toBeInTheDocument();
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  it('renders FeedbacksSkeleton', () => {
    render(<FeedbacksSkeleton />);
    expect(screen.getByLabelText('Loading feedbacks section')).toBeInTheDocument();
  });
});
