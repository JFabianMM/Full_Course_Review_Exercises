const set = require('./exercise18');

test('The function implement shorthand deep object assignment. To obj={arr: true} a shorthand deep object of "a.b.c" with value 42. The result must be {arr: true, path:{to:{deeply:{nested:{property:42}}}}}', () => {
  let obj={arr:true};
  expect(set(obj, 'path.to.deeply.nested.property', 42)).toEqual({
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

test('The function implement shorthand deep object assignment. To obj={a: 1} a shorthand deep object of "a.b.c" with value 2. The result must be {a: 1}', () => {
  let obj = {a: 1};
  expect(set(obj, 'a.b.c', 2)).toEqual({a: 1});
});

test('The function implement shorthand deep object assignment. To obj={a: {x:3}} a shorthand deep object of "a.b.c" with value 2. The result must be {a: {x:3,b:{c:2}}}', () => {
  let obj = {
    a: {
      x: 3
    }
  };
  expect(set(obj, 'a.b.c', 2)).toEqual({
    a: {
      x: 3,
      b: {
        c:2
      }
    }
  });
});

test('The function implement shorthand deep object assignment. To obj={a: {b:{cc:"cc",k:{f:"f"},ss:{last:"last"}}}} a shorthand deep object of "a.b.c" with value 2. The result must be {a: {b:{cc:"cc",k:{f:"f"},ss:{last:"last"},c:2}}}', () => {
  let obj = {
    a: {
      b:{
        cc:'cc', 
        k:{f:'f'},
        ss:{last:'last'}
      }
    }
  }
  expect(set(obj, 'a.b.c', 2)).toEqual({
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

test('The function implement shorthand deep object assignment. To obj={a: {b:{cc:{l:func},k:{f:"f"},ss:{last:"last"}}}} a shorthand deep object of "a.b.c" with value 2. The result must be {a: {b:{cc:{l:func},k:{f:"f"},ss:{last:"last"},c:2}}}', () => {
  let func=function(){return true};
  let obj = {
    a: {
      b:{
        cc:{l:func}, 
        k:{f:'f'},
        ss:{last:'last'}
      }
    }
  }
  expect(set(obj, 'a.b.c', 2)).toEqual({
    a: {
      b:{
        cc:{l:func}, 
        k:{f:'f'},
        ss:{last:'last'},
        c:2
      }
    }
  });
});

test('The function implement shorthand deep object assignment. To obj={a: {n:func}}, a shorthand deep object of "a.b.c" with value 2. The result must be = {a: {n:func},b:{c:2}}', () => {
  let func=function(){return true};
  let obj = {
      a: {n:func}
  } 
  expect(set(obj, 'a.b.c', 2)).toEqual({
    a: {
      n:func,
      b:{c:2}
    }
  });
});

