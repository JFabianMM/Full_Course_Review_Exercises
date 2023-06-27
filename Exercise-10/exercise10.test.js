const printTree = require('./exercise10.js')

const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,(J))))'; 

test( 'printTree bTree = array', () => {
  expect(printTree(bTree,'postfix')).toMatchObject(
    ['D', 'E', 'B', 'H','I', 'F', 'J', 'G','C', 'A']
  );
});

test( 'printTree bTree = array', () => {
  expect(printTree(bTree,'infix')).toMatchObject(
    ['D', 'B', 'E', 'A','H', 'F', 'I', 'C','J', 'G']
  );
});

test( 'printTree bTree = array', () => {
  expect(printTree(bTree,'prefix')).toMatchObject(
    ['A', 'B', 'D', 'E','C', 'F', 'H', 'I','G', 'J']
  );
});