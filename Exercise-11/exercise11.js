function querySelectorAll(input){
     const words = input.split(' ');
     const len= words.length;
     let index=0;
     if (len>=3){
          for(let i=0; i<len; i++){
               if (words[i]==='<'){
                    index=i;
               }
          }
          if (index<=len-2 && index>0){
                    let coincidence1 = words[index-1];
                    let coincidence2 ='';
                    for (let ii=index+1; ii<words.length; ii++){
                         coincidence2 = coincidence2 + ' ' + words[ii];
                    }
                    let results=[];
                    let childElements=document.querySelectorAll(coincidence2);
                    for(let i=0; i<childElements.length; i++){
                         if (childElements[i].parentNode.matches(coincidence1)){
                              results.push(childElements[i].parentNode);
                         }    
                    }
                    return results;        
          }else{
               return document.querySelectorAll(input);
          }
          
     }else{
          return document.querySelectorAll(input);
     }
}  
module.exports = querySelectorAll