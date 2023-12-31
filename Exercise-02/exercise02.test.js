const queryRetry = require('./exercise02.js')

test('The response is deleted and is completed the maximum number of retries. Its expected Error', (done) => {
   const url='https://hub.com/delayss'
   const maxRetry = 3;
   const useIncrement = true;
   const delay = 500;    
   queryRetry(url, maxRetry, delay, useIncrement)
      .then((result) => {return result.json();}).catch(error => {return error;}).then(result=>expect(result).toBeInstanceOf(
         Error
       ));
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