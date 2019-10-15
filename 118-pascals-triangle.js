/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows) {
    return []
  }

  const rows = new Array(numRows)
  rows[0] = [1]

  // Time complexity: O(m*n) where m - number of rows
  // and n - number of numbers in each row.
  for (let i = 1; i < numRows; i++) {
    const prev = rows[i - 1]
    // This made the difference in runtime.
    const prevLength = prev.length
    const next = new Array(prevLength + 1)

    for (let j = 0; j < prevLength + 1; j++) {
      next[j] = (prev[j - 1] || 0) + (prev[j] || 0)
    }

    rows[i] = next
  }

  return rows
}


function prettyPrint(rows) {
  let maxNumbers = rows[rows.length - 1].length
  let numberLength = rows[rows.length - 1][Math.floor(maxNumbers / 2)].toString().length
  let totalLength = maxNumbers * numberLength + (maxNumbers - 1) * 3

  function padding(str, len) {
    str = str.toString()
    const size = Math.ceil((len - str.length) / 2)
    const side = (size) => size ? new Array(size).join(' ') : ''
    return side(size) + str + side(size + 1)
  }

  for (let i = 0; i < rows.length; i++) {
    const numbers = padding(rows[i].map(num => padding(num, numberLength)).join('  '), totalLength)
    console.log(numbers)
  }
}

prettyPrint(generate(7))
// prettyPrint(generate(10))