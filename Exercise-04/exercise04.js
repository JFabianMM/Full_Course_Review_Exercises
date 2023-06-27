// // **************************** //
// // Exercise 04
// // **************************** //

// 4. Merge two sorted arrays where one has enough 
//    space at the end for the other (A6)

function mergeArrays(lArray, sArray){
    const smallArray = sArray;
    const smallArraySize = smallArray.length;
    const largeArray = lArray.concat(new Array(smallArraySize));
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


