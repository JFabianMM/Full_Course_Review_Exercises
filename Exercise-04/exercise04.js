function mergeArrays(largeArray, smallArray){
    const smallArraySize = smallArray.length;
    const largeArraySize = largeArray.length;
    let smallIndexPos=smallArraySize-1;
    let largeIndexPos=largeArraySize-smallArraySize-1;
    for (let i=largeArraySize-1; i>=0; i--){
        if (largeArray[largeIndexPos]>smallArray[smallIndexPos] && largeIndexPos>=0){
            largeArray[i]= largeArray[largeIndexPos];
            largeIndexPos--;
        }else{
            if (smallIndexPos>=0){
                largeArray[i]=smallArray[smallIndexPos];
                smallIndexPos--;
            }
        }
    }
    return largeArray 
}

module.exports = mergeArrays




