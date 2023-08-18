const primeNumbers = require('./exercise23.js')

test("Find the first 15 Prime numbers. Expected= [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]", () => {
  expect(primeNumbers(15)).toMatchObject([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
});

test("Find the first 10 Prime numbers. Expected= [2,3,5,7,11,13,17,19,23,29]", () => {
    expect(primeNumbers(10)).toMatchObject([2,3,5,7,11,13,17,19,23,29]);
  });