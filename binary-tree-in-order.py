class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

def in_order(root, visit):
  if not root:
    return

  in_order(root.left, visit)
  visit(root)
  in_order(root.right, visit)

example_tree = TreeNode('F')
example_tree.left = TreeNode('B')
example_tree.left.left = TreeNode('A')
example_tree.left.right = TreeNode('D')
example_tree.left.right.left = TreeNode('C')
example_tree.left.right.right = TreeNode('E')
example_tree.right = TreeNode('G')
example_tree.right.right = TreeNode('I')
example_tree.right.right.left = TreeNode('H')

values = []
in_order(example_tree, lambda node: values.append(node.val))

print(values)
