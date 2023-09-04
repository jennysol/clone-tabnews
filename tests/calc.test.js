const calc = require("../models/calc.js");

test("sum 2 + 2 to be 4", () => {
  const result = calc.sum(2, 2);
  expect(result).toBe(4);
});

test("sum 'banana' + 2 to be 'error'", () => {
  const result = calc.sum("banana", 2);
  expect(result).toBe("error");
});
