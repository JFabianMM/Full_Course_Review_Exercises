const {flattenIterative, flattenRecursive} = require('./exercise09.js');

test('Flatten function (iterative version) will flat the array input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]] with result = [1,2,3,4,5,6,7,8,9,10]', () => {
  let array= [1,2,3,[4,5,[6,[[7]],8]],[9,10]];
  expect(flattenIterative(array)).toMatchObject([1,2,3,4,5,6,7,8,9,10]);
});

test('Flatten function (recursive version) will flat the array input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]] with result = [1,2,3,4,5,6,7,8,9,10]', () => {
  let array= [1,2,3,[4,5,[6,[[7]],8]],[9,10]];
  expect(flattenRecursive(array)).toMatchObject([1,2,3,4,5,6,7,8,9,10]);
});



