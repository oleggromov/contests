function uniquePathsWithObstacles(grid) {
  const width = grid[0].length
  const height = grid.length
  const dp = new Array(grid.length).fill(0).map(_ => new Array(width).fill(-1))

  if (height === 1 && width === 1 && grid[0][0] === 0) {
    return 1
  }
  if (grid[0][0] === 1 || grid[height - 1][width - 1] === 1) {
    return 0
  }

  dp[height - 1][width - 1] = 1

  for (let y = height - 1; y >= 0; y--) {
    for (let x = width - 1; x >= 0; x--) {
      if (x === width - 1 && y === height - 1) {
        continue
      }

      if (grid[y][x] === 1) {
        dp[y][x] = 0
      } else {
        dp[y][x] = (x + 1 < width ? dp[y][x + 1] : 0) + (y + 1 < height ? dp[y + 1][x] : 0)
      }
    }
  }

  print(dp)
  return dp[0][0]
}

const obstacles3x4 = [
  [0,0,1,0],
  [0,1,0,0],
  [0,0,0,0],
]

const obstalces =
[
  [0,0],
  [1,1],
  [0,0]
]

function print(grid) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      process.stdout.write(`${grid[y][x]} `)
    }
    process.stdout.write(`\n`)
  }
}

console.log(uniquePathsWithObstacles(obstacles3x4))
console.log(uniquePathsWithObstacles(obstalces))