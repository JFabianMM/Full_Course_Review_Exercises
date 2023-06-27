// // **************************** //
// // Exercise 10
// // **************************** //

// 10. Given a representation of a binary tree, 
// implement a function that can traverse all 
// nodes in prefix, infix, and postfix order.

//   Tree: 
//             A
//           /   \
//          B     C
//        /  \   /  \
//       D    E F    G
//             / \    \
//            H   I    J

// const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))'; 
// (VAL, LN, RN)
// VAL = Value [A-Za-z0-9]+
// LN = Left Node
// RN = Right Node

// @param {String} tree
// @param {String} order  'infix' (default) | 'prefix' | 'postfix'

// Expected answears
// A B D E C F H I G J   (prefix-order)
// D B E A H F I C G J   (infix-order)
// D E B H I F J G C A   (postfix-order)

function getObject(str){
  let tree= str.replace(/[(]/g, '[');
  tree= tree.replace(/[)]/g, ']'); 
  // tree=tree.replace(/([\w+])/g,'"$1"');
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

//const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,(J))))'; 
//console.log(printTree(bTree, 'prefix'));
//console.log(printTree(bTree, 'infix'));
//console.log(printTree(bTree, 'postfix'));

module.exports = printTree