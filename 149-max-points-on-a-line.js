/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPoints(points) {
  let max = 2
  let results = []

  if (points.length <= 2) {
    return points.length
  }

  for (let a = 0; a < points.length; a++) {
    for (let b = a + 1; b < points.length; b++) {
      let current = 2
      const slope = (points[a][1] - points[b][1]) / (points[a][0] - points[b][0])
      results.push(slope)

      for (let i = 0; i < points.length; i++) {
        if (i !== a && i !== b) {
          // Vertical, x = something
          if (slope === Infinity || slope === -Infinity) {
            if (points[i][0] === points[a][0]) {
              current++
            }
          // Horizontal, y = something
          } else if (slope === 0) {
            if (points[i][1] === points[a][1]) {
              current++
            }
          // Same point
          } else if (isNaN(slope)) {
            if (points[i][0] === points[a][0] && points[i][1] === points[a][1]) {
              current++
            }
          // Normal, y - y1 = slope * (x - x1)
          } else {
            if (isRoughlyEqual(points[i][1] - points[b][1], slope * (points[i][0] - points[b][0]))) {
              current++
            }
          }
        }
      }

      if (current > max) {
        max = current
      }
    }
  }

  return max
}

function isRoughlyEqual(a, b) {
  return Math.abs(a - b) < 0.000000001
}



console.log(maxPoints([[1,1], [2,2], [3,3]]))
console.log(maxPoints([[1,1], [3,2], [5,3], [4,1], [2,3], [1,4]]))
console.log(maxPoints([[1,1], [1,2]]))
console.log(maxPoints([[2,3],[3,3],[-5,3]]))
console.log(maxPoints([[1,1],[1,1],[1,1]]))

const failed = [[-54,-297],[-36,-222],[3,-2],[30,53],[-5,1],[-36,-222],[0,2],[1,3],[6,-47],[0,4],[2,3],[5,0],[48,128],[24,28],[0,-5],[48,128],[-12,-122],[-54,-297],[-42,-247],[-5,0],[2,4],[0,0],[54,153],[-30,-197],[4,5],[4,3],[-42,-247],[6,-47],[-60,-322],[-4,-2],[-18,-147],[6,-47],[60,178],[30,53],[-5,3],[-42,-247],[2,-2],[12,-22],[24,28],[0,-72],[3,-4],[-60,-322],[48,128],[0,-72],[-5,3],[5,5],[-24,-172],[-48,-272],[36,78],[-3,3]]
console.log(maxPoints(failed))

console.log(maxPoints([[0,0],[94911151,94911150],[94911152,94911151]]))