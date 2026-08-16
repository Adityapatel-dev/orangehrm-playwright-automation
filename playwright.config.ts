import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['./reporters/CustomReporter.ts'],
  ],

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    // Normal tests use the authenticated session.
    storageState: 'playwright/.auth/user.json',

    navigationTimeout: 60_000,

    actionTimeout: 30_000,

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',
  },

  projects: [
    // Authentication setup MUST start logged out.
    {
      name: 'setup',

      testMatch: /.*\.setup\.ts/,

      use: {
        storageState: {
          cookies: [],
          origins: [],
        },
      },
    },

    // Chromium tests use the authenticated storage state.
    {
      name: 'chromium',

      testMatch: /.*\.spec\.ts/,

      use: {
        ...devices['Desktop Chrome'],
      },

      dependencies: ['setup'],
    },

    // Firefox tests use the authenticated storage state.
    {
      name: 'firefox',

      testMatch: /.*\.spec\.ts/,

      use: {
        ...devices['Desktop Firefox'],
      },

      dependencies: ['setup'],
    },

    // WebKit tests use the authenticated storage state.
    {
      name: 'webkit',

      testMatch: /.*\.spec\.ts/,

      use: {
        ...devices['Desktop Safari'],
      },

      dependencies: ['setup'],
    },
  ],
});