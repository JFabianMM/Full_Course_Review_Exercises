const matrixArea = require('./exercise14.js') 
 
test("The greatest area formed by rectangles of 1's in matrix is 12", () => {
  const matrix = [[1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 1, 0, 1],
                [1, 1, 1, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
              ]
  expect(matrixArea(matrix)).toBe(12);
});
 
test("The greatest area formed by rectangles of 1's in matrix2 is 6", () => {
  const matrix = [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1],
                [0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0],
              ] 
  expect(matrixArea(matrix)).toBe(6);
});