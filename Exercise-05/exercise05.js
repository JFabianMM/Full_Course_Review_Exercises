// // **************************** //
// // Exercise 05
// // **************************** //

// 5. Write a function that will reverse N sized blocks of an array. (A11)

// const arr = [0,1,2,3,4,5,6,7,8,9];
// const blockSize = 3;
// reverseBlocks(arr, blockSize);

/**
* Expected result:
* [2,1,0,5,4,3,8,7,6,9]
*/

function reverseBlocks(arr, blockSize){
    const len = arr.length;
    let range=Math.floor(len/blockSize);
    if (len%blockSize>0){range++;}
    iterations=blockSize/2;
    for (let i=0; i<range; i++){
        let iPos=i*blockSize;
        let fPos=(i*blockSize-1)+blockSize;
        if (fPos>len-1){
            fPos=len-1;
            iterations=(fPos-iPos)/2;
        }
        for (let j=0; j<iterations; j++){
            [arr[iPos], arr[fPos]] = [arr[fPos], arr[iPos]]; 
            iPos++;
            fPos--;
        }
    }
   return arr 
}

module.exports = reverseBlocks


