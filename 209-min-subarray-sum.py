'''
Given an array of n positive integers and a positive integer s,
find the minimal length of a contiguous subarray of which the sum ≥ s.
If there isn't one, return 0 instead.
'''
class Solution:
  def minSubArrayLen(self, s, nums):
    running_sum = self.running_sum(nums)
    min_length = float('inf')
    min_sum = float('inf')

    # print(f'NUMS={nums} S={s}')
    # print(f'R_SU={running_sum}')

    # Time: O(n)
    shift = 0
    subtract = 0
    while shift < len(running_sum):
      # Time: O(log n)
      if shift > 0:
        subtract = running_sum[shift - 1]

      index, sum = self.search_gt(running_sum, s, shift, subtract)
      # print(f'shift={shift}, subtract={subtract}, s={s}, index={index}, sum={sum}')
      if index > -1 and index - shift + 1 <= min_length:
        min_sum = sum
        min_length = index - shift + 1

      shift += 1

    if min_length == float('inf'):
      return 0

    return min_length

  def search_gt(self, nums, target, left=0, subtract=0):
    left = left
    right = len(nums) - 1

    # O(log n)
    while right - left > 1:
      middle = left + (right - left) // 2
      if target > nums[middle] - subtract:
        left = middle
      else:
        right = middle

    if nums[left] - subtract >= target:
      return left, nums[left] - subtract
    elif nums[right] - subtract >= target:
      return right, nums[right] - subtract

    return -1, None

  def running_sum(self, nums):
    running_sum = []

    # Time/memory: O(n)
    for i, num in enumerate(nums):
      running_sum.append(num)
      if i - 1 >= 0:
        running_sum[i] += running_sum[i - 1]

    return running_sum

s = Solution()
# print(s.minSubArrayLen(5, [1,3,7,0,8]))
# print(s.minSubArrayLen(100, [1,3,7,0,8]))
print(s.minSubArrayLen(6, [2,3,1,2,4,3]))

# print(s.search_gt([1,4,11,11,19], 1))
# print(s.search_gt([1,4,11,11,19], 11))
# print(s.search_gt([1,4,11,11,19], 10))
