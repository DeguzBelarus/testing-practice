const square = require("./square");

describe("square", () => {
  // перед каждым
  beforeEach(() => {
    // добавить что-то в БД
  });

  // один раз перед всеми
  beforeAll(() => {});

  test("correct value", () => {
    //  expect(square(2)).toBe(4);
    //  expect(square(2)).toBeLessThan(5);
    //  expect(square(2)).toBeGreaterThan(3);
    //  expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  // после каждого каждым
  afterEach(() => {
    jest.clearAllMocks();
    // удалить то что добавилили перед тестом из БД
  });

  // один раз после всех
  afterAll(() => {
    // общие очищающие действия
  });
});
