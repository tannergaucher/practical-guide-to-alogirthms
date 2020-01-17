/* 
Rewrite this function so that it's iterative, rather than recursive.
*/

function joinElements(array, joinToString) {
  let answer = ''

  array.map((el, i) => {
    if (i < array.length - 1) {
      answer += `${el}${joinToString}`
    } else {
      answer += `${el}`
    }
  })

  console.log(answer)
  return answer
}

joinElements(['s', 'cr', 't cod', ' :) :)'], 'e')
