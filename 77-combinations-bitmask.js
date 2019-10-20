/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = []

  for (let i = 0; i < 1 << n; i++) {
    const mask = bits(i)
    if (mask === k) {
      result.push(numbers(i))
    }
  }

  return result
}

function numbers(mask) {
  const result = []

  for (let i = 0; mask > 0; mask >>= 1, i++) {
    if (mask & 1) {
      result.push(i + 1)
    }
  }

  return result
}

function bits(number) {
  let bits = 0
  while (number) {
    if (number & 1) {
      bits++
    }
    number = number >> 1
  }
  return bits
}

console.log(combine(10, 7))