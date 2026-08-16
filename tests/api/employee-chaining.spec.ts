import { test, expect } from '../../fixtures/api.fixture';
import { apiData } from '../../data/apiData';

test(
  'API request chaining with authenticated client @api @chaining',
  async ({ apiClient, apiBaseUrl }) => {
    const employee = {
      firstName: 'Aditya',
      middleName: 'Test',
      lastName: `User${Date.now()}`,
    };

    const createResponse = await apiClient.post(
      `${apiBaseUrl}${apiData.endpoints.employees}`,
      {
        data: employee,
      }
    );

    expect(createResponse.ok()).toBeTruthy();

    const createBody = await createResponse.json();

    const employeeId = createBody.data?.empNumber;

    expect(employeeId).toBeDefined();

    console.log('Created employee ID:', employeeId);

    const getResponse = await apiClient.get(
      `${apiBaseUrl}${apiData.endpoints.employees}/${employeeId}`
    );

    expect(getResponse.ok()).toBeTruthy();

    const employeeBody = await getResponse.json();

    expect(employeeBody).toBeDefined();
  }
);