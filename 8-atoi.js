function myAtoi(str) {
  const ZERO_CODE = 48
  str = str.trim()

  // O(n)
  const lastIndex = getLastIndex(str)

  let result = 0
  // O(n)
  const negative = str[0] === '-'
  const positive = str[0] === '+'
  for (let i = negative || positive ? 1 : 0; i < lastIndex; i++) {
    result += 10 ** (lastIndex - i - 1) * (str.charCodeAt(i) - ZERO_CODE)
  }

  return cap(negative ? -result : result)
}

function getLastIndex(str) {
  const valid = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '+']
  for (let i = 0; i < str.length; i++) {
    if (!valid.includes(str[i])) {
      return i
    }
  }
  return str.length
}

function cap(result) {
  const MAX_INT = 2 ** 31 - 1
  const MIN_INT = -(2 ** 31)

  if (result > MAX_INT) {
    return MAX_INT
  }

  if (result < MIN_INT) {
    return MIN_INT
  }

  return result
}

console.log('42', myAtoi('42'))
console.log('123', myAtoi('123'))
console.log('-123', myAtoi('-123'))
console.log('+123', myAtoi('+123'))
console.log('-123 abc', myAtoi('-123 abc'))
console.log('words and 987', myAtoi('words and 987'))
console.log('-91283472332', myAtoi('-91283472332'))
console.log('91283472332', myAtoi('91283472332'))
console.log('3.14159', myAtoi('3.14159'))