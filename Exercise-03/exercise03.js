// // **************************** //
// // Exercise 03
// // **************************** //

// 3. Create a cancellable fetch request.

// const result = cancellableFetch("some/url");
// result.then(someAction).then(otherAction).catch(errorHandler);

/* ... more code ... */

//if(someCondition){
//  result.cancel()
//}

/* ... more code ... */

let fetchMock = require('fetch-mock');
let controller = new AbortController();

let can=function cancellableFetch(url) {
    fetchMock.get(url, {                // Mock the fetch()                 
        users: [
            { name: "Fabián" },
            { name: "Jesús" }
            ]
    }, {
      delay: 3000,                      // fake a slow network
    });
  
    return fetch(url, {   
        signal: controller.signal,                   
    }).then(function(response) {
        let data = response.json();
        if (data.name === 'AbortError'){
                  return 'AbortError';
              }else{
                  return data;
              }
    }).catch(error => {
      return 'AbortError';
    });
  };

can.cancel=function(){ 
      controller.abort();
};

setTimeout(() => controller.abort(), 1500);   
module.exports = can