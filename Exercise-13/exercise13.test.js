const {isSameLevel, Tree} = require('./exercise13.js');

let tree = new Tree(1);
let branch2 = tree.addChild(2);
let branch3 = tree.addChild(3);
branch2.addChild(4);
branch2.addChild(5);
branch3.addChild(6);
let leaf7 = branch3.addChild(7);
let leaf8 = leaf7.addChild(8);
leaf8.addChild(9);
leaf8.addChild(10);

test('The function travers the tree and find if the values n1 and n2 are in the same level. Input tree, n1=6 and n2=7, with result = true', () => {
  expect(isSameLevel(tree,6,7)).toBe(true);
});

test('The function travers the tree and find if the values n1 and n2 are in the same level. Input tree, n1=2 and n2=4, with result = false', () => {
  expect(isSameLevel(tree,2,4)).toBe(false);
});