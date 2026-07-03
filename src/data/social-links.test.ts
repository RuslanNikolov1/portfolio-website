import { describe, expect, it } from 'vitest';
import { socialLinks } from '@/data/social-links';

describe('socialLinks data', () => {
  it('exports contact and social links', () => {
    expect(socialLinks.length).toBeGreaterThanOrEqual(4);
  });

  it('each link has name, url, and icon', () => {
    socialLinks.forEach((link) => {
      expect(link.name).toBeTruthy();
      expect(link.url).toBeTruthy();
      expect(link.icon).toBeTruthy();
    });
  });

  it('includes email and github links', () => {
    const icons = socialLinks.map((link) => link.icon);
    expect(icons).toContain('mail');
    expect(icons).toContain('github');
  });
});
