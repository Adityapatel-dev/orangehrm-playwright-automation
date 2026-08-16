import {
  test as base,
  expect,
  APIRequestContext,
} from '@playwright/test';

type ApiFixtures = {
  apiClient: APIRequestContext;
  apiBaseUrl: string;
};

export const test = base.extend<ApiFixtures>({
  apiBaseUrl: async ({}, use) => {
    const apiBaseUrl = process.env.API_BASE_URL;

    if (!apiBaseUrl) {
      throw new Error(
        'API_BASE_URL is not defined in .env'
      );
    }

    await use(apiBaseUrl);
  },

  apiClient: async ({ playwright }, use) => {
    const apiBaseUrl = process.env.API_BASE_URL;

    if (!apiBaseUrl) {
      throw new Error(
        'API_BASE_URL is not defined in .env'
      );
    }

    const requestContext =
      await playwright.request.newContext({
        baseURL: apiBaseUrl,
        storageState: 'playwright/.auth/user.json',
        extraHTTPHeaders: {
          Accept: 'application/json',
        },
      });

    await use(requestContext);

    await requestContext.dispose();
  },
});

export { expect };