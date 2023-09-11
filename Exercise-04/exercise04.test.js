const mergeArrays = require('./exercise04.js')

test('The function mergeArrays will merge in order the small array [0,2,4,6,8] into large array [1,3,5,7,9]. The result must be [0,1,2,3,4,5,6,7,8,9]', () => {
  const largeArray1 = [1,3,5,7,9].concat(new Array(5));
  const smallArray1= [0,2,4,6,8];
  expect(mergeArrays(largeArray1, smallArray1)).toMatchObject([0,1,2,3,4,5,6,7,8,9]);
});

test('The function mergeArrays will merge in order the small array [0,2,3,4,7,8] into large array [1,5,6,9,10,11]. The result must be [0,1,2,3,4,5,6,7,8,9,10,11]', () => {
  const largeArray2 = [1,5,6,9,10,11].concat(new Array(6));
  const smallArray2 = [0,2,3,4,7,8]; 
  expect(mergeArrays(largeArray2, smallArray2)).toMatchObject([0,1,2,3,4,5,6,7,8,9,10,11]);
});

test('The function mergeArrays will merge in order the small array [0,2,3,4,5,7,8,8] into large array [1,1,6,9,10,11,80]. The result must be [0,1,1,2,3,4,5,6,7,8,8,9,10,11,80]', () => {
  const largeArray3 = [1,1,6,9,10,11,80].concat(new Array(8));
  const smallArray3 = [0,2,3,4,5,7,8,8];  
  expect(mergeArrays(largeArray3, smallArray3)).toMatchObject([0,1,1,2,3,4,5,6,7,8,8,9,10,11,80]);
});
