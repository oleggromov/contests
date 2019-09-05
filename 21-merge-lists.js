function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  const fakeHead = new ListNode(null)
  let current = fakeHead

  while (l1 || l2) {
    if ((l1 && l2 && l1.val <= l2.val) || !l2) {
      current.next = l1
      current = current.next
      l1 = l1.next
    } else if ((l2 && l1 && l2.val <= l1.val) || !l1) {
      current.next = l2
      current = current.next
      l2 = l2.next
    }
  }

  return fakeHead.next
}

const list1 = new ListNode(0)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)
list1.next.next.next = new ListNode(5)
list1.next.next.next.next = new ListNode(6)


const list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)
list2.next.next.next = new ListNode(5)
list2.next.next.next.next = new ListNode(6)

function renderList(list) {
  const result = []
  let current = list
  while (current) {
    result.push(current.val)
    current = current.next
  }
  console.log(JSON.stringify(result))
  return result
}

renderList(mergeTwoLists(list1, list2))
