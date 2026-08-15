import { test as setup, expect } from '../fixtures/test.fixture';
import { loginData } from '../data/LoginData';


const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page, loginPage }) => {
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

  await page.waitForURL(/dashboard/);

  await expect(
    page.getByRole('heading', {
      name: 'Dashboard',
    })
  ).toBeVisible();

  await page.context().storageState({
    path: authFile,
  });
});