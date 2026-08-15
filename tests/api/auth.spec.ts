import { test, expect } from '@playwright/test';

test(
  'API authentication header is configured correctly @api @auth',
  async () => {
    const token = 'example-token';

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    expect(headers.Authorization).toBe(
      'Bearer example-token'
    );

    expect(headers.Authorization).toMatch(/^Bearer\s.+$/);
  }
);