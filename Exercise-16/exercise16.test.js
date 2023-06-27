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

test( 'Loop find is equal to index 7', () => {
  expect(singlyList1.findLoop()).toBe(7);
});