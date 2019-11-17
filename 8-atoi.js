function myAtoi(str) {
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  str = str.trim() // O(n)

  const negative = str[0] === '-'
  // Memory: O(n)
  const digits = []
  // O(n)
  for (let i = negative ? 1 : 0; i < str.length; i++) {
    if (chars.includes(str[i])) {
      digits.push(str[i])
    } else {
      if (!digits.length) {
        return 0
      }
      break
    }
  }

  let result = 0
  // O(n)
  for (let i = digits.length - 1; i >= 0; i--) {
    result += 10 ** (digits.length - i - 1) * chars.indexOf(digits[i])
  }

  return cap(negative ? -result : result)
}

function cap(result) {
  const MAX_INT = 2 ** 31 - 1
  const MIN_INT = -(2 ** 31)

  return result >= 0
    ? result > MAX_INT
      ? MAX_INT
      : result
    : result < MIN_INT
      ? MIN_INT
      : result
}

console.log('42', myAtoi('42'))
console.log('123', myAtoi('123'))
console.log('-123', myAtoi('-123'))
console.log('-123 abc', myAtoi('-123 abc'))
console.log('words and 987', myAtoi('words and 987'))
console.log('-91283472332', myAtoi('-91283472332'))
console.log('91283472332', myAtoi('91283472332'))
console.log('3.14159', myAtoi('3.14159'))