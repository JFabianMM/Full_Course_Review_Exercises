function apiWithTimeout(httpReq, milliseconds) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(new Error("Error"));
        }, milliseconds)
        httpReq.then(res=>{resolve(res)}, err=>{reject(err)})
    });
};

async function asyncProcessing (url) {  
    let res = apiWithTimeout(fetch(url), 2000).then((result) => {return result;}).catch(error => {return error.name;});
    return res 
};
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const repeatedGreetings = async (time) => {
    await sleep(time);
}

async function queryRetry(url, maxRetry, delay, useIncrement) {  
  let result='';
  let timeincreaseRate=1.5;
  for (let i=0; i<=maxRetry; i++) {
      result = await asyncProcessing(url)
      if (result!='Error'){
          break;
      }
      if (useIncrement==true){
         delay=delay*timeincreaseRate;
         if (i==maxRetry){
          throw new Error('Too many retries');
         }
         await repeatedGreetings(delay);
      }
  }
  return result
}

module.exports = queryRetry