const printTree = require('./exercise10.js') 

test("The function must traverse all nodes in Posfix order given the binary tree (AA,(B,(D,),(E,,)),(C,(F,(H),(I)))) resulting in ['D','E','B','H','I','F','C','AA']", () => {
  const bTree = '(AA,(B,(D,),(E,,)),(C,(F,(H),(I))))';   
  expect(printTree(bTree,'postfix')).toMatchObject(
    ['D','E','B','H','I','F','C','AA']
  );
});

test("The function must traverse all nodes in Infix order given the binary tree (AA,(B,(D,),(E,,)),(C,(F,(H),(I)))) resulting in ['D','B','E','AA','H','F','I','C']", () => {
  const bTree = '(AA,(B,(D,),(E,,)),(C,(F,(H),(I))))';  
  expect(printTree(bTree,'infix')).toMatchObject(
    ['D','B','E','AA','H','F','I','C']
  );
});

test("The function must traverse all nodes in Prefix order given the binary tree (AA,(B,(D,),(E,,)),(C,(F,(H),(I)))) resulting in ['AA','B','D','E','C','F','H','I']", () => {
  const bTree = '(AA,(B,(D,),(E,,)),(C,(F,(H),(I))))';  
  expect(printTree(bTree,'prefix')).toMatchObject(
    ['AA','B','D','E','C','F','H','I']
  );
});

test("The function must trwow an error given the invalid input (AA,(B,(D,),(E,,,)),(C,(F,(H),(I)))) toBe ('Invalid Input')", () => {
  const bTree = '(AA,(B,(D,),(E,,,)),(C,(F,(H),(I))))'; 
  try {
    printTree(bTree,'postfix');
  } catch (e) {
    expect(e.message).toBe("Invalid Input");
  }  
});

test("The function must trwow an error given the invalid input (AA,(B,,(D),(E)),(C,(F,(H),(I)))) toBe ('Invalid Input')", () => {
  const bTree = '(AA,(B,,(D,),(E)),(C,(F,(H),(I))))'; 
  try {
    printTree(bTree,'postfix');
  } catch (e) {
    expect(e.message).toBe("Invalid Input");
  }  
});

test("The function must trwow an error given the invalid input ((AA,(B,(D),(E)),(C,(F,(H),(I))))) toBe ('Invalid Input')", () => {
  const bTree = '((AA,(B,(D,),(E)),(C,(F,(H),(I)))))'; 
  try {
    printTree(bTree,'postfix');
  } catch (e) {
    expect(e.message).toBe("Invalid Input");
  }  
});

test("The function must trwow an error given the invalid input (AA,(B,(D,),E),(C,(F,(H),(I)))) toBe ('Invalid Input')", () => {
  const bTree = '(AA,(B,(D),E),(C,(F,(H),(I))))'; 
  try {
    printTree(bTree,'postfix');
  } catch (e) {
    expect(e.message).toBe("Invalid Input");
  }  
});

test("The function must trwow an error given the invalid input (AA,(B,(D),(,E)),(C,(F,(H),(I)))) toBe ('Invalid Input')", () => {
  const bTree = '(AA,(B,(D),(,E)),(C,(F,(H),(I))))'; 
  try {
    printTree(bTree,'postfix');
  } catch (e) {
    expect(e.message).toBe("Invalid Input");
  }  
});

test("The function must trwow an error given the invalid input (A,(B),(C),(D)) toBe ('Invalid Input')", () => {
  const bTree = '(A,(B),(C),(D))'; 
  try {
    printTree(bTree,'postfix');
  } catch (e) {
    expect(e.message).toBe("Invalid Input");
  }  
});

test("The function must trwow an error given the invalid input (A,,(C),) toBe ('Invalid Input')", () => {
  const bTree = '(A,,(C),)'; 
  try {
    printTree(bTree,'postfix');
  } catch (e) {
    expect(e.message).toBe("Invalid Input");
  }  
});