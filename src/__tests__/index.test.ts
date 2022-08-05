import { deepCompare } from "../index";

describe("expect false value", () => {
  test("number and boolean are not equal", () => {
    expect(
      deepCompare({ a: "something", b: 2 }, { a: "something", b: false })
    ).toBe(false);
  });

  test("array of numbers and boolean are not equal ", () => {
    expect(
      deepCompare(
        { a: "something", b: { a: "something", c: { arr: [1, 2, 3] } } },
        { a: "something", b: { a: "something", c: { bool: false } } }
      )
    ).toBe(false);
  });
});

describe("expect true value", () => {
  test("object a and b are equal ", () => {
    expect(
      deepCompare(
        {
          a: "something",
          b: { a: "something", c: { arr: [1, 2, 3] } },
          c: {
            a: "something",
            b: {
              a: "something",
              c: { bool: false },
              d: { a: "something", b: { a: "something", c: { bool: false } } },
            },
          },
        },
        {
          a: "something",
          b: { a: "something", c: { arr: [1, 2, 3] } },
          c: {
            a: "something",
            b: {
              a: "something",
              c: { bool: false },
              d: { a: "something", b: { a: "something", c: { bool: false } } },
            },
          },
        }
      )
    ).toBe(true);
  });
  test(`equal objects (different properties "order")`, () => {
    expect(deepCompare({ a: 1, b: "2" }, { b: "2", a: 1 })).toBe(true);
  });
});
