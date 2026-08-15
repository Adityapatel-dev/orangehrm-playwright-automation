import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  private readonly page: Page;

  private readonly profileMenu: Locator;
  private readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.profileMenu = page.locator('.oxd-userdropdown-tab');

    this.logoutLink = page.getByRole('menuitem', {
      name: 'Logout',
    });
  }

  async openProfileMenu(): Promise<void> {
    await this.profileMenu.click();
  }

  async logout(): Promise<void> {
    await this.openProfileMenu();

    await this.logoutLink.click();
  }
}