/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  const result = []
  let carry = false

  if (a.length > b.length) {
    b = b.padStart(a.length, '0')
  } else {
    a = a.padStart(b.length, '0')
  }

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = Number(a[i]) + Number(b[i]) + (carry ? 1 : 0)

    if (sum < 2) {
      result.push(String(sum))
    } else if (sum === 2) {
      result.push('0')
    } else {
      result.push('1')
    }
    carry = sum > 1
  }

  if (carry) {
    result.push('1')
  }

  return result.reverse().join('')
}

console.log(addBinary('111', '111'))