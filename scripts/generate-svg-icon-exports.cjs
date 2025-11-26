// Этот script запускается автоматически каждый раз перед запуском сторибука

const path = require('path');
const fse = require('fs-extra');
const metadata = require('../metadata.json');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const CATEGORIES = Object.keys(metadata);

const ensureFileExists = (filePath) => {
  if (!fse.existsSync(filePath)) {
    fse.createFileSync(filePath);
  }
};

const generateReactExportFile = () => {
  CATEGORIES.forEach((category) => {
    const exportFileName = path.resolve('src/icons', `${category}.ts`);

    ensureFileExists(exportFileName);

    const exportFileContent = metadata[category]
      .map(
        ({ name, path }) =>
          `export { default as ${capitalizeFirstLetter(category)}${name} } from '@admiral-ds/icons/${path}?react';`,
      )
      .concat(['']) // add empty lane at the file end
      .join('\n');

    fse.writeFileSync(exportFileName, exportFileContent);
  });
};

const generateRootIndexFile = () => {
  const indexFilePath = path.resolve('src', 'index.ts');

  ensureFileExists(indexFilePath);

  const exportFileContent = CATEGORIES.map((category) => `export * from './icons/${category}';`)
    .concat([''])
    .join('\n');

  fse.writeFileSync(indexFilePath, exportFileContent);
};

generateReactExportFile();
generateRootIndexFile();
