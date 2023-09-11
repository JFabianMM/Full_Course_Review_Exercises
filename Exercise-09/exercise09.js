
// THIS IS THE RECURSIVE VERSION
const flattenRecursive = (nested) => {
    let flat = [];
    let handleFlat = (array) => {
      let counter = 0
      while (counter < array.length) {
        let val = array[counter];
        if (Array.isArray(val)) {
          handleFlat(val);
        } else {
          flat.push(val)
        }
        counter++;
      }
    }
    handleFlat(nested);
    return flat;
  }


// THIS IS THE ITERATIVE VERSION
function getValue(array, positionMap){
  let value=array;
  let len= positionMap.length;
  for (let i=0; i<len; i++){
     let pos=positionMap[i][1];
     value=value[pos];
     if(i==len-1) return value;
  }
}

const flattenIterative = function(array){
    let level=0;
    let position=0; 
    let flat = [];
    let len = array.length;
    let maxPos=len-1;
    let positionMap=[[level, position, maxPos]]; 
    let counter=0;
    while (positionMap[0][1] <= positionMap[0][2]) {
        counter++;
        if (positionMap[level][1]>positionMap[level][2]){
            positionMap.pop();
            level--;
            positionMap[level][1]++;    
        }else{
            let value= getValue(array, positionMap);
            if (Array.isArray(value)) {
                level++
                positionMap.push([level, 0, value.length-1]);
            }else{
                flat.push(value);
                positionMap[level][1]++;                
            }
        }
    }
    return flat;
}

module.exports = {
  flattenIterative: flattenIterative,
  flattenRecursive: flattenRecursive,
};