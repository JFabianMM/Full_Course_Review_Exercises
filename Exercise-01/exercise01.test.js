const {runTasks, taskFactorySample} = require('./exercise01.js');

test('The runTasks (tasks, pool_size) with pool_size=2. Its expected [{velue:1},{velue:2},{velue:"error"},{velue:4},{velue:"error"},{velue:"error"}]', (done) => {
    const tasks = [
      taskFactorySample(2000,true, 1),
      taskFactorySample(1000,true, 2),
      taskFactorySample(2000,true, 'error'),
      taskFactorySample(2000,true, 4),
      taskFactorySample(1000,false, 'error'),
      taskFactorySample(2000,false, 'error'),
    ];
    const pool_size = 2;
    runTasks(tasks, pool_size)
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

test('The runTasks (tasks, pool_size) with pool_size=1. Its expected [{velue:2},{velue:5},{velue:"error"},{velue:1},{velue:"error"},{velue:"error"}]', (done) => {
    const tasks = [
      taskFactorySample(2000,true, 2),
      taskFactorySample(2000,true, 5),
      taskFactorySample(2000,true, 'error'),
      taskFactorySample(2000,true, 1),
      taskFactorySample(2000,false, 'error'),
      taskFactorySample(2000,false, 'error'),
    ];
    const pool_size = 1;
    runTasks(tasks, pool_size)
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