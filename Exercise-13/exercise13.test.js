const isSameLevel = require('./exercise13.js')

const array = '(1,2,3,(4,5,(6,(7),8,)),(9,10))'; 
 
test('Input (1,2,3,(4,5,(6,(7),8,)),(9,10)) with numbers 1 and 1. Same level = false', () => {
  expect(isSameLevel(array,1,1)).toBe(false);
});

test('Input (1,2,3,(4,5,(6,(7),8,)),(9,10)) with numbers 1 and 4. Same level = false', () => {
  expect(isSameLevel(array,1,4)).toBe(false);
});

test('Input (1,2,3,(4,5,(6,(7),8,)),(9,10)) with numbers 6 and 8. Same level = true', () => {
  expect(isSameLevel(array,6,8)).toBe(true);
});

test('Input (1,2,3,(4,5,(6,(7),8,)),(9,10)) with numbers 4 and 10. Same level = true', () => {
  expect(isSameLevel(array,4,10)).toBe(true);
});

test('Input (1,2,3,(4,5,(6,(7),8,)),(9,10)) with numbers 1 and 10. Same level = false', () => {
  expect(isSameLevel(array,1,10)).toBe(false);
});