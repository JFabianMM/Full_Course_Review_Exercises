const isSameLevel = require('./exercise13.js')

let array= [1,2,3,[4,5,[6,[7],8]],[9,10]];
console.log(isSameLevel(array, 1,1));
 
test( 'symmetricCheck bTree = true', () => {
  expect(isSameLevel(array,1,1)).toBe(false);
});

test( 'symmetricCheck bTree = false', () => {
  expect(isSameLevel(array,1,4)).toBe(false);
});

test( 'symmetricCheck bTree = false', () => {
  expect(isSameLevel(array,6,8)).toBe(true);
});