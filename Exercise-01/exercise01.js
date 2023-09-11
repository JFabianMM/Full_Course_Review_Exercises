class Pool {
  constructor(concurrency) {
      this.tasks = [];
      this.concurrency = concurrency;
  }
  addTask(task) {
      this.tasks.push(task)
  }
  async _executeTasks(iterator) {
      const results = [];
      for (let [_, task] of iterator) {
          try {
              const res = await task.run();
              try {
                  if (task.isSuccessful(res)) {
                      await task.onSuccess(res);
                      results.push(res);
                  } else {
                      await task.onError(res);
                  }
              } catch (e) {
                  await task.onError(res);
              }
          } catch (e) {
              task.onError(e);
          }
      }
      return results;
  }
  async run() {
      const iterator = this.tasks.entries();
      const tasksWorkers = new Array(this.concurrency).fill(iterator).map(this._executeTasks);
      const res = await Promise.allSettled(tasksWorkers);
      const flattenedArrays = [];
      res.forEach((subArray) => {
          if (subArray.value) {
              subArray.value.forEach(elt => flattenedArrays.push(elt))
          }
      })
      this.tasks = [];
      return flattenedArrays;
  }
}

function taskFactorySample(ms, solved, val){
    let ar=[ms,solved,val];
     return ar
}

const taskFactory = (ms, solved, val) =>{
    let time=ms/1000;
    url=`https://hub.dummyapis.com/delay?seconds=${time}`;
    return fetch(url).then((result) => {
        if (solved){
            return val;
        }else{
            return 'error';
        }
    });
}

async function runTasks(tasks, pool_size){
    try{
        const max_tasks = tasks.length;
    const p = new Pool(pool_size);
    let finalResult= new Array(max_tasks).fill(0);

    for (let i = 0; i < max_tasks; i++) {
        p.addTask({
            async run() {
                let argum= tasks[i];
                let a= await taskFactory(argum[0], argum[1], argum[2]);
                return a;
            },
            async onSuccess(res) {
                let val={
                    velue:res
                }
                finalResult[i]=val;
            },
            async onError(err) {
                let val={
                    velue:err
                }
                finalResult[i]=val;
            }
        })
    }
    await p.run();
    return finalResult;
    }catch(error) {
    }
    
};

module.exports = {
    runTasks: runTasks,
    taskFactorySample: taskFactorySample
};

