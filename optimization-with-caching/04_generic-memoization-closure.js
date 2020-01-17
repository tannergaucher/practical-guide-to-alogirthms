const memoizedClosureTimes10 = () => {
  let cache = {}

  return n => {
    if (n in cache) {
      console.log(`fetching from cache`)
      return cache[n]
    } else {
      console.log(`calculating result`)
      let result = n * 10
      cache[n] = result
      return result
    }
  }
}

const memoClosureTimes10 = memoizedClosureTimes10()

console.log(memoClosureTimes10(8))
console.log(memoClosureTimes10(9))
console.log(memoClosureTimes10(8))

// make the memoization function generic, to accept times10 as a callback, rather than defining it inside the if / else or pulling it out of global scope.

const times10 = n => n * 10
const times20 = n => n * 20

const memoizedClosureTimes10 = cb => {
  let cache = {}

  return n => {
    if (n in cache) {
      console.log(`fetching from cache`)
      return cache[n]
    } else {
      console.log(`calculating result`)
      let result = cb(n)
      cache[n] = result
      return result
    }
  }
}

const memoClosureTimes10 = memoizedClosureTimes10(times20)

console.log(memoClosureTimes10(8))
console.log(memoClosureTimes10(9))
console.log(memoClosureTimes10(8))
