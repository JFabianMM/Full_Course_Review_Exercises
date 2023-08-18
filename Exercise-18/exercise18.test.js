const set = require('./exercise18');

let obj1={arr:true};
test('Add to obj1={arr: true} a shorthand deep object of "a.b.c" = {arr: true, path:{to:{deeply:{nested:{property:42}}}}}', () => {
  expect(set(obj1, 'path.to.deeply.nested.property', 42)).toEqual({
    arr:true,
    path:{
      to:{
        deeply:{
          nested:{
            property:42
          }
        }
      }
    }
  });
});


let obj2 = {a: 1};
test('Add to obj2={a: 1} a shorthand deep object of "a.b.c" = {a: 1}', () => {
   expect(set(obj2, 'a.b.c', 2)).toEqual({a: 1});
});

let obj3 = {
  a: {
    x: 3
  }
};
test('Add to obj3={a: {x:3}} a shorthand deep object of "a.b.c" = {a: {x:3,b:{c:2}}}', () => {
   expect(set(obj3, 'a.b.c', 2)).toEqual({
    a: {
      x: 3,
      b: {
        c:2
      }
    }
  });
});

let obj4 = {
  a: {
    b:{
      cc:'cc', 
      k:{f:'f'},
      ss:{last:'last'}
    }
  }
}
test('Add to obj4={a: {b:{cc:"cc",k:{f:"f"},ss:{last:"last"}}}} a shorthand deep object of "a.b.c" = {a: {b:{cc:"cc",k:{f:"f"},ss:{last:"last"},c:2}}}', () => {
   expect(set(obj4, 'a.b.c', 2)).toEqual({
    a: {
      b:{
        cc:'cc', 
        k:{f:'f'},
        ss:{last:'last'},
        c:2
      }
    }
  });
});