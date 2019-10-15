/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const ranges = []
  if (nums.length) {
    let range = []

    for (let i = 0; i < nums.length; i++) {
      if (!range.length) {
        range = [nums[i], nums[i]]
      } else if (nums[i] - range[1] === 1) {
        range[1] = nums[i]
      } else {
        ranges.push(dumpRange(range))
        range = [nums[i], nums[i]]
      }
    }

    ranges.push(dumpRange(range))
  }

  return ranges
}

function dumpRange(range) {
  if (range[0] !== range[1]) {
    return range.join('->')
  }
  return String(range[0])
}

console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))