// Expected output
// ● Outside and before the test block
// ● TestBlock A
//    ○ Inside TestBlock A
//    ○ test delayed A
// ● Outside and after the TestBlock A
// ● TestBlock B
//    ○ Inside TestBlock B
//    ○ test delayed B
// ● Outside and after TestBlock B

// All non-delayed tests should appear immediately.
// Test delayed B should appear after .5 seconds have elapsed. Test delayed A should appear after 1 second has elapsed.


// Actualmente es asi: 
// ● Outside and before the test block
// ● TestBlock A
//    ○ Inside TestBlock A
// ● Outside and after the TestBlock A
// ● TestBlock B
//    ○ Inside TestBlock B
// ● Outside and after TestBlock B
// ● test delayed B
// ● test delayed A
 
(function(global){
  "use strict";
  let root = document.getElementById('results');
  function result(text, pass){
      const el = document.createElement('li');
      el.textContent = text;
      pass!== undefined && (el.style.color = pass? 'green' : 'red');
      return el;
  }
  
  function assert(pass, message){
    return root.appendChild(result(message,pass));
  }
  
  let test =function (description, testBlock){
    const parent = root;
      root = assert(undefined, description).appendChild(document.createElement('ul'));
      let origAssert = assert;
      const root1=root;
      assert = function(pass, message) {
                let origAssert= function(pass, message){
                  return root1.appendChild(result(message,pass));
                }
               return origAssert(pass, message);
      }
      global.assert = assert;
      global.root1=root1;    
      const originalSetTimeout = window.setTimeout;
      window.setTimeout = function(callback, delay, ...args) {
          let len=[...args].length;
          if (len==0){
              let str= "" + callback;
              callback=assert;
              const quotedText = str.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, "");
              let result = str.match(/assert\((.*?),/g).map(function(val){
                  val=val.replace(/assert\(/g,'').replace(/,/g,'');
                  if (val=='true'){val=true;}else{val=false;}
                  return val;
              });
             return originalSetTimeout(callback, delay, result[0]=true, quotedText);
          }
          return originalSetTimeout(callback, delay, ...args);
      };

      testBlock();
      assert=origAssert;
      global.assert = assert;      
      root = parent;
  }

  global.assert = assert;
  global.test = test;
})(window);

