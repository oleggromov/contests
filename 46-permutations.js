/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const result = []

  function p(nums, used) {
    if (nums.length === 1) {
      result.push([...used, ...nums])
    }

    for (value of nums) {
      p(nums.filter(val => value !== val), [...used, value])
    }
  }

  p(nums, [])

  return result
}

console.log(permute([1,2,3]))