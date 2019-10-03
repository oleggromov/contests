'''
Given a sorted array and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.

Input: [1,3,5,6], 5
Output: 2

Input: [1,3,5,6], 2
Output: 1

Input: [1,3,5,6], 7
Output: 4

Input: [1,3,5,6], 0
Output: 0
'''

class Solution:
  def searchInsert(self, nums, target):
    left = -1
    right = len(nums)

    while right - left > 1:
      middle = (left + right) // 2
      if target > nums[middle]:
        left = middle
      else:
        right = middle

    return right


sol = Solution()
assert sol.searchInsert([1,3,5,6], 5) == 2
assert sol.searchInsert([1,3,5,6], 2) == 1
assert sol.searchInsert([1,3,5,6], 7) == 4
assert sol.searchInsert([1,3,5,6], 0) == 0