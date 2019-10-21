/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//   let left = 0
//   // We may need to insert beyond
//   let right = nums.length

//   // O(log n)
//   while (right - left > 1) {
//     const middle = Math.floor(left + (right - left) / 2)

//     if (target < nums[middle]) {
//       right = middle
//     } else {
//       left = middle
//     }
//   }

//   return target <= nums[left] ? left : right
// }

var searchInsert = function(nums, target) {
  const index = nums.indexOf(target)
  if (index !== -1) {
    return index
  } else {
    const len = nums.length
    let i
    for (i = 0; i < len; i++) {
      if (nums[i] > target) {
        return i
      }
    }
    return i
  }
}

console.log(searchInsert([1,3,5,6], -1))
console.log(searchInsert([1,3,5,6], 0))
console.log(searchInsert([1,3,5,6], 1))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 3))
console.log(searchInsert([1,3,5,6], 4))
console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 6))
console.log(searchInsert([1,3,5,6], 7))