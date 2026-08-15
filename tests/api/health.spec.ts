import { test, expect } from '@playwright/test';

test(
  'OrangeHRM API endpoint is reachable @api @smoke',
  async ({ request }) => {
    const response = await request.get(
      '/web/index.php/api/v2/dashboard/shortcuts'
    );

    console.log('Status:', response.status());

    expect(response.ok()).toBeTruthy();
  }
);