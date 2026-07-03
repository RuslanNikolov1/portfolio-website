import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const projectRoot = 'c:/Development/portfolio-website-design-taste';
const graphPath = join(projectRoot, '.understand-anything/intermediate/assembled-graph.json');
const outputPath = join(projectRoot, '.understand-anything/tmp/ua-arch-input.json');

const FILE_LEVEL_TYPES = new Set([
  'file', 'config', 'document', 'service', 'pipeline', 'table', 'schema', 'resource', 'endpoint',
]);

const graph = JSON.parse(readFileSync(graphPath, 'utf8'));
const fileNodes = graph.nodes.filter((n) => FILE_LEVEL_TYPES.has(n.type));
const fileNodeIds = new Set(fileNodes.map((n) => n.id));

const importEdges = graph.edges.filter(
  (e) => e.type === 'imports' && fileNodeIds.has(e.source) && fileNodeIds.has(e.target),
);

const allEdges = graph.edges.filter(
  (e) => fileNodeIds.has(e.source) && fileNodeIds.has(e.target),
);

const input = { fileNodes, importEdges, allEdges };
writeFileSync(outputPath, JSON.stringify(input, null, 2));
console.log(`Wrote ${fileNodes.length} file nodes, ${importEdges.length} import edges, ${allEdges.length} all edges`);
