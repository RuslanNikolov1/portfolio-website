import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Skeleton from '@/components/LoadingSkeleton';

describe('LoadingSkeleton', () => {
  it('renders with default props', () => {
    render(<Skeleton />);
    expect(document.querySelector('[class*="skeleton"]')).toBeInTheDocument();
  });

  it('applies custom dimensions and animation', () => {
    render(
      <Skeleton
        width={200}
        height={40}
        borderRadius="8px"
        animation="wave"
        delay={0.5}
        className="custom-skeleton"
      />,
    );

    const skeleton = document.querySelector('.custom-skeleton') as HTMLElement;
    expect(skeleton).toBeInTheDocument();
    expect(skeleton.style.width).toBe('200px');
    expect(skeleton.style.height).toBe('40px');
    expect(skeleton.style.borderRadius).toBe('8px');
    expect(skeleton.style.animationDelay).toBe('0.5s');
  });
});
