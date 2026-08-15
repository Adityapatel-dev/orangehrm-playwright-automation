import { test, expect } from '../../fixtures/api.fixture';
import { apiData } from '../../data/apiData';

test(
  'OrangeHRM API endpoint is reachable @api @smoke',
  async ({ apiClient, apiBaseUrl }) => {
    const response = await apiClient.get(
      `${apiBaseUrl}${apiData.endpoints.dashboardShortcuts}`
    );

    console.log('Status:', response.status());

    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();

    console.log('Response:', responseBody);

    expect(responseBody).toBeDefined();
  }
);