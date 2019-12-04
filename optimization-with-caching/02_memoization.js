// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn

const times10 = n => {
  return n * 10;
};

console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
console.log("times10 returns:", times10(9));

const cache = {};

const memoTimes10 = n => {
  if (n in cache) {
    console.log("fetching from cache");
    return cache[n];
  } else {
    console.log("calculated result");
    const result = times10(n);
    cache[n] = result;
    return result;
  }
};

console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
console.log("Task 2 calculated value:", memoTimes10(9)); // calculated
console.log("Task 2 cached value:", memoTimes10(9)); // cached
