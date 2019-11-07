/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }

  // Memory: O(n)
  const stack = [[root]]
  let depth = 0

  // Time: O(n)
  while (stack.length) {
    const children = stack.pop()
    if (children.length) {
      const next = []
      for (let child of children) {
        if (child.left) next.push(child.left)
        if (child.right) next.push(child.right)
      }
      stack.push(next)
      depth++
    }
  }

  return depth
}