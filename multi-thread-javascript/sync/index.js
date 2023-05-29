function fibbonacci(iteration) {
    if (iteration < 2) return 1;
    return fibbonacci(iteration - 2) + fibbonacci(iteration - 1);
}

const doFib = (iterations) =>
    new Promise((resolve, reject) => {
        const start = Date.now();
        const result = fibbonacci(iterations);
        console.log(`Single Run Time taken: ${Date.now() - start}ms`);
        resolve(result);
    });

const main = async () => {
    const start = Date.now();
    const result = await Promise.all([doFib(40), doFib(40), doFib(40), doFib(40), doFib(40), doFib(40), doFib(40), doFib(40), doFib(40), doFib(40)]);
    console.log(`Total Time taken: ${Date.now() - start}ms`);
    console.log('results', result);
};

main().catch(console.error);
