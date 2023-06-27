const balanceAdd = require('./exercise15.js')

let array= [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];
 
test( 'balanced add index = 6', () => {
  expect(balanceAdd(array)).toBe(6);
});

let array2= [1, 2, 3, 4, 9, 9, 2, 7, 10, 12];
 
test( 'balanced add index = -1', () => {
  expect(balanceAdd(array2)).toBe(-1);
});