import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import { userSchema } from '../../schemas/user.schema';

test(
  'API response matches user schema @api @schema',
  async () => {
    const responseBody = {
      id: 101,
      name: 'Aditya',
    };

    const ajv = new Ajv();

    const validate = ajv.compile(userSchema);
    const valid = validate(responseBody);

    console.log('Schema valid:', valid);
    console.log('Schema errors:', validate.errors);

    expect(valid).toBeTruthy();
  }
);
test(
  'Invalid API response fails schema validation @api @schema @negative',
  async () => {
    const responseBody = {
      id: '101',
      name: 'Aditya',
    };

    const ajv = new Ajv();

    const validate = ajv.compile(userSchema);
    const valid = validate(responseBody);

    console.log('Schema valid:', valid);
    console.log('Schema errors:', validate.errors);

    expect(valid).toBeFalsy();
  }
);