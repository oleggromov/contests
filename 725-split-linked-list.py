# https://leetcode.com/problems/split-linked-list-in-parts/

# Definition for singly-linked list.
class ListNode:
  def __init__(self, x):
    self.val = x
    self.next = None

  def __repr__(self):
    return f'<{self.val}>'

class Solution:
  '''
  Time complexity: O(n)
  Space complexity: O(n)
  '''
  def splitListToParts(self, root, k):
    list_len = length(root)

    if k > list_len:
      chunk_size = 1
      large_chunks = 0
    else:
      chunk_size, large_chunks = divmod(list_len, k)

    chunks = [None] * k

    chunk_index = 0
    current_index = 0
    prev = None

    while root:
      max_length = chunk_size
      if chunk_index < large_chunks:
        max_length += 1

      if current_index < max_length:
        if current_index == 0:
          chunks[chunk_index] = root
        current_index += 1
        prev = root
        root = root.next
      else:
        prev.next = None
        chunk_index += 1
        current_index = 0

    return chunks

def length(root):
  result = 0
  while root:
    result += 1
    root = root.next
  return result

l = ListNode(1)
l.next = ListNode(2)
l.next.next = ListNode(3)
l.next.next.next = ListNode(4)

s = Solution()
print(s.splitListToParts(l, 5))