import { test, expect } from '../fixtures/test.fixture';

test(
  'Authenticated user can access dashboard @smoke @functional',
  async ({ authenticatedPage }) => {
    await expect(authenticatedPage).toHaveURL(/dashboard/);

    await expect(
      authenticatedPage.getByRole('heading', {
        name: 'Dashboard',
      })
    ).toBeVisible();
  }
);