const symmetricCheck = require('./exercise12.js')

const bTree1 = '(A,(C,(B)),(B,(C)))'; 
test('The binary tree (A,(C,(B)),(B,(C))) is symmetric = true', () => {
  expect(symmetricCheck(bTree1)).toBe(true);
});

const bTree2 = '(A,(B,(C)),(B,(C)))';
test('The binary tree (A,(B,(C)),(B,(C))) is not symmetric = false', () => {
  expect(symmetricCheck(bTree2)).toBe(false);
});