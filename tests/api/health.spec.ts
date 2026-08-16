import { test, expect } from '../../fixtures/api.fixture';
import { apiData } from '../../data/apiData';

test(
  'Dashboard shortcuts API returns valid response @api @functional',
  async ({ apiClient, apiBaseUrl }) => {
    const response = await apiClient.get(
      `${apiBaseUrl}${apiData.endpoints.dashboardShortcuts}`
    );

    console.log('Status:', response.status());

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    expect(
      response.headers()['content-type']
    ).toContain('application/json');

    const responseBody = await response.json();

    expect(responseBody).toBeDefined();
  }
);

test(
  'Invalid API endpoint returns 404 @api @negative',
  async ({ apiClient, apiBaseUrl }) => {
    const response = await apiClient.get(
      `${apiBaseUrl}/web/index.php/api/v2/invalid-endpoint`
    );

    console.log('Status:', response.status());

    expect(response.status()).toBe(404);
  }
);