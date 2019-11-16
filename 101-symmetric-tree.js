function isSymmetric(root) {
  if (!root || (!root.left && !root.right)) {
    return true
  }

  const stack = [[root]]
  while (stack.length) {
    const layer = stack.pop()
    if (!isPalindrome(layer.map(n => n ? n.val : 'N'))) {
      return false
    }

    const next = []
    for (let node of layer) {
      if (node) {
        next.push(node.left, node.right)
      }
    }
    if (next.length) {
      stack.push(next)
    }
  }
  return true
}

function isPalindrome(list) {
  return list.join('') === list.reverse().join('')
}
