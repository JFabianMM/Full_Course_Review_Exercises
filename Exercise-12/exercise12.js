function symmetricCheck (binaryTree){
  function review(left, rigth){
    if (left === undefined && rigth === undefined){
      return true
    }
    else if (left === undefined || rigth === undefined){
      return false
    }
    else if (left.value === rigth.value){
      if((left.left !== undefined && rigth.left === undefined) && (left.right === undefined && rigth.right !== undefined)){
        return review(left.left, rigth.right) && review(left.right, rigth.left)
      }   
      if((left.left === undefined && rigth.left !== undefined) && (left.right !== undefined && rigth.right === undefined)){
        return review(left.left, rigth.right) && review(left.right, rigth.left)
      }
      return review(left.left, rigth.left) && review(left.right, rigth.right)
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


