const mergeArrays = require('./exercise04.js')

// const largeArray = [1,3,5,7,9]
// const smallArray = [0,2,4,6,8];
const largeArray = [0,1,3,5,7,9];
const smallArray = [2,4,6,8];

test( 'mergeArrays(largeArray, smallArray)to equal array', () => {
  expect(mergeArrays(largeArray, smallArray)).toMatchObject([
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9
  ] );
});
