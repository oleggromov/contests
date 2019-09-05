var mergeTwoLists = function(l1, l2) {
  const fakeHead = new ListNode(null)
  let current = fakeHead

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1
      current = current.next
      l1 = l1.next
    }

    if (l1 && l2.val <= l1.val) {
      current.next = l2
      current = current.next
      l2 = l2.next
    }
  }

  if (l1) current.next = l1
  if (l2) current.next = l2

  return fakeHead.next
}
