const queryRetry = require('./exercise02.js')

const url='https://api.agify.io/?name=bella';
const maxRetry = 3;
const useIncrement = true;
const delay = 800;

test('The delay (800 * 1.5, then *1.5 = 1800) is lower than response Time=2000. Its expected "Timeout"; ', (done) => {
  queryRetry(url, maxRetry, delay, useIncrement)
   .then(result=>expect(result).toBe("timeout"));
      done()
 });

const delay2 = 1000;
 test('The delay (1000 * 1.5, then *1.5 = 2250) is higher than response Time=2000. Its expected {response:{count:40372,name:"bella",age:42}};  ', (done) => {
    queryRetry(url, maxRetry, delay2, useIncrement)
    .then(result=>expect(result).toMatchObject({response:{count:40372,name:'bella',age:42}}));
    done()
 });