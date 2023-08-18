const balanceAdd = function(array){
     let len=array.length;
     let result=0;
     let addArray=[];
     for (let i=0; i<len; i++){
         result=result+array[i];
         addArray.push(result);
     }
     return addArray.indexOf(result/2);
}

module.exports = balanceAdd