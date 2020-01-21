function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle of the array, rounded down
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight)
}

// Compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
mergeSort(list) // => [1, 2, 2, 3, 3, 5, 6, 7, 8]
