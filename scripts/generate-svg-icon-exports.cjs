// Этот script запускается автоматически каждый раз перед запуском сторибука

const path = require('path');
const fse = require('fs-extra');
const metadata = require('../metadata.json');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateReactExportFile = () => {
  Object.keys(metadata).forEach((category) => {
    const exportFileName = path.resolve('src/icons', `${category}.ts`);

    if (!fse.existsSync(exportFileName)) {
      fse.createFileSync(exportFileName);
    }

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

generateReactExportFile();
