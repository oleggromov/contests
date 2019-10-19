/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = new Map()

  let next = new Array(k)

  if (n === k) {
    for (let i = 0; i < k; i++) {
      next[i] = i + 1
    }
    return [next]
  }

  for (let i = 0; i < k; i++) {
    next[i] = 1
  }
  pushUnique(next)

  function pushUnique(value) {
    if (value.length === Array.from(new Set(value)).length) {
      const key = value.slice().sort().join('-')
      if (!result.has(key)) {
        result.set(key, value.slice().reverse())
      }
    }
  }

  for (let i = 1; i < Math.pow(n, k); i++) {
    for (let digit = 0; digit < k; digit++) {
      if (next[digit] < n) {
        next[digit]++
        break
      } else {
        next[digit] = 1
      }
    }

    pushUnique(next)
  }

  return Array.from(result.values())
}

// TIME LIMIT EXCEEDED on LeetCode
console.log(combine(9, 8))