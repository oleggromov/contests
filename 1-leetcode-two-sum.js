/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let ii = i + 1; ii < nums.length; ii++) {
            if (nums[i] + nums[ii] === target) return [i, ii]
        }
    }
    return []
}
