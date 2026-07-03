import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { mockUseReducedMotion } from '../../vitest.setup';
import Projects from '@/components/Projects';
import { projects } from '@/data/projects';
import { MQ_BELOW_SM } from '@/styles/breakpoints';

const showcaseProjects = projects.filter((project) => project.id !== '2');

describe('Projects', () => {
  beforeEach(() => {
    mockUseReducedMotion.mockReturnValue(false);
    vi.spyOn(window, 'matchMedia').mockImplementation((query: string) => ({
      matches: query === MQ_BELOW_SM,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  it('renders section heading', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument();
  });

  it('shows first project by default', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: showcaseProjects[0].title, level: 3 })).toBeInTheDocument();
  });

  it('renders project tabs for each showcase item', () => {
    render(<Projects />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(showcaseProjects.length);
  });

  it('switches project when tab is clicked', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const secondProject = showcaseProjects[1];
    await user.click(screen.getByRole('tab', { name: `Select ${secondProject.title}` }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: secondProject.title, level: 3 })).toBeInTheDocument();
    });
  });

  it('navigates to next project', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole('button', { name: 'Next project' }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: showcaseProjects[1].title, level: 3 })).toBeInTheDocument();
    });
  });

  it('navigates to previous project from first item', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole('button', { name: 'Previous project' }));

    await waitFor(() => {
      const lastProject = showcaseProjects[showcaseProjects.length - 1];
      expect(screen.getByRole('heading', { name: lastProject.title, level: 3 })).toBeInTheDocument();
    });
  });

  it('renders visit and code links for selected project', () => {
    render(<Projects />);
    expect(screen.getByRole('link', { name: /Visit Project/i })).toHaveAttribute(
      'href',
      showcaseProjects[0].liveUrl,
    );
    expect(screen.getByRole('link', { name: /View Code/i })).toHaveAttribute(
      'href',
      showcaseProjects[0].codeUrl,
    );
  });

  it('supports keyboard navigation between tabs', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const firstTab = screen.getAllByRole('tab')[0];
    firstTab.focus();
    await user.keyboard('{ArrowRight}');

    await waitFor(() => {
      expect(screen.getByRole('tab', { name: `Select ${showcaseProjects[1].title}` })).toHaveAttribute(
        'aria-selected',
        'true',
      );
    });
  });

  it('jumps to first and last tabs with Home and End keys', async () => {
    render(<Projects />);

    const firstTab = screen.getAllByRole('tab')[0];
    fireEvent.keyDown(firstTab, { key: 'End' });

    await waitFor(() => {
      const lastProject = showcaseProjects[showcaseProjects.length - 1];
      expect(screen.getByRole('tab', { name: `Select ${lastProject.title}` })).toHaveAttribute(
        'aria-selected',
        'true',
      );
    });

    const lastTab = screen.getAllByRole('tab')[showcaseProjects.length - 1];
    fireEvent.keyDown(lastTab, { key: 'Home' });

    await waitFor(() => {
      expect(screen.getByRole('tab', { name: `Select ${showcaseProjects[0].title}` })).toHaveAttribute(
        'aria-selected',
        'true',
      );
    });
  });

  it('scrolls preview into view on mobile when selecting a tab', async () => {
    const user = userEvent.setup();
    const previewPanel = document.createElement('div');
    previewPanel.id = 'project-preview-panel';
    previewPanel.scrollIntoView = vi.fn();
    document.body.appendChild(previewPanel);

    render(<Projects />);

    await user.click(screen.getByRole('tab', { name: `Select ${showcaseProjects[1].title}` }));

    expect(previewPanel.scrollIntoView).toHaveBeenCalled();
  });

  it('uses reduced motion settings when preferred', () => {
    mockUseReducedMotion.mockReturnValue(true);
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument();
  });
});
