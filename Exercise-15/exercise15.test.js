const balanceAdd = require('./exercise15.js')

test('Find the balance at the beginning of the array (index = 0)', () => {
  let array= [28,2,3,10,13];
  expect(balanceAdd(array)).toBe(0);
});

test('Find the balance at the middle of that array (index = 2)', () => {
  let array= [2,3,10,13,2];
  expect(balanceAdd(array)).toBe(2);
});

test('Find the balance at the end of that array (index = 3)', () => {
  let array= [2,3,10,13,28];
  expect(balanceAdd(array)).toBe(3);
});

test('There is no balance in the array (index = -1)', () => {
  let array= [1,2,3,4,9,9,2,7,10,12];
  expect(balanceAdd(array)).toBe(-1);
});
