import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('BEFORE ALL');
});

test.beforeEach(async ({ page }) => {
  console.log('BEFORE EACH');
  await page.goto('https://example.com');
});

test.afterEach(async ({ page }) => {
  console.log('AFTER EACH');
  await page.close();
});

test.afterAll(async () => {
  console.log('AFTER ALL');
});

test('Hook test 1 @hooks', async ({ page }) => {
  await expect(page).toHaveTitle(/Example Domain/);
});

test('Hook test 2 @hooks', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('Example Domain');
});