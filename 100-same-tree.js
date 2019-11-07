/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const pathA = getPath(p)
  const pathB = getPath(q)

  if (pathA.length !== pathB.length) {
    return false
  }

  for (let i = 0; i < pathA.length; i++) {
    if (pathA[i] !== pathB[i]) {
      return false
    }
  }

  return true
}

// Time: O(n)
// Space: O(n)
function getPath(root) {
  const path = []

  function traverse(root) {
    if (!root) return
    path.push(root.val)
    path.push(root.left ? root.left.val : null)
    path.push(root.right ? root.right.val : null)
    traverse(root.left)
    traverse(root.right)
  }

  traverse(root)

  return path
}