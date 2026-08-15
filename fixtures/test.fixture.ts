import { test as base, expect, Page } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { loginData } from '../data/LoginData';


type TestFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  authenticatedPage: Page;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);

    await use(dashboardPage);
  },

  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await page.goto('/web/index.php/auth/login', {
      waitUntil: 'commit',
    });

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await page.waitForURL(/dashboard/);

    await use(page);
  },
});

export { expect };