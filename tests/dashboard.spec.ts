import { test, expect } from '../fixtures/test.fixture';

test(
  'Authenticated user can access dashboard @smoke @functional',
  async ({ page }) => {
    await page.goto('/web/index.php/dashboard/index');

    await expect(page).toHaveURL(/dashboard/);

    await expect(
      page.getByRole('heading', {
        name: 'Dashboard',
      })
    ).toBeVisible();
  }
);