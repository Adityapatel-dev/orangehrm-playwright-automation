import { test as base, expect } from '@playwright/test';

type ApiFixtures = {
  apiBaseUrl: string;
};

export const test = base.extend<ApiFixtures>({
  apiBaseUrl: async ({ baseURL }, use) => {
    if (!baseURL) {
      throw new Error('BASE_URL is not configured.');
    }

    await use(baseURL);
  },
});

export { expect };