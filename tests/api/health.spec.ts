import { test, expect } from '../../fixtures/api.fixture';
import { apiData } from '../../data/apiData';

test(
  'Dashboard shortcuts API returns valid response @api @functional',
  async ({ apiClient, apiBaseUrl }) => {
    const response = await apiClient.get(
      `${apiBaseUrl}${apiData.endpoints.dashboardShortcuts}`
    );

    // 1. Status code
    expect(response.status()).toBe(200);

    // 2. Response should be successful
    expect(response.ok()).toBeTruthy();

    // 3. Content-Type
    expect(response.headers()['content-type']).toContain(
      'application/json'
    );

    // 4. Response body
    const responseBody = await response.json();

    console.log('Response:', responseBody);

    expect(responseBody).toBeDefined();
  }
);