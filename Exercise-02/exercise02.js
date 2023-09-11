const fetch = require("node-fetch");

async function asyncProcessing (url, timeout) {
    let res=[]; 
    res[0] = fetch(url).then((result) => {
                return result.json();
            });
    res[1] = new Promise((resolve, reject)=>{     // This set the timeout
        setTimeout(function(){
                reject('timeout');
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
          break;
      } catch(err) {
          result= err;
      }
      if (useIncrement==true){
         delay=delay*timeincreaseRate;
      }
  }
  return result
}

module.exports = queryRetry


















// async function asyncProcessing (url, timeout) {
//   let res=[]; 
//   let resultado;
//   let responseTime=100;
//   console.log('timeout', timeout);
//   res[0] = new Promise((resolve, reject)=>{    // This emulate the fetch
//       setTimeout(function(){                   // Here is the fetch function
//             // const response = await fetch("http://example.com/movies.json");
//             // const movies = await response.json();
//             fetch(url).then((result) => {
//               // console.log(result);
//               return new Promise((resolve, reject) => {
//                   resolve(result.json());
//               }).then((response) => {
//                       // console.log(result);
//                       return response;
//                       //resultado=result;
//                   });
//           });
//             // fetch(url).then(response => {
//             //     if (response.ok) {
//             //         resolve({                       /// This emulate the api data
//             //                 users: [
//             //                     { name: "Fabián" },
//             //                     { name: "Jesús" }
//             //                 ]
//             //             });
//             //     }else{
//             //       reject('error');
//             //     }
//             // })
//       }, responseTime);     // This emulate the response time of fetch  
//     return resultado
//   }) 
