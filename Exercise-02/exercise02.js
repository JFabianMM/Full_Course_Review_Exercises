function apiWithTimeout(httpReq) {
    return new Promise(function(resolve, reject) {
        httpReq.then(res=>{resolve(res)}, err=>{reject(err)})
    });
};

async function asyncProcessing (url) {  
    let res = apiWithTimeout(fetch(url)).then((result) => {return result;}).catch(error => {return error.name;});
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
      result = await asyncProcessing(url);
      if (result.status == 200){
        break
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