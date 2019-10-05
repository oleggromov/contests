# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
  def deleteDuplicates(self, head: ListNode) -> ListNode:
    if not head:
      return

    current = head.next
    prev = head

    while current:
      if current.val == prev.val:
        prev.next = current.next
      else:
        prev = current
      current = current.next

    return head
