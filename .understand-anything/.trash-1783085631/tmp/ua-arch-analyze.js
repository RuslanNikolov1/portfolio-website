#!/usr/bin/env node
/**
 * Structural architecture analysis for Understand Anything layer assignment.
 */
const fs = require('fs');
const path = require('path');

const FILE_LEVEL_TYPES = new Set([
  'file', 'config', 'document', 'service', 'pipeline', 'table', 'schema', 'resource', 'endpoint',
]);

const DIR_PATTERN_MAP = {
  routes: 'api', api: 'api', controllers: 'api', endpoints: 'api', handlers: 'api',
  services: 'service', core: 'service', lib: 'service', domain: 'logic', logic: 'service',
  models: 'data', db: 'data', data: 'data', persistence: 'data', repository: 'data', entities: 'data',
  components: 'ui', views: 'ui', pages: 'ui', ui: 'ui', layouts: 'ui', screens: 'ui',
  middleware: 'middleware', plugins: 'middleware', interceptors: 'middleware', guards: 'middleware',
  utils: 'utility', helpers: 'utility', common: 'utility', shared: 'utility', tools: 'utility',
  config: 'config', constants: 'config', env: 'config', settings: 'config',
  __tests__: 'test', test: 'test', tests: 'test', spec: 'test', specs: 'test',
  types: 'types', interfaces: 'types', schemas: 'types', contracts: 'types', dtos: 'types',
  hooks: 'hooks',
  store: 'state', state: 'state', reducers: 'state', actions: 'state', slices: 'state',
  assets: 'assets', static: 'assets', public: 'assets',
  migrations: 'data',
  management: 'config', commands: 'config',
  templatetags: 'utility', signals: 'service', serializers: 'api',
  cmd: 'entry', internal: 'service', pkg: 'utility',
  composables: 'service', blueprints: 'api',
  mailers: 'service', jobs: 'service', channels: 'service',
  bin: 'entry',
  docs: 'documentation', documentation: 'documentation', wiki: 'documentation',
  deploy: 'infrastructure', deployment: 'infrastructure', infra: 'infrastructure', infrastructure: 'infrastructure',
  '.github': 'ci-cd', '.gitlab': 'ci-cd', '.circleci': 'ci-cd',
  k8s: 'infrastructure', kubernetes: 'infrastructure', helm: 'infrastructure', charts: 'infrastructure',
  terraform: 'infrastructure', tf: 'infrastructure', docker: 'infrastructure',
  sql: 'data', database: 'data', schema: 'data',
  styles: 'utility', app: 'ui',
};

function basename(p) {
  const parts = p.replace(/\\/g, '/').split('/');
  return parts[parts.length - 1];
}

function getCommonPrefix(paths) {
  if (paths.length === 0) return '';
  const normalized = paths.map((p) => p.replace(/\\/g, '/'));
  const split = normalized.map((p) => p.split('/'));
  const minLen = Math.min(...split.map((s) => s.length));
  const prefix = [];
  for (let i = 0; i < minLen; i++) {
    const seg = split[0][i];
    if (split.every((s) => s[i] === seg)) prefix.push(seg);
    else break;
  }
  return prefix.length > 0 ? prefix.join('/') + '/' : '';
}

function getDirectoryGroup(filePath, commonPrefix) {
  const norm = filePath.replace(/\\/g, '/');
  let relative = norm;
  if (commonPrefix && norm.startsWith(commonPrefix)) {
    relative = norm.slice(commonPrefix.length);
  }
  const parts = relative.split('/').filter(Boolean);
  if (parts.length <= 1) {
    const ext = path.extname(norm);
    if (/\.(test|spec)\./i.test(norm) || /test_|_test\.|_spec\.|Test\.|Tests\./i.test(norm)) return 'test';
    if (/\.config\./i.test(norm)) return 'config';
    return 'root';
  }
  return parts[0];
}

function matchFilePattern(filePath, nodeType) {
  const norm = filePath.replace(/\\/g, '/');
  const name = basename(norm);
  if (/\.(test|spec)\./i.test(norm) || /^test_/i.test(name) || /_test\.|_spec\.|Test\.java|Tests\.cs|_spec\.rb/i.test(norm)) return 'test';
  if (/\.d\.ts$/i.test(norm)) return 'types';
  if (/(^|\/)index\.(ts|js|tsx|jsx)$/i.test(norm)) return 'entry';
  if (name === 'manage.py') return 'entry';
  if (name === 'wsgi.py' || name === 'asgi.py') return 'config';
  if (/^main\.go$/i.test(name)) return 'entry';
  if ((name === 'main.rs' || name === 'lib.rs') && norm.includes('src/')) return 'entry';
  if (name === 'Application.java' || name === 'Program.cs') return 'entry';
  if (name === 'config.ru') return 'entry';
  if (/^(Cargo\.toml|go\.mod|Gemfile|pom\.xml|build\.gradle|composer\.json|package\.json)$/i.test(name)) return 'config';
  if (/^Dockerfile$/i.test(name) || /^docker-compose\./i.test(name)) return 'infrastructure';
  if (/\.tf$/i.test(norm) || /\.tfvars$/i.test(norm)) return 'infrastructure';
  if (/\.github\/workflows\//i.test(norm) || /\.gitlab-ci\.yml$/i.test(name) || name === 'Jenkinsfile') return 'ci-cd';
  if (/\.sql$/i.test(norm)) return 'data';
  if (/\.(graphql|gql|proto)$/i.test(norm)) return 'types';
  if (/\.(md|rst)$/i.test(norm) || nodeType === 'document') return 'documentation';
  if (name === 'Makefile') return 'infrastructure';
  return null;
}

function detectDeploymentTopology(fileNodes) {
  const infraFiles = [];
  let hasDockerfile = false;
  let hasCompose = false;
  let hasK8s = false;
  let hasTerraform = false;
  let hasCI = false;

  for (const node of fileNodes) {
    const fp = node.filePath || '';
    const norm = fp.replace(/\\/g, '/');
    const name = basename(norm);
    if (/^Dockerfile/i.test(name)) { hasDockerfile = true; infraFiles.push(fp); }
    if (/^docker-compose\./i.test(name)) { hasCompose = true; infraFiles.push(fp); }
    if (/(^|\/)k8s\//i.test(norm) || /kubernetes/i.test(norm)) { hasK8s = true; infraFiles.push(fp); }
    if (/\.tf$/i.test(norm) || /\.tfvars$/i.test(norm)) { hasTerraform = true; infraFiles.push(fp); }
    if (/\.github\/workflows\//i.test(norm) || /\.gitlab-ci\.yml$/i.test(name) || name === 'Jenkinsfile') {
      hasCI = true; infraFiles.push(fp);
    }
    if (node.type === 'service' || node.type === 'pipeline') {
      infraFiles.push(fp);
      if (node.type === 'pipeline') hasCI = true;
    }
  }

  return { hasDockerfile, hasCompose, hasK8s, hasTerraform, hasCI, infraFiles: [...new Set(infraFiles)] };
}

function detectDataPipeline(fileNodes, importEdges) {
  const schemaFiles = [];
  const migrationFiles = [];
  const dataModelFiles = [];
  const apiHandlerFiles = [];

  for (const node of fileNodes) {
    const fp = node.filePath || '';
    const norm = fp.replace(/\\/g, '/');
    if (/\.(sql|graphql|gql|proto|prisma)$/i.test(norm) || node.type === 'schema' || node.type === 'table') {
      if (/migrat/i.test(norm)) migrationFiles.push(fp);
      else schemaFiles.push(fp);
    }
    if (/(^|\/)data\//i.test(norm) || /(^|\/)models?\//i.test(norm) || node.type === 'table') {
      dataModelFiles.push(fp);
    }
    if (/(^|\/)app\//i.test(norm) && /page\.(tsx|jsx|ts|js)$/i.test(norm)) {
      apiHandlerFiles.push(fp);
    }
    if (/(^|\/)routes?\//i.test(norm) || /(^|\/)api\//i.test(norm) || /(^|\/)handlers?\//i.test(norm)) {
      apiHandlerFiles.push(fp);
    }
  }

  return {
    schemaFiles: [...new Set(schemaFiles)],
    migrationFiles: [...new Set(migrationFiles)],
    dataModelFiles: [...new Set(dataModelFiles)],
    apiHandlerFiles: [...new Set(apiHandlerFiles)],
  };
}

function main() {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3];
  if (!inputPath || !outputPath) {
    console.error('Usage: node ua-arch-analyze.js <input.json> <output.json>');
    process.exit(1);
  }

  let input;
  try {
    input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  } catch (err) {
    console.error('Failed to read input:', err.message);
    process.exit(1);
  }

  const { fileNodes = [], importEdges = [], allEdges = [] } = input;
  const paths = fileNodes.map((n) => n.filePath || '').filter(Boolean);
  const commonPrefix = getCommonPrefix(paths);

  // A. Directory Grouping
  const directoryGroups = {};
  for (const node of fileNodes) {
    const group = getDirectoryGroup(node.filePath || node.id.replace(/^[^:]+:/, ''), commonPrefix);
    if (!directoryGroups[group]) directoryGroups[group] = [];
    directoryGroups[group].push(node.id);
  }

  const nodeIdToGroup = {};
  for (const [group, ids] of Object.entries(directoryGroups)) {
    for (const id of ids) nodeIdToGroup[id] = group;
  }

  // B. Node Type Grouping
  const nodeTypeGroups = {};
  for (const node of fileNodes) {
    const t = node.type;
    if (!nodeTypeGroups[t]) nodeTypeGroups[t] = [];
    nodeTypeGroups[t].push(node.id);
  }

  // C. Import adjacency
  const fileFanOut = {};
  const fileFanIn = {};
  for (const node of fileNodes) {
    fileFanOut[node.id] = 0;
    fileFanIn[node.id] = 0;
  }
  const adjacency = {};
  for (const edge of importEdges) {
    if (!adjacency[edge.source]) adjacency[edge.source] = new Set();
    adjacency[edge.source].add(edge.target);
    fileFanOut[edge.source] = (fileFanOut[edge.source] || 0) + 1;
    fileFanIn[edge.target] = (fileFanIn[edge.target] || 0) + 1;
  }

  const groupImportsFrom = {};
  const groupImportedBy = {};
  for (const group of Object.keys(directoryGroups)) {
    groupImportsFrom[group] = new Set();
    groupImportedBy[group] = new Set();
  }

  for (const edge of importEdges) {
    const srcGroup = nodeIdToGroup[edge.source];
    const tgtGroup = nodeIdToGroup[edge.target];
    if (!srcGroup || !tgtGroup) continue;
    if (srcGroup !== tgtGroup) {
      groupImportsFrom[srcGroup].add(tgtGroup);
      groupImportedBy[tgtGroup].add(srcGroup);
    }
  }

  // D. Cross-category edges
  const crossCategoryMap = {};
  for (const edge of allEdges) {
    const srcNode = fileNodes.find((n) => n.id === edge.source);
    const tgtNode = fileNodes.find((n) => n.id === edge.target);
    if (!srcNode || !tgtNode) continue;
    const key = `${srcNode.type}->${tgtNode.type}:${edge.type}`;
    crossCategoryMap[key] = (crossCategoryMap[key] || 0) + 1;
  }
  const crossCategoryEdges = Object.entries(crossCategoryMap).map(([key, count]) => {
    const [types, edgeType] = key.split(':');
    const [fromType, toType] = types.split('->');
    return { fromType, toType, edgeType, count };
  });

  // E. Inter-group import frequency
  const interGroupMap = {};
  for (const edge of importEdges) {
    const srcGroup = nodeIdToGroup[edge.source];
    const tgtGroup = nodeIdToGroup[edge.target];
    if (!srcGroup || !tgtGroup || srcGroup === tgtGroup) continue;
    const key = `${srcGroup}->${tgtGroup}`;
    interGroupMap[key] = (interGroupMap[key] || 0) + 1;
  }
  const interGroupImports = Object.entries(interGroupMap).map(([key, count]) => {
    const [from, to] = key.split('->');
    return { from, to, count };
  });

  // F. Intra-group density
  const intraGroupDensity = {};
  for (const group of Object.keys(directoryGroups)) {
    let internalEdges = 0;
    let totalEdges = 0;
    for (const edge of importEdges) {
      const srcGroup = nodeIdToGroup[edge.source];
      const tgtGroup = nodeIdToGroup[edge.target];
      if (srcGroup === group || tgtGroup === group) {
        totalEdges++;
        if (srcGroup === group && tgtGroup === group) internalEdges++;
      }
    }
    intraGroupDensity[group] = {
      internalEdges,
      totalEdges,
      density: totalEdges > 0 ? internalEdges / totalEdges : 0,
    };
  }

  // G. Pattern matching
  const patternMatches = {};
  for (const group of Object.keys(directoryGroups)) {
    if (DIR_PATTERN_MAP[group]) {
      patternMatches[group] = DIR_PATTERN_MAP[group];
    } else {
      const sampleNode = fileNodes.find((n) => nodeIdToGroup[n.id] === group);
      const filePat = sampleNode ? matchFilePattern(sampleNode.filePath, sampleNode.type) : null;
      patternMatches[group] = filePat || 'unknown';
    }
  }

  // H. Deployment topology
  const deploymentTopology = detectDeploymentTopology(fileNodes);

  // I. Data pipeline
  const dataPipeline = detectDataPipeline(fileNodes, importEdges);

  // J. Documentation coverage
  const docNodePaths = fileNodes
    .filter((n) => n.type === 'document' || /\.(md|rst)$/i.test(n.filePath || ''))
    .map((n) => (n.filePath || '').replace(/\\/g, '/'));

  const groupsWithDocs = new Set();
  for (const docPath of docNodePaths) {
    const dir = docPath.includes('/') ? docPath.split('/').slice(0, -1).join('/') : '';
    for (const group of Object.keys(directoryGroups)) {
      const sample = fileNodes.find((n) => nodeIdToGroup[n.id] === group);
      if (sample && sample.filePath) {
        const fp = sample.filePath.replace(/\\/g, '/');
        const gdir = fp.includes('/') ? fp.split('/').slice(0, -1).join('/') : '';
        if (docPath.startsWith(gdir) || dir === gdir || basename(docPath).toLowerCase() === 'readme.md') {
          groupsWithDocs.add(group);
        }
      }
    }
    if (/readme\.md/i.test(docPath)) groupsWithDocs.add('root');
  }

  const totalGroups = Object.keys(directoryGroups).length;
  const undocumentedGroups = Object.keys(directoryGroups).filter((g) => !groupsWithDocs.has(g));

  const docCoverage = {
    groupsWithDocs: groupsWithDocs.size,
    totalGroups,
    coverageRatio: totalGroups > 0 ? groupsWithDocs.size / totalGroups : 0,
    undocumentedGroups,
  };

  // K. Dependency direction
  const pairCounts = {};
  for (const { from, to, count } of interGroupImports) {
    const key = [from, to].sort().join('|');
    if (!pairCounts[key]) pairCounts[key] = {};
    pairCounts[key][from] = (pairCounts[key][from] || 0) + count;
  }
  const dependencyDirection = [];
  for (const [key, counts] of Object.entries(pairCounts)) {
    const [a, b] = key.split('|');
    const aToB = counts[a] || 0;
    const bToA = counts[b] || 0;
    if (aToB > bToA) dependencyDirection.push({ dependent: a, dependsOn: b, countAtoB: aToB, countBtoA: bToA });
    else if (bToA > aToB) dependencyDirection.push({ dependent: b, dependsOn: a, countAtoB: aToB, countBtoA: bToA });
  }

  const filesPerGroup = {};
  for (const [g, ids] of Object.entries(directoryGroups)) filesPerGroup[g] = ids.length;

  const nodeTypeCounts = {};
  for (const [t, ids] of Object.entries(nodeTypeGroups)) nodeTypeCounts[t] = ids.length;

  const result = {
    scriptCompleted: true,
    commonPrefix,
    directoryGroups,
    nodeTypeGroups,
    crossCategoryEdges,
    interGroupImports,
    intraGroupDensity,
    patternMatches,
    deploymentTopology,
    dataPipeline,
    docCoverage,
    dependencyDirection,
    fileStats: {
      totalFileNodes: fileNodes.length,
      filesPerGroup,
      nodeTypeCounts,
    },
    fileFanIn,
    fileFanOut,
  };

  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log(`Analysis complete: ${fileNodes.length} nodes, ${Object.keys(directoryGroups).length} directory groups`);
}

main();
