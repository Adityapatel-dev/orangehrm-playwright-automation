import { test, expect } from '../fixtures/test.fixture';

test.setTimeout(60_000);

test(
  'User can logout successfully @smoke @functional',
  async ({ page, loginPage, dashboardPage }) => {
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

    await dashboardPage.isDisplayed();

    await dashboardPage.header.logout();

    await expect(
      page.locator('input[name="username"]')
    ).toBeVisible({
      timeout: 30_000,
    });
  }
);