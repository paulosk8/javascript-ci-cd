const sum = require('./index');
test('Suma los valores 4 + 4 es igual a 8', () => {
  expect(sum(4, 4)).toBe(8);
});