/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const indices = [0, 0, 0]

  function fill(index) {
    if (index < indices[0]) {
      nums[index] = 0
    } else if (index < indices[0] + indices[1]) {
      nums[index] = 1
    } else {
      nums[index] = 2
    }
  }

  for (let l = 0, r = nums.length - 1; l < nums.length; l++, r--) {
    if (r - l >= 0) {
      indices[nums[l]]++
      if (r - l !== 0) {
        indices[nums[r]]++
      } else {
        fill(l)
      }
    } else {
      fill(l)
      fill(r)
    }
  }
}

var sortColorsTwoPass = function(nums) {
  const count = [0, 0, 0]

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++
  }

  for (let i = 0; i < nums.length; i++) {
    if (count[0] > 0) {
      nums[i] = 0
      count[0]--
    } else if (count[1] > 0) {
      nums[i] = 1
      count[1]--
    } else if (count[2] > 0) {
      nums[i] = 2
      count[2]--
    }
  }
}

// let unsorted = [1, 1, 2, 2, 2, 2]
// sortColors(unsorted)
// console.log(unsorted)

// unsorted = [1, 2, 1, 0, 1]
// sortColors(unsorted)
// console.log(unsorted)

unsorted = [2, 0, 1]
sortColors(unsorted)
console.log(unsorted)
