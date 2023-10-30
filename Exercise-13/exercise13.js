const isSameLevel = function(root,n1,n2){
  let queue = [];
  let queueLevels = [];
  queue.push(root);
  let level=0;
  queueLevels.push(level);
  let flag1=0;
  let flag2=0;
  let result=false;
  while (queue.length != 0) {
      let tempNode = queue.shift();
      let tempLevels = queueLevels.shift();
      if (level!=tempLevels){
          flag1=0;
          flag2=0;
          level=tempLevels;
      }
      if (n1==n2){
          if (tempNode.value==n1){
             flag1++;
          }
          if (flag1>1){
            result = true;
            break;
          }  
      }else{
        if (tempNode.value==n1){
            flag1++;
            if (flag2>0){
              result = true;
              break;
            }
        }
        if (tempNode.value==n2){
            flag2++;
            if (flag1>0){
              result = true;
              break;
            }
        }
      }
      for (let i=0; i<tempNode.children.length; i++){
          queueLevels.push(tempLevels+1);
          queue.push(tempNode.children[i]);
      }
  }
  return result
}

const Tree = function(value, children = []) {
  this.value = value;
  this.children = children;
};

Tree.prototype.addChild = function(value) {
  let child = new Tree(value);
  this.children.push(child);
  return child;
}

module.exports = {
  isSameLevel: isSameLevel,
  Tree: Tree,
};