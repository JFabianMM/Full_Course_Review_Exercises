function getObject(str){
  let len=str.length;
  while (str[len-1]==' ') {
        str=str.substring(0, len-1);
        len=str.length;
  }
  while (str[0]==' ') {
    str=str.substring(1, len);
    len=str.length;
  }
  let lackOfParentesis=null;
  if(str[0]!='(' || str[len-1]!=')'){
    lackOfParentesis=1;
  }

  const regexp = /[\A-Za-z0-9+],[\A-Za-z0-9+]/gi;
  const noParentesis = str.match(regexp);
  const commastriple = str.match(/,,,/);
  const regexp2 = /\(\([\A-Za-z0-9+]\)\)/gi;
  const repeatedParentesis = str.match(regexp2);
  const comasAfterParentesis = str.match(/\),,/);
  const comasBeforeParentesis = str.match(/\(,/);
  const doubleParentesis = str.match(/\(\(/);
  const regexp3 = /,[\A-Za-z0-9+],/gi;
  const withoutParentesis = str.match(regexp3);
  const regexp4 = /,[\A-Za-z0-9+]\)/gi;
  const incompleteParentesis = str.match(regexp4);
  const regexp5 = /\)[,+]\)/gi;
  const extraComa = str.match(regexp5);
  const regexp6 = /\([\A-Za-z0-9+]\),\([\A-Za-z0-9+]\),\([\A-Za-z0-9+]\)/gi;
  const notBinary = str.match(regexp6);
  if (noParentesis || commastriple || repeatedParentesis || comasAfterParentesis || comasBeforeParentesis || doubleParentesis || withoutParentesis || incompleteParentesis || lackOfParentesis || extraComa || notBinary ){
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

module.exports = printTree