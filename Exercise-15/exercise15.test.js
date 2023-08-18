const balanceAdd = require('./exercise15.js')

let array= [1,2,3,4,9,9,2,7,10,13];
test('Balanced add of array [1,2,3,4,9,9,2,7,10,13] is index = 6', () => {
  expect(balanceAdd(array)).toBe(6);
});

let array2= [1,2,3,4,9,9,2,7,10,12];
test('Balanced add of array [1,2,3,4,9,9,2,7,10,12] is index = -1', () => {
  expect(balanceAdd(array2)).toBe(-1);
});

let array3= [1,2,3,4,9,9,2,1,1,7,10,15];
test('Balanced add of array [1,2,3,4,9,9,2,1,1,7,10,15] is index = 8', () => {
  expect(balanceAdd(array3)).toBe(8);
});

