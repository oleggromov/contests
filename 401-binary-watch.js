/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(on) {
  const result = []

  if (on === 0) {
    return ['0:00']
  }

  for (let i = 0; i < 1 << 10; i++) {
    if (bits(i) === on) {
      const h = hours(i)
      const m = minutes(i)

      if (h < 12 && m < 60) {
        result.push(`${h}:${String(m).padStart(2, '0')}`)
      }
    }
  }

  return result
}

function hours(num) {
  const mask = 15 << 6 // 960
  return (num & mask) >> 6
}

function minutes(num) {
  const mask = 63
  return num & mask
}

function bits(num) {
  let bits = 0
  while (num) {
    if (num & 1) {
      bits++
    }
    num >>= 1
  }
  return bits
}

console.log(readBinaryWatch(7))
