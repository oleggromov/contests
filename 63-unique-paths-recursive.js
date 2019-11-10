const single = [[0,0,0,0]]
const noPath = [[0,1,0]]
const example = [
  [0,0,0],
  [0,1,0],
  [0,0,0]
]

function uniquePathsWithObstacles(grid) {
  let paths = 0

  if (grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) {
    return 0
  }

  const fastFind = memoize(find)

  function find(x, y) {
    if (x === grid[0].length - 1 && y === grid.length - 1) {
      paths += 1
      return
    }

    if (x + 1 < grid[0].length && grid[y][x + 1] !== 1) {
      fastFind(x + 1, y)
    }

    if (y + 1 < grid.length && grid[y + 1][x] !== 1) {
      fastFind(x, y + 1)
    }
  }

  fastFind(0,0)
  return paths
}

function memoize(fn) {
  const cache = {}
  return function(...args) {
    if (!cache[args.join('-')]) {
      cache[args.join('-')] = fn(...args)
    }
    return cache[args.join('-')]
  }
}

// console.log(uniquePathsWithObstacles(single))
// console.log(uniquePathsWithObstacles(noPath))
console.log(uniquePathsWithObstacles(example))

// const tooLarge = [
//   [0,0,0,0,0,0,0,0,1],
//   [0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,1,0],
//   [1,1,1,0,0,0,0,1,0],
//   [0,0,1,0,0,1,0,0,0],
//   [0,0,0,1,0,1,0,0,0],
//   [1,0,1,1,1,0,0,0,0],
// ]

const tooLarge = [[0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],[1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1],[0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0],[1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1],[1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1],[0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1],[1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0]]

// console.log(uniquePathsWithObstacles(tooLarge))

const empty3x4 = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]

const obstacles3x4 = [
  [0,0,1,0],
  [0,1,0,0],
  [0,0,0,0],
]

console.log(uniquePathsWithObstacles(empty3x4))
console.log(uniquePathsWithObstacles(obstacles3x4))