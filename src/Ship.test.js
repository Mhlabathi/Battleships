const { ship } = require('./Ship.js');

test('Build Ship of size 3', () => {
    expect(ship(3).isSunk()).toBe(false);
})