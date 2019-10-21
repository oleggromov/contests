/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length > haystack.length) {
    return -1
  }

  if (needle.length === 0) {
    return 0
  }

  // O(n * m)
  for (let hay = 0; hay < haystack.length; hay++) {
    if (haystack[hay] === needle[0]) {
      for (let nee = 1; nee < needle.length + 1; nee++) {
        if (nee === needle.length) {
          return hay
        } else {
          if (needle[nee] !== haystack[hay + nee]) {
            break
          }
        }
      }
    }
  }

  return -1
}