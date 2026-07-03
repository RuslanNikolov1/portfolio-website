import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import React from 'react';
import { afterEach, vi } from 'vitest';

export const mockUseReducedMotion = vi.fn(() => false);

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    ...props
  }: React.ComponentProps<'img'> & { priority?: boolean; fill?: boolean; sizes?: string }) =>
    React.createElement('img', {
      src: typeof src === 'string' ? src : undefined,
      alt: alt ?? '',
      ...props,
    }),
}));

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: React.ComponentProps<'a'> & { href: string }) =>
    React.createElement('a', { href, ...props }, children),
}));

vi.mock('next/dynamic', () => ({
  default: (
    loader: () => Promise<{ default: React.ComponentType<Record<string, unknown>> }>,
    options?: { loading?: () => React.ReactNode },
  ) => {
    const LazyComponent = React.lazy(loader);

    function DynamicComponent(props: Record<string, unknown>) {
      return React.createElement(
        React.Suspense,
        { fallback: options?.loading?.() ?? null },
        React.createElement(LazyComponent, props),
      );
    }

    DynamicComponent.displayName = 'DynamicComponent';
    return DynamicComponent;
  },
}));

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof import('react')>('react');

  function createMotionComponent(tag: string) {
    return actual.forwardRef(function MotionComponent(
      {
        children,
        whileHover: _whileHover,
        whileTap: _whileTap,
        whileInView: _whileInView,
        initial: _initial,
        animate: _animate,
        exit: _exit,
        variants: _variants,
        transition: _transition,
        viewport: _viewport,
        drag: _drag,
        dragConstraints: _dragConstraints,
        dragElastic: _dragElastic,
        onDragEnd: _onDragEnd,
        custom: _custom,
        ...props
      }: Record<string, unknown>,
      ref: React.Ref<HTMLElement>,
    ) {
      return actual.createElement(tag, { ...props, ref }, children as React.ReactNode);
    });
  }

  const motion = new Proxy(
    {},
    {
      get: (_target, prop: string) => createMotionComponent(prop),
    },
  );

  return {
    motion,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useReducedMotion: () => mockUseReducedMotion(),
  };
});

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = '';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(private callback: IntersectionObserverCallback) {}

  observe = vi.fn((target: Element) => {
    this.callback(
      [{ isIntersecting: true, target } as IntersectionObserverEntry],
      this,
    );
  });

  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window, 'requestIdleCallback', {
  writable: true,
  configurable: true,
  value: (callback: IdleRequestCallback) =>
    window.setTimeout(() => callback({ didTimeout: false, timeRemaining: () => 50 }), 0),
});

Object.defineProperty(window, 'cancelIdleCallback', {
  writable: true,
  value: (id: number) => window.clearTimeout(id),
});

Element.prototype.scrollIntoView = vi.fn();
HTMLElement.prototype.scrollTo = vi.fn();
window.scrollTo = vi.fn();

Object.defineProperty(HTMLMediaElement.prototype, 'play', {
  configurable: true,
  writable: true,
  value: vi.fn(() => Promise.resolve()),
});

Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
  configurable: true,
  writable: true,
  value: vi.fn(),
});
