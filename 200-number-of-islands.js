/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const knownSoil = new Set()
  const water = []
  let islands = 0

  if (!grid.length) {
    return 0
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (!isSoil(y, x)) {
        water.push([y, x])
      }
    }
  }

  if (!water.length) {
    return 1
  } else if (water.length === grid.length * grid[0].length) {
    return 0
  }

  while (water.length) {
    const [y, x] = water.pop()
    for (const [nextY, nextX] of nextMoves(y, x)) {
      if (isSoil(nextY, nextX)) {
        islands += exploreSoil(nextY, nextX)
      }
    }
  }

  function exploreSoil(y, x) {
    if (knownSoil.has(point(y, x))) {
      return 0
    }

    const soil = [[y, x]]

    while (soil.length) {
      const [y, x] = soil.pop()
      knownSoil.add(point(y, x))

      for (const [nextY, nextX] of nextMoves(y, x)) {
        if (isSoil(nextY, nextX)) {
          soil.push([nextY, nextX])
        }
      }
    }

    return 1
  }

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
      [0, -1], [0, 1]
    ]

    return moves
      .map(([y, x]) => [y + currentY, x + currentX])
      .filter(isInGrid)
      .filter(([y, x])=> !knownSoil.has(point(y, x)))
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

console.log(numIslands(gridOne))
console.log(numIslands(gridTwo))
console.log(numIslands(gridThree))
console.log(numIslands(gridFour))
console.log(numIslands(gridFive))
console.log(numIslands(gridSix))
console.log(numIslands(failed))