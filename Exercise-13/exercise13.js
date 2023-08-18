function getObject(str){
  let tree=str.replace(/(,,)/g, ',');
  tree= tree.replace(/[(]/g, '[');
  tree= tree.replace(/[)]/g, ']');
  tree=tree.replace(/([\A-Za-z0-9+]+)/g,'"$1"');
  tree=tree.replace(/([\[\A-Za-z0-9+\]]+,)/g,'$1');
  tree=eval(tree); 
  return tree;
}

function getValue(array, positionMap){
  let value=array;
  let len= positionMap.length;
  for (let i=0; i<len; i++){
     let pos=positionMap[i][1];
     value=value[pos];
     if(i==len-1) return value;
  }
}

const isSameLevel = function(array,n1,n2){
    array= getObject(array);
    let level=0;
    let foundLevels=[-1,-1];
    let position=0; 
    let flat = [];
    let len = array.length;
    let maxPos=len-1;
    let positionMap=[[level, position, maxPos]]; 
    let counter=0;
    let lenPos;

    while (positionMap[0][1] <= positionMap[0][2]) {
        counter++;
        if (positionMap[level][1]>positionMap[level][2]){
            positionMap.pop();
            level--;
            positionMap[level][1]++;    
        }else{
            let value= getValue(array, positionMap);
            if (Array.isArray(value)) {
                level++
                positionMap.push([level, 0, value.length-1]);
            }else{
                if (value==n1 || value==n2){
                    if (value==n1){
                       lenPos= positionMap.length;
                       if (foundLevels[0]==-1){
                          foundLevels[0]=positionMap[lenPos-1][0];
                       }else{
                        if (value==n2){
                          if (foundLevels[1]==-1){
                            foundLevels[1]=positionMap[lenPos-1][0];
                          }
                        }
                       }
                    }else{
                      lenPos= positionMap.length;
                      if (foundLevels[1]==-1){
                         foundLevels[1]=positionMap[lenPos-1][0];
                      }
                    }
                }
                flat.push(value);
                positionMap[level][1]++;                
            }
        }
    }
    if (foundLevels[0]==foundLevels[1] && foundLevels[0]!=-1){
        return true;  
    } else{
      return false
    }
}

module.exports = isSameLevel