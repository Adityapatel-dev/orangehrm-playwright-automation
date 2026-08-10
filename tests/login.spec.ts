import { test, expect } from '@playwright/test';

test(
  'User can login with valid credentials @smoke @functional',
  async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);
  }
);

test(
  'User cannot login with invalid password @negative @functional',
  async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('wrongPassword');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();
  }
);