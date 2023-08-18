const longestRunOfTwoNumbers = require('./exercise07.js')

const input = "12211"
test( 'Input = 12211 to be 12211', () => {
  expect(longestRunOfTwoNumbers(input)).toBe('12211');
});

const input2 = "122112223311212223";
test( 'Input = 122112223311212223 to be 12211222', () => {
  expect(longestRunOfTwoNumbers(input2)).toBe('12211222');
});

const input3 = '1212223311212223';
test( 'Input = 1212223311212223 to be 1121222', () => {
  expect(longestRunOfTwoNumbers(input3)).toBe('1121222');
});

const input4 = '111';
test( 'Input = 111 to be 111', () => {
  expect(longestRunOfTwoNumbers(input4)).toBe('111');
});

const input5 = '421113';
test( 'Input = 421113 to be 2111', () => {
  expect(longestRunOfTwoNumbers(input5)).toBe('2111');
});