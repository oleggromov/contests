function lengthOfLongestSubstring(str) {
  let longest = 0
  for (let i = 0; i < str.length; i++) {
    const encountered = new Set()
    for (let j = i; j < str.length; j++) {
      if (encountered.has(str[j])) {
        break
      }
      encountered.add(str[j])
    }
    longest = Math.max(longest, encountered.size)
  }
  return longest
}

console.log(lengthOfLongestSubstring('au'))
console.log(lengthOfLongestSubstring(' '))
console.log(lengthOfLongestSubstring('ababc'))