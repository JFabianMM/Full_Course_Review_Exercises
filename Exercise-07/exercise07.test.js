const longestRunOfTwoNumbers = require('./exercise07.js')

test('The function the largest run of at most two distinct numbers. This case input = 12211 and the result must be 12211', () => {
  const input = "12211"
  expect(longestRunOfTwoNumbers(input)).toBe('12211');
});

test('The function the largest run of at most two distinct numbers. This case input =  122112223311212223 and the result must be 12211222', () => {
  const input2 = "122112223311212223";
  expect(longestRunOfTwoNumbers(input2)).toBe('12211222');
});

test('The function the largest run of at most two distinct numbers. This case input = 1212223311212223 and the result must be 1121222', () => {
  const input3 = '1212223311212223';
  expect(longestRunOfTwoNumbers(input3)).toBe('1121222');
});

test('The function the largest run of at most two distinct numbers. This case input = 111 and the result must be 111', () => {
  const input4 = '111';
  expect(longestRunOfTwoNumbers(input4)).toBe('111');
});

test('The function the largest run of at most two distinct numbers. This case input = 421113 and the result must be 2111', () => {
  const input5 = '421113';
  expect(longestRunOfTwoNumbers(input5)).toBe('2111');
});