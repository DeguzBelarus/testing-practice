const HelloPage = require("../pages/hello.page");

describe("My hello world page", () => {
  it("should toggle", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput("hello");
    await expect(HelloPage.helloHeader).toBeExisting();
    await HelloPage.toggleBtn.click();
    await expect(HelloPage.helloHeader).not.toBeExisting();
  });

  it("should not toggle", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput("hell");
    await expect(HelloPage.helloHeader).not.toBeExisting();
  });
});
