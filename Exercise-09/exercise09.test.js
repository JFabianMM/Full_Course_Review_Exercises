const flattenIterative = require('./exercise09.js');
const flattenRecursive = require('./exercise09.js');

let array= [1,2,3,[4,5,[6,[[7]],8]],[9,10]];

test( 'Iterative version input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]], result = [1,2,3,4,5,6,7,8,9,10]', () => {
  expect(flattenIterative(array)).toMatchObject(
    [1, 2, 3, 4,  5,6, 7, 8, 9, 10]);
});

test( 'Recursive version input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]] result = [1,2,3,4,5,6,7,8,9,10]', () => {
  expect(flattenRecursive(array)).toMatchObject(
    [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]);
});



