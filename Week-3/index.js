//! get to know if caching is supported in the browser.
let isCacheSupported = 'caches' in window;
console.log('Caching Supported: ', isCacheSupported);
function memoize(fn) {
    return function (...args) {
        const key = args.toString();
        if (cache.has(key)) {
            cache.get(key);
        } else {
            cache.set(key, fn(...args));
            return cache.get(key);
        }
    }
}

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}
function calcFibonacciResult(input) {
    if (isNaN(input)) {
        throw 'Enter valid number';
    }
    const fib10NoMemo = 'Fibonacci of ' + input + ' numbers without memoization';
    console.time(fib10NoMemo)
    console.log('fibonacci(', input, ') =', fibonacci(input))
    console.timeEnd(fib10NoMemo)
}

calcFibonacciResult(10);
calcFibonacciResult(20);
calcFibonacciResult(30);