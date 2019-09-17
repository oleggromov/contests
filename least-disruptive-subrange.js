function rollingDistance(original) {
  const result = Array(original.length)
  for (let i = 0; i < original.length; i++) {
    result[i] = original[i] + (result[i - 1] || 0)
  }
  return result
}

function leastDiruptiveSubrange(original, replacement) {
  const replacementSum = replacement.reduce((acc, val) => acc + val, 0)
  const originalDistances = rollingDistance(original)

  let leastIndex = -1
  let leastValue = Infinity
  for (let i = 0; i <= original.length - replacement.length; i++) {
    const current = Math.abs((originalDistances[i + replacement.length - 1] - (originalDistances[i - 1] || 0)) - replacementSum)
    if (current < leastValue) {
      leastIndex = i
      leastValue = current
    }
  }

  return { leastValue, leastIndex }
}

// console.log(distance([1,2,3], [1,2,3]))
// console.log(distance([1,2,3], [3,5,3]))

// console.log(leastDiruptiveSubrange([1,2,3,4,5,6,7,8,9], [1]))

// console.log(leastDiruptiveSubrange([1], [9]))

console.log(leastDiruptiveSubrange([1,2,3,4,5,6], [3,5,3]))
console.log(leastDiruptiveSubrange([1], [9]))
console.log(leastDiruptiveSubrange([3,1,7,6,5,9,8,4,3,2,1], [9,8]))