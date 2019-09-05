// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0
  let last = null

  for (char of s) {
    if (last && map[last] < map[char]) {
      result -= map[last] * 2
    }
    result += map[char]
    last = char
  }

  return result
}

console.log(romanToInt('XC'))
