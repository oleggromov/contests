# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
  def rotateRight(self, head: ListNode, k: int) -> ListNode:
    '''
    Time complexity: O(2n)
    Space complexity: O(1) ??
    '''
    length = self.get_length(head) # O(n)
    if not head or not length:
      return

    k = k % length
    if k == 0:
      return head

    last = head
    index = 0
    to_trim_index = length - 1 - k
    to_trim = None

    while True: # O(n)
      if index == to_trim_index:
        to_trim = last

      index += 1

      if last.next:
        last = last.next
      else:
        break

    new_head = to_trim.next
    last.next = head
    to_trim.next = None

    return new_head

  def get_length(self, head):
    length = 0
    while head:
      length += 1
      head = head.next
    return length
