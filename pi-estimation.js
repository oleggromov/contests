// https://programmers.blogoverflow.com/2012/08/20-controversial-programming-opinions/
// #18
function pi(precision = 1000000) {
  let factor = 1
  let subtract = true
  let next = 3

  while (precision > 0) {
    if (subtract) {
      factor -= 1 / next
    } else {
      factor += 1 / next
    }

    next += 2
    subtract = !subtract
    precision--
  }

  return 4 * factor
}

function piDecimal(points = 0) {
  const accuracy = Math.pow(10, -(points + 1))
  let prevPi = 3
  let pi = 4
  let denumerator = 3
  let factor = 1
  let subtract = true
  let loops = 0

  while (Math.abs(pi - prevPi) > accuracy) {
    prevPi = pi
    if (subtract) {
      factor -= 1 / denumerator
    } else {
      factor += 1 / denumerator
    }
    pi = 4 * factor

    subtract = !subtract
    denumerator += 2
    loops++
  }

  return [pi.toFixed(points), loops]
}

console.log(0, piDecimal())
console.log(2, piDecimal(2))
console.log(5, piDecimal(5))
console.log(6, piDecimal(6))
console.log(7, piDecimal(7))
console.log(8, piDecimal(8))