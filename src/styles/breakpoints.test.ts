import { describe, expect, it } from 'vitest';
import { BP_MD, BP_SM, BP_XS, MQ_BELOW_MD, MQ_BELOW_SM } from '@/styles/breakpoints';

describe('breakpoints', () => {
  it('exports expected pixel values', () => {
    expect(BP_XS).toBe(480);
    expect(BP_SM).toBe(768);
    expect(BP_MD).toBe(1024);
  });

  it('builds media queries from breakpoint values', () => {
    expect(MQ_BELOW_SM).toBe('(max-width: 768px)');
    expect(MQ_BELOW_MD).toBe('(max-width: 1024px)');
  });
});
