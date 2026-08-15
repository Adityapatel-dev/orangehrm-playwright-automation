import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly header: DashboardHeader;

  constructor(page: Page) {
    super(page);

    this.header = new DashboardHeader(page);
  }

  async isDisplayed(): Promise<boolean> {
    return await this.header.dashboardHeading.isVisible();
  }
}

class DashboardHeader {
  readonly dashboardHeading: Locator;
  private readonly profileMenu: Locator;
  private readonly logoutButton: Locator;

  constructor(page: Page) {
    this.dashboardHeading = page.getByRole('heading', {
      name: 'Dashboard',
    });

    this.profileMenu = page.locator('.oxd-userdropdown-tab');

    this.logoutButton = page.getByRole('menuitem', {
      name: 'Logout',
    });
  }

  async logout(): Promise<void> {
    await this.profileMenu.click();
    await this.logoutButton.click();
  }
}