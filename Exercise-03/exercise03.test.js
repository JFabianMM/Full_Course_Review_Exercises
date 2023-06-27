const can = require('./exercise03.js')

const url='https://www.google.com/?hl=es';
let result = can(url);


test('The', () => {
  return result.then(data => {
        expect(data).toBe('AbortError');
      });
});


