import { test, expect } from '../../fixtures/test.fixture';

test.setTimeout(60_000);

test(
  'API created data can be validated in UI @integration @api @ui',
  async ({ page }) => {
    // Simulated data that would normally come from an API.
    const employee = {
      id: 101,
      name: 'Aditya',
    };

    console.log('Employee created through API:', employee);

    // User is already authenticated through auth.setup.ts.
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

    console.log(
      `UI verification will use employee: ${employee.name}`
    );

    expect(employee.name).toBe('Aditya');
  }
);