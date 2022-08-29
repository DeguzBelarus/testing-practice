const Page = require("./page");

class UsersPage extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }

  get userItems() {
    //  return browser.react$$("User");
    return $$(".user-item");
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error("Не удалось загрузить пользователей");
    }
  }

  async deleteUser() {
    try {
      const usersCount = await this.userItems.length;
      if (!usersCount) {
        throw new Error("Пользователи не найдены");
      }

      await this.userItems[0].$("#user-delete-btn").click();
      const usersCountAfterDeletion = await this.userItems.length;
      if (usersCount - usersCountAfterDeletion !== 1) {
        throw new Error(
          "Удаление не произошло или удалился более чем 1 пользователь"
        );
      }
    } catch (e) {
      throw new Error("Не удалось удалить пользователя." + e.message);
    }
  }

  open() {
    return super.open("/users");
  }
}

module.exports = new UsersPage();
