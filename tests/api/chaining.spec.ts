import { test, expect } from '@playwright/test';
import http from 'http';

test(
  'API request chaining @api @chaining',
  async ({ request }) => {
    const server = http.createServer((req, res) => {
      res.setHeader('Content-Type', 'application/json');

      if (req.method === 'POST' && req.url === '/mock/users') {
        res.statusCode = 201;

        res.end(
          JSON.stringify({
            id: 101,
            name: 'Aditya',
          })
        );

        return;
      }

      if (req.method === 'GET' && req.url === '/mock/users/101') {
        res.statusCode = 200;

        res.end(
          JSON.stringify({
            id: 101,
            name: 'Aditya',
          })
        );

        return;
      }

      res.statusCode = 404;
      res.end(JSON.stringify({ message: 'Not Found' }));
    });

    await new Promise<void>((resolve) => {
      server.listen(0, '127.0.0.1', () => resolve());
    });

    const address = server.address();

    if (!address || typeof address === 'string') {
      throw new Error('Could not start mock server');
    }

    const baseURL = `http://127.0.0.1:${address.port}`;

    try {
      // API 1
      const createResponse = await request.post(
        `${baseURL}/mock/users`,
        {
          data: {
            name: 'Aditya',
          },
        }
      );

      expect(createResponse.status()).toBe(201);

      const createBody = await createResponse.json();

      // Extract ID from API 1
      const userId = createBody.id;

      expect(userId).toBe(101);

      console.log('Created User ID:', userId);

      // API 2 uses ID from API 1
      const getResponse = await request.get(
        `${baseURL}/mock/users/${userId}`
      );

      expect(getResponse.status()).toBe(200);

      const userBody = await getResponse.json();

      expect(userBody.id).toBe(userId);
      expect(userBody.name).toBe('Aditya');
    } finally {
      await new Promise<void>((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    }
  }
);