const SinglyLinkedList = require('./exercise16.js');

test('Find the node at the beginning of a loop in a singly linked list. The loop is found in index 7', () => {
  let singlyList=new SinglyLinkedList();
  singlyList.push(0);
  singlyList.push(1);
  singlyList.push(2);
  singlyList.push(3);
  singlyList.push(4);
  singlyList.push(5);
  singlyList.push(6);
  singlyList.push(7);
  singlyList.push(8);
  singlyList.push(9);
  singlyList.push(10);
  singlyList.loop(7);
  expect(singlyList.findLoop()).toBe(7);
});

test('Find the node at the beginning of a loop in a singly linked list. The loop is found in index 3', () => {
  let singlyList=new SinglyLinkedList();
  singlyList.push(10);
  singlyList.push(11);
  singlyList.push(12);
  singlyList.push(13);
  singlyList.push(14);
  singlyList.push(15);
  singlyList.push(16);
  singlyList.push(17);
  singlyList.push(18);
  singlyList.push(19);
  singlyList.push(20);
  singlyList.loop(3);
  expect(singlyList.findLoop()).toBe(3);
});

test('Find the node at the beginning of a loop in a singly linked list. The loop is found in index 6', () => {
  let singlyList=new SinglyLinkedList();
  singlyList.push(110);
  singlyList.push(111);
  singlyList.push(112);
  singlyList.push(113);
  singlyList.push(114);
  singlyList.push(115);
  singlyList.push(116);
  singlyList.push(117);
  singlyList.push(118);
  singlyList.push(119);
  singlyList.push(120);
  singlyList.loop(6);
  expect(singlyList.findLoop()).toBe(6);
});