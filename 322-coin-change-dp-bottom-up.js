/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      if (coin > i) {
        continue
      }

      dp[i] = Math.min(dp[i - coin] + 1, dp[i])
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

// Let's optimize space...



console.log(coinChange([1,2,5], 11))
console.log(coinChange([5], 11))