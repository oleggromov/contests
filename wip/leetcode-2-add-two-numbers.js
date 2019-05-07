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
    const resultHead = { val: (l1.val || 0) + (l2.val || 0) }
    let current = resultHead
    let next = resultHead.val
    l1 = l1.next
    l2 = l2.next

    while (next > 0 || l1 || l2) {
        let val = next
        if (val > 9) {
            val = val - 10
            next = 1
        } else {
            next = 0
        }

        if (l1) {
            next += l1.val
            l1 = l1.next
        }

        if (l2) {
            next += l2.val
            l2 = l2.next
        }

        current.val = val
        if (next > 0 || l1 || l2) {
            current.next = {}
            current = current.next
        }
    }

    return resultHead
};
