const factorials = require("./index");

test("find factors with recusion", () => {
  const expected = 6;
  const actual = factorials.factorialWithRecursion(3);
  expect(actual).toEqual(expected);
});

test("find factors with recusion", () => {
  const expected = 24;
  const actual = factorials.factorialWithRecursion(4);
  expect(actual).toEqual(expected);
});

test("find factors with for loop", () => {
  const expected = 24;
  const actual = factorials.factorialWithFor(4);
  expect(actual).toEqual(expected);
});
