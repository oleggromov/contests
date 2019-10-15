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

function traverse(root, cb) {
  if (!root) {
    return
  }

  traverse(root.left, cb)
  cb(root.val)
  traverse(root.right, cb)
}
