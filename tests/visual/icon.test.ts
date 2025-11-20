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
 * - icons: список иконок в этой категории + относительный путь
 */
type CategoryConfig = {
  label: string;
  value: (typeof ICON_CATEGORY_CONFIG)[number]['value'];
  icons: Array<IconMeta & { relativePath: string }>;
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
 * На выходе каждая иконка получает дополнительное поле "relativePath",
 * которое нужно для корректной загрузки SVG на HTML-странице рендера.
 *
 * Например:
 *   path: "build/bank/Akbars Bank.svg"
 *   relativePath -> "bank/Akbars Bank.svg"
 *
 * Это критично, потому что renderer.html ожидает пути БЕЗ "build/".
 */
const getIcons = (category: CategoryConfig['value']): CategoryConfig['icons'] => {
  return (METADATA[category] ?? []).map((iconMeta) => ({
    ...iconMeta,
    // убираем префикс "build/" из пути (делаем путь относительным)
    relativePath: iconMeta.path.replace(/^build\//, ''),
  }));
};

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

/**
 * Основной цикл по категориям.
 * Для каждой категории создаём отдельную группу тестов (test.describe).
 * Это помогает красиво структурировать репорты.
 */
CATEGORIES.forEach(({ label, value, icons }) => {
  test.describe(`${label} icons`, () => {
    /**
     * Для каждой иконки создаём отдельный тест.
     * Пример названия: icon: bank/Akbars Bank
     *
     * Каждый тест:
     *   - открывает HTML-рендер с параметром "?icon=relativePath"
     *   - ждёт появления SVG в DOM
     *   - делает скрин контейнера
     *   - сравнивает со snapshot-файлом
     */
    icons.forEach(({ name, relativePath }) => {
      test(`icon: ${value}/${name}`, async ({ page }) => {
        // Загружаем renderer.html и передаём путь к SVG
        await page.goto(`http://localhost:3000/tests/visual/renderer.html?icon=${relativePath}`);

        /**
         * Ждем появления SVG в DOM.
         * Состояние "attached" означает, что узел добавлен в DOM,
         * но не обязательно видимый — этого достаточно для рендера.
         */
        await page.waitForSelector('#icon-container svg', { state: 'attached' });

        // Локатор контейнера, содержащего единственную SVG
        const element = page.locator('#icon-container');

        /**
         * Сравниваем скриншот контейнера с эталоном.
         * Файл будет сохранён по пути:
         *   __screenshots__/<value>/<name>.png
         *
         * maxDiffPixelRatio = 0.01 означает,
         * что тест падает, если 1% пикселей или больше изменились.
         */
        await expect(element).toHaveScreenshot([value, `${name}.png`], {
          maxDiffPixelRatio: 0.01, // чувствительность к "крупным изменениям"
        });
      });
    });
  });
});
