
function reverseBlocks(arr, blockSize){
    const len = arr.length;
    let range=Math.floor(len/blockSize);
    if (len%blockSize>0){range++;}
    let iterations=blockSize/2;
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


