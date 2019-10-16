/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const result = intervals.slice()

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (i !== j && result[i] && result[j]) {
        if (overlaps(result[i], result[j])) {
          result[i] = mergeInterval(result[i], result[j])
          result[j] = null
          i--
          continue
        }
      }
    }
  }

  return result.filter(Boolean)
}

const mergeSorted = function(nums) {
  // Time: O(n log(n))
  // Space: up to O(n)
  nums.sort((a, b) => a[0] < b[0] ? -1 : 1)

  // Time: O(n)
  // Space: O(1)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] && nums[i + 1] && overlaps(nums[i], nums[i + 1])) {
      nums[i + 1] = mergeInterval(nums[i], nums[i + 1])
      nums[i] = null
    }
  }

  // Time: O(n)
  return nums.filter(Boolean)
}

function mergeInterval(a, b) {
  return [
    Math.min(a[0], b[0]),
    Math.max(a[1], b[1])
  ]
}

function overlaps(a, b) {
  return (b[0] >= a[0] && b[0] <= a[1]) || (a[0] >= b[0] && a[0] <= b[1])
}

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10],[12,13]]))
// console.log(merge([[1,2],[3,4],[4,5],[7,8],[7,11]]))
// console.log(merge([[3,5],[0,0],[4,4],[0,2],[5,6],[4,5],[3,5],[1,3],[4,6],[4,6],[3,4]]))
// console.log(merge([[0,1],[1,2]]))

console.log(mergeSorted([[1,3],[2,6],[8,10],[15,18]]))
console.log(mergeSorted([[2,3],[4,5],[6,7],[8,9],[1,10],[12,13]]))
console.log(mergeSorted([[1,2],[3,4],[4,5],[7,8],[7,11]]))
console.log(mergeSorted([[3,5],[0,0],[4,4],[0,2],[5,6],[4,5],[3,5],[1,3],[4,6],[4,6],[3,4]]))
console.log(mergeSorted([[0,1],[1,2]]))