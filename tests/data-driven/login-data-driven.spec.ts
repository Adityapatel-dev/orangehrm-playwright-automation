import { test, expect } from '../../fixtures/test.fixture';
import { loginScenarios } from '../../data/LoginScenarios';

test.use({
  storageState: {
    cookies: [],
    origins: [],
  },
});

test.setTimeout(60_000);

for (const scenario of loginScenarios) {
  test(
    `Login - ${scenario.name} @data-driven`,
    async ({ page, loginPage }) => {
      await page.goto('/web/index.php/auth/login', {
        waitUntil: 'domcontentloaded',
        timeout: 60_000,
      });

      await expect(
        page.getByPlaceholder('Username')
      ).toBeVisible({
        timeout: 30_000,
      });

      await loginPage.login(
        scenario.username,
        scenario.password
      );

      if (scenario.shouldLogin) {
        await expect(page).toHaveURL(/dashboard/, {
          timeout: 30_000,
        });
      } else {
        await expect(page).not.toHaveURL(/dashboard/, {
          timeout: 30_000,
        });
      }
    }
  );
}