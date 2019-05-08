/**
 * https://leetcode.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const fakeHead = {}

    let current = fakeHead
    let carry = 0

    while (carry > 0 || l1 || l2) {
        let val = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry
        carry = Math.floor(val / 10)
        val = val % 10

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next

        current.next = { val }
        current = current.next
    }

    return fakeHead.next
}
