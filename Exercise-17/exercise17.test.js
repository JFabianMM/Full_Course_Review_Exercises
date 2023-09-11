const {SinglyLinkedList, palindromeCheck} = require('./exercise17.js');

test('Must determine if the contents is a singly linked list is palindrome. For Linked list singlyList the content is palindrome = true', () => {
  let singlyList=new SinglyLinkedList();
  singlyList.push(0);
  singlyList.push(1);
  singlyList.push(1);
  singlyList.push(0);  
  expect(palindromeCheck(singlyList)).toBe(true);
});

test('Must determine if the contents is a singly linked list is palindrome. For Linked list singlyList the content is palindrome = false', () => {
  let singlyList=new SinglyLinkedList();
  singlyList.push(0);
  singlyList.push(2);
  singlyList.push(1);
  singlyList.push(0);
  expect(palindromeCheck(singlyList)).toBe(false);
});