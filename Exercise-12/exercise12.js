function symmetricCheck (binaryTree){
  function review(left, right){
      if (left === undefined && right === undefined){
          return true
      }
      else if (left === undefined || right === undefined){
          return false
      }
      else if (left.value === right.value){
          if((left.left !== undefined && right.left === undefined) && (left.right === undefined && right.right !== undefined)){
            return review(left.left, right.right) && review(left.right, right.left)
          }   
          if((left.left === undefined && right.left !== undefined) && (left.right !== undefined && right.right === undefined)){  
            return review(left.left, right.right) && review(left.right, right.left)
          }
          if((left.left === undefined && right.left === undefined) && (left.right !== undefined && right.right !== undefined)){
            return false
          }
          if((left.left !== undefined && right.left !== undefined) && (left.right === undefined && right.right === undefined)){
            return false
          }
          if((left.left !== undefined && left.right !== undefined) && (right.left !== undefined && right.right !== undefined)){
            return review(left.left, right.right) && review(left.right, right.left)
           }
           return true
      }
      else
          return false
  }

  return review(binaryTree.left, binaryTree.right)
}
const Node = (value, left, right) => ({value, left, right})

module.exports = {
  symmetricCheck: symmetricCheck,
  Node: Node,
};