import { describe, expect, it } from 'vitest';
import { projects } from '@/data/projects';

describe('projects data', () => {
  it('exports a non-empty list of projects', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('each project has required fields', () => {
    projects.forEach((project) => {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.imageUrl).toMatch(/^\//);
      expect(project.liveUrl).toMatch(/^https?:\/\//);
      expect(project.codeUrl).toMatch(/^https:\/\/github\.com\//);
      expect(project.category).toBe('web');
    });
  });

  it('has unique project ids', () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
