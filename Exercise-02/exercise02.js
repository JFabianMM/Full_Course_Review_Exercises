// // **************************** //
// // Exercise 2
// // **************************** //

// 2. Create a retry function for async calls. 
//    Select retry time with increments.

//  const urlQuery = url => () => fetch(url)
//  const maxRetry = 3;
//  const useIncrement = true;
//  const delay = 1000;

/**
* perform query successfully once or try up to a maximum of maxRetry times
* if unsuccessful, delay the next attempt for an amount of time. If attempts
* continue to fail then increase the delay between attempts if useIncrements
* is set to true.
*/


const fetch = require("node-fetch");

async function asyncProcessing (url, timeout) {
  let res=[]; 
  let responseTime=1000;
  //let responseTime=1600;
  //let responseTime=2600;
  console.log('timeout', timeout);
  res[0] = new Promise((resolve, reject)=>{    // This emulate the fetch
      setTimeout(function(){                   // Here is the fetch function
              fetch(url).then(response => {
                  if (response.ok) {
                      resolve({                       /// This emulate the api data
                              users: [
                                  { name: "Fabián" },
                                  { name: "Jesús" }
                              ]
                          });
                  }else{
                    reject('error');
                  }
              })
      }, responseTime);     // This emulate the response time of fetch    
  }) 

  res[1] = new Promise((resolve, reject)=>{     // This set the timeout
    setTimeout(function(){
        if(timeout<responseTime){
          reject('timeout');
        }
    }, timeout);    
})

  const result = await Promise.race(res);
  return result
};

async function queryRetry(url, maxRetry, delay, useIncrement) {  
  let result='';
  let timeincreaseRate=1.5;
  for (let i=0; i<maxRetry; i++) {
      try{
          result = await asyncProcessing(url, delay);
      } catch(err) {
          result= err;
      }
      if (useIncrement==true){
         delay=delay*timeincreaseRate;
      }
      if (result != 'timeout'){
          break;
      } 
      if (useIncrement==false){
        break;
     }
  }
  console.log(result);
  return result
}

module.exports = queryRetry