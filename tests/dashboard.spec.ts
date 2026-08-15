import { test, expect } from '../fixtures/test.fixture';

test.setTimeout(60_000);

test(
  'Authenticated user can access dashboard @smoke @functional',
  async ({ page }) => {
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
  }
);