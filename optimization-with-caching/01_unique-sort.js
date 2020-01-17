const uniqSort = arr => {
  const cache = {}
  const unique = []

  arr.map(num => {
    if (!cache[num]) {
      cache[num] = true
      unique.push(num)
    }
  })

  return unique.sort((a, b) => a - b)
}

uniqSort([4, 2, 2, 2, 3, 2, 2, 2, 2]) // => [2,3,4]

/* 
NOTES

Linear time.
Linear space complexity b.c. of cache.
*/
