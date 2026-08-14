import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.setTimeout(60_000);

test('User can logout successfully @smoke @functional', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/web/index.php/auth/login', {
    waitUntil: 'commit',
  });

  await expect(
    page.locator('input[name="username"]')
  ).toBeVisible({
    timeout: 30_000,
  });

  await loginPage.login('Admin', 'admin123');

  await expect(page).toHaveURL(/dashboard/);

  const dashboardPage = new DashboardPage(page);

  await dashboardPage.isDisplayed();

  await dashboardPage.header.logout();

  await expect(
    page.locator('input[name="username"]')
  ).toBeVisible({
    timeout: 30_000,
  });
});