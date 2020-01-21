function linearSearch(list, item) {
  let index = -1

  list.map((listItem, i) => {
    if (listItem === item) {
      index = i
    }
  })

  return index
}

linearSearch([1, 2, 3, 4, 5, 6], 5) // returns 4
