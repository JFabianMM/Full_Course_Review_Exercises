const isSameLevel = function(root,n1,n2){
    let visited = [];
    let current = root;

    function traverse (node, n1, n2, level=0){
        let flag=0;
        if (n1==node.value){
            visited.push(level);
            n1='found';
            flag=1;
        }
        if (n2==node.value){
            if (flag==0){
              visited.push(level);
              n2='found';
            }
        }
        let len=node.children.length;
        level=level+1;
        for (let i=0; i<len; i++){
            traverse(node.children[i], n1, n2, level);
        }
    };
    traverse(current, n1, n2);
    if (visited.length==2){
        if (visited[0]==visited[1]){
          return true
        }
    }
    return false; 
}


const Tree = function(value) {
  this.value = value;
  this.children = [];
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