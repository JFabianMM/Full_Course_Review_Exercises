const SinglyLinkedList = require('./exercise16.js');

let singlyList1=new SinglyLinkedList();
singlyList1.push(0);
singlyList1.push(1);
singlyList1.push(2);
singlyList1.push(3);
singlyList1.push(4);
singlyList1.push(5);
singlyList1.push(6);
singlyList1.push(7);
singlyList1.push(8);
singlyList1.push(9);
singlyList1.push(10);
singlyList1.loop(7);

test('Loop in singlyList1 is found in index 7', () => {
  expect(singlyList1.findLoop()).toBe(7);
});

let singlyList2=new SinglyLinkedList();
singlyList2.push(10);
singlyList2.push(11);
singlyList2.push(12);
singlyList2.push(13);
singlyList2.push(14);
singlyList2.push(15);
singlyList2.push(16);
singlyList2.push(17);
singlyList2.push(18);
singlyList2.push(19);
singlyList2.push(20);
singlyList2.loop(3);

test('Loop in singlyList2 is found in index 3', () => {
  expect(singlyList2.findLoop()).toBe(3);
});

let singlyList3=new SinglyLinkedList();
singlyList3.push(110);
singlyList3.push(111);
singlyList3.push(112);
singlyList3.push(113);
singlyList3.push(114);
singlyList3.push(115);
singlyList3.push(116);
singlyList3.push(117);
singlyList3.push(118);
singlyList3.push(119);
singlyList3.push(120);
singlyList3.loop(6);

test('Loop in singlyList3 is found in index 6', () => {
  expect(singlyList3.findLoop()).toBe(6);
});