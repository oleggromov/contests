/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = ''
  let index = 0

  while (true) {
    let temp = strs[0] && strs[0][index]

    for (let str of strs) {
      if (temp !== str[index]) {
        temp = null
        break
      }
    }

    if (!temp) break

    index++
    prefix += temp
  }

  return prefix
}

console.log(longestCommonPrefix(['flower','floss','flight']))
console.log(longestCommonPrefix(['','b']))
console.log(longestCommonPrefix(['']))
console.log(longestCommonPrefix(['', '']))
console.log(longestCommonPrefix([]))
