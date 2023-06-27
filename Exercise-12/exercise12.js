// // **************************** //
// // Exercise 12
// // **************************** //

// 12. Traverse a binary tree and determine if the tree is symmetric.

//   Tree: 
//             1
//           /   \
//          2     2
//        /  \   /  \
//       3    4 4    3
//             / \    
//            5   5    


//   Tree: 
//             A
//           /   \
//          B     C
//        /  \   /  \
//       D    E F    G
//             / \    \
//            H   I    J

// const bTree = '(A,(B,(D),(E)),(C,(F),(G)))'; 
// (VAL, LN, RN)
// VAL = Value [A-Za-z0-9]+
// LN = Left Node
// RN = Right Node

// @param {String} tree
// @param {String} order  'infix' (default) | 'prefix' | 'postfix'

// Expected answears
// A B D E C F H I G J   (prefix-order)

function getObject(str){
  let tree= str.replace(/[(]/g, '[');
  tree= tree.replace(/[)]/g, ']'); 
  tree=tree.replace(/([\A-Za-z0-9+])/g,'"$1"');
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

function printTree(tree) { 
    tree= getObject(tree);
    let result;
    result=prefixOrder(tree);
    return result;
}

function symmetricCheck(input){
  let array=printTree(input, 'prefix');
  let len=array.length;
  if(len%2==0){
     return false 
  }else{
    let iterations=(len-1)/2;
    for(let i=0; i<(iterations); i++){
        if (array[i+1]!=array[i+iterations+1]){
          return false
        }
    }   
    console.log('array: ', array);
  }
  return true
}

module.exports = symmetricCheck