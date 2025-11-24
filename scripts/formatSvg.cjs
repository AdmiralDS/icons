const path = require('path');

const fse = require('fs-extra');
const { optimize } = require('svgo');

const SVGR_OPTIONS = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertPathData: false,
        },
      },
    },
    'removeDimensions',
    'prefixIds',
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
    {
      name: 'removeSpecificPath',
      fn: () => ({
        element: {
          enter: (node, parentNode) => {
            if (node.name === 'path' && node.attributes?.d) {
              const normalizedD = node.attributes.d.replace(/\s+/g, '').toLowerCase();
              if (normalizedD === 'm00h24v24h0z' || normalizedD === 'M0 0H40V40H0z') {
                // Удаляем узел из родительского элемента
                if (parentNode && parentNode.children) {
                  const index = parentNode.children.indexOf(node);
                  if (index !== -1) {
                    parentNode.children.splice(index, 1);
                  }
                }

                return null; // Помечаем узел для удаления
              }
            }
          },
        },
      }),
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
        const formattedSvg = await format(svg, iconPath);

        fse.writeFileSync(path.join(BUILD_DIR, categoryName, convertToCamelCase(iconName)), formattedSvg);
      });
    });
  }

  const defaultConfig = {
    plugins: [{ removeViewBox: false }, { removeDimensions: true }],
  };

  async function format(svg, path) {
    const conf = { ...SVGR_OPTIONS, path };
    try {
      const { data } = await optimize(svg, conf);
      return data;
    } catch (error) {
      console.error(`SVGO failed for ${path}`);
      throw error;
    }
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
