import { test, expect } from '../../fixtures/api.fixture';

test(
  'Invalid API endpoint returns 404 @api @negative',
  async ({ apiClient, apiBaseUrl }) => {
    const response = await apiClient.get(
      `${apiBaseUrl}/web/index.php/api/v2/does-not-exist`
    );

    expect(response.status()).toBe(404);
  }
);

test(
  'Dashboard shortcuts API is accessible without authentication @api @functional',
  async ({ playwright, apiBaseUrl }) => {
    const unauthenticatedClient =
      await playwright.request.newContext({
        baseURL: apiBaseUrl,
      });

    const response = await unauthenticatedClient.get(
      '/web/index.php/api/v2/dashboard/shortcuts'
    );

    console.log(
      'Unauthenticated status:',
      response.status()
    );

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    await unauthenticatedClient.dispose();
  }
);