import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { HeaderComponent } from '../components/HeaderComponent';

export class DashboardPage extends BasePage {
  readonly header: HeaderComponent;

  private readonly dashboardHeading: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new HeaderComponent(page);

    this.dashboardHeading = page.getByRole('heading', {
      name: 'Dashboard',
    });
  }

  async isDisplayed(): Promise<void> {
    await this.dashboardHeading.waitFor();
  }
}