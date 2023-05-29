const { Worker } = require('worker_threads');

const doFib = (iterations) =>
    new Promise((resolve, reject) => {
        const start = Date.now();

        // Start the worker
        const worker = new Worker('./fib.js', { workerData: iterations });

        // Listen for results
        worker.once('message', (result) => {
            console.log(`[${worker.threadId}] Worker Thread Time: ${Date.now() - start}ms`);
            resolve(result);
        });

        // Listen for errors
        worker.once('error', (err) => reject(err));
    });

const main = async () => {
    try {
        const start = Date.now();
        const results = await Promise.all([
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
        ]);
        console.log(`Total Time taken: ${Date.now() - start}ms`);
        console.log('results', results);
    } catch (error) {
        console.error(error);
    }
};

main();
