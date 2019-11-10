/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Space: O(n)
var isPalindromeSpacious = function(head) {
  const values = []
  while (head) {
      values.push(head.val)
      head = head.next
  }
  return values.join('') === values.reverse().join('')
};

function ListNode(val) {
  this.val = val
  this.next = null
}

const even = new ListNode(1)
even.next = new ListNode(2)
even.next.next = new ListNode(3)
even.next.next.next = new ListNode(2)
even.next.next.next.next = new ListNode(0)
// even.next.next.next.next.next = new ListNode(6)

// Space: O(1)
function isPalindrome(head) {
  let slow = head
  let fast = head

  if (!head || !head.next) {
    return true
  }

  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let prev = slow
  let next = prev.next
  prev.next = null
  while (next) {
    let cur = next
    next = next.next
    cur.next = prev
    prev = cur
  }

  while (head && prev) {
    if (head.val !== prev.val) {
      return false
    }
    head = head.next
    prev = prev.next
  }

  return true
}

function follow(head) {
  while (head) {
    process.stdout.write(`${head.val} → `)
    head = head.next
  }
  console.log()
}

// follow(isPalindrome(even))
console.log(isPalindrome(even))