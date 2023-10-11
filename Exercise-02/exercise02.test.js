const queryRetry = require('./exercise02.js')

test('The response (3 seconds) is lower than the response time allowed (2 sec). Its expected "error"; ', (done) => {
   const url='https://hub.dummyapis.com/delay?seconds=3';
   const maxRetry = 3;
   const useIncrement = true;
   const delay = 500;    
   queryRetry(url, maxRetry, delay, useIncrement)
      .then((result) => {return result.json();}).catch(error => {return 'error';}).then(result=>expect(result).toBe('error'));
      done()
 });

 test('Its expected {count:40372,name:"bella",age:42}};  ', (done) => {
   const url='https://api.agify.io/?name=bella';
   const maxRetry = 3;
   const useIncrement = false;
   const delay2 = 1000;
   queryRetry(url, maxRetry, delay2, useIncrement)
      .then((result) => {return result.json();}).then(result=>expect(result).toMatchObject({count:40372,name:'bella',age:42}));
      done()
 });