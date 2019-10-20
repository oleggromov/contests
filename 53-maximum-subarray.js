/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
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

console.log(maxSubArray([-2, 1]))
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))