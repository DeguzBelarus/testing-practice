const mapArrToString = require("./mapArrToString");

// test("Value validation", () => {
//   expect(validateValue(50)).toBe(true);
// });

describe("mapArrToString", () => {
  test("correct value", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("mixture", () => {
    expect(mapArrToString([1, 2, 3, null, undefined, "assasas"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("empty array", () => {
    expect(mapArrToString([])).toEqual([]);
  });

  test("Отрицание", () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
