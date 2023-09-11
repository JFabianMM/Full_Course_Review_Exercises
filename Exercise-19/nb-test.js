(function(global){
  "use strict";
  let root = document.getElementById('results');
  const result = (text, pass) => {
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
    
      let keptAssert = assert;                                     
      const newRoot=root;
      assert = function(pass, message) {
                 return newRoot.appendChild(result(message,pass));
      }
      global.assert = assert;
      const originalSetTimeout = window.setTimeout;
      window.setTimeout = function(callback, delay, ...args) {
             if ([...args].length==0){
                   var original = callback;
                   callback = function() {
                      return original.apply(this, arguments);
                  };
                  let element=callback();
                   let text = element.innerHTML;
                   element.remove();
                   return originalSetTimeout(assert, delay, true, text);
             }
             return originalSetTimeout(callback, delay, ...args);
      };
      testBlock();
      assert=keptAssert;
      global.assert = keptAssert;      
      root = parent;
  }
  global.assert = assert;
  global.test = test;
})(window);

