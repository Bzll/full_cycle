const sum = require('./sum');

test("add 23 + 31 to be equal 54",() => {
    expect(sum(23,31)).toBe(54);
});