const balanceAdd = require('./exercise15.js')

test('Find the index of that array that balances the left and right sum. For the array [1,2,3,4,9,9,2,7,10,13] the index = 6', () => {
  let array= [1,2,3,4,9,9,2,7,10,13];
  expect(balanceAdd(array)).toBe(6);
});

test('Find the index of that array that balances the left and right sum. For the array [1,2,3,4,9,9,2,7,10,12] the index = -1', () => {
  let array= [1,2,3,4,9,9,2,7,10,12];
  expect(balanceAdd(array)).toBe(-1);
});


test('Find the index of that array that balances the left and right sum. For the array [1,2,3,4,9,9,2,1,1,7,10,15] the index = 8', () => {
  let array= [1,2,3,4,9,9,2,1,1,7,10,15];
  expect(balanceAdd(array)).toBe(8);
});

