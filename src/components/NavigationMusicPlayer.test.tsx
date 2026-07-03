import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import NavigationMusicPlayer from '@/components/NavigationMusicPlayer';

describe('NavigationMusicPlayer', () => {
  it('renders music player region', () => {
    render(<NavigationMusicPlayer />);
    expect(screen.getByRole('region', { name: 'Music player' })).toBeInTheDocument();
    expect(screen.getByText('My music')).toBeInTheDocument();
  });

  it('shows play button initially', () => {
    render(<NavigationMusicPlayer />);
    expect(screen.getByRole('button', { name: 'Play music' })).toBeInTheDocument();
  });

  it('toggles to pause when play is clicked', async () => {
    const user = userEvent.setup();
    render(<NavigationMusicPlayer />);

    await user.click(screen.getByRole('button', { name: 'Play music' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Pause music' })).toBeInTheDocument();
    });
  });

  it('toggles back to play when pause is clicked', async () => {
    const user = userEvent.setup();
    render(<NavigationMusicPlayer />);

    await user.click(screen.getByRole('button', { name: 'Play music' }));
    await user.click(screen.getByRole('button', { name: 'Pause music' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Play music' })).toBeInTheDocument();
    });
  });

  it('syncs playing state from audio element events', () => {
    render(<NavigationMusicPlayer />);
    const audio = document.querySelector('audio')!;

    fireEvent.play(audio);
    expect(screen.getByRole('button', { name: 'Pause music' })).toBeInTheDocument();

    fireEvent.pause(audio);
    expect(screen.getByRole('button', { name: 'Play music' })).toBeInTheDocument();

    fireEvent.play(audio);
    fireEvent.ended(audio);
    expect(screen.getByRole('button', { name: 'Play music' })).toBeInTheDocument();
  });
});
