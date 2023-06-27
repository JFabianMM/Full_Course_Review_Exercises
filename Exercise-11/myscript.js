// // **************************** //
// // Exercise 11
// // **************************** //

// 12. Write an enhanced DOM querySelectAll method that can support the following selector: 
//     ○ Select nodes whose children match a pattern. 
//       Must select the direct parent of the child selector.

//    ‘<parent-selector> < <child-selector>’

// querySelectorAll("div.note < input.is-complete[checked]")
// <section>
//    <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
//    <div id="2" class="note"></div>
//    <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
//    <div id="4" class="note"></div>
//    <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
// </section>

// Should return a list of 3 div elements



function querySelectorAll(input){
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
}  

const elements1 = querySelectorAll("div.note < input.is-complete[checked]");
console.log('Parent elements1: ', elements1);
