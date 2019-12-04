const uniqSort = arr => {
  const cache = {}; // Keeps track of all values that we've seen before.
  const unique = [];

  arr.map(num => {
    if (!cache[num]) {
      cache[num] = true;
      unique.push(num);
    }
  });

  return unique.sort((a, b) => a - b);
};

uniqSort([4, 2, 2, 2, 3, 2, 2, 2, 2]); // => [2,3,4]

// Linear time.
// Linear space complexity b.c. of cache.
