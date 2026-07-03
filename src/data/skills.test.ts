import { describe, expect, it } from 'vitest';
import { skills } from '@/data/skills';

describe('skills data', () => {
  it('exports skills across expected categories', () => {
    const categories = new Set(skills.map((skill) => skill.category));
    expect(categories.has('frontend')).toBe(true);
    expect(categories.has('tools')).toBe(true);
    expect(categories.has('design')).toBe(true);
  });

  it('each skill has valid level and years', () => {
    skills.forEach((skill) => {
      expect(skill.name).toBeTruthy();
      expect(skill.level).toBeGreaterThanOrEqual(0);
      expect(skill.level).toBeLessThanOrEqual(100);
      expect(skill.years).toBeGreaterThan(0);
    });
  });

  it('has unique skill names', () => {
    const names = skills.map((skill) => skill.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
