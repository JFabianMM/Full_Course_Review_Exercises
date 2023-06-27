const symmetricCheck = require('./exercise12.js')

//const bTree = '(A,(B,(D),(E)),(B,(D),(E)))';
const bTree1 = '(1,(2,(3),(4,5)),(2,((3),(4,5))))';
const bTree2 = '(1,(2,(3),(4,5)),(2,((3),(4,4))))';
 
test( 'symmetricCheck bTree = true', () => {
  expect(symmetricCheck(bTree1)).toBe(true);
});

test( 'symmetricCheck bTree = false', () => {
  expect(symmetricCheck(bTree2)).toBe(false);
});