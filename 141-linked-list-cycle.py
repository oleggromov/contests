# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
  def hasCycle(self, head: ListNode) -> bool:
    return detect_cycle(head)

def detect_cycle(head):
  if not head:
    return False

  slow = head
  fast = slow.next

  while slow and fast:
    if slow == fast:
      return True

    slow = slow.next
    if fast.next and fast.next.next:
      fast = fast.next.next
    else:
      fast = None

  return False


def detect_cycle_bruteforce(head):
  if not head:
    return

  # Using set instead of a list here reduced runtime
  # from ~1200ms to ~60ms, according to Leetcode.
  visited = set()

  while head.next:
    if head.next in visited:
      return True

    visited.add(head.next)
    head = head.next

  return False
