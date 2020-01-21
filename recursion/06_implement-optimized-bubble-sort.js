const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function bubbleSort(array) {
  let countOuter = 0
  let countInner = 0
  let countSwap = 0

  let swapped

  do {
    countOuter++
    swapped = false
    for (let i = 0; i < array.length; i++) {
      countInner++
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++
        swap(array, i, i + 1)
        swapped = true
      }
    }
  } while (swapped)
}

bubbleSort(arrayRandom)
