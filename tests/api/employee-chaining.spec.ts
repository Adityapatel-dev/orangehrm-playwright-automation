import { test, expect } from '../../fixtures/api.fixture';

test(
  'API request chaining with authenticated client @api @chaining',
  async ({ apiClient, apiBaseUrl }) => {
    const employee = {
      firstName: 'Aditya',
      middleName: 'Test',
      lastName: `User${Date.now()}`,
    };

    // API 1: Create employee
    const createResponse = await apiClient.post(
      `${apiBaseUrl}/web/index.php/api/v2/pim/employees`,
      {
        data: employee,
      }
    );

    console.log(
      'Create employee status:',
      createResponse.status()
    );

    expect(createResponse.ok()).toBeTruthy();

    const createBody = await createResponse.json();

    expect(createBody).toBeDefined();

    const employeeId = createBody.data?.empNumber;

    expect(employeeId).toBeDefined();

    console.log('Created employee ID:', employeeId);

    // API 2: Get employee using ID from API 1
    const getResponse = await apiClient.get(
      `${apiBaseUrl}/web/index.php/api/v2/pim/employees/${employeeId}`
    );

    console.log(
      'Get employee status:',
      getResponse.status()
    );

    expect(getResponse.ok()).toBeTruthy();

    const employeeBody = await getResponse.json();

    expect(employeeBody).toBeDefined();

    console.log('Retrieved employee:', employeeBody);
  }
);