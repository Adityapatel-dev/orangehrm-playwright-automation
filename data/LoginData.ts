export interface LoginCredentials {
  username: string;
  password: string;
}

export const loginData = {
  validUser: {
    username: process.env.TEST_USERNAME ?? '',
    password: process.env.TEST_PASSWORD ?? '',
  } satisfies LoginCredentials,

  invalidPassword: {
    username: process.env.TEST_USERNAME ?? '',
    password: 'wrongPassword',
  } satisfies LoginCredentials,
};