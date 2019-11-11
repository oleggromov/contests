/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const memoized = memoize(change)

  function change(left, used = 0) {
    if (left === 0) {
      return used
    }

    if (left < 0) {
      return -1
    }

    let min = Infinity
    for (let coin of coins) {
      const option = memoized(left - coin, used + 1)
      if (option !== -1) {
        if (option < min) {
          min = option
        }
      }
    }

    // How to get rid of this ugliness?
    return min === Infinity ? -1 : min
  }

  return memoized(amount)
}

function memoize(fn) {
  const cache = {}
  return function(...args) {
    if (!cache[args.join('/')]) {
      cache[args.join('/')] = fn(...args)
    }

    return cache[args.join('/')]
  }
}

// console.log(coinChange([1,2,5], 11))
console.log(coinChange([1,2,5], 100))
// console.log(coinChange([2], 3))