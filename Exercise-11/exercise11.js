function querySelectorAll(input){
     const words = input.split(' ');
     if (words.length>=3){
          if (words[1]==='<'){
               let coincidence1 = words[0];
               let coincidence2 ='';
               for (let ii=2; ii<words.length; ii++){
                    coincidence2 = coincidence2 + ' ' + words[ii];
               }
               let parentElements=document.querySelectorAll(coincidence1);
               let childElements=document.querySelectorAll(coincidence2);
               let lenParents=parentElements.length;
               let lenChilds=childElements.length;
               let result=[];
               for (let i=0; i<lenParents; i++){
                    for(let j=0; j<lenChilds; j++){
                         if (childElements[j].parentNode == parentElements[i]) {
                              result.push(parentElements[i]); 
                              break;
                         }
                    } 
               }
               return result;        
          }else{
               return document.querySelectorAll(input);
          }
     }else{
          return document.querySelectorAll(input);
     }
}  

module.exports = querySelectorAll