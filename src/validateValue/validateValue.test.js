const validateValue = require("./validateValue");

// test("Value validation", () => {
//   expect(validateValue(50)).toBe(true);
// });

describe("validateValue", () => {
  test("correct value", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("value less than correct", () => {
    expect(validateValue(-1)).toBe(false);
  });

  test("value more than correct", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("min correct value", () => {
    expect(validateValue(0)).toBe(true);
  });

  test("max correct value", () => {
    expect(validateValue(100)).toBe(true);
  });
});
