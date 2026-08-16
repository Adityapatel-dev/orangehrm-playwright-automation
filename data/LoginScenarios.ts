export interface LoginScenario {
  name: string;
  username: string;
  password: string;
  shouldLogin: boolean;
}

export const loginScenarios: LoginScenario[] = [
  {
    name: 'Valid credentials',
    username: 'Admin',
    password: 'admin123',
    shouldLogin: true,
  },
  {
    name: 'Invalid password',
    username: 'Admin',
    password: 'wrongPassword',
    shouldLogin: false,
  },
  {
    name: 'Invalid username',
    username: 'WrongUser',
    password: 'admin123',
    shouldLogin: false,
  },
];