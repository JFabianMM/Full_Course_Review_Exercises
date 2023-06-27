//const result1 = require('./exercise03.js')
const can = require('./exercise03.js')

const url='https://www.google.com/?hl=es';
//let result = result1;
let result = can(url);
result.cancel = can.cancel;

result.then(function(data) {
    if (data.name === 'AbortError'){
        console.log('data.name: ', data.name);
        return data.name;
    }else{
      console.log('data: ', data);
        return data
    }
  }).catch(error => {
    return error;
  });

setTimeout(() => result.cancel(), 15000);                    
 