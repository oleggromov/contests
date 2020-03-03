/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_square = function(nums) {
  let sum = nums[0]

  for (let i = 0; i < nums.length; i++) {
    let current = 0
    for (let j = i; j < nums.length; j++) {
      current += nums[j]
      if (current > sum) {
        sum = current
      }
    }
  }

  return sum
}

function maxSubArray(nums) {
  let leftSum = 0
  let rightSum = 0

  let leftLargestIndex
  let leftLargestSum = -Infinity
  let rightLargestIndex
  let rightLargestSum = -Infinity
  let largestSingle = -Infinity

  // Initial boundaries
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    leftSum += nums[i]
    if (leftSum >= leftLargestSum) {
      leftLargestSum = leftSum
      leftLargestIndex = i
    }

    rightSum += nums[j]
    if (rightSum >= rightLargestSum) {
      rightLargestSum = rightSum
      rightLargestIndex = j
    }

    if (nums[i] > largestSingle) {
      largestSingle = nums[i]
    }
  }

  // console.log(leftLargestIndex, rightLargestIndex)

  if (leftLargestIndex < rightLargestIndex) {
    // Check 2 possibilities

    let newLeftSum = 0
    let newLeftLargestSum = -Infinity
    let newLeftLargestIndex

    for (let i = 0; i < nums.length; i++) {
      newLeftSum += nums[i]
      if (i >= rightLargestIndex && newLeftSum > newLeftLargestSum) {
        newLeftLargestSum = newLeftSum
        newLeftLargestIndex = i
      }
    }

    // console.log(newLeftLargestIndex, rightLargestIndex)

    let sums = [0, 0]
    for (let i = rightLargestIndex; i < newLeftLargestIndex + 1; i++) {
      sums[0] += nums[i]
    }

    let newRightSum = 0
    let newRightLargestSum = -Infinity
    let newRightLargestIndex

    for (let i = nums.length - 1; i >= 0; i--) {
      newRightSum += nums[i]
      if (i <= leftLargestIndex && newRightSum > newRightLargestSum) {
        newRightLargestSum = newRightSum
        newRightLargestIndex = i
      }
    }
    // console.log(leftLargestIndex, newRightLargestIndex)

    for (let i = newRightLargestIndex; i < leftLargestIndex + 1; i++) {
      sums[1] += nums[i]
    }

    return Math.max(...sums, largestSingle)
  } else {
    let sum = 0
    for (let i = rightLargestIndex; i < leftLargestIndex + 1; i++) {
      sum += nums[i]
    }

    return Math.max(sum, largestSingle)
  }
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 'must be 6')
console.log(maxSubArray([4,-5,3,2,1,-3,-2,8]), 'must be 9')
console.log(maxSubArray([2,7,-3,2,8,-10]), 'must be 16')
// console.log(maxSubArray([-2,2,-3,6,-1,8,-9]))
// // // Failed cases
console.log(maxSubArray([-1,0,-2]), 'must be 0')
console.log(maxSubArray([-2,-1,-2]), 'must be -1')
console.log(maxSubArray([1,2,1]), 'must be 4')
// console.log(maxSubArray([0,-3,1,1]))
console.log(maxSubArray([0]), 'must be 0')
console.log(maxSubArray([3,-2,-3,-3,1,3,0]), 'must be 4')
// console.log(maxSubArray([-1,-2,-2,-2,3,2,-2,0]))
console.log(maxSubArray([-1,-2]), 'must be -1')
console.log(maxSubArray([-2,-1]), 'must be -1')
console.log(maxSubArray([3,2,-3,-1,1,-3,1,-1]), 'must be 5')
console.log(maxSubArray([-1,1,-3,-2,2,-1,-2,1,2,-3]), 'must be 3')
console.log(maxSubArray([[9,0,-2,-2,-3,-4,0,1,-4,5,-8,7,-3,7,-6,-4,-7,-8]]), 'must be 11')


// console.log(maxSubArray_square([-2, 1]), 'must be 1')
// console.log(maxSubArray_square([-2,1,-3,4,-1,2,1,-5,4]))