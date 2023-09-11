const queryRetry = require('./exercise02.js')

test('The delay (1 * 1.5, then *1.5 = 2250) is lower than response 3000 sec. Its expected "Timeout"; ', (done) => {
   const url='https://hub.dummyapis.com/delay?seconds=3';
   const maxRetry = 3;
   const useIncrement = true;
   const delay = 1000;
   queryRetry(url, maxRetry, delay, useIncrement)
   .then(result=>expect(result).toBe("timeout"));
      done()
 });

 test('The delay (1000) is higher than response. Its expected {response:{count:40372,name:"bella",age:42}};  ', (done) => {
   const url='https://api.agify.io/?name=bella';
   const maxRetry = 3;
   const useIncrement = false;
   const delay2 = 1000;
   queryRetry(url, maxRetry, delay2, useIncrement)
    .then(result=>expect(result).toMatchObject({count:40372,name:'bella',age:42}));
    done()
 });