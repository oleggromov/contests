function printMatrix(grid) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      process.stdout.write(`${grid[y][x]} `)
    }
    process.stdout.write(`\n`)
  }
}

module.exports = printMatrix