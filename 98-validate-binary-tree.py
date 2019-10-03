# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
  '''
  The best algorithm I could find is using in-order (left, visit, right)
  traversal and comparing upon visit the previously saved value to the
  current one.

  If current > prev, we're good. Otherwise the tree isn't valid.

  https://www.youtube.com/watch?v=5dySuyZf9Qg - this was very helpful.

  This can be marginally improved by returning False when we first
  encounter current > prev == False but that would require blending
  in_order with the isValidBST method, which isn't great.
  '''
  def isValidBST(self, root):
    self.prev = float('-inf')
    self.is_valid = True

    in_order(root, self.visit)

    return self.is_valid

  def visit(self, node):
    self.is_valid = node.val > self.prev and self.is_valid
    self.prev = node.val

def in_order(root, visit):
  if not root:
    return

  in_order(root.left, visit)
  visit(root)
  in_order(root.right, visit)
