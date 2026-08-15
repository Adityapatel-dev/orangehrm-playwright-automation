export interface LoginCredentials {
  username: string;
  password: string;
}

export const loginData = {
  validUser: {
    username: 'Admin',
    password: 'admin123',
  } satisfies LoginCredentials,

  invalidPassword: {
    username: 'Admin',
    password: 'wrongPassword',
  } satisfies LoginCredentials,
};