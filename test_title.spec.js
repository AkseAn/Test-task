const { test, expect } = require('@playwright/test');

test('Проверка заголовка страницы Playwright', async ({ page }) => {
  // Открытие веб-страницы
  await page.goto('https://playwright.dev/');

  // Проверка заголовка страницы
  await expect(page).toHaveTitle(/Playwright/);
});