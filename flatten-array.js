// Read this too: https://ammarmian.wordpress.com/2016/05/09/recursive-solutions-to-flattening-an-array/

const deep = [0, [1,2,[3,4,5],6,null], 7,8,['nine', [10, [11, [12], 13]]], 14]

function flatten_recursive(arr) {
  if (!Array.isArray(arr)) {
    return arr
  }
  return [].concat(...arr.map(flatten_recursive))
}

function flatten_iterative(arr) {
  // Memory: O(n)
  const result = []
  // O(n)
  // Memory: O(n)
  const stack = [...arr]

  // O(~n)
  while (stack.length) {
    const next = stack.pop()
    if (Array.isArray(next)) {
      // Together with this
      // Time: O(next)
      // Memory: must be O(next)
      stack.push(...next)
    } else {
      result.push(next)
    }
  }

  // O(n)
  // This is better than unshifting each time
  return result.reverse()
}

// console.log(flatten_recursive(deep))
// console.log(flatten_recursive([[0], 1,2,3, [4]]))

console.log(flatten_iterative(deep))
console.log(flatten_iterative([]))