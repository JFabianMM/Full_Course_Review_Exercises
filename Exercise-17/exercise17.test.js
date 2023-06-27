const SinglyLinkedList = require('../Exercise-16/exercise16');
const palindromeCheck = require('./exercise17.js');

let singlyList1=new SinglyLinkedList();
singlyList1.push(0);
singlyList1.push(1);
singlyList1.push(2);
singlyList1.push(3);
singlyList1.push(4);
singlyList1.push(5);
singlyList1.push(7);
singlyList1.push(5);
singlyList1.push(4);
singlyList1.push(3);
singlyList1.push(2);
singlyList1.push(1);
singlyList1.push(0);


test( 'Find palindrome = true', () => {
  expect(palindromeCheck(singlyList1)).toBe(true);
});