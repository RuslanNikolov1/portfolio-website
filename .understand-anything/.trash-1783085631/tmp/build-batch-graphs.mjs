import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const PROJECT_ROOT = 'c:/Development/portfolio-website-design-taste';
const batches = JSON.parse(
  readFileSync(join(PROJECT_ROOT, '.understand-anything/intermediate/batches.json'), 'utf8')
);

function nodePrefix(fileCategory, path) {
  if (fileCategory === 'config') return 'config';
  if (fileCategory === 'docs') return 'document';
  if (fileCategory === 'markup') return 'file';
  if (fileCategory === 'infra') return 'service';
  if (fileCategory === 'data') return 'schema';
  return 'file';
}

function fileNodeId(fileCategory, path) {
  return `${nodePrefix(fileCategory, path)}:${path}`;
}

function complexityFromLines(nonEmptyLines) {
  if (nonEmptyLines < 50) return 'simple';
  if (nonEmptyLines <= 200) return 'moderate';
  return 'complex';
}

function summarizeFile(path, fileCategory, result) {
  const base = path.split('/').pop() ?? path;
  const summaries = {
    'src/app/page.tsx':
      'Next.js App Router home page composing Hero, Navigation, and lazy-loaded home sections.',
    'src/app/layout.tsx':
      'Root layout defining site metadata, fonts, global styles, and the document shell.',
    'src/app/_components/home-sections.tsx':
      'Client component lazy-loading About, Skills, Projects, Feedbacks, and Contact sections with skeleton fallbacks.',
    'src/components/Hero.tsx':
      'Hero section with animated headline, profile imagery, and deferred video loading for performance.',
    'src/components/Navigation.tsx':
      'Sticky navigation with scroll-spy section highlighting, mobile menu, and responsive breakpoints.',
    'src/components/Projects.tsx':
      'Projects showcase with Radix tabs, category filters, and animated project cards.',
    'src/components/Skills.tsx':
      'Skills section displaying expertise categories with collapsible groups and icons.',
    'src/components/About.tsx':
      'About section with personal bio, interests carousel, and profile imagery.',
    'src/components/Contact.tsx':
      'Contact section with social links and mailto call-to-action.',
    'src/components/Feedbacks.tsx':
      'Client testimonials carousel with navigation controls and responsive layout.',
    'src/components/Footer.tsx':
      'Site footer with copyright, social links, and navigation anchors.',
    'src/data/projects.ts': 'Static project portfolio data including titles, categories, and thumbnail paths.',
    'src/data/skills.ts': 'Static skills data grouped by category for the Skills section.',
    'src/data/social-links.ts': 'Social media and contact link definitions used across Contact and Footer.',
    'src/types/index.ts': 'Shared TypeScript interfaces for projects, skills, and social links.',
    'src/lib/site.ts': 'Central site configuration including name, URL, and metadata defaults.',
    'src/styles/breakpoints.ts': 'Shared responsive breakpoint constants and media query strings.',
    'src/app/globals.scss':
      'Global design tokens, CSS variables, typography, and base element styles for the dark theme.',
    'README.md':
      'Project overview documenting features, tech stack, structure, design system, and setup instructions.',
    'package.json': 'NPM manifest defining Next.js 16 dependencies, scripts, and project metadata.',
    'tsconfig.json': 'TypeScript compiler configuration with strict mode and path aliases.',
    'next.config.ts': 'Next.js configuration including image optimization and bundle analyzer setup.',
    'eslint.config.mjs': 'ESLint flat config extending Next.js recommended rules.',
  };
  if (summaries[path]) return summaries[path];

  if (fileCategory === 'docs') return `Documentation file ${base} describing project or build details.`;
  if (fileCategory === 'config') return `Configuration file ${base} controlling build or runtime settings.`;
  if (fileCategory === 'markup' && path.endsWith('.module.scss'))
    return `Scoped SASS module styling the ${base.replace('.module.scss', '')} component.`;
  if (fileCategory === 'markup' && path.includes('_variables'))
    return 'Shared SCSS variables for colors, spacing, and typography tokens.';
  if (fileCategory === 'markup' && path.includes('_backdrops'))
    return 'Shared backdrop and gradient utility styles used across sections.';
  if (fileCategory === 'markup' && path.includes('_home'))
    return 'Home page layout utility styles shared across sections.';
  if (path.endsWith('Skeleton.tsx'))
    return `Loading skeleton placeholder mirroring ${base.replace('Skeleton.tsx', '')} layout during lazy load.`;
  if (path.startsWith('public/') && path.endsWith('.webp'))
    return `Static image asset ${base} served from the public directory.`;
  if (path === 'public/robots.txt') return 'Search engine crawler directives for the portfolio site.';
  if (path === 'public/sitemap.xml') return 'XML sitemap listing public routes for SEO.';
  return `Source file ${path} supporting the portfolio application.`;
}

function tagsForFile(path, fileCategory, result) {
  const tags = [];
  if (path === 'src/app/page.tsx') tags.push('entry-point', 'page', 'nextjs');
  if (path === 'src/app/layout.tsx') tags.push('entry-point', 'layout', 'nextjs');
  if (path.includes('Skeleton')) tags.push('loading', 'component', 'skeleton');
  if (path.startsWith('src/components/') && path.endsWith('.tsx'))
    tags.push('component', 'react', 'ui');
  if (path.startsWith('src/data/')) tags.push('data-model', 'static-data');
  if (path === 'src/types/index.ts') tags.push('type-definition', 'shared-types');
  if (path.endsWith('.module.scss')) tags.push('styling', 'sass-module');
  if (path === 'src/app/globals.scss') tags.push('styling', 'design-system', 'global');
  if (fileCategory === 'docs') tags.push('documentation');
  if (fileCategory === 'config') tags.push('configuration');
  if (path.startsWith('public/')) tags.push('static-asset', 'public');
  if (path === 'README.md') tags.push('documentation', 'entry-point');
  if (tags.length === 0) tags.push('source');
  return [...new Set(tags)].slice(0, 5);
}

function buildBatch(batch) {
  const extractPath = join(
    PROJECT_ROOT,
    `.understand-anything/tmp/ua-file-extract-results-${batch.batchIndex}.json`
  );
  const extract = JSON.parse(readFileSync(extractPath, 'utf8'));
  const nodes = [];
  const edges = [];
  const nodeIds = new Set();

  for (const result of extract.results) {
    const { path, fileCategory } = result;
    const id = fileNodeId(fileCategory, path);
    nodeIds.add(id);
    nodes.push({
      id,
      type: nodePrefix(fileCategory, path),
      name: path.split('/').pop() ?? path,
      filePath: path,
      summary: summarizeFile(path, fileCategory, result),
      complexity: complexityFromLines(result.nonEmptyLines ?? result.totalLines ?? 1),
      tags: tagsForFile(path, fileCategory, result),
    });

    for (const fn of result.functions ?? []) {
      const exported = (result.exports ?? []).some((e) => e.name === fn.name);
      const lineCount = (fn.endLine ?? fn.startLine) - fn.startLine + 1;
      if (!exported && lineCount < 10) continue;
      const fnId = `function:${path}:${fn.name}`;
      nodeIds.add(fnId);
      nodes.push({
        id: fnId,
        type: 'function',
        name: fn.name,
        filePath: path,
        summary: `${fn.name} defined in ${path.split('/').pop()}.`,
        complexity: complexityFromLines(lineCount),
        tags: ['function', exported ? 'exported' : 'internal'],
      });
      edges.push({
        source: id,
        target: fnId,
        type: 'contains',
        direction: 'forward',
        weight: 1.0,
      });
      if (exported) {
        edges.push({
          source: id,
          target: fnId,
          type: 'exports',
          direction: 'forward',
          weight: 0.8,
        });
      }
    }

    for (const cls of result.classes ?? []) {
      const clsId = `class:${path}:${cls.name}`;
      nodeIds.add(clsId);
      nodes.push({
        id: clsId,
        type: 'class',
        name: cls.name,
        filePath: path,
        summary: `${cls.name} class defined in ${path.split('/').pop()}.`,
        complexity: 'moderate',
        tags: ['class'],
      });
      edges.push({
        source: id,
        target: clsId,
        type: 'contains',
        direction: 'forward',
        weight: 1.0,
      });
    }

    const imports = batch.batchImportData[path] ?? [];
    for (const imp of imports) {
      const targetBatch = batches.batches
        .flatMap((b) => b.files)
        .find((f) => f.path === imp);
      const targetCategory = targetBatch?.fileCategory ?? 'code';
      edges.push({
        source: id,
        target: fileNodeId(targetCategory, imp),
        type: 'imports',
        direction: 'forward',
        weight: 0.7,
      });
    }
  }

  if (batch.batchIndex === 4) {
    edges.push(
      {
        source: 'document:README.md',
        target: 'file:src/app/page.tsx',
        type: 'documents',
        direction: 'forward',
        weight: 0.5,
      },
      {
        source: 'config:package.json',
        target: 'file:src/app/page.tsx',
        type: 'configures',
        direction: 'forward',
        weight: 0.6,
      },
      {
        source: 'config:tsconfig.json',
        target: 'file:src/app/page.tsx',
        type: 'configures',
        direction: 'forward',
        weight: 0.6,
      }
    );
  }

  for (const [path, neighbors] of Object.entries(batch.neighborMap ?? {})) {
    const sourceCategory =
      batch.files.find((f) => f.path === path)?.fileCategory ?? 'code';
    const sourceId = fileNodeId(sourceCategory, path);
    for (const neighbor of neighbors) {
      const neighborCategory =
        batches.batches
          .flatMap((b) => b.files)
          .find((f) => f.path === neighbor.path)?.fileCategory ?? 'code';
      const targetId = fileNodeId(neighborCategory, neighbor.path);
      if (path.endsWith('.scss') && neighbor.path.endsWith('.tsx')) {
        edges.push({
          source: targetId,
          target: sourceId,
          type: 'imports',
          direction: 'forward',
          weight: 0.7,
        });
      }
    }
  }

  return { nodes, edges };
}

for (const batch of batches.batches) {
  const graph = buildBatch(batch);
  const outPath = join(
    PROJECT_ROOT,
    `.understand-anything/intermediate/batch-${batch.batchIndex}.json`
  );
  writeFileSync(outPath, JSON.stringify(graph, null, 2));
  console.log(
    `batch-${batch.batchIndex}: ${graph.nodes.length} nodes, ${graph.edges.length} edges`
  );
}
