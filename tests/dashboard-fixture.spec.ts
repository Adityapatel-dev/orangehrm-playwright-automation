import { test, expect } from '../fixtures/test.fixture';

test(
  'Authenticated user can use dashboard fixture @smoke @fixture',
  async ({ authenticatedPage }) => {
    await expect(
      authenticatedPage.getByRole('heading', {
        name: 'Dashboard',
      })
    ).toBeVisible();
  }
);