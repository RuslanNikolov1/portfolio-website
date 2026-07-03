#!/usr/bin/env node
'use strict';

const fs = require('fs');

const ENTRY_FILENAME_PATTERNS = [
  /^index\.(ts|tsx|js|jsx)$/,
  /^main\.(ts|tsx|js|jsx)$/,
  /^app\.(ts|tsx|js|jsx)$/,
  /^server\.(ts|tsx|js|jsx)$/,
  /^mod\.rs$/,
  /^main\.(go|py|rs)$/,
  /^manage\.py$/,
  /^app\.py$/,
  /^wsgi\.py$/,
  /^asgi\.py$/,
  /^run\.py$/,
  /^__main__\.py$/,
  /^Application\.java$/,
  /^Main\.java$/,
  /^Program\.cs$/,
  /^config\.ru$/,
  /^index\.php$/,
  /^App\.swift$/,
  /^Application\.kt$/,
  /^main\.(cpp|c)$/,
  /^page\.tsx$/,
  /^layout\.tsx$/,
];

const BFS_EDGE_TYPES = new Set(['imports', 'calls']);

function readInput(inputPath) {
  const raw = fs.readFileSync(inputPath, 'utf8');
  return JSON.parse(raw);
}

function computeFanIn(nodes, edges) {
  const fanIn = new Map(nodes.map((n) => [n.id, 0]));
  for (const edge of edges) {
    if (fanIn.has(edge.target)) {
      fanIn.set(edge.target, fanIn.get(edge.target) + 1);
    }
  }
  return fanIn;
}

function computeFanOut(nodes, edges) {
  const fanOut = new Map(nodes.map((n) => [n.id, 0]));
  for (const edge of edges) {
    if (fanOut.has(edge.source)) {
      fanOut.set(edge.source, fanOut.get(edge.source) + 1);
    }
  }
  return fanOut;
}

function isShallowPath(filePath) {
  const parts = filePath.split('/');
  return parts.length <= 2;
}

function scoreEntryPoint(node, fanIn, fanOut, allFanOutValues) {
  let score = 0;
  const name = node.name || '';
  const filePath = node.filePath || '';

  if (node.type === 'document') {
    if (name === 'README.md' && !filePath.includes('/')) return 5;
    if (name.endsWith('.md') && !filePath.includes('/')) return 2;
    return 0;
  }

  if (node.type !== 'file') return 0;

  if (ENTRY_FILENAME_PATTERNS.some((re) => re.test(name))) score += 3;
  if (isShallowPath(filePath)) score += 1;

  const fanOutVal = fanOut.get(node.id) || 0;
  const sortedFanOut = [...allFanOutValues].sort((a, b) => b - a);
  const top10Threshold = sortedFanOut[Math.floor(sortedFanOut.length * 0.1)] || 0;
  if (fanOutVal >= top10Threshold && fanOutVal > 0) score += 1;

  const fanInVal = fanIn.get(node.id) || 0;
  const sortedFanIn = [...fanIn.values()].sort((a, b) => a - b);
  const bottom25Threshold = sortedFanIn[Math.floor(sortedFanIn.length * 0.25)] || 0;
  if (fanInVal <= bottom25Threshold) score += 1;

  return score;
}

function rankByFan(fanMap, nodes, limit = 20) {
  return [...fanMap.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([id, count]) => {
      const node = nodes.find((n) => n.id === id);
      return { id, fanIn: count, fanOut: count, name: node?.name || id, ...(count !== undefined ? {} : {}) };
    });
}

function rankFanIn(fanIn, nodes, limit = 20) {
  return [...fanIn.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([id, fanInCount]) => {
      const node = nodes.find((n) => n.id === id);
      return { id, fanIn: fanInCount, name: node?.name || id };
    });
}

function rankFanOut(fanOut, nodes, limit = 20) {
  return [...fanOut.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([id, fanOutCount]) => {
      const node = nodes.find((n) => n.id === id);
      return { id, fanOut: fanOutCount, name: node?.name || id };
    });
}

function getEntryPointCandidates(nodes, fanIn, fanOut) {
  const allFanOutValues = [...fanOut.values()];
  return nodes
    .map((node) => ({
      id: node.id,
      score: scoreEntryPoint(node, fanIn, fanOut, allFanOutValues),
      name: node.name,
      summary: node.summary || '',
    }))
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    .slice(0, 5);
}

function pickCodeEntryPoint(candidates) {
  const code = candidates.find((c) => c.id.startsWith('file:'));
  return code || candidates[0];
}

function buildAdjacency(edges) {
  const adj = new Map();
  for (const edge of edges) {
    if (!BFS_EDGE_TYPES.has(edge.type)) continue;
    if (!adj.has(edge.source)) adj.set(edge.source, []);
    adj.get(edge.source).push(edge.target);
  }
  return adj;
}

function bfsFromEntry(startId, adj) {
  const order = [];
  const depthMap = {};
  const byDepth = {};
  const visited = new Set();
  const queue = [{ id: startId, depth: 0 }];

  while (queue.length > 0) {
    const { id, depth } = queue.shift();
    if (visited.has(id)) continue;
    visited.add(id);

    order.push(id);
    depthMap[id] = depth;
    const depthKey = String(depth);
    if (!byDepth[depthKey]) byDepth[depthKey] = [];
    byDepth[depthKey].push(id);

    const neighbors = adj.get(id) || [];
    for (const next of neighbors) {
      if (!visited.has(next)) {
        queue.push({ id: next, depth: depth + 1 });
      }
    }
  }

  return { startNode: startId, order, depthMap, byDepth };
}

function categorizeNonCode(nodes) {
  const result = {
    documentation: [],
    infrastructure: [],
    data: [],
    config: [],
  };

  for (const node of nodes) {
    const entry = {
      id: node.id,
      name: node.name,
      type: node.type,
      summary: node.summary || '',
    };

    switch (node.type) {
      case 'document':
        result.documentation.push(entry);
        break;
      case 'service':
      case 'pipeline':
      case 'resource':
        result.infrastructure.push(entry);
        break;
      case 'table':
      case 'schema':
      case 'endpoint':
        result.data.push(entry);
        break;
      case 'config':
        result.config.push(entry);
        break;
      default:
        break;
    }
  }

  return result;
}

function hasBidirectionalEdge(a, b, edges) {
  const forward = edges.some(
    (e) =>
      (e.type === 'imports' || e.type === 'calls') &&
      ((e.source === a && e.target === b) || (e.source === b && e.target === a))
  );
  if (!forward) return false;
  const ab = edges.some(
    (e) =>
      (e.type === 'imports' || e.type === 'calls') &&
      e.source === a &&
      e.target === b
  );
  const ba = edges.some(
    (e) =>
      (e.type === 'imports' || e.type === 'calls') &&
      e.source === b &&
      e.target === a
  );
  return ab && ba;
}

function countClusterEdges(cluster, edges) {
  const set = new Set(cluster);
  let count = 0;
  for (const edge of edges) {
    if (
      (edge.type === 'imports' || edge.type === 'calls') &&
      set.has(edge.source) &&
      set.has(edge.target)
    ) {
      count += 1;
    }
  }
  return count;
}

function findClusters(nodes, edges) {
  const fileNodes = nodes.filter((n) => n.id.startsWith('file:')).map((n) => n.id);
  const pairs = [];

  for (let i = 0; i < fileNodes.length; i++) {
    for (let j = i + 1; j < fileNodes.length; j++) {
      const a = fileNodes[i];
      const b = fileNodes[j];
      if (hasBidirectionalEdge(a, b, edges)) {
        pairs.push([a, b]);
      }
    }
  }

  const clusters = [];
  const used = new Set();

  for (const [a, b] of pairs) {
    let cluster = [a, b];
    let expanded = true;

    while (expanded && cluster.length < 5) {
      expanded = false;
      for (const nodeId of fileNodes) {
        if (cluster.includes(nodeId)) continue;
        const connections = cluster.filter((member) =>
          edges.some(
            (e) =>
              (e.type === 'imports' || e.type === 'calls') &&
              ((e.source === nodeId && e.target === member) ||
                (e.source === member && e.target === nodeId))
          )
        ).length;
        if (connections >= 2) {
          cluster.push(nodeId);
          expanded = true;
        }
      }
    }

    cluster = [...new Set(cluster)].sort();
    const key = cluster.join('|');
    if (used.has(key)) continue;
    used.add(key);

    clusters.push({
      nodes: cluster,
      edgeCount: countClusterEdges(cluster, edges),
    });
  }

  return clusters
    .sort((a, b) => b.edgeCount - a.edgeCount || b.nodes.length - a.nodes.length)
    .slice(0, 10);
}

function buildNodeSummaryIndex(nodes) {
  const index = {};
  for (const node of nodes) {
    index[node.id] = {
      name: node.name,
      type: node.type,
      summary: node.summary || '',
    };
  }
  return index;
}

function main() {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3];

  if (!inputPath || !outputPath) {
    console.error('Usage: node ua-tour-analyze.js <input.json> <output.json>');
    process.exit(1);
  }

  try {
    const data = readInput(inputPath);
    const nodes = data.nodes || [];
    const edges = data.edges || [];
    const layersInput = data.layers || [];

    const fanIn = computeFanIn(nodes, edges);
    const fanOut = computeFanOut(nodes, edges);

    const entryPointCandidates = getEntryPointCandidates(nodes, fanIn, fanOut);
    const codeEntry = pickCodeEntryPoint(entryPointCandidates);
    const adj = buildAdjacency(edges);
    const bfsTraversal = codeEntry
      ? bfsFromEntry(codeEntry.id, adj)
      : { startNode: null, order: [], depthMap: {}, byDepth: {} };

    const output = {
      scriptCompleted: true,
      entryPointCandidates,
      fanInRanking: rankFanIn(fanIn, nodes),
      fanOutRanking: rankFanOut(fanOut, nodes),
      bfsTraversal,
      nonCodeFiles: categorizeNonCode(nodes),
      clusters: findClusters(nodes, edges),
      layers: {
        count: layersInput.length,
        list: layersInput.map((l) => ({
          id: l.id,
          name: l.name,
          description: l.description,
        })),
      },
      nodeSummaryIndex: buildNodeSummaryIndex(nodes),
      totalNodes: nodes.length,
      totalEdges: edges.length,
    };

    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
}

main();
