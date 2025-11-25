import { test, expect } from '@playwright/test';
import metadata from '../../metadata.json' assert { type: 'json' };
import { ICON_CATEGORY_CONFIG } from '../../src/iconCategoryConfig';

/**
 * Описание одной иконки из metadata.json
 * - name: имя иконки для отображения в UI / snapshot-файлах
 * - path: путь к SVG внутри сборки (обычно начинается с "build/")
 */
type IconMeta = {
  name: string;
  path: string;
};

/**
 * Тип для описания одной категории иконок внутри тестов.
 *
 * CategoryConfig представляет собой:
 * - label: человекочитаемое название категории (например: "Банки")
 * - value: машинное значение категории ("bank", "documents", ...)
 * - icons: список иконок в этой категории
 */
type CategoryConfig = {
  label: string;
  value: (typeof ICON_CATEGORY_CONFIG)[number]['value'];
  icons: IconMeta[];
};

/**
 * METADATA – это объект вида:
 * {
 *   "bank": [ { name, path }, ... ],
 *   "documents": [ { name, path }, ... ],
 *   ...
 * }
 *
 * То есть из metadata.json мы получаем список иконок,
 * уже разбитый по категориям.
 */
const METADATA = metadata as Record<string, IconMeta[]>;

/**
 * Получаем список иконок в категории.
 * В metadata.json каждая категория уже содержит массив нужных иконок,
 * поэтому достаточно вернуть его или пустой массив.
 */
const getIcons = (category: CategoryConfig['value']): CategoryConfig['icons'] => METADATA[category] ?? [];

/**
 * Генерируем список категорий для тестов.
 * Каждая категория описана:
 * - label: название (в UI, в отчёте Playwright)
 * - value: идентификатор категории
 * - icons: массив иконок, которые нужно протестировать
 */
const CATEGORIES: CategoryConfig[] = ICON_CATEGORY_CONFIG.map(({ label, value }) => ({
  label,
  value,
  icons: getIcons(value),
}));

const ICONS_STORY_PATH = '/iframe.html?id=icons-icons--icons';
const getIconTestId = (category: CategoryConfig['value'], iconName: string) => `${category}${iconName}`;

/**
 * Основной цикл по категориям.
 * Для каждой категории создаём отдельную группу тестов (test.describe).
 * Это помогает красиво структурировать репорты.
 */
CATEGORIES.forEach(({ label, value, icons }) => {
  test.describe(`${label} icons`, () => {
    test(`${label} story`, async ({ page }) => {
      test.setTimeout(600_000);
      await page.goto(ICONS_STORY_PATH, { waitUntil: 'networkidle' });

      /**
       * Для каждой иконки добавляем отдельный шаг.
       * Пример шага: icon: bank/Akbars Bank
       *
       * Каждый шаг:
       *   - находит SVG по data-testid
       *   - ждёт её появления
       *   - делает скрин конкретной SVG
       *   - сравнивает со snapshot-файлом
       */
      for (const { name } of icons) {
        const testId = getIconTestId(value, name);
        const iconLocator = page.getByTestId(testId);

        await test.step(`icon: ${value}/${name}`, async () => {
          /**
           * Сначала убеждаемся, что иконка появилась в DOM и попала в вьюпорт,
           * иначе Playwright может сделать скрин пустой области.
           */
          await iconLocator.waitFor({ state: 'visible' });
          await iconLocator.scrollIntoViewIfNeeded();

          /**
           * Сравниваем скриншот контейнера с эталоном.
           * Файл будет сохранён по пути:
           *   __screenshots__/<value>/<name>.png
           *
           * maxDiffPixelRatio = 0.01 означает,
           * что тест падает, если 1% пикселей или больше изменились.
           */
          await expect.soft(iconLocator).toHaveScreenshot([value, `${name}.png`], {
            maxDiffPixelRatio: 0.01, // чувствительность к "крупным изменениям"
          });
        });
      }
    });
  });
});
