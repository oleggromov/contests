/**
 * @param {number[]} arr
 * @return {number}
 */
function trap(arr) {
  let amount = 0
  let largest = -Infinity

  // Outer loop: O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
    } else {
      // Inner loop: O(n)
      amount += height(arr, i, largest)
    }
  }

  return amount
}

function height(arr, start, threshold) {
  let highest = start

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] >= threshold) {
      return threshold - arr[start]
    }

    if (arr[i] > arr[highest]) {
      highest = i
    }
  }

  return arr[highest] > arr[start] ? arr[highest] - arr[start] : 0
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 'must be 6')
console.log(trap([4,2,3]), 'must be 1')
console.log(trap([5,4,1,2]), 'must be 1')
console.log(trap([4,2,0,3,2,5]), 'must be 9')