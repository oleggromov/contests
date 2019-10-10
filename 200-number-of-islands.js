/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // Memory: O(n)
  const visited = new Set()
  let islands = 0

  if (!grid.length) {
    return 0
  }

  // Runtime: O(n)
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      // Here we don't visit already visited points
      // so shall be no runtime multiplication.
      for (const [nextY, nextX] of nextMoves(y, x)) {
        // Here we have to check it again so that we don't visit
        // the points marked as visited in exploreSoil.
        if (!visited.has(point(nextY, nextX))) {
          if (isSoil(nextY, nextX)) {
            exploreSoil(nextY, nextX)
            islands += 1
          } else {
            visited.add(point(nextY, nextX))
          }
        }
      }
    }
  }

  function exploreSoil(y, x) {
    const soil = [[y, x]]

    // Runtime: O(island size)
    // Shall not be duplicated because we mark all visited points.
    while (soil.length) {
      const [y, x] = soil.pop()
      visited.add(point(y, x))

      for (const [nextY, nextX] of nextMoves(y, x)) {
        if (isSoil(nextY, nextX)) {
          soil.push([nextY, nextX])
        }
      }
    }
  }

  // A trick to have unique Set values for each point
  // since JS uses strict comparison for Set.has calls.
  function point(y, x) {
    return Symbol.for(`${y},${x}`)
  }

  function isSoil(y, x) {
    // Implicit string to integer conversion
    return grid[y][x] == 1
  }

  function nextMoves(currentY, currentX) {
    const moves = [
      [-1, 0], [1, 0],
      [0, -1], [0, 1],
      [0, 0]
    ]

    return moves
      // O(1)
      .map(([y, x]) => [y + currentY, x + currentX])
      // O(1)
      .filter(isInGrid)
      // O(1)
      .filter(([y, x])=> !visited.has(point(y, x)))
  }

  function isInGrid([y, x]) {
    return y >= 0 && y < grid.length && x >= 0 && x < grid[0].length
  }

  return islands
}


const gridOne = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
]

const gridTwo = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0]
]

const gridThree = [
  [0,1,0,1,0],
  [0,0,1,0,0],
  [0,1,0,1,0],
  [0,0,1,0,0]
]

const gridFour = [
  [0,0,0,0,0],
  [0,1,1,1,0],
  [0,0,0,0,0],
  [0,0,1,0,0]
]

const gridFive = [
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1]
]

const gridSix = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
]

const failed = [
  ["1","1","1"],
  ["1","0","1"],
  ["1","1","1"]
]

const failedTwo = [[1]]

console.log(numIslands(gridOne), 'must be 3')
console.log(numIslands(gridTwo), 'must be 1')
console.log(numIslands(gridThree), 'must be 6')
console.log(numIslands(gridFour), 'must be 2')
console.log(numIslands(gridFive), 'must be 1')
console.log(numIslands(gridSix), 'must be 0')
console.log(numIslands(failed), 'must be 1')
console.log(numIslands(failedTwo), 'must be 1')