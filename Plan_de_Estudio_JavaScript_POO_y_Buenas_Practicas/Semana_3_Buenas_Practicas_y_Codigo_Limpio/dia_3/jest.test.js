const sumArr = require("./dia_3");

test("deberia devolver la suma de un arr de numero", () => {
  expect(sumArr([1, 5, 8, 3, 6])).toBe(23);
  expect(sumArr([1, 1, 1, 1, 1])).toBe(5);
  expect(sumArr([1, 20, 100, 3, 80])).toBe(204);
});

test("deberia devolver 0 para un arr vacio", () => {
  expect(sumArr([])).toBe(0);
});

test("deberia funcionar con numero negativos", () => {
  expect(sumArr([-5, -1, -7, -9])).toBe(-22);
});



