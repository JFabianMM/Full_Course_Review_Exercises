require('isomorphic-fetch');
let controller;

function cancellableFetch(url) {
    controller = new AbortController();
    return fetch(url, {   
        signal: controller.signal,                   
    }).then(function(data) {
        return data.statusText;
    }).catch(error => {
        return error.name;
    });
  };

const url='https://hub.dummyapis.com/delay?seconds=3';
let result = cancellableFetch(url);
result.cancel=function(){ 
        controller.abort();
};

setTimeout(() => result.cancel(), 2000); 

module.exports = cancellableFetch