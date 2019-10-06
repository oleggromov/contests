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
  Space complexity: O(1)
  '''
  def reverseList(self, head):
    prev = None
    current = head
    next = None

    while current:
      next = current.next
      current.next = prev
      prev = current
      current = next

    return prev

l = ListNode(1)
l.next = ListNode(2)
l.next.next = ListNode(3)
l.next.next.next = ListNode(4)

s = Solution()
print(s.reverseList(l))
