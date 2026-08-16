export interface ApiEndpoints {
  dashboardShortcuts: string;
  invalidEndpoint: string;
  employees: string;
}

export interface ApiTestData {
  endpoints: ApiEndpoints;
}

export const apiData: ApiTestData = {
  endpoints: {
    dashboardShortcuts:
      '/web/index.php/api/v2/dashboard/shortcuts',

    invalidEndpoint:
      '/web/index.php/api/v2/does-not-exist',

    employees:
      '/web/index.php/api/v2/pim/employees',
  },
};