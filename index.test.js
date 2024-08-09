const sum = require('./index');
test('Suma los valores 4 + 3 es igual a 7', () => {
  expect(sum(4, 3)).toBe(7);
});