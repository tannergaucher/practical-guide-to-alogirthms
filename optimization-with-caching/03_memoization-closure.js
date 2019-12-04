const memoizedClosureTimes10 = () => {
  let cache = {};

  return n => {
    if (n in cache) {
      console.log(`fetching from cache`);
      return cache[n];
    } else {
      console.log(`calculating result`);
      let result = n * 10;
      cache[n] = result;
      return result;
    }
  };
};

const memoClosureTimes10 = memoizedClosureTimes10();

console.log(memoClosureTimes10(8));
console.log(memoClosureTimes10(9));
console.log(memoClosureTimes10(8));
