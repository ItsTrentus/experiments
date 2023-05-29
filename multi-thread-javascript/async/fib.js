const { workerData, parentPort } = require('worker_threads');

function fibbonacci(iteration) {
    if (iteration < 2) return 1;
    return fibbonacci(iteration - 2) + fibbonacci(iteration - 1);
}

const result = fibbonacci(workerData);
parentPort.postMessage(result);
