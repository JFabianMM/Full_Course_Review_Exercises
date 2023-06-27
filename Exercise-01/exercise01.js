// // **************************** //
// // Exercise 1
// // **************************** //

// // 1. Create a pool of N running tasks from an M sized list. 
// //    Notify when all tasks are done.

// const taskFactorySample = (delay, resolve, val) =>
// () => new Promise((res, rej)=>setTimeout(resolve?res:rej,delay, val))

// const tasks = [
//    taskFactorySample(500,true, 1),
//    taskFactorySample(1000,true, 2),
//    taskFactorySample(5000,false, 'error'),
//    taskFactorySample(2000,true, 4),
//    taskFactorySample(1000,false, 'error'),
//    taskFactorySample(1000,false, 'error'),
// ];

// // only run two promises at a time
// const pool_size = 2;

// /**
// *  Expect to get an array equal to tasks.length
// *  with the values or reasons for each of the promises.
// *
// *  [{value: 1}, {value:2}, {error: 'error'}, ...]
// */

// runTasks(tasks, pool_size).then(console.log);


async function asyncProcessing (arr) {
  let len=arr.length;  
  let res=[0];
  for (let i=0; i<len; i++){
      let ms=arr[i]; 
      res[i] = new Promise((resolve, reject)=>{
          setTimeout(function(){
              if(ms<400){
                resolve(ms);
              }else{
                reject('ms > 400!!');
              }
          }, ms);    
      })  
  }
  let result = Promise.allSettled(res);
  return result
};

async function myTaskFactory(tasks, pool_size=1) {  
  const len = tasks.length;
  let result=[];
  let finalresult=[];
  let range=Math.floor(len/pool_size);
  if (len%pool_size>0){range++;}
  for (let i=0; i<range; i++) {
      let array= tasks.slice(i*pool_size,(i*pool_size)+pool_size);
      try{
          result.push(await asyncProcessing(array));
      } catch(err) {
          result.push(err);
      }
  }
  for (let i=0; i<range; i++){
      let len=result[i].length;
      for (let ii=0; ii<len; ii++){
          let value=result[i][ii];
          delete value.status;
          finalresult.push(value);
      }
  }
  console.log(finalresult);
  return finalresult
}

module.exports = myTaskFactory