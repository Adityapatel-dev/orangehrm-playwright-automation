import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type TestFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  authenticatedPage: Page;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  authenticatedPage: async ({ page }, use) => {
    await page.goto('/web/index.php/dashboard/index', {
      waitUntil: 'domcontentloaded',
      timeout: 60_000,
    });

    await expect(page).toHaveURL(/dashboard/, {
      timeout: 30_000,
    });

    await expect(
      page.getByRole('heading', {
        name: 'Dashboard',
      })
    ).toBeVisible({
      timeout: 30_000,
    });

    await use(page);
  },
});

export { expect };