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
      const result = await Promise.allSettled(tasksWorkers);
      const flattenedArrays = [];
      result.forEach((subArray) => {
          if (subArray.value){subArray.value.forEach(elt => flattenedArrays.push(elt))}
      })
      this.tasks = [];
      return flattenedArrays;
  }
}

function taskFactorySample(ms, solved, val){
     return [ms,solved,val];
}

const taskFactory = (ms, solved, value) =>{
    url=`https://hub.dummyapis.com/delay?seconds=${ms/1000}`;
    return fetch(url).then(() => {
        if (solved){
            return value;
        }else{
            return 'error';
        }
    });
}

async function runTasks(tasks, pool_size){
        const max_tasks = tasks.length;
        const pool = new Pool(pool_size);
        let finalResult= new Array(max_tasks).fill(0);
        for (let i = 0; i < max_tasks; i++) {
            pool.addTask({
                async run() {
                    let argum= tasks[i];
                    let result= await taskFactory(argum[0], argum[1], argum[2]);
                    return result;
                },
                async onSuccess(res) {
                    let val={velue:res}
                    finalResult[i]=val;
                },
                async onError(err) {
                    let val={velue:err}
                    finalResult[i]=val;
                }
            })
        }
        await pool.run();
        return finalResult;
};

module.exports = {
    runTasks: runTasks,
    taskFactorySample: taskFactorySample
};

