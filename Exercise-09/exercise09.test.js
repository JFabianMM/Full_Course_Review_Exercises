const flattenIterative = require('./exercise09.js')

let array= [1,2,3,[4,5,[6,[[7]],8]],[9,10]];

test( 'flattenIterative input = array', () => {
  expect(flattenIterative(array)).toMatchObject(
    [
      1, 2, 3, 4,  5,
      6, 7, 8, 9, 10
    ]);
});




