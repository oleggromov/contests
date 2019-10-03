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

def in_order_iterative(root, visit):
  if not root:
    return

  visited = set()
  stack = [root]
  while len(stack):
    next = stack[-1]

    if next.left and not next.left in visited:
      stack.append(next.left)
      continue

    visit(next)
    visited.add(next)
    stack.pop()

    if next.right and not next.right in visited:
      stack.append(next.right)

example_tree = TreeNode('F')
example_tree.left = TreeNode('B')
example_tree.left.left = TreeNode('A')
example_tree.left.right = TreeNode('D')
example_tree.left.right.left = TreeNode('C')
example_tree.left.right.right = TreeNode('E')
example_tree.right = TreeNode('G')
example_tree.right.right = TreeNode('I')
example_tree.right.right.left = TreeNode('H')

simple_tree = TreeNode('D')
simple_tree.left = TreeNode('B')
simple_tree.left.left = TreeNode('A')
simple_tree.left.right = TreeNode('C')
simple_tree.right = TreeNode('E')

def print_node(node):
  print(node.val, end = ' ')

print('Recursive:')
in_order(example_tree, print_node)
print('\nIterative:')
in_order_iterative(example_tree, print_node)


print('\nRecursive:')
in_order(simple_tree, print_node)
print('\nIterative:')
in_order_iterative(simple_tree, print_node)
