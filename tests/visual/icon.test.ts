import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ICONS_ROOT = path.join(__dirname, '../../build');

function getAllIcons(dir: string, prefix = ''): string[] {
  const entries = fs.readdirSync(dir);

  return entries.flatMap(entry => {
    const fullPath = path.join(dir, entry);
    const relPath = path.join(prefix, entry);

    if (fs.statSync(fullPath).isDirectory()) {
      return getAllIcons(fullPath, relPath);
    } else if (entry.endsWith('.svg')) {
      return [relPath.replace(/\\/g, '/')];
    }
    return [];
  });
}

const icons = getAllIcons(ICONS_ROOT);

for (const icon of icons) {
  test(`icon: ${icon}`, async ({ page }) => {
    await page.goto(`http://localhost:3000/tests/visual/renderer.html?icon=${icon}`);

    // Подождать, чтобы SVG точно загрузился (ждём появления в DOM, не требуя visibility)
    await page.waitForSelector('#icon-container svg', { state: 'attached' });

    const element = page.locator('#icon-container');

    const normalizedIcon = icon.replace(/\\/g, '/');
    const [category, ...iconParts] = normalizedIcon.split('/');
    const categoryFolder = category || 'uncategorized';
    const baseNameWithoutExt = iconParts.length ? iconParts.join('_').replace(/\.svg$/i, '') : categoryFolder;
    const snapshotRelativePathSegments = [categoryFolder, `${baseNameWithoutExt}.png`];

    await expect(element).toHaveScreenshot(snapshotRelativePathSegments, {
      maxDiffPixelRatio: 0.01, // чувствительность к "крупным изменениям"
    });
  });
}
