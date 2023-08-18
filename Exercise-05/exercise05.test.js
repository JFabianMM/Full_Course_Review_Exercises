const reverseBlocks = require('./exercise05.js')

const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const blockSize = 4;

test('Block [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], block size =4. Expected= [3,2,1,0,7,6,5,4,11,10,9,8,15,14,13,12]', () => {
  expect(reverseBlocks(arr, blockSize)).toMatchObject([
    3,  2,  1,  0, 7, 6,
    5,  4, 11, 10, 9, 8,
   15, 14, 13, 12
  ]);
});

const arr2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const blockSize2 = 3;

test('Block [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], block size =3. Expected= [2,1,0,5,4,3,8,7,6,11,10,9,14,13,12,15]', () => {
   expect(reverseBlocks(arr2, blockSize2)).toMatchObject([
   2,  1,  0,  5,  4, 3,
   8,  7,  6, 11, 10, 9,
  14, 13, 12, 15
]);
});

const arr3 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const blockSize3 = 6;

test('Block [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], block size =6. Expected= [5,4,3,2,1,0,11,10,9,8,7,6,15,14,13,12]', () => {
   expect(reverseBlocks(arr3, blockSize3)).toMatchObject([
   5,    4,  3,  2,  1, 0,
   11,  10,  9,  8,  7, 6,
   15,  14, 13, 12
]);
});

