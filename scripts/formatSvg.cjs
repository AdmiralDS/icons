const path = require('path');

const fse = require('fs-extra');
const { optimize } = require('svgo');

const SVGR_OPTIONS = {
  plugins: [
    'preset-default',
    'removeDimensions',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            focusable: false,
          },
        ],
      },
    },
  ],
};

const BUILD_DIR = 'build';
const SOURCE_DIR = 'public/icons';

(function () {
  makeDirectory(BUILD_DIR);

  const categories = fse.readdirSync(SOURCE_DIR);
  categories.forEach((categoryName, idx) => formatCategory(categoryName));

  function makeDirectory(path) {
    if (!fse.existsSync(path)) {
      fse.mkdirSync(path);
    }
  }

  async function formatCategory(categoryName) {
    makeDirectory(path.join(BUILD_DIR, categoryName));

    const categoryPath = path.join(SOURCE_DIR, categoryName);
    const icons = fse.readdirSync(categoryPath);

    icons.forEach((iconName) => {
      const iconPath = path.join(categoryPath, iconName);

      fse.readFile(iconPath, 'utf8', async (error, svg) => {
        const formattedSvg = await format(svg);

        fse.writeFileSync(path.join(BUILD_DIR, categoryName, convertToCamelCase(iconName)), formattedSvg);
      });
    });
  }

  const defaultConfig = {
    plugins: [{ removeViewBox: false }, { removeDimensions: true }],
  };

  async function format(svg) {
    const { data } = await optimize(svg, SVGR_OPTIONS);
    return data;
  }

  function convertToCamelCase(string) {
    const fileName = path.parse(string).name;
    const ext = path.parse(string).ext;

    return fileName
      .replace(/\W+/g, ' ')
      .replace(/\s[a-z]/g, (match) => match.toUpperCase())
      .replace(/^[a-z]/, (match) => match.toUpperCase())
      .replace(/\s/g, '')
      .concat(ext);
  }
})();
