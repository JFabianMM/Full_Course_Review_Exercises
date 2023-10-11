const isSameLevel = function(root,n1,n2){
    let visited = [];
    let current = root;
    function traverse (node, n1, n2, level=0){
        let flag=0;
        if (n1==node.value){
            visited.push({number:n1, level:level});
            flag=1;
        }
        if (n2==node.value){
            if (flag==0){
              visited.push({number:n2, level:level});
            }
        }
        let len=node.children.length;
        level=level+1;
        for (let i=0; i<len; i++){
            traverse(node.children[i], n1, n2, level);
        }
    };
    traverse(current, n1, n2);
    let len = visited.length;
    for(let i=0; i<len; i++){
        if(visited[i].number==n1){
          for(let j=i+1; j<len; j++){
            if (visited[j].number==n2){
                if(visited[i].level==visited[j].level){
                  return true
                }                 
            }
          }        
        }
        if(visited[i].number==n2){
          for(let j=i+1; j<len; j++){
            if (visited[j].number==n1){
                if(visited[i].level==visited[j].level){
                  return true
                }                 
            }
          }        
        }              
    }
    return false; 
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

