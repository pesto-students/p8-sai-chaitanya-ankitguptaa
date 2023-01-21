function time(fn) {
  console.time("time taken");
  fn();
  console.timeEnd("time taken");
}

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      console.log("result from memoized cache:", cache.get(key));
      cache.get(key);
    } else {
      cache.set(key, fn(...args));
      console.log("result:", cache.get(key));
      return cache.get(key);
    }
  };
}

function add(...values) {
  let sum = 0;
  if (values.length > 0) {
    values.forEach((value) => {
      sum = sum + value;
    });
  }

  return sum;
}

const memoizeAdd = memoize(add);

function sumTimeEvaluator(...values) {
  console.log("Set of values passed to add method.:", values);
  time(() => memoizeAdd(...values));
}

sumTimeEvaluator(100, 100);
sumTimeEvaluator(100);
sumTimeEvaluator(100, 200);
sumTimeEvaluator(100, 100);
sumTimeEvaluator(100, 100, 100);
sumTimeEvaluator(100, 100, 100);
