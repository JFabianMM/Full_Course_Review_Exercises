const reverseBlocks = require('./exercise05.js')

test('The function reverseBlocks will reverse the array [0,1,2,3,4,5] each block of 2 elements. Expected= [1,0,3,2,5,4]', () => {
  const arr = [0,1,2,3,4,5];
  const blockSize = 2;  
  expect(reverseBlocks(arr, blockSize)).toMatchObject([1,0,3,2,5,4]);
});

test('The function reverseBlocks will reverse the array [0,1,2,3,4,5] each block of 3 elements. Expected= [2,1,0,5,4,3]', () => {
  const arr2 = [0,1,2,3,4,5];
  const blockSize2 = 3;
  expect(reverseBlocks(arr2, blockSize2)).toMatchObject([2,1,0,5,4,3]);
});


