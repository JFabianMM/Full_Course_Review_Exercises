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

test('Url answear after 3 seconds and aborted after 4 seconds (No aborted). Result="OK', (done) => {
    let result = cancellableFetch(url);
    result.cancel=function(){ 
        controller.abort();
    };
    setTimeout(() => result.cancel(), 4000); 
    result.then(result=>expect(result).toBe('OK'));
      done()
});

test('Url answear after 3 seconds and aborted after 2 seconds (Aborted). Result="AbortError"', (done) => {
  let result = cancellableFetch(url);
  result.cancel=function(){ 
      controller.abort();
  };
  setTimeout(() => result.cancel(), 2000); 
  result.then(result=>expect(result).toBe('AbortError'));
    done()
});