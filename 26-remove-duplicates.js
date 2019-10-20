/**
 * @param {number[]} nums
 * @return {number}
 */

// Important idea: when dealing with multiple pointers, it's useful
// to write down array states at each iteration since it makes it
// apparent which position each of the pointer shall be at.

// Time: O(n)
// Space: O(1)
var removeDuplicates = function(nums) {
  let removed = 0

  let prev = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[prev]) {
      nums[i] = null
      removed++
    } else {
      prev += 1
      if (prev !== i) {
        nums[prev] = nums[i]
        nums[i] = null
      }
    }
  }

  return nums.length - removed
}

const array = [0,1,1,1,1,2,3,3]
console.log(removeDuplicates(array), array)

// [null, null, 0, 1, null, null, null, 2]
// [0, 1, 2, null, null, null, null, null]

// [0,1,2,null,null,null,3]
// [0,1,2,3,null,null,null]