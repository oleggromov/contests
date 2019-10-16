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

function mergeInterval(a, b) {
  return [
    Math.min(a[0], b[0]),
    Math.max(a[1], b[1])
  ]
}

function overlaps(a, b) {
  return (b[0] >= a[0] && b[0] <= a[1]) || (a[0] >= b[0] && a[0] <= b[1])
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10],[12,13]]))
console.log(merge([[1,2],[3,4],[4,5],[7,8],[7,11]]))

// Failed
console.log(merge([[3,5],[0,0],[4,4],[0,2],[5,6],[4,5],[3,5],[1,3],[4,6],[4,6],[3,4]]))

console.log(merge([[0,1],[1,2]]))