const longestRunOfTwoNumbers = require('./exercise07.js')

const input = "12211"

test( 'longestRunOfTwoNumbers input = 12211 to be 12211', () => {
  expect(longestRunOfTwoNumbers(input)).toBe('12211');
});

const input2 = "122112223311212223";

test( 'longestRunOfTwoNumbers input = 122112223311212223 to be 12211222', () => {
  expect(longestRunOfTwoNumbers(input2)).toBe('12211222');
});

const input3 = '1212223311212223';
test( 'longestRunOfTwoNumbers input = 1212223311212223 to be 1121222', () => {
  expect(longestRunOfTwoNumbers(input3)).toBe('1121222');
});

const input4 = '111';
test( 'longestRunOfTwoNumbers input = 111 to be 111', () => {
  expect(longestRunOfTwoNumbers(input4)).toBe('111');
});



const flatten = (nested) => {
  let flat = [];
  let handleFlat = (array) => {
    let counter = 0
    while (counter < array.length) {
      let val = array[counter];
      if (Array.isArray(val)) {
        handleFlat(val);
      } else {
        flat.push(val)
      }
      counter++;
    }
  }
  handleFlat(nested);
  return flat;
}

let a= [1,2,3,[4,5,[6,7]], 8,9];
console.log(flatten(a)); // [1, 2, 3, 4, 5, 6, 7];