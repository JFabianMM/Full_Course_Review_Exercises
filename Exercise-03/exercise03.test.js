const cancellableFetch1 = require('./exercise03.js')

test('Url answear after 3 seconds and aborted after 4 seconds (No aborted). Result="OK', (done) => {
    const url='https://api.agify.io/?name=bella';
    let result = cancellableFetch1(url);
    result.then(result=>expect(result).toMatchObject({count:40372,name:'bella',age:42}));
      done()
  });

test('Url answear after 3 seconds and aborted after 2 seconds (Aborted). Result="AbortError"', (done) => {
  const url='https://hub.dummyapis.com/delay?seconds=3';
  let result = cancellableFetch1(url);
  result.cancel=function(){controller.abort()};
  setTimeout(() => result.cancel(), 2000); 
  result.then(result=>expect(result).toBe('AbortError'));
    done()
});