function getObject(str){
  let tree=str.replace(/(,,)/g, ',');
  tree= tree.replace(/[(]/g, '[');
  tree= tree.replace(/[)]/g, ']');
  tree=tree.replace(/([\A-Za-z0-9+]+)/g,'"$1"');
  tree=tree.replace(/([\[\A-Za-z0-9+\]]+,)/g,'$1');
  tree=eval(tree); 
  return tree;
}

// INFIX
function infixOrder(nested){
  let flat = [];
  function handleFlat(array){
      if (!Array.isArray(array[0])) {
          if (Array.isArray(array[1])) {
            if (array[1].length==1){
               flat.push(array[1][0]);
               flat.push(array[0])
            }else{
              handleFlat(array[1]);
              flat.push(array[0])
            }
          }
          if (Array.isArray(array[2])) {
            if (array[2].length==1){
               flat.push(array[2][0]);
            }else{
              handleFlat(array[2]);
            }
          }
      }  
  }
  handleFlat(nested);
  return flat;
}

function printTree(tree) { 
    tree= getObject(tree);
    let result=infixOrder(tree);
    return result;
}

function symmetricCheck(input){
  let array=printTree(input);
  let len=array.length;
  if(len%2==0){
     return false 
  }else{
    let iterations=(len-1)/2;
    for(let i=0; i<iterations; i++){
        if (array[i]==array[len-1-i]){
        }else{
          return false
        }
    }   
  }
  return true
}

module.exports = symmetricCheck