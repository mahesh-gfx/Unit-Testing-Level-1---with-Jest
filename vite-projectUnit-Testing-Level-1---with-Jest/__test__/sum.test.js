const sum = require("../src/calc");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(0);
});

test("null", () => {
  expect(sum(0, 0)).toBeNull();
  expect(sum(1, 2)).toBeDefined();
  expect(sum()).not.toBeUndefined();
  expect(1 == 1).not.toBeTruthy();
  expect(1 == 0).toBeFalsy();
});
