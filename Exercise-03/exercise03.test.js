const cancellableFetch = require('./exercise03.js')

test("Fetch(url) answear is not aborted. Result should be={count:40372,name:'bella',age:42}", (done) => {
    const url='https://api.agify.io/?name=bella';
    let result = cancellableFetch(url);
    result.then((result) => {return result.json();}).then(result=>expect(result).toMatchObject({count:40372,name:'bella',age:42}));
    done();
  });

test('Fetch(url) answear should be received after 3 seconds, but is aborted after 2 seconds. Result="AbortError"', (done) => {
  const url='https://hub.dummyapis.com/delay?seconds=3';
  let result = cancellableFetch(url, true);
  setTimeout(() => result.cancel(), 2000); 
  result.then((result) => {return result.json();}).catch(error => {return error.name;}).then(result=>expect(result).toBe('AbortError'));
  done();
});

