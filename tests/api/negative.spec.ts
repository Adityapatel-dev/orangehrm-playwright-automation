import { test, expect } from '../../fixtures/api.fixture';
import { apiData } from '../../data/apiData';

test(
  'Invalid API endpoint returns 404 @api @negative',
  async ({ apiClient, apiBaseUrl }) => {
    const response = await apiClient.get(
      `${apiBaseUrl}${apiData.endpoints.invalidEndpoint}`
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
      apiData.endpoints.dashboardShortcuts
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