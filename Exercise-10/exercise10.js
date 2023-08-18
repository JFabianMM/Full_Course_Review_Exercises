function getObject(str){
  const regexp = /[\A-Za-z0-9+],[\A-Za-z0-9+]/gi;
  const matches = str.match(regexp);
  const matches2 = str.match(/,,,/);
  const regexp2 = /\(\([\A-Za-z0-9+]\)\)/gi;
  const matches3 = str.match(regexp2);
  if (matches || matches2 || matches3){
     throw new Error('Invalid Input');
  }
  let tree=str.replace(/(,,)/g, ',');
  tree= tree.replace(/[(]/g, '[');
  tree= tree.replace(/[)]/g, ']');
  tree=tree.replace(/([\A-Za-z0-9+]+)/g,'"$1"');
  tree=tree.replace(/([\[\A-Za-z0-9+\]]+,)/g,'$1');
  tree=eval(tree); 
  return tree;
}

// PREFIX
function prefixOrder(nested){
  let flat = [];
  function handleFlat(array){
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

// POSTFIX
function postfixOrder(nested){
  let flat = [];
  function handleFlat(array){
      if (!Array.isArray(array[0])) {
          if (Array.isArray(array[1])) {
            if (array[1].length==1){
               flat.push(array[1][0]);
            }else{
              handleFlat(array[1]);
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
      flat.push(array[0])
  }
  handleFlat(nested);
  return flat;
}

function printTree(tree, order='infix') { 
    tree= getObject(tree);
    let result;
    if (order=='prefix'){
        result=prefixOrder(tree);
        return result;
    }
    if (order=='infix'){
       result=infixOrder(tree);
       return result;
    }
    if (order=='postfix'){
      let result = postfixOrder(tree);
      return result;
    }
}

// const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,(J))))'; 
// let a= printTree(bTree,'infix')
module.exports = printTree
