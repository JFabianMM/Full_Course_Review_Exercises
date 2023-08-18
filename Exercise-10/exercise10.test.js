const printTree = require('./exercise10.js')

const bTree = '(A,,(B,(D),(E)),(C,(F,(H),(I)),(G,(J))))'; 

test("Posfix order with input (A,,(B,(D),(E)),(C,(F,(H),(I)),(G,(J)))) match with ['D','E','B','H','I','F','J','G','C','A']", () => {
  expect(printTree(bTree,'postfix')).toMatchObject(
    ['D','E','B','H','I','F','J','G','C','A']
  );
});

test("Infix order with input (A,,(B,(D),(E)),(C,(F,(H),(I)),(G,(J)))) match with ['D','B','E','A','H','F','I','C','J','G']", () => {
  expect(printTree(bTree,'infix')).toMatchObject(
    ['D','B','E','A','H','F','I','C','J','G']
  );
});

test("Prefix order with input (A,,(B,(D),(E)),(C,(F,(H),(I)),(G,(J)))) match with ['A','B','D','E','C','F','H','I','G','J']", () => {
  expect(printTree(bTree,'prefix')).toMatchObject(
    ['A','B','D','E','C','F','H','I','G','J']
  );
});