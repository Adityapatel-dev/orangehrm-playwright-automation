export function createUniqueEmployeeData() {
  const timestamp = Date.now();

  return {
    firstName: 'Aditya',
    middleName: 'Test',
    lastName: `User${timestamp}`,
  };
}