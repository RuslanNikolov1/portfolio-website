import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { mockUseReducedMotion } from '../../vitest.setup';
import Hero from '@/components/Hero';

describe('Hero', () => {
  beforeEach(() => {
    mockUseReducedMotion.mockReturnValue(false);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders name and tagline', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { name: 'Ruslan Nikolov' })).toBeInTheDocument();
    expect(screen.getByText('FULL STACK | JS | AI')).toBeInTheDocument();
  });

  it('renders hero image while video loads', () => {
    render(<Hero />);
    expect(screen.getByAltText('Ruslan Nikolov - Frontend Developer')).toBeInTheDocument();
  });

  it('renders background region with aria label', () => {
    render(<Hero />);
    expect(screen.getByRole('img', { name: 'Animated background video' })).toBeInTheDocument();
  });

  it('shows fallback when video fails to load', async () => {
    render(<Hero />);

    await waitFor(() => {
      expect(screen.getByLabelText('Background animation video')).toBeInTheDocument();
    });

    fireEvent.error(screen.getByLabelText('Background animation video'));
    expect(screen.getByText('Video unavailable')).toBeInTheDocument();
  });

  it('loads video using setTimeout when requestIdleCallback is unavailable', async () => {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete (window as Window & { requestIdleCallback?: typeof requestIdleCallback }).requestIdleCallback;

    render(<Hero />);

    await waitFor(() => {
      expect(screen.getByLabelText('Background animation video')).toBeInTheDocument();
    });

    Object.defineProperty(window, 'requestIdleCallback', {
      configurable: true,
      writable: true,
      value: (callback: IdleRequestCallback) =>
        window.setTimeout(() => callback({ didTimeout: false, timeRemaining: () => 50 }), 0),
    });
  });

  it('hides loader after video can play', async () => {
    render(<Hero />);

    await waitFor(() => {
      expect(screen.getByLabelText('Background animation video')).toBeInTheDocument();
    });

    fireEvent.canPlay(screen.getByLabelText('Background animation video'));
    fireEvent.loadedData(screen.getByLabelText('Background animation video'));
  });
});
