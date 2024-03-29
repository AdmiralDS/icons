import fse from 'fs-extra';
import CountryNames from './constants/country-names.js';
import CountryRusNames from './constants/country-rus-names.js';

const FILE_NAME = 'flags-metadata.json';

export function createFlagsMeta(buildDir) {
  if (!fse.lstatSync(buildDir).isDirectory()) return;

  const files = fse.readdirSync(buildDir);

  const countryNames = Object.values(CountryNames);

  const data = files
    .map((key) => {
      const path = `@admiral-ds/icons/build/flags/${key}`;
      const countryName = key.match(/(\w+).svg$/);
      const country = countryName && countryName[1] && countryNames.find((name) => name === countryName[1]);
      if (country) {
        const item = Object.entries(CountryNames).find(([code, name]) => name === country);
        const isoCode = item && item[0];
        const rusName = isoCode && CountryRusNames[isoCode];
        return { path, isoCode, name: country, rusName };
      } else {
        console.error(`can not find country for file ${key}`);
      }
    })
    .filter((item) => !!item);

  fse.writeJSONSync(FILE_NAME, data, { spaces: 2 });
}
