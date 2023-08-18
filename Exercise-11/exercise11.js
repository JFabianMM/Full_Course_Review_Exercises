
function querySelectorAll(input){
     const regexp = /[\A-Za-z0-9+] < [\A-Za-z0-9+]/gi;
     const matches = input.match(regexp);
     if (matches && matches.length==1){
          let coincidence1 = /[^<]+(<)/.exec(input);
          coincidence1=coincidence1[0].replace(/</, ""); 
          let coincidence2 = /(<)[^<]+/.exec(input); 
          coincidence2= coincidence2[0].replace(/</, ""); 
      
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
}  

module.exports = querySelectorAll