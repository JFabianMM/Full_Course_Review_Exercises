const set = require('./exercise18');

let obj={
    arr:true
}
let object= set(obj, 'path.to.deeply.nested.property', 42);

let obj2={
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
}

test( 'Shorthand deep object assignment = obj2', () => {
  expect(set(obj, 'path.to.deeply.nested.property', 42)).toEqual(obj2);
});