import { test as base, expect } from '@playwright/test';
import { ApiClient } from '../utils/ApiClient';

type ApiFixtures = {
  apiBaseUrl: string;
  apiClient: ApiClient;
};

export const test = base.extend<ApiFixtures>({
  apiBaseUrl: async ({ baseURL }, use) => {
    if (!baseURL) {
      throw new Error('BASE_URL is not configured.');
    }

    await use(baseURL);
  },

  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(request);

    await use(apiClient);
  },
});

export { expect };