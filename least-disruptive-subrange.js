
function distance(list1, startIndex, list2) {
  let result = 0

  for (let i = 0; i < list2.length; i++) {
    result += Math.abs(list2[i] - list1[startIndex + i])
  }

  return result
}

function leastDiruptiveSubrange (original, replacement) {
  let least = Infinity
  let leastIndex = -1

  for (let i = 0; i <= original.length - replacement.length; i++) {
    let current = distance(original, i, replacement)
    if (current < least) {
      least = current
      leastIndex = i
    }
  }

  return {least, leastIndex}
}

// console.log(distance([1,2,3], [1,2,3]))
// console.log(distance([1,2,3], [3,5,3]))

console.log(leastDiruptiveSubrange([1,2,3,4,5,6,7,8,9], [3,5,3]))
console.log(leastDiruptiveSubrange([1,2,3,4,5,6,7,8,9], [1]))
console.log(leastDiruptiveSubrange([9,8,7,6,5,4,3,2,1], [9]))
console.log(leastDiruptiveSubrange([1], [9]))
