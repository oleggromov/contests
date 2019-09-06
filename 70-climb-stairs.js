const map = {
  1: 1,
  2: 2
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (!map[n]) {
    map[n] = climbStairs(n - 1) + climbStairs(n - 2)
  }
  return map[n]
};

console.log('result', climbStairs(45))
