import { readFileSync, writeFileSync } from 'fs';

const projectRoot = 'c:/Development/portfolio-website-design-taste';
const scan = JSON.parse(
  readFileSync(`${projectRoot}/.understand-anything/intermediate/scan-partial.json`, 'utf8')
);
const input = {
  projectRoot,
  files: scan.files.map((f) => ({
    path: f.path,
    language: f.language,
    fileCategory: f.fileCategory,
  })),
};
writeFileSync(
  `${projectRoot}/.understand-anything/tmp/ua-import-map-input.json`,
  JSON.stringify(input, null, 2)
);
