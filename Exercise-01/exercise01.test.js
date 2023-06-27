const myTaskFactory = require('./exercise01.js')

const tasks1 = [200];
const pool_size1 = 1;

test('The timeout is lower than 400 ms ', () => {
    return myTaskFactory(tasks1, pool_size1).then(finalresult => {
          expect(finalresult).toMatchObject([{ value: 200 }]);
        });
});

const tasks2 = [450];
const pool_size2 = 1;

test('The timeout is lower than 400 ms', () => {
    return myTaskFactory(tasks2, pool_size2).then(finalresult => {
          expect(finalresult).toMatchObject([ { reason: 'ms > 400!!' } ]);
        });
});

const tasks3 = [600, 600, 200, 750, 350, 900, 300];
const pool_size3 = 1;

test('The array contain timeouts higher and lower than 400 ms', () => {
    return myTaskFactory(tasks3, pool_size3).then(finalresult => {
          expect(finalresult).toMatchObject([
            { reason: 'ms > 400!!' },
            { reason: 'ms > 400!!' },
            { value: 200 },
            { reason: 'ms > 400!!' },
            { value: 350 },
            { reason: 'ms > 400!!' },
            { value: 300 }
          ]);
        });
});

const tasks4 = [600, 600, 200, 750, 350, 900, 300];
const pool_size4 = 3;

test('The array contain timeouts higher and lower than 400 ms with pool_size higher then 1', () => {
    return myTaskFactory(tasks4, pool_size4).then(finalresult => {
          expect(finalresult).toMatchObject([
            { reason: 'ms > 400!!' },
            { reason: 'ms > 400!!' },
            { value: 200 },
            { reason: 'ms > 400!!' },
            { value: 350 },
            { reason: 'ms > 400!!' },
            { value: 300 }
          ]);
        });
});