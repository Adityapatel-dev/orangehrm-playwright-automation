import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.setTimeout(60_000);

test.beforeEach(async ({ page }) => {
  await page.goto('/web/index.php/auth/login', {
    waitUntil: 'domcontentloaded',
  });

  await expect(page.locator('input[name="username"]')).toBeVisible({
    timeout: 30_000,
  });
});

test(
  'User can login with valid credentials @smoke @functional',
  async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/);
  }
);

test(
  'User cannot login with invalid password @negative @functional',
  async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('Admin', 'wrongPassword');

    await expect(page).not.toHaveURL(/dashboard/);
  }
);