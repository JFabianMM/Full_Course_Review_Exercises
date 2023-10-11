const balanceAdd = function(array){
     let len=array.length;
     let rightSum=0;
     let rightIndex=0;
     let leftIndex=0;
     let leftSum=0;
     for (let i=0; i<len; i++){
        if(i==0 && len>=2){
            rightIndex=len-1;
            leftIndex=0;
            leftSum=array[leftIndex];
            rightSum=array[rightIndex];
        }else{
            if (leftSum>=rightSum){
                rightIndex--;
                rightSum=rightSum+array[rightIndex];
            }else{
                leftIndex++
                leftSum=leftSum+array[leftIndex];
            }
        }
        if (leftIndex+1 == rightIndex){
            break;
        }
     }
     if (leftSum==rightSum){
        return leftIndex
     }else{
        return -1;
     }
}

module.exports = balanceAdd