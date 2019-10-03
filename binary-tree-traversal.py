
from collections import deque

class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

'''
DFS is done easily with recursion.
BFS is fine in iterative manner / with a queue.

Inspired by: https://www.youtube.com/watch?v=IozGo2kwRYE
'''

# DFS
def in_order(root, visit):
  if not root:
    return

  in_order(root.left, visit)
  visit(root)
  in_order(root.right, visit)

# DFS iterative / stack
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

bfs_tree = TreeNode(1)
bfs_tree.left = TreeNode(2)
bfs_tree.right = TreeNode(3)
bfs_tree.left.left = TreeNode(4)
bfs_tree.left.right = TreeNode(5)
bfs_tree.right.right = TreeNode(6)
bfs_tree.left.right.left = TreeNode(7)
bfs_tree.right.right.left = TreeNode(8)

# BFS / iterative - level-order
def level_order(root, visit):
  if not root:
    return

  queue = deque([root])
  while len(queue):
    next = queue.popleft()
    visit(next)

    if next.left:
      queue.append(next.left)
    if next.right:
      queue.append(next.right)

'''
This is incorrect!
Isn't BFS traversal
'''
# def level_order_recursive(root, visit):
#   if not root:
#     return

#   visit(root)

#   if root.left:
#     level_order_recursive(root.left, visit)
#   if root.right:
#     level_order_recursive(root.right, visit)

print('\nLevel-order BFS iterative / queue:')
level_order(bfs_tree, print_node)

# print('\nLevel-order BFS recursive:')
# level_order_recursive(bfs_tree, print_node)