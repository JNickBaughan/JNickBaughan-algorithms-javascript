const reverseString = require("./index");

test("reverseStringBruteForce works", () => {
  const expected = "tset";
  const actual = reverseString.reverseStringBruteForce("test");
  expect(actual).toEqual(expected);
});

test("reverseString works", () => {
  const expected = "tset";
  const actual = reverseString.reverseString("test");
  expect(actual).toEqual(expected);
});
