import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  private readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(endpoint: string): Promise<APIResponse> {
    return await this.request.get(endpoint);
  }

  async post(
    endpoint: string,
    data?: unknown
  ): Promise<APIResponse> {
    return await this.request.post(endpoint, {
      data,
    });
  }

  async put(
    endpoint: string,
    data?: unknown
  ): Promise<APIResponse> {
    return await this.request.put(endpoint, {
      data,
    });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return await this.request.delete(endpoint);
  }
}