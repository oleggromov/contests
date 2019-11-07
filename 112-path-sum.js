function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

function hasPathSum(root, sum) {
  if (!root) {
    return false
  }

  if (!root.left && !root.right) {
    return root.val === sum
  }

  sum -= root.val

  return Boolean(root.left && hasPathSum(root.left, sum) || root.right && hasPathSum(root.right, sum))
}

const root = new TreeNode(5)
root.left = new TreeNode(8)
root.right = new TreeNode(4)
root.left.left = new TreeNode(13)
root.left.right = new TreeNode(4)
root.left.right.left = new TreeNode(1)
root.right.right = new TreeNode(11)
root.right.right.left = new TreeNode(7)
root.right.right.right = new TreeNode(2)

const test2 = new TreeNode(1)
test2.left = new TreeNode(2)

console.log(hasPathSum(root, 22))
console.log(hasPathSum(null, 0))
console.log(hasPathSum(test2, 1))