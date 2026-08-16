import { test, expect } from '@playwright/test';
import { employeeData } from '../../data/EmployeeData';
import { createUniqueEmployeeData } from '../../utils/testData';

test(
  'Static employee test data is available @data',
  async () => {
    expect(employeeData.firstName).toBe('Aditya');
    expect(employeeData.middleName).toBe('Lalit');
    expect(employeeData.lastName).toBe('Patel');
  }
);

test(
  'Unique employee test data is generated @data',
  async () => {
    const employee = createUniqueEmployeeData();

    expect(employee.firstName).toBe('Aditya');
    expect(employee.middleName).toBe('Test');
    expect(employee.lastName).toMatch(/^User\d+$/);

    console.log('Generated employee:', employee);
  }
);