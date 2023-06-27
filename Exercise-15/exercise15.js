// // **************************** //
// // Exercise 15
// // **************************** //

// 15. Given an array of natural numbers (N1) of length N, 
//     find the index of that array that balances the left and 
//     right sum. If no such position exists, return -1.               

// ( 1 2 3 4 9 9 2 7 10 13 )
// Expected result: 6

const balanceAdd = function(array){
     let len=array.length;
     let result=0;
     let addArray=[];
     for (let i=0; i<len; i++){
         result=result+array[i];
         addArray.push(result);
     }
     let index= addArray.findIndex(function checkAge(element) {
        return element == result/2;
      });
     return index;
}

// balanceAdd(array);

module.exports = balanceAdd