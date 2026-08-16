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
    baseURL: process.env.BASE_URL,

    // Normal UI tests use the authenticated session
    storageState: 'playwright/.auth/user.json',

    navigationTimeout: 60_000,

    actionTimeout: 30_000,

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',
  },

  projects: [
    // ==========================================
    // 1. AUTHENTICATION SETUP
    // ==========================================
    {
      name: 'setup',

      testMatch: /.*\.setup\.ts/,

      // Setup MUST start logged out
      use: {
        storageState: {
          cookies: [],
          origins: [],
        },
      },
    },

    // ==========================================
    // 2. CHROMIUM
    // ==========================================
    {
      name: 'chromium',

      testMatch: /.*\.spec\.ts/,

      use: {
        ...devices['Desktop Chrome'],
      },

      dependencies: ['setup'],
    },

    // ==========================================
    // 3. FIREFOX
    // ==========================================
    {
      name: 'firefox',

      testMatch: /.*\.spec\.ts/,

      use: {
        ...devices['Desktop Firefox'],
      },

      dependencies: ['setup'],
    },

    // ==========================================
    // 4. WEBKIT
    // ==========================================
    {
      name: 'webkit',

      testMatch: /.*\.spec\.ts/,

      use: {
        ...devices['Desktop Safari'],
      },

      dependencies: ['setup'],
    },

    // ==========================================
    // 5. SMOKE
    // ==========================================
    {
      name: 'smoke',

      testMatch: /.*\.spec\.ts/,

      grep: /@smoke/,

      use: {
        ...devices['Desktop Chrome'],
      },

      dependencies: ['setup'],
    },

    // ==========================================
    // 6. REGRESSION
    // ==========================================
    {
      name: 'regression',

      testMatch: /.*\.spec\.ts/,

      grep: /@functional/,

      use: {
        ...devices['Desktop Chrome'],
      },

      dependencies: ['setup'],
    },

    // ==========================================
    // 7. API
    // ==========================================
    {
      name: 'api',

      testMatch: /api\/.*\.spec\.ts/,

      use: {
        baseURL: process.env.API_BASE_URL,
      },
    },
  ],
});