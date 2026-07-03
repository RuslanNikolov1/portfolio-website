import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const projectRoot = 'c:/Development/portfolio-website-design-taste';
const inputPath = join(projectRoot, '.understand-anything/tmp/ua-arch-input.json');
const outputPath = join(projectRoot, '.understand-anything/intermediate/layers.json');

const { fileNodes } = JSON.parse(readFileSync(inputPath, 'utf8'));

function assignLayer(node) {
  const fp = (node.filePath || '').replace(/\\/g, '/');
  const id = node.id;

  // Configuration & Documentation
  if (
    node.type === 'config' ||
    node.type === 'document' && !fp.startsWith('public/') ||
    fp === 'eslint.config.mjs' ||
    fp === 'next.config.ts' ||
    fp.startsWith('.understand-anything/')
  ) {
    return 'layer:config-documentation';
  }

  // Static Assets & SEO (public folder)
  if (fp.startsWith('public/')) {
    return 'layer:static-assets-seo';
  }

  // Application Shell — Next.js App Router
  if (
    fp.startsWith('src/app/') &&
    (fp.endsWith('.tsx') || fp.endsWith('.ts')) &&
    !fp.endsWith('.module.scss')
  ) {
    return 'layer:application-shell';
  }

  // Styling — SCSS modules, globals, shared styles
  if (
    fp.endsWith('.scss') ||
    fp.startsWith('src/styles/')
  ) {
    return 'layer:styling';
  }

  // Data & Types — static data, TypeScript types, site config
  if (
    fp.startsWith('src/data/') ||
    fp.startsWith('src/types/') ||
    fp.startsWith('src/lib/')
  ) {
    return 'layer:data-types';
  }

  // UI Components — React components under src/components
  if (fp.startsWith('src/components/')) {
    return 'layer:ui-components';
  }

  // Fallback for anything under src not yet matched
  if (fp.startsWith('src/')) {
    return 'layer:ui-components';
  }

  return 'layer:config-documentation';
}

const layerMeta = {
  'layer:application-shell': {
    name: 'Application Shell',
    description:
      'Next.js App Router entry points including layout, home page, loading/error/not-found boundaries, and the home-sections orchestrator.',
  },
  'layer:ui-components': {
    name: 'UI Components',
    description:
      'Portfolio section React components (Hero, About, Skills, Projects, Contact, Navigation) plus skeleton placeholders and shared UI widgets.',
  },
  'layer:styling': {
    name: 'Styling',
    description:
      'SASS modules co-located with components, global styles, shared SCSS partials, variables, backdrops, and responsive breakpoint tokens.',
  },
  'layer:data-types': {
    name: 'Data & Types',
    description:
      'Static portfolio content (projects, skills, social links), shared TypeScript interfaces, and centralized site metadata in lib/site.ts.',
  },
  'layer:static-assets-seo': {
    name: 'Static Assets & SEO',
    description:
      'Public WebP images for hero, hobbies, and project thumbnails, plus robots.txt and sitemap.xml for search engine indexing.',
  },
  'layer:config-documentation': {
    name: 'Configuration & Documentation',
    description:
      'Build and tooling configs (Next.js, TypeScript, ESLint, package.json), project README and bundle analysis docs, and Understand Anything tooling files.',
  },
};

const buckets = {};
for (const node of fileNodes) {
  const layerId = assignLayer(node);
  if (!buckets[layerId]) buckets[layerId] = [];
  buckets[layerId].push(node.id);
}

const layers = Object.entries(layerMeta).map(([id, meta]) => ({
  id,
  name: meta.name,
  description: meta.description,
  nodeIds: buckets[id] || [],
}));

// Validation
const assigned = new Set(layers.flatMap((l) => l.nodeIds));
const allIds = fileNodes.map((n) => n.id);
const missing = allIds.filter((id) => !assigned.has(id));
const extra = [...assigned].filter((id) => !allIds.includes(id));
const empty = layers.filter((l) => l.nodeIds.length === 0);

if (missing.length) {
  console.error('Missing assignments:', missing);
  process.exit(1);
}
if (extra.length) {
  console.error('Extra node IDs:', extra);
  process.exit(1);
}
if (empty.length) {
  console.error('Empty layers:', empty.map((l) => l.id));
  process.exit(1);
}

writeFileSync(outputPath, JSON.stringify(layers, null, 2));

console.log(`Wrote ${layers.length} layers, ${assigned.size} nodes total`);
for (const l of layers) {
  console.log(`  ${l.name}: ${l.nodeIds.length} files`);
}
