import { test, expect } from '../fixtures/test.fixture';
import { loginData } from '../data/LoginData';

test.use({
  storageState: { cookies: [], origins: [] },
});

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

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

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