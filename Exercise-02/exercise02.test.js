const queryRetry = require('./exercise02.js')

const url='https://www.google.com/?hl=es';
const maxRetry = 3;
const useIncrement = true;
const delay = 200;

queryRetry(url, maxRetry, delay, useIncrement);

test('The delay is lower than response Time (1000) ', () => {
    return queryRetry(url, maxRetry, delay, useIncrement).then(finalresult => {
          expect(finalresult).toBe('timeout');
        });
});

const url2='https://www.google.com/?hl=es';
const maxRetry2 = 3;
const useIncrement2 = true;
const delay2 = 1200;

test('The delay is lower than response Time (1000) ', () => {
  return queryRetry(url2, maxRetry2, delay2, useIncrement2).then(finalresult => {
        expect(finalresult).toMatchObject({ users: [ { name: 'Fabián' }, { name: 'Jesús' } ] });
      });
});

