# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class BSTIterator:
  def __init__(self, root):

  def next(self):
    """
    @return the next smallest number
    """

   def hasNext(self):
    """
    @return whether we have a next smallest number
    """



# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

example_tree = TreeNode('F')
example_tree.left = TreeNode('B')
example_tree.left.left = TreeNode('A')
example_tree.left.right = TreeNode('D')
example_tree.left.right.left = TreeNode('C')
example_tree.left.right.right = TreeNode('E')
example_tree.right = TreeNode('G')
example_tree.right.right = TreeNode('I')
example_tree.right.right.left = TreeNode('H')

tree_iterator = BSTIterator(example_tree)
assert tree_iterator.hasNext() == True
assert tree_iterator.next() == 'A'
assert tree_iterator.next() == 'B'
assert tree_iterator.next() == 'C'
assert tree_iterator.next() == 'D'
assert tree_iterator.next() == 'E'
assert tree_iterator.next() == 'F'
assert tree_iterator.next() == 'G'
assert tree_iterator.next() == 'H'
assert tree_iterator.next() == 'I'
assert tree_iterator.hasNext() == False