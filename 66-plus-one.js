/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = true
  let next = digits.length - 1

  // This is redundant but makes the solution a bit faster.
  if (digits[next] + 1 > 9) {
    while (carry) {
      if (next > -1) {
        if (digits[next] + 1 > 9) {
          digits[next] = 0
          next--
        } else {
          digits[next] += 1
          carry = false
        }
      } else {
        digits.unshift(1)
        carry = false
      }
    }
  // This is redundant but makes the solution a bit faster.
  } else {
    digits[next] += 1
  }

  return digits
}