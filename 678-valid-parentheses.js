/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  return check(s, 0, s.length)
}

function check(str, start, finish) {
  // console.log('"' + str.slice(start, finish) + '"', start, finish)
  if (finish - start === 1) {
    return str[start] === '*'
  }

  if (finish - start < 1) {
    return true
  }

  // if (str[start] === ')') {
  //   return false
  // }

  // const count = {
  //   '(': 0,
  //   ')': 0,
  //   '*': 0
  // }
  // count[str[start]]++

  for (let i = start + 1; i < finish; i++) {
    // count[str[i]]++
    // const countMatch = Math.abs(count['('] - count[')']) <= count['*']
    if (/*countMatch &&*/ checkPair(str[start], str[i])) {
      if (check(str, start + 1, i) && check(str, i + 1, finish)) {
        return true
      }
    }
  }

  return false
}

function checkPair(a, b) {
  const open = a === '(' && b === ')' || b === '*'
  const close = a === '*' && b === ')' || b === '*'

  // console.log('pair:', a, b)

  return open || close
}

console.time('validate recursively')
// console.log(checkValidString('((((((((((****)))))'))
console.log(checkValidString('((((((((((((((()))))))))))))))'))
// console.log(checkValidString('(((((((()'))
// console.log(checkValidString(')('))
// console.log(checkValidString("()()((*())"))
// console.log(checkValidString('((((((((((((((((((((((((*))))))))))))))))))))))))'))
// console.log(checkValidString('((((*)))))(((((*)))))(((((*)))))(((((*)))))(((((*)))))(((((*)))))(((((*)))))())))))))))******')) // 105s
// console.log(checkValidString('((((((((((((((((((()))))))))))'))
// console.log(checkValidString("()()((*()()(*()((())()))))(()())))(((()*())))))(())()))((*(())))))()))))())*(())()(()(*))*(*"))
console.log(checkValidString("()(()(*(())()*)(*)))()))*)((()(*(((()())()))()()*)((*)))()))(*)(()()(((()*()()((()))((*((*)()"))
console.log(checkValidString("()*((()(((((*))))((*()((*(())()(**)()()*))((((()**((())((()()(()(()()*)()))(()))))))*(((()()()())()"))
console.timeEnd('validate recursively')