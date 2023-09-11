const balanceAdd = function(array){
     let len=array.length;
     let result=0;
     for (let i=0; i<len; i++){
         result=result+array[i];
         array[i]=result;
     }
     return array.indexOf(result/2);
}

module.exports = balanceAdd