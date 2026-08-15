import { test, expect } from '../fixtures/test.fixture';
import { loginData } from '../data/LoginData';

test.setTimeout(60_000);

test.beforeEach(async ({ page }) => {
  await page.goto('/web/index.php/auth/login', {
    waitUntil: 'commit',
  });

  await expect(
    page.locator('input[name="username"]')
  ).toBeVisible({
    timeout: 30_000,
  });
});

test(
  'User can login with valid credentials @smoke @functional',
  async ({ page, loginPage }) => {
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(/dashboard/);
  }
);

test(
  'User cannot login with invalid password @negative @functional',
  async ({ page, loginPage }) => {
    await loginPage.login(
      loginData.invalidPassword.username,
      loginData.invalidPassword.password
    );

    await expect(page).not.toHaveURL(/dashboard/);
  }
);