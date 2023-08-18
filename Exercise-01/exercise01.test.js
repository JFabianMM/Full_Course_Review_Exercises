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

const taskFactory = (ms, solved, val) =>
  new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
           if (solved){
            resolve(val)
           }else{
            throw new Error(val);
           }
      } catch (error) {
        reject(val)
      }
    }, ms)
  })
  

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

const tasks = [
   taskFactorySample(2000,true, 1),
   taskFactorySample(1000,true, 2),
   taskFactorySample(2000,true, 'error'),
   taskFactorySample(2000,true, 4),
   taskFactorySample(1000,false, 'error'),
   taskFactorySample(2000,false, 'error'),
 ];
const pool_size1 = 2;

test('The runTasks (tasks, pool_size1) with pool_size1=2. Its expected [{velue:1},{velue:2},{velue:"error"},{velue:4},{velue:"error"},{velue:"error"}]', (done) => {
  runTasks(tasks, pool_size1)
   .then(result=>expect(result).toMatchObject([
        { velue: 1 },
        { velue: 2 },
        { velue: 'error' },
        { velue: 4 },
        { velue: 'error' },
        { velue: 'error' }
      ]));
      done()
});

const tasks2 = [
  taskFactorySample(2000,true, 2),
  taskFactorySample(2000,true, 5),
  taskFactorySample(2000,true, 'error'),
  taskFactorySample(2000,true, 1),
  taskFactorySample(2000,false, 'error'),
  taskFactorySample(2000,false, 'error'),
];
const pool_size2 = 1;

test('The runTasks (tasks2, pool_size2) with pool_size2=1. Its expected [{velue:2},{velue:5},{velue:"error"},{velue:1},{velue:"error"},{velue:"error"}]', (done) => {
 runTasks(tasks2, pool_size2)
  .then(result=>expect(result).toMatchObject([
       { velue: 2 },
       { velue: 5 },
       { velue: 'error' },
       { velue: 1 },
       { velue: 'error' },
       { velue: 'error' }
     ]));
     done()
});