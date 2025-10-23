import { useEffect, useCallback, useRef } from 'react';

// Performance optimization hook
export const usePerformance = () => {
  const rafId = useRef<number | undefined>(undefined);
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  // Debounced function to reduce execution frequency
  const debounce = useCallback(<T extends (...args: unknown[]) => void>(func: T, delay: number) => {
    return (...args: Parameters<T>) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(() => func(...args), delay);
    };
  }, []);

  // Throttled function using requestAnimationFrame
  const throttle = useCallback(<T extends (...args: unknown[]) => void>(func: T) => {
    return (...args: Parameters<T>) => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(() => func(...args));
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return { debounce, throttle };
};

// Hook for lazy loading with intersection observer
export const useIntersectionObserver = (
  callback: () => void,
  options: IntersectionObserverInit = {}
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return elementRef;
};

// Hook for reducing re-renders
export const useStableCallback = <T extends (...args: unknown[]) => unknown>(
  callback: T
): T => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  return useCallback(
    ((...args: Parameters<T>) => callbackRef.current(...args)) as T,
    []
  );
};