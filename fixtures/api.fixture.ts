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
    await use('https://opensource-demo.orangehrmlive.com');
  },

  apiClient: async ({ playwright }, use) => {
    const requestContext =
      await playwright.request.newContext({
        baseURL: 'https://opensource-demo.orangehrmlive.com',
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