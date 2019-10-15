/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = []
  traverse(root, value => result.push(value))
  return result
}

var inorderTraversalItertive = function(root) {
  const result = []
  let current = root
  const stack = []

  while (1) {
    if (current) {
      stack.push(current)
      current = current.left
    } else if (stack.length) {
      current = stack.pop()
      result.push(current.val)
      current = current.right
    } else {
      break
    }
  }

  return result
}

function traverse(root, cb) {
  if (!root) {
    return
  }

  traverse(root.left, cb)
  cb(root.val)
  traverse(root.right, cb)
}
