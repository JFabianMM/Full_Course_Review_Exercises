const {symmetricCheck, Node} = require('./exercise12.js');

test("The function must traverse a binary tree and determine if it is symmetric. The binary tree Node('A',Node('B',Node('C')),Node('B', Node('C'))) is NOT symmetric = false", () => {
  const bTree = Node('A',Node('B',Node('C')),Node('B',Node('C')));
  expect(symmetricCheck(bTree)).toBe(false);
});

test("The function must traverse a binary tree and determine if it is symmetric. The binary tree Node('A',Node('B',Node('C'),Node('D')),Node('B',Node('C'),Node('E'))) is NOT symmetric = false", () => {
  const bTree = Node('A',Node('B',Node('C'),Node('D')),Node('B',Node('C'),Node('E')));
  expect(symmetricCheck(bTree)).toBe(false);
});

test("The function must traverse a binary tree and determine if it is symmetric. The binary tree Node('A',Node('B',Node('D'),Node('C')),Node('B',Node('C'),Node('D'))) is symmetric = true", () => {
  const bTree = Node('A',Node('B',Node('D'),Node('C')),Node('B',Node('C'),Node('D')));
  expect(symmetricCheck(bTree)).toBe(true);
});

test("The function must traverse a binary tree and determine if it is symmetric. The binary tree Node('A',Node('B', Node('C'), undefined,),Node('B', undefined, Node('C'),)) is symmetric = true", () => {
  const bTree = Node('A',Node('B', Node('C'), undefined,),Node('B', undefined, Node('C'),));
  expect(symmetricCheck(bTree)).toBe(true);
});