// Write a function makeChange that returns the least number of coins that add up to that amount

const change = []

function makeChange(total) {
  const coins = [25, 10, 5]

  // compare total against coins[i]
  // if total >= coins[i], push coins[i] to change
  // else increment coins[i]
  // return change

  for (let i = 0; i < coins.length; i++) {
    if (total >= coins[i]) {
      change.push(coins[i])
      total -= coins[i]
      makeChange(total)
    }
    i++
  }
}

makeChange(50)

console.log(change)
