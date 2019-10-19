/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = new Map()
  const numbers = range(n)

  if (n === k) {
    return [numbers]
  }

  function comb(remaining, used, depth) {
    if (depth === 1) {
      for (number of remaining) {
        const combination = [ ...used, number ].sort()
        const key = genKey(combination)

        if (!result.has(key)) {
          result.set(key, combination)
        }
      }
    } else {
      for (number of remaining) {
        comb(remaining.filter(val => val !== number), [...used, number], depth - 1)
      }
    }
  }

  comb(numbers, [], k)

  return Array.from(result.values())
}

function genKey(arr) {
  return arr.join(',')
}

function range(n) {
  const numbers = new Array(n)
  for (let i = 1; i < n + 1; i++) {
    numbers[i - 1] = i
  }
  return numbers
}

console.log(combine(1, 1))