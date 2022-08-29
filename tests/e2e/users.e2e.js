const UsersPage = require("../pages/users.page");

describe("Users page", () => {
  it("load data", async () => {
    await UsersPage.loadData();
  });

  it("user deletion", async () => {
    await UsersPage.loadData();
    await UsersPage.deleteUser();
  });
});
