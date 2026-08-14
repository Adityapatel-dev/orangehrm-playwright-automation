import { Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async goBack(): Promise<void> {
    await this.page.goBack();
  }

  async reload(): Promise<void> {
    await this.page.reload();
  }
}