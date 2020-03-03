/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let open = 0
  let close = 0

  for (char of s) {
    if (char === '(') open++
    if (char === ')') close++
    if (char === '*')
  }

  return ???
}

// console.log(checkValidString('(*)'))
// console.log(checkValidString('()'))
// console.log(checkValidString(')('))
console.log(checkValidString('((()))'))