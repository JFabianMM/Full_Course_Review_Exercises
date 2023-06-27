// // **************************** //
// // Exercise 18
// // **************************** //

// 18.  Implement shorthand deep object assignment.
// function set(obj, path, value){}
// set(obj, 'path.to.deeply.nested.property', 42);    

// let obj={
//     arr:true
// }

const set = function(obj, path, value){
    try{
        let values = path.split('.');
        let len=values.length;
        let obj1;
        for (let i=0;i<len;i++){
            if (i==0){
               let val= values[len-1-i];
               let dynamic1 = val;
               obj1 = {[dynamic1] : value};}
            if (i<len-1 && i>0){
                let val= values[len-1-i];
                let dynamic1 = val;
                obj1 = {[dynamic1] : obj1};}
            if (i==len-1){
                let val= values[len-1-i];
                obj[val] = obj1;
             }
        }
        return obj
    }catch(e){
        throw e
    }
}

// let object= set(obj, 'path.to.deeply.nested.property', 42);
// console.log('object: ', object);
module.exports = set