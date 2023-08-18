const SinglyLinkedList = require('../Exercise-16/exercise16');
const palindromeCheck = require('./exercise17.js');

let singlyList1=new SinglyLinkedList();
singlyList1.push(0);
singlyList1.push(1);
singlyList1.push(2);
singlyList1.push(1);
singlyList1.push(0);

test('Linked list singlyList1 is palindrome = true', () => {
  expect(palindromeCheck(singlyList1)).toBe(true);
});

let singlyList2=new SinglyLinkedList();
singlyList2.push(0);
singlyList2.push(2);
singlyList2.push(2);
singlyList2.push(1);
singlyList2.push(0);

test('Linked list singlyList2 is palindrome = false', () => {
  expect(palindromeCheck(singlyList2)).toBe(false);
});